// Convert high fidelity Figma references to project modules. No screenshot is an app asset.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
const dir='design-source',out='src/screens',assetDir='public/assets';
await fs.mkdir(out,{recursive:true});await fs.mkdir(assetDir,{recursive:true});
const files=(await fs.readdir(dir)).filter(f=>f.endsWith('.txt'));
const sources=new Map();const urls=new Set();
for(const file of files){const raw=await fs.readFile(path.join(dir,file),'utf8');
 if(!raw.includes('export default function')&&!raw.includes('function Button('))continue;
 let code=raw.split('\nSUPER CRITICAL:')[0].trim();
 if(!code.includes('export default'))code+='\nexport default Button;';
 if(['5049-41224.txt','5049-41246.txt'].includes(file))code=code.replace('className?: string;','className?: string; label?: string;').replace('Button({ className,','Button({ className, label = "Thông tin",').replace(/\n        Thông tin\n/g,'\n        {label}\n');
 for(const m of code.matchAll(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/[\w.-]+/g))urls.add(m[0]);
 sources.set(file.replace('.txt',''),code);
}
const saved=JSON.parse(await fs.readFile('design-source/assets.json','utf8').catch(()=>'{}'));
const list=[...urls];let cursor=0;
const failures=[];
await Promise.all(Array.from({length:5},async()=>{while(cursor<list.length){const url=list[cursor++];if(saved[url]){try{await fs.access(assetDir+'/'+saved[url]);continue;}catch{}}
 const temp=assetDir+'/'+url.split('/').pop();
 let bytes;for(let attempt=0;attempt<4;attempt++){try{await exec('curl',['-f','-L','--retry','4','--retry-delay','2','--max-time','120','-sS',url,'-o',temp]);bytes=await fs.readFile(temp);if(bytes.length)break;}catch(e){if(attempt===3)console.error(e.message);}await new Promise(r=>setTimeout(r,3000));}
 if(!bytes?.length){failures.push(url);continue;}
 const ext=path.extname(temp);const dest=crypto.createHash('sha256').update(bytes).digest('hex').slice(0,24)+ext;
 await fs.rename(temp,assetDir+'/'+dest);saved[url]=dest;
}}));
await fs.writeFile('design-source/assets.json',JSON.stringify(saved,null,2));
if(failures.length)throw Error('Invalid source assets: '+failures.join(', '));
const bg=sources.get('5431-77309').match(/const imgMuseumPage = "([^"]+)"/)[1];
const icon=sources.get('5749-27213').match(/const imgLogoapp25 = "([^"]+)"/)[1];
await fs.copyFile(assetDir+'/'+saved[icon],assetDir+'/app-icon.png');
for(const [id,raw]of sources){let code=raw.replace(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/[\w.-]+/g,url=>'/das-mobile/assets/'+saved[url]);
 // Use the project's supported display family and flex syntax, preserving design measurements.
 code=code.replaceAll('flex-[1_0_0]','flex-1').replaceAll('font-[590]','font-semibold');
 await fs.writeFile(`${out}/${id}.tsx`,code+'\n');
}
const split=JSON.parse(await fs.readFile(dir+'/split-layers.json','utf8'));
const aliases={'5853:95898':'5675:37568','5853:107642':'5675:37568','5867:110840':'5675:37568'};
// Identical locked collection rows are composed from their exact detailed source layers.
await fs.writeFile(out+'/5675-37568.tsx',`import Row1 from './5675-37570';import Row2 from './5675-37573';import Row3 from './5675-37576';import Pagination from './5675-37579';export default function CollectionList(){return <div style={{position:'relative',width:'100%',height:'100%'}}><div style={{position:'absolute',left:34.5,top:24,width:308,height:576}}>{[Row1,Row2,Row3].map((Row,i)=><div key={i} style={{position:'absolute',left:0,top:i*196,width:308,height:184}}><Row/></div>)}</div><div style={{position:'absolute',left:28.5,top:635,width:320,height:40}}><Pagination/></div></div>}`);
for(const s of split){const imports=[];const layers=[];for(const [i,c]of s.children.entries()){if(!c.visible)continue;const id=aliases[c.id]||c.id;imports.push(`import Layer${i} from './${id.replace(':','-')}';`);layers.push(`<div data-node-id="${c.id}" data-name="${c.name}" style={{position:'absolute',left:${c.x},top:${c.y},width:${c.width},height:${c.height}}}><Layer${i}/></div>`);}
 await fs.writeFile(out+'/'+s.id.replace(':','-')+'.tsx',imports.join('\n')+`\nexport default function ComposedScreen(){return <div data-node-id="${s.id}" style={{position:'relative',width:'100%',height:'100%'}}><img alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} src="/das-mobile/assets/${saved[bg]}"/>${layers.join('')}</div>}`);
}
const graph=JSON.parse(await fs.readFile(dir+'/flows.json','utf8'));
await fs.writeFile('src/catalog.js',`export const screens=${JSON.stringify(graph)};\nexport const modules={${graph.map(s=>`'${s.id}':()=>import('./screens/${s.id.replace(':','-')}.tsx')`).join(',')}};\n`);
console.log(`Prepared ${graph.length} screens; ${list.length} source assets, ${new Set(Object.values(saved)).size} local files.`);

