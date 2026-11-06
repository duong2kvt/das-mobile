import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('public/assets');
http.createServer((req,res)=>{
 if(req.url==='/'){res.setHeader('Content-Type','text/html; charset=utf-8');res.end('<html><body style="background:#222;color:white"><label>Video <select onchange="document.querySelector(\'video\').src=this.value"><option value="/reward.mp4">Reward</option><option value="/reward-ticket.mp4">Reward ticket</option></select></label><br><video style="height:85vh" src="/reward.mp4" controls></video></body></html>');return;}
 const f=path.join(root,path.basename(req.url));if(!fs.existsSync(f)){res.writeHead(404);res.end();return;} const stat=fs.statSync(f);const range=req.headers.range;res.setHeader('Content-Type','video/mp4');res.setHeader('Accept-Ranges','bytes');if(range){const [a,b]=range.replace('bytes=','').split('-');const start=+a,end=b?+b:stat.size-1;res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1});fs.createReadStream(f,{start,end}).pipe(res);}else{res.setHeader('Content-Length',stat.size);fs.createReadStream(f).pipe(res);}
}).listen(4179,'127.0.0.1');
