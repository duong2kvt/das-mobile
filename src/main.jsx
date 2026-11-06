import React,{useState,useEffect,useLayoutEffect,useRef,lazy,Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {screens,modules} from './catalog';
import regions from '../design-source/hotspots.json';
import 'virtual:uno.css';
import './style.css';
import NeutralButton from './screens/5049-41224';
import AccentButton from './screens/5049-41246';

const flows=[['onboarding','Bắt đầu','5749:27213'],['tutorial','Hướng dẫn','5431:74963'],['museum','Bảo tàng','5431:77309'],['scan','Săn cổ vật','6123:92190'],['collection','Bộ sưu tập','5853:95894'],['profile','Hồ sơ','5955:35421']];
const components=Object.fromEntries(Object.entries(modules).map(([id,load])=>[id,lazy(load)]));
const byId=Object.fromEntries(screens.map(s=>[s.id,s]));
function initial(){const p=new URLSearchParams(location.search);return byId[p.get('screen')]?p.get('screen'):flows.find(f=>f[0]===p.get('flow'))?.[2]||'5749:27213';}
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function motionDuration(t){return reduced()?0:(t?.duration??.3)*1000;}
function easing(t){return ({EASE_IN:'cubic-bezier(.42,0,1,1)',EASE_OUT:'cubic-bezier(0,0,.58,1)',EASE_IN_AND_OUT:'ease-in-out',LINEAR:'linear',QUICK:'cubic-bezier(.12,.8,.2,1)',SLOW:'cubic-bezier(.42,0,.58,1)'})[t?.easing?.type]||'ease';}

function App(){
 const [screen,setScreen]=useState(initial),[menu,setMenu]=useState(false),[viewport,setViewport]=useState([innerWidth,innerHeight]);
 const [playerName,setPlayerName]=useState(()=>localStorage.getItem('das-name')||''),[videoError,setVideoError]=useState(false);
 const stage=useRef(null),old=useRef(new Map()),transition=useRef(null),busy=useRef(false),historyRef=useRef([]),last=useRef('');
 const spec=byId[screen],Screen=components[screen],isVideo=screen==='5431:48897'||screen==='5853:94667';
 const scale=Math.min(viewport[0]/440,viewport[1]/956,1);
 useEffect(()=>{const onResize=()=>setViewport([innerWidth,innerHeight]);addEventListener('resize',onResize);return()=>removeEventListener('resize',onResize);},[]);
 function navigate(id,t,record=true){if(!byId[id]||busy.current||id===screen)return;
  old.current=new Map();const count={};stage.current?.querySelectorAll('[data-name]').forEach(el=>{const n=el.dataset.name;const key=n+':'+(count[n]=(count[n]||0)+1);const b=el.getBoundingClientRect();if(b.width&&b.height)old.current.set(key,{rect:b,opacity:getComputedStyle(el).opacity});});
  transition.current=t;if(record)historyRef.current.push(screen);setVideoError(false);setScreen(id);setMenu(false);
  const u=new URL(location.href);u.searchParams.delete('flow');u.searchParams.set('screen',id);history.pushState({screen:id},'',u);localStorage.setItem('das-last-screen',id);
 }
 function back(){navigate(historyRef.current.pop()||'5431:77309',{type:'DISSOLVE',duration:.3,easing:{type:'EASE_IN'}},false);}
 useEffect(()=>{const fn=()=>{const id=initial();if(byId[id])setScreen(id);};addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn);},[]);
 useEffect(()=>{const auto=spec.links.find(l=>l.t.type==='AFTER_TIMEOUT');if(auto){const t=setTimeout(()=>navigate(auto.a.to,auto.a.transition),auto.t.timeout*1000);return()=>clearTimeout(t);}},[screen]);

 // Enhance the imported visual tree only after its lazy module has rendered.
 function enhance(){const root=stage.current;if(!root||last.current===screen||!root.querySelector('[data-node-id]'))return;
  last.current=screen;const t=transition.current;const duration=t?motionDuration(t):0;
  if(t?.type==='SMART_ANIMATE'&&duration){const count={};root.querySelectorAll('[data-name]').forEach(el=>{const n=el.dataset.name,key=n+':'+(count[n]=(count[n]||0)+1),prev=old.current.get(key);if(!prev)return;const b=el.getBoundingClientRect();if(!b.width||!b.height||!prev.rect.width||!prev.rect.height)return;const dx=(prev.rect.x-b.x)/scale,dy=(prev.rect.y-b.y)/scale;if(Math.abs(dx)+Math.abs(dy)>1&&el.parentElement?.dataset.name!==n)el.animate([{translate:`${dx}px ${dy}px`,opacity:prev.opacity},{translate:'0px 0px',opacity:getComputedStyle(el).opacity}],{duration,easing:easing(t)});});}
  else if(duration)root.animate([{opacity:0},{opacity:1}],{duration,easing:easing(t)});
  // Figma's animated text is exported as overlapping word-state components.
  // Render one accessible paragraph and preserve the source 25 ms stagger / 400 ms ease-out.
  root.querySelectorAll('[data-name*="Animation ▶"]').forEach(group=>{const first=group.querySelector('p');if(!first)return;const text=first.textContent;const p=first.cloneNode(true);p.style.cssText+=';position:relative;left:0;top:0;opacity:1;color:#3c2b1e;line-height:1.4;width:321px;height:auto;';p.replaceChildren();text.split(/(\s+)/).forEach((word,i)=>{const span=document.createElement('span');span.textContent=word;p.append(span);if(!reduced())span.animate([{opacity:0},{opacity:1}],{duration:400,delay:25*Math.floor(i/2),fill:'both',easing:'cubic-bezier(0,0,.58,1)'});});group.replaceChildren(p);group.setAttribute('aria-label',text);});
  // Keep device chrome native; keyboard illustrations are replaced by a real input below.
  root.querySelectorAll('[data-name="Keyboard"]').forEach(el=>el.style.display='none');
  root.querySelectorAll('img').forEach(el=>{el.draggable=false;});
  const name=localStorage.getItem('das-name');if(name){const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode())if(/Đen [Vv]âu|ĐEN VÂU/.test(n.textContent))n.textContent=n.textContent.replace(/Đen [Vv]âu|ĐEN VÂU/g,name);}
 }
 useLayoutEffect(()=>{last.current='';const root=stage.current;const observer=new MutationObserver(enhance);observer.observe(root,{childList:true,subtree:true});enhance();return()=>observer.disconnect();},[screen]);

 const links=spec.links.filter(l=>l.t.type==='ON_CLICK');
 const rects=regions[screen]||[];
 const clickLinks=links.map(l=>({...l,rect:rects.find(r=>r.id===l.id)}));
 const rootLink=clickLinks.find(l=>l.id===screen);
 const hasAuthoredBack=clickLinks.some(l=>l.name==='Icon Button'&&l.rect&&l.rect.x<100&&l.rect.y<150&&byId[l.a.to]);
 const videoLink=spec.links.find(l=>l.t.type==='ON_MEDIA_END');
 const nameScreen=screen==='5431:48518'||screen==='5431:48558';
 const hasNav=['Main','Collection','Profile','History page','Info + Architec Page','Artifact page'].includes(spec.flow);
 const tutorial=spec.flow==='Tutorial'||spec.flow==='Onboarding';
 function goLink(l){if(!byId[l.a.to])return;if(nameScreen&&!playerName.trim())return;navigate(l.a.to,l.a.transition);}
 return <div className="app-shell">
  <main className="device" aria-label="Truy tìm cổ vật" style={{width:440*scale,height:956*scale}}>
   <div className="stage" ref={stage} data-screen={screen} style={{transform:`scale(${scale})`}}>
    <div className="screen-art" onClick={rootLink?()=>goLink(rootLink):undefined}>
     {isVideo?<video key={screen} data-node-id={screen} className="reward-video" autoPlay={!reduced()} muted playsInline controls={reduced()} onEnded={()=>navigate(videoLink.a.to,videoLink.a.transition)} onError={()=>setVideoError(true)}><source src={`${import.meta.env.BASE_URL}assets/${screen==='5431:48897'?'reward':'reward-ticket'}-clean.mp4`} type="video/mp4"/><source src={`${import.meta.env.BASE_URL}assets/${screen==='5431:48897'?'reward':'reward-ticket'}-clean.webm`} type="video/webm"/></video>:<Suspense fallback={<div className="loading" role="status">Đang mở hành trình…</div>}><Screen/></Suspense>}
    </div>
    {rootLink&&!nameScreen&&!isVideo&&<button className="tap-anywhere" aria-label="Tiếp tục" onClick={()=>goLink(rootLink)}/>}
    {clickLinks.filter(l=>l.id!==screen&&l.rect&&byId[l.a.to]).map((l,i)=><button key={i} className="hotspot" data-source={l.id} style={{left:l.rect.x,top:l.rect.y,width:l.rect.w,height:l.rect.h}} aria-label={labelFor(l,spec)} onClick={()=>goLink(l)}/>)}
    {hasNav&&<nav className="nav-hotspots" aria-label="Điều hướng chính">{[['Bảo tàng','5431:77309'],['Cổ vật','5675:37564'],['Săn ngay','6123:92190'],['Hồ sơ','5955:35421']].map(([label,id])=><button key={id} aria-label={label} aria-current={screen===id?'page':undefined} onClick={()=>navigate(id,{type:'DISSOLVE',duration:.3,easing:{type:'EASE_IN'}})}/>)}</nav>}
    {tutorial&&!['5749:27213','5431:55395','5431:48739','5431:48737'].includes(screen)&&<button className="skip-hit" aria-label="Bỏ qua hướng dẫn" onClick={()=>navigate('5431:77309',{type:'DISSOLVE',duration:.3})}/>}
    {nameScreen&&<form className="name-form" onSubmit={e=>{e.preventDefault();if(playerName.trim()){localStorage.setItem('das-name',playerName.trim());navigate('5431:72658',{type:'DISSOLVE',duration:.3});}}}><label className="sr-only" htmlFor="player-name">Tên nhà khám phá</label><input id="player-name" autoComplete="nickname" maxLength={24} placeholder="Nhập tên của bạn" value={playerName} onChange={e=>{setPlayerName(e.target.value);localStorage.setItem('das-name',e.target.value);}}/><button disabled={!playerName.trim()} type="submit">Tiếp tục</button></form>}
    {screen==='5431:77309'&&<><button className="hotspot" style={{left:13,top:69,width:305,height:261}} aria-label="Bảo tàng Thành phố Hồ Chí Minh" onClick={()=>navigate('5431:76969',{type:'SMART_ANIMATE',duration:.3})}/><button className="hotspot" style={{left:101,top:318,width:292,height:245}} aria-label="Bảo tàng Vũng Tàu" onClick={()=>navigate('5431:76969',{type:'SMART_ANIMATE',duration:.3})}/></>}
    {screen==='5675:37564'&&<button className="hotspot" style={{left:49,top:144,width:144,height:184}} aria-label="Đầu chim phượng" onClick={()=>navigate('5642:78537',{type:'SMART_ANIMATE',duration:.3})}/>}
    {screen==='5781:30418'&&<button className="hotspot" style={{left:49,top:144,width:144,height:184}} aria-label="Đầu chim phượng" onClick={()=>navigate('5642:78537',{type:'SMART_ANIMATE',duration:.3})}/>}
    {!tutorial&&!rootLink&&!hasAuthoredBack&&!['5431:77309','5675:37564','5781:30418'].includes(screen)&&!isVideo&&<button className="back-hit" aria-label="Quay lại" onClick={back}/>}
    {videoError&&<div className="video-error" role="alert">Không tải được video. <button onClick={()=>navigate(videoLink.a.to,videoLink.a.transition)}>Tiếp tục hành trình</button></div>}
    {screen==='5431:48897'&&<div className="reward-actions"><button aria-label="Về bảo tàng" onClick={()=>navigate('5431:77309',{type:'DISSOLVE',duration:.3})}><NeutralButton label="Về bảo tàng"/></button><button aria-label="Xem cổ vật" onClick={()=>navigate('5853:95894',{type:'DISSOLVE',duration:.3})}><AccentButton label="Xem cổ vật"/></button></div>}
   </div>
  </main>
  <button className="flow-menu-button" aria-label="Mở danh sách 6 hành trình" aria-expanded={menu} onClick={()=>setMenu(!menu)}>☰</button>
  {menu&&<aside className="flow-menu"><h1>D.A.S · Truy tìm cổ vật</h1><p>Bản demo tương tác</p>{flows.map(([key,label,id])=><button key={key} onClick={()=>navigate(id,{type:'DISSOLVE',duration:.3})}>{label}</button>)}<small>Nhận diện cổ vật, tài khoản và phần thưởng đang được mô phỏng. Dữ liệu tên chỉ lưu trên thiết bị này.</small><button onClick={()=>setMenu(false)}>Đóng</button></aside>}
 </div>;
}
function labelFor(l,s){const labels={'5431:48737':'Bắt đầu','5431:74963':'Xác nhận hình đại diện','5431:76998':'Thông tin bảo tàng','5431:76903':'Lịch sử bảo tàng','5431:77200':'Khám phá cổ vật','5431:77079':'Kiến trúc bảo tàng','6113:33517':'Vé của tôi','5802:61396':'Xem bưu thiếp','6116:37996':'Xem vé tham quan','5431:77309':'Về bảo tàng','5955:35421':'Về hồ sơ'};if(l.name==='App Icon')return'Mở Truy tìm cổ vật';if(l.name==='Map Button')return'Mở bản đồ';if(l.name==='Medal')return'Xem huy hiệu';if(l.name==='Ticket')return'Xem vé';if(l.name==='Button'&&s.flow==='Hunt artifact')return'Chụp cổ vật';if(l.name==='Selection artifact')return'Xem cổ vật đã săn';if(l.name==='Selection hunt')return'Bắt đầu săn cổ vật';if(l.name==='Museum card')return'Khám phá bảo tàng';if(l.name==='Avatar')return'Chọn hình đại diện';if(l.name==='Guide')return'Nghe giáo sư Zũ';if(labels[l.a.to])return labels[l.a.to];if(l.name==='Icon Button')return'Trang tiếp theo';if(l.name==='Tag'||l.name==='Icon')return'Chọn địa điểm';return'Xem tiếp';}
createRoot(document.getElementById('root')).render(<App/>);
if('serviceWorker'in navigator&&import.meta.env.PROD)navigator.serviceWorker.register(import.meta.env.BASE_URL+'sw.js');

