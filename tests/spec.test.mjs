import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const screens=JSON.parse(fs.readFileSync('design-source/flows.json','utf8'));
test('all six separate entry points and 70 source screens exist',()=>{assert.equal(screens.length,70);for(const id of ['5749:27213','5431:74963','5431:77309','6123:92190','5853:95894','5955:35421'])assert(screens.some(x=>x.id===id));});
test('all source transitions carry timing and no negative delays',()=>{for(const s of screens)for(const l of s.links){if(l.a.transition)assert(l.a.transition.duration>=0);if(l.t.type==='AFTER_TIMEOUT')assert(l.t.timeout>=0);}});
test('generated runtime uses local assets',()=>{for(const file of fs.readdirSync('src/screens')){const s=fs.readFileSync('src/screens/'+file,'utf8');assert(!s.includes('https://www.figma.com/api/mcp/asset/'),file);}});
test('video end events follow Figma destinations',()=>{assert.equal(screens.find(s=>s.id==='5431:48897').links[0].a.to,'5853:95894');assert.equal(screens.find(s=>s.id==='5853:94667').links[0].a.to,'5431:77309');});
