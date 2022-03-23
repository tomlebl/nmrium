var Pd=Object.defineProperty,_d=Object.defineProperties;var Fd=Object.getOwnPropertyDescriptors;var mo=Object.getOwnPropertySymbols;var tl=Object.prototype.hasOwnProperty,nl=Object.prototype.propertyIsEnumerable;var el=(e,t,n)=>t in e?Pd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))tl.call(t,n)&&el(e,n,t[n]);if(mo)for(var n of mo(t))nl.call(t,n)&&el(e,n,t[n]);return e},S=(e,t)=>_d(e,Fd(t));var ol=e=>typeof e=="symbol"?e:e+"",G=(e,t)=>{var n={};for(var o in e)tl.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&mo)for(var o of mo(e))t.indexOf(o)<0&&nl.call(e,o)&&(n[o]=e[o]);return n};import{r as c,M as gr,S as Ld,c as P,w as Od,j as w,a as p,F as $d,E as Hd,b as Wo,R as gt,d as f,e as F,x as qn,f as xr,g as Uo,m as br,h as zd,i as Vd,k as Is,l as jd,n as Bd,o as To,p as sl,z as Xd,q as Yd,s as yr,t as il,u as cn,v as vn,y as vr,A as Gd,B as Ze,C as Zd,D as Wd,G as Ud,H as Kd,I as Cr,J as qd,K as Jd,L as Qd,N as Ns,O as ep,P as tp,Q as Bt,T as np,U as op,V as sp,W as ip,X as lp,Y as rp,Z as dn,_ as ap,$ as cp,a0 as qe,a1 as xt,a2 as oe,a3 as Ve,a4 as up,a5 as Jn,a6 as kr,a7 as ll,a8 as Sr,a9 as dp,aa as V,ab as Us,ac as pp,ad as wr,ae as Ms,af as Ks,ag as Do,ah as Qe,ai as hp,aj as fp,ak as Er,al as qs,am as Js,an as et,ao as mp,ap as Ko,aq as Ar,ar as Qs,as as gp,at as xp,au as pn,av as Ke,aw as rl,ax as $e,ay as bp,az as al,aA as yp,aB as vp,aC as Cp,aD as pe,aE as kp,aF as cl,aG as hn,aH as Sp,aI as wp,aJ as St,aK as Ep,aL as Ap,aM as Tp,aN as zn,aO as Tr,aP as Dp,aQ as Rp,aR as Ip,aS as ee,aT as ae,aU as Np,aV as Dr,aW as Rr,aX as Ir,aY as Mp,aZ as Pp,a_ as _p,a$ as Mn,b0 as ei,b1 as Nr,b2 as Mr,b3 as qo,b4 as Fp,b5 as Cn,b6 as Pr,b7 as Lp,b8 as Vn,b9 as Op,ba as $p,bb as Hp,bc as zp,bd as _r,be as Vp,bf as jp,bg as Fr,bh as Bp,bi as Ps,bj as Xp,bk as Qn,bl as Lr,bm as Jo,bn as Or,bo as Yp,bp as wo,bq as Gp,br as Zp,bs as Wp,bt as $r,bu as Up,bv as Kp,bw as qp,bx as Hr,by as Jp,bz as Ro,bA as Qp,bB as Ie,bC as Pn,bD as Qo,bE as zr,bF as eh,bG as th,bH as lt,bI as nh,bJ as oh,bK as sh,bL as ih,bM as lh,bN as rh,bO as ah,bP as ch,bQ as uh,bR as dh,bS as ph,bT as Vr,bU as ul,bV as hh,bW as fh,bX as Se,bY as mh,bZ as gh,b_ as xh,b$ as bh,c0 as yh,c1 as vh,c2 as Ch,c3 as kh,c4 as Sh,c5 as wh,c6 as Eh,c7 as Ah,c8 as ys,c9 as vs,ca as Th,cb as Dh,cc as Rh,cd as dl,ce as Ih,cf as Nh,cg as Mh,ch as Ph,ci as _h,cj as Fh,ck as Lh,cl as Oh,cm as $h,cn as Hh,co as zh,cp as Vh}from"./vendor.3abbb066.js";const jh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};jh();var pl=[{title:"Empty"},{groupName:"General",children:[{file:"./data/cytisine/1H.json",title:"1H spectrum test"},{file:"./data/ethylbenzene/1h.json",title:"1H ethylbenzene"},{file:"./data/ethylbenzene/cosy.json",title:"COSY ethylbenzene"},{file:"./data/ethylbenzene/full.json",title:"FULL ethylbenzene"},{file:"./data/cytisine/2d/hsqc.json",title:"HSQC cytisine"},{file:"./data/cytisine/2d/hmbc-only.json",title:"HMBC only cytisine"},{file:"./data/cytisine/2d/hsqc_hmbc.json",title:"HSQC / HMBC cytisine"},{file:"./data/cytisine/2d/all.json",title:"Full cytisine"},{file:"./data/cytisine/2d/HMBC_HN_Cytisin.json",title:"1H, 15N HMQC cytisine"},{file:"./data/50-78-2/linked-jcamp.json",title:"Linked jcamp"},{file:"./data/cytisine/1Honly.json",title:"1H only jcamp"},{file:"./data/cytisine/2d/cosy.json",title:"2D cosy"},{file:"./data/cytisine/1D.json",title:"1D spectra test"},{file:"./data/ethylvinylether/1h.json",title:"1H ethylvinylether"},{file:"./data/cytisine/13CFID.json",title:"13C Spectrum"},{file:"./data/cytisine/processed13C.json",title:"Processed 13C Spectrum"},{file:"./data/cytisine/Big13C.json",title:"Big 13C"},{file:"./data/xtc/XTC.json",title:"XTC"},{file:"./data/xtc/XTClight.json",title:"XTC just links"},{file:"./data/coffee/Coffee.json",title:"Coffee"},{file:"./data/108-21-4/CoupledDecoupled13C.json",title:"13C Coupled / Decoupled"},{file:"./data/cytisine/Dept.json",title:"DEPT"},{file:"./data/19f/19f.json",title:"19F with baseline problems"},{file:"./data/t1/t1.json",title:"T1 samples (1H + 13C)"},{file:"./data/t2/t2.json",title:"T2 samples (1H + 13C)"},{file:"",title:"Two instances",view:"TwoInstances"}]},{groupName:"Simulate",children:[{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8.json",title:"\u03B4=1,2,3,4,5,6,7,8"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8HR.json",title:"\u03B4=1,2,3,4,5,6,7,8 HR"},{file:"./data/tests/simulated/d1-1.2_j7.json",title:"\u03B4=1,1.2 J=7"},{file:"./data/tests/simulated/d1-2_j7.json",title:"\u03B4=1,2 J=7"},{file:"./data/tests/simulated/d1-2-3_j16-10-2.json",title:"\u03B4=1,2,3 J=2,10,16"},{file:"./data/tests/simulated/d1-7_j7.json",title:"\u03B4=1,7 J=7"},{file:"./data/tests/simulated/d1-2-3-4-5-6-7-8_baseline.json",title:"Tests with baseline"},{file:"./data/tests/triangle/low-res.json",title:"Test low resolution"},{file:"./data/tests/triangle/high-res.json",title:"Test high resolution"}]},{groupName:"Workspaces",children:[{file:"./exercises/ethylvinylether/1h.json",title:"Exercise 1",view:"Exercise"},{file:"./exercises/ethylbenzene/1h.json",title:"Exercise 2",view:"Exercise"},{file:"./exercises/cytisine/hsqc_hmbc.json",title:"Exercise 3",view:"Exercise"},{file:"./exercises/ethylvinylether/1h.json",title:"Exam 1",view:"Exam"},{title:"Prediction",view:"Prediction"}]},{title:"Test",view:"Test"}];function Bh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t.push(jr(n.groupName,[n],[])):t.push(c.exports.createElement(gr,b({key:n.title},n),n.title));return t}function jr(e,t=[],n=[],o=0){let s=n,i=[];o!==-1&&s[o]&&(s[o]=c.exports.cloneElement(s[o],{},i));for(const l in t)if(t[l].children&&Array.isArray(t[l].children)){const r=c.exports.createElement(Ld,{key:l+e,title:t[l].groupName});return s.push(r),jr(l+e,t[l].children,s,0)}else i.push(c.exports.createElement(gr,b({key:l+e},t[l]),t[l].title));return s}function Xh(e=[]){let t=[];for(const n of e)n.children&&Array.isArray(n.children)?t=t.concat(Br([n],[])):t.push(n);return t}function Br(e=[],t=[]){let n=t;for(const o of e){if(o.children&&Array.isArray(o.children))return Br(o.children,n);t.push(o)}return n}function Ft(e=""){const t=new RegExp(/^(?<path>.*)\/(?<file>[^/]*)$/g).exec(e);let n="";if(t){const o=t[1].split("/");n=o.length>2?o[o.length-2]+o[o.length-1]:o[o.length-1]}return n+e.replace(/\.|\s|\//g,"")}const Yh=P`
  background: #2ca8ff;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 1031;
`,Gh=P`
  width: 260px;
`,Zh=P`
  width: 3%;
`,Wh=P`
  margin-left: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  z-index: 7;
  font-size: 18px;
  background-color: transparent;
  border: none !important;
  height: 30px;
  width: 30px;
  padding: 1px 6px;

  & svg {
    fill: white;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`,Uh=P`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  border-bottom: 1px solid #eee;
`,Kh=P`
  text-transform: uppercase;
  padding: 0.5rem 0;
  display: block;
  white-space: nowrap;
  font-size: 1em;
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
`,qh=P`
  display: block;
  opacity: 1;
  transform: translateZ(0);
`,Jh=P`
  position: relative;
  height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
`;function Qh(e){const t=c.exports.useMemo(()=>Bh(e.routes),[e.routes]),n=e.menuIsClosed?"none":"block";return w("div",{css:P(Yh,e.menuIsClosed?Zh:Gh),children:[w("div",{css:Uh,children:[p("div",{style:{display:n,padding:"0.5rem 0.7rem"},children:p("a",{css:P(Kh,qh),children:"NMRium"})}),p("button",{type:"button",css:Wh,onClick:e.onMenuToggle,children:p($d,{})})]}),p("div",{css:Jh,style:{display:n},children:p(Hd,{onClick:o=>{e.history.push(`/SamplesDashboard/${Math.random().toString(36).replace("0.","")}/${(o.item.props.view||"View")+Ft(o.item.props.file)}`)},mode:"inline",children:t})})]})}var ef=Od(c.exports.memo(Qh));const tf="modulepreload",hl={},nf="./",it=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${nf}${o}`,o in hl)return;hl[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":tf,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((r,a)=>{l.addEventListener("load",r),l.addEventListener("error",a)})})).then(()=>t())},ti={Exam:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exam.da51b722.js"),["assets/Exam.da51b722.js","assets/vendor.3abbb066.js"]))),Exercise:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Exercise.b26e3dfa.js"),["assets/Exercise.b26e3dfa.js","assets/vendor.3abbb066.js"]))),SingleView:c.exports.memo(c.exports.lazy(()=>it(()=>import("./SingleView.90faac1f.js"),["assets/SingleView.90faac1f.js","assets/vendor.3abbb066.js"]))),Test:c.exports.memo(c.exports.lazy(()=>it(()=>Promise.resolve().then(function(){return AT}),void 0))),View:c.exports.memo(c.exports.lazy(()=>it(()=>import("./View.9d96468b.js"),["assets/View.9d96468b.js","assets/vendor.3abbb066.js"]))),TwoInstances:c.exports.memo(c.exports.lazy(()=>it(()=>import("./TwoInstances.a032701e.js"),["assets/TwoInstances.a032701e.js","assets/vendor.3abbb066.js"]))),Teaching:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Teaching.6abad8ea.js"),["assets/Teaching.6abad8ea.js","assets/vendor.3abbb066.js"]))),Prediction:c.exports.memo(c.exports.lazy(()=>it(()=>import("./Prediction.ee33bbb1.js"),["assets/Prediction.ee33bbb1.js","assets/View.9d96468b.js","assets/vendor.3abbb066.js"])))},of=P`
  position: relative;
  float: right;
  height: 100%;
  background-color: #ebecf1;
`,sf=P`
  width: calc(100% - 260px);
`,lf=P`
  width: 98%;
  margin-left: 20px !important;
`;function rf(e){const{routes:t=[],baseURL:n}=e,o=c.exports.useMemo(()=>Xh(t),[t]),[s,i]=c.exports.useState(!1),l=c.exports.useCallback(()=>i(!s),[s]);return w("div",{style:{position:"relative",top:0,height:"100vh"},children:[p(ef,S(b({},e),{routes:t,menuIsClosed:s,onMenuToggle:l})),p("div",{css:P(of,s?lf:sf),children:p(c.exports.StrictMode,{children:p(c.exports.Suspense,{fallback:p("div",{children:"Loading..."}),children:w(Wo,{children:[o.map(r=>p(gt,{path:`/SamplesDashboard/:id/${(r.view||"View")+Ft(r.file)}`,render:a=>p(af,S(b({},a),{prop:r,baseURL:n}))},Ft(r.file))),o.length>0&&p(gt,{path:"/",render:()=>{const r=o[0],a=r.view?r.view:"View",u=ti[a];return p(u,b({},r[0]))}},Ft(o[0].file))]})})})})]})}function af(e){const{match:{params:{id:t}},prop:n,baseURL:o}=e,s=n.view?n.view:"View",i=ti[s];return p(i,S(b({},n),{id:Ft(n.file),baseURL:o}),t)}function cf(e){return f("div",{style:{position:"relative",top:0,height:"100vh"},children:f("div",{style:{position:"absolute",display:"block",width:"99%",marginLeft:"auto",marginRight:"auto",height:"100%",backgroundColor:"ebecf1"},children:f(c.exports.Suspense,{fallback:f("div",{children:"Loading..."}),children:f(Wo,{children:f(gt,{path:"/",render:t=>{const{match:{params:{id:n}}}=t,o=e.view?e.view:"SingleView",s=ti[o];return f(s,S(b({},e),{id:Ft(e.patrh)}),n)}},Ft(e.path))})})})})}const Rt={bodyContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#e3e3e3"},container:{width:"30%",height:"40%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"20px",textAlign:"center"},normal:{backgroundColor:"white",color:"black"},error:{backgroundColor:"red",color:"white"},errorHeader:{fontSize:"100px"},normalHeader:{fontSize:"24px"},loadButton:{fontSize:"12px",padding:"12px 40px",borderRadius:"10px",border:"1px solid #c70000",fontWeight:"bold",cursor:"pointer"}};async function uf(e){const t=await fetch(e);try{return df(t),await t.json()}catch(n){return console.error(n),null}}function df(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}const pf=e=>{const[t,n]=c.exports.useState({isLoaded:!1,status:200,routes:[]}),[o,s]=c.exports.useState(""),i=c.exports.useCallback(()=>{n({isLoaded:!0,status:200,routes:pl})},[]),l=(a="")=>a.substring(a.lastIndexOf(".")+1),r=window.location.href;return c.exports.useEffect(()=>{const a=new URL(r).searchParams;if(a.has("sampleURL")){const u=a.get("sampleURL");if(!u)return;switch(l(u).toLowerCase()){case"json":{s("multi"),uf(u).then(h=>{if(h){const m=u.replace(/^(?<url>.*[\\/])?(?<filename>.*?\.[^.]*?|)$/g,"$1"),g=JSON.parse(JSON.stringify(h).replace(/\.\/+?/g,m));n({isLoaded:!0,status:200,routes:g,baseURL:m})}else n({isLoaded:!1,status:404,routes:[]})});break}case"dx":case"jdx":{s("single"),n({isLoaded:!0,status:200,path:u});break}}}else s("multi"),n({isLoaded:!0,status:200,routes:pl,baseURL:"./"})},[r]),t.isLoaded?o&&o==="single"?f(cf,S(b({},e),{path:t.path})):f(rf,S(b({},e),{routes:t.routes,baseURL:t.baseURL})):f("div",{style:Rt.bodyContainer,children:f("div",{style:b(b({},Rt.container),t.status===200?Rt.normal:Rt.error),children:t.status===200?F("div",{children:[f("p",{style:Rt.normalHeader,children:"Please wait"}),f("p",{children:"We will redirect you in a minute"})]}):F("div",{children:[f("p",{style:Rt.errorHeader,children:"404"}),f("p",{children:"Resource not found."}),f("button",{style:Rt.loadButton,type:"button",onClick:i,children:"Load local samples"})]})})})};function Xt(e){const t=["Alt","AltGraph","CapsLock","Control","Meta","NumLocK","ScrollLock","Shift","OS"];for(const n of t)if(e.getModifierState(n))return!0;return!1}const Io=2048;function hf(e,t,n,o,s){const{fromIndex:i,toIndex:l}=qn(e,{from:n,to:o});if(l-i<=Io){const r={x:e.subarray(i,l),y:t.subarray(i,l)},a=xr(r,{frequency:s,takeBestPartMultiplet:!0,symmetrizeEachStep:!0});return a&&a.chemShift===void 0?void 0:{multiplicity:a.js.map(u=>u.multiplicity).join(""),kind:"signal",delta:a.chemShift,js:a.js}}else throw new Error(`length of signal should not exceed ${Io} points`)}const Xr={step:"initial",brush:{start:null,end:null},startX:0,endX:0,startY:0,endY:0},wt=c.exports.createContext(Xr);function Yr({children:e,className:t,style:n,onBrush:o=()=>null,onZoom:s=()=>null,onDoubleClick:i=()=>null,onClick:l=()=>null,noPropagation:r}){const[a,u]=c.exports.useReducer(ff,Xr),[d,h]=c.exports.useState(0),m=c.exports.useRef([]),g=c.exports.useCallback(k=>(k.button===0&&(r&&k.stopPropagation(),u({type:"DOWN",shiftKey:k.shiftKey,altKey:k.altKey,screenX:k.screenX,screenY:k.screenY,clientX:k.clientX,clientY:k.clientY,boundingRect:k.currentTarget.getBoundingClientRect()}),h(k.timeStamp)),!1),[r]),x=c.exports.useCallback(k=>{k.persist();const E=k.timeStamp,T=k.currentTarget.getBoundingClientRect(),M=k.clientX-T.x,I=k.clientY-T.y,N=Uo(()=>{E-d<=150&&m.current.length===1&&l(S(b({},k),{x:M,y:I})),m.current=[]},200);m.current.push(N),N(),m.current.length>1&&(br(m.current,A=>A.cancel()),m.current=[],i(S(b({},k),{x:M,y:I})))},[d,l,i]),y=c.exports.useCallback(k=>{const E=k.currentTarget.getBoundingClientRect(),T=k.clientX-E.x,M=k.clientY-E.y,{deltaY:I,deltaX:N,shiftKey:A,deltaMode:D}=k;s({deltaY:I||N,shiftKey:A,deltaMode:D,x:T,y:M})},[s]);c.exports.useEffect(()=>{const{step:k,startX:E,endX:T,startY:M,endY:I}=a;k==="end"&&Math.hypot(T-E,I-M)>5&&(o(a),u({type:"DONE"}))},[o,a]);const C=c.exports.useCallback(k=>{u({type:"MOVE",screenX:k.screenX,screenY:k.screenY,clientX:k.clientX,clientY:k.clientY})},[]),v=c.exports.useCallback(k=>(u({type:"UP",clientX:k.clientX,clientY:k.clientY}),!1),[]);return f(wt.Provider,{value:a,children:f("div",{className:t,style:n,onMouseDown:g,onMouseUp:v,onMouseMove:C,onClick:x,onWheel:y,children:e})})}function ff(e,t){switch(t.type){case"UP":if(e.step==="brushing"||e.step==="start"){const{clientX:n,clientY:o}=t;return S(b({},e),{endX:n-e.boundingRect.x,endY:o-e.boundingRect.y,step:e.step==="start"?"initial":"end"})}return e;case"DOWN":if(e.step==="initial"||e.step==="end"){const{screenX:n,screenY:o,clientX:s,clientY:i,boundingRect:l,shiftKey:r,altKey:a}=t,u=s-l.x,d=i-l.y;return S(b({},e),{shiftKey:r,altKey:a,startX:u,startY:d,startScreenX:n,startScreenY:o,startClientX:s,startClientY:i,boundingRect:l,step:"start"})}return e;case"MOVE":if(e.step==="start"||e.step==="brushing"){const{clientX:n,clientY:o}=t;return S(b({},e),{step:"brushing",endX:n-e.boundingRect.x,endY:o-e.boundingRect.y})}return e;case"DONE":if(e.step==="end")return S(b({},e),{step:"initial"});break;default:return e}}const ut=c.exports.createContext({}),mf=ut.Provider;function gf(){return c.exports.useContext(ut)}function Gr({children:e,className:t,style:n,noPropagation:o}){const[s,i]=c.exports.useState(null),l=c.exports.useCallback(a=>{const u=a.currentTarget.getBoundingClientRect(),d=a.clientX-u.x,h=a.clientY-u.y;i({x:d,y:h}),o&&a.stopPropagation()},[o]),r=c.exports.useCallback(a=>{i(null),o&&a.stopPropagation()},[o]);return f(mf,{value:s,children:f("div",{className:t,style:n,onMouseMove:l,onMouseLeave:r,children:e})})}const ni=[{key:"signal",label:"Signal",value:"signal"},{key:"reference",label:"Reference",value:"reference"},{key:"solvent",label:"Solvent",value:"solvent"},{key:"impurity",label:"Impurity",value:"impurity"},{key:"standard",label:"Standard",value:"standard"},{key:"p1",label:"P1",value:"p1"},{key:"p2",label:"P2",value:"p2"},{key:"p3",label:"P3",value:"p3"}],eo=["signal"],We={signal:"signal",mixed:"mixed"},Zr="absolute",xf="Absolute";function bf(e){if(!Wr(e))throw new Error("absolute not applicable on this data");e.data.re=zd(e.data),e.data.im=new Float64Array(0),e.info=S(b({},e.info),{isComplex:!1})}function Wr(e){return!!(e.info.isComplex&&!e.info.isFid)}function yf(){return{once:!1,reduce:null}}var vf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Zr,name:xf,apply:bf,isApplicable:Wr,reduce:yf});const Cf="autoPhaseCorrection",kf="Automatic phase correction",Sf={minRegSize:5,maxDistanceToJoin:128,magnitudeMode:!0,factorNoise:5};function Ur(e,t={}){if(!Kr(e))throw new Error("phaseCorrection not applicable on this data");return Vd(e.data,b(b({},Sf),t))}function Kr(e){return!!(e.info.isComplex&&!e.info.isFid)}function wf(e,t){let n=Object.assign({},e);for(const o in n)n[o]+=t[o];return{once:!0,reduce:n}}var Ef=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Cf,name:kf,apply:Ur,isApplicable:Kr,reduce:wf});const qr="baselineCorrection",Af="Baseline correction",_s={airpls:"airPLS",polynomial:"Polynomial"};function Tf(e,t={}){if(!oi(e))throw new Error("baselineCorrection not applicable on this data");const{algorithm:n,zones:o=[]}=t;let{x:s,re:i}=e.data,l;switch(n){case"airpls":l=Bd(s,i,t).corrected;break;case"polynomial":{const r={regressionOptions:t.degree};let a=Is({x:s,y:i},{numberOfPoints:4096,zones:o}),u=jd(a.x,a.y,r),{regression:d}=u;l=new Float64Array(s.length);for(let h=0;h<i.length;h++)l[h]=i[h]-d.predict(s[h])}break;default:throw new Error(`baselineCorrection: algorithm unknown: ${n}`)}Object.assign(e.data,{re:l})}function oi(e){return!e.info.isFid}function Df(){return{once:!1,reduce:null}}var Rf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:qr,name:Af,baselineAlgorithms:_s,apply:Tf,isApplicable:oi,reduce:Df});const Fs="centerMean",Jr="Center Mean";function If(e){var i;if(!Qr(e))throw new Error("Center Mean is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.mean(t),s=To.mean(n||[]);for(let l=0;l<t.length;l++)t[l]-=o,n&&(n[l]-=s);e.data.re=t,n&&(e.data.im=n)}function Qr(e){return!!(e.info.isComplex&&!e.info.isFid)}function Nf(){return{once:!1,reduce:null}}var Mf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Fs,name:Jr,apply:If,isApplicable:Qr,reduce:Nf});const Ls="digitalFilter",Pf="Digital Filter";function _f(e,t={}){if(!ea(e))throw new Error("Digital Filter is not applicable on this data");let{digitalFilterValue:n=0}=t,o=new Float64Array(e.data.re),s=new Float64Array(e.data.im),i=Math.floor(n);const l=0;i+=0;const r=new Float64Array(o.length),a=new Float64Array(s.length);r.set(o.slice(i)),r.set(o.slice(l,i),o.length-i),a.set(s.slice(i)),a.set(s.slice(l,i),s.length-i),e.data.re=r,e.data.im=a}function ea(e){return!!(e.info.isComplex&&e.info.isFid)}function Ff(){return{once:!0,reduce:void 0}}var Lf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Ls,name:Pf,apply:_f,isApplicable:ea,reduce:Ff});const Yn="equallySpaced",ta="Equally Spaced";function Of(e,t={}){if(!na(e))throw new Error("Equally Spaced is not applicable on this data");const{from:n,to:o,numberOfPoints:s,exclusions:i}=t,{x:l,re:r,im:a}=e.data,u=Is({x:l,y:r},{from:n,to:o,numberOfPoints:s,exclusions:i});if(e.data.x=u.x,e.data.re=u.y,a){const d=Is({x:l,y:r},{from:n,to:o,numberOfPoints:s,exclusions:i});e.data.im=d.y}}function na(e){return!!(e.info.isComplex&&!e.info.isFid)}function $f(){return{once:!1,reduce:null}}var Hf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Yn,name:ta,apply:Of,isApplicable:na,reduce:$f});const to="exclusionZones",zf="Exclusion Zones";function Vf(e,t=[]){if(!oa(e))throw new Error("Exclusion Zones filter not applicable on this data");const{x:n,re:o,im:s}=e.data;e.data.re=sl({x:n,y:o},{zones:t}).y,e.data.im=s&&sl({x:n,y:o},{zones:t})}function oa(e){return!!(e.info.isComplex&&e.info.isFt)}function jf(e,t){return{once:!0,reduce:Xd(e.concat(t))}}var Bf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:to,name:zf,apply:Vf,isApplicable:oa,reduce:jf});const sa="fft",Xf="FFT";function Yf(e){if(!si(e))throw new Error("fft not applicable on this data");let t=e.filters.some(n=>n.name==="digitalFilter"&&n.flag);if(Object.assign(e.data,Yd(e.data,{applyZeroShift:!0})),t){let{digitalFilter:n}=e.info,o=(n-Math.floor(n))*Math.PI*2;Object.assign(e.data,yr(e.data,0,o))}e.data.x=Zf(e),e.info=S(b({},e.info),{isFid:!1,isFt:!0})}function si(e){return!!(e.info.isComplex&&e.info.isFid)}function Gf(){return{once:!0,reduce:void 0}}function Zf(e){const t=e.info,n=parseFloat(t.baseFrequency),o=parseFloat(t.frequencyOffset),s=parseFloat(t.spectralWidth),i=o/n;let l=.5*s,r=e.data.x.length,a=i-l,u=s/(r-1);const d=new Array(r);for(let h=0;h<r;h++)d[h]=a,a+=u;return d}var Wf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:sa,name:Xf,apply:Yf,isApplicable:si,reduce:Gf});const No="fromTo",ia="From/To";function Uf(e,t={}){if(!la(e))throw new Error("From/To filter not applicable on this data");const{x:n,re:o,im:s}=e.data,{from:i,to:l}=t,{fromIndex:r,toIndex:a}=qn(n,{from:i,to:l});e.data.x=n.slice(r,a),e.data.re=o.slice(r,a),s&&(e.data.im=s.slice(r,a))}function la(e){return!!(e.info.isComplex&&!e.info.isFid)}function Kf(e,t){return{once:!0,reduce:t}}var qf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:No,name:ia,apply:Uf,isApplicable:la,reduce:Kf});const ra="lineBroadening",Jf="Line broadening";function Qf(e,t){if(!aa(e))throw new Error("lineBroadening not applicable on this data");let n=e.info.digitalFilter,o;n>0?o=Math.floor(n):o=0;const s=e.data.re,i=e.data.im,l=e.data.x,r=s.length,a=new Float64Array(r),u=new Float64Array(r),d=(l[r-1]-l[0])/(r-1),h=-t*Math.exp(1),m=Math.exp(h*d);let g=Math.exp(h*l[0]);for(let x=0;x<r-o;x++)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;g=Math.exp(h*l[0]);for(let x=r;x>r-o;x--)a[x]=s[x]*g,u[x]=i[x]*g,g=g*m;e.data=S(b({},e.data),{re:a,im:u})}function aa(e){return!!(e.info.isComplex&&e.info.isFid)}function em(e,t){return{once:!0,reduce:e+t}}var tm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ra,name:Jf,apply:Qf,isApplicable:aa,reduce:em});const Os="pareto",ca="Pareto";function nm(e){var o;if(!ua(e))throw new Error("Pareto is not applicable on this data");const t=e.data.re.slice(0),n=(o=e.data.im)==null?void 0:o.slice(0);e.data.re=il(t),n&&(e.data.im=il(n))}function ua(e){return!!(e.info.isComplex&&!e.info.isFid)}function om(){return{once:!1,reduce:null}}var sm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Os,name:ca,apply:nm,isApplicable:ua,reduce:om});const Ht="phaseCorrection",da="Phase correction";function pa(e,t={}){if(!ii(e))throw new Error("phaseCorrection not applicable on this data");let{ph0:n,ph1:o}=t;n*=Math.PI/180,o*=Math.PI/180,Object.assign(e.data,yr(e.data,n,o))}function ii(e){return!!(e.info.isComplex&&!e.info.isFid)}function im(e,t){return{once:!0,reduce:t}}var lm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:Ht,name:da,apply:pa,isApplicable:ii,reduce:im});const no="shiftX",rm="Shift X";function am(e,t=0){e.data.x=e.data.x.map(n=>n+t)}function cm(){return!0}function um(e,t){return{once:!0,reduce:e+t}}var dm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:no,name:rm,apply:am,isApplicable:cm,reduce:um});const $s="standardDeviation",ha="Standard Deviation";function pm(e){var i;if(!fa(e))throw new Error("Standard Deviation is not applicable on this data");const t=e.data.re.slice(0),n=(i=e.data.im)==null?void 0:i.slice(0),o=To.standardDeviation(t),s=To.standardDeviation(n||[]);for(let l=0;l<t.length;l++)t[l]/=o,n&&(n[l]/=s);e.data.re=t,n&&(e.data.im=n)}function fa(e){return!!(e.info.isComplex&&!e.info.isFid)}function hm(){return{once:!1,reduce:null}}var fm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:$s,name:ha,apply:pm,isApplicable:fa,reduce:hm});const li="zeroFilling",ma="Zero Filling";function mm(e,t){if(!ri(e))throw new Error("zeroFilling not applicable on this data");let n=e.filters.some(x=>x.name==="digitalFilter"&&x.flag),o=e.info.digitalFilter,s;o>0&&n?s=Math.floor(o):s=0;const{re:i,im:l,x:r}=e.data;let a=new Float64Array(t),u=new Float64Array(t),d=new Float64Array(t);const h=Math.min(t,i.length);a.set(i.slice(0,h-s)),u.set(l.slice(0,h-s)),d.set(r.slice(0,h-s));let m=r[1]-r[0],g=r[h-s-1];for(let x=h-s;x<t;x++)g+=m,d[x]=g;s>0&&s<t&&(a.set(i.slice(i.length-s),t-s),u.set(l.slice(i.length-s),t-s)),e.data=S(b({},e.data),{re:a,im:u,x:d})}function ri(e){return!!(e.info.isComplex&&e.info.isFid)}function gm(e,t){return{once:!0,reduce:t}}var xm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:li,name:ma,apply:mm,isApplicable:ri,reduce:gm});const ai="shift2DX",bm="Shift 2D X";function ym(e,t=0){e.data.minX+=t,e.data.maxX+=t}function vm(){return!0}function Cm(e,t){return{once:!0,reduce:e+t}}var km=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ai,name:bm,apply:ym,isApplicable:vm,reduce:Cm});const ci="shift2DY",Sm="Shift 2D Y";function wm(e,t=0){e.data.minY+=t,e.data.maxY+=t}function Em(){return!0}function Am(e,t){return{once:!0,reduce:e+t}}var Tm=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",id:ci,name:Sm,apply:wm,isApplicable:Em,reduce:Am}),sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",absolute:vf,baselineCorrection:Rf,lineBroadening:tm,fft:Wf,phaseCorrection:lm,autoPhaseCorrection:Ef,shiftX:dm,zeroFilling:xm,digitalFilter:Lf,fromTo:qf,equallySpaced:Hf,standardDeviation:fm,centerMean:Mf,pareto:sm,exclusionZones:Bf,shift2DX:km,shift2DY:Tm});const Dm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",Rm=8;function U(){let e="";for(let t=0;t<Rm;t++)e+=Dm.charAt(Math.floor(Math.random()*62));return e}function Ae(e,t=[]){let n=!1;for(let o of t){const s={name:o.name,label:sn[o.name].name,value:o.options},i=Nm(e,o.name);if(i){const l=sn[o.name].reduce(i.value,s.value);l.once?(n||(n=!0),l.reduce!=null&&l.reduce!==void 0&&Mm(e,i.id,l.reduce)):fl(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}else fl(e,s,Object.prototype.hasOwnProperty.call(o,"isDeleteAllow")?o.isDeleteAllow:!0)}if(n)t.length===1&&Im(e,t[0].name)?sn[t[0].name].apply(e,t[0].options):fn(e);else for(let o of t)sn[o.name].apply(e,o.options)}function Im(e,t){const n=e.filters.findIndex(o=>o.name===t);return e.filters.length===n+1}function Nm(e,t){return e.filters.find(n=>n.name===t)}function fn(e,t=null){const n=t||e.filters;ga(e,null,null,n)}function ga(e,t,n,o=null){e.filters=e.filters.slice(0),t&&(e.filters=e.filters.map(i=>S(b({},i),{flag:i.id===t?n:i.flag}),[])),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);const s=o||e.filters;for(let i in s){const l=e.filters[i];if(e.filters[i]=S(b({},e.filters[i]),{error:null}),l.flag)try{sn[l.name].apply(e,l.value)}catch(r){e.filters[i]=S(b({},e.filters[i]),{error:r.message})}}}function ui(e,t){e.filters=e.filters.slice(0),e.filters=e.filters.filter(n=>n.id!==t),e.data=b(b({},e.data),e.originalData),e.info=b(b({},e.info),e.originalInfo);for(let n in e.filters){const o=e.filters[n];if(e.filters[n]=S(b({},e.filters[n]),{error:null}),o.flag)try{sn[o.name].apply(e,o.value)}catch(s){e.filters[n]=S(b({},e.filters[n]),{error:s.message})}}}function fl(e,t,n=!0){const o=U();e.filters=e.filters.slice(0),delete t.isSnapshot,e.filters.push(S(b({},t),{id:o,flag:!0,isDeleteAllow:n}))}function Mm(e,t,n){e.filters=e.filters.slice(0);const o=e.filters.findIndex(s=>s.id===t);delete e.filters[o].isSnapshot,e.filters[o]=S(b({},e.filters[o]),{value:n})}const xa=["#C10020","#007D34","#803E75","#FF6800","#B32851","#7F180D","#232C16","#A6BDD7","#CEA262","#817066","#FF8E00","#F6768E","#00538A","#FF7A5C","#53377A","#FFB300","#F4C800","#93AA00","#593315","#F13A13"],ml={cosy:{positiveColor:"darkblue",negativeColor:"blue"},roesy:{positiveColor:"#e75480",negativeColor:"yellow"},noesy:{positiveColor:"#e75480",negativeColor:"yellow"},tocsy:{positiveColor:"green",negativeColor:"yellow"},hsqc:{positiveColor:"black",negativeColor:"yellow"},hmbc:{positiveColor:"darkviolet",negativeColor:"yellow"}};function Pm(e,t=[]){if(!ml[e]){const n=ba(!1,t),o=_m(n,50);return{positiveColor:n,negativeColor:o}}return ml[e]}function Hs(e){const t=Math.max(0,Math.min(100,e)),o=Math.round(t/100*255).toString(16);return t===100?"":o.padStart(2,"0")}function _m(e,t){return e+Hs(t)}function ba(e=!1,t=[],n=100){const o=xa.filter(s=>!t.includes(s));if(o.length>0&&!e)return o[0]+Hs(n);{let i=String(`#${Math.random().toString(16).slice(2,8).toUpperCase()}`).replace(/[^0-9a-f]/gi,"");i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]);let l="#",r;for(let a=0;a<3;a++)r=parseInt(i.substr(a*2,2),16),r=Math.round(Math.min(Math.max(0,r+r*-.25),255)).toString(16),l+=`00${r}`.substr(r.length);return l+Hs(n)}}function Fm(e){return cn({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.integrals)}function ya(e){const{x:t}=e.data;return(t[t.length-1]-t[0])/1e4}function Yt(e){const t=(e==null?void 0:e.filters)&&(e==null?void 0:e.filters.find(n=>n.name===no));return(t==null?void 0:t.flag)?t.value:0}function Lm(e,t,n){var o;for(const{x:s}of((o=t.peaks)==null?void 0:o.values)||[])if(Math.abs(e.x-s)<n)return!0;return!1}function va(e,t){const n=Yt(t),o=ya(t);return e.reduce((s,i)=>(Lm(i,t,o)||s.push({id:(i==null?void 0:i.id)||U(),originalX:i.x-n,x:i.x,y:i.y,width:i.width}),s),[])}function Om(e,t){var n;return cn({values:[],options:{}},e.peaks,{values:va(((n=e==null?void 0:e.peaks)==null?void 0:n.values)||[],t)})}function $m(e,t,n){var o;for(const{from:s,to:i}of((o=t.ranges)==null?void 0:o.values)||[])if(Math.abs(e.from-s)<n&&Math.abs(e.to-i)<n)return!0}function kn(e,t){const{x:n,re:o}=t.data,s=Yt(t),i=ya(t);return e.reduce((l,r)=>{if($m(r,t,i))return l;const a=vn({x:n,y:o},{from:r.from,to:r.to,reverse:!0}),u=r.signals.map(d=>{const x=d,{kind:h=null,id:m}=x,g=G(x,["kind","id"]);return b({kind:h||"signal",id:m||U(),originDelta:d.delta-s},g)});return l.push(S(b({},r),{kind:(u==null?void 0:u[0].kind)||We.signal,originFrom:r.from-s,originTo:r.to-s,id:r.id||U(),absolute:a,signals:u})),l},[])}function Hm(e,t){var n;return cn({values:[],options:{sum:void 0,isSumConstant:!0,sumAuto:!0}},e.ranges,{values:kn(((n=e==null?void 0:e.ranges)==null?void 0:n.values)||[],t)})}function at(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null,file:{binary:null,name:"",extension:""}},e.source),n.display=Object.assign(S(b({name:((o=e.display)==null?void 0:o.name)?e.display.name:U()},zm(e,t)),{isVisible:!0,isPeaksMarkersVisible:!0,isRealSpectrumVisible:!0}),e.display),n.info=Object.assign({nucleus:"1H",isFid:!1,isComplex:!1,dimension:1},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({x:[],re:[],im:[]},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.peaks=Om(e,n),n.integrals=Fm(e),n.ranges=Hm(e,n),fn(n),Vm(n),n}function zm(e,t){let n="black";return(e.display===void 0||e.display.color===void 0)&&(n=ba(!1,t["1d"]||[])),t["1d"]&&t["1d"].push(n),{color:n}}function Vm(e){e.info.isFid&&e.filters.findIndex(t=>t.name===Ls)===-1&&e.info.digitalFilter&&Ae(e,[{name:Ls,options:{digitalFilterValue:e.info.digitalFilter},isDeleteAllow:!1}])}function Ca(e,t,n){const{nucleus:o,solvent:s,name:i=null,frequency:l=400}=t,{x:r,y:a}=vr(e,{frequency:l,nbPoints:524288}),u=at({data:{x:r,im:null,re:a},display:{name:i},info:{nucleus:o,originFrequency:l,baseFrequency:l,pulseSequence:"",solvent:s,isFt:!0}},n);return u.ranges.values=kn(e,u),u}function jm(e,t){const{ranges:n,experiment:{nucleus:o,solvent:s},parts:i}=Gd(e);return Ca(n,{nucleus:o,solvent:s,name:i[0]},t)}function Sn(e){const{display:{isRealSpectrumVisible:t},data:{x:n,re:o,im:s}}=e;return{x:n,y:t?o:s}}const Lt={"1H":{tms:{from:-.1,to:.1,nbPeaks:1,delta:0},tsp:{from:-.1,to:.1,nbPeaks:1,delta:0},glucose:{from:5.18,to:5.28,nbPeaks:2,delta:5.23}},"13C":{}};function Bm(e={}){const{nucleus:t="1H",reference:n="tms"}=e;if(!Lt[t])throw new Error(`Nucleus not found: ${t}`);const o=Lt[t][n.toLowerCase()];if(!o)throw new Error(`Reference not found: ${n}`);return{from:o.delta-.05,to:o.delta+.05,delta:o.delta,nbPeaks:o.nbPeaks}}function Xm(e,t){let{from:n,to:o,nbPeaks:s,targetX:i,reference:l}=t;if(l){let u=Bm({reference:l,nucleus:e.nucleus});n=u.from,o=u.to,s=u.nbPeaks,i=u.delta}const{re:r,x:a}=e.data;return Ym({x:a,y:r},{from:n,to:o},{nbPeaks:s,targetX:i})}function Ym(e,t={},n={}){const{targetX:o=0,nbPeaks:s=1,gsd:i={minMaxRatio:.1,realTopDetection:!0,smoothY:!0,sgOptions:{windowSize:7,polynomial:3}}}=n;let{from:l,to:r}=t;if(l===void 0||r===void 0)return 0;const a=Ze(e.x,l),u=Ze(e.x,r),d={x:e.x.slice(a,u),y:e.y.slice(a,u)};let h=Zd(d,i).sort((g,x)=>x.y-g.y).slice(0,s);if(h.length===0)return 0;const m=Wd(h.map(g=>g.x));return o-m}function Gm(e,t){const n=e.integrals.values.findIndex(o=>o.id===t.id);if(n!==-1){const o=e.integrals.values[n].absolute/t.value,{values:s,sum:i}=e.integrals.values.reduce((l,r,a)=>{const u=r.absolute/o;return l.sum+=u,l.values[a]=S(b({},r),{integral:u}),l},{values:[],sum:0});e.integrals.values=s,e.integrals.options=S(b({},e.integrals.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:i})}}function ka(e){return eo.includes(e.kind)}function gl(e,t,n=null){return e.reduce((o,s)=>n&&n(s)===!0?o+=Math.abs(s[t]):o,0)}function Sa(e,t,n,o=!1){var a;const{values:s,options:i}=e,l=gl(s,"absolute",n);let r=0;if(i.sum){if(e.options.isSumConstant||o)r=l>0?i.sum/l:0;else if((a=e.values)==null?void 0:a[0]){const u=e.values[0];r=(u[t]?u[t]:i.sum)/u.absolute}}e.values=e.values.map(u=>b(b({},u),n(u)&&{[t]:u.absolute*r})),!e.options.isSumConstant&&!o&&(e.options.sum=gl(e.values,t,n))}function wn(e,t=!1){Sa(e.integrals,"integral",ka,t)}function oo(e){return e.info.dimension===1}function Zm(e,t){const{minMaxRatio:n,maxNumberOfPeaks:o,noiseFactor:s,lookNegative:i,windowFromIndex:l,windowToIndex:r}=t,a=Ud(e.data.re.map(m=>Math.abs(m)));let{re:u,x:d}=e.data;l!==void 0&&r!==void 0&&(d=d.slice(l,r),u=u.slice(l,r));let h=Kd({x:d,y:u},{lookNegative:i,noiseLevel:a*s,minMaxRatio:n,realTopDetection:!0,smoothY:!1,sgOptions:{windowSize:15,polynomial:3}});return h.sort((m,g)=>g.y-m.y),o<h.length&&(h=h.slice(0,o)),va(h,e)}function wa(e,t){const{from:n,to:o}=t;let s=e.x.findIndex(r=>r>=n),i=e.x.findIndex(r=>r>=o)-1;s>i&&(s=i,i=s);const l=e.re.slice(s,i);if(l&&l.length>0){const r=Cr(l),a=l.findIndex(d=>d===r);return{x:e.x[s+a],y:r,xIndex:s+a}}return null}function Ea(e){return e.replace(/[0-9]/g,"")}function di(e,t){let n=b({},e);const{molecules:o,nucleus:s}=t;if(e.sumAuto&&Array.isArray(o)&&o.length>0){const{mf:l,key:r}=o[0];n=S(b({},n),{sumAuto:!0,mf:l,moleculeKey:r})}else{const i=n,{mf:l,moleculeKey:r}=i,a=G(i,["mf","moleculeKey"]);n=S(b({},a),{sumAuto:!1})}return n.sum||(n.sum=Aa(n.mf||null,s)),n}function Aa(e,t){if(!e||!t)return 100;const o=Ea(t),s=Wm(e);return s[o]?s[o]:100}function pi(e,t){const{nucleus:n,options:o}=t;if(o.sumAuto){const{mf:i,moleculeKey:l}=o,r=Aa(i,n);e.options=S(b({},e.options),{sumAuto:!0,moleculeKey:l,mf:i,sum:r})}else{const s=e.options,{mf:i,moleculeKey:l}=s,r=G(s,["mf","moleculeKey"]);e.options=S(b({},r),{sumAuto:!1,sum:o.sum})}}function Wm(e){const t={},n=e.split(/(\d+)/);for(let o=0;o<n.length-1;o=o+2)t[n[o]]=Number(n[o+1]);return t}function hi(e,t,n){const o=["ranges","integrals"];for(const s of e.data)if(oo(s))for(const i of o){const{moleculeKey:l,mf:r,sumAuto:a}=s[i].options;if((t===l||!l&&!r)&&a){const u=n?{mf:n.mf,moleculeKey:n.key}:{mf:void 0,moleculeKey:void 0};pi(s[i],{nucleus:s.info.nucleus,options:S(b({},u),{sumAuto:!0,sum:void 0})}),Et(s,!0),wn(s,!0)}}}function Um(e,t){return t===void 0?e.signals?e.signals.reduce((n,o)=>o.nbAtoms?o.nbAtoms+n:n,0):0:e.signals[t].nbAtoms||0}function Km(e,t){e.nbAtoms=Um(e,t),e.nbAtoms===0&&delete e.nbAtoms}function qm(e){delete e.diaIDs,delete e.nbAtoms,e.signals.forEach(t=>{delete t.diaIDs,delete t.nbAtoms}),delete e.nbAtoms}function jn(e,t="both",n={}){switch(t){case"both":qm(e);break;case"range":delete e.diaIDs,delete e.nbAtoms;break;case"signal":delete e.signals[n.signalIndex].diaIDs,delete e.signals[n.signalIndex].nbAtoms;break}return Km(e),e}function Ta(e){return e.kind===We.signal}function Jm(e,t){return!e.signals.some(n=>n.kind===void 0||!t.includes(n.kind))}function zt(e,t){const n=t.reduce((o,s)=>(s.id&&o.push(s.id),s.signals&&(o=o.concat(s.signals.map(i=>i.id,[]))),o),[]);e.dispatch({type:"REMOVE_ALL",payload:{id:n,axis:"x"}})}function Qm(e){return e.signals&&Jm(e,eo)}function Et(e,t=!1){Sa(e.ranges,"integration",Qm,t)}function eg(e,t){const{from:n,to:o,molecules:s,nucleus:i}=t,{x:l,re:r}=e.data,a=vn({x:l,y:r},{from:n,to:o,reverse:!0}),u=hf(l,r,n,o,e.info.originFrequency);if(!!u)try{const d={id:U(),from:n,to:o,absolute:a,signals:[b({id:U()},u)],kind:We.signal,integration:0};e.ranges.options=di(e.ranges.options,{molecules:s,nucleus:i}),e.ranges.values=e.ranges.values.concat(kn([d],e)),Et(e)}catch{throw new Error("Could not calculate the multiplicity")}}function tg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,l=e.ranges.values.findIndex(a=>a.id===t.id),r=vn({x:s,y:i},{from:n,to:o,reverse:!0});l!==-1&&(e.ranges.values[l]=S(b(S(b({},e.ranges.values[l]),{originFrom:n,originTo:o}),t),{absolute:r}),Et(e))}function ng(e,t){const n=e.ranges.values.findIndex(o=>o.id===t.id);if(n!==-1&&e.ranges.options.sum){const{absolute:o,integration:s}=e.ranges.values[n],i=o/t.value,l=t.value/s*e.ranges.options.sum;e.ranges.options=S(b({},e.ranges.options),{mf:void 0,moleculeKey:void 0,sumAuto:!1,sum:l}),e.ranges.values=e.ranges.values.map(r=>S(b({},r),{integration:r.absolute/i}))}}function og(e,t){const{rangeID:n,signalID:o,newSignalValue:s}=t;let i=0;const l=e.ranges.values.findIndex(r=>r.id===n);if(l!==-1){const r=e.ranges.values[l].signals.findIndex(a=>a.id===o);i=s-e.ranges.values[l].signals[r].delta,e.ranges.values[l].signals[r].delta=s}return i}function sg(e,t){const{from:n,to:o}=t,{x:s,re:i}=e.data,l=vn({x:s,y:i},{from:n,to:o,reverse:!0}),r=qd({x:s,y:i},{from:n,to:o}).y,a=Jd({x:s,y:i},{from:n,to:o}).y,u=Yt(e);return{id:U(),originFrom:n-u,originTo:o-u,from:n,to:o,absolute:l,min:r,max:a}}const ig={minMaxRatio:1,realTopDetection:!0,maxCriteria:!0,smoothY:!1,integrationSum:100,factorStd:5,clean:!0,sgOptions:{windowSize:7,polynomial:3}};function lg(e,t={}){let{re:n,x:o}=e.data;const{originFrequency:s,nucleus:i}=e.info,{windowFromIndex:l,windowToIndex:r,peakPicking:a}=t,u=b(b({},ig),a),d={frequency:s,nucleus:i,compile:!0,frequencyCluster:13,keepPeaks:!0};if(l!==void 0&&r!==void 0&&(o=o.slice(l,r),n=n.slice(l,r)),s){let m=1/s/(o[1]-o[0]),g=Math.max(Math.round(m/2),5);u.sgOptions={windowSize:g-g%2+1,polynomial:3}}return u.smoothY=void 0,u.sgOptions=void 0,Qd({x:o,y:n},{peakPicking:u,ranges:d})}function Da(e,t){const l=t,{molecules:n,nucleus:o}=l,s=G(l,["molecules","nucleus"]);s.impurities={solvent:e.info.solvent||""};const i=lg(e,s);e.ranges.options=di(e.ranges.options,{molecules:n,nucleus:o}),e.ranges.values=e.ranges.values.concat(kn(i,e)),Et(e)}function rg(e,t){e.integrals.values=e.integrals.values.map(n=>S(b({},n),{from:n.originFrom+t,to:n.originTo+t}))}function ag(e,t){e.peaks.values=e.peaks.values.map(n=>{const o=n.originalX+t,s=Ze(e.data.x,o);return S(b({},n),{y:e.data.re[s],x:n.originalX+t})})}function cg(e,t){e.ranges.values=e.ranges.values.map(n=>S(b({},n),{from:(n.originFrom||0)+t,to:(n.originTo||0)+t,signals:(n==null?void 0:n.signals)&&n.signals.map(o=>S(b({},o),{delta:(o.originDelta||0)+t}))}))}function En(e){const t=Yt(e);ag(e,t),cg(e,t),rg(e,t)}const Ra=20;var B=(e=>(e.DM_1D="1D",e.DM_2D="2D",e))(B||{});const It={"2D":{top:100,right:50,bottom:70,left:100},"1D":{top:10,right:10,bottom:70,left:10}};function ug(e,t={},n={}){const{dependentVariables:o,info:s,meta:i,source:l}=e;let r=Ia(o[0].components);return r.im&&(s.isComplex=!0),Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),at(S(b({},t),{source:l,info:s,meta:i,data:r}),n)}function dg(e,t={},n={}){let o=e.dimensions[0],s=e.dependentVariables,i=o.quantityName,l=o.count,r=o.increment.magnitude,a=o.originOffset.magnitude,u=o.coordinatesOffset.magnitude,d=s[0].components[0],h=[],m=[];for(let k=d.length-1;k>0;k-=2)h.push(d[k-1]),m.push(d[k]);let g={},x,y;switch(i){case"frequency":y=0+u/a*1e6,x=r/a*1e6,g.re=h,g.im=m;break;case"time":y=a,x=r,g.re=h.reverse(),g.im=m.reverse().map(k=>-k);break}let C=[];for(let k=0;k<l;k++)C.push(y+k*x);return g.x=C,at(S(b({},t),{data:g}),n)}function pg(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let l=Ia(o[0].components);return Array.isArray(s.nucleus)&&(s.nucleus=s.nucleus[0]),at(S(b({},t),{info:s,meta:i,data:l}),n)}function Ia(e){var s,i,l,r,a,u;let t=((i=(s=e[0])==null?void 0:s.data)==null?void 0:i.x)?e[0].data.x:[],n=((r=(l=e[0])==null?void 0:l.data)==null?void 0:r.y)?e[0].data.y:[],o=((u=(a=e[1])==null?void 0:a.data)==null?void 0:u.y)?e[1].data.y:null;return t[0]>t[1]&&(t.reverse(),n.reverse(),o&&o.reverse()),{x:t,re:n,im:o}}function hg(e,t,n){let o=e.info.nucleus.indexOf(t);o===-1&&(o=0);let s={nucleus:e.info.nucleus[o],isFid:!1,isComplex:!1,dimension:1},i=o===0?e.data.minX:e.data.minY,l=o===0?e.data.maxX:e.data.maxY,r=o===0?e.data.z[0].length:e.data.z.length,a=new Float64Array(r);if(o===1)for(let d=0;d<e.data.z.length;d++)for(let h=0;h<e.data.z[0].length;h++)a[d]+=e.data.z[d][h];else for(let d=0;d<e.data.z[0].length;d++)for(const h of e.data.z)a[d]+=h[d];let u={x:Ns({from:i,to:l},r),re:a};return at({info:s,data:u},n)}function fg(e,t){const n=e.data,o=(n.maxX-n.minX)/(n.z[0].length-1),s=(n.maxY-n.minY)/(n.z.length-1),i=Math.floor((t.x-n.minX)/o),l=Math.floor((t.y-n.minY)/s);if(i<0||i>=n.z[0].length||l<0||l>=n.z.length)return;let r={nucleus:e.info.nucleus[0],isFid:!1,isComplex:!1,dimension:1},a={x:Ns({from:e.data.minX,to:e.data.maxX},e.data.z[0].length),re:new Float64Array(e.data.z[0].length)};for(let x=0;x<e.data.z[0].length;x++)a.re[x]+=e.data.z[l][x];let u={nucleus:e.info.nucleus[1],isFid:!1,isComplex:!1,dimension:1},d={x:Ns({from:e.data.minY,to:e.data.maxY},e.data.z.length),re:new Float64Array(e.data.z.length)},h=e.data.z.length-1;for(let x=0;x<e.data.z.length;x++)d.re[x]+=e.data.z[h--][i];const m=at({info:r,data:a},{}),g=at({info:u,data:d},{});return{horizontal:m,vertical:g}}const Na={positive:{contourLevels:[0,21],numberOfLayers:10},negative:{contourLevels:[0,21],numberOfLayers:10}};class mg{constructor(t,n=Na,o={positive:10,negative:10}){this.options=n;const{positive:s,negative:i}=o;this.currentLevelPositive=s,this.currentLevelNegative=i;const l=Cs(t.minX,t.maxX,t.z[0].length),r=Cs(t.minY,t.maxY,t.z.length);this.conrec=new ep(t.z,{xs:l,ys:r,swapAxes:!1}),this.median=t.noise,this.minMax=t}getLevel(){return{levelPositive:this.currentLevelPositive,levelNegative:this.currentLevelNegative}}setLevel(t,n){this.currentLevelPositive=t,this.currentLevelNegative=n}setOptions(t){const n=t.positive.contourLevels,o=t.negative.contourLevels;this.currentLevelPositive>=n[1]?this.currentLevelPositive=n[1]:this.currentLevelPositive<=n[0]&&(this.currentLevelPositive=n[0]),this.currentLevelNegative>=o[1]?this.currentLevelNegative=o[1]:this.currentLevelNegative<=o[0]&&(this.currentLevelNegative=o[0]),this.options=t}wheel(t){const n=Math.sign(t),o=this.options.positive.contourLevels,s=this.options.negative.contourLevels;(this.currentLevelPositive>o[0]&&n===-1||this.currentLevelPositive<o[1]&&n===1)&&(this.currentLevelPositive+=n),(this.currentLevelNegative>s[0]&&n===-1||this.currentLevelNegative<s[1]&&n===1)&&(this.currentLevelNegative+=n)}shiftWheel(t){const n=Math.sign(t),[o,s]=this.options.positive.contourLevels;if(!(this.currentLevelPositive===o&&n===-1||this.currentLevelPositive>=s&&n===1))return this.currentLevelPositive+=n,[]}drawContours(){const t=this.currentLevelPositive/2+1,n=this.currentLevelNegative/2+1,{positive:{numberOfLayers:o},negative:{numberOfLayers:s}}=this.options;return{positive:this.getContours(t,{nbLevels:o}),negative:this.getContours(n,{negative:!0,nbLevels:s})}}getContours(t,n={}){const{negative:o=!1,timeout:s=2e3,nbLevels:i=10}=n,l=Math.max(Math.abs(this.minMax.maxZ),Math.abs(this.minMax.minZ));let r=Cs(this.median*1*Math.pow(2,t),l,i,2);o&&(r=r.map(u=>-u));let a=[];try{a=this.conrec.drawContour({contourDrawer:"basic",levels:r,timeout:s})}catch(u){throw console.log(u),u}return a}}function Cs(e,t,n,o){if(o!==void 0){const s=[];s[0]=0;for(let r=1;r<=n;r++)s[r]=s[r-1]+(o-1)/Math.pow(o,r);const i=s[n],l=new Array(n);for(let r=0;r<n;r++)l[r]=(t-e)*(1-s[r+1]/i)+e;return l}else{const s=(t-e)/(n-1);return gg(e,t+s/2,s)}}function gg(e,t,n){const o=[];for(let s=e;s<t;s+=n)o.push(s);return o}function so(e,t={}){var o;const n={};return n.id=e.id||U(),n.source=Object.assign({jcampURL:null},e.source),n.display=Object.assign(S(b({name:((o=e.display)==null?void 0:o.name)?e.display.name:U()},xg(e,t)),{isPositiveVisible:!0,isNegativeVisible:!0,isVisible:!0,contourOptions:Na,dimension:2}),e.display),n.info=Object.assign({nucleus:["1H","1H"],isFt:!0,isFid:!1,isComplex:!1,dimension:2},e.info),n.originalInfo=n.info,n.meta=Object.assign({},e.meta),n.data=Object.assign({z:[],minX:0,minY:0,maxX:0,maxY:0},e.data),n.originalData=n.data,n.filters=Object.assign([],e.filters),n.zones=Object.assign({values:[],options:{}},e.zones),n.processingController=new mg(n.data,n.display.contourOptions),fn(n),n}function xg(e,t){let n={positiveColor:"red",negativeColor:"blue"};return(e.display===void 0||e.display.negativeColor===void 0||e.display.positiveColor===void 0)&&(n=Pm(e.info.experiment,t["2d"]||[])),t["2d"]&&t["2d"].push(n.positiveColor),n}function zs(e){return e.info.dimension===2}function io(e){let t={xShift:0,yShift:0};return(e==null?void 0:e.filters)&&(t=e.filters.reduce((n,o)=>(o.name===ai&&(n.xShift=(o==null?void 0:o.flag)?o.value:0),o.name===ci&&(n.yShift=(o==null?void 0:o.flag)?o.value:0),n),{xShift:0,yShift:0})),t}function lo(e){const{xShift:t,yShift:n}=io(e);bg(e,{xShift:t,yShift:n})}function bg(e,{xShift:t,yShift:n}){e.zones.values=e.zones.values.map(o=>{var s;return S(b({},o),{signals:(s=o.signals)==null?void 0:s.map(i=>S(b({},i),{x:S(b({},i.x),{delta:i.x.originDelta+t}),y:S(b({},i.y),{delta:i.y.originDelta+n})}))})})}function yg(e,t){return S(b({id:e.id},t===bt.ROW_DATA||t===bt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{zones:e.zones,filters:e.filters,display:e.display})}function vg(e,t,n){var s;const o=e.zones.values.findIndex(i=>i.id===t);if(o!==-1){const i=e.zones.values[o].signals.findIndex(r=>r.id===n.id),l=e.zones.values[o];if(i!==-1){const r=l.signals[i],a=(n==null?void 0:n.x)||(n==null?void 0:n.x)===0?n.x-r.x.delta:0,u=(n==null?void 0:n.y)||(n==null?void 0:n.y)===0?n.y-((s=r.y)==null?void 0:s.delta):0;return{xShift:a,yShift:u}}}return{xShift:0,yShift:0}}function Ma(e,t){let n={};return t.selectedZone?(t.enhanceSymmetry=!1,n=kg(e,t.selectedZone)):n=e.data,Cg(n,S(b({},t),{info:e.info}))}function Cg(e,t){const{thresholdFactor:n,clean:o,maxPercentCutOff:s,convolutionByFFT:i}=t,{nucleus:l,originFrequency:r}=t.info,{enhanceSymmetry:a=l[0]===l[1]}=t;return tp(e,{nuclei:l,observedFrequencies:r,thresholdFactor:n,clean:o,maxPercentCutOff:s,enhanceSymmetry:a,convolutionByFFT:i})}function kg(e,t){const{fromX:n,toX:o,fromY:s,toY:i}=t,l=e.data,r=(l.maxX-l.minX)/(l.z[0].length-1),a=(l.maxY-l.minY)/(l.z.length-1);let u=Math.max(Math.floor((n-l.minX)/r),0),d=Math.max(Math.floor((s-l.minY)/a),0),h=Math.min(Math.floor((o-l.minX)/r),l.z[0].length-1),m=Math.min(Math.floor((i-l.minY)/a),l.z.length-1);u>h&&([u,h]=[h,u]),d>m&&([d,m]=[m,d]);let g={z:[],maxX:l.minX+h*r,minX:l.minX+u*r,maxY:l.minY+m*a,minY:l.minY+d*a},x=Number.MIN_SAFE_INTEGER,y=Number.MAX_SAFE_INTEGER,C=h-u+1;for(let v=d;v<m;v++){let k=new Float32Array(C),E=u;for(let T=0;T<C;T++)k[T]=l.z[v][E++];for(let T of k)x<T&&(x=T),y>T&&(y=T);g.z.push(Array.from(k))}return g.minZ=y,g.maxZ=x,g}function Pa(e,t){const n=Ma(e,t),{xShift:o,yShift:s}=io(e),{minX:i,maxX:l,minY:r,maxY:a}=e.data,u=Math.abs(l-i)/1e4,d=Math.abs(a-r)/1e4;return n.reduce((m,g)=>{const x=g.x||{from:0,to:0},y=g.y||{from:0,to:0};for(const{x:v,y:k}of e.zones.values)if(Math.abs(x.from-v.from)<u&&Math.abs(x.to-v.to)<u&&Math.abs(y.from-k.from)<d&&Math.abs(y.to-k.to)<d)return m;const C=g.signals.map(v=>({id:U(),peaks:v.peaks,x:b({originDelta:v.x.delta-o},v.x),y:b({originDelta:v.y.delta-s},v.y),kind:"signal"}));return m.push({id:U(),x:{from:x.from,to:x.to},y:{from:y.from,to:y.to},signals:C,kind:We.signal}),m},[])}function Sg(e,t){const n=Ma(e,t),{xShift:o,yShift:s}=io(e);return n.map(l=>{const r=l.signals.map(a=>({id:U(),peaks:a.peaks,x:b({originDelta:a.x.delta-o},a.x),y:b({originDelta:a.y.delta-s},a.y),kind:a.kind||"signal"}));return{id:U(),x:l.x,y:l.y,signals:r,kind:We.signal}},[])}function wg(e,t,n){const{dependentVariables:o,info:s,meta:i}=e;let l=o[0].components;return so(S(b({},t),{info:s,meta:i,data:l}),n)}function Eg(e,t={},n={}){const{dependentVariables:o,meta:s,source:i}=e;let l=o[0].components;return so(S(b({},t),{source:i,meta:s,data:l}),n)}function Ag(e,t={},n={}){return so({},n)}function Mo(e,t){return JSON.parse(JSON.stringify(e),function(o,s){if(o in t){this[t[o]]=s;return}return s})}function Tg(e){if((e==null?void 0:e.version)===1)return e;const t=S(b({},e),{version:1}),n={j:"js",signal:"signals",integral:"integration",peak:"peaks",diaID:"diaIDs"};for(const o of t.spectra)o.ranges?o.ranges=Mo(o.ranges,n):o.zones&&(o.zones=Mo(o.zones,n));return t}function Dg(e){if((e==null?void 0:e.version)===2)return e;const t=S(b({},e),{version:2}),n={peaks:{delta:"x",originDelta:"originalX",intensity:"y"},ranges:{atomIDs:"atoms",intensity:"y"}};for(const o of t.spectra)o.peaks?o.peaks=Mo(o.peaks,n.peaks):o.ranges?o.ranges=Mo(o.ranges,n.ranges):o.zones&&(o.zones.values=Rg(o.zones.values));return t}function Rg(e){return e.map(t=>(t.signals&&(t.signals=t.signals.map(n=>{if(n.x&&n.y){const o=n,{x:s}=o,i=s,{fromTo:u}=i,d=G(i,["fromTo"]),{y:l}=o,r=l,{fromTo:h}=r,m=G(r,["fromTo"]);n=S(b({},n),{x:b(b({},d),u),y:b(b({},m),h)})}else{const a=n,{fromTo:u,deltaX:d,resolutionX:h,nucleusX:m,deltaY:g,resolutionY:x,nucleusY:y,shiftX:C,shiftY:v}=a,k=G(a,["fromTo","deltaX","resolutionX","nucleusX","deltaY","resolutionY","nucleusY","shiftX","shiftY"]);n=S(b({},k),{x:{from:u[0].from,to:u[0].to,delta:d,resolution:h,nucleus:m},y:{from:u[1].from,to:u[1].to,delta:g,resolution:x,nucleus:y}})}return n},[])),t),[])}const _a=2;function Ig(e){return t=>e.reduce((n,o)=>o(n),t)}function xl(e){let t=[Tg,Dg],n=(e==null?void 0:e.version)||0;if(n>_a)throw new Error("This file can not be imported using the current NMRium version, Please move to the new one !!! ");return Ig(t.slice(n))(e)}const Ng=/^(?:[A-Z][a-z]?\d* *)+$/;function Fa(e){if(!Ng.test(e))throw Error(`MF can not be parsed: ${e}`);const t={},n=e.matchAll(/(?<atom>[A-Z][a-z]?)(?<number>[0-9]*)/g);for(const o of n){const{atom:s,number:i}=o.groups;t[s]||(t[s]=0),t[s]+=i===""?1:Number(i)}return t}function Po(e={}){const t=e.key||U(),n=e.molfile||"",o=Bt.Molecule.fromMolfile(n),s=o.getMolecularFormula();return{key:t,molfile:n,mf:s.formula,em:s.absoluteWeight,mw:s.relativeWeight,svg:o.toSVG(50,50),atoms:Fa(s.formula)}}function Mg(e){return{molfile:e.molfile}}var bt=(e=>(e.ROW_DATA="ROW_DATA",e.DATA_SOURCE="DATA_SOURCE",e))(bt||{});function Pg(e,t,n,o){return fetch(t).then(s=>s.arrayBuffer()).then(s=>{La(e,s,n,o)})}function La(e,t,n,o){n=n||{};const s=op(t,{noContour:!0,xy:!0,keepRecordsRegExp:/.*/,profiling:!0});if(s.length!==0)for(let i of s){let{dependentVariables:l}=i;l[0].components&&(l[0].components.length>0||l[0].components.z.length)&&_g(e,i,n,o)}}function _g(e,t,n,o){const s=t.info.dimension;s===1&&e.push(pg(t,n,o)),s===2&&e.push(wg(t,n,o))}function Fg(e,t,n){const o=t.info.dimension;o===1&&e.push(at(t,n)),o===2&&e.push(so(t,n))}function Lg(e,t,n={},o={}){let s=sp(t);s=s[0];let i=s.description,l=i.metadata;delete i.metadata,i.acquisitionMode=0,i.experiment=i.dimension===1?"1d":"2d",i.type="NMR SPECTRUM",i.nucleus=i.nucleus[0],i.numberOfPoints=i.numberOfPoints[0],i.acquisitionTime=i.acquisitionTime[0],i.baseFrequency=i.baseFrequency[0],i.frequencyOffset=i.frequencyOffset[0],i.spectralWidthClipped=s.application.spectralWidthClipped,i.dimension===1&&s.dependentVariables&&e.push(dg(s,S(b({},n),{display:b({},n.display),info:i,meta:l}),o)),i.dimension===2&&i.isFt&&e.push(Ag(s,S(b({},n),{display:b({},n.display),info:i}),o))}async function bl(e=[],t={}){var s;const n=[];let o=[];for(let i of e)((s=i==null?void 0:i.source)==null?void 0:s.jcampURL)!=null?o.push(Pg(n,i.source.jcampURL,i,t)):Fg(n,i,t);return await Promise.all(o),n}async function Oa(e,t,n){const o=[];let i=await np(t,{xy:!0,noContours:!0,keepOriginal:!0});for(let l of i){let{info:r,dependentVariables:a}=l;r.dimension===1?a[0].components&&o.push(ug(l,S(b({},e),{display:b({},e.display)}),n)):r.dimension===2&&r.isFt&&o.push(Eg(l,S(b({},e),{info:r,display:b({},e.display)}),n))}return o}function Og(e,t){const n=[];for(const o of e)Lg(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function $a(e,t){const n=[];for(const o of e)La(n,o.binary,{display:{name:o.name},source:{jcampURL:o.jcampURL?o.jcampURL:null,file:o}},t);return n}function $g(e){const{activeTab:t,verticalAlign:{align:n}}=e;return b({activeTab:t},e.displayerMode===B.DM_1D?{verticalAlign:n}:{})}function yl(e,t="DATA_SOURCE"){const{data:n,molecules:o,correlations:s,multipleAnalysis:i,toolOptions:{data:{exclusionZones:l}}}=e||{data:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:{}},r=n.map(d=>d.info.dimension===1?Hg(d,t):yg(d,t)),a=$g(e),u=o.map(d=>Mg(d));return{spectra:r,molecules:u,correlations:s,multipleAnalysis:i,exclusionZones:l,version:_a,preferences:a}}function Hg(e,t){return S(b({id:e.id,display:e.display},t===bt.ROW_DATA||t===bt.DATA_SOURCE&&!e.source.jcampURL?{data:e.originalData,info:e.originalInfo,meta:e.meta,source:{jcampURL:null}}:{source:{jcampURL:e.source.jcampURL}}),{peaks:e.peaks,integrals:e.integrals,ranges:e.ranges,filters:e.filters})}const Ha={frequency:400,"1d":{"1H":{from:-1,to:12},"13C":{from:-5,to:220},nbPoints:2**17,lineWidth:1},"2d":{nbPoints:{x:1024,y:1024}},spectra:{proton:!0,carbon:!0,cosy:!0,hsqc:!0,hmbc:!0}},za=[{key:1,value:60,label:"60 MHz"},{key:2,value:100,label:"100 MHz"},{key:3,value:200,label:"200 MHz"},{key:4,value:300,label:"300 MHz"},{key:5,value:400,label:"400 MHz"},{key:6,value:500,label:"500 MHz"},{key:7,value:600,label:"600 MHz"},{key:8,value:800,label:"800 MHz"},{key:9,value:1e3,label:"1000 MHz"},{key:10,value:1200,label:"1200 MHz"}],zg="https://nmr-prediction.service.zakodium.com";async function Vg(e){const t=Bt.Molecule.fromMolfile(e);return ip(t,{predictOptions:{C:{webserviceURL:`${zg}/v1/predict/carbon`}}})}function jg(e,t){const n=[],o="#593315";for(const s in e)if(t.spectra[s]){const i=e[s];switch(s){case"proton":case"carbon":{const l=Bg({spectrum:i,inputOptions:t,experiment:s,color:o});n.push(l);break}case"cosy":case"hsqc":case"hmbc":{const l=Yg({spectrum:i,inputOptions:t,experiment:s,color:o});n.push(l);break}}}return n}function Bg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,ranges:l,nucleus:r}=t,{"1d":{nbPoints:a},frequency:u}=n,d=Va(r,u),{x:h,y:m}=lp(i,S(b({},n["1d"][r]),{frequency:d,nbPoints:a})),g=at({data:{x:h,im:null,re:m},display:{color:s},info:{nucleus:r,originFrequency:d,baseFrequency:d,pulseSequence:"prediction",solvent:"",experiment:o,isFt:!0}},[]);return g.ranges.values=kn(l,g),wn(g),g}function Xg(e){return e.reduce((t,n)=>{const l=n,{signals:o}=l,s=G(l,["signals"]),i=o.reduce((r,a)=>{const g=a,{x:u,y:d,id:h}=g,m=G(g,["x","y","id"]);return r.push(b({id:h||U(),kind:"signal",x:S(b({},u),{originDelta:u.delta||0}),y:S(b({},d),{originDelta:d.delta||0})},m)),r},[]);return t.push(S(b({id:U()},s),{signals:i,kind:We.signal})),t},[])}function Yg(e){const{spectrum:t,inputOptions:n,experiment:o,color:s}=e,{signals:i,zones:l,nuclei:r}=t,a=n["1d"][r[0]],u=n["1d"][r[1]],d=Gg(r),h=Va(r,n.frequency),m=rp(i,{from:{x:a.from,y:u.from},to:{x:a.to,y:u.to},nbPoints:{x:n["2d"].nbPoints.x,y:n["2d"].nbPoints.y},width:d}),g=so({data:S(b({},m),{noise:.01}),display:{positiveColor:o==="hmbc"?"#e68337":s},info:{nucleus:r,originFrequency:h,baseFrequency:h,pulseSequence:o,experiment:"2d"}},[]);return g.zones.values=Xg(l),g}function Gg(e){return e[0]===e[1]?.03:{x:.03,y:.32}}function Va(e,t){return typeof e=="string"?e==="13C"?t*.25:t:e[0]===e[1]?`${t},${t}`:`${t},${t*.25}`}const fi=[{key:"outOfLimit",color:"red"},{key:"ambiguousAttachment",color:"orange"},{key:"notAttached",color:"blue"},{key:"incomplete",color:"red"}],Zg=fi.map(e=>e.key),ja={C:.25,H:.02,N:.25,F:.25,Si:.25,P:.25},_={zoom:{id:"zoom",label:"Zoom",hasOptionPanel:!1,isFilter:!1},peakPicking:{id:"peakPicking",label:"Peaks Picking",hasOptionPanel:!0,isFilter:!1},integral:{id:"integral",label:"integral Tool",hasOptionPanel:!1,isFilter:!1},zone2D:{id:"zone2D",label:"Zone Tool",hasOptionPanel:!0,isFilter:!1},slicingTool:{id:"slicingTool",label:"Slicing Tool",hasOptionPanel:!1,isFilter:!1},HMove:{id:"HMove",label:"Move spectrum horizontally",hasOptionPanel:!1,isFilter:!1},equalizerTool:{id:"equalizerTool",label:"Equalizer Tool",hasOptionPanel:!1,isFilter:!1},rangesPicking:{id:"rangesPicking",label:"Ranges Picking",hasOptionPanel:!0,isFilter:!1},zeroFilling:{id:li,label:ma,hasOptionPanel:!0,isFilter:!0},phaseCorrection:{id:Ht,label:da,hasOptionPanel:!0,isFilter:!0},baseLineCorrection:{id:"baseLineCorrection",label:"baseline correction",hasOptionPanel:!0,isFilter:!0},generalSelector:{id:"generalSelector",label:"range general selector",hasOptionPanel:!1,isFilter:!1},editRange:{id:"editRange",label:"edit range",hasOptionPanel:!1,isFilter:!1},multipleSpectraAnalysis:{id:"multipleSpectraAnalysis",label:"Multiple Spectra Analysis",hasOptionPanel:!1,isFilter:!1},exclusionZones:{id:"exclusionZones",label:"Exclusion Zones",hasOptionPanel:!1,isFilter:!1},databaseRangesSelection:{id:"databaseRangesSelection",label:"Filter Database",hasOptionPanel:!1,isFilter:!1}};function Wg(e,t){let n=[];const{baseFrequency:o=500}=t;for(const s of e){const{jCoupling:i,delta:l,diaIDs:r=[],multiplicity:a,integration:u}=s,d=Ug({delta:l,js:i,frequency:o});if(i&&a&&i.length===a.length){i.sort((h,m)=>m-h);for(let h=0;h<i.length;h++)i[h].multiplicity=a[h]}n.push(S(b({},d),{integration:u,signals:[{js:i,delta:l,diaIDs:r,multiplicity:a}]}))}t.ranges.values=kn(Kg(n),t)}function Ug(e={}){const{delta:t,js:n=[],frequency:o}=e;let s=.5;for(let i of n)s+=i.coupling;return s/=o,{from:t-s,to:t+s}}function Kg(e){e.sort((t,n)=>t.from-n.from);for(let t=0;t<e.length-1;t++)e[t].to>e[t+1].from&&(e[t].to=Math.max(e[t+1].to,e[t].to),e[t].signals=e[t].signals.concat(e[t+1].signals),e[t].integration+=e[t+1].integration,e.splice(t+1,1),t--);return e}const qg=["y","x"];function Jg(e,t){let n=[];const o=io(t),{baseFrequency:s}=t.info,i={x:s[0],y:s[1]};for(const l of e){let r={x:{},y:{},id:U(),kind:"signal"},a={id:U(),kind:"signal",peaks:[]},u={x:10,y:10};for(let d of qg){let{coupling:h=[],delta:m,diaIDs:g=[]}=l[d];for(let x of h)u[d]+=x.coupling;if(l.activeCoupling){const{activeCoupling:x=[]}=l;for(let y of x)u[d]+=y.coupling}u[d]/=i[d],r[d]={from:m-u[d],to:m+u[d]},a[d]={delta:m,diaIDs:g,originDelta:m-o[`${d}Shift`]}}n.push(S(b({},r),{signals:[a]}))}t.zones.values=n}async function Qg(e,t){const o=await new dn().loadAsync(e.binary),s=await tx(o.files),i=await ap.toJSON({sdf:s[0],zipFiles:o.files});let{spectra:l,molecules:r=[]}=i,a={spectra:[],molecules:r};for(const u of l){const{file:d,jcampURL:h}=u.source;let m=await ex(d,{jcampURL:h},t)||[];for(const g of m){const{info:x}=g;x.isFid||(x.dimension>1?Jg(u.signals,g):Wg(u.signals,g))}a.spectra.push(...m)}return a}async function ex(e,t={},n={}){const{xy:o=!0,noContours:s=!0,keepOriginal:i=!0,jcampURL:l}=t;switch(e.extension){case"jdx":case"dx":return $a([e],n);case"zip":return Oa({xy:o,noContours:s,keepOriginal:i},e.binary,n);default:if(!l)return}}async function tx(e){let t=[];for(const n in e){const o=n.split("/");if(/^[^.].+sdf$/.exec(o[o.length-1])){const s=o[o.length-1].replace(/\.sdf/,""),i=o.slice(0,o.length-1).join("/"),l=await e[n].async("string");let r=cp(`${l}`,{mixedEOL:!0});r.filename=s,r.root=i!==""?`${i}/`:"",t.push(r)}}return t}function Re(e,t,n){const o=e.find(s=>s.id===t);if(!(o&&n===!0&&o.display.isVisible===!1))return o}function Ba(e,t){for(let n of e.ranges.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function Gn(e,t){for(let n of e.zones.values){const o=n.signals.findIndex(s=>s.id===t);if(o>=0)return n.signals[o]}}function mi(e,t){for(let n of e.ranges.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function _o(e,t){for(let n of e.zones.values)if(n.signals.findIndex(s=>s.id===t)>=0)return n}function gi(e,t,n,o){const s=Re(e,t,o);if(s){if(s.info.dimension===1){const i=mi(s,n);if(i)return i.id}else if(s.info.dimension===2){const i=_o(s,n);if(i)return i.id}}}function Vt(e,t=null){const{width:n,margin:o,xDomains:s,xDomain:i,mode:l}=e,r=l==="RTL"?[n-o.right,o.left]:[o.left,n-o.right];return qe(t?s[t]:i,r)}function Fo(e,t=null){const{height:n,margin:o,verticalAlign:s,yDomain:i,yDomains:l}=e,r=s.align==="center"?(n-30)/2:n-o.bottom-30;let a=[];return t===null||l[t]===void 0?a=[0,i[1]]:a=[0,l[t][1]],qe(a,[r,o.top])}function nx(e){const{height:t,margin:n,verticalAlign:o,integralsYDomains:s,activeSpectrum:i}=e,l=o.align==="center"?t/2:t;return qe((i==null?void 0:i.id)&&s&&s[i==null?void 0:i.id]?s[i==null?void 0:i.id]:[0,0],[l*.3,n.top+l*.1])}function Gt(e,t){const{startX:n,endX:o}=t,s=Vt(e),i=s.invert(n),l=s.invert(o),r=[0,0];return i>l?(r[0]=l,r[1]=i):(r[0]=i,r[1]=l),r}function At(e){return typeof e=="string"?e:e.join(",")}function ox(e){let t=e.data.filter(n=>At(n.info.nucleus)===e.activeTab&&n.info.dimension===1);if(e.activeSpectrum){const n=t.findIndex(o=>{var s;return o.id===((s=e.activeSpectrum)==null?void 0:s.id)});if(n!==-1){const o=t[n].info.isFid||!1;t=t.filter(s=>s.info.isFid===o)}}else t=t.filter(n=>n.info.isFid===!1);return t}function Xa(e){let t=[],n=[],o={},s={};const i=ox(e);try{t=i.reduce((l,r)=>{const{display:a,data:u}=r,d=[u.x[0],u.x[u.x.length-1]];return s[r.id]=d,a.isVisible&&(l=l.concat(d)),l},[]),n=i.reduce((l,r)=>{const{display:a}=r,u=Sn(r),d=xt(u.y);return o[r.id]=d,a.isVisible&&(l=l.concat(d)),l},[])}catch(l){console.log(l)}return{xDomain:xt(t),yDomain:xt(n),yDomains:o,xDomains:s}}function sx(e){let t=[],n=[],o={},s={};const{activeTab:i,tabActiveSpectrum:l,data:r}=e,a=i.split(",");try{t=r.reduce((h,m)=>{var g;return zs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minX,m.data.maxX])),h},[]),n=r.reduce((h,m)=>{var g;return zs(m)&&((g=m.info.nucleus)==null?void 0:g.join(","))===i&&m.info.isFt&&(h=h.concat([m.data.minY,m.data.maxY])),h},[])}catch(h){console.log(h)}const u=a.map(h=>{var m;return(m=l[h])==null?void 0:m.id}),d=r.reduce((h,m)=>u.includes(m.id)&&m.info.dimension===1?h.concat(m):h.concat([]),[]);try{s=d.reduce((h,m)=>{const{x:g}=m.data,x=[g[0],g[g.length-1]];return h[m.id]=x,h},{}),o=d.reduce((h,m)=>{const g=xt(m.data.re);return h[m.id]=g,h},{})}catch(h){console.log(h)}return{xDomain:xt(t),yDomain:xt(n),yDomains:o,xDomains:s}}function se(e,t){const{yDomain:n={isChanged:!0,isShared:!0}}=t||{};let o;e.activeTab&&(e.displayerMode===B.DM_1D?o=Xa(e):o=sx(e),e.xDomain=o.xDomain,e.xDomains=o.xDomains,e.originDomain=o,n.isChanged?(e.yDomain=o.yDomain,e.displayerMode===B.DM_1D&&n.isShared?e.yDomains=Object.keys(o.yDomains).reduce((s,i)=>(s[i]=o.yDomain,s),{}):e.yDomains=o.yDomains):e.originDomain=S(b({},e.originDomain),{xDomain:o.xDomain,xDomains:o.xDomains}))}function ix(e){const{integrals:t,ranges:n}=e;let o=Number.NEGATIVE_INFINITY;for(const s of t.values)o=Math.max(o,s.absolute);for(const s of n.values)o=Math.max(o,s.absolute);return[0,o]}function es(e,t){var n;for(const o of Array.isArray(t)?t:[t])((n=o==null?void 0:o.info)==null?void 0:n.dimension)===1&&(e.integralsYDomains[o.id]=ix(o))}function lx(e,t){e.originDomain=t}function rx(e,t){e.xDomain=t}function ax(e,t){e.yDomain=t}function cx(e){const{xDomain:t,yDomain:n,xDomains:o,yDomains:s}=e.originDomain;e.xDomain=t,e.yDomain=n,e.xDomains=o,e.yDomains=s}function tt(e){var n;const t=e.data.filter(o=>e.xDomains[o.id]&&At(o.info.nucleus)===e.activeTab);e.mode=((n=t[0])==null?void 0:n.info.isFid)?"LTR":"RTL"}function ux(e,t){const{activeSpectrum:n,data:o,xDomain:s,molecules:i,activeTab:l}=e;if(n==null?void 0:n.id){const{index:r}=n,a=o[r],[u,d]=s,h=Ze(a.data.x,u),m=Ze(a.data.x,d),g=b({factorStd:8,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},t);Da(a,S(b({},g),{windowFromIndex:h,windowToIndex:m,molecules:i,nucleus:l})),Tt(e),es(e,a)}}function dx(e){const t={factorStd:8,minMaxRatio:.05,integrationSum:100,compile:!0,frequencyCluster:16,clean:!0,keepPeaks:!0},{data:n,activeTab:o,molecules:s}=e;for(const i of n)i.info.dimension===1&&(Da(i,{peakPicking:t,molecules:s,nucleus:o}),Tt(e))}function ro(e,t,n){return e.data[t].ranges.values.findIndex(o=>o.id===n)}function px(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{id:s=null,assignmentData:i}=t.payload.data,l=e.data[o];if(s){const r=ro(e,o,s);zt(i,[l.ranges.values[r]]),l.ranges.values.splice(r,1)}else zt(i,l.ranges.values),l.ranges.values=[];Et(l),Tt(e)}}function hx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:l}=t.payload.data,r=ro(n,s,i.id),a=e.data[s].ranges.values[r];(a==null?void 0:a.signals)&&(a.signals[i.tableMetaInfo.signalIndex].kind=l,a.kind=eo.includes(l)?We.signal:We.mixed,Et(e.data[s]),Tt(e))}}function fx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{editedRowData:i,assignmentData:l}=t.payload;e.toolOptions.data.tempRange=null;const r=jn(i);delete r.tableMetaInfo,delete r.rowKey,zt(l,[r]);const a=ro(n,s,r.id);e.data[s].ranges.values[a]=r,Et(e.data[s]),Tt(e)}}function Ya(e,t){const{spectrum:n,range:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:l=!0}=t.payload;if(n&&o){const r=e.data.find(h=>h.id===n.id),a=r.ranges.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=jn(Ve(o),"signal",{signalIndex:u});l===!0&&zt(i,[{signals:[s]}]),d.signals.splice(u,1),r.ranges.values[a]=d,d.signals.length===0&&(zt(i,[d]),r.ranges.values.splice(a,1)),Tt(e)}}function Ga(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{assignmentData:s,rangeData:i=null,signalIndex:l=-1}=t.payload;if(i){const r=ro(e,o,i.id),a=Ve(e.data[o].ranges.values[r]);let u={},d=i.id;i&&l===-1?u=jn(a,"range"):(u=jn(a,"signal",{signalIndex:l}),d=i.signals[l].id),zt(s,[{id:d}]),e.data[o].ranges.values[r]=u}else{const r=e.data[o].ranges.values.map(a=>jn(a));e.data[o].ranges.values=r,zt(s,r)}}}function mx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{rangeData:s,diaIDs:i,signalIndex:l,nbAtoms:r}=t.payload,a=(h,m=0)=>h+m,u=ro(e,o,s.id),d=e.data[o].ranges.values[u];l===void 0?(d.diaIDs=i,d.nbAtoms=a(r,d.nbAtoms)):(d.signals[l].diaIDs=i,d.signals[l].nbAtoms=a(r,d.signals[l].nbAtoms))}}function gx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum;tg(e.data[o],t.data)}}function xx(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o==null?void 0:o.id){const{index:i}=o,l=n[i];pi(l.ranges,{options:t,nucleus:s}),Et(l,!0)}}function bx(e,t){const{startX:n,endX:o}=t.payload,{activeSpectrum:s,activeTab:i,molecules:l}=e,r=Gt(e,{startX:n,endX:o});if(s==null?void 0:s.id){const{index:a}=s,[u,d]=r;eg(e.data[a],{from:u,to:d,nucleus:i,molecules:l}),Tt(e),es(e,e.data[a])}}function yx(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;ng(e.data[s],n)}}function vx(e,t){var i;const{rangeID:n,signalID:o,value:s}=t.payload;if((i=e.activeSpectrum)==null?void 0:i.id){const{index:l}=e.activeSpectrum,r=og(e.data[l],{rangeID:n,signalID:o,newSignalValue:s});Ae(e.data[l],[{name:no,options:r}]),En(e.data[l]),Tt(e),se(e)}}function Tt(e){ts(e)}function Cx(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;e.data[s].ranges.options.isSumConstant=!n}}function kx(e,t){e.toolOptions.data.tempRange=t.payload.tempRange}function Sx(e){e.toolOptions.data.showMultiplicityTrees=!e.toolOptions.data.showMultiplicityTrees}function wx(e){e.toolOptions.data.showRangesIntegrals=!e.toolOptions.data.showRangesIntegrals}function Ex(e){e.toolOptions.data.showJGraph=!e.toolOptions.data.showJGraph}function Ax(e,t){return e.signals?e.signals.reduce((n,o)=>o[t].nbAtoms?n+o[t].nbAtoms:n,0):0}function ks(e,t){e[t].nbAtoms=Ax(e,t),e[t].nbAtoms===0&&delete e[t].nbAtoms}function vl(e,t){return delete e[t].diaIDs,delete e[t].nbAtoms,e.signals.forEach(n=>{delete n[t].diaIDs,delete n[t].nbAtoms}),e}function Tx(e){return e.kind===We.signal}function Lo(e,t,n,o){return t!==void 0&&o!==void 0?(t===!0?(delete e[o].diaIDs,delete e[o].nbAtoms):typeof n=="number"&&n!==-1&&e.signals[n]&&(delete e.signals[n][o].diaIDs,delete e.signals[n][o].nbAtoms),ks(e,o)):o!==void 0?(vl(e,o),ks(e,o)):["x","y"].forEach(s=>{vl(e,s),ks(e,s)}),e}function mn(e,t,n){const o=t.reduce((s,i)=>(i.id&&s.push(i.id),i.signals&&(s=s.concat(i.signals.map(l=>l.id,[]))),s),[]);n?e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:n}}):(e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"x"}}),e.dispatch({type:"REMOVE_ALL",payload:{id:o,axis:"y"}}))}const Z={TOP_1D:"TOP_1D",LEFT_1D:"LEFT_1D",CENTER_2D:"CENTER_2D"};function Dx({width:e,height:t,margin:n}){return{CENTER_2D:{startX:n.left,startY:n.top,endX:e-n.right,endY:t-n.bottom},TOP_1D:{startX:n.left,startY:0,endX:e-n.right,endY:n.top},LEFT_1D:{startX:0,startY:n.top,endX:n.left,endY:t-n.bottom}}}function ln(e,t){for(const n of Object.keys(e))if(t.startX>=e[n].startX&&t.startX<=e[n].endX&&t.startY>=e[n].startY&&t.startY<=e[n].endY)return n;return null}function Ee(e){const{width:t,margin:n,xDomain:o}=e;return qe(o,[t-n.right,n.left])}function be(e,t=!1){const{height:n,margin:o,yDomain:s}=e;return qe(s,t?[n-o.bottom,o.top]:[o.top,n-o.bottom])}function gn(e,t,n=10){return qe(e,[t-n,n])}function Rx(e,t){const{startX:n,startY:o,endX:s,endY:i}=t,l=Ee(e),r=be(e),a=n*1e6>s*1e6?s:n,u=n*1e6>s*1e6?n:s,d=o*1e6>i*1e6?i:o,h=o*1e6>i*1e6?o:i,m=r.invert(d),g=l.invert(a),x=r.invert(h),y=l.invert(u);return{fromX:g,fromY:m,toX:y,toY:x}}function Ix(e,t){e.toolOptions.data.zonesNoiseFactor=t.payload}function Nx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,s=Rx(e,t),i=e.data[o],l=Sg(oe(i),{selectedZone:s,thresholdFactor:e.toolOptions.data.zonesNoiseFactor,convolutionByFFT:!1});i.zones.values=i.zones.values.concat(l),dt(e)}}function Mx(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,[s,i]=e.xDomain,[l,r]=e.yDomain;t.selectedZone={fromX:s,toX:i,fromY:l,toY:r};const a=e.data[o],u=Pa(oe(a),t);a.zones.values=a.zones.values.concat(u),dt(e)}}function Px(e){for(const t of e.data)if(t.info.dimension===2){const{minX:n,maxX:o,minY:s,maxY:i}=t.data,l={selectedZone:{fromX:n,toX:o,fromY:s,toY:i},thresholdFactor:1},r=Pa(oe(t),l);t.zones.values=t.zones.values.concat(r),dt(e)}}function _x(e,t){var s;const{zoneID:n,signal:o}=t.payload;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum,{xShift:l,yShift:r}=vg(e.data[i],n,o);let a=[];l!==0&&a.push({name:ai,options:l}),r!==0&&a.push({name:ci,options:r}),Ae(e.data[i],a),lo(e.data[i]),se(e),dt(e)}}function ao(e,t,n){return e.data[t].zones.values.findIndex(o=>o.id===n)}function Fx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{rowData:i,value:l}=t.payload,r=ao(n,s,i.id),a=e.data[s].zones.values[r];a.signals[i.tableMetaInfo.signalIndex].kind=l,a.kind=eo.includes(l)?We.signal:We.mixed,dt(e)}}function Lx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{id:i,assignmentData:l}=t.payload;if(i){const r=e.data[s].zones.values.find(u=>u.id===i);mn(l,[r||{}]);const a=ao(n,s,i);e.data[s].zones.values.splice(a,1)}else mn(l,e.data[s].zones.values),e.data[s].zones.values=[];dt(e)}}function Za(e,t){const{spectrum:n,zone:o,signal:s,assignmentData:i,unlinkSignalInAssignmentData:l=!0}=t.payload;if(n&&o){const r=e.data.find(h=>h.id===n.id),a=r.zones.values.findIndex(h=>h.id===o.id),u=o.signals.findIndex(h=>h.id===s.id),d=Lo(Ve(o),!1,u,void 0);l===!0&&mn(i,[{signals:[s]}],void 0),d.signals.splice(u,1),r.zones.values[a]=d,d.signals.length===0&&(mn(i,[d]),r.zones.values.splice(a,1)),dt(e)}}function Ox(e,t){const{spectrum:n,zone:o,signal:s,pathLength:i}=t.payload;if(n&&o){const l=e.data.find(d=>d.id===n.id),r=l.zones.values.findIndex(d=>d.id===o.id),a=o.signals.findIndex(d=>d.id===s.id),u=Lo(Ve(o),!1,a,void 0);u.signals[a].j=S(b({},u.signals[a].j),{pathLength:i}),l.zones.values[r]=u,dt(e)}}function Wa(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{zoneData:i=null,assignmentData:l,isOnZoneLevel:r=void 0,signalIndex:a=-1,axis:u=void 0}=t.payload;if(i){const d=ao(n,s,i.id),h=Ve(e.data[s].zones.values[d]),m=Lo(h,r,a,u);mn(l,[{id:i.signals[a].id}],u),e.data[s].zones.values[d]=m}else{const d=e.data[s].zones.values.map(h=>Lo(h));e.data[s].zones.values=d,mn(l,d)}}}function $x(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{zoneData:i,diaIDs:l,axis:r,signalIndex:a,nbAtoms:u}=t.payload,d=(g,x=0)=>g+x,h=ao(n,s,i.id),m=e.data[s].zones.values[h];a===void 0?(m[r].diaIDs=l,m[r].nbAtoms=d(u,m[r].nbAtoms)):(m.signals[a][r].diaIDs=l,m.signals[a][r].nbAtoms=d(u,m.signals[a][r].nbAtoms))}}function Hx(e,t){var o;const n=oe(e);if((o=n.activeSpectrum)==null?void 0:o.id){const{index:s}=n.activeSpectrum,{editedRowData:i}=t.payload;delete i.tableMetaInfo;const l=ao(n,s,i.id);e.data[s].zones.values[l]=i,i.signals&&i.signals.forEach(r=>{var a;up(e.correlations.values,r.id,(a=r.j)==null?void 0:a.pathLength)}),dt(e)}}function dt(e){ts(e)}function ts(e){const{data:t,correlations:n}=e;e.correlations=Jn(t,S(b({},n.options),{values:Ve(n.values)}))}function zx(e,t){const n=oe(e),{data:o,correlations:s}=n,{mf:i}=t;(s.options.mf===""||s.options.mf!==i)&&(e.correlations=Jn(o,S(b({},s.options),{mf:i,values:Ve(s.values)})))}function Vx(e,t){const n=oe(e),{data:o,correlations:s}=n,{tolerance:i}=t;e.correlations=Jn(o,S(b({},s.options),{tolerance:i,values:Ve(s.values)}))}function jx(e,t){const n=oe(e),{correlations:o}=n,{id:s,correlation:i,options:l}=t;e.correlations=kr(o,s,i),l&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),l)})),ts(e)}function Bx(e,t){const{correlations:n,options:o}=t,s=oe(e);let i=Ve(s.correlations);n.forEach(l=>{i=kr(i,l.id,l)}),e.correlations=i,o&&(e.correlations=S(b({},e.correlations),{options:b(b({},e.correlations.options),o)})),ts(e)}function Xx(e,t){const{correlation:n,assignmentData:o}=t;n.link.forEach(s=>{const i=Re(e.data,s.experimentID,!1);if(i){if(i.info.dimension===1){const l=mi(i,s.signal.id),r=Ba(i,s.signal.id);Ya(e,{payload:{spectrum:i,range:l,signal:r,assignmentData:o}})}else if(i.info.dimension===2){const l=_o(i,s.signal.id),r=Gn(i,s.signal.id);Za(e,{payload:{spectrum:i,zone:l,signal:r,assignmentData:o}})}}})}const Bn={HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL",STEP_HORIZONTAL:"STEP_HORIZONTAL",FULL:"FULL"};function go(e,t,n={}){const{factor:o=1,invert:s=!1}=n,l=(Math.abs(e.deltaY)<100?e.deltaY*100:e.deltaY)*(s?-.001:.001)*o,r=l<0?-1/(l-1):1+l,[a,u]=t;return[a*r,u*r]}function Ot(e,t={}){const{height:n,margin:o,activeSpectrum:s}=e,{scale:i=1,spectrumID:l=null}=t;if(s===null&&l===null){const{shareYDomain:r,yDomain:a,yDomains:u}=e.originDomain;e.yDomains=Object.keys(e.yDomains).reduce((d,h)=>{const m=qe(r?a:u[h],[n-o.bottom,o.top]),[g,x]=r?a:u[h],C=Math.max(Math.abs(x),Math.abs(g))===x?0:g,k=ll.translate(0,(Math.sign(C)>=0,m(C))).scale(i).translate(0,-m(0)).rescaleY(m).domain();return d[h]=k,d},{})}else{const r=l||(s==null?void 0:s.id);if(r){const a=qe(e.originDomain.yDomains[r],[n-o.bottom,o.top]),d=ll.translate(0,a(0)).scale(i).translate(0,-a(0)).rescaleY(a).domain();e.yDomains=S(b({},e.yDomains),{[r]:d})}}}function Yx(e,t){const{ranges:n,info:o}=t.payload,s=Ca(n,o,e.usedColors);e.data.push(s),se(e,{yDomain:{isShared:!1}}),Ot(e,{scale:.8,spectrumID:s.id})}function Gx(e,t){e.width=t}function Zx(e,t,n){e.width=t,e.height=n}function xi(e,t){return t.filter(n=>At(n.info.nucleus)===e)}function ns(e,t){!e[t]&&!Array.isArray(e[t])&&(e[t]=[]);const n=Wx(e[t]),o=Ux(e[t]),s=Kx(e[t]),i=()=>e[t]=[];return{historyStack:e[t],push:n,pop:o,getLast:s,clear:i}}function Wx(e){return t=>{e.push(t)}}function Ux(e){return()=>e.pop()?e[e.length-1]:null}function Kx(e){return()=>e.length===0?null:e[e.length-1]}function Cl(e){const t=e.split(",");return t.reduce((n,o)=>{const s=t.length===2?100:0;return n+=Number(o.replace(/\D/g,""))+s,n},0)}function os(e){return(t,n=!1)=>{const o=t.reduce((s,i)=>{const l=i.info[e];return s[l]=(s[l]||[]).concat(i),s},{});return n?Object.keys(o).sort((s,i)=>Cl(s)-Cl(i)).reduce((s,i)=>(s[i]=o[i],s),{}):o}}function yt(e,t){var n;if(e.data&&e.data.length>0){let o=[];switch(["auto-check","stack"].includes(t.align||"")&&(o=e.data.filter(s=>s.info.nucleus===(t==null?void 0:t.activeTab)?t.activeTab:e.activeTab&&s.info.dimension===1)),t.align){case"auto-check":case"bottom":case"center":{if(t.align==="center"||t.align==="auto-check"&&((n=o[0])==null?void 0:n.info.isFid)&&!o.some(s=>s.info.isFid===!1)){const s=e.height/2;e.verticalAlign.align="center",e.verticalAlign.verticalShift=s}else e.verticalAlign.align="bottom",e.verticalAlign.verticalShift=Ra;break}case"stack":{e.verticalAlign.align="stack";const s=o.filter(i=>i.display.isVisible===!0);e.verticalAlign.verticalShift=Math.floor((e.height-e.margin.bottom)/(s.length+2));break}default:return}}}function qx(e,t){const{activeTab:n,data:o,activeSpectrum:s,zoom:i,xDomain:l,xDomains:r,yDomain:a,yDomains:u,originDomain:d,margin:h,displayerMode:m,tabActiveSpectrum:g}=e;if(n){const y=os("nucleus")(o),C=m===B.DM_2D?y[n].reduce((v,k)=>(v[k.id]=k.processingController.getLevel(),v),{}):null;e.keysPreferences[t]={activeTab:n,activeSpectrum:s,displayerMode:m,tabActiveSpectrum:g,zoom:i,xDomain:l,xDomains:r,yDomain:a,yDomains:u,originDomain:d,level:C,margin:h,data:y[n].reduce((v,k)=>(v[k.id]={display:{color:k.display.color,isVisible:k.display.isVisible,isPeaksMarkersVisible:k.display.isPeaksMarkersVisible}},v),{})}}}function Jx(e,t){const n=e.keysPreferences[t];if(n)if(e.activeTab=n.activeTab,e.data.forEach((o,s)=>{At(o.info.nucleus)===n.activeTab&&(e.data[s].display=Object.assign(Ve(o.display),n.data[o.id].display))}),e.displayerMode=n.displayerMode,e.tabActiveSpectrum=n.tabActiveSpectrum,e.activeSpectrum=n.activeSpectrum,e.margin=n.margin,se(e),e.xDomain=n.xDomain,e.xDomains=n.xDomains,e.yDomain=n.yDomain,e.originDomain=n.originDomain,e.yDomains=n.yDomains,e.displayerMode===B.DM_2D)for(const o of Object.keys(n.level)){const{levelPositive:s,levelNegative:i}=n.level[o],l=e.data.findIndex(a=>a.id===o),r=e.data[l].processingController;r.setLevel(s,i),e.contours[o]=r.drawContours()}else e.zoom=n.zoom}function Qx(e){const{activeSpectrum:t,data:n}=e;if(t){const o=n[t==null?void 0:t.index].data,s=dp(o.re),i=o.re.findIndex(l=>l===s);return{xValue:o.x[i],yValue:s,index:i}}}function eb(e,t){var o;const n=(o=e.activeSpectrum)==null?void 0:o.id;if(t===Ht){const s=ss(e,Ht,{rollback:!0,searchBy:"name",returnCurrentDatum:!0});e.tempData=Sr(e).data,s&&(e.tempData[s==null?void 0:s.index]=s==null?void 0:s.datum);const{xValue:i,index:l}=Qx(e)||{xValue:0,index:0};e.toolOptions.data.pivot={value:i,index:l}}else if(e.toolOptions.selectedTool===_.phaseCorrection.id){e.toolOptions.data.activeFilterID=null;const s=e.data.findIndex(i=>i.id===n);e.data[s].data=e.tempData[s].data}}function Oo(e,t=!0){e.toolOptions.data.tempRange=null,bi(e,null),t&&(e.toolOptions.selectedTool=_.zoom.id),e.toolOptions.data.baseLineZones=[],e.toolOptions.data.activeFilterID&&ss(e),e.tempData&&(e.tempData=null,se(e))}function Ue(e,t=!1){(e.toolOptions.selectedTool&&_[e.toolOptions.selectedTool].isFilter||!t)&&Oo(e)}function tb(e,t){const{selectedTool:n}=t.payload;(e==null?void 0:e.data.length)>0&&(n?(n===_.editRange.id?e.toolOptions.data.tempRange=t.payload.tempRange:e.toolOptions.data.tempRange=null,n!==e.toolOptions.selectedTool&&Oo(e,!1),e.toolOptions.selectedTool=n,_[n].hasOptionPanel&&bi(e,n),_[n].isFilter&&eb(e,n)):Oo(e,!1),Ua(e))}function bi(e,t){e.toolOptions.selectedOptionPanel=t}function nb(e){const t=["stack","center"].includes(e.verticalAlign.align)?"bottom":"center";yt(e,{align:t})}function ob(e){const t=e.verticalAlign.align==="stack"?"bottom":"stack";yt(e,{align:t})}function sb(e,{from:t,to:n}){const o=Vt(e);let s=o.invert(t);const i=o.invert(n);let l=[];s>i?l=[i,s]:l=[s,i];const r=e.toolOptions.data.baseLineZones.slice();r.push({id:U(),from:l[0],to:l[1]}),e.toolOptions.data.baseLineZones=r}function ib(e,t){const n=oe(e);e.toolOptions.data.baseLineZones=n.toolOptions.data.baseLineZones.baseLineZones.filter(o=>o.id!==t)}function lb(e){if(e.activeSpectrum!=null){const{index:t}=e.activeSpectrum;e.data[t].display.isRealSpectrumVisible=!e.data[t].display.isRealSpectrumVisible,se(e)}}function rb(e,t){const n=e.displayerMode===B.DM_2D,o=Vt(e),s=n?be(e):Fo(e),i=o.invert(t.startX),l=o.invert(t.endX),r=s.invert(t.startY),a=s.invert(t.endY),u=i>l?[l,i]:[i,l],d=r>a?[a,r]:[r,a],h=ns(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_2D){switch(t.trackID){case Z.CENTER_2D:e.xDomain=u,e.yDomain=d;break;case Z.TOP_1D:e.xDomain=u;break;case Z.LEFT_1D:e.yDomain=d;break}h&&h.push({xDomain:e.xDomain,yDomain:e.yDomain})}else e.xDomain=u,h&&h.push({xDomain:u,yDomain:d})}function ab(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const s=Vt(e).invert(t),i=e.data[e.activeSpectrum.index],l=Ze(i.data.x,s);e.toolOptions.data.pivot={value:s,index:l}}}function cb(e,t){const n=e.tabActiveSpectrum[e.activeTab.split(",")[t]];return(n==null?void 0:n.id)?n.id:null}function ub(e,t){const{event:n,trackID:o,selectedTool:s}=t,{activeSpectrum:i,toolOptions:{data:{showRangesIntegrals:l}},displayerMode:r}=e;if(r===B.DM_2D){const a=o===Z.TOP_1D?0:o===Z.LEFT_1D?1:null;if(a!==null){const u=cb(e,a);if(u){const d=e.yDomains[u];e.yDomains[u]=go(n,d)}}}else if(i==null?void 0:i.id)if((l||s===_.integral.id)&&n.shiftKey){const a=e.integralsYDomains[i==null?void 0:i.id];e.integralsYDomains[i==null?void 0:i.id]=go(n,a)}else{const a=e.yDomains[i==null?void 0:i.id];e.yDomains[i==null?void 0:i.id]=go(n,a)}else{const a=xi(e.activeTab,e.data);for(const u of a){const d=e.yDomains[u.id];e.yDomains[u.id]=go(n,d)}}}function db(e,t){if((e==null?void 0:e.data.length)>0){const{zoomType:n,trackID:o}=t,s=ns(e.zoom.history,e.activeTab);if(e.displayerMode===B.DM_1D)switch(n){case Bn.HORIZONTAL:{e.xDomain=e.originDomain.xDomain,s.clear();break}case Bn.VERTICAL:Ot(e,{scale:.8});break;case Bn.STEP_HORIZONTAL:{const i=s.pop();e.xDomain=i?i.xDomain:e.originDomain.xDomain,Ot(e,{scale:.8});break}default:{e.xDomain=e.originDomain.xDomain,Ot(e,{scale:.8});break}}else{const{xDomain:i,yDomain:l,yDomains:r}=e.originDomain;if([Z.TOP_1D,Z.LEFT_1D,Z.CENTER_2D].includes(o)){const a=s.pop();e.xDomain=a?a.xDomain:i,e.yDomain=a?a.yDomain:l}else s.clear(),e.xDomain=i,e.yDomain=l,e.yDomains=r}}}function kl(e,t){const n=e.activeTab.split(","),o=e.tabActiveSpectrum[n[t]];return(o==null?void 0:o.id)&&!e.data[o.index].info.isFid}function Ua(e){if(e.displayerMode===B.DM_2D&&e.toolOptions.selectedTool!==_.slicingTool.id){const t=kl(e,0)?It["2D"].top:It["1D"].top,n=kl(e,1)?It["2D"].left:It["1D"].left;e.margin=S(b({},It["2D"]),{top:t,left:n})}else e.toolOptions.selectedTool===_.slicingTool.id?e.margin=It["2D"]:e.displayerMode===B.DM_1D&&(e.margin=It["1D"])}function pb(e,t){if(e.displayerMode===B.DM_2D){let n={};for(const o of t[e.activeTab])n[o.id]=o.processingController.drawContours();e.contours=n}}function hb(e,t){e.displayerMode=t&&t.some(n=>n.info.dimension===2)?B.DM_2D:B.DM_1D}function fb(e,t){let n=[];const o={},s=Object.keys(t).sort((i,l)=>i.split(",").length>l.split(",").length?-1:1);for(let i of s){const l=t[i],r=i.split(",").length;if(r===2&&n.push(i),l.length===1){const a=e.data.findIndex(u=>u.id===l[0].id);o[i]={id:l[0].id,index:a}}else{const a=t[i],u=a.length;if(u>=2){const d=a.filter(h=>!h.info.isFid);if(d.length>0&&(r===2||r===1&&u!==d.length)){const h=e.data.findIndex(m=>m.id===d[0].id);o[i]={id:d[0].id,index:h}}else o[i]=null}else o[i]=null}}return e.tabActiveSpectrum=o,n}function Ka(e,t,n,o=!1){const s=Object.keys(t).sort((i,l)=>i.split(",").length>l.split(",").length?-1:1);if(JSON.stringify(s)!==JSON.stringify(Object.keys(e.tabActiveSpectrum))||o){const i=fb(e,t);i.length>0&&n==null?(e.activeSpectrum=e.tabActiveSpectrum[i[0]],e.activeTab=i[0]):(e.activeSpectrum=n&&e.tabActiveSpectrum[n],e.activeTab=n)}else e.activeTab=n,e.activeSpectrum=e.tabActiveSpectrum[n];hb(e,t[e.activeTab]),Ua(e)}function nt(e,t){const{tab:n=null,refreshActiveTab:o=!1,domainOptions:s={}}=t||{},l=os("nucleus")(e.data),r=Object.keys(l),a=!n||!r.includes(n||"")?r[0]:n;Ka(e,l,a,o),Oo(e),pb(e,l),se(e,s),es(e,l[a]);const d=ns(e.zoom.history,e.activeTab).getLast();d&&(e.xDomain=d.xDomain,e.yDomain=d.yDomain),tt(e)}function mb(e,t){t&&nt(e,{tab:t})}function gb(e,{deltaY:t,shiftKey:n}){var o;try{if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s,id:i}=e.activeSpectrum,l=e.data[s].processingController;n?l.shiftWheel(t):l.wheel(t);const r=Object.freeze(l.drawContours());e.contours[i]=r}}catch(s){console.log(s)}}function xb(e){e.displayerMode===B.DM_1D&&(e.originDomain.shareYDomain=!1,Ot(e,{scale:.8}))}function bb(e){e.originDomain.shareYDomain=!0,e.yDomains=e.originDomain.yDomains,e.yDomain=e.originDomain.yDomain,Ot(e,{scale:.8})}function yb(e,t){var n,o;if((n=e.activeSpectrum)==null?void 0:n.id){const s=(o=e.activeSpectrum)==null?void 0:o.index;Ae(e.data[s],[{name:no,options:t}]),En(e.data[s]),Ue(e),se(e)}}function vb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const o=e.activeSpectrum.index,s=[{name:li,options:t.zeroFillingSize},{name:ra,options:t.lineBroadeningValue}];Ae(e.data[o],s),Ue(e),se(e),tt(e)}}function Cb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:sa,options:{}}]),Ue(e),yt(e,{align:"bottom"}),se(e,{yDomain:{isChanged:!0}}),tt(e)}}function kb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum,{ph0:s,ph1:i}=t;Ae(e.data[o],[{name:Ht,options:{ph0:s,ph1:i}}]),Ue(e),e.tempData=null,se(e)}}function Sb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum;Ae(e.data[n],[{name:Zr,options:{}}]),Ue(e),e.tempData=null,se(e)}}function wb(e){var t;if((t=e.activeSpectrum)==null?void 0:t.id){const{index:n}=e.activeSpectrum,{ph0:o,ph1:s}=Ur(e.data[n]);Ae(e.data[n],[{name:Ht,options:{ph0:o,ph1:s}}]),Ue(e),e.tempData=null,se(e)}}function Eb(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,{data:{x:o,re:s,im:i},info:l}=e.data[n],{ph0:r,ph1:a}=t;let u={data:{x:o,re:s,im:i},info:l};pa(u,{ph0:r,ph1:a});const{im:d,re:h}=u.data;e.tempData[n].data.im=d,e.tempData[n].data.re=h}}function Ab(e,t,n){var o,s,i;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:l}=e.activeSpectrum;ga(e.data[l],t,n),((s=e.data[l].info)==null?void 0:s.dimension)===1?En(e.data[l]):((i=e.data[l].info)==null?void 0:i.dimension)===2&&lo(e.data[l]),Ue(e),se(e),tt(e);const a=ns(e.zoom.history,e.activeTab).getLast();a&&(e.xDomain=a.xDomain,e.yDomain=a.yDomain)}}function Tb(e,t){var o,s,i;const n=t.payload.id;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:l}=e.activeSpectrum;ui(e.data[l],n),((s=e.data[l].info)==null?void 0:s.dimension)===1?En(e.data[l]):((i=e.data[l].info)==null?void 0:i.dimension)===2&&lo(e.data[l]),Ue(e),se(e),tt(e)}}function Db(e,t){var o,s;const n=t.payload.filterType;if(e.activeTab){for(const i of e.data)At((o=i==null?void 0:i.info)==null?void 0:o.nucleus)===e.activeTab&&(((s=i.filters)==null?void 0:s.filter(r=>r.name===n))||[]).forEach(r=>{var a,u;ui(i,r.id),((a=i.info)==null?void 0:a.dimension)===1?En(i):((u=i.info)==null?void 0:u.dimension)===2&&lo(i)});Ue(e),se(e),tt(e)}}function Rb(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){const{index:o}=e.activeSpectrum;Ae(e.data[o],[{name:qr,options:b({zones:e.toolOptions.data.baseLineZones},t.options)}]),e.toolOptions.data.baseLineZones=[];const s=e.xDomain.slice();Ue(e),se(e),e.xDomain=s}}function ss(e,t=null,n={},o=null){var d,h,m,g;const{updateDomain:s=!0,rollback:i=!1,searchBy:l="id",returnCurrentDatum:r=!1}=n;let a=null;const u=o||e.activeSpectrum;if(u==null?void 0:u.id){const x=u.index,y=e.data[x];if(t&&e.toolOptions.data.activeFilterID!==t){const C=y.filters.findIndex(k=>k[l]===t);let v=[];if(C!==-1&&(v=y.filters.slice(0,i?C:C+1),v.length>1?e.toolOptions.data.activeFilterID=(d=y.filters[i?C-1:C])==null?void 0:d.id:e.toolOptions.data.activeFilterID=null,fn(y,v),r)){const{name:k,value:E}=y.filters[C],T=Sr(e).data[x];((h=T.info)==null?void 0:h.dimension)===1&&Ae(T,[{name:k,options:E}]),a={datum:T,index:x}}}else e.toolOptions.data.activeFilterID=null,fn(y);((m=y.info)==null?void 0:m.dimension)===1?En(y):((g=y.info)==null?void 0:g.dimension)===2&&lo(y),s&&(se(e),tt(e))}if(r)return a}function Ib(e,t){ss(e,t.id)}function Nb(e,t){var o;const n=xi(e.activeTab,e.data);if(n&&n.length>0&&Array.isArray(t.payload)){const s=((o=n[0].filters.find(i=>i.name===to))==null?void 0:o.value)||[];for(const i of n){const l=t.payload.map(r=>r.name===Yn?S(b({},r),{options:S(b({},r.options),{exclusions:s})}):r);Ae(i,l)}}se(e)}function Mb(e,t){var l,r;const{from:n,to:o}=t.payload,s=Gt(e,{startX:n,endX:o});let i;if((l=e.activeSpectrum)==null?void 0:l.id){const a=(r=e.activeSpectrum)==null?void 0:r.index;i=[e.data[a]]}else i=xi(e.activeTab,e.data);for(const a of i)Ae(a,[{name:to,options:[{id:U(),from:s[0],to:s[1]}]}]);se(e)}function Pb(e,t){const{id:n,spectrumID:o}=t.payload,s=e.data.findIndex(l=>l.id===o),i=e.data[s].filters.find(l=>l.name===to);i&&(i.value.length===1?ui(e.data[s],i.id):(i.value=i.value.filter(l=>l.id!==n),fn(e.data[s])))}function _b(e,t){e.overDisplayer=t.payload}function Fb(e){const{past:t,present:n,future:o}=e.history,s=t[t.length-1],i=t.slice(0,t.length-1),l=[n,...o],r=l.length!==0,a=t.length!==0,u=Xa(e.data),d={past:i,present:s,future:l,hasRedo:r,hasUndo:a};e.xDomain=u.xDomain,e.yDomain=u.yDomain,e.originDomain=u,e.history=d}function Lb(e){const{history:t}=e,n=t.future.shift();t.past.push(t.present),t.present=n,t.hasUndo=!0,t.hasRedo=t.future.length>0,se(e.data)}function Ob(e,t){e.history={past:[],present:t,future:[],hasRedo:!1,hasUndo:!1}}function $b(e,t){const{data:n,activeSpectrum:o,activeTab:s}=e;if(o==null?void 0:o.id){const{index:i}=o,l=n[i];pi(l.integrals,{options:t,nucleus:s}),wn(l,!0)}}function Hb(e,t){const{startX:n,endX:o}=t,{data:s,molecules:i,activeTab:l,activeSpectrum:r}=e,[a,u]=Gt(e,{startX:n,endX:o});if(r==null?void 0:r.id){const d=s[r.index],{x:h,re:m}=d.data,g=Yt(d),x={id:U(),originFrom:a-g,originTo:u-g,from:a,to:u,absolute:vn({x:h,y:m},{from:a,to:u,reverse:!0}),kind:"signal"};d.integrals.values.push(x),d.integrals.options=di(d.integrals.options,{molecules:i,nucleus:l}),wn(d),es(e,d)}}function zb(e,t){if(e.activeSpectrum){const n=oe(e),{index:o}=e.activeSpectrum,{integralID:s}=t,i=e.data[o];if(s==null)i.integrals.values=[];else{const l=n.data[o].integrals.values.findIndex(r=>r.id===s);i.integrals.values.splice(l,1),wn(i)}}}function Sl(e,t){var s;const n=oe(e),o=t.payload.data;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum,l=n.data[i],r=e.data[i],{x:a,re:u}=l.data,d=l.integrals.values.findIndex(h=>h.id===o.id);d!==-1&&(r.integrals.values[d]=S(b({originFrom:o.from,originTo:o.to},o),{absolute:vn({x:a,y:u},{from:o.from,to:o.to,reverse:!0})}),wn(r))}}function Vb(e,t){var o;const n=t.payload.data;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;Gm(e.data[s],n)}}function jb(e,t){var o;const n=t.payload;if((o=e.activeSpectrum)==null?void 0:o.id){const{index:s}=e.activeSpectrum;e.data[s].integrals.options.isSumConstant=!n}}function Bb(e=[]){const t=[];for(const n of e){const s=Bt.Molecule.fromMolfile(n.molfile).getFragments();for(let i of s)t.push(Po({molfile:i.toMolfileV3()}))}return t}function qa(e,t){let o=Bt.Molecule.fromMolfile(t).getFragments();for(let s of o)e.push(Po({molfile:s.toMolfileV3()}))}function Xb(e,t,n){let s=Bt.Molecule.fromMolfile(t).getFragments();if(s.length>1){e=e.filter(i=>i.key!==n);for(let i of s)e.push(Po({molfile:i.toMolfileV3()}))}else if(s.length===1){const i=s[0],l=Po({molfile:i.toMolfileV3(),key:n});let r=e.findIndex(a=>a.key===n);e.splice(r,1,l)}}const yi="INITIATE",Yb="SAVE_DATA_AS_JSON",xn="LOAD_JSON_FILE",$o="LOAD_JCAMP_FILE",Zn="LOAD_NMREDATA_FILE",Vs="LOAD_MOL_FILE",Ho="LOAD_ZIP_FILE",js="LOAD_JDF_FILE",Ja="ADD_PEAK",Qa="ADD_PEAKS",is="DELETE_PEAK_NOTATION",vi="SHIFT_SPECTRUM",ls="SET_X_DOMAIN",Ci="SET_Y_DOMAIN",ec="SET_ORIGINAL_DOMAIN",tc="SET_WIDTH",ki="SET_DIMENSIONS",co="SET_SELECTED_TOOL",nc="SET_SELECTED_FILTER",oc="CHANGE_SPECTRUM_SETTING",bn="FULL_ZOOM_OUT",Wn="CHANGE_VISIBILITY",Si="CHANGE_PEAKS_MARKERS_VISIBILITY",zo="CHANGE_ACTIVE_SPECTRUM",sc="CHANGE_SPECTRUM_COLOR",ic="ADD_INTEGRAL",rs="DELETE_INTEGRAL",wi="TOGGLE_REAL_IMAGINARY_VISIBILITY",as="SET_ZOOM",Ei="ADD_MOLECULE",Ai="SET_MOLECULE",lc="DELETE_MOLECULE",Bs="SET_CORRELATION",rc="SET_CORRELATIONS",ac="DELETE_CORRELATION",cc="SET_CORRELATIONS_MF",uc="SET_CORRELATIONS_TOLERANCE",Ti="DELETE_SPECTRA",Di="CHANGE_SPECTRUM_DISPLAY_VIEW_MODE",dc="RESIZE_INTEGRAL",cs="BRUSH_END",pc="RESET_X_DOMAIN",hc="ENABLE_FILTER",fc="DELETE_FILTER",mc="DELETE_SPECTRA_FILTER",gc="APPLY_ZERO_FILLING_FILTER",xc="APPLY_FFT_FILTER",Ri="CALCULATE_MANUAL_PHASE_CORRECTION_FILTER",bc="APPLY_MANUAL_PHASE_CORRECTION_FILTER",yc="APPLY_AUTO_PHASE_CORRECTION_FILTER",vc="APPLY_ABSOLUTE_FILTER",Ii="SET_VERTICAL_INDICATOR_X_POSITION",Cc="AUTO_PEAK_PICKING",kc="AUTO_RANGES_DETECTION",Sc="AUTO_ZONES_DETECTION",us="DELETE_RANGE",wc="DELETE_1D_SIGNAL",Ec="SET_SELECTED_OPTIONS_PANEL",vt="SET_LOADING_FLAG",ze="RESET_SELECTED_TOOL",Ni="SET_SPECTRUMS_VERTICAL_AlIGN",Gb="SAVE_AS_SVG",Ac="CHANGE_INTEGRAL_DATA",Mi="SET_ACTIVE_TAB",Tc="CHANGE_INTEGRAL_SUM",Dc="ADD_BASE_LINE_ZONE",Rc="DELETE_BASE_LINE_ZONE",Ic="APPLY_BASE_LINE_CORRECTION_FILTER",Vo="SET_KEY_PREFERENCES",Pi="APPLY_KEY_PREFERENCES",Nc="RESIZE_RANGE",Mc="CHANGE_RANGE_SUM",Pc="ADD_RANGE",_c="SET_2D_LEVEL",Fc="ADD_2D_ZONE",ds="DELETE_2D_ZONE",Lc="DELETE_2D_SIGNAL",Oc="SET_2D_SIGNAL_PATH_LENGTH",$c="ADD_MISSING_PROJECTION",Hc="SET_FILTER_SNAPSHOT",zc="CHANGE_RANGE_RELATIVE",Vc="CHANGE_RANGE_SIGNAL_VALUE",jc="CHANGE_RANGE_SIGNAL_KIND",Bc="SAVE_EDITED_RANGE",Xc="UNLINK_RANGE",Yc="SET_DIAID_RANGE",Gc="CHANGE_INTEGRAL_RELATIVE",Zc="ANALYZE_SPECTRA",_i="DELETE_ANALYZE_SPECTRA_RANGE",Wc="RESIZE_ANALYZE_SPECTRA_RANGE",Uc="SET_ANALYZE_SPECTRA_COLUMNS",Kc="FILTER_SPECTRA_COLUMN",qc="ALIGN_SPECTRA",Xs="CHANGE_ZONE_SIGNAL_VALUE",Jc="CHANGE_ZONE_SIGNAL_KIND",Qc="SAVE_EDITED_ZONE",eu="UNLINK_ZONE",tu="SET_DIAID_ZONE",ps="PREDICT_SPECTRA",nu="SET_SPECTRA_SAME_TOP",ou="RESET_SPECTRA_SCALE",jo="SET_MOUSE_OVER_DISPLAYER",su="APPLY_MULTIPLE_SPECTRA_FILTER",iu="ADD_EXCLUSION_ZONE",lu="DELETE_EXCLUSION_ZONE",ru="CHANGE_RANGES_SUM_FLAG",au="CHANGE_INTEGRALS_SUM_FLAG",cu="CHANGE_ZONES_NOISE_FACTOR",uu="CHANGE_TEMP_RANGE",du="SHOW_MULTIPLICTY_TREES",pu="SHOW_RANGES_INTEGRALS",hu="AUTO_RANGES_SPECTRA_PICKING",fu="AUTO_ZONES_SPECTRA_PICKING",mu="GENERATE_SPECTRUM_FROM_PUBLICATION_STRING",gu="RESURRECTING_SPECTRUM_FROM_RANGES",xu="SHOW_J_GRAPH";function Zb(e,t){e.isLoading=t}function bu(e,t){e.usedColors["1d"]=e.usedColors["1d"].concat(t["1d"]),e.usedColors["2d"]=e.usedColors["2d"].concat(t["2d"])}function Fi(e,t){const{spectra:n,molecules:o,correlations:s,usedColors:i}=t||{spectra:[],molecules:[],correlations:{},multipleAnalysis:{},exclusionZones:[]};bu(e,i),e.data=n,e.molecules=Bb(o),!s||Object.keys(s).length===0?e.correlations=Jn([],{tolerance:ja}):e.correlations=Wb(s)}function Wb(e){return S(b({},e),{values:e.values.map(t=>{if(typeof t.hybridization=="string"){let n=[];if(t.hybridization.length>0){const o=t.hybridization.replaceAll("SP",""),s=Number(o);n.push(s)}t.hybridization=n}return t})})}function yu(e,t){const n={verticalAlign:null},{verticalAlign:o=null}=t||n;o?yt(e,{align:o}):yt(e,{align:"auto-check"})}function Ub(e,t){var o;Fi(e,t.payload);const n=((o=t.payload)==null?void 0:o.preferences)||{};nt(e,{tab:(n==null?void 0:n.activeTab)||""}),yu(e,t.payload),e.isLoading=!1}function Kb(e,t){const{files:n}=t,o=Og(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),e.isLoading=!1}function qb(e,t){const{files:n}=t,o=$a(n,e.usedColors);for(const s of o)e.data.push(s);nt(e),yt(e,{align:"auto-check"}),e.isLoading=!1}function Jb(e,t){var s;const n=Oi();Fi(n,t.payload);const o=((s=t.payload)==null?void 0:s.preferences)||{};return nt(n,{tab:(o==null?void 0:o.activeTab)||""}),yu(n,o),n.width=e.width,n.height=e.height,n.isLoading=!1,n.actionType=xn,n}function Qb(e,t){const{files:n}=t;for(let o of n)qa(e.molecules,o.binary.toString());e.isLoading=!1}function ey(e,t){const{data:n,usedColors:o}=t.payload;e.data=e.data.concat(n),bu(e,o),nt(e),yt(e,{align:"auto-check"}),e.isLoading=!1}function ty(e,t){const n=Oi();return Fi(n,t.payload),nt(n),yt(n,{align:"auto-check"}),n.isLoading=!1,n.width=e.width,n.height=e.height,n.actionType=Zn,n}function ny(e,t){const n=e.molecules.length===0;qa(e.molecules,t);const o=e.molecules[0]||null;n&&o&&hi(e,o.key,o)}function oy(e,t,n){Xb(e.molecules,t,n);const o=e.molecules.findIndex(s=>s.key===n);hi(e,n,o!==-1?e.molecules[o]:e.molecules[0]||null)}function sy(e,t){e.displayerMode===B.DM_1D&&Ga(e,{payload:{assignmentData:t,rangeData:null}}),e.displayerMode===B.DM_2D&&Wa(e,{payload:{assignmentData:t,zoneData:null}})}function iy(e,t){const{key:n,assignmentData:o}=t.payload;sy(e,o);const s=e.molecules.findIndex(i=>i.key===n);e.molecules.splice(s,1),hi(e,n,e.molecules[0]||null)}function ly(e,t){const{data:n,options:o}=t.payload;if(!n)e.isLoading=!1;else for(const s of jg(n,o))e.data.push(s),e.tabActiveSpectrum[At(s.info.nucleus)]={id:s.id,index:e.data.length-1};nt(e),e.isLoading=!1}function ry(e,t){var o;const n=oe(e);if(((o=e.activeSpectrum)==null?void 0:o.id)&&n){const{index:s}=e.activeSpectrum,i=10,l=t.x-i,r=t.x+i,[a,u]=Gt(e,{startX:l,endX:r}),d=wa(n.data[s].data,{from:a,to:u}),h=Yt(e.data[s]);if(d){const m={id:U(),originalX:d.x-h,x:d.x,y:d.y,width:0};e.data[s].peaks.values.push(m)}}}function ay(e,t){const n=oe(e);if(e.activeSpectrum){const{index:o}=e.activeSpectrum,s=n.data[o],{startX:i,endX:l}=t,[r,a]=Gt(e,{startX:i,endX:l});if(r!==a){const u=wa(s.data,{from:r,to:a}),d=Yt(e.data[o]);if(u&&!s.peaks.values.some(h=>h.x===u.x)){const h={id:U(),originalX:u.x-d,x:u.x,y:u.y,width:0};e.data[o].peaks.values.push(h)}}}}function cy(e,t){if(e.activeSpectrum){const{index:n}=e.activeSpectrum,o=oe(e);if(t==null)e.data[n].peaks.values=[];else{const s=o.data[n].peaks.values.findIndex(i=>i.id===t.id);e.data[n].peaks.values.splice(s,1)}}}function uy(e,t){var n;if((n=e.activeSpectrum)==null?void 0:n.id){e.toolOptions.selectedTool=_.zoom.id,e.toolOptions.selectedOptionPanel=null;const{index:o}=e.activeSpectrum,s=e.data[o],[i,l]=e.xDomain,r=Ze(s.data.x,i),a=Ze(s.data.x,l),u=Zm(e.data[o],S(b({},t),{windowFromIndex:r,windowToIndex:a}));s.peaks.values=s.peaks.values.concat(u)}}function dy(e){const t="a".charCodeAt(0),o="z".charCodeAt(0)-t+1;let s="";for(;e>=0;)s=String.fromCharCode(e%o+t)+s,e=Math.floor(e/o)-1;return s}var Bo=(e=>(e.NORMAL="NORMAL",e.FORMULA="FORMULA",e))(Bo||{}),$n=(e=>(e.RELATIVE="relative",e.ABSOLUTE="absolute",e.MIN="min",e.MAX="max",e))($n||{});function py(e,t,n,o){const s=o||dy(e[t].options.columnIndex).toUpperCase();return e[t].options.columns[s]=n,e[t].options.columnIndex++,s}function hy(e,t){const{from:n,to:o,nucleus:s}=t;return e.reduce((i,l)=>{if(oo(l)&&l.info.nucleus===s&&!l.info.isFid){const r=sg(l,{from:n,to:o});i.sum+=r.absolute,i.values.push(b({SID:l.id},r))}return i},{values:[],sum:0})}function vu(e,t){e[t]===void 0&&(e[t]={options:{sum:100,code:null,columns:{},columnIndex:0},values:{}})}function fy(e,t,n,o){e[t].options.columns[n].valueKey=o,e[t].values=Li(e,t)}function my(e,t,{columns:n,code:o}){vu(e,t),e[t].options.code=o,e[t].options.columns=Object.values(n).reduce((l,r)=>{const a=b({},r);return delete a.tempKey,l[r.tempKey]=a,l},{});const{columns:s}=e[t].options;let i=Object.entries(e[t].values).reduce((l,[r,a])=>(l[r]=Object.keys(n).reduce((u,d)=>{const h=n[d].tempKey;return a[d]&&(u[h]=a[d]),u},{}),l),{});i=Object.entries(i).reduce((l,r)=>(l[r[0]]=Object.keys(s).reduce((a,u)=>{const d=s[u].type==="FORMULA";return a[u]=d?{colKey:u,value:ku(s,i[r[0]],s[u].formula)}:S(b({},r[1][u]),{colKey:u}),a},{}),l),{}),e[t].values=i}function gy(e,t){return Object.keys(t).reduce((n,o)=>(t[o].type==="FORMULA"&&(n[o]=S(b({colKey:o},e),{value:ku(t,e,t[o].formula)})),n),{})}function Li(e,t){const{columns:n}=e[t].options;return Object.entries(e[t].values).reduce((s,i)=>{const[l,r]=i;return s[l]=b(b({},r),gy(r,n)),s},{})}function Cu(e,t,n){const{from:o,to:s,nucleus:i,columnKey:l=null}=n;vu(t,i);const r=py(t,i,{type:"NORMAL",valueKey:"relative",from:o,to:s,index:1},l),{sum:a}=t[i].options,{values:u,sum:d}=hy(e,{from:o,to:s,nucleus:i}),h=V(t,`${i}.values`,{});let m=u.reduce((g,x)=>{const y=d>0?a/d:0;return g[x.SID]=S(b({},h[x.SID]),{[r]:S(b({colKey:r},x),{relative:Math.abs(x.absolute)*y})}),g},{});t[i].values=m,t[i].values=Li(t,i)}function xy(e,t,n){const o=Object.entries(e[n].values).reduce((a,u)=>(delete u[1][t],u[1]&&Object.keys(u[1]).length>0&&(a[u[0]]=u[1]),a),{}),r=e[n].options.columns,{[t]:s}=r,i=G(r,[ol(t)]);Object.keys(e[n].options.columns).length===1&&(e[n].options.columnIndex=0),e[n].options.columns=i,e[n].values=o,e[n].values=Li(e,n)}function ku(e,t,n=""){const o=n.split(/\+|-|\*|\/|%|\(|\)/),s=[];for(const r of o){const a=r.trim();e[a]&&s.push(a)}const i=s.map(r=>t[r]?t[r][e[r].valueKey]:null);let l;try{l=new Function(...s,`return ${n}`)(...i)}catch(r){console.error(r),l=new Error(`Invalid Formula ( ${n} ) `)}return l}function by(e,t){if(e==null?void 0:e[t]){const{values:n,options:{columns:o}}=e[t];let s="";for(const i in o)s+=`${i}	`;s+=`
`;for(const i of Object.values(n)){for(const l in o)s+=`${i[l][o[l].valueKey]}	`;s+=`
`}return s}return null}function yy(e,t){const[n,o]=Gt(e,t);Cu(e.data,e.spectraAnalysis,{from:n,to:o,nucleus:e.activeTab})}function vy(e,t){const{colKey:n}=t;xy(e.spectraAnalysis,n,e.activeTab)}function Cy(e,t){const{columnKey:n,from:o,to:s}=t.payload;Cu(e.data,e.spectraAnalysis,{from:o,to:s,nucleus:e.activeTab,columnKey:n})}function ky(e,t){const n=t.payload;my(e.spectraAnalysis,e.activeTab,n)}function Sy(e,t){const{columnKey:n,valueKey:o}=t.payload;fy(e.spectraAnalysis,e.activeTab,n,o)}function Su(e){return!(e.display.isPositiveVisible===!1&&e.display.isNegativeVisible===!1)}function Ss(e,t){e.info.dimension===2?(e.display.isPositiveVisible=t,e.display.isNegativeVisible=t,e.display.isVisible=Su(e)):e.display.isVisible=t}function wy(e,t){if(Array.isArray(t.id)){const n=t.id;if(n.length===0)for(const o of e.data)Ss(o,!1);else for(const o of e.data)n.includes(o.id)?Ss(o,!0):Ss(o,!1)}else{const n=e.data.findIndex(o=>o.id===t.id);e.data[n].display[t.key]=t.value,e.data[n].info.dimension===2&&(e.data[n].display.isVisible=Su(e.data[n]))}}function Ey(e,t){var n;for(let o of e.data)((n=o.info)==null?void 0:n.dimension)===1&&t.some(s=>s.id===o.id)?o.display.isPeaksMarkersVisible=!0:o.display.isPeaksMarkersVisible=!1}function Ay(e,t){let n=!1;const o=e.activeSpectrum;if(t){const s=e.data.findIndex(l=>l.id===t.id),i=e.data.findIndex(l=>{var r;return l.id===((r=e.activeSpectrum)==null?void 0:r.id)});if(s!==-1){const l=e.data[s];l.display.isVisible=!0,i!==-1?n=e.data[i].info.isFid!==l.info.isFid:n=l.info.isFid||!1}t=S(b({},t),{index:s}),e.activeSpectrum=t,e.tabActiveSpectrum[e.activeTab]=t}else{if(o){const s=e.data.findIndex(i=>i.id===o.id);n=e.data[s].info.isFid}else n=!1;e.activeSpectrum=null,e.tabActiveSpectrum[e.activeTab]=null}_[e.toolOptions.selectedTool].isFilter&&(e.toolOptions.selectedTool=_.zoom.id,e.toolOptions.data.baseLineZones=[],e.toolOptions.selectedOptionPanel=null,e.tempData=null),e.toolOptions.data.activeFilterID?ss(e,null,{},o):n&&(se(e),tt(e))}function Ty(e,{id:t,display:n}){const s=oe(e).data.findIndex(i=>i.id===t);s!==-1&&(e.data[s].display=n)}function Dy(e,{id:t,color:n,key:o}){const i=oe(e).data.findIndex(l=>l.id===t);i!==-1&&(e.data[i].display[o]=n)}function Ry(e,t){const n=oe(e);if(t.id){const o=n.data.findIndex(s=>s.id===t.id);e.data.splice(o,1)}else e.data=[];nt(e,{tab:e.activeTab,refreshActiveTab:!0})}function Iy(e,t){var s;const n=oe(e),{nucleus:o}=t;if((s=e.activeSpectrum)==null?void 0:s.id){const{index:i}=e.activeSpectrum;for(let a of o){const u=hg(n.data[i],a,e.usedColors);e.data.push(u)}const r=os("nucleus")(e.data);Ka(e,r,e.activeTab,!0),se(e),tt(e)}}function Ny(e,t){var n,o;if(e.data&&e.data.length>0){for(let s of e.data)if(((n=s.info)==null?void 0:n.dimension)===1&&s.info.nucleus===e.activeTab&&!((o=s.info)==null?void 0:o.isFid)){const i=Xm(s,b({},t.payload));Ae(s,[{name:no,options:i}])}}se(e),tt(e)}function My(e,t){const n=t.payload.publicationText,o=jm(n,e.usedColors);e.data.push(o),nt(e),Ot(e,{scale:.8,spectrumID:o.id})}const Py="undo",_y="redo",Fy="reset",Oi=()=>({actionType:"",data:[],contours:{},tempData:null,xDomain:[],yDomain:[],yDomains:{},xDomains:{},originDomain:{xDomain:[],yDomain:[],xDomains:{},yDomains:{},shareYDomain:!1},integralsYDomains:{},activeTab:"",width:0,height:0,margin:{top:10,right:20,bottom:70,left:0},activeSpectrum:null,mode:"RTL",molecules:[],verticalAlign:{align:"bottom",verticalShift:Ra},history:{past:[],present:null,future:[],hasUndo:!1,hasRedo:!1},isLoading:!1,keysPreferences:{},displayerMode:B.DM_1D,tabActiveSpectrum:{},spectraAnalysis:{},correlations:{},displayerKey:"",zoom:{history:{}},overDisplayer:!1,toolOptions:{selectedTool:_.zoom.id,selectedOptionPanel:null,data:{baseLineZones:[],pivot:{value:0,index:0},zonesNoiseFactor:1,activeFilterID:null,tempRange:null,showMultiplicityTrees:!1,showRangesIntegrals:!0,showJGraph:!1}},usedColors:{"1d":[],"2d":[]}}),wu=Oi();function Ly(e){const t=U(),n=Jn([],{tolerance:ja});return S(b({},e),{correlations:n,displayerKey:t,history:{}})}function Oy(e){const t={"1d":[],"2d":[]};return n=>{switch(n.type){case yi:{if(n.payload){const o=xl(n.payload),{spectra:s}=o,i=G(o,["spectra"]);bl(s,t).then(l=>{n.payload=S(b({spectra:l},i),{usedColors:t}),e(n)})}break}case xn:{const s=JSON.parse(n.files[0].binary.toString()),i=xl(s);bl(i.spectra,t).then(l=>{n.payload=Object.assign(i,{spectra:l,usedColors:t}),e(n)});break}case Ho:{for(let s of n.files)Oa({display:{name:s.name}},s.binary,t).then(i=>{n.payload={data:i,usedColors:t},e(n)});break}case Zn:{Qg(n.file,t).then(s=>{n.payload=Object.assign(s,{usedColors:t}),e(n)});break}case ps:{const{mol:{molfile:s},options:i}=n.payload;Vg(s).then(l=>{n.payload={data:l,options:i},e(n)},()=>{e(n)});break}default:n.usedColors=t,e(n);break}}}function $y(e,t){switch([xn,Zn].includes(t.type)||(e.actionType=t.type),t.type){case yi:return Ub(e,t);case vt:return Zb(e,t.isLoading);case xn:return Jb(e,t);case $o:return qb(e,t);case js:return Kb(e,t);case Vs:return Qb(e,t);case Ho:return ey(e,t);case Zn:return ty(e,t);case Ja:return ry(e,t.mouseCoordinates);case Qa:return ay(e,t);case is:return cy(e,t.data);case ic:return Hb(e,t);case rs:return zb(e,t);case Ac:return Sl(e,t);case dc:return Sl(e,t);case Tc:return $b(e,t.value);case au:return jb(e,t);case Gc:return Vb(e,t);case ec:return lx(e,t.domain);case ls:return rx(e,t.xDomain);case Ci:return ax(e,t.yDomain);case tc:return Gx(e,t.width);case ki:return Zx(e,t.width,t.height);case co:return tb(e,t);case ze:return Ue(e);case Ec:return bi(e,t.selectedOptionPanel);case bn:return db(e,t);case vi:return yb(e,t.shiftValue);case gc:return vb(e,t.value);case xc:return Cb(e);case bc:return kb(e,t.value);case yc:return wb(e);case vc:return Sb(e);case Ri:return Eb(e,t.value);case hc:return Ab(e,t.id,t.checked);case fc:return Tb(e,t);case mc:return Db(e,t);case Hc:return Ib(e,t);case su:return Nb(e,t);case iu:return Mb(e,t);case lu:return Pb(e,t);case Wn:return wy(e,t);case Si:return Ey(e,t.data);case zo:return Ay(e,t.data);case sc:return Dy(e,t.data);case oc:return Ty(e,t);case qc:return Ny(e,t);case Ti:return Ry(e,t);case $c:return Iy(e,t);case mu:return My(e,t);case wi:return lb(e);case as:return ub(e,t);case nu:return xb(e);case ou:return bb(e);case Di:return ob(e);case Ei:return ny(e,t.molfile);case Ai:return oy(e,t.molfile,t.key);case lc:return iy(e,t);case ps:return ly(e,t);case cc:return zx(e,t.payload);case uc:return Vx(e,t.payload);case Bs:return jx(e,t.payload);case rc:return Bx(e,t.payload);case ac:return Xx(e,t.payload);case cs:return rb(e,t);case Ii:return ab(e,t.position);case Ni:return nb(e);case Cc:return uy(e,t.options);case Sc:return Mx(e,t.options);case cu:return Ix(e,t);case kc:return ux(e,t.options);case Pc:return bx(e,t);case us:return px(e,t);case wc:return Ya(e,t);case Nc:return gx(e,t);case Mc:return xx(e,t.value);case ru:return Cx(e,t);case zc:return yx(e,t);case Vc:return vx(e,t);case jc:return hx(e,t);case Bc:return fx(e,t);case Xc:return Ga(e,t);case Yc:return mx(e,t);case uu:return kx(e,t);case du:return Sx(e);case pu:return wx(e);case hu:return dx(e);case xu:return Ex(e);case Mi:return mb(e,t.tab);case Dc:return sb(e,t.zone);case Rc:return ib(e,t.id);case Ic:return Rb(e,t);case Vo:return qx(e,t.keyCode);case Pi:return Jx(e,t.keyCode);case _c:return gb(e,t);case Fc:return Nx(e,t);case ds:return Lx(e,t);case Lc:return Za(e,t);case Oc:return Ox(e,t);case pc:return cx(e);case Xs:return _x(e,t);case Jc:return Fx(e,t);case eu:return Wa(e,t);case tu:return $x(e,t);case fu:return Px(e);case Qc:return Hx(e,t);case Zc:return yy(e,t);case _i:return vy(e,t);case Wc:return Cy(e,t);case Uc:return ky(e,t);case Kc:return Sy(e,t);case gu:return Yx(e,t);case Py:return Fb(e);case _y:return Lb(e);case Fy:return Ob(e,t);case jo:return _b(e,t);default:return}}const Hy=Us($y),Eu=c.exports.createContext(wu),zy=Eu.Provider;function $(){return c.exports.useContext(Eu)}const Au=c.exports.createContext({}),Vy=Au.Provider;function Y(){return c.exports.useContext(Au)}function ve(e){const{data:t,activeSpectrum:n}=$();return c.exports.useMemo(()=>t&&n&&n.id&&t.find(s=>s.id===n.id)||e,[n,t,e])}function jy(){}const Tu=c.exports.createContext(jy),By=Tu.Provider;function $i(){return c.exports.useContext(Tu)}const Xy=P`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  flex-direction: column;
  user-select: none;
  width: 100%;
  height: 100%;
  outline: 10px dashed rgba(0, 0, 0, 0.3);
  outline-offset: -10px;
  padding-left: 20px;
  padding-right: 20px;

  p {
    padding: 15px 30px;
    background-color:rgba(0, 0, 0, 0.5);
    border-radius: 39px;
    color: white;
    font-size: x-large;
    font-weight: bold;

  }
}
`;function Du({isEmpty:e=!0,emptyText:t="Drag and drop here a JCAMP-DX, zipped Bruker folder, Jeol jdf or NMRium file",canOpenLoader:n=!0}){const o=$i();return e?p("div",S(b({css:Xy},n&&{onClick:o}),{children:p("p",{children:t})})):null}const Yy=P`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  height: 100%;
  flex-direction: column;
  user-select: none;
  position: absolute;
  width: 100%;

  svg {
    animation-duration: 0.5s;
    animation-name: spinAnimation;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: inherit;
    animation-timing-function: linear;
    animation-duration: 1s;
    width: 100px;
    height: 100px;
  }

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;function Gy(){return w("div",{css:Yy,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Loading ..."})]})}function Ru(){return f(Gy,{})}const Iu=c.exports.createContext(Ru),Zy=Iu.Provider;function Nu({isLoading:e=!0,emptyText:t=void 0}){const{data:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{let l=null;return e||(l=setTimeout(()=>{s(!0)},500)),()=>{clearTimeout(l)}},[e]);const i=c.exports.useContext(Iu);return F(c.exports.Fragment,{children:[e&&i(),o&&!e&&f(Du,{isEmpty:n&&n.length===0,emptyText:t})]})}const Wy={container:{transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",zoom:"100%"}},Uy=[_.zoom.id,_.zeroFilling.id,_.peakPicking.id,_.integral.id,_.phaseCorrection.id,_.baseLineCorrection.id,_.rangesPicking.id,_.zone2D.id,_.slicingTool.id,_.editRange.id,_.multipleSpectraAnalysis.id,_.exclusionZones.id,_.databaseRangesSelection.id],De={X:1,Y:2,XY:3},Ky={startX:0,startY:0};function Eo({brushType:e=De.XY,dimensionBorder:t=Ky,width:n,height:o}){let{width:s,height:i,toolOptions:{selectedTool:l}}=$(),{startX:r,endX:a,startY:u,endY:d,step:h}=c.exports.useContext(wt);if(!Uy.includes(l)||h!=="brushing"||!t||t.startX&&r<t.startX||t.startY&&u<t.startY||(t.endX&&Math.sign(a-r)===1?a>t.endX:a<t.startX)&&(t.endX&&t.endY&&Math.sign(d-u)===1?d>t.endY:d<t.startY))return null;s=n||s,i=o||i,a=t.endX&&a>t.endX?t.endX:t.startX&&a<t.startX?t.startX:a,d=t.endY&&d>t.endY?t.endY:t.startY&&d<t.startY?t.startY:d;const m=e===De.X||e===De.XY?(a-r)/s:1;r=e===De.X||e===De.XY?r:0;const g=e===De.Y||e===De.XY?(d-u)/i:1;return u=e===De.Y||e===De.XY?u:0,f("div",{style:S(b({},Wy.container),{transform:`translate(${r}px, ${u}px) scale(${m},${g})`,willChange:"transform"}),children:f("svg",{width:s,height:i,children:f("rect",{x:"0",y:"0",width:s,height:i,fill:"gray",opacity:"0.2"})})})}const wl={line:{stroke:"black",strokeOpacity:1,shapeRendering:"crispEdges",strokeWidth:"1",willChange:"transform"}},qy=[_.zoom.id,_.equalizerTool.id,_.baseLineCorrection.id,_.zone2D.id,_.slicingTool.id,_.integral.id,_.rangesPicking.id,_.editRange.id,_.multipleSpectraAnalysis.id,_.exclusionZones.id,_.databaseRangesSelection.id];function Mu(){const{height:e,width:t,margin:n,toolOptions:{selectedTool:o}}=$();let s=c.exports.useContext(ut);const i=c.exports.useContext(wt);return!qy.includes(o)||i.step==="brushing"||!s||s.x>t-n.right||s.y>e-n.bottom||!t||!e?null:f("div",{style:{willChange:"transform",cursor:"crosshair",transform:`translate(${-t+s.x}px, ${-e+s.y}px)`,position:"absolute",top:0,left:0,pointerEvents:"none",overflow:"visible",width:2*t,height:2*e},children:F("svg",{width:2*t,height:2*e,children:[f("line",{style:wl.line,x1:t,y1:"0",x2:t,y2:e*2},"vertical_line"),f("line",{style:wl.line,x1:"0",y1:e,x2:t*2,y2:e},"horizontal_line")]})},"crossLine")}function Jy(e,t){const[n,o]=c.exports.useState(localStorage.getItem(e)||"{}");c.exports.useEffect(()=>{localStorage.setItem(e,n)},[e,n]);const s=c.exports.useCallback((i,l=null)=>{let r=JSON.parse(n);l?pp(r,l,i):r=b(b({},r),i),o(JSON.stringify(r))},[n]);return c.exports.useMemo(()=>[t?V(JSON.parse(n),t,{}):JSON.parse(n),s],[t,s,n])}function Ct(e,t=!0){const n=localStorage.getItem(e);return n&&t?JSON.parse(n):n}function An(e,t){localStorage.setItem(e,t)}function El(e){localStorage.removeItem(e)}function pt(e,t,n=null){return V(e,t,n)}const jt={version:1,label:"Default workspace",display:{general:{disableMultipletAnalysis:!1,hideSetSumFromMolecule:!1,hideGeneralSettings:!1,experimentalFeatures:{display:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{display:!0,open:!1},peaksPanel:{display:!0,open:!1},integralsPanel:{display:!0,open:!1},rangesPanel:{display:!0,open:!1},structuresPanel:{display:!0,open:!1},filtersPanel:{display:!0,open:!1},zonesPanel:{display:!0,open:!1},summaryPanel:{display:!1,open:!1},multipleSpectraAnalysisPanel:{display:!1,open:!1},databasePanel:{display:!1,open:!1},predictionPanel:{display:!1,open:!1}}},controllers:{dimmedSpectraTransparency:.1},formatting:{nucleus:[{key:"1H",name:"1H",ppm:"0.00",hz:"0.00"},{key:"13C",name:"13C",ppm:"0.00",hz:"0.00"},{key:"15N",name:"15N",ppm:"0.00",hz:"0.00"},{key:"19F",name:"19F",ppm:"0.00",hz:"0.00"},{key:"29Si",name:"29Si",ppm:"0.00",hz:"0.00"},{key:"31P",name:"31P",ppm:"0.00",hz:"0.00"}],nucleusByKey:{},panels:{}}},Qy={version:1,label:"Exercise workspace",display:{general:{disableMultipletAnalysis:!0,hideSetSumFromMolecule:!0,hideGeneralSettings:!0,experimentalFeatures:{hidden:!0}},panels:{spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{display:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},zonesPanel:{hidden:!0},summaryPanel:{hidden:!0},multipleSpectraAnalysisPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{zoomTool:!0,zoomOutTool:!0,import:!1,exportAs:!1,spectraStackAlignments:!0,spectraCenterAlignments:!0,realImaginary:!1,peakTool:!0,integralTool:!0,zonePickingTool:!1,slicingTool:!1,autoRangesTool:!1,zeroFillingTool:!1,phaseCorrectionTool:!1,baseLineCorrectionTool:!1,FFTTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting},e0={version:1,label:"Prediction workspace",display:{general:{experimentalFeatures:{display:!1}},panels:{spectraPanel:{display:!0},rangesPanel:{display:!0},zonesPanel:{display:!0},predictionPanel:{display:!0,open:!0},informationPanel:{display:!1},peaksPanel:{display:!1},integralsPanel:{display:!1},structuresPanel:{display:!1},filtersPanel:{display:!1},summaryPanel:{display:!1},multipleSpectraAnalysisPanel:{display:!1},databasePanel:{display:!1}}},controllers:jt.controllers,formatting:jt.formatting},t0={version:1,label:"Process 1D workspace",display:{general:{disableMultipletAnalysis:!0},panels:{zonesPanel:{display:!0},summaryPanel:{display:!0},multipleSpectraAnalysisPanel:{display:!0,open:!0},spectraPanel:{display:!0,open:!0},informationPanel:{hidden:!0},peaksPanel:{hidden:!0},integralsPanel:{hidden:!0},rangesPanel:{hidden:!0},structuresPanel:{hidden:!0},filtersPanel:{hidden:!0},databasePanel:{hidden:!0},predictionPanel:{hidden:!0}},toolBarButtons:{import:!1,exportAs:!1,autoRangesTool:!1,multipleSpectraAnalysisTool:!1,exclusionZonesTool:!1}},controllers:jt.controllers,formatting:jt.formatting};var He={exercise:Qy,default:jt,process1D:t0,prediction:e0};const Pu=5,n0=[{key:"default",label:He.default.label},{key:"process1D",label:He.process1D.label},{key:"exercise",label:He.exercise.label},{key:"prediction",label:He.prediction.label}];function Hi(e){switch(e){case"exercise":return He.exercise;case"process1D":return He.process1D;case"prediction":return He.prediction;case"default":return He.default;default:return{}}}function uo(e){return e.workspaces[e.workspace.current||"default"]}const _u={version:Pu,workspaces:{},dispatch:()=>null,workspace:{current:"default",base:null}};function Fu(e){return JSON.parse(JSON.stringify(e),(t,n)=>{if((n==null?void 0:n.hidden)!==!0)return n})}function Al(e){let t={};return JSON.parse(JSON.stringify(e),(n,o)=>{(o==null?void 0:o.hidden)!==!0&&n&&(t[n]=t[n]++||1)}),t}function o0(e,t){const n=Al(e),o=Al(t);if(Object.keys(o).length===0)return!1;for(const[s,i]of Object.entries(n))if(!o[s]||o[s]!==i)return!1;return!0}function s0(e){const t=uo(e);t.formatting.nucleus&&Array.isArray(t.formatting.nucleus)&&(t.formatting.nucleusByKey=t.formatting.nucleus.reduce((n,o)=>(n[o.name.toLowerCase()]=o,b({},n)),{}))}function i0(e){const t=Ct("nmr-local-storage-version",!1);let n=Ct("nmr-general-settings");return t&&(n==null?void 0:n.version)&&El("nmr-local-storage-version"),(!(n==null?void 0:n.version)||(n==null?void 0:n.version)!==Pu)&&El("nmr-general-settings"),S(b({},e),{workspaces:(n==null?void 0:n.workspaces)||{default:He.default}})}function l0(e,t){if(t.payload){const o=Ct("nmr-general-settings"),n=t.payload,{dispatch:s,workspace:i}=n,l=G(n,["dispatch","workspace"]);e.workspace=!i&&(o==null?void 0:o.currentWorkspace)?{current:o.currentWorkspace,base:null}:{current:i||"default",base:i};const r=cn({},Hi(e.workspace.current),l),a=uo(e);if(He[e.workspace.current]&&(!a||(r==null?void 0:r.version)!==(a==null?void 0:a.version)||!o0(r.display,a==null?void 0:a.display))||!o){const{workspaces:u,version:d}=e||{},h=Fu(r.display),m={version:d,workspaces:S(b({},u),{[e.workspace.current]:S(b({},r),{display:h})})};e.workspaces[e.workspace.current]=cn({},a,r),An("nmr-general-settings",JSON.stringify(m))}else a.display=cn({},r.display,a.display);e.dispatch=s}}function r0(e,t){if(t.payload){const n=uo(e),{controllers:o,formatting:s,display:i}=t.payload;let l=Ct("nmr-general-settings");l.currentWorkspace=e.workspace.current,l.workspaces=S(b({},l.workspaces),{[e.workspace.current]:S(b({},l.workspaces[e.workspace.current]),{controllers:o,formatting:s,display:i})}),An("nmr-general-settings",JSON.stringify(l)),n.controllers=o,n.formatting=s,n.display=S(b({},n.display),{panels:i.panels,general:S(b({},n.display.general||{}),{experimentalFeatures:i.general.experimentalFeatures})}),s0(e)}}function a0(e,t){if(t.payload){const n=uo(e),{key:o,value:s}=t.payload;let i=Ct("nmr-general-settings");i.workspaces[e.workspace.current].formatting.panels[o]=s,An("nmr-general-settings",JSON.stringify(i)),n.formatting.panels[o]=s}}function c0(e){const t=uo(e);let n=Ct("nmr-general-settings");const o=Hi(e.workspace.current).display;n.workspaces[e.workspace.current].display=o,t.display=o,An("nmr-general-settings",JSON.stringify(n))}function u0(e,t){const n=t.payload.workspace;e.workspaces[n]||(e.workspaces[n]=Hi(n)),e.workspace.current=n}function d0(e,t){const{workspace:n,data:{display:o,controllers:s,formatting:i}}=t.payload,l={version:1,label:n,display:o,controllers:s,formatting:i},r=U(),a=Ct("nmr-general-settings");a.workspaces[r]=l,An("nmr-general-settings",JSON.stringify(a)),e.workspaces[r]=l,e.workspace.current=r}function p0(e,t){var l;const{workspace:n}=t.payload;n===e.workspace.current&&(e.workspace.current="default");let o=Ct("nmr-general-settings");const s=((l=oe(e))==null?void 0:l.workspaces)||{},i=Object.keys(s).reduce((r,a)=>(a!==n&&(r[a]=s[a]),r),{});e.workspaces=i,o.workspaces=Fu(i),An("nmr-general-settings",JSON.stringify(o))}function h0(e,t){switch(t.type){case"INIT_PREFERENCES":return l0(e,t);case"SET_PREFERENCES":return r0(e,t);case"SET_PANELS_PREFERENCES":return a0(e,t);case"RESET_PREFERENCES":return c0(e);case"SET_WORKSPACE":return u0(e,t);case"ADD_WORKSPACE":return d0(e,t);case"REMOVE_WORKSPACE":return p0(e,t);default:return e}}const f0=Us(h0),Lu=c.exports.createContext(_u),m0=Lu.Provider;function ce(){const e=c.exports.useContext(Lu);if(!e)throw new Error("Preferences context was not found");const{workspace:t,workspaces:n,dispatch:o}=e;return c.exports.useMemo(()=>({current:n[t.current]||{},workspace:t,workspaces:n,dispatch:o}),[o,t,n])}class Zt{constructor(){this.array=[]}moveTo(t,n){this.array.push(`M ${t} ${n}`)}lineTo(t,n){this.array.push(`L ${t} ${n}`)}closePath(){this.array.push("Z")}toString(){return this.array.join(" ")}}function Tl({id:e,sign:t,color:n,datum:o}){const{margin:s,width:i,height:l,xDomain:r,yDomain:a,contours:u,activeSpectrum:d}=$(),h=ce(),{xShift:m,yShift:g}=io(o),x=c.exports.useMemo(()=>d===null?!0:e===d.id,[d,e]);function y(v){const k=Ee({margin:s,width:i,xDomain:r}),E=be({margin:s,height:l,yDomain:a}),T=new Zt;for(const M of v)if(M.lines){const I=M.lines;if(I.length<1e6)for(let N=0;N<I.length;N+=4)T.moveTo(k(I[N]+m),E(I[N+1]+g)),T.lineTo(k(I[N+2]+m),E(I[N+3]+g))}else{T.moveTo(k(M[0].x+m),E(M[0].y+g));for(let I=1;I<M.length;I++)T.lineTo(k(M[I].x+m),E(M[I].y+g))}return T.closePath(),T.toString()}const C=c.exports.useMemo(()=>V(u,`${e}.${t}`,[]),[u,t,e]);return f("path",{fill:"none","data-test-id":"spectrum-line",stroke:n,strokeWidth:"1",style:{opacity:x?1:V(h.current,"controllers.dimmedSpectraTransparency",.1)},d:y(C)})}function g0({data:e,displayerKey:t}){return f("g",{clipPath:`url(#${t}clip-chart-2d)`,className:"contours",children:e==null?void 0:e.map((n,o)=>F("g",{children:[n.display.isPositiveVisible&&f(Tl,{id:n.id,sign:"positive",datum:n,color:n.display.positiveColor}),n.display.isNegativeVisible&&f(Tl,{id:n.id,sign:"negative",datum:n,color:n.display.negativeColor})]},`${n.id+o}`))})}const x0=c.exports.memo(g0);function b0(){const{data:e,displayerKey:t}=$(),n=c.exports.useMemo(()=>e.filter(o=>o.info.dimension===2&&o.info.isFt),[e]);return f(x0,{data:n,displayerKey:t})}var Tn=(e=>(e.XAxis="XAxis",e.YAxis="YAxis",e))(Tn||{});function po(e){const{width:t,xDomain:n,yDomain:o}=$();return c.exports.useCallback(s=>{const{x:i,y:l}=s,[r,a]=e==="XAxis"?n:o;return wr({x:i,y:l},{from:r,to:a,nbPoints:t*4,optimize:!0})},[e,t,n,o])}function y0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,yDomains:i,displayerKey:l}=$(),r=po(Tn.YAxis),a=o.left,u=c.exports.useMemo(()=>{if(t){const h=be({height:n,yDomain:[s[0],s[1]],margin:o}),m=gn(i[t.id],a,e),{x:g,re:x}=t.data,y=r({x:g,y:x}),C=new Zt;C.moveTo(m(y.y[y.y.length-1]),h(y.x.length-1));for(let v=y.x.length-2;v>=0;v--)C.lineTo(m(y.y[v]),h(y.x[v]));return C.toString()}else return},[a,o,e,n,t,r,s,i]),d=n-o.bottom-o.top;return!d||!a?null:F("svg",{viewBox:`0 0 ${a} ${d+o.top}`,width:a,height:d+o.top,children:[f("defs",{children:f("clipPath",{id:`${l}clip-left`,children:f("rect",{width:a,height:d,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${l}clip-left)`,children:f("path",{className:"line",stroke:"black",fill:"none",d:u})})]})}var v0=c.exports.memo(y0);function C0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,yDomains:i,displayerKey:l}=$(),r=po(Tn.XAxis),a=o.top,u=c.exports.useMemo(()=>{if(t){const d=Ee({width:n,xDomain:s,margin:o}),h=gn(i[t.id],a,e),{x:m,re:g}=t.data,x=r({x:m,y:g}),y=new Zt;y.moveTo(d(x.x[0]),h(x.y[0]));for(let C=1;C<x.x.length;C++)y.lineTo(d(x.x[C]),h(x.y[C]));return y.toString()}else return},[a,e,o,t,n,s,r,i]);return!n||!a?null:F("svg",{viewBox:`0 0 ${n} ${a}`,width:n,height:a,children:[f("defs",{children:f("clipPath",{id:`${l}clip-top`,children:f("rect",{width:n-o.left-o.right,height:a,x:o.left,y:`${0}`})})}),f("g",{clipPath:`url(#${l}clip-top)`,children:f("path",{className:"line",stroke:"red",fill:"none",strokeWidth:"1px",d:u})})]})}var k0=c.exports.memo(C0);const S0=P`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,w0={right:100,top:0,left:0,bottom:0};function E0(e){const{show:t=!0,label:n="\u03B4 [ppm]",margin:o=w0}=e,s=$(),{xDomain:i,height:l,width:r,margin:a,tabActiveSpectrum:u,activeTab:d}=s,h=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!t)return;const m=Ee({width:r,margin:a,xDomain:i}),g=Ms(m).ticks(8).tickFormat(Ks("0"));Do(h.current).call(g)},[d,l,a,a.bottom,a.left,a.right,a.top,t,u,r,i]),!r||!l?null:p(Qe,{children:t&&p("g",{className:"x",css:S0,transform:`translate(0,${l-(a.bottom+o.bottom)})`,ref:h,children:p("text",{fill:"#000",x:r-60,y:"20",dy:"0.71em",textAnchor:"end",children:n})})})}var A0=c.exports.memo(E0);const T0=P`
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: 'none';
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
  }
`,D0={right:50,top:0,bottom:0,left:0};function R0(e){const{show:t=!0,label:n="",margin:o=D0}=e,s=c.exports.useRef(null),i=$(),{yDomain:l,width:r,height:a,activeTab:u,tabActiveSpectrum:d,margin:h}=i;return c.exports.useEffect(()=>{if(!t||!l)return;const m=be({height:a,yDomain:l,margin:h}),g=hp(m).ticks(8).tickFormat(Ks("0"));Do(s.current).call(g)},[t,l,u,d,a,h]),!r||!a?null:p(Qe,{children:p("g",{className:"y",css:T0,transform:`translate(${r-o.right})`,ref:s,children:p("text",{fill:"#000",x:-o.top,y:-(o.right-5),dy:"0.71em",transform:"rotate(-90)",textAnchor:"end",children:n})})})}var I0=c.exports.memo(R0);const Dl=P`
  stroke: lightgrey;
  opacity: 0.7;
`;function Rl({axis:e,show:t}){const{data:n,activeTab:o,margin:s,width:i,height:l,xDomain:r,yDomain:a,displayerMode:u}=$(),[d,h]=c.exports.useState([]),m=Ee({margin:s,width:i,xDomain:r}),g=be({margin:s,height:l,yDomain:a});c.exports.useEffect(()=>{const y=o.split(","),C=e==="X"?y[0]:e==="Y"?y[1]:null;if(C!==null){const k=n.filter(E=>E.display.isVisible===!0&&E.info.nucleus===C).filter(oo).map(E=>E.ranges.values).flat().map(E=>E.signals.filter(T=>eo.some(M=>T.kind===M)).map(T=>T.delta)).flat();h(k)}else h([])},[o,e,n,u]);const x=c.exports.useMemo(()=>{if(t===!0&&d.length>0)return d.map((C,v)=>e==="X"?p("line",{css:Dl,x1:m(C),x2:m(C),y1:g(a[0]),y2:g(a[1])},`indicationLine${e}${v}`):e==="Y"?p("line",{css:Dl,x1:m(r[0]),x2:m(r[1]),y1:g(C),y2:g(C)},`indicationLine${e}${v}`):null)},[e,d,m,g,t,r,a]);return p("g",{children:x})}const xo=new fp,de={on:(e,t)=>xo.on(e,t),once:(e,t)=>xo.once(e,t),off:(e,t)=>xo.off(e,t),emit:(e,t)=>xo.emit(e,t)};Object.freeze(de);const Ou=c.exports.createContext({});function N0(e,t){var n;switch(t.type){case"ADD":{const o=S(b({},e),{assignment:b({},e.assignment)});return o.assignment[t.payload.id[0]]===void 0&&(o.assignment[t.payload.id[0]]={}),o.assignment[t.payload.id[0]][t.payload.axis]===void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=[]),o.assignment[t.payload.id[0]][t.payload.axis].includes(t.payload.id[1])||o.assignment[t.payload.id[0]][t.payload.axis].push(t.payload.id[1]),o}case"REMOVE":{const o=S(b({},e),{assignment:b({},e.assignment)});return((n=o.assignment[t.payload.id[0]])==null?void 0:n[t.payload.axis])!==void 0&&(o.assignment[t.payload.id[0]][t.payload.axis]=o.assignment[t.payload.id[0]][t.payload.axis].filter(s=>s!==t.payload.id[1]),o.assignment[t.payload.id[0]][t.payload.axis].length===0&&delete o.assignment[t.payload.id[0]][t.payload.axis],Object.keys(o.assignment[t.payload.id[0]]).length===0&&delete o.assignment[t.payload.id[0]]),o}case"REMOVE_ALL":{const o=S(b({},e),{assignment:b({},e.assignment)});return t.payload.id.forEach(s=>{var i;((i=o.assignment[s])==null?void 0:i[t.payload.axis])!==void 0&&(delete o.assignment[s][t.payload.axis],Object.keys(o.assignment[s]).length===0&&delete o.assignment[s])}),o}case"SET_IS_ACTIVE":return S(b({},e),{isActive:t.payload.id!==void 0&&t.payload.axis!==void 0,activeID:t.payload.id,activeAxis:t.payload.axis});case"SET_IS_ON_HOVER":return S(b({},e),{isOnHover:t.payload.id!==void 0,onHoverID:t.payload.id,onHoverAxis:t.payload.axis});case"DELETE_RECORD":{const o=S(b({},e),{assignment:b({},e.assignment)});return delete o.assignment[t.payload.id],o.isActive&&o.activeID===t.payload.id&&(o.isActive=!1,o.activeID=void 0,o.activeAxis=void 0),o.isOnHover&&o.onHoverID===t.payload.id&&(o.isOnHover=!1,o.onHoverID=void 0,o.onHoverAxis=void 0),o}default:throw new Error(`unknown action type: ${t.type}`)}}const M0={assignment:{},isActive:!1,activeID:void 0,activeAxis:void 0,isOnHover:!1,onHoverID:void 0,onHoverAxis:void 0};function P0(e){const{spectraData:t}=e,[n,o]=c.exports.useReducer(N0,M0),s=c.exports.useMemo(()=>({assignment:n,dispatch:o}),[n]);function i(r,a){a.dispatch({type:"DELETE_RECORD",payload:{id:r.id}}),(r.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"x"}})),r.signals.forEach(u=>(u.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"x"}})))}function l(r,a){a.dispatch({type:"DELETE_RECORD",payload:{id:r.id}}),(r.y.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"y"}})),(r.x.diaIDs||[]).forEach(u=>a.dispatch({type:"ADD",payload:{id:[r.id,u],axis:"x"}})),r.signals.forEach(u=>{(u.x.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"x"}})),(u.y.diaIDs||[]).forEach(d=>a.dispatch({type:"ADD",payload:{id:[u.id,d],axis:"y"}}))})}return c.exports.useEffect(()=>{t&&t.forEach(r=>{r.info.dimension===1?r.ranges.values.forEach(a=>i(a,s)):r.info.dimension===2&&r.zones.values.forEach(a=>l(a,s))})},[t]),f(Ou.Provider,{value:s,children:e.children})}function je(){return c.exports.useContext(Ou)}function ct(e){const t=je();if(typeof e!="string"&&typeof e!="number"||e==="")throw new Error("assignment key must be a non-empty string or number");const n=String(e),o=c.exports.useMemo(()=>t.assignment.isActive&&t.assignment.activeID===n,[t.assignment.activeID,t.assignment.isActive,n]),s=c.exports.useMemo(()=>o?t.assignment.activeAxis:void 0,[t.assignment.activeAxis,o]),i=c.exports.useMemo(()=>t.assignment.assignment[n]?t.assignment.assignment[n]:[],[t.assignment.assignment,n]),l=c.exports.useMemo(()=>t.assignment.isOnHover&&t.assignment.onHoverID===n,[t.assignment.isOnHover,t.assignment.onHoverID,n]),r=c.exports.useMemo(()=>l?t.assignment.onHoverAxis:void 0,[t.assignment.onHoverAxis,l]),a=c.exports.useCallback(v=>{t.dispatch({type:"ADD",payload:{id:[n,v],axis:s}})},[s,t,n]),u=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE",payload:{id:[n,v],axis:s}})},[s,t,n]),d=c.exports.useCallback(v=>{t.dispatch({type:"REMOVE_ALL",payload:{id:[n],axis:v}})},[t,n]),h=c.exports.useCallback(v=>{i[s]===void 0||!i[s].includes(v)?a(v):u(v)},[s,a,i,u]),m=c.exports.useCallback(()=>{t.dispatch({type:"DELETE_RECORD",payload:{id:n}})},[t,n]),g=c.exports.useCallback(v=>{t.dispatch({type:"SET_IS_ACTIVE",payload:{id:o?void 0:n,axis:!o&&n!==void 0?v:void 0}})},[t,n,o]),x=c.exports.useCallback((v,k)=>{v==="enter"?t.dispatch({type:"SET_IS_ON_HOVER",payload:{id:n,axis:n!==void 0?k:void 0}}):v==="leave"&&t.dispatch({type:"SET_IS_ON_HOVER",payload:{}})},[t,n]),y=c.exports.useCallback(v=>x("enter",v),[x]),C=c.exports.useCallback(v=>x("leave",v),[x]);return{id:n,isActive:o,activeAxis:s,assigned:i,add:a,remove:u,removeAll:d,toggle:h,deleteRecord:m,onClick:g,isOnHover:l,onHoverAxis:r,onMouseEnter:y,onMouseLeave:C}}function zi(e,t){return t.filter(n=>Object.keys(e.assignment).filter(o=>o===n))}var ue=(e=>(e.PEAK="PEAK",e.INTEGRAL="INTEGRAL",e.SIGNAL="SIGNAL",e.RANGE="RANGE",e.ZONE="ZONE",e.EXCLUSION_ZONE="EXCLUSION_ZONE",e.DATABASE="DATABASE",e.UNKNOWN="UNKNOWN",e))(ue||{});const $u={highlight:{highlights:{},highlighted:[],highlightedPermanently:[],sourceData:null},dispatch:()=>null,remove:()=>null},Hu=c.exports.createContext($u);function _0(e,t){switch(t.type){case"SHOW":{const{convertedHighlights:n,sourceData:o}=t.payload,{type:s="UNKNOWN",extra:i=null}=o||{},l=S(b({},e),{highlights:b({},e.highlights),sourceData:{type:s,extra:i}});for(const r of n)r in l.highlights||(l.highlights[r]=1);return l.highlighted=Object.keys(l.highlights),l}case"HIDE":{const{convertedHighlights:n}=t.payload,o=S(b({},e),{highlights:b({},e.highlights),sourceData:null});for(const s of n)s in o.highlights&&delete o.highlights[s];return o.highlighted=Object.keys(o.highlights),o}case"SET_PERMANENT":return S(b({},e),{highlightedPermanently:t.payload});case"UNSET_PERMANENT":return S(b({},e),{highlightedPermanently:[]});default:throw new Error(`unknown action type: ${t.type}`)}}function F0(e){const[t,n]=c.exports.useReducer(_0,$u.highlight),o=c.exports.useMemo(()=>{function s(){n({type:"HIDE",payload:{convertedHighlights:t.highlighted}})}return{highlight:t,dispatch:n,remove:s}},[t]);return f(Hu.Provider,{value:o,children:e.children})}function Dn(){return c.exports.useContext(Hu)}function ie(e,t=null){if(!Array.isArray(e))throw new Error("highlights must be an array");const{dispatch:n,highlight:o}=Dn(),s=c.exports.useMemo(()=>{const m=[];for(const g of e){if(typeof g!="string"&&typeof g!="number")throw new Error("highlight key must be a string or number");g!==""&&m.push(String(g))}return m},[e]);c.exports.useEffect(()=>()=>{n({type:"HIDE",payload:{convertedHighlights:[]}}),n({type:"UNSET_PERMANENT"})},[n]);const i=c.exports.useMemo(()=>o.highlighted.some(m=>s.includes(m)),[s,o.highlighted]),l=c.exports.useMemo(()=>o.highlightedPermanently.some(m=>s.includes(m)),[s,o.highlightedPermanently]),r=c.exports.useCallback(()=>{n({type:"SHOW",payload:{convertedHighlights:s,sourceData:t}})},[n,s,t]),a=c.exports.useCallback(()=>{n({type:"HIDE",payload:{convertedHighlights:s}})},[s,n]),u=c.exports.useCallback(m=>{n({type:"SHOW",payload:{convertedHighlights:[],id:m}})},[n]),d=c.exports.useCallback(m=>{n({type:"HIDE",payload:{convertedHighlights:[],id:m}})},[n]),h=c.exports.useCallback(m=>{m&&(m.preventDefault(),m.stopPropagation()),n(l?{type:"UNSET_PERMANENT"}:{type:"SET_PERMANENT",payload:s})},[s,n,l]);return c.exports.useMemo(()=>({isActive:i,onHover:{onMouseEnter:r,onMouseLeave:a},onClick:h,show:r,hide:a,isActivePermanently:l,click:h,add:u,remove:d}),[u,h,a,i,l,d,r])}const zu="___";function Ce(e,t){return`${e}${zu}${t}`}const Il=P`
  stroke: green;
  stroke-width: 2;
  opacity: 0.5;
`;function Nl({delta:e,axis:t,show:n}){const{margin:o,width:s,height:i,xDomain:l,yDomain:r}=$(),a=Ee({margin:o,width:s,xDomain:l}),u=be({margin:o,height:i,yDomain:r}),d=c.exports.useMemo(()=>n===!0?t==="X"?p("line",{css:Il,x1:a(e),x2:a(e),y1:u(r[0]),y2:u(r[1])},`signalLine_${e}_X`):t==="Y"?p("line",{css:Il,x1:a(l[0]),x2:a(l[1]),y1:u(e),y2:u(e)},`signalLine_${e}_Y`):null:null,[t,e,a,u,n,l,r]);return p("g",{children:d})}function L0({signal:e}){var l,r;const t=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_X")],[e.id]),n=c.exports.useMemo(()=>[Ce(e.id,"Crosshair"),Ce(e.id,"Crosshair_Y")],[e.id]),o=ie(t),s=ie(n),i=ie([e.id]);return!((l=e==null?void 0:e.x)==null?void 0:l.delta)||!((r=e==null?void 0:e.y)==null?void 0:r.delta)?null:w("g",{children:[p(Nl,{delta:e.x.delta,axis:"X",show:o.isActive||i.isActive}),p(Nl,{delta:e.y.delta,axis:"Y",show:s.isActive||i.isActive})]})}const O0=c.exports.memo(({signal:e,isVisible:t})=>{const{margin:n,width:o,height:s,xDomain:i,yDomain:l}=$(),r=Ee({margin:n,width:o,xDomain:i}),a=be({margin:n,height:s,yDomain:l}),u=c.exports.useCallback(y=>[y].concat(Ce(y,"X"),Ce(y,"Y")),[]),d=ct(e.id),h=ie(u(d.id)),m=Dn(),[g,x]=c.exports.useState(!1);return c.exports.useEffect(()=>{m.highlight.highlighted.some(y=>u(e.id).includes(y))||d.isActive?x(!0):x(!1)},[d.isActive,u,m.highlight.highlighted,e.id]),e?w("g",{className:"zone-signal",onMouseEnter:()=>{d.onMouseEnter(void 0),h.show()},onMouseLeave:()=>{d.onMouseLeave(void 0),h.hide()},children:[t.signals&&w("g",{children:[p("circle",{cx:r(e.x.delta||0),cy:a(e.y.delta||0),r:g?6:4,fill:g?"green":"darkgreen"},e.id),p(L0,{signal:e})]}),p("g",{className:"zone-signal-peak",children:t.peaks&&e.peaks&&e.peaks.map((y,C)=>p("circle",{cx:r(y.x),cy:a(y.y),r:2,fill:"black"},`${e.id+C}`))})]}):null}),$0=P`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .delete-button {
    visibility: hidden;
  }
`,H0=P`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .Integral-area {
    fill: #ff6f0057;
  }
  .delete-button {
    visibility: visible;
    cursor: pointer;
  }
`,z0=({zoneData:e,isVisible:t})=>{const{x:n,y:o,id:s,signals:i}=e,l=ct(s),r=ie([l.id],{type:ue.ZONE,extra:{id:l.id}}),{margin:a,width:u,height:d,xDomain:h,yDomain:m}=$(),g=Ee({margin:a,width:u,xDomain:h}),x=be({margin:a,height:d,yDomain:m}),{from:y=0,to:C=0}=n,{from:v=0,to:k=0}=o,[E,T]=c.exports.useState(!1);return c.exports.useEffect(()=>{T(!Tx(e))},[e]),w("g",{css:r.isActive||l.isActive?H0:$0,onMouseEnter:()=>{l.onMouseEnter(void 0),r.show()},onMouseLeave:()=>{l.onMouseLeave(void 0),r.hide()},children:[t.zones&&p("g",{transform:`translate(${g(C)},${x(v)})`,children:p("rect",{x:"0",width:g(y)-g(C),height:x(k)-x(v),className:"Integral-area",fill:"#0000000f",stroke:E?"#343a40":"darkgreen",strokeWidth:E?"0":"1"})}),i.map((M,I)=>p(O0,{signal:M,isVisible:t},`${s+I}`))]},s)};function V0({zones:e,display:t,displayerKey:n}){const[o,s]=c.exports.useState({zones:!0,signals:!0,peaks:!0});return c.exports.useEffect(()=>{de.on("onZonesVisibilityChange",({key:i})=>{s(l=>S(b({},l),{[i]:!l[i]}))})},[]),f("g",{clipPath:`url(#${n}clip-chart-2d)`,className:"2D-Zones",children:t.isVisible&&e.values.map(i=>f("g",{className:"zone",children:f(z0,{zoneData:i,isVisible:o})},i.id))})}const j0=c.exports.memo(V0),B0={zones:{},display:{}};function X0(){const{displayerKey:e}=$(),{zones:t,display:n}=ve(B0);return f(j0,{zones:t,display:n,displayerKey:e})}function Y0({spectra:e,width:t,height:n,margin:o,displayerKey:s}){return F("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-2d`,children:f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top})})}),f("rect",{width:t-o.left-o.right,height:n-o.top-o.bottom,x:o.left,y:o.top,stroke:"black",strokeWidth:"1",fill:"transparent"}),(e==null?void 0:e[0])&&f(k0,{data:e[0]}),(e==null?void 0:e[1])&&f(v0,{data:e[1]}),f(b0,{}),f(X0,{}),f(Rl,{axis:"X",show:!0}),f(Rl,{axis:"Y",show:!0}),F("g",{className:"container",style:{pointerEvents:"none"},children:[f(A0,{}),f(I0,{})]})]})}const G0=c.exports.memo(Y0);function Z0({spectra:e}){const{width:t,height:n,margin:o,displayerKey:s}=$();return f(G0,{spectra:e,width:t,height:n,margin:o,displayerKey:s})}function Ye(e,t,n="",o=""){return n+Er(e).format(t)+o}function Be(e){const t=ce(),n=V(t.current,"formatting.nucleusByKey",{ppm:"0.0",hz:"0.0"});return c.exports.useMemo(()=>{function o(s){return(i,l="ppm",r="",a="")=>r+Er(Number(i)).format(V(n,`${s.toLowerCase()}.${l}`,"0.0"))+a}if(!e)return()=>{};if(typeof e=="string")return o(e);if(Array.isArray(e))return e.map(s=>o(s));throw Error("nuclus must be string or array of string")},[e,n])}function Ml(e){e=String(e).trim();const t=e.lastIndexOf(".");return t>0?e.substr(t).split("").length-1:0}const Pl=P`
  display: flex;
  flex-firection: row;
  align-items: center;
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  background-color: #f7f7f7;
  height: 30px;
  padding: 6px;
  color: #8d0018;
  position: absolute;
  width: 100%;
  bottom: 0;
  div {
    margin: 0px 10px;
    display: inline-block;

    .label {
      font-size: 12px;
      color: #4d4d4d;
      font-weight: bold;
    }
    .value {
      font-weight: bold;
      font-size: 14px;
    }
    .unit {
      font-weight: bold;
      font-size: 10px;
    }
  }
`;function W0({layout:e,data1D:t}){const n=c.exports.useContext(ut),{startX:o,endX:s,startY:i,endY:l,step:r}=c.exports.useContext(wt),{margin:a,width:u,height:d,activeSpectrum:h,xDomain:m,yDomain:g,yDomains:x,activeTab:y,data:C,toolOptions:{selectedTool:v}}=$(),k=n&&ln(e,{startX:n.x,startY:n.y}),E=y.split(","),[T,M]=Be(E),I=c.exports.useMemo(()=>{if(!t||t.length===0)return Ee({width:u,margin:a,xDomain:m});if(v!==_.slicingTool.id)switch(k){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:u,margin:a,xDomain:m});case Z.LEFT_1D:return be({height:d,margin:a,yDomain:g});default:return null}return null},[t,d,a,v,k,u,m,g]),N=c.exports.useMemo(()=>{if(!t||t.length===0)return be({height:d,margin:a,yDomain:g});if(v!==_.slicingTool.id)switch(k){case Z.CENTER_2D:return be({height:d,margin:a,yDomain:g});case Z.TOP_1D:return t[0]?gn(x[t[0].id],a.top):null;case Z.LEFT_1D:return t[1]?gn(x[t[1].id],a.left):null;default:return null}return null},[t,d,a,v,k,g,x]);if(!h||!n||n.y<10||n.x<10||n.x>u-a.right||n.y>d-a.bottom)return p("div",{css:Pl});const A=J=>{let z=null;if(k===Z.TOP_1D?z=0:k===Z.LEFT_1D&&(z=1),z!=null&&I!=null){const j=Sn(t[z]),K=Ze(j.x,I.invert(J));return j.y[K]}return 1},D=(J=null)=>{if(I!=null)switch(k){case Z.CENTER_2D:case Z.TOP_1D:return I.invert(J||n.x);case Z.LEFT_1D:return I.invert(J||n.y);default:return 0}return 0},R=()=>{if(N!=null)switch(k){case Z.CENTER_2D:case Z.TOP_1D:return N.invert(n.y);case Z.LEFT_1D:return N.invert(n.x);default:return 0}return 0},O=()=>{switch(k){case Z.TOP_1D:return(A(o)/(A(s)||Number.MIN_VALUE)*100).toFixed(2);case Z.LEFT_1D:return(A(i)/(A(l)||Number.MIN_VALUE)*100).toFixed(2);default:return 0}},L=()=>{switch(k){case Z.TOP_1D:return(D(o)-D(s)).toPrecision(6);case Z.LEFT_1D:return(D(i)-D(l)).toPrecision(6);default:return 0}},H=(J,z,j)=>k===Z.CENTER_2D?w(c.exports.Fragment,{children:[J," ( ",p(qs,{mf:j})," )"]}):z,X=()=>{if(k===Z.CENTER_2D){const{maxX:J,maxY:z,minX:j,minY:K,z:ne}=C[h.index].data,Pe=(J-j)/(ne[0].length-1),ft=(z-K)/(ne.length-1),Kt=Math.floor((D()-j)/Pe),qt=Math.floor((R()-K)/ft);return Kt<0||Kt>=ne[0].length||qt<0||qt>=ne.length?0:ne[qt][Kt]}return 0};return w("div",{css:Pl,children:[w("div",{children:[w("span",{className:"label",children:[H("F2","X",E[0])," :"]}),p("span",{className:"value",children:T(D())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[w("span",{className:"label",children:[H("F1","Y",E[1])," :"]}),p("span",{className:"value",children:M(R())}),p("span",{className:"unit",children:"ppm"})]}),w("div",{children:[p("span",{className:"label",children:"Intensity :"}),p("span",{className:"value",children:X()})]}),r==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm :"}),p("span",{className:"value",children:L()})]}),r==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[O(),"%"]})]})]})}const U0={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-88px",fontWeight:"bold",pointerEvents:"none",overflow:"visible",userSelect:"none",width:"85px",textAlign:"right"};function K0({layout:e,data1D:t}){const n=c.exports.useContext(ut),{step:o}=c.exports.useContext(wt),{margin:s,width:i,height:l,xDomain:r,yDomain:a,yDomains:u,activeTab:d,activeSpectrum:h}=$(),m=n&&ln(e,{startX:n.x,startY:n.y}),g=d.split(","),[x,y]=Be(g),C=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return Ee({width:i,margin:s,xDomain:r});switch(m){case Z.TOP_1D:case Z.CENTER_2D:return Ee({width:i,margin:s,xDomain:r});case Z.LEFT_1D:return be({height:l,margin:s,yDomain:a});default:return null}},[h,t,l,s,m,i,r,a]),v=c.exports.useMemo(()=>{if(!h||!t||t.length===0)return be({height:l,margin:s,yDomain:a});switch(m){case Z.CENTER_2D:return be({height:l,margin:s,yDomain:a});case Z.TOP_1D:return t[0]?gn(u[t[0].id],s.top):null;case Z.LEFT_1D:return t[1]?gn(u[t[1].id],s.left):null;default:return null}},[h,t,l,s,m,a,u]);if(o==="brushing"||!n||n.y<s.top||n.x<s.left||n.x>i-s.right||n.y>l-s.bottom)return null;const k=(T=null)=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return C==null?void 0:C.invert(T||n.x);case Z.LEFT_1D:return C==null?void 0:C.invert(T||n.y);default:return 0}},E=()=>{switch(m){case Z.CENTER_2D:case Z.TOP_1D:return v==null?void 0:v.invert(n.y);case Z.LEFT_1D:return v==null?void 0:v.invert(n.x);default:return 0}};return F("div",{style:S(b({},U0),{transform:`translate(${n.x}px, ${n.y}px)`}),children:[f("span",{children:y(E())}),f("span",{style:{color:"gray"},children:","}),f("span",{style:{color:"red"},children:x(k())})]},"xLabelPointer")}function Vu(e,t,n=10){return qe(xt(t),[e-n,n])}function q0({margin:e=10,data:t}){const{width:n,margin:o,xDomain:s,displayerKey:i}=$(),l=po(Tn.XAxis),r=o.top,a=c.exports.useMemo(()=>{if(t){const{x:u,re:d}=t,h=Ee({margin:o,width:n,xDomain:s}),m=Vu(r,d,e),g=l({x:u,y:d}),x=new Zt;x.moveTo(h(g.x[0]),m(g.y[0]));for(let y=1;y<g.x.length;y++)x.lineTo(h(g.x[y]),m(g.y[y]));return x.toString()}else return},[t,r,e,o,n,s,l]);return!n||!r?null:F("svg",{viewBox:`0 0 ${n} ${r}`,width:n,height:r,children:[f("defs",{children:f("clipPath",{id:`${i}clip-top`,children:f("rect",{width:n-o.left-o.right,height:r,x:o.left,y:`${0}`})})}),F("g",{clipPath:`url(#${i}clip-top)`,children:[f("rect",{width:n-o.left-o.right,height:r,x:o.left,y:`${0}`,fillOpacity:"0"}),f("path",{className:"line",stroke:"red",fill:"none",d:a})]})]})}var J0=c.exports.memo(q0);function Q0({margin:e=10,data:t}){const{height:n,margin:o,yDomain:s,displayerKey:i}=$(),l=po(Tn.YAxis),r=o.left,a=c.exports.useMemo(()=>{if(t){const{x:d,re:h}=t,m=be({height:n,margin:o,yDomain:s}),g=Vu(r,h,e),x=l({x:d,y:h}),y=new Zt;y.moveTo(g(x.y[x.y.length-1]),m(x.x.length-1));for(let C=x.x.length-2;C>=0;C--)y.lineTo(g(x.y[C]),m(x.x[C]));return y.toString()}else return},[t,r,o,e,n,l,s]),u=n-o.bottom-o.top;return!u||!r?null:F("svg",{viewBox:`0 0 ${r} ${u+o.top}`,width:r,height:u+o.top,children:[f("defs",{children:f("clipPath",{id:`${i}clip-left`,children:f("rect",{width:r,height:u,x:"0",y:o.top})})}),f("g",{clipPath:`url(#${i}clip-left)`,children:f("path",{className:"line",stroke:"red",fill:"none",d:a})})]})}var ev=c.exports.memo(Q0);function tv(){const{width:e,height:t,margin:n,activeSpectrum:o,data:s,xDomain:i,yDomain:l}=$(),r=gf(),a=c.exports.useMemo(()=>{if(r&&o&&o.id){const{x:u,y:d}=r,h=Ee({margin:n,width:e,xDomain:i}),m=be({margin:n,height:t,yDomain:l}),g=fg(s[o.index],{x:h.invert(u),y:m.invert(d)});return F("svg",{viewBox:`0 0 ${e} ${t}`,width:e,height:t,style:{position:"absolute",backgroundColor:"rgba(255,255,255,0.8)"},children:[(g==null?void 0:g.horizontal)&&f(J0,{data:g.horizontal.data}),(g==null?void 0:g.vertical)&&f(ev,{data:g.vertical.data})]})}return null},[r,o,n,e,i,t,l,s]);return r?a:null}function nv({emptyText:e=void 0}){const t=$(),{toolOptions:{selectedTool:n},isLoading:o,data:s,margin:i,tabActiveSpectrum:l,activeTab:r}=t,a=Y(),{info:u}=ve({info:{}}),d=u.isFt||!("isFt"in u),h=c.exports.useMemo(()=>r.split(",").reduce((k,E)=>{var T,M;if((T=l[E])==null?void 0:T.id){const I=(M=l[E])==null?void 0:M.id,N=s.find(A=>A.id===I&&!A.info.isFid);N&&k.push(N)}else k.push(null);return k},[]),[r,s,l]),m=Dx(t),g=c.exports.useCallback(v=>{if(ln(m,v)&&!v.altKey)if(v.shiftKey)switch(n){case _.zone2D.id:a(b({type:Fc},v));break}else switch(n){default:if(n!=null)return a(S(b({type:cs},v),{trackID:ln(m,v)}))}},[n,a,m]),x=c.exports.useCallback(v=>{const{x:k,y:E}=v,T=ln(m,{startX:k,startY:E});T&&a({type:bn,trackID:T})},[m,a]),y=v=>{const{x:k,y:E}=v,T=ln(m,{startX:k,startY:E});T&&a(T==="CENTER_2D"?b({type:_c},v):{type:as,event:v,trackID:T})},C=c.exports.useCallback(v=>{},[n]);return d?f(Js,{children:({width:v,height:k})=>F(ju,{width:v,height:k,children:[f(Nu,{isLoading:o,emptyText:e}),s&&s.length>0&&f(Yr,{onBrush:g,onDoubleClick:x,onClick:C,onZoom:y,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:F(Gr,{style:{width:"100%",height:"100%",position:"absolute"},children:[n&&n===_.slicingTool.id&&f(tv,{}),f(Mu,{}),h&&f(K0,{data1D:h,layout:m}),f(Eo,{brushType:De.XY,dimensionBorder:m.CENTER_2D}),F(et,{children:[(h==null?void 0:h[0])&&f(Eo,{brushType:De.X,dimensionBorder:m.TOP_1D,height:i.top}),(h==null?void 0:h[1])&&f(Eo,{brushType:De.Y,dimensionBorder:m.LEFT_1D,width:i.left})]}),h&&f(W0,{data1D:h,layout:m}),f(Z0,{spectra:h})]})})]})}):f(Du,{emptyText:"Currently FID can not be displayed for 2D spectra",canOpenLoader:!1})}function ju(e){const t=Y(),{width:n,height:o,children:s}=e;return c.exports.useEffect(()=>{t({type:ki,width:n,height:o})},[n,o,t]),s}const ov="SET_X_SCALE",sv="SET_Y_SCALE",Bu="SET_SCALE",Xu={scaleX:null,scaleY:null};function iv(e,t){switch(t.type){case ov:e.scaleX=(n=null)=>Vt(t,n);break;case sv:e.scaleY=(n=null)=>Fo(t,n);break;case Bu:{e.scaleX=(n=null)=>Vt(t.payload,n),e.scaleY=(n=null)=>Fo(t.payload,n);break}default:return e}}const lv=Us(iv),Yu=c.exports.createContext(Xu),rv=Yu.Provider;function Vi(){return c.exports.useContext(Yu)}function fe(){const e=Vi();if(!e.scaleX||!e.scaleY)throw new Error("scale cannot be null");return e}const te={TOP_LEFT:"top left",TOP_CENTER:"top center",TOP_RIGHT:"top right",MIDDLE_LEFT:"middle left",MIDDLE:"middle",MIDDLE_RIGHT:"middle right",BOTTOM_LEFT:"bottom left",BOTTOM_CENTER:"bottom center",BOTTOM_RIGHT:"bottom right"},_n={INFO:"info",SUCCESS:"success",ERROR:"error",PROGRESS_INDICATOR:"progress_indicator"},Je={FADE:"fade",SCALE:"scale",SLIDE_RIGHT:"slide_right",SLIDE_LEFT:"slide_left",SLIDE_TOP:"slide_top",SLIDE_BOTTOM:"slide_bottom"},Gu=c.exports.createContext({}),av=Gu.Provider;function le(){return c.exports.useContext(Gu)}const Ys=250,cv={[Je.FADE]:{transition:`opacity ${Ys}ms ease`,opacity:0},[Je.SCALE]:{transform:"scale(1)",transition:`all ${Ys}ms ease-in-out`}},uv={[Je.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Je.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(1)"}}};function Zu(s){var i=s,{children:e,type:t,transitionStyles:n=uv}=i,o=G(i,["children","type","transitionStyles"]);const l=c.exports.useRef(null);return f(mp,S(b({nodeRef:l},o),{timeout:Ys,children:r=>f("div",{ref:l,style:b(b(b({},cv[t]),n[t][r]),n.default),children:e})}))}function dv(e,t){const n=b({position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"none",overflow:"visible"},t?{top:`${t.top}px`,left:`${t.left}px`,height:`${t.height}px`,width:`${t.width}px`}:{width:"100%",height:"100%"});switch(e){case te.TOP_LEFT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-start"});case te.TOP_CENTER:return S(b({},n),{justifyContent:"flex-start"});case te.TOP_RIGHT:return S(b({},n),{justifyContent:"flex-start",alignItems:"flex-end"});case te.MIDDLE_LEFT:return S(b({},n),{justifyContent:"center",alignItems:"flex-start"});case te.MIDDLE:return S(b({},n),{justifyContent:"center"});case te.MIDDLE_RIGHT:return S(b({},n),{justifyContent:"center",alignItems:"flex-end"});case te.BOTTOM_LEFT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-start"});case te.BOTTOM_CENTER:return S(b({},n),{justifyContent:"flex-end"});case te.BOTTOM_RIGHT:return S(b({},n),{justifyContent:"flex-end",alignItems:"flex-end"});default:return n}}function Wu(s){var i=s,{children:e,options:{position:t},containerStyle:n}=i,o=G(i,["children","options","containerStyle"]);const l=c.exports.useMemo(()=>dv(t,n),[t,n]);return e.length>0&&f("div",S(b({style:l},o),{children:e}))}function pv(e,t){return e.reduce((n,o)=>{const s=t(o);return n[s]||(n[s]=[]),n[s].push(o),n},{})}const hv=P`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  :after {
    content: ' ';
    display: block;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    border-radius: 50%;
    border: 4px solid;
    border-color: #fff transparent #fff transparent;
    animation: ring-animation 1s linear infinite;
  }
  @keyframes ring-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function fv(){return p("div",{css:hv})}function mv(a){var u=a,{children:e,wrapperRef:t=null,offset:n="5px",position:o=te.BOTTOM_CENTER,timeout:s=3e3,type:i,transition:l=Je.FADE}=u,r=G(u,["children","wrapperRef","offset","position","timeout","type","transition"]);const d=c.exports.useRef(null),h=c.exports.useRef([]),[m,g]=c.exports.useState([]);c.exports.useEffect(()=>{d.current=document.createElement("div");const A=d.current,D=h.current;return t&&t.appendChild(A),()=>{A&&t&&(D.forEach(clearTimeout),t.removeChild(A))}},[t]);const x=c.exports.useCallback(A=>{g(D=>{const R=D.length,O=D.filter(L=>L.id!==A.id);return R>O.length&&A.options.onClose&&A.options.onClose(),O})},[]),y=c.exports.useCallback((A="",D={})=>{const R=Math.random().toString(36).substr(2,9),O=b({position:D.position||o,timeout:s,type:i,backgroundColor:"black",color:"white"},D),L={id:R,message:A,options:O};if(L.close=()=>x(L),L.options.timeout){const H=setTimeout(()=>{x(L),h.current.splice(h.current.indexOf(H),1)},L.options.timeout);h.current.push(H)}return g(H=>H.concat(L)),L.options.onOpen&&L.options.onOpen(),L},[o,x,s,i]),C=c.exports.useCallback((A="",D={})=>(D.type=_n.SUCCESS,D=b({backgroundColor:"#28ba62",color:"white"},D),y(A,D)),[y]),v=c.exports.useCallback((A="",D={})=>(D.type=_n.ERROR,D=b({backgroundColor:"#cf3c4f",color:"white"},D),y(A,D)),[y]),k=c.exports.useCallback((A="",D={})=>(D.type=_n.INFO,D.color="#28ba62",y(A,D)),[y]),E=c.exports.useCallback((A="Process in progress",D={})=>(D.type=_n.PROGRESS_INDICATOR,D.timeout=0,D.backgroundColor="#232323",new Promise(R=>{const O=y(A,D);setTimeout(()=>{R(()=>x(O))},500)})),[x,y]),T=c.exports.useCallback(A=>{x(A)},[x]),M=pv(m,A=>A.options.position),I=c.exports.useMemo(()=>t?t.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[t]),N=c.exports.useMemo(()=>({show:y,success:C,error:v,info:k,showLoading:E}),[y,C,v,k,E]);return F(av,{value:N,children:[e,d.current&&Ko.exports.createPortal(f(c.exports.Fragment,{children:Object.keys(te).map(A=>{const D=te[A];return f(Ar,S(b({appear:!0,options:{position:D,zIndex:999999},component:Wu,containerStyle:I},r),{children:M[D]?M[D].map(R=>f(Zu,{type:l,children:F("div",{style:{margin:n,padding:"25px",borderRadius:"10px",pointerEvents:"all",backgroundColor:R.options.backgroundColor,color:R.options.color,minHeight:"60px",position:"relative"},children:[f("button",{style:{position:"absolute",right:"5px",top:"5px",border:"none",backgroundColor:"transparent",color:"white"},type:"button",onClick:()=>T(R),children:f(Qs,{})}),f("span",{children:R.message}),R.options.type===_n.PROGRESS_INDICATOR&&f(fv,{})]},R.id)},R.id)):null}),D)})}),d.current)]})}var gv=c.exports.memo(mv);const Uu=c.exports.createContext({}),xv=Uu.Provider;function he(){return c.exports.useContext(Uu)}const bv=P`
  display: block;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  border-top: 10px solid #ed0000;

  .message {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: #af0000;
    text-align: center;
    padding: 25px;
    display: block;
  }
  .buttons-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    padding: 5px;
    border-top: 1px solid #efefef;

    button:last-of-type {
      border-radius: 5px 0 0 5px;
    }
    button:first-of-type {
      border-radius: 0px 5px 5px 0px;
      border-width: 1px;
    }
    button {
      border-color: #dcdcdc;
      border-width: 1px 0px 1px 1px;
      background-color: white;
      display: inline-block;
      cursor: pointer;
      color: #363636;
      font-weight: bold;
      padding: 6px 24px;
      text-decoration: none;
    }
    button:hover {
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #f6f6f6),
        color-stop(1, #ffffff)
      );
      background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
      background-color: #f6f6f6;
    }
  }
`;function yv({style:e={},buttons:t=[],onClose:n,message:o}){const s=c.exports.useCallback((i,{handler:l=()=>null})=>{l(i),n()},[n]);return w("div",{style:e,css:bv,children:[p("p",{className:"message",children:o}),p("div",{className:"buttons-container",children:t.map(i=>p("button",{type:"button",onClick:l=>s(l,i),style:i.style&&i.style,children:i.text},i.text))})]})}const vv=({modal:e,onClose:t,onLayout:n})=>{const o=c.exports.useRef(),[s,{width:i,height:l}]=gp(()=>f("div",{style:{height:"100%",display:"block",overflow:"auto"},children:c.exports.cloneElement(e.component,S(b({},e.options),{onClose:t,style:{cursor:"default"}}))}));return c.exports.useEffect(()=>{isFinite(l)&&isFinite(i)&&!o.current&&(o.current={width:i,height:l},n({modal:e,layout:{width:i,height:l}}))},[i,l,o,n,e]),s},Cv={[Je.FADE]:{entering:{opacity:0},entered:{opacity:1}},[Je.SCALE]:{entering:{transform:"scale(0)"},entered:{transform:"scale(1)"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}};function kv({children:e,style:t=void 0,offset:n="0px",position:o=te.MIDDLE,transition:s=Je.SCALE,wrapperRef:i=null}){const l=c.exports.useRef(),r=c.exports.useRef(),[a,u]=c.exports.useState();c.exports.useEffect(()=>{l.current=document.createElement("div");const k=l.current;return i&&i.appendChild(k),()=>{k&&i&&i.removeChild(k)}},[i]);const d=c.exports.useCallback(function(){u(null)},[u]),h=c.exports.useMemo(()=>i?i.getBoundingClientRect():{top:0,left:0,width:window.innerWidth,height:window.innerHeight},[i]),m=c.exports.useCallback((k,E={})=>{const T={component:k,options:b({isBackgroundBlur:!0,enableResizing:!1},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]),g=c.exports.useCallback((k,E={enableResizing:!1})=>{const T={component:p(yv,b({},k)),options:b({isBackgroundBlur:!0},E)};return T.close=d,u(T),T.options.onOpen&&T.options.onOpen(),T},[d]);c.exports.useEffect(()=>{function k(E){["Escape","Esc"].includes(E.key)&&d()}return document.addEventListener("keydown",k,!1),()=>document.removeEventListener("keydown",k,!1)},[d]);const x=P`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    pointer-events: all;
    .handle {
      cursor: move;
    }

    .rnd-container {
      box-sizing: initial;
      background-color: #fff;
      box-shadow: 0 0 0 0, 0 8px 16px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
    }
  `,y=(a==null?void 0:a.options.isBackgroundBlur)?{backgroundColor:"rgba(255,255,255,0.8)"}:{pointerEvents:"none"},C=c.exports.useMemo(()=>({show:m,close:d,showConfirmDialog:g}),[m,d,g]),v=c.exports.useCallback(({modal:k,layout:E})=>{const T=k.options.width?k.options.width:E.width>h.width?h.width:E.width,M=k.options.height?k.options.height:E.height>h.height?h.height:E.height;r.current.updateSize({width:T,height:M})},[h.height,h.width]);return w(xv,{value:C,children:[e,l.current&&Ko.exports.createPortal(p(c.exports.Fragment,{children:a?p("div",{css:x,style:b({},y),children:p(Ar,{appear:!0,options:{position:a.options.position?a.options.position:o},containerStyle:h,component:Wu,children:p(Zu,{type:a.options.transition?a.options.transition:s,transitionStyles:S(b({},Cv),{default:{width:a.options.width?`${a.options.width}px`:"auto"},height:a.options.height?`${a.options.height}px`:"auto"}),children:p(xp,{maxWidth:h.width,maxHeight:h.height,ref:r,default:{width:a.options.width?a.options.width:"auto",height:a.options.height?a.options.height:"auto",x:0,y:0},className:"rnd-container",style:S(b({},t),{margin:n,position:"static",pointerEvents:"all",userSelect:"none"}),enableResizing:a.options.enableResizing,dragHandleClassName:"handle",enableUserSelectHack:!1,children:p(vv,{modal:a,onClose:d,onLayout:v})})},a.id)},te[a.options.transition?a.options.transition:s])}):null}),l.current)]})}const Ku=c.exports.createContext({}),Sv=Ku.Provider;function ji(){return c.exports.useContext(Ku)}const wv={popup:{position:"fixed",top:0,left:0,pointerEvents:"none",backgroundColor:"gray",padding:"3px",borderRadius:"2px",color:"white",whiteSpace:"nowrap",fontSize:"10px",fontFamily:"tahoma",textShadow:"none"}};function Ev({style:e={popup:{},mainContainer:{}},className:t="",popupPlacement:n="right",children:o,title:s,offset:i={x:0,y:0}}){const l=c.exports.useRef(null),r=c.exports.useRef(null),[a,u]=c.exports.useState({x:0,y:0}),[d,h]=c.exports.useState(!1),{elementsWraperRef:m}=ji();c.exports.useLayoutEffect(()=>{const y=()=>{let C,v;if(l.current===null||r.current===null)return null;const k=l.current.getBoundingClientRect(),E=r.current.getBoundingClientRect();switch(n){case"left":C=-E.width,v=k.height/2-k.height/2*E.height/k.height;break;case"right":C=k.width,v=k.height/2-k.height/2*E.height/k.height;break;case"top":C=k.width/2-k.width/2*E.width/k.width,v=-k.height;break;case"bottom":C=k.width/2-k.width/2*E.width/k.width,v=k.height;break;default:C=0,v=0;break}return{x:C+k.x,y:v+k.y}};if(d){const C=y();C&&u(C)}},[n,d]);const g=c.exports.useCallback(()=>{h(!0)},[]),x=c.exports.useCallback(()=>{h(!1)},[]);return F(c.exports.Fragment,{children:[f("div",{style:b({position:"relative",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},e.mainContainer),ref:l,onMouseOver:g,onMouseOut:x,children:o}),d&&Ko.exports.createPortal(f("div",{ref:r,style:b(S(b({},wv.popup),{transform:`translate(${a.x+i.x}px,${a.y+i.y}px)`,zIndex:999999999}),e.popup),className:t,children:f("span",{style:{pointerEvents:"none"},children:s})}),m)]})}var we=c.exports.memo(Ev);const _l={button:{backgroundColor:"transparent",border:"none",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},svg:{fill:"#ca0000",fontSize:"16px"}};function Av(e){const{onClick:t=()=>null,popupTitle:n="Close",popupPlacement:o="left",className:s=""}=e;return f("div",{className:s,children:f(we,{title:n,popupPlacement:o,children:f("button",{style:_l.button,type:"button",onClick:t,children:f(Qs,{style:_l.svg})})})})}var me=c.exports.memo(Av);const Tv=P`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 400px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    overflow-y: auto;
    background-color: white;
    padding-top: 10px;

    .row {
      outline: none;
      display: flex !important;
      flex-direction: row;
      margin: 0;
      div {
        flex: 4;
      }
      .multiplicity {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .row:nth-child(odd) {
      background: #fafafa;
    }
  }
`,Dv=P`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  width: 900px;
  height: 400px;

  svg {
    animation-duration: 0.5s;
    animation-name: spinAnimation;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: inherit;
    animation-timing-function: linear;
    animation-duration: 1s;
    width: 100px;
    height: 100px;
  }

  @keyframes spinAnimation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;function Rv({data:e,activeSpectrum:t,scaleX:n,startX:o,endX:s,onClose:i}){var m;const[l,r]=c.exports.useState(),[a,u]=c.exports.useState(!1),[d,h]=c.exports.useState(!1);return c.exports.useEffect(()=>{setTimeout(()=>{u(!0)},400)},[]),c.exports.useEffect(()=>{if(t&&o&&s&&a){const g=e[t.index];if(zs(g))throw new Error("unreachable");const{data:{x,re:y},info:C}=g,v=n().invert(o),k=n().invert(s),{fromIndex:E,toIndex:T}=qn(x,{from:v,to:k}),M={x:x.slice(E,T),y:y.slice(E,T)};try{const I=xr(M,{frequency:C.originFrequency,takeBestPartMultiplet:!0,symmetrizeEachStep:!0,debug:!0});h(!0),r(I)}catch(I){console.log(I)}}},[o,s,e,n,t,a]),d?w("div",{css:Tv,children:[w("div",{className:"header handle",children:[p("span",{children:"Analyse Multiplet"}),p(me,{onClick:i})]}),p("div",{className:"container",children:(m=l==null?void 0:l.debug)==null?void 0:m.steps.map((g,x)=>{var y,C;return w("div",{className:"row",children:[w(pn,{width:400,height:200,svgStyle:{overflow:"visible"},seriesViewportStyle:{stroke:"black"},children:[p(Ke,{data:rl(g.multiplet)}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]}),p("div",{className:"multiplicity",children:p("p",{children:l.js[x]?`${(y=l.js[x])==null?void 0:y.multiplicity}: ${(C=l.js[x])==null?void 0:C.coupling.toFixed(3)} Hz`:""})}),w(pn,{width:400,height:200,seriesViewportStyle:{stroke:"black"},children:[p(Ke,{data:rl(g.errorFunction),lineStyle:{strokeWidth:1}}),p($e,{id:"y",position:"left",tickPosition:"inner",displayPrimaryGridLines:!0,hiddenTicks:!0,paddingStart:.1,paddingEnd:.1}),p($e,{id:"x",position:"bottom",tickPosition:"inner",displayPrimaryGridLines:!0})]})]},x)})})]}):w("div",{css:Dv,children:[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 841.9 595.3",children:w("g",{fill:"#61DAFB",children:[p("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),p("path",{d:"M520.5 78.1z"})]})}),p("p",{children:"Analyse Multiplet in progress. Please wait ..."})]})}function qu(){const{data:e,activeTab:t}=$();return c.exports.useMemo(()=>e?e.filter(n=>t===At(n.info.nucleus))||[]:[],[t,e])}function Ju(e){const{activeSpectrum:t}=$(),n=ce();return c.exports.useMemo(()=>{const o=t===null?!0:e===t.id,s=o?1:V(n.current,"controllers.dimmedSpectraTransparency",.1);return{isActive:o,opacity:s}},[t,e,n])}function Iv({zone:e,color:t,vAlign:n,spectrumID:o}){const{scaleX:s,scaleY:i}=fe(),l=ie([e.id],{type:ue.EXCLUSION_ZONE,extra:{id:e.id,spectrumID:o}}),{opacity:r}=Ju(o);return f("g",{transform:`translate(${s()(e.to)},0)`,children:f("rect",b({x:"0",transform:`translate(0,${i()(0)-(n+5)})`,width:`${s()(e.from)-s()(e.to)}`,height:"10px",style:{fill:l.isActive?"#ff6f0057":t,opacity:r}},l.onHover))},e.id)}var Nv=c.exports.memo(Iv);function hs(e,t){const{index:n=1,align:o="stack"}=t||{index:1,align:"stack"};return e.align===o?n*e.verticalShift:0}function Mv({displayerKey:e,xDomains:t,spectra:n,verticalAlign:o}){return f("g",{className:"spectrum-exclusion-zones-group",clipPath:`url(#${e}clip-chart-1d)`,children:n.filter(s=>s.display.isVisible===!0&&t[s.id]).map((s,i)=>Fv(s).map(l=>f(Nv,{spectrumID:s.id,vAlign:hs(o,{index:i}),zone:l,color:s.display.color},l.id)))})}const Pv=c.exports.memo(Mv);function _v(){const{displayerKey:e,xDomains:t,displayerMode:n,verticalAlign:o}=$(),s=qu();return n!==B.DM_1D?null:f(Pv,{spectra:s,displayerKey:e,xDomains:t,verticalAlign:o})}function Fv(e){var t;return((t=e.filters.find(n=>n.name===to&&n.flag))==null?void 0:t.value)||[]}function Lv(){const{width:e,margin:t,xDomains:n,xDomain:o,mode:s}=$();return c.exports.useMemo(()=>Vt({width:e,margin:t,xDomains:n,xDomain:o,mode:s}),[t,s,e,o,n])}function Ov(){const{height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}=$();return c.exports.useMemo(()=>nx({height:e,margin:t,verticalAlign:n,activeSpectrum:o,integralsYDomains:s}),[o,e,s,t,n])}function Qu(e){const{data:t,activeSpectrum:n}=$(),o=Lv(),s=Ov(),i=c.exports.useMemo(()=>{if(n){const{x:r,re:a}=t[n==null?void 0:n.index].data,{from:u,to:d}=e;return bp({x:r,y:a},{from:u,to:d,reverse:!0})}return{x:[],y:[]}},[n,t,e]);return c.exports.useMemo(()=>{if(i){const r=wr(i,{nbPoints:200,optimize:!0}),a=new Zt;a.moveTo(o(r.x[0]),s(r.y[0]));for(let u=1;u<r.x.length;u++)a.lineTo(o(r.x[u]),s(r.y[u]));return a.toString()}else return""},[i,o,s])}const _t={showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",color:"#000000",strokeWidth:1},$v={showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00"},Bi=e=>({showFrom:!1,fromFormat:"0.00",showTo:!1,toFormat:"0.00",showAbsolute:!1,absoluteFormat:"0.00",showRelative:!0,relativeFormat:"0.00",jGraphTolerance:e==="1H"?.2:e==="13C"?2:0}),ed={showPeakNumber:!0,peakNumberFormat:"0",showPeakIndex:!1,peakIndexFormat:"0.00",showDeltaPPM:!0,deltaPPMFormat:"0.00",showDeltaHz:!1,deltaHzFormat:"0.00",showPeakWidth:!1,peakWidthFormat:"00.0000",showIntensity:!0,intensityFormat:"0.00"},td={showSmiles:!0,showSolvent:!1,showNames:!0,showRange:!1,showDelta:!0,showAssignment:!1,showCoupling:!0,showMultiplicity:!0};function Xi({from:e,to:t,onDrag:n=()=>null,onDrop:o}){const{height:s,margin:i,mode:l}=$(),[r,a]=c.exports.useState(!1),[u,d]=c.exports.useState(!1),[h,m]=c.exports.useState(!0),g=c.exports.useRef(null),x=c.exports.useRef(null),{scaleX:y}=fe(),C=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),a(!0)},[]),v=c.exports.useCallback(D=>{n({from:y().invert(D.layerX)})},[n,y]),k=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),a(!1);const R=l==="RTL"?[y().invert(D.layerX),t]:[t,y().invert(D.layerX)];let O;R[1]>R[0]?O={from:R[0],to:R[1]}:O={from:e,to:t},o(O)},[e,l,o,y,t]),E=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),d(!0)},[]),T=c.exports.useCallback(D=>{n({to:y().invert(D.layerX)})},[n,y]),M=c.exports.useCallback(D=>{D.preventDefault(),D.stopPropagation(),d(!1);const R=l==="RTL"?[e,y().invert(D.layerX)]:[y().invert(D.layerX),e];let O;R[1]>R[0]?O={from:R[0],to:R[1]}:O={from:e,to:t},o(O)},[e,l,o,y,t]),I=c.exports.useCallback(({shiftKey:D})=>{D&&m(!1)},[]),N=c.exports.useCallback(()=>{m(!0)},[]),A=c.exports.useCallback(({target:D,shiftKey:R})=>{R?D.style.cursor="crosshair":D.style.cursor="ew-resize"},[]);return w(c.exports.Fragment,{children:[p(al,{axis:"x",defaultPosition:{x:y()(e),y:0},position:{x:y()(e),y:0},scale:1,handle:".handle",onStart:C,onDrag:v,onStop:k,nodeRef:g,children:p("rect",{ref:g,className:h?"handle":"",width:r?1:6,fill:"red",height:s+i.top,style:{fillOpacity:r?1:0},onMouseDownCapture:I,onMouseUpCapture:N,onMouseEnter:A})}),p(al,{axis:"x",defaultPosition:{x:y()(t),y:0},position:{x:y()(t),y:0},handle:".handle",scale:1,onStart:E,onDrag:T,onStop:M,nodeRef:x,children:p("rect",{ref:x,className:h?"handle":"",width:u?1:6,fill:"red",height:s+i.top,style:{fillOpacity:u?1:0},onMouseDownCapture:I,onMouseUpCapture:N,onMouseEnter:A})})]})}const Hv=P`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .highlight {
    fill: transparent;
  }
  .target {
    visibility: hidden;
  }
`,zv=P`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  fill: #ff6f0057;

  .target {
    visibility: visible;
  }
`;function Vv({integralData:e}){const{height:t,margin:n}=$(),{scaleX:o}=fe(),s=Y(),[{id:i,integral:l,from:r,to:a},u]=c.exports.useState(e),d=ie([i],{type:ue.INTEGRAL,extra:{id:i}});c.exports.useEffect(()=>{u(e)},[e]);const h=c.exports.useCallback(v=>{s({type:dc,payload:{data:b(b({},e),v)}})},[s,e]),m=c.exports.useCallback(()=>{d.show()},[d]),g=c.exports.useCallback(()=>{d.hide()},[d]),x=c.exports.useCallback(v=>{u(k=>b(b({},k),v))},[]),y=r?o()(r):0,C=a?o()(a):0;return w("g",{css:d.isActive?zv:Hv,onMouseEnter:m,onMouseLeave:g,children:[p("rect",{"data-no-export":"true",x:`${C}`,y:"0",width:`${y-C}`,height:t-n.bottom,className:"highlight"}),p("text",{x:C,y:t-n.bottom+30,fill:"black",style:{fontSize:"12px",fontWeight:"bold"},children:l!==void 0?l.toFixed(2):""}),p(Xi,{from:e.from,to:e.to,onDrag:x,onDrop:h,"data-no-export":"true"})]})}function jv({integral:e,isActive:t}){const n=ce(),o=Qu(e),s=c.exports.useMemo(()=>{let{color:i=_t.color,strokeWidth:l=_t.strokeWidth}=pt(n.current,"formatting.panels.integrals")||{};return{color:i,strokeWidth:l}},[n]);return F("g",{children:[f("path",{className:"line",stroke:s.color,strokeWidth:s.strokeWidth,fill:"none",style:{opacity:t?1:.2},d:o}),f(Vv,{integralData:e})]})}function Bv(){const{xDomains:e,activeSpectrum:t,data:n,displayerKey:o}=$(),s=c.exports.useMemo(()=>{const i=l=>t===null?!0:l===t.id;return f("g",{className:"integrals",children:(n==null?void 0:n[0])&&n.filter(l=>l.display.isVisible===!0&&e[l.id]).filter(oo).map(l=>l.integrals.values.map(r=>f(jv,{integral:r,isActive:i(l.id)},r.id)))})},[t,n,e]);return f("g",{clipPath:`url(#${o}clip-chart-1d)`,children:s})}function Xv({data:e,id:t,display:n,index:o}){const{verticalAlign:s}=$(),{scaleX:i,scaleY:l}=fe(),r=po(Tn.XAxis),{opacity:a}=Ju(t),u=c.exports.useMemo(()=>hs(s,{index:o}),[o,s]),d=c.exports.useMemo(()=>{const h=i(),m=l(t),g=new Zt;if((e==null?void 0:e.x)&&(e==null?void 0:e.y)&&h(0)){const x=r(e);g.moveTo(h(x.x[0]),m(x.y[0]));for(let y=1;y<x.x.length;y++)g.lineTo(h(x.x[y]),m(x.y[y]));return g.toString()}else return""},[i,l,t,e,r]);return f("path",{className:"line","data-test-id":"spectrum-line",stroke:n.color,fill:"none",style:{opacity:a},d,transform:`translate(0,-${u})`},t)}function Yv(){const{data:e,tempData:t,displayerKey:n,xDomains:o}=$(),s=t||e;return f("g",{clipPath:`url(#${n}clip-chart-1d)`,className:"spectrums",children:s==null?void 0:s.filter(i=>i.display.isVisible===!0&&o[i.id]).map((i,l)=>f(Xv,S(b({},i),{data:Sn(i),index:l}),i.id))})}const Gv=P`
  input {
    -webkit-user-select: text; /* Safari 3.1+ */
    -moz-user-select: text; /* Firefox 2+ */
    -ms-user-select: text; /* IE 10+ */
    user-select: text; /* Standard syntax */
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .notification-input-normal {
    opacity: 1;
    left: 4px;
    position: fixed;
    font-size: 10px;
    outline: none;
    background-color: transparent;
  }

  .notification-input-normal input:focus {
    outline: none;
    background-color: white;
  }

  .input-over {
    background-color: white;
    outline: none;
  }
`;function Zv({id:e,x:t,y:n,sign:o,value:s,color:i,isActive:l,nucleus:r}){const a=c.exports.useRef(null),[u,d]=c.exports.useState(!1),[h,m]=c.exports.useState(s),[g,x]=c.exports.useState({width:0,height:0}),y=Be(r),C=ie([e],{type:ue.PEAK,extra:{id:e}}),v=Y(),k=c.exports.useCallback(R=>v({type:vi,shiftValue:R.shiftValue}),[v]);c.exports.useLayoutEffect(()=>{var O;const R=(O=a.current)==null?void 0:O.getBBox();x({width:(R==null?void 0:R.width)||0,height:(R==null?void 0:R.height)||0})},[u]),c.exports.useEffect(()=>{m(s)},[s]);const E=c.exports.useCallback(R=>{if(R.key==="Enter"){const O=R.currentTarget.valueAsNumber;if(!isNaN(O)){const L=O-s;k({id:e,value:O,oldValue:s,shiftValue:L}),R.currentTarget.blur(),d(!1)}}else R.key==="Escape"&&(m(s),R.currentTarget.blur(),d(!1))},[s,k,e]),T=c.exports.useCallback(R=>{m(R.target.value)},[]),M=c.exports.useCallback(R=>(R.stopPropagation(),d(!0),!1),[]),I=c.exports.useCallback(()=>{C.show()},[C]),N=c.exports.useCallback(()=>{C.hide()},[C]),A=c.exports.useMemo(()=>u?s:y(s),[y,u,s]),D=c.exports.useMemo(()=>u?h:y(h),[h,y,u]);return w("g",{css:Gv,id:e,style:{outline:"none"},transform:`translate(${t}, ${n})`,onMouseEnter:I,onMouseLeave:N,children:[p("line",{x1:"0",x2:"0",y1:o===-1?10:0,y2:o===-1?28:-18,stroke:i,strokeWidth:C.isActive?"7px":"1px"}),p("text",{ref:a,className:"peaks-text",x:"0",y:o===-1?28:-12,dy:"0",dx:"0.35em",fill:"transparent",fontSize:"10px",fontWeight:"100",style:{position:"absolute"},children:A}),p("foreignObject",{x:"0",y:o===-1?16:-22,dy:"0.1em",dx:"0.35em",width:g.width+20,height:"40px","data-no-export":"true",children:p("div",{style:{width:g.width+20,height:"100%",paddingRight:5},children:p("input",{onClick:M,className:u?"input-over":"notification-input-normal",style:{width:"inherit",border:u?`1px solid ${i}`:"0",opacity:l?1:.2,userSelect:"none",color:i},value:D,onKeyDown:E,onChange:T,type:"number",disabled:!l})})})]})}function Wv(){const{data:e,activeSpectrum:t,verticalAlign:n,displayerKey:o,xDomains:s}=$(),{scaleX:i,scaleY:l}=fe(),r=c.exports.useMemo(()=>{const a=d=>{const h=e.findIndex(m=>m.id===d);return hs(n,{index:h})};return e&&(()=>{const d=[...e];return t?d.sort((h,m)=>h.id===t.id?1:m.id===t.id?-1:0):d})().filter(d=>d.display.isVisible===!0&&s[d.id]).filter(oo).map(d=>{var h;return((h=d.peaks)==null?void 0:h.values)&&d.display.isPeaksMarkersVisible&&f("g",{transform:`translate(0,-${a(d.id)})`,children:d.peaks.values.map(({x:m,y:g,id:x})=>f(Zv,{x:i()(m),y:l(d.id)(g)-5,sign:Math.sign(g),id:x,value:m,color:"#730000",nucleus:d.info.nucleus,isActive:t==null?!1:t.id===d.id},x))},d.id)})},[e,n,t,s,i,l]);return f("g",{className:"peaks",clipPath:`url(#${o}clip-chart-1d)`,children:r})}const Uv={info:{originFrequency:400}};function Kv(){var x;const{displayerKey:e,verticalAlign:t,height:n,margin:o}=$(),{info:s}=ve(Uv),{highlight:i}=Dn(),{scaleX:l}=fe();if(((x=i.sourceData)==null?void 0:x.type)!==ue.DATABASE)return null;const r=n-o.bottom,a=r/4,{ranges:u}=i.sourceData.extra||[];let d=[0,0];const h=u.map(y=>{const{from:C,to:v}=y,k=Math.abs(C-v)/2,E=C-k,T=v+k,M=vr([y],{frequency:s.originFrequency,from:E,to:T,nbPoints:256}),I=xt(M.y);return d[0]=I[0]<d[0]?I[0]:d[0],d[1]=I[1]>d[1]?I[1]:d[1],{data:M,from:E,to:T}},[]),m=Fo({height:a,margin:{top:0,bottom:0},verticalAlign:t,yDomain:d}),g=h.map(({data:{x:y,y:C},from:v,to:k})=>{let E=`M ${l()(y[0])} ${m(C[0])} `;return E+=y.slice(1).reduce((T,M,I)=>(T+=` L ${l()(M)} ${m(C[I+1])}`,T),""),{path:E,from:v,to:k}},[]);return f("g",{clipPath:`url(#${e}clip-chart-1d)`,className:"resurrected-database-ranges",width:"100%",height:"100%",children:g.map(({path:y,from:C,to:v},k)=>F("g",{children:[f("g",{transform:`translate(${l()(v)},0)`,children:f("rect",{x:"0",width:Math.abs(l()(v)-l()(C)),height:"100%",fill:"#ff6f0057"})}),f("path",{transform:`translate(0,${r-a*2})`,stroke:"black",fill:"none",d:y})]},`${k}`))})}const qv=P`
  user-select: none;

  path,
  line {
    fill: none;
    stroke: black;
    stroke-width: 1;
    shape-rendering: crispEdges;
    user-select: none;
  }
`,Jv=P`
  user-select: none;

  line {
    stroke: rgb(104, 104, 104);
    stroke-opacity: 0.2;
    shape-rendering: crispEdges;
    stroke-dasharray: 3;
    stroke-width: 1;
    user-select: none;
  }

  path {
    stroke-width: 0;
  }
`;function Qv(e){const{show:t=!0,showGrid:n=!1,mode:o,label:s}=e,{xDomain:i,height:l,width:r,margin:a}=$(),{scaleX:u}=Vi(),d=c.exports.useRef(null),h=c.exports.useRef(null),m=s||(o==="RTL"?"\u03B4 [ppm]":"time [s]");return c.exports.useEffect(()=>{if(!t||!u)return;const g=Ms(u().domain(i)).ticks(8).tickFormat(Ks("0")),x=Ms(u().domain(i)).ticks(50).tickSize(-(l-a.top-a.bottom)).tickFormat(()=>"");Do(d.current).call(g),Do(h.current).call(x)},[l,a.bottom,a.top,u,t,i]),!r||!l||!u?null:w(Qe,{children:[t&&p("g",{className:"x",css:qv,transform:`translate(0,${l-a.bottom})`,ref:d,children:p("text",{fill:"#000",x:r-10,y:"30",dy:"0.70em",textAnchor:"end",children:m})}),n&&p("g",{css:Jv,className:"grid",ref:h,transform:`translate(0,${l-a.bottom})`})]})}function e1(e,t){if(!e&&!Array.isArray(e))return null;let n=[],o=0,s=o1(e,t);for(const l of e)for(const r of l.signals){const i=r,{id:a}=i,u=G(i,["id"]);if(u.js){n.push(b({id:`${l.id}${a}`},u));const d=t1(u.js);o=d>o?d:o}}return{signals:n,jCouplingMax:o,links:s}}function t1(e){let t=-1/0;for(const{coupling:n}of e)t=n>t?n:t;return t}function n1(e){const t=[];for(let n of e)for(const{delta:o,js:s}of n.signals)for(const{coupling:i}of s||[])t.push({coupling:i,delta:o});return t}function Fl(e){const{delta:t}=e;return{id:U(),from:t,to:t,couplings:[e]}}function o1(e,t=0){const n=n1(e).sort((r,a)=>r.coupling-a.coupling);if(!n||n.length===0)return[];const o=[Fl(n[0])];let s=0,i=s,l=1;for(;l<n.length;){const r=n[l];Math.abs(n[i].coupling-r.coupling)<t?(o[s].couplings.push(r),r.delta>o[s].to?o[s].to=r.delta:r.delta<o[s].from&&(o[s].from=r.delta),l++):Math.abs(n[l-1].coupling-r.coupling)<t?i=l-1:(s++,o[s]=Fl(n[l]),i=l,l=l+1)}return o}const nd=c.exports.createContext({scaleY:null,height:0,maxValue:0}),s1=nd.Provider;function fs(){const e=c.exports.useContext(nd);if(!e.scaleY)throw new Error("scale cannot be null");return e}const i1=c.exports.forwardRef((e,t)=>{const{x:n,y:o,height:s,showGrid:i,ticks:l}=e;return F("g",{ref:t,transform:`translate(${n}, ${o})`,children:[f("line",{y2:s,x1:15,x2:15,stroke:"black"}),l.map(({label:r,position:a},u)=>F("g",{children:[i&&e.width&&f("line",{y1:a,y2:a,x1:15,x2:e.width-n,stroke:"lightgray"}),f("line",{y1:a,y2:a,x1:15,x2:10,stroke:"black"}),f("text",{y:a,dominantBaseline:"middle",textAnchor:"end",children:r})]},u+r+a))]})});function l1(e){const i=e,{scale:t}=i,n=G(i,["scale"]),o=c.exports.useRef(null),s=yp(t,"vertical",o);return f(i1,S(b({},n),{ticks:s,ref:o}))}function r1(){const{width:e,margin:t}=$(),{height:n,scaleY:o}=fs();return o?f("svg",{style:{overflow:"visible"},height:n+20,width:60,children:f(l1,{x:20,y:0,scale:o,height:n,showGrid:!0,width:e-t.right})}):null}function a1(e){const{links:t}=e,{scaleX:n}=fe(),{scaleY:o,maxValue:s}=fs(),i=c.exports.useCallback(l=>{if(!o)return"";const{from:r,to:a,couplings:u}=l;let d=[];for(const h of u)d.push(`M${n()(r)},${o(h.coupling)} L${n()(a)},${o(h.coupling)}`);return d.join(" ")},[n,o]);return f("g",{className:"js-coupling-links",children:t.filter(l=>l.couplings.length>1).map(l=>f("path",{d:i(l),style:{stroke:`hsl(${l.couplings[0].coupling*360/s},100%,50%)`},strokeWidth:"1"},l.id))})}function c1({value:e}){const{scaleY:t,maxValue:n}=fs(),[o,s]=c.exports.useState(!1);return t?F("g",{className:"coupling",style:{transform:`translate(0px,${t(e)}px)`},children:[f("circle",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),cx:0,cy:0,r:4,fill:`hsl(${e*360/n},100%,${o?45:50}%)`,pointerEvents:"all"}),o&&F("g",{style:{transform:"translate(0px,15px)"},children:[f("text",{pointerEvents:"none",stroke:"white",strokeWidth:"0.6em",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`}),f("text",{pointerEvents:"none",stroke:"black",fontSize:"11px",dominantBaseline:"middle",textAnchor:"end",children:`${e.toFixed(1)} Hz`})]})]}):null}function u1(e){const{scaleX:t}=fe(),{height:n}=fs();return f("g",{className:"js-coupling",children:e.signals.map(o=>{var s;return F("g",{transform:`translate(${t()(o.delta)},0)`,children:[f("line",{x1:"0",y1:n,x2:"0",y2:"0",stroke:"black",strokeWidth:"1"}),(s=o.js)==null?void 0:s.map(i=>f(c1,{value:i.coupling},`${i.coupling}`))]},o.id)})})}const d1=50;function p1(e){const{signals:t,links:n}=e;return F("g",{className:"j-graph",transform:`translate(0,${d1})`,children:[f(r1,{}),f(a1,{links:n}),f(u1,{signals:t})]})}const h1={ranges:{}},f1=c.exports.memo(p1);function m1(){const e=ce(),{height:t,toolOptions:{data:{showJGraph:n}},activeTab:o}=$(),s=t/4,{ranges:i}=ve(h1),l=c.exports.useMemo(()=>(V(e.current,`formatting.panels.ranges.[${o}]`)||Bi(o)).jGraphTolerance,[o,e]),{signals:r,jCouplingMax:a,links:u}=c.exports.useMemo(()=>e1(i.values,l)||{signals:[],jCouplingMax:0,links:[]},[l,i.values]),d=c.exports.useMemo(()=>{const m=a+a*.1;return qe().range([s,0]).domain([0,m])},[s,a]),h=c.exports.useMemo(()=>({scaleY:d,height:s,maxValue:a}),[s,d,a]);return n?f(s1,{value:h,children:f(f1,{signals:r,links:u})}):null}function od(e){const{x:t="initial",y:n="initial",onDelete:o=()=>null,fill:s="#c81121"}=e;return F("svg",{className:"delete-button",x:t,y:n,onClick:o,"data-no-export":"true",children:[f("rect",{rx:"5",width:"16",height:"16",fill:s}),f("line",{x1:"5",x2:"10",y1:"8",y2:"8",stroke:"white",strokeWidth:"2"})]})}const g1=P`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .delete-button {
    visibility: hidden;
  }
`,x1=P`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .range-area {
    height: 100%;
    fill: #ff6f0057;
  }
  .delete-button {
    visibility: visible;
    cursor: pointer;
  }
`;function b1({rangeData:e,columnKey:t}){const{from:n,to:o}=e,s=ie([t]),{scaleX:i}=fe(),l=Y(),r=c.exports.useCallback(()=>{l({type:_i,colKey:t})},[t,l]),a=c.exports.useCallback(u=>{l({type:Wc,payload:S(b(b({},e),u),{columnKey:t})})},[t,l,e]);return w("g",S(b({},s.onHover),{css:s.isActive?x1:g1,children:[w("g",{transform:`translate(${i()(o)},25)`,children:[p("rect",{x:"0",width:i()(n)-i()(o),height:"6",className:"range-area",fill:"green"}),p("text",{textAnchor:"middle",x:(i()(n)-i()(o))/2,y:"-5",fontSize:"12",fill:"red",fontWeight:"bolder",fillOpacity:s.isActive?1:.6,children:t})]}),p(Xi,{from:e.from,to:e.to,onDrop:a}),p(od,{x:i()(o)-20,y:10,onDelete:r})]}))}function y1({activeTab:e,spectraAnalysis:t,displayerKey:n}){const o=c.exports.useMemo(()=>{const{options:{columns:i}}=t[e]||{options:{columns:{}}};return i},[e,t]),s=c.exports.useMemo(()=>Object.keys(o).map(i=>i,[]),[o]);return!s||s.length===0?null:f("g",{clipPath:`url(#${n}clip-chart-1d)`,children:s.map(i=>f(b1,{columnKey:i,rangeData:o[i]},i))})}const v1=c.exports.memo(y1);function C1(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return f(v1,{activeTab:e,spectraAnalysis:t,displayerKey:n})}const Un=[{label:"massive (m)",value:"m",multiplicity:null},{label:"singlet (s)",value:"s",multiplicity:1},{label:"doublet (d)",value:"d",multiplicity:2},{label:"triplet (t)",value:"t",multiplicity:3},{label:"quartet (q)",value:"q",multiplicity:4},{label:"quintet (i)",value:"i",multiplicity:5},{label:"sextet (x)",value:"x",multiplicity:6},{label:"septet (p)",value:"p",multiplicity:7},{label:"octet (o)",value:"o",multiplicity:8},{label:"nonet (n)",value:"n",multiplicity:9}];function k1(e){const t=Un.find(n=>e===n.label||e===n.value);return t?t.multiplicity:null}function S1(e,t=[]){if(e===void 0||e.length===0)return!1;const n=Un.find(o=>o.value===e||o.label===e);return n&&!t.includes(n.value)&&!t.includes(n.label)}function Yi(e,t=[]){return e===void 0||e.length===0?!1:!e.split("").find(n=>!S1(n,t))}function $t(e){var t,n;return e.length===1?(t=Un.find(o=>o.value===e))==null?void 0:t.label:(n=Un.find(o=>o.label===e))==null?void 0:n.value}function Kn(e){return e.length>1&&(e=$t(e)),Yi(e,["m","s"])}function w1(e,t){if(e===void 0||e===0||t===void 0)return[1];let n=2*t+1,o=[];for(let s=0;s<n-1;s++)o.push(1);for(let s=0;s<e-1;s++){let i=o.slice();for(let l=1;l<n;l++){for(let r=0;r<o.length-1;r++)i[r+l]+=o[r];i.push(1)}o=i.slice()}return o}const Gs=["red","green","blue","magenta"];function Ll({signal:e,startY:t,levelHeight:n}){const{scaleX:o}=fe();return f("line",{x1:o()(e.delta),y1:t,x2:o()(e.delta),y2:t+n,stroke:Gs[0]},`startLevelNode_${e.id}`)}function Ol({signal:e,startY:t,levelHeight:n,fontSize:o,showLabels:s}){const{scaleX:i}=fe();return f("text",{textAnchor:"middle",x:i()(e.delta),y:t+n/2,fontSize:o,lengthAdjust:"spacing",fill:"black",visibility:s?"visible":"hidden",children:e.multiplicity},`multiplicityString_${e.id}`)}function E1({nodesData:e,levelHeight:t,startY:n,signalID:o,labelOptions:s,showLabels:i}){const{scaleX:l}=fe(),r=c.exports.useCallback(({startX:a,_startX:u,ratio:d,multiplicityIndex:h,color:m})=>{const g=2*h+2,x=n+g*t,y=n+(g+1)*t;return F("g",{children:[f("text",{textAnchor:"middle",x:l()(u)+s.distance,y:y+2*(t/3),fontSize:s.fontSize,fill:m,visibility:i?"visible":"hidden",children:d}),f("line",{x1:l()(a),y1:x,x2:l()(u),y2:y,stroke:m}),f("line",{x1:l()(u),y1:y,x2:l()(u),y2:y+t,stroke:m})]},`${h}_${o}_${a}_${u}_${d}`)},[o,s.distance,s.fontSize,l,i,n,t]);return f(et,{children:e==null?void 0:e.map(a=>r(a))})}function A1(e,t){function n(o,s,i,l){var h;if(!e.multiplicity)return null;if(o>=e.multiplicity.length)return i;const r=Gs[o%Gs.length],a=s.findIndex(m=>m===o),u=V(t,"info.originFrequency",0),d=a>=0&&u>0&&((h=e==null?void 0:e.js)==null?void 0:h[a])?e.js[a].coupling/u:null;if(!d)i.push({startX:l,_startX:l,ratio:1,multiplicityIndex:o,color:r}),n(o+1,s,i,l);else{const m=e.multiplicity||"",g=w1(k1(m.charAt(o)),.5);let x=g.length%2===0?l-g.length/2*d+d/2:l-(g.length/2-.5)*d;g.forEach((y,C)=>{C>0&&(x+=d),i.push({startX:l,_startX:x,ratio:y,multiplicityIndex:o,color:r}),n(o+1,s,i,x)})}return i}return n}const $l={cursor:"default",opacity:.6,strokeWidth:1};function Hl(e){return[e.id].concat(e.assigned.x||[])}function sd({rangeFrom:e,rangeTo:t,signal:n,labelOptions:o={distance:10,fontSize:11}}){const{scaleX:s,scaleY:i}=fe(),{data:l,activeSpectrum:r,toolOptions:{selectedTool:a},width:u}=$(),d=ct(n.id),h=ie(Hl(d),{type:ue.SIGNAL,extra:Hl(d)}),m=c.exports.useMemo(()=>V(l,`${r==null?void 0:r.index}`,null),[r,l]),[g,x]=c.exports.useState({x1:n.delta,x2:n.delta}),[y,C]=c.exports.useState({width:0,height:0,levelHeight:0}),[v,k]=c.exports.useState(!1),[E,T]=c.exports.useState(!1);c.exports.useEffect(()=>{var H;const A=!Yi(n.multiplicity,["m"]),D=A?Math.abs(s()(g.x1)-s()(g.x2)):Math.abs(s()(g.x1)-s()(g.x2))+o.distance,R=A?D/3:D/2,O=((H=n==null?void 0:n.multiplicity)==null?void 0:H.length)||0,L=A?R/(O+2):R/(2*O+2);C({width:D,height:R,levelHeight:L}),k(A)},[o.distance,s,n.multiplicity,g.x1,g.x2]),c.exports.useEffect(()=>{y.width/u>=.1?T(!0):T(!1)},[y.width,u]);const M=c.exports.useMemo(()=>{let A;return m.data.x.forEach((D,R)=>{D>=e&&D<=t&&(!A||m.data.re[R]>A)&&(A=m.data.re[R])}),i(m.id)(A)-y.height-30},[m.data.x,m.data.re,m.id,i,y.height,e,t]),I=c.exports.useMemo(()=>{if(n.multiplicity){const A=A1(n,m),D=n.multiplicity.split("").map((R,O)=>Kn(R)?O:void 0).filter(R=>R!==void 0);return A(0,D,[],n.delta)}return[]},[n,m]);c.exports.useEffect(()=>{if(v)x({x1:e,x2:t});else{const A={x1:n.delta,x2:n.delta};I.forEach(D=>{D.startX<A.x1&&(A.x1=D.startX),D.startX>A.x2&&(A.x2=D.startX),D._startX<A.x1&&(A.x1=D._startX),D._startX>A.x2&&(A.x2=D._startX)}),x(A)}},[v,e,t,n.delta,n.multiplicity,I]);const N=c.exports.useMemo(()=>{const{levelHeight:A}=y,D=M;let R=D;const O=M+A;if(R=O,R+=A,v){const L=s()(e),H=s()(t),X=`M ${L} ${R+A} ${L} ${R} ${s()(n.delta)} ${R} ${H} ${R} ${H} ${R+A}`;return w("g",{children:[p(Ol,{signal:n,startY:D,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Ll,{signal:n,startY:O,levelHeight:A}),p("path",{d:X,stroke:"blue",fill:"none"})]})}return w("g",{children:[p(Ol,{signal:n,startY:D,levelHeight:A,fontSize:o.fontSize,showLabels:E}),p(Ll,{signal:n,startY:O,levelHeight:A}),p(E1,{nodesData:I,signalID:I,showLabels:E,startY:M,labelOptions:o,levelHeight:A})]})},[y,M,v,n,o,E,I,s,e,t]);return p("g",{css:h.isActive||d.isActive?S(b({},$l),{opacity:1,strokeWidth:1.5}):$l,onMouseEnter:()=>{d.onMouseEnter("x"),h.show()},onMouseLeave:()=>{d.onMouseLeave("x"),h.hide()},onClick:a&&a===_.editRange.id?()=>null:A=>{A.shiftKey&&(A.stopPropagation(),d.onClick("x"))},children:N})}function T1({range:e}){return(e==null?void 0:e.signals)&&e.signals.length>0&&e.signals.map(t=>f(sd,{rangeFrom:e.from,rangeTo:e.to,signal:t},t.id))}const D1=c.exports.memo(T1);function R1(){const{toolOptions:{data:{tempRange:e}}}=$();return f(D1,{range:e})}const I1=P`
  pointer-events: bounding-box;
  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .delete-button {
    visibility: hidden;
  }
`,N1=P`
  pointer-events: bounding-box;

  @-moz-document url-prefix() {
    pointer-events: fill;
  }
  .range-area {
    height: 100%;
    fill: #ff6f0057;
  }
  .delete-button {
    visibility: visible;
    cursor: pointer;
  }
`;function M1({rangeData:e,showMultiplicityTrees:t,selectedTool:n,startEditMode:o}){const{id:s,from:i,to:l,integration:r,signals:a}=e,u=je(),d=ct(s),h=ie([d.id].concat(d.assigned.x||[]).concat(zi(u,a.map(O=>O.id))),{type:ue.RANGE,extra:{id:s}}),[m,g]=c.exports.useState({from:i,to:l}),{scaleX:x}=fe(),y=Y(),[C,v]=c.exports.useState(!1),[k,E]=c.exports.useState(!1);c.exports.useEffect(()=>{g({from:i,to:l})},[i,l]),c.exports.useEffect(()=>{n&&n===_.editRange.id?E(!0):E(!1)},[n]),c.exports.useEffect(()=>{v(!Ta(e))},[e]);const T=c.exports.useCallback(O=>{y({type:Nc,data:b(b({},e),O)})},[y,e]),M=c.exports.useCallback(()=>{d.onMouseEnter("x"),h.show()},[d,h]),I=c.exports.useCallback(()=>{d.onMouseLeave("x"),h.hide()},[d,h]),N=c.exports.useCallback(O=>{n===_.rangesPicking.id&&O.shiftKey&&!k&&d.onClick("x")},[d,k,n]),A=c.exports.useCallback(O=>{g(L=>b(b({},L),O))},[]),{from:D,to:R}=m;return w("g",{"data-test-id":"range",style:{outline:"none"},css:k||h.isActive||d.isActive?N1:I1,onMouseEnter:M,onMouseLeave:I,onClick:N,children:[w("g",{transform:`translate(${x()(R)},10)`,children:[p("rect",{x:"0",width:Math.abs(x()(D)-x()(R)),height:"6",className:"range-area",fill:"green",fillOpacity:!C||h.isActive||d.isActive?1:.4}),p("text",{textAnchor:"middle",x:Math.abs(x()(D)-x()(R))/2,y:"20",fontSize:"10",fill:"red",fillOpacity:!C||h.isActive||d.isActive?1:.6,children:r!==void 0?r.toFixed(2):""})]}),p(Xi,{from:e.from,to:e.to,onDrop:T,onDrag:A}),o?p(R1,{}):t&&a&&a.length>0&&a.map(O=>p(sd,{rangeFrom:D,rangeTo:R,signal:O},O.id))]},s)}function P1({range:e}){const t=Qu(e);return f("path",{className:"line",stroke:"black",strokeWidth:"1",fill:"none",d:t})}function _1({ranges:e,displayerKey:t,selectedTool:n,editRangeID:o,showMultiplicityTrees:s,showRangesIntegrals:i}){var l;return f("g",{clipPath:`url(#${t}clip-chart-1d)`,children:(l=e==null?void 0:e.values)==null?void 0:l.map(r=>F(c.exports.Fragment,{children:[f(M1,{rangeData:r,selectedTool:n,showMultiplicityTrees:s,startEditMode:!!(o&&o===r.id)}),i&&f(P1,{range:r})]},r.id))})}const F1=c.exports.memo(_1),L1={ranges:{}};function O1(){const{displayerKey:e,toolOptions:{selectedTool:t,data:{tempRange:n,showMultiplicityTrees:o,showRangesIntegrals:s}}}=$(),{ranges:i}=ve(L1);return f(F1,{ranges:i,showMultiplicityTrees:o,showRangesIntegrals:s,selectedTool:t,displayerKey:e,editRangeID:(n==null?void 0:n.id)||""})}const $1=P`
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */

  .zone-area {
    height: 100%;
    fill: #b8b8b857;
    cursor: pointer;
  }
  .delete-button {
    display: none;
    cursor: pointer;
  }
  :hover .delete-button {
    display: block;
  }
`;function H1(){const{toolOptions:e}=$(),{scaleX:t}=fe(),n=Y(),o=c.exports.useCallback(i=>{n({type:Rc,id:i})},[n]),s=c.exports.useMemo(()=>e.data.baseLineZones,[e]);return p(Qe,{children:s.length>0&&p("g",{children:s.map(i=>w("g",{transform:`translate(${t()(i.to)},0)`,css:$1,children:[p(od,{x:-20,y:10,onDelete:()=>o(i.id)}),p("rect",{x:"0",width:`${t()(i.from)-t()(i.to)}`,className:"zone-area"})]},i.id))})})}function z1({mode:e,width:t,height:n,margin:o,displayerKey:s}){return F("svg",{viewBox:`0 0 ${t} ${n}`,width:t,height:n,id:"nmrSVG",children:[f("defs",{children:f("clipPath",{id:`${s}clip-chart-1d`,children:f("rect",{width:`${t-o.left-o.right}`,height:`${n}`,x:`${o.left}`,y:`${0}`})})}),f(Yv,{}),f(Bv,{}),f(Wv,{}),f(O1,{}),f(m1,{}),f(C1,{}),f(H1,{}),f(_v,{}),f(Kv,{}),f("g",{className:"container",style:{pointerEvents:"none"},children:f(Qv,{showGrid:!0,mode:e})})]})}const zl=P`
  display: flex;
  flex-firection: row;
  align-items: center;
  pointer-events: bounding-box;
  user-select: 'none';
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  background-color: #f7f7f7;
  height: 30px;
  padding: 6px;
  color: #8d0018;
  position: absolute;
  width: 100%;
  bottom: 0;

  div {
    margin: 0px 10px;
    display: inline-block;

    .label {
      font-size: 12px;
      color: #4d4d4d;
      font-weight: bold;
    }
    .value {
      font-weight: bold;
      font-size: 14px;
      display: inline-block;
    }
    .unit {
      font-weight: bold;
      font-size: 10px;
    }
    .xvalue {
      min-width: 50px;
    }
    .yvalue {
      min-width: 80px;
    }
  }

  .separator {
    border-left: 2px solid gray;
    margin: 0 20px;
    width: 1px;
    height: 100%;
  }
`;function V1({margin:e,width:t,height:n,activeSpectrum:o,spectrum:s,activeTab:i}){var g,x,y,C;let l=c.exports.useContext(ut);const{startX:r,endX:a,step:u}=c.exports.useContext(wt),{scaleX:d}=fe(),h=Be(i),m=c.exports.useCallback(v=>{if(s){const k=Sn(s),E=Ze(k.x,d().invert(v));return k.y[E]}return 1},[s,d]);return!l||l.y<e.top||l.x<e.left||l.x>t-e.right||l.y>n-e.bottom?p("div",{css:zl}):w("div",{css:zl,children:[p(vp,{}),w("div",{children:[p("span",{className:"label",children:" \u{1D6C5}: "}),p("span",{className:"value",children:h(d().invert(l.x))}),p("span",{className:"unit",children:"ppm"}),o&&((g=s==null?void 0:s.info)==null?void 0:g.originFrequency)&&w(Qe,{children:[w("span",{className:"value",children:["\xA0(",h(d().invert(l.x)*((x=s==null?void 0:s.info)==null?void 0:x.originFrequency),"hz")]}),p("span",{className:"unit",children:"Hz"}),p("span",{className:"value",children:") "})]})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394ppm: "}),p("span",{className:"value",children:(d().invert(r)-d().invert(a)).toPrecision(6)})]}),o&&w(c.exports.Fragment,{children:[((y=s==null?void 0:s.info)==null?void 0:y.originFrequency)&&u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" \u0394Hz: "}),p("span",{className:"value",children:((d().invert(r)-d().invert(a))*((C=s==null?void 0:s.info)==null?void 0:C.originFrequency)).toPrecision(5)})]}),u==="brushing"&&w("div",{children:[p("span",{className:"label",children:" ratio :"}),w("span",{className:"value",children:[(m(r)/(m(a)||Number.MIN_VALUE)*100).toFixed(2),"%"]})]})]}),o&&w(c.exports.Fragment,{children:[p("div",{className:"separator"}),p(Cp,{}),w("div",{children:[p("span",{className:"label",children:"Intensity: "}),p("span",{className:"value yvalue",children:h(m(l.x))})]})]})]})}const j1=c.exports.memo(V1);function B1(){const{margin:e,width:t,height:n,activeSpectrum:o,activeTab:s}=$(),i=ve(null);return p(j1,{margin:e,width:t,height:n,activeSpectrum:o,spectrum:i,activeTab:s})}const Ao={container:{position:"absolute",left:"10px",top:"10px"},value:{width:"67px",display:"inline-block",margin:"0 5px",fontSize:"12px"},colorIndicator:{width:"10px",height:"1px",borderBottom:"2px solid",display:"inline-block",marginBottom:"3px"},name:{fontSize:"12px"}};function X1({datum:e}){const{scaleX:t}=Vi(),n=c.exports.useContext(ut);if(!t||!n)return null;const o=Ze(e.x,t().invert(n.x));return f("span",{style:Ao.value,children:e.y[o]})}function Y1(){const{data:e,activeTab:t,xDomains:n}=$(),[o,s]=c.exports.useState(!1);c.exports.useEffect(()=>{function l(r){s(r)}return de.on("showYSpectraTrackers",l),()=>{de.off("showYSpectraTrackers",l)}},[]);const i=c.exports.useMemo(()=>o&&e.map(l=>l.display.isVisible&&n[l.id]&&l.info.nucleus===t&&F("div",{style:{display:"block"},children:[f("span",{style:S(b({},Ao.colorIndicator),{borderColor:l.display.color})}),f(X1,{datum:Sn(l)}),f("span",{style:Ao.value,children:l.display.name})]},l.id),[]),[t,e,o,n]);return o?f("div",{style:Ao.container,children:i}):null}const q={radius:10,borderColor:"#1f1f1f",strokeWidth:1,fillOpacity:0,SVGPadding:1};function G1(){const{height:e,width:t,margin:n,activeSpectrum:o,data:s,mode:i,toolOptions:{selectedTool:l},verticalAlign:r}=$(),{scaleX:a,scaleY:u}=fe();let d=c.exports.useContext(ut);const h=c.exports.useContext(wt),[m,g]=c.exports.useState();return c.exports.useEffect(()=>{const x=o?hs(r,{index:(o==null?void 0:o.index)||1,align:"center"}):0,C=((v,k)=>{if(o&&d&&l===_.peakPicking.id){const E=[a().invert(k.x-v),a().invert(k.x+v)].sort((D,R)=>D-R),T=s.find(D=>D.id===o.id);if(!T)throw new Error("Unreachable");const M=Sn(T),I=M.x.findIndex(D=>D>=E[1])-1,N=M.x.findIndex(D=>D>=E[0]),A=M.y.slice(N,I);if(A&&A.length>0){const D=Cr(A),R=A.findIndex(L=>L===D),O=M.x[N+R];return{x:a()(O),y:u(o.id)(D)-x,xIndex:N+R}}}return null})(10,d);g(C)},[o,s,i,d,a,u,l,r]),l!==_.peakPicking.id||!m||!o||h.step==="brushing"||!d||d.y<n.top||d.left<n.left||d.x>t-n.right||d.y>e-n.bottom?null:f("div",{style:{cursor:"crosshair",transform:`translate(${m.x}px, ${m.y}px)`,transformOrigin:"top left",position:"absolute",top:-(q.radius+q.SVGPadding),left:-(q.radius+q.SVGPadding),pointerEvents:"none",overflow:"visible"},children:F("svg",{width:q.radius*2+q.SVGPadding*2,height:q.radius*2+q.SVGPadding*2,children:[f("circle",{cx:q.radius+q.SVGPadding,cy:q.radius+q.SVGPadding,r:q.radius,stroke:q.borderColor,strokeWidth:q.strokeWidth,fillOpacity:q.fillOpacity}),f("line",{x1:q.radius+q.SVGPadding,y1:q.SVGPadding,x2:q.radius+q.SVGPadding,y2:q.radius*2+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth}),f("line",{x1:q.SVGPadding,y1:q.radius+q.SVGPadding,x2:q.radius*2+q.SVGPadding,y2:q.radius+q.SVGPadding,stroke:q.borderColor,strokeWidth:q.strokeWidth})]})},"peakPointer")}const Z1={transformOrigin:"top left",position:"absolute",top:"0px",left:"0px",width:1,backgroundColor:"red"};function W1(){const{height:e,toolOptions:{selectedTool:t,data:{pivot:n}}}=$(),{scaleX:o}=fe();return _.phaseCorrection.id!==t?null:f("div",{style:S(b({},Z1),{transform:`translate(${o()(n.value)}px, 0px)`,height:e})})}const U1={cursor:"crosshair",transformOrigin:"bottom right",position:"absolute",top:"-18px",left:"-30px",pointerEvents:"none",overflow:"visible",userSelect:"none"};function K1(){const{height:e,width:t,margin:n,data:o,activeSpectrum:s}=$(),{scaleX:i}=fe(),l=c.exports.useContext(ut),r=c.exports.useContext(wt),a=c.exports.useMemo(()=>s?o.find(m=>m.id===s.id):null,[s,o]),u=Be(a==null?void 0:a.info.nucleus),d=c.exports.useCallback(h=>{if(a){const m=i().invert(h);return u(m)}},[a,u,i]);return!s||r.step==="brushing"||!l||l.y<n.top||l.x<n.left||l.x>t-n.right||l.y>e-n.bottom?null:f("div",{style:S(b({},U1),{transform:`translate(${l.x}px, ${l.y}px)`}),children:f("span",{children:d(l.x)})},"xLabelPointer")}function q1({emptyText:e=void 0}){const{current:{display:{general:t}}}=ce(),n=$(),{toolOptions:{selectedTool:o},isLoading:s,data:i,mode:l,width:r,height:a,margin:u,activeSpectrum:d,xDomain:h,xDomains:m,yDomain:g,yDomains:x,verticalAlign:y,displayerKey:C}=n,v=Y(),k=he(),E=le(),[T,M]=c.exports.useReducer(lv,Xu);c.exports.useEffect(()=>{h.length>0&&g.length>0&&r&&a&&M({type:Bu,payload:{yDomain:g,yDomains:x,xDomain:h,xDomains:m,margin:u,height:a,width:r,verticalAlign:y,mode:l}})},[a,u,l,y,r,h,m,g,x]);const I=c.exports.useCallback(R=>{const O=()=>{if(!T.scaleX||!T.scaleY)return;const{startX:L,endX:H}=R,X=T.scaleX().invert(L),J=T.scaleX().invert(H);de.emit("brushEnd",S(b({},R),{range:[X,J].sort((z,j)=>z-j)}))};if(R.altKey)switch(o){case _.rangesPicking.id:{(t==null?void 0:t.disableMultipletAnalysis)||k.show(f(Rv,b({data:i,activeSpectrum:d,scaleX:T.scaleX},R)),{onClose:()=>{k.close()}});break}}else if(R.shiftKey)switch(o){case _.integral.id:v(b({type:ic},R));break;case _.rangesPicking.id:{const[L,H]=Gt(n,{startX:R.startX,endX:R.endX});if(!d)break;const{data:{x:X}}=n.data[d.index],{fromIndex:J,toIndex:z}=qn(X,{from:L,to:H});z-J<=Io?v({type:Pc,payload:b({},R)}):E.error(`Advanced peak picking only available for area up to ${Io} points`);break}case _.multipleSpectraAnalysis.id:v(b({type:Zc},R));break;case _.peakPicking.id:v(b({type:Qa},R));break;case _.baseLineCorrection.id:v({type:Dc,zone:{from:R.startX,to:R.endX}});break;case _.exclusionZones.id:v({type:iu,payload:{from:R.startX,to:R.endX}});break;default:O();break}else switch(o){default:o!=null&&v(b({type:cs},R));break}},[T,o,t==null?void 0:t.disableMultipletAnalysis,k,i,d,v,n,E]),N=c.exports.useCallback(()=>{v({type:bn,zoomType:Bn.STEP_HORIZONTAL})},[v]),A=c.exports.useCallback(R=>{v({type:as,event:R,selectedTool:o})},[v,o]),D=c.exports.useCallback(R=>{const O=()=>{if(!T.scaleX)return;const L=T.scaleX().invert(R.x);de.emit("mouseClick",S(b({},R),{xPPM:L}))};if(R.shiftKey)switch(o){case _.peakPicking.id:v({type:Ja,mouseCoordinates:R});break;case _.editRange.id:O();break}else switch(o){case _.phaseCorrection.id:v({type:Ii,position:R.x});break}},[v,T,o]);return f(rv,{value:T,children:f(Js,{children:({height:R,width:O})=>f(ju,{height:R,width:O,children:F("div",{style:{height:"100%",position:"relative"},children:[f(Nu,{isLoading:s,emptyText:e}),T.scaleX&&T.scaleY&&i&&i.length>0&&f(Yr,{onBrush:I,onDoubleClick:N,onClick:D,onZoom:A,style:{width:"100%",height:"100%",margin:"auto",position:"relative",overflow:"hidden"},children:F(Gr,{style:{width:"100%",height:"100%",position:"absolute"},children:[f(Y1,{}),f(Mu,{}),f(Eo,{brushType:De.X}),f(K1,{}),f(G1,{}),f(W1,{}),f(B1,{}),f(z1,{width:r,height:a,margin:u,mode:l,displayerKey:C})]})})]})})})})}const bo={container:{margin:"25px"},header:{backgroundColor:"#ffffff",padding:"20px",borderRadius:"10px",fontSize:"30px",textAlign:"center"},title:{textDecoration:"underline"},body:{marginTop:"10px",whiteSpace:"pre-wrap",backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"red"}};function J1(e){return F("div",{style:bo.container,children:[f("p",{style:bo.header,children:"Something went wrong."}),F("details",{style:bo.body,children:[f("p",{style:bo.title,children:e.error.message}),e.error.stack]})]})}const ho=c.exports.forwardRef((e,t)=>{const{checked:n=!1,disabled:o=!1,name:s="",onChange:i=()=>null,style:l={}}=e,[r,a]=c.exports.useState(n),u=c.exports.useCallback(d=>{a(!r),i(d)},[r,i]);return f("input",{ref:t,type:"checkbox",name:s,id:s,onChange:u,defaultChecked:n,disabled:o,style:l})});function mt(e){const m=e,{label:t,name:n,onChange:o=()=>null,className:s="checkbox",reverse:i=!1,style:l={container:{},label:{},checkbox:{}}}=m,r=G(m,["label","name","onChange","className","reverse","style"]),{values:a,setFieldValue:u}=pe(),d=i?!V(a,n):V(a,n),h=c.exports.useCallback(g=>{g.persist(),o(g),u(n,i?d:!d)},[n,o,i,u,d]);return F("div",{className:`${s} check-${d}`,style:l.container?l.container:{},children:[t&&f("label",{htmlFor:n,className:"checkbox-label",style:l.label?l.label:{},children:t}),f(ho,S(b({},r),{name:n,checked:d,onChange:h,style:l.checkbox?l.checkbox:{}}))]})}const re=c.exports.forwardRef((e,t)=>{const{onSubmit:n=()=>null,initialValues:o={},validationSchema:s=null}=e;return f(kp,{innerRef:t,initialValues:o,onSubmit:n,validationSchema:s,children:f(et,{children:e.children})})});function id(e){const t=c.exports.useRef();return c.exports.useEffect(()=>{e.forEach(n=>{!n||(typeof n=="function"?n(t.current):n.current=t.current)})},[e]),t}const ws={label:{lineHeight:2,userSelect:"none"},inputWrapper:{height:"100%",width:"100px",borderRadius:"5px",borderWidth:"0.55px",borderColor:"#c7c7c7",borderStyle:"solid",display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},input:{outline:"none",flex:1,height:"100%",textAlign:"center",width:"100%"},clearButton:{height:"calc(100% - 4px)",borderRadius:"50%",backgroundColor:"gray",color:"white",aspectRatio:"1",fontSize:"60%",padding:0}},kt=c.exports.forwardRef((k,v)=>{var E=k,{value:e="",name:t,style:n={input:{},inputWrapper:{}},onChange:o=()=>null,debounceTime:s=0,onKeyDown:i=()=>null,checkValue:l=()=>!0,type:r="text",enableAutoSelect:a=!1,className:u,format:d=()=>T=>T,onBlur:h=()=>null,onFocus:m=()=>null,renderIcon:g=null,canClear:x=!1,onClear:y}=E,C=G(E,["value","name","style","onChange","debounceTime","onKeyDown","checkValue","type","enableAutoSelect","className","format","onBlur","onFocus","renderIcon","canClear","onClear"]);const[T,M]=c.exports.useState(e),I=c.exports.useRef(),N=id([v,I]),A=c.exports.useRef(Uo(X=>{o(X)},s)).current;c.exports.useEffect(()=>{M(e)},[e]),c.exports.useEffect(()=>{var X;a&&((X=N==null?void 0:N.current)==null||X.select())},[a,N]);const D=c.exports.useCallback(X=>d()(r==="number"?String(X).trim()==="-"?Number(0):Number(X):X),[d,r]),R=c.exports.useCallback(X=>{X.persist(),X.stopPropagation(),X.preventDefault();function J(j){if(r==="number"){const K=/^(?:-?[0-9]*|[0-9]\d*)(?:\.\d{0,20})?$/;return!!(j.trim()===""||K.test(j))}return!0}const z=X.target.value;if(J(z)&&l(z)){const j=d();M(j(z));const K=S(b({},X),{target:{name:X.target.name,value:D(z)}});s?A(K):o(K)}},[l,A,s,d,D,o,r]),O=c.exports.useCallback(X=>{X.persist(),i(S(b({},X),{target:{name:X.target.name,value:D(T)}}))},[D,i,T]),L=c.exports.useCallback(X=>{X.stopPropagation()},[]),H=c.exports.useCallback(()=>{M(""),y==null||y()},[y]);return F("div",{style:b(b({},ws.inputWrapper),(n==null?void 0:n.inputWrapper)?n.inputWrapper:{}),className:`input ${u||""}`,children:[g==null?void 0:g(),f("input",S(b({},C),{ref:N,name:t,style:b(b({},ws.input),(n==null?void 0:n.input)?n.input:{}),"data-test-id":t?`input-${t}`:"",type:"text",value:T,onChange:R,onKeyDown:O,onKeyPress:L,onDoubleClick:X=>X.stopPropagation(),onFocus:m,onBlur:h})),x&&T&&f("button",{type:"button",style:ws.clearButton,onClick:H,children:f("span",{style:{display:"block",margin:"0 auto"},children:"\u2715"})})]})});function W(e){const k=e,{name:t,style:n={label:{},input:{}},onChange:o=()=>null,checkValue:s=()=>!0,type:i="text",className:l="",value:r=null,format:a=()=>E=>E,checkErrorAfterInputTouched:u=!0}=k,d=G(k,["name","style","onChange","checkValue","type","className","value","format","checkErrorAfterInputTouched"]),{values:h,handleChange:m,setFieldValue:g,errors:x,touched:y}=pe(),C=c.exports.useCallback(E=>{o(E),m(E)},[m,o]);c.exports.useEffect(()=>{r&&g(t,r)},[t,g,r]);const v=c.exports.useMemo(()=>u?V(x,t)&&V(y,t):V(x,t),[u,x,t,y]);return f(kt,b({name:t,value:r||V(h,t),onChange:C,type:i,style:S(b({},n),{inputWrapper:b(b({},n.input),v&&{borderColor:"red",outline:"none"})}),checkValue:s,className:l,format:a},d))}const ht=P`
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    text-align: center;
    padding: 10px 0 10px 0px;
    margin: 0px;
    color: #005d9e;
    place-items: normal;
    text-transform: none;
    background-color: #fcfcfc;
  }

  .tab-content {
    width: 100%;
  }
  .row {
    display: flex;
  }

  .inner-content {
    padding: 15px 30px;
    width: 100%;
    overflow: auto;
  }

  button:focus {
    outline: none;
  }
  button:not([disabled]):hover {
    color: black;
  }
  .btn:not([disabled]):hover {
    background-color: #ffffff;
  }
  .btn:disabled {
    opacity: 0.5;
  }
  .btn {
    border: none;
    padding: 0 15px;
    background-color: #ffffff5e;
    border-radius: 5px;
    height: 25px;
  }

  .primary {
    background-color: #e2e2e2;
  }

  .footer-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    background: rgb(242, 242, 242);
    background: -moz-linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    background: linear-gradient(
      0deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(245, 245, 245, 1) 37%,
      rgba(255, 255, 255, 1) 90%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#ffffff",GradientType=1);
    padding: 6px 15px;
    height: 55px;
  }

  .section-header {
    font-size: 13px;
    color: #2ca8ff;
    margin-bottom: 10px;
    border-bottom: 0.55px solid #f9f9f9;
    padding: 6px 2px;
  }

  .custom-label {
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
    width: 120px;
  }
  .margin-10 {
    margin: 10px 0;
  }
  .padding-h-10 {
    margin: 10px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }

  .close-bt {
    border: none;
    color: red;
    background-color: transparent;
    outline: none;
    position: absolute;
    right: 10px;
    top: 2px;
    width: 30px;
    height: 30px;
  }
`,Q1=P`
  .row {
    align-items: center;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 80px;
  }

  .name {
    width: 100% !important;
    text-align: left !important;
  }

  .data-export-group {
    label:first-child {
      margin-right: 10px;
    }
    label {
      display: inline-block;
    }
    input[type='radio'] {
      margin-right: 5px;
    }
  }
`,eC={name:"",compressed:!1,pretty:!1,dataExportOption:bt.ROW_DATA};function tC({onClose:e,onSave:t,name:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{o.current.submitForm()},[]),i=c.exports.useCallback(l=>{t(l),e==null||e()},[e,t]);return w("div",{css:[ht,Q1],children:[w("div",{className:"header handle",children:[p("span",{children:"Save as ... "}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(re,{ref:o,initialValues:S(b({},eC),{name:n}),onSubmit:i,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Name"}),p(W,{name:"name",className:"name",style:{inputWrapper:{width:"100%"}}})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Compressed"}),p(mt,{name:"compressed"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Pretty Format"}),p(mt,{name:"pretty"})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:" Include "}),w("div",{className:"data-export-group",children:[w("label",{children:[p(cl,{type:"radio",name:"dataExportOption",value:bt.ROW_DATA}),"Raw Data"]}),w("label",{children:[p(cl,{type:"radio",name:"dataExportOption",value:bt.DATA_SOURCE}),"Data Source"]})]})]})]})}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:s,className:"btn primary",children:"Save"}),p("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function nC(e){var s,i;let t=document.createElement("div");t.innerHTML=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0";let n=Array.prototype.slice.call(document.styleSheets).filter(l=>!l.disabled);document.body.appendChild(t),(s=window.getSelection())==null||s.removeAllRanges();let o=document.createRange();o.selectNode(t),(i=window.getSelection())==null||i.addRange(o),document.execCommand("copy");for(const l of n)l.disabled=!0;document.execCommand("copy");for(const l of n)l.disabled=!1;document.body.removeChild(t)}async function oC(e){try{return nC(e),!0}catch{return!1}}async function ms(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}async function Vl(e,t="experiment",n=0,o=!1){const s=JSON.stringify(e,(i,l)=>ArrayBuffer.isView(l)?Array.from(l):l,n);if(o)try{const i=new dn;i.file(`${t}.nmrium`,s);const l=await i.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}});hn.exports.saveAs(l,`${t}.nmrium`)}catch(i){console.log(i)}else{const i=new Blob([s],{type:"text/plain"});hn.exports.saveAs(i,`${t}.nmrium`)}}function sC(e,t,n="experiment"){const o=["name","experiment"];for(const l of e[0].data.x)o.push(l);let s=`${o.join("	")}
`;for(const l of e){const{data:{re:r},info:{experiment:a},display:{name:u}}=l,d=[u,a];for(const h of r)d.push(h);s+=`${d.join("	")}
`}const i=new Blob([s],{type:"text/tab-separated-values"});hn.exports.saveAs(i,`${n}.tsv`)}function iC(e,t="experiment"){e.generateAsync({type:"blob"}).then(n=>{hn.exports.saveAs(n,`${t}.nmredata`)})}function ld(e,t="experiment"){const{blob:n}=Gi(e);hn.exports.saveAs(n,`${t}.svg`)}function lC(e,t="experiment"){const{blob:n,width:o,height:s}=Gi(e);try{let i=document.createElement("canvas");i.width=o,i.height=s;let l=i.getContext("2d");l&&(l.fillStyle="white",l.fillRect(0,0,i.width,i.height));let r=new Image,a=URL.createObjectURL(n);r.onload=async()=>{l==null||l.drawImage(r,0,0);let u=i.toDataURL("image/png",1);hn.exports.saveAs(u,`${t}.png`),URL.revokeObjectURL(u)},r.src=a}catch(i){console.log(i)}}function rC(e){var o;const t=document.createElement("img");t.src=e,t.style.position="fixed",t.style.pointerEvents="none",t.style.opacity="0",document.body.appendChild(t);const n=document.createRange();n.selectNode(t),(o=window.getSelection())==null||o.addRange(n),document.execCommand("Copy"),document.body.removeChild(t)}function aC(e){e.toBlob(t=>{const n=new ClipboardItem({[t.type]:t});navigator.clipboard.write([n]).then(()=>{console.log("experiment copied.")},o=>{console.log(o)})})}function rd(e){const{blob:t,width:n,height:o}=Gi(e);try{let s=document.createElement("canvas");s.width=n,s.height=o;let i=s.getContext("2d");i&&(i.fillStyle="white",i.fillRect(0,0,s.width,s.height));let l=new Image;const r=URL.createObjectURL(t);l.onload=async()=>{i==null||i.drawImage(l,0,0);const a=s.toDataURL("image/png",1);navigator.clipboard.write?aC(s):rC(a),URL.revokeObjectURL(a)},l.src=r}catch(s){s instanceof ReferenceError&&alert("Your browser does not support this feature, please use Google Chrome"),console.log(s)}}function Gi(e){var a;let t=(a=document.getElementById(e))==null?void 0:a.cloneNode(!0);const n=t==null?void 0:t.getAttribute("width").replace("px",""),o=t==null?void 0:t.getAttribute("height").replace("px","");t.querySelectorAll('[data-no-export="true"]').forEach(u=>u.remove());const l=`${`<svg class="nmr-svg"  viewBox='0 0 ${n} ${o}' width="${n}"  height="${o}"  version="1.1" xmlns="http://www.w3.org/2000/svg">`+`<style>.grid line,.grid path{stroke:none;} .peaks-text{fill:#730000} .x path{stroke-width:1px} .x text{
    font-size: 12px;
    font-weight: bold;
  } 
 
  .nmr-svg,.contours{
    background-color:white;
    fill:white;
  }
  

  
  </style>`+t.innerHTML}</svg>`;return{blob:new Blob([l],{type:"image/svg+xml"}),width:n,height:o}}const cC=new dn;async function ad(e,t={}){const{spectrum:n,source:o}=t,{file:s={},jcampURL:i}=o;let l="";const r=`${n.info.dimension}d`;switch(s.extension){case"jdx":case"dx":l+=`
Jcamp_Location=file:jcamp/${r}/${n.display.name}\\`,e.file(`jcamp/${r}/${n.display.name}`,s.binary);break;case"zip":if(!s.binary)return;cC.loadAsync(s.binary).then(async a=>{var u;for(const d in a.files)d.endsWith("/")||e.file(`Bruker/${d}`,await((u=a.file(d))==null?void 0:u.async("arraybuffer")));l+=`
Spectrum_Location=file:Bruker/${uC(a)}\\`});break;default:if(!i)break;await fetch(i).then(async a=>{if(!a)return;let u=i.split("/").slice(-1);const d=`jcamp/${r}/${u}`;l+=`
Jcamp_Location=file:${d}\\`,e.file(d,await a.arrayBuffer())})}return l}function uC(e){let t=e.filter(o=>o.match("__MACOSX")?!1:!!(o.endsWith("fid")||o.endsWith("1r")||o.endsWith("ser")||o.endsWith("2rr")));const n=t.findIndex(o=>o.name.endsWith("1r")||o.name.endsWith("2rr"));return n>-1?t[n].name:t[0].name}function Zi(e){Array.isArray(e)||(e=[e]);let t=[];for(let n of e)t.push(dC(n));return t}function dC(e){switch(e.toUpperCase()){case"1H":return 2;case"13C":return 1;default:return 1}}async function pC(e,t,n={labels:{byDiaID:[]}}){let{prefix:o="",labels:s}=n,i="",l=[];for(let r of e){const{info:a}=r;if(a.isFid||a.dimension>1)continue;let u="",d=r.ranges.values||[],h=r.info.nucleus,m=1,g="";l.forEach(C=>{C===h&&m++}),l.push(h),m>1&&(g=`#${m}`),u+=`${o}1D_${h.toUpperCase()}${g}>`,r.info.baseFrequency&&(u+=`
Larmor=${Number(r.info.baseFrequency).toFixed(2)}\\`);const{source:x={}}=r;u+=await ad(t,{spectrum:r,source:x});let y=Zi(h)[0];for(let C of d){let v=C.signals;for(let k of v){let{multiplicity:E}=k;if((!E||E==="m")&&h==="1H")u+=`
${Number(C.from).toFixed(y)}-${Number(C.to).toFixed(y)}`;else if(k.delta)u+=`
${Number(k.delta).toFixed(y)}`;else continue;let T="";if(k.diaIDs&&k.diaIDs.length>0&&(k.diaIDs.forEach((M,I,N)=>{let A=", ";I===N.length-1&&(A=""),T+=`${s.byDiaID[M].label||M}${A}`}),u+=`, L=${T}`),h==="1H"){k.multiplicity&&(u+=`, S=${k.multiplicity}`);let M=k.js;if(Array.isArray(M)&&M.length){let I=", J=";for(const N of M){if(u+=`${I}${Number(N.coupling).toFixed(3)}`,N.diaIDs){let{diaIDs:A}=N;if(Array.isArray(A)||(A=[A]),!A.length)continue;u+=`(${s.byDiaID[A[0]].label||String(A[0])})`}I=", "}}C.integration?u+=`, E=${Number(C.integration).toFixed(y)}`:C.nbAtoms?u+=`, E=${C.nbAtoms.toFixed(y)}`:C.signals[0].nbAtoms!==void 0&&(u+=`, E=${C.signals[0].nbAtoms}`)}}v.length&&(u+="\\")}u+=`
`,/\n/.exec(u)&&(i+=u)}return i}function hC(e){switch(e.toLowerCase()){case"hsqc":case"cosy":return"1J";case"hmbc":return"NJ";default:return"NJ"}}const fC=Array.isArray;async function mC(e,t,n={labels:{}}){const{byDiaID:o}=n.labels;let s="";const i=`
> <NMREDATA_2D_`;for(let l of e){if(l.info.dimension<2)continue;let r="";const{info:a,source:u}=l;let{nucleus:d,experiment:h,pulseSequence:m}=a,g=hC(h);d&&(r+=`${i}${d[1]}_${g}_${d[0]}>`);let x=Zi(d);r+=await ad(t,{spectrum:l,source:u}),h&&(r+=`
CorType=${h} \\`),m&&(r+=`
PulseProgram=${m} \\`),l.info.baseFrequency&&(r+=`
Larmor=${Number(l.info.baseFrequency[0]).toFixed(2)}\\`);let y=l.zones.values||[];for(let C of y){let v=C.signals;for(let k of v){let{x:E,y:T,peaks:M}=k,I=jl(E,o,x[0]),N=jl(T,o,x[1]),A=Math.max(...M.map(D=>D.z));r+=`
${I}/${N}, I=${A.toFixed(2)}\\`}}s+=r}return s.length>0?`${s}
`:""}function jl(e,t,n){let{diaIDs:o,delta:s}=e;if(o){if(fC(o)||(o=[o]),o.length<1)return Number(s).toFixed(n);let i=o.map(l=>t[l].label).join(",");return o.length>1?`(${i})`:i}return Number(s).toFixed(n)}function gC(e){let t=[];for(const{x:n,y:o}of e)t.push(n,o);return t}function xC(e,t={groupedDiaIDs:[]}){const{groupedDiaIDs:n,molecule:o}=t;let s=Sp(o,{toLabel:"H",maxLength:1}),i={},l={};for(let r of e){let{dimension:a,nucleus:u}=r.info,d=Zi(u),[h,m]=a>1?["zones",gC]:["ranges",x=>x||[]],g=r[h].values||[];for(let x of g){let y=m(x.signals);for(let C=0;C<y.length;C++){let v=y[C].diaIDs||[];for(let k of v){let E=Number(y[C].delta).toFixed(d[C%a]),T=n.find(I=>I.oclID===k),M={atom:T.atoms[0],molecule:o,connections:s,atomLabel:T.atomLabel};i[k]={atoms:T.atoms.map(I=>I+1),shift:E,label:Bl(M)};for(let I of T.atoms)M.atom=I,l[I]={shift:E,diaID:k,label:Bl(M)}}}}}return{byAssignNumber:l,byDiaID:i}}function Bl(e){const{atom:t,molecule:n,atomLabel:o,connections:s}=e;let i="";if(o!=="C"){let r=s[t].find(d=>d&&d.length>1),a=`${o}${r[0]+1}`,u=`${n.getAtomLabel(r[1])}${r[1]+1}`;i=`${a}${u}`}else i=`${o}${t+1}`;return i}const Wi={solvent:"SOLVENT",temperature:"TEMPERATURE",assignment:"ASSIGNMENT",j:"J",signals:"SIGNALS",id:"ID"};async function bC(e,t={}){const{data:n,molecules:o}=e||{data:[],molecules:[]};let s=new dn;for(const i of o)await Xl(n,s,S(b({},t),{molecule:i}));return o.length||await Xl(n,s,t),s}async function Xl(e,t,n={}){let{id:o,prefix:s=`
> <NMREDATA_`,filename:i="nmredata",molecule:l}=n,r="",a;l&&(l=Bt.Molecule.fromMolfile(l.molfile),r+=l.toMolfile(),l.addImplicitHydrogens(),a=wp(l));let u=l?xC(e,{groupedDiaIDs:a,molecule:l}):{byDiaID:void 0,byAssignNumber:void 0};r+=`${s}VERSION>
1.1\\
`,r+=Yl(e,"temperature",{prefix:s}),r+=Yl(e,"solvent",{prefix:s}),o&&(r+=`${s+Wi.id}>
id\\
`),r+=yC(u.byDiaID,{prefix:s}),r+=await pC(e,t,{prefix:s,labels:u}),r+=await mC(e,t,{prefix:s,labels:u}),r+=`
$$$$
`,t.file(`${i}.sdf`,r)}function yC(e,t){if(!e)return"";const{prefix:n}=t;let o=`${n+Wi.assignment}>
`;for(let s in e){let i=e[s].atoms;o+=`${e[s].label}, ${e[s].shift}`;for(let l of i)o+=`, ${l}`;o+=`\\
`}return o}function Yl(e,t,n={prefix:""}){const{prefix:o}=n;let s="";for(let i of e)if(i.info[t]){s+=`${o+Wi[t]}>
${String(i.info[t])}\\
`;break}return s}function cd(){const e=he(),t=le(),n=$(),o=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{rd("nmrSVG"),d(),t.success("Image copied to clipboard")},0)}},[t,n]),s=c.exports.useCallback(async(d=0,h=!0)=>{if(n.data.length>0){const m=await t.showLoading("Exporting as NMRium process in progress");setTimeout(()=>{async function g(){var C,v;const x=(v=(C=n.data[0])==null?void 0:C.display)==null?void 0:v.name,y=yl(n);await Vl(y,x,d,h),m()}g()},0)}},[t,n]),i=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as NMRE process in progress");setTimeout(()=>{async function h(){var x,y;const m=(y=(x=n.data[0])==null?void 0:x.display)==null?void 0:y.name,g=await bC(n);iC(g,m),d()}h()},0)}},[t,n]),l=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as SVG process in progress");setTimeout(()=>{var m,g;const h=(g=(m=n.data[0])==null?void 0:m.display)==null?void 0:g.name;ld("nmrSVG",h),d()},0)}},[t,n.data]),r=c.exports.useCallback(async()=>{if(n.data.length>0){const d=await t.showLoading("Exporting as PNG process in progress");setTimeout(()=>{var m,g;const h=(g=(m=n.data[0])==null?void 0:m.display)==null?void 0:g.name;lC("nmrSVG",h),d()},0)}},[t,n.data]),a=c.exports.useCallback(async d=>{const{name:h,pretty:m,compressed:g,dataExportOption:x}=d,y=await t.showLoading(`Exporting as ${h}.nmrium process in progress`);setTimeout(()=>{async function C(){const v=yl(n,x);await Vl(v,h,m?2:0,g),y()}C()},0)},[t,n]),u=c.exports.useCallback(async()=>{var d,h;if(n.data.length>0){const m=(h=(d=n.data[0])==null?void 0:d.display)==null?void 0:h.name;e.show(f(tC,{name:m,onSave:a}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:400})}},[e,a,n.data]);return{saveToClipboardHandler:o,saveAsJSONHandler:s,saveAsNMREHandler:i,saveAsSVGHandler:l,saveAsPNGHandler:r,saveAsHandler:u}}function ud(){const e=ce(),t=V(e.current,"display.general.experimentalFeatures",!1);return!((t==null?void 0:t.hidden)===!0||(t==null?void 0:t.display)===!1)}function ke(l){var r=l,{children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right"}=r,i=G(r,["children","style","onClick","popupTitle","popupPlacement"]);return f(we,{title:o,popupPlacement:s,children:f("button",S(b({style:t,type:"button",onClick:n},i),{children:e}))})}const Dt=P`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .inner-container {
    height: 100%;
    overflow: hidden;
    isolation: isolate;
  }

  .table-container {
    overflow: auto;
    height: 100%;
    display: block;
    background-color: white;
  }
`,vC=P`
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: lightgray !important;
    color: black !important;
  }

  &.toggle-active {
    background-color: gray;
    color: white;
  }
`;function CC({children:e,style:t={},onClick:n=()=>null,popupTitle:o="",popupPlacement:s="right",defaultValue:i=!1,disabled:l=!1,className:r=""}){const[a,u]=c.exports.useState(i),d=c.exports.useCallback(()=>{n(!a),u(!a)},[n,a]);return p(we,{title:o,popupPlacement:s,children:p("button",{disabled:l,css:vC,style:t,className:(a?"toggle toggle-active ":"toggle ")+r,type:"button",onClick:d,children:e})})}var Ge=c.exports.memo(CC);const kC=P`
  display: flex;
  flex-direction: row;
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  .left-container {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }

  button:disabled {
    opacity: 0.6;
  }

  .counter-label {
    margin: 0;
    text-align: right;
    line-height: 22px;
    padding: 0px 10px;
    white-space: nowrap;
  }
`;function SC({counter:e,onDelete:t=()=>null,deleteToolTip:n="Delete",onFilter:o=()=>null,filterToolTip:s="",filterIsActive:i=!1,counterFiltered:l=0,children:r,onSettingClick:a=()=>null,showSettingButton:u=!1,canDelete:d=!0,style:h={},className:m=""}){return w("div",{css:kC,style:h,className:m,children:[w("div",{className:"left-container",children:[d&&p(we,{title:n,popupPlacement:"right",children:p("button",{type:"button",onClick:t,disabled:e===0,children:p(St,{})})}),s?p(Ge,{popupTitle:s,popupPlacement:"right",onClick:o,defaultValue:i,children:p(Ep,{style:{pointerEvents:"none",fontSize:"12px"}})}):null,r]}),e!==void 0&&w("p",{className:"counter-label",children:["["," ",i&&i===!0&&l!==void 0?`${l}/${e}`:e," ","]"]}),u&&p(we,{title:"preferences",popupPlacement:"left",children:p("button",{type:"button",onClick:a,children:p(Ap,{})})})]})}var ot=c.exports.memo(SC);function wC(){const e=c.exports.useCallback(()=>{},[]);return w("div",{css:Dt,children:[p(ot,{showSettingButton:!1,canDelete:!1,children:p(ke,{popupTitle:"automatic assignment",onClick:e,children:p(Tp,{style:{fontSize:"18px"}})})}),p("div",{className:"inner-container"})]})}const EC=P`
  background-color: #ff6f0057;
`,AC=P`
  background-color: #f5f5dc;
`,dd=P`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  max-height: 100%;
  font-size: 12px;

  .react-contextmenu-wrapper {
    display: contents;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th {
    position: sticky;
    background-color: white;
    z-index: 0;
    top: 0;
  }
  th,
  td {
    margin: 0;
    padding: 0.15rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    // :last-child {
    //   border-right: 0;
    // }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function TC({data:e,columns:t,onMouseDown:n=()=>null}){const{getTableProps:o,getTableBodyProps:s,headerGroups:i,rows:l,prepareRow:r}=zn.exports.useTable({columns:t,data:e},zn.exports.useSortBy,zn.exports.useFlexLayout);return w("table",S(b({},o()),{css:dd,style:{height:"100%"},children:[p("thead",{children:i.map(a=>p("tr",S(b({},a.getHeaderGroupProps()),{children:a.headers.map(u=>w("th",S(b({},u.getHeaderProps(u.getSortByToggleProps())),{children:[u.render("Header"),p("span",{children:u.isSorted?u.isSortedDesc?" \u25BC":" \u25B2":""})]}),u.getHeaderProps().key))}),a.getHeaderGroupProps().key))}),p("tbody",S(b({},s()),{style:{display:"block",height:"100%",overflowY:"auto"},children:l.map(a=>(r(a),p("tr",S(b({},a.getRowProps()),{onMouseDown:n,children:a.cells.map(u=>p("td",S(b({},u.getCellProps()),{style:S(b({},u.getCellProps().style),{padding:"0px"}),children:u.render("Cell")}),u.getCellProps().key))}),a.getRowProps().key)))}))]}))}var DC=c.exports.memo(TC);const Es={container:{height:"100%",flexDirection:"column",display:"flex",width:"100%"},tableContainer:{height:"calc(100% - 30px)",overflow:"auto",display:"block"},searchInput:{width:"100%",borderRadius:"5px",border:"0.55px solid gray",padding:"5px",marginBottom:"2px"}};function RC({info:e,meta:t}){const[n,o]=c.exports.useState({}),[s,i]=c.exports.useState([]),l=c.exports.useRef(null),r=c.exports.useCallback(u=>{const d=Object.keys(n).filter(h=>h.toLowerCase().includes(u.target?u.target.value.toLowerCase():u.toLowerCase()));i(d)},[n]);c.exports.useEffect(()=>{l.current&&r(l.current.value)},[r,l]),c.exports.useEffect(()=>{if(e&&t){const u=Object.keys(e).concat(Object.keys(t));i(u),o(b(b({},e),t))}},[e,t]);const a=c.exports.useMemo(()=>[{Header:"Parameter",sortType:"basic",minWidth:100,width:20,maxWidth:20,Cell:({row:u})=>f("p",{style:{padding:"5px",backgroundColor:"white"},children:u.original})},{Header:"Value",sortType:"basic",resizable:!0,Cell:({row:u})=>f("p",{style:{backgroundColor:"#efefef",height:"100%",padding:"5px",fontFamily:"monospace",whiteSpace:"pre",overflow:"hidden"},children:`${n[u.original]}`})}],[n]);return F("div",{style:Es.container,children:[f("div",{children:f("input",{type:"text",style:Es.searchInput,placeholder:"Search for parameter...",onChange:r,ref:l})}),f("div",{style:Es.tableContainer,children:f(DC,{data:s,columns:a})})]})}const IC=c.exports.memo(RC),NC={info:{},meta:{}};function MC(){const{info:e,meta:t}=ve(NC);return f(IC,{info:e,meta:t})}const PC=P`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: red;
    border-radius: 50%;

    .icon {
      color: white;
    }
  }

  .icon {
    color: #252525;
    width: 8px;
  }
`;function pd({onDelete:e,className:t="delete"}){return p("button",{css:PC,className:t,type:"button",onClick:e,children:p(Qs,{className:"icon"})})}const _C=e=>P`
  position: relative;

  .delete {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  ${e}
`;function FC({tabid:e,tablabel:t,isActive:n,onClick:o=()=>null,canDelete:s,onDelete:i=()=>null,tabstyles:l,render:r}){let a="tab-list-item";n&&(a+=" tab-list-active");const u=c.exports.useCallback(h=>{o(S(b({},h),{tablabel:t,tabid:e}))},[o,t,e]),d=c.exports.useCallback(h=>{h.stopPropagation(),i(S(b({},h),{tablabel:t,tabid:e}))},[i,t,e]);return w("li",{className:a,onClick:u,css:_C(l),"data-test-id":`tab-${e}`,children:[s&&p(pd,{onDelete:d}),r?r({isActive:n,title:t||"",id:e}):t]})}function Ne(e){return p(Qe,{children:e.children})}const Gl=P`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .tab-list {
    border-bottom: 1px solid #ccc;
    padding-left: 0;
    margin: 0;
  }

  .tab-list li:first-of-type {
    margin-left: 5px;
  }

  .tab-list li:hover {
    background-color: #f7f7f7;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    padding: 0.5rem 2rem;
  }

  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  }

  .tab-content {
    height: 100%;
    overflow: auto;
  }
`,LC=P`
  display: flex;
  height: 100%;
  width: 100%;
  .tab-list {
    border-right: 1px solid #ccc;
    padding-left: 0;
    margin: 0;
  }

  .tab-list li:hover {
    background-color: #f7f7f7;
  }

  .tab-list li:first-of-type {
    margin-top: 10px;
  }

  .tab-list-item {
    display: block;
    list-style: none;
    margin-right: -1px;
    padding: 0.5rem 0.75rem;
  }

  .tab-list-active {
    background-color: white;
    border: solid #ccc;
    border-width: 1px 0px 1px 1px;
  }

  .tab-content {
    height: 100%;
    overflow: auto;
  }
`;var Ui=(e=>(e.TOP="TOP",e.LEFT="LEFT",e))(Ui||{});function OC({children:e,onClick:t,position:n,onDelete:o=()=>null,activeTab:s}){const i=c.exports.useCallback(u=>{const{tablabel:d,tabid:h}=u;t({tablabel:d,tabid:h})},[t]);let l;const r=c.exports.Children.map(e,u=>{if(!c.exports.isValidElement(u))return null;const{tabid:d}=u.props;return d===s&&(l=u.props.children),p(FC,S(b({},u.props),{isActive:d===s,onClick:i,onDelete:o}))}),a=c.exports.useMemo(()=>{switch(n){case"TOP":return Gl;case"LEFT":return LC;default:return Gl}},[n]);return w("div",{className:"tabs",css:a,children:[p("ol",{className:"tab-list",children:r}),p("div",{className:"tab-content",children:l})]})}var Rn=c.exports.memo(OC);function Zl({direction:e,onClick:t}){return p("div",{onClick:t,css:P`
        display: flex;
        position: absolute;
        top: calc(50% - 20px);
        ${e==="right"?"right: 25px":"left: 25px"};
        height: 40px;
        width: 40px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        border: none;
        transition: transform ease-in 0.1s;
        background-color: #f7f7f7;

        &:hover {
          transform: scale(1.1);
          background-color: #607d8b !important;
          color: white;
        }
        img {
          transform: translateX(${e==="left"?"-2":"2"}px);
          &:focus {
            outline: 0;
          }
        }
      `,children:p(Dp,{style:{transform:`scaleX(${e==="right"?"-1":"1"})`}})})}const $C=.45;function HC({children:e,loop:t=!1,defaultIndex:n=0,onChange:o=()=>null}){const[s,{width:i}]=Tr(),[l,r]=c.exports.useState(0);c.exports.useEffect(()=>{r(n)},[n]);const a=c.exports.useMemo(()=>c.exports.Children.map(e,h=>p("div",{css:P`
              width: ${i}px;
              height: 100%;
            `,children:h},h.key)),[e,i]),u=c.exports.useCallback(()=>{r(h=>{if(a&&h===a.length-1)return o(h),t?0:h;const m=h+1;return o(m),m})},[a,t,o]),d=c.exports.useCallback(()=>{r(h=>{if(h===0)return o(h),t?0:h;const m=h-1;return o(m),m})},[t,o]);return!i&&!a?null:w("div",{css:P`
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: block;
      `,ref:s,children:[p("div",{css:P`
          transform: translateX(-${i*l}px);
          transition: transform ease-out ${$C}s;
          height: 100%;
          width: ${i*(a?a.length:1)}px;
          display: flex;
        `,children:a}),l!==0&&p(Zl,{direction:"left",onClick:d}),a&&l!==a.length-1&&p(Zl,{direction:"right",onClick:u})]})}var hd=c.exports.memo(HC);const zC=P`
  display: flex;
  flex-direction: row;
  border-top: 0.55px solid rgb(240, 240, 240);
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  p {
    margin: 0;
    text-align: right;
    width: 100%;
    line-height: 22px;
    padding: 0px 10px;
  }
`,VC=P`
  width: 100%;
  position: relative;
  .slider {
    height: 180px;
    width: 100%;
    padding: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .slider p {
    width: 100%;
    margin: 0 auto;
    display: block;
    position: relative;
    text-align: center;
  }
  .slider svg polygon {
    fill: gray !important;
  }
  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 36px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }
`;function fd(e){const{molecules:t,onChange:n=()=>null,index:o}=e,[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{const r=o&&o<t.length?o:0;t&&t.length>0&&i(r)},[o,t]);const l=c.exports.useCallback(r=>{i(r),n(r)},[n]);return w("div",{children:[p("div",{css:zC,children:w("p",{children:[t&&t.length>0&&`${+(s+1)} / ${t.length}`," "]})}),p("div",{css:VC,children:p(hd,{defaultIndex:s,onChange:l,children:t==null?void 0:t.map((r,a)=>{var u;return w("div",{className:"slider",children:[p("div",{children:r.molfile&&p(Rp,{id:`molSVG${a}`,width:120,molfile:r.molfile})}),w("p",{children:[p(Ip,{mf:r.mf})," - ",(u=r.mw)==null?void 0:u.toFixed(2)]})]},r.key)})})})]})}const jC=P`
  .molecule-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .title {
      padding: 0px 10px;
      width: 100%;
      text-align: center;
    }

    .molecule-selection-container {
      width: 450px;
      display: block;
      margin: 0 auto;
    }

    .newSumText {
      margin-top: 15px;
      padding: 0px 10px;
      width: 100%;

      text-align: center;
    }
  }

  .empty {
    width: 100%;
    padding: 20%;
    text-align: center;
  }
`;function BC(e){const[t,n]=c.exports.useState(),{setFieldValue:o,errors:s,values:i}=pe(),{molecules:l,activeTab:r}=$(),a=Ea(r),u=c.exports.useMemo(()=>a&&l&&l.length>0&&t!==void 0&&l[t].atoms[a]?l[t].atoms[a]:0,[t,a,l]),d=c.exports.useCallback(m=>{n(m),o(e.name,l[m])},[l,e.name,o]);c.exports.useEffect(()=>{if(l&&l.length>0){const m=i[e.name]?l.findIndex(g=>g.key===i[e.name].key):-1;d(m!==-1?m:0)}},[l,e.name,d,i]);const h=c.exports.useCallback(m=>{d(m)},[d]);return p("div",{css:jC,children:a&&l&&l.length>0?w("div",{className:"molecule-container",children:[p("p",{className:"title",children:"Select a molecule as reference!"}),w("div",{className:"molecule-selection-container",children:[p(fd,{index:t,molecules:l,onChange:h}),w("p",{className:"newSumText",children:["New sum for ",a," will be ",u,"!"]})]})]}):p("p",{className:"empty",style:{color:s[e.name]?"red":"black"},children:"Add a molecule first from Structure panel to select as a reference!"})})}const XC=P`
  width: 450px;
  height: 400px;
  .header {
    display: flex;
    padding: 10px;
    span {
      font-size: 14px;
      flex: 1;
    }
  }

  .tab-content {
    flex: 1;
  }

  .manual-container {
    padding: 30px 5px;

    .input {
      width: 80% !important;
      height: 36px;
      margin: 0 auto;
    }
    .input Input {
      padding: 5px;
      text-align: center;
    }
  }

  .footer-container {
    button {
      width: 20%;
      color: white;
      background-color: gray !important;
    }
    button:hover {
      border: 1px solid gray;
      color: gray;
      background-color: white !important;
    }
  }
`;function md({onSave:e,onClose:t,header:n,sumOptions:o}){const{current:{display:{general:s,panels:i}}}=ce(),[l,r]=c.exports.useState("auto"),a=c.exports.useRef(null),u=c.exports.useCallback(g=>{g.key==="Enter"&&a.current.submitForm()},[]),d=c.exports.useCallback(g=>{r(g.tabid)},[]);c.exports.useEffect(()=>{if(o.sumAuto&&!(s==null?void 0:s.hideSetSumFromMolecule)&&!(i==null?void 0:i.structuresPanel)){r("auto");const{mf:g,moleculeKey:x}=o;a.current.setValues({sum:null,molecule:x&&g?{mf:g,key:x}:null})}else r("manual"),a.current.setValues({sum:o.sum,molecule:null})},[s==null?void 0:s.hideSetSumFromMolecule,i==null?void 0:i.structuresPanel,o]);const h=c.exports.useCallback(g=>{switch(l){case"auto":{const{molecule:{mf:x,key:y}}=g;e({sumAuto:!0,mf:x,moleculeKey:y});break}case"manual":{const{sum:x}=g;e({sum:x,sumAuto:!1});break}default:return}t()},[t,e,l]),m=c.exports.useMemo(()=>{switch(l){case"auto":return ee({molecule:ee().required()});case"manual":return ee({sum:ae().required()});default:return null}},[l]);return w("div",{css:[ht,XC],children:[w("div",{className:"header handle",children:[p("span",{children:n}),p(me,{onClick:t})]}),p("div",{className:"tab-content",children:p(re,{ref:a,onSubmit:h,initialValues:{sum:null,molecule:null},validationSchema:m,children:w(Rn,{activeTab:l,onClick:d,children:[!(s==null?void 0:s.hideSetSumFromMolecule)&&!(i==null?void 0:i.structuresPanel)&&p(Ne,{tablabel:"Auto",tabid:"auto",children:p(BC,{name:"molecule"})}),p(Ne,{tablabel:"Manual",tabid:"manual",children:p("div",{className:"manual-container",children:p(W,{name:"sum",type:"number",placeholder:"Enter the new value",onKeyDown:u})})})]})})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:()=>a.current.submitForm(),className:"btn",children:"Set"})})]})}const YC=P`
  background-color: transparent;
  border: none;
  height: 100%;
  svg {
    fill: green;
    font-size: 16px;
  }
`;function GC(e){const{className:t="",disabled:n=!1,popupPlacement:o="left",popupTitle:s="Save",onClick:i}=e;return p("div",{className:t,children:p(we,{title:s,popupPlacement:o,children:p("button",{css:YC,type:"button",onClick:i,disabled:n,className:t,children:p(Np,{})})})})}var Ki=c.exports.memo(GC);const ZC=P`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 0.55px solid rgb(240, 240, 240);

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }
  button:disabled {
    opacity: 0.6;
  }
`;function WC({onClose:e,onSave:t}){return w("div",{css:ZC,children:[p(me,{onClick:e,popupTitle:"close Preferences"}),p(Ki,{onClick:t,popupTitle:"save Preferences"})]})}var In=c.exports.memo(WC);function UC(e,t){const{onSave:n=()=>null,value:o,type:s="text",style:i,onEditStart:l=()=>null,editStatus:r=!1}=e,[a,u]=c.exports.useState();c.exports.useEffect(()=>{u(r)},[r]),c.exports.useImperativeHandle(t,()=>({startEdit:()=>{u(!0)},closeEdit:()=>{u(!1)}}));const d=c.exports.useCallback(m=>{m.target.classList.contains("editable-column")||(u(!1),window.removeEventListener("mousedown",d))},[]),h=c.exports.useCallback((m,g=null)=>{m?(window.addEventListener("mousedown",d),l(g),u(m)):(["Enter","Tab"].includes(g.key)&&n(g),["Enter","Tab","Escape"].includes(g.key)&&(u(m),window.removeEventListener("mousedown",d)))},[d,l,n]);return F("div",{style:b({display:"table",width:"100%",height:"100%"},i),onDoubleClick:m=>h(!0,m),children:[!a&&f("span",{style:{display:"table-cell",verticalAlign:"middle"},children:o}),a&&f("div",{style:{display:"table-cell",verticalAlign:"middle"},children:f(kt,{enableAutoSelect:!0,className:"editable-column",value:o,type:s,onKeyDown:m=>h(!1,m)})})]})}var rt=c.exports.forwardRef(UC);const KC=P`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 0px;
  margin: 0px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
  padding: 2px;
  background-color: white;
  width: 150px;
  pointer-events: all;

  button {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid #f0f0f0;
    font-size: 11px;
    padding: 5px;
    text-align: left;
    outline: none;
  }
  button:hover {
    background-color: #fafafa;
    outline: none;
  }

  button:active {
    background-color: #eaeaea;
    outline: none;
  }

  button:last-of-type {
    border: none;
  }
`;function qC({context:e},t){const[n,o]=c.exports.useState({left:0,top:0}),{rootRef:s,elementsWraperRef:i}=ji(),[l,r]=c.exports.useState(),[a,u]=c.exports.useState(),[d,h]=c.exports.useState(null),m=c.exports.useRef();c.exports.useEffect(()=>(m.current=document.createElement("div"),i&&i.appendChild(m.current),()=>{m.current&&i&&i.removeChild(m.current)}),[i]);const g=y=>{y.preventDefault(),h(y.target.parentElement),u(!0);const C=y.clientX,v=y.clientY,k=window.innerWidth,E=window.innerHeight,T=150,M=0,I=k-C>T;let N=!I,A=E-v>M;const D=!A;I&&(N=`${C+5}px`),N&&(N=`${C-T-5}px`),A&&(A=`${v+5}px`),D&&(A=`${v-M-5}px`),o({left:N,top:A})};c.exports.useImperativeHandle(t,()=>({handleContextMenu:(y,C)=>{r(C),g(y)}}));const x=c.exports.useCallback((y,C)=>{y.preventDefault(),C(l),u(!1)},[l]);return c.exports.useEffect(()=>{const y=C=>{d&&C.target.parentElement&&!C.target.parentElement.isSameNode(d)&&a&&u(!1)};return s&&s.addEventListener("click",y),()=>{s&&s.removeEventListener("click",y)}},[a,t,s,d]),a?m.current&&Ko.exports.createPortal(e&&p("div",{ref:t,css:[KC,n],children:e.map((y,C)=>p("button",{type:"button",onClick:v=>x(v,y.onClick),children:y.label},C))}),m.current):null}var Wt=c.exports.forwardRef(qC);function JC({headerGroups:e}){return f("thead",{children:e.map(t=>f("tr",S(b({},t.getHeaderGroupProps()),{children:t.headers.map(n=>F("th",S(b({},n.getHeaderProps(n.getSortByToggleProps())),{style:n.style,children:[n.render("Header"),f("span",{children:n.isSorted?n.isSortedDesc?" \u25BC":" \u25B2":""})]}),n.getHeaderProps().key))}),t.getHeaderGroupProps().key))})}var QC=c.exports.memo(JC);function ek(e){const t=e.original.id;return t?t instanceof Array?t:[String(t)]:[""]}function tk(e,t){const{row:n,highlightedSource:o=ue.UNKNOWN,onContextMenu:s}=e,i=c.exports.useMemo(()=>({type:o,extra:n.original}),[o,n]),l=ie(ek(n),i);return c.exports.useEffect(()=>()=>{l.hide()},[]),c.exports.useMemo(()=>p("tr",S(b(b({ref:t,onContextMenu:s,css:l.isActive?EC:Object.prototype.hasOwnProperty.call(n.original,"isConstantlyHighlighted")&&n.original.isConstantlyHighlighted===!0?AC:null},n.getRowProps()),l.onHover),{children:n.cells.map(r=>{const{style:a,padding:u}=r.column;return r.isRowSpanned?null:p("td",S(b({rowSpan:r.rowSpan},r.getCellProps()),{onContextMenu:d=>(d.preventDefault(),!1),style:b({padding:u},a),children:r.render("Cell")}),r.key)})}),n.getRowProps().key),[l.isActive,l.onHover,s,t,n])}var nk=c.exports.forwardRef(tk);const gd=c.exports.createContext(null),ok=gd.Provider;function sk(){const e=c.exports.useContext(gd);if(!e)throw new Error("react table context was not found ");return e}function ik(e){e.useInstance.push(lk)}function lk(e){const{allColumns:t}=e;let n=[];t.forEach(o=>{const{id:s,enableRowSpan:i}=o;i!==void 0&&i!==!1&&n.push({id:s,cellValue:null,cellIndex:0})}),Object.assign(e,{rowSpanHeaders:n})}function rk(e,t,n,o){const s=e[t];for(let i=0;i<s.allCells.length;i++){const l=s.allCells[i],r=n.find(a=>a.id===l.column.id);if(r!==void 0){const a=o?`${l.value}-${s.original[o]}`:l.value;r.cellValue===null||r.cellValue!==a?(l.isRowSpanned=!1,r.cellValue=a,r.cellIndex=t,l.rowSpan=1):(e[r.cellIndex].allCells[i].rowSpan++,l.isRowSpanned=!0)}}}const ak={table:e=>{if(e)return{position:"sticky",top:0}}},ck=c.exports.forwardRef(function(t,n){const{data:o,columns:s,highlightedSource:i,context:l=null,onScroll:r,approxItemHeight:a=40,enableVirtualScroll:u=!1,groupKey:d}=t,h=c.exports.useRef(null),{index:m}=sk(),{getTableProps:g,getTableBodyProps:x,headerGroups:y,rows:C,prepareRow:v,rowSpanHeaders:k}=zn.exports.useTable({columns:s,data:o},zn.exports.useSortBy,ik),E=c.exports.useCallback((M,I)=>{Xt(M)||(M.preventDefault(),h.current.handleContextMenu(M,I.original))},[h]),T=u?C.slice(m.start,m.end):C;return w("div",S(b({ref:n,className:"table-container",style:{overflowY:"auto",position:"relative",height:"100%"}},u&&{onScroll:r}),{children:[u&&p("div",{style:{height:a*o.length,position:"absolute",width:"100%",pointerEvents:"none"}}),w("table",S(b({},g()),{css:dd,style:ak.table(u),children:[p(QC,{headerGroups:y}),p("tbody",S(b({},x()),{children:T.map((M,I)=>(v(M),rk(C,u?I+m.start:I,k,d),p(nk,S(b({row:M},M.getRowProps()),{onContextMenu:N=>E(N,M),highlightedSource:i}),M.key)))}))]})),p(Wt,{ref:h,context:l})]}))});function uk(e){const{data:t,approxItemHeight:n=40,groupKey:o}=e,s=c.exports.useRef(null),[i,{height:l}]=Tr(),r=id([i,s]),[a,u]=c.exports.useState({offsetHeight:0,scrollHeight:0,numberOfVisibleRows:0,index:{start:0,end:0}});c.exports.useEffect(()=>{if(r.current){const{scrollHeight:x}=r.current,y=Math.ceil(l/n);u(C=>S(b({},C),{offsetHeight:l,scrollHeight:x,numberOfVisibleRows:y,index:{start:0,end:y+1}}))}},[n,r,l]);const d=c.exports.useCallback((x,y)=>{const C=t[x];if(C.index&&o)switch(y){case-1:{let v=x-1;for(;v>0;){if(t[v][o]!==C[o])return v+1;v--}return x}case 1:{let v=x+1;for(;v<t.length;){if(t[v][o]!==C[o])return v-1;v++}return x}default:return x}return x},[t,o]),h=c.exports.useCallback((x,y)=>{const C=x-y,v=C>=t.length?C:x;return d(v,-1)},[t.length,d]),m=c.exports.useCallback((x,y)=>{const C=x+y,v=C>=t.length?t.length-1:C;return d(v,1)},[t.length,d]),g=c.exports.useCallback(()=>{if(s.current&&a){const{scrollTop:x}=s.current,{numberOfVisibleRows:y,index:C}=a,v=Math.ceil(x/n),k=h(v,y);if(v!==C.start){const E=m(v,y);u(S(b({},a),{index:{start:k,end:E+1}}))}}},[n,m,h,a]);return p(ok,{value:a,children:p(ck,b({onScroll:g,ref:r},e))})}var fo=c.exports.memo(uk);function gs(e,t){const{index:n,Header:o=()=>null,extraParams:s,accessor:i=null,Cell:l=null,sortType:r="basic",enableRowSpan:a=!1,style:u={},id:d}=t||{};e.push(b(S(b(b(b({index:n},b({},d&&{id:d})),b({},i?{accessor:i}:{})),b({},l?{Cell:l}:{})),{Header:o,sortType:r,enableRowSpan:a,style:u}),s))}const dk=`url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g id="Rounded_Rectangle_33_copy_4_1_"><path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/></g></svg>')`,Me=c.exports.forwardRef(function(t,n){const{data:o,style:s={width:100},onChange:i=()=>null,defaultValue:l,name:r="",className:a=""}=t,u=c.exports.useCallback(h=>{let m=h.target.value;isNaN(m)||(m=Number(m)),i(m)},[i]),d=P`
    padding: 0px 5px;
    border: 0.55px solid #cacaca;
    font-size: 14px;
    width: ${s.width?Number(s.width)-5:115}px;
    margin: 0;
    height: 100%;
    background: ${dk} no-repeat right white;
    -webkit-appearance: none;
    background-position-x: calc(100% - 5px);
    background-size: 15px 15px;
    border-radius: 5px;
    margin: 0px 5px;
    align-self: center;
    :focus,
    input:focus {
      outline: none;
    }
  `;return p("select",{ref:n,css:d,name:r,onChange:u,defaultValue:l,className:a,style:s,children:o.map(h=>p("option",{value:h.value,children:h.label},`${h.key}`))})}),Wl={container:{height:"100%",backgroundColor:"white"},label:{textAlign:"center",width:"100%",fontSize:"11px",padding:"5px",color:"gray"}};function Ut(){return f("div",{style:Wl.container,children:f("p",{style:Wl.label,children:"No Data"})})}const pk={marginLeft:10,marginRight:10,border:"none"};function hk({activeTab:e,data:t,preferences:n}){const o=Y(),s=c.exports.useCallback((h,m)=>{h.preventDefault(),h.stopPropagation();const g=m.original;o({type:rs,integralID:g.id})},[o]),i=c.exports.useCallback((h,m)=>{const g=S(b({},m.original),{kind:h});o({type:Ac,payload:{data:g}})},[o]),l=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:h})=>h.index+1,width:10},{index:2,Header:"From",sortType:"basic",resizable:!0,accessor:h=>h.from.toFixed(2)},{index:3,Header:"To",sortType:"basic",resizable:!0,accessor:h=>h.to.toFixed(2)},{index:6,Header:"Kind",sortType:"basic",resizable:!0,accessor:h=>h.kind,Cell:({row:h})=>f(Me,{onChange:m=>i(m,h),data:ni,style:pk,defaultValue:h.original.kind})},{index:7,style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:h})=>f("button",{type:"button",className:"delete-button",onClick:m=>s(m,h),children:f(St,{})})}],[i,s]),r=c.exports.useCallback((h,m)=>{const g={value:h.target.value,id:m.id};o({type:Gc,payload:{data:g}})},[o]),a=c.exports.useMemo(()=>pt(n.current,`formatting.panels.integrals.[${e}]`,_t),[e,n]),u=c.exports.useMemo(()=>[{showWhen:"showAbsolute",index:4,Header:"Absolute",accessor:h=>Ye(h.absolute,V(a,"absoluteFormat",_t.absoluteFormat))},{showWhen:"showRelative",index:5,id:"relative",Header:()=>{const h=e==null?void 0:e.replace(/[0-9]/g,"");return f("span",{children:`Relative ${h}`})},accessor:h=>Ye(h.integral,V(a,"relativeFormat",_t.relativeFormat)),Cell:({row:h})=>{const m=Ye(h.original.integral,V(a,"relativeFormat",_t.relativeFormat)),x=ka(h.original)?m:`[ ${m} ]`;return f(rt,{value:x,onSave:y=>r(y,h.original),type:"number"})}}],[e,a,r]),d=c.exports.useMemo(()=>{let h=[...l];for(const g of u){const m=g,{showWhen:x}=m,y=G(m,["showWhen"]);a[x]&&gs(h,y)}return h.sort((g,x)=>g.index-x.index)},[u,l,a]);return t&&t.length>0?f(fo,{data:t,columns:d}):f(Ut,{})}var fk=c.exports.memo(hk);const mk=P`
  display: flex;
  margin: 5px 0px;

.inputLabel{
  flex: 2;
  font-size: 11px;
  font-weight: bold;
  color: #232323;
}

.input {
  width: '60%',
  text-align: 'center',
}

.color{
  width: 36px;
  height: 14px;
  border-radius: 2px;
}

.swatch{
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
}
.color-popover {
  position: absolute;
  z-index: 2;
}

.cover {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
  .chrome-picker {
    border-radius: none !important;
    width: 200px !important;
    height: 60px !important;
    display: flex;


  }
  .chrome-picker > div:first-of-type {
    padding: 0px !important;

  }
  .chrome-picker > div:last-child >  div:first-of-type {
    width: 120px;

  }
  .chrome-picker > div:last-child >  div:last-child {
    display:none !important;
  }
`;function gk(e){const{label:t="Color: ",onColorChange:n=()=>null,name:o,value:s="#000000"}=e,[i,l]=c.exports.useState(!1),[r,a]=c.exports.useState(s);c.exports.useEffect(()=>{a(s)},[s]);const u=c.exports.useCallback(()=>{l(!i)},[i]),d=c.exports.useCallback(()=>{l(!1)},[]),h=c.exports.useCallback(m=>{const g=`${m.hex}${Math.round(m.rgb.a*255).toString(16)}`;a(g),n(S(b({},m),{hex:g,name:o}))},[o,n]);return w("div",{css:mk,children:[p("span",{className:"inputLabel",children:t}),w("div",{style:{flex:4},children:[w("div",{className:"swatch",onClick:u,children:[p("div",{className:"color",style:{backgroundColor:r}}),p("input",{type:"hidden",value:r,name:o})]}),i?w("div",{className:"color-popover",children:[p("div",{className:"cover",onClick:d}),p(Dr.ChromePicker,{color:{hex:r},onChangeComplete:h})]}):null]})]})}var xk=c.exports.memo(gk);function bk(e){const r=e,{onColorChange:t=()=>null,name:n}=r,o=G(r,["onColorChange","name"]),{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback(a=>{t(a),i(n,a.hex)},[n,t,i]);return f(xk,S(b({},o),{name:n,onColorChange:l,value:V(s,n)}))}var yk=c.exports.memo(bk);const As={row:{display:"flex",margin:"5px 0px",alignItems:"center"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center"}};function vk(e){const{label:t,checkControllerName:n,formatControllerName:o,disableFormat:s=!1,hideFormat:i=!1}=e,{values:l,handleChange:r,setFieldValue:a}=pe(),u=c.exports.useCallback(h=>{r(h)},[r]),d=c.exports.useCallback(h=>{a(h.target.name,h.target.checked)},[a]);return F("div",{style:As.row,children:[f("span",{style:As.inputLabel,children:t}),F("div",{style:{flex:4,display:"flex",flexDirection:"row",alignItems:"center"},children:[f("input",{type:"checkbox",style:{margin:"0px 5px"},name:n,onChange:d,checked:V(l,n,!1)}),!i&&o&&f(kt,{style:{inputWrapper:As.input},name:o,value:V(l,o,""),onChange:u,type:"text",disabled:s})]})]})}var Fe=c.exports.memo(vk);const yo={container:{display:"flex"},label:{lineHeight:2,userSelect:"none",flex:"2"},inputContainer:{flex:"4",display:"flex",justifyContent:"flex-start"},input:{height:"100%",width:"100px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"}},un=c.exports.forwardRef(({label:e,name:t,defaultValue:n=0,style:o={label:{},input:{},container:{},inputContainer:{}},onChange:s=()=>null,onInput:i=()=>null,pattern:l="^d*(.d{0,2})?$",step:r="any",min:a="any",max:u="any"},d)=>{const h=c.exports.useRef(null),m=c.exports.useCallback(g=>{if(g.target.checkValidity()){const x=Number(g.target.value===""?n:g.target.value);s(S(b({},g),{target:S(b({},g.target),{name:g.target.name,value:x})}))}else{const x=d||h;x.current.value=Number(n)}},[n,s,d]);return F("div",{style:b(b({},yo.container),o.container),children:[f("span",{style:b(b({},yo.label),o.label),children:e}),f("div",{style:b(b({},yo.inputContainer),o.inputContainer),children:f("input",{ref:d||h,name:t,style:b(b({},yo.input),o.input),type:"number",pattern:l,defaultValue:n,step:r,onChange:m,onInput:i,min:a,max:u},n)})]})});function Zs(e){const r=e,{label:t,name:n}=r,o=G(r,["label","name"]),{values:s,handleChange:i}=pe(),l=c.exports.useCallback(a=>{i(a)},[i]);return f(un,b({label:t,name:n,defaultValue:V(s,n),onChange:l},o))}function xs(){const{tabActiveSpectrum:e}=$();return c.exports.useMemo(()=>e&&Object.keys(e).length>0?Object.keys(e):[],[e])}const Fn={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},Ck=[{id:1,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:2,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function kk({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=_t,{color:a,strokeWidth:u}=r,d=G(r,["color","strokeWidth"]),h=pt(t.current,"formatting.panels.integrals");let m=e.reduce((g,x)=>(g[x]=d,g),{});m=Object.assign(m,{color:a,strokeWidth:u}),s.current.setValues(h||m)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"integrals",value:r}}),o.success("Integrals preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:Fn.container,children:F(re,{onSubmit:l,ref:s,children:[F("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:"General"}),f(yk,{name:"color"}),f(Zs,{name:"strokeWidth",label:"stroke width :",style:{label:{fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"60%",textAlign:"center",borderRadius:"5px"}},min:1,max:9,pattern:"[1-9]+"})]}),e==null?void 0:e.map(r=>F("div",{style:Fn.groupContainer,children:[f("p",{style:Fn.header,children:f(qs,{mf:r})}),Ck.map(a=>f(Fe,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id))]},r))]})})}const Sk=c.exports.memo(kk);function wk(e,t){const n=ce(),o=xs();return f(Sk,{innerRef:t,nucleus:o,preferences:n})}var Ek=c.exports.forwardRef(wk);const Ak=P`
  .sum-button {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fix-integral-toggle-btn {
    svg {
      font-size: 12px !important;
    }
  }
`;function Tk({integrals:e,info:t,activeTab:n,xDomain:o,preferences:s}){var I;const[i,l]=c.exports.useState(!1),r=Y(),a=he(),[u,d]=c.exports.useState(!1),h=c.exports.useRef(),m=c.exports.useCallback(()=>{r({type:rs,integralID:null})},[r]),g=c.exports.useCallback(()=>{a.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:m},{text:"No"}]})},[a,m]),x=c.exports.useCallback(N=>{r({type:Tc,value:N}),a.close()},[r,a]),y=c.exports.useMemo(()=>V(e,"options.sum",null),[e]),C=c.exports.useCallback(()=>{a.show(p(md,{onClose:()=>a.close(),onSave:x,header:y?`Set new Integrals Sum (Current: ${Number(y).toFixed(2)})`:"Set new Integrals Sum",sumOptions:e==null?void 0:e.options}))},[x,y,e==null?void 0:e.options,a]),v=c.exports.useCallback(()=>{d(!u)},[u]),k=c.exports.useCallback(()=>{h.current.saveSetting(),d(!1)},[]),E=c.exports.useCallback(()=>{l(!i)},[i]),T=c.exports.useCallback(N=>{r({type:au,payload:N})},[r]),M=c.exports.useMemo(()=>{function N(A,D){return D=D*1e4,A=A*1e4,D>=o[0]*1e4&&A<=o[1]*1e4||A<=o[0]*1e4&&D>=o[1]*1e4}return t.dimension===1&&(e==null?void 0:e.values)?(i?e.values.filter(D=>N(D.from,D.to)):e.values).map(D=>S(b({},D),{isConstantlyHighlighted:N(D.from,D.to)})):[]},[i,t.dimension,e,o]);return p(c.exports.Fragment,{children:w("div",{css:[Dt,Ak,u&&P`
              th {
                position: relative;
              }
            `],children:[!u&&w(ot,{counter:(I=e==null?void 0:e.values)==null?void 0:I.length,onDelete:g,deleteToolTip:"Delete All Integrals",onFilter:E,filterToolTip:i?"Show all integrals":"Hide integrals out of view",filterIsActive:i,counterFiltered:M.length,showSettingButton:!0,onSettingClick:v,children:[p(we,{title:y?`Change Integrals Sum (${Number(y).toFixed(2)})`:"Change Integrals Sum",popupPlacement:"right",children:p("button",{className:"sum-button",type:"button",onClick:C,children:p(Rr,{})})}),p(Ge,{className:"fix-integral-toggle-btn",popupTitle:"fix integral values",popupPlacement:"right",onClick:T,children:p(Ir,{})})]}),u&&p(In,{onSave:k,onClose:v}),p("div",{className:"inner-container",children:u?p(Ek,{ref:h}):p(fk,{data:M,activeTab:n,preferences:s})})]})})}const Dk=c.exports.memo(Tk),Rk={integrals:{},info:{}};function Ik(){const{xDomain:e,activeTab:t}=$(),n=ce(),{integrals:o,info:s}=ve(Rk);return p(Dk,{integrals:o,info:s,preferences:n.current,xDomain:e,activeTab:t})}function Q(e){const{title:t,className:n="",children:o,style:s}=e;return F("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{className:n,style:b({fontSize:"11px",fontWeight:"bold",color:"#232323",paddingRight:"10px",width:"max-content"},s==null?void 0:s.label),children:t}),f("div",{style:s==null?void 0:s.wrapper,children:o})]})}const Nk={from:-1,to:1,nbPoints:1024};function Mk({onClose:e=()=>null}){const t=c.exports.useRef(),{data:n}=$(),o=c.exports.useCallback(()=>{t.current.submitForm()},[]),s=c.exports.useCallback(i=>{sC(n,i,"fileName"),e()},[n,e]);return c.exports.useEffect(()=>{function i(l){const[r,a]=l.range;t.current.setValues(S(b({},t.current.values),{from:r,to:a}))}return de.on("brushEnd",i),()=>{de.off("brushEnd",i)}},[]),w("div",{css:ht,children:[w("div",{className:"header handle",children:[p("span",{children:"Export spectra as a Matrix"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:w(re,{ref:t,initialValues:Nk,onSubmit:s,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(Q,{title:"From : ",children:p(W,{name:"from",type:"number"})}),p(Q,{title:"To : ",children:p(W,{name:"to",type:"number"})})]}),p("div",{className:"row margin-10",children:p(Q,{title:"Number of Points :",className:"custom-label",children:p(W,{name:"nbPoints",type:"number"})})})]})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:o,className:"btn",children:"Export Now"})})]})}function Pk({onSubmit:e},t){const{xDomain:n}=$();return F(re,{ref:t,initialValues:{from:n[0],to:n[1],numberOfPoints:1024},onSubmit:e,children:[F("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From : ",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To : ",children:f(W,{name:"to",type:"number"})})]}),f("div",{className:"row margin-10",children:f(Q,{className:"custom-label",title:"Number of points : ",children:f(W,{name:"numberOfPoints",type:"number"})})})]})}var _k=c.exports.forwardRef(Pk);function Fk({onSubmit:e},t){const{xDomain:n}=$();return f(re,{ref:t,initialValues:{from:n[0],to:n[1]},onSubmit:e,children:F("div",{className:"row margin-10",children:[f("span",{className:"custom-label",children:"Range :"}),f(Q,{title:"From :",children:f(W,{name:"from",type:"number"})}),f(Q,{title:"To :",children:f(W,{name:"to",type:"number"})})]})})}var Lk=c.exports.forwardRef(Fk);const Ok=[{key:0,value:0,label:"Select Filter"},{key:No,value:No,label:ia},{key:Yn,value:Yn,label:ta},{key:$s,value:$s,label:ha},{key:Fs,value:Fs,label:Jr},{key:Os,value:Os,label:ca}],$k=P`
  .row {
    align-items: center;
  }

  .container {
    flex: 1;
  }

  .infoText {
    padding: 10px;
    font-size: 12px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`;function Hk({onClose:e=()=>null,nucleus:t=""}){const n=c.exports.useRef(),o=Y(),[s,i]=c.exports.useState(""),l=c.exports.useMemo(()=>{const h=Lt[t]?Object.entries(Lt[t]).map(m=>({key:m[0],value:m[0],label:m[0]}),[]):[];return Ok.concat(h)},[t]),r=c.exports.useCallback(h=>{h.preventDefault(),n.current&&n.current.submitForm()},[]),a=c.exports.useCallback(h=>{h&&(o({type:su,payload:[{name:s,options:h}]}),e())},[o,s,e]);c.exports.useEffect(()=>{function h(m){const[g,x]=m.range;n.current&&n.current.setValues(S(b({},n.current.values),{from:g,to:x}))}return de.on("brushEnd",h),()=>{de.off("brushEnd",h)}},[]);const u=c.exports.useCallback(h=>{i(h)},[]),d=c.exports.useMemo(()=>{switch(s){case No:return p(Lk,{onSubmit:a,ref:n});case Yn:return p(_k,{onSubmit:a,ref:n});default:p(re,{ref:n,initialValues:null,onSubmit:a});break}},[s,a]);return w("div",{css:[ht,$k],children:[w("div",{className:"header handle",children:[p("span",{children:"Apply filters"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content container",children:[p("p",{className:"infoText",children:"This filter will use the exclusions zones defined in the first spectrum."}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Filter :"}),p(Me,{data:l,style:{width:275,height:30,margin:0},onChange:u})]}),d]}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:r,className:"btn primary",children:"Apply"}),p("button",{type:"button",onClick:e,className:"btn",children:"Close"})]})]})}function zk(){const e=he(),t=Y(),n=c.exports.useCallback(()=>{t({type:ze}),e.show(p(Hk,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:550,height:250})},[e,t]),o=c.exports.useCallback(()=>{t({type:ze}),e.show(p(Mk,{}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,t]);return w("div",{css:Dt,children:[w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,children:[p(ke,{popupTitle:"Add Filter",onClick:n,children:p(Mp,{style:{fontSize:"18px"}})}),p(ke,{popupTitle:"Export spectra as a Matrix",onClick:o,children:p(Pp,{})})]}),p("div",{className:"inner-container"})]})}function Vk(e){const{onClose:t=()=>null,selectedMolecule:n}=e,[o,s]=c.exports.useState(null),i=Y();c.exports.useEffect(()=>{s(n?n.molfile:null)},[n]);const l=c.exports.useCallback(u=>{var h,m;const d=(m=(h=/(?<s>M {2}V30 BEGIN BOND)(?<mol>.*?)(?<e>M {2}V30 END BOND)/gs.exec(u))==null?void 0:h.groups)==null?void 0:m.mol;s((d==null?void 0:d.trim())?u:null)},[s]),r=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(()=>{n?(i({type:Ai,molfile:o,key:n.key}),t("replace")):(i({type:Ei,molfile:o}),t("new"))},[i,n,o,t]);return w("div",{css:ht,children:[p(_p,{initialMolfile:n==null?void 0:n.molfile,svgMenu:!0,fragment:!1,onChange:l}),w("div",{className:"footer-container",children:[p("button",{type:"button",className:"btn",onClick:a,disabled:!o,children:"Save"}),p("button",{type:"button",className:"btn",onClick:r,children:"Close"})]})]})}const jk=P`
  .menu {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 0px;
    margin: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99999;
    padding: 2px;
    background-color: white;

    button:hover {
      background-color: #fafafa;
    }
  }

  .menu-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-item {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid whitesmoke;
    height: 35px;
    outline: outline;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;

    svg {
      display: inline-block;
    }

    :focus {
      outline: none !important;
    }
    span {
      font-size: 10px;
      padding: 0px 10px;
    }
  }
`;function Bk({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function Xk({items:e,boxBounding:t,onClick:n}){return p("div",{className:"menu",style:{transform:`translate(${t.width}px, -${t.height}px) `},children:e==null?void 0:e.map(o=>p(Bk,S(b({},o),{onClick:()=>n(o)}),o.id))})}function Yk({style:e,component:t,toolTip:n="",className:o,items:s=[],onClick:i=()=>null}){var m;const l=c.exports.useRef(null),[r,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{a(!1)},[]),d=c.exports.useCallback(()=>{a(g=>!g)},[]),h=c.exports.useCallback(g=>{a(!1),i(g)},[i]);return w("div",{style:{height:"auto"},css:jk,children:[p("button",{ref:l,type:"button",css:e,onClick:d,className:o,style:{boxSizing:"border-box"},children:p(we,{title:n,popupPlacement:"right",children:t})}),r&&p(Xk,{items:s,boxBounding:(m=l.current)==null?void 0:m.getBoundingClientRect(),onClick:h}),r&&p("div",{className:"menu-cover",onClick:u})]})}function qi(e,t,n){const{power:o=2,format:s=Gk}=n||{};let i=[];for(let l=e;l<=t;l++){const r=o**l;i.push({key:r,label:s(r),value:r})}return i}function Gk(e){return e>=1024*1024?`${e/(1024*1024)}M`:e>=1024?`${e/1024}K`:e}function Le(n){var o=n,{value:e=""}=o,t=G(o,["value"]);return f("div",S(b({},t),{dangerouslySetInnerHTML:{__html:e.replace(/(?<isotope>[0-9]+)/g,"<sup>$<isotope></sup>")}}))}const Ul={container:{backgroundColor:"#fd000c",borderRadius:"5px",padding:"0.4rem"},text:{color:"white",margin:"0.5px",fontSize:"0.9em",listStyle:"inside"}},Zk=e=>{const t=[];function n(o){Object.keys(o).forEach(s=>{typeof o[s]=="object"?n(o[s]):t.push(o[s])})}return n(e),t};function xd({style:e}){const{errors:t,isValid:n}=pe(),o=c.exports.useMemo(()=>Zk(t),[t]);return n?f("div",{}):f("ul",{style:b(b({},Ul.container),e==null?void 0:e.container),children:o.map((s,i)=>f("li",{style:b(b({},Ul.text),e==null?void 0:e.text),children:s},i))})}const rn=function(t){const u=t,{name:n="",value:o,onChange:s=()=>null}=u,i=G(u,["name","value","onChange"]),{values:l,setFieldValue:r}=pe(),a=c.exports.useCallback(d=>{s(d),r(n,d)},[n,s,r]);return c.exports.useEffect(()=>{o&&r(n,o)},[n,r,o]),f(Me,b({name:n,defaultValue:o||V(l,n),onChange:a},i))},Wk=P`
  .row {
    align-items: center;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 160px;
    font-weight: 500;
  }

  .nucleus-label {
    padding: 0 10px;
    color: black;
    font-weight: 700;

    &.disabled {
      opacity: 0.5;
      color: black;
    }
  }
  .warning {
    color: #c40000;
    font-weight: bold;
    font-size: 13px;
    text-align: justify;
    margin-top: 30px;
  }

  .warning-container {
    margin-top: 5px;
    display: flex;
    input {
      margin: 5px 5px 5px 0;
    }
  }

  button[disabled],
  button[disabled]:hover {
    opacity: 0.5;
    color: black;
  }

  .middle-x {
    padding: 0 10px;
  }

  .group-label {
    width: 100%;
    display: block;
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
    font-weight: 600;
    color: #005d9e;
  }
`,Uk=qi(12,19),Kl=qi(10,10,{format:e=>e}),Kk=ee().shape({frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width"),nbPoints:ae().integer().required().label("1D Number Of Points")}),"2d":ee({nbPoints:ee({x:ae().integer().required().label("2D Number Of Points"),y:ae().integer().required().label("2D Number Of Points")})}),spectra:ee({proton:Mn(),carbon:Mn(),cosy:Mn(),hsqc:Mn(),hmbc:Mn()}).test("check-options","You must check one of the options to start prediction",e=>!!Object.values(e).includes(!0))});function qk({onClose:e=()=>null,molfile:t}){const n=c.exports.useRef(),o=Y(),s=le(),[i,l]=c.exports.useState(!1),[r,a]=Jy("nmrium-prediction-preferences"),u=c.exports.useCallback(()=>{n.current.submitForm()},[]),d=c.exports.useMemo(()=>{const y=r,{isApproved:g}=y,x=G(y,["isApproved"]);return l(g),Object.assign(Ha,x)},[r]),h=c.exports.useCallback(async g=>{a(S(b({},g),{isApproved:i})),o({type:vt,isLoading:!0});const x=Object.entries(g.spectra).reduce((C,[v,k])=>(k&&C.push(v),C),[]).join(" , "),y=await s.showLoading(`Predict ${x} in progress`);o({type:ps,payload:{mol:t,options:g}}),y(),e()},[s,o,i,t,e,a]),m=c.exports.useCallback(g=>{l(g.target.checked)},[]);return w("div",{css:[ht,Wk],children:[w("div",{className:"header handle",children:[p("span",{children:"Prediction of NMR spectrum"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"inner-content",children:[w(re,{ref:n,initialValues:d,validationSchema:Kk,onSubmit:h,children:[p(xd,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Spectrometer Frequency :"}),p(rn,{data:za,style:{width:290,height:30,margin:0},name:"frequency"})]}),p("span",{className:"group-label",children:"1D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"1H",className:"custom-label"}),p(Q,{title:"From",children:p(W,{name:"1d.1H.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p(Le,{value:"13C",className:"custom-label"}),p(Q,{title:"From",children:p(W,{name:"1d.13C.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(rn,{data:Uk,name:"1d.nbPoints",style:{width:290,height:30,margin:0}})]}),p("span",{className:"group-label",children:"2D Options "}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Number of Points : "}),p(rn,{data:Kl,name:"2d.nbPoints.x",style:{margin:0,height:30}}),p("span",{className:"middle-x",children:" X "}),p(rn,{data:Kl,name:"2d.nbPoints.y",style:{margin:0,height:30}})]}),p("div",{className:"row margin-10",children:p("span",{className:"group-label",children:"Spectra "})}),w("div",{className:"row margin-10 padding-h-10",style:{justifyContent:"space-between"},children:[w("div",{className:"row",children:[p(mt,{name:"spectra.proton"}),p(Le,{value:"1H",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(mt,{name:"spectra.carbon"}),p(Le,{value:"13C",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(mt,{name:"spectra.cosy"}),p(Le,{value:"COSY",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(mt,{name:"spectra.hsqc"}),p(Le,{value:"HSQC",className:"nucleus-label"})]}),w("div",{className:"row",children:[p(mt,{name:"spectra.hmbc"}),p(Le,{value:"HMBC",className:"nucleus-label"})]})]})]}),p("p",{className:"warning",children:"In order to predict spectra we are calling an external service and the chemical structure will leave your browser! You should never predict spectra for confidential molecules."}),w("div",{className:"warning-container",children:[p(ho,{onChange:m,checked:i},String(i)),p("p",{children:"I confirm that the chemical structure is not confidential."})]})]}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:u,className:"btn",disabled:!i,children:"Predict spectrum"})})]})}const Jk=P`
  display: flex;
  flex-direction: row;
  border-bottom: 0.55px solid rgb(240, 240, 240);
  padding: 0px 5px;

  button svg {
    fill: #4e4e4e;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
  }

  p {
    margin: 0;
    text-align: right;
    width: 100%;
    line-height: 22px;
    padding: 0px 10px;
  }
`,Qk=[{id:"molfile",icon:p(ei,{}),label:"Copy as molfile"},{id:"png",icon:p(Nr,{}),label:"Copy as PNG"},{id:"svg",icon:p(Mr,{}),label:"Export as SVG"}];function eS({currentIndex:e,molecules:t,onMoleculeIndexChange:n=()=>null,onOpenMoleculeEditor:o=()=>null,actionsOptions:s={}}){const i=le(),l=Y(),r=he(),a=je(),u=c.exports.useCallback(()=>{ld(`molSVG${e}`,"molFile")},[e]),d=c.exports.useCallback(()=>{rd(`molSVG${e}`),i.success("MOL copied as PNG to clipboard")},[i,e]),h=c.exports.useCallback(()=>{t[e]&&ms(t[e].molfile).then(C=>{C?i.success("MOLFile copied to clipboard"):i.error("copied not completed")})},[i,e,t]),m=c.exports.useCallback(({id:C})=>{switch(C){case"molfile":h();break;case"png":d();break;case"svg":u();break}},[h,d,u]),g=c.exports.useCallback(()=>{navigator.clipboard.readText().then(C=>{l({type:Ei,molfile:C})})},[l]),x=c.exports.useCallback(()=>{var C;((C=t[e])==null?void 0:C.key)&&(n(0),l({type:lc,payload:{key:t[e].key,assignmentData:a}}))},[t,e,n,l,a]),y=c.exports.useCallback(()=>{r.show(p(qk,{molfile:t[e]}),{position:te.TOP_CENTER,enableResizing:!0,width:600})},[r,t,e]);return w("div",{css:Jk,children:[!s.hideExport&&p(Yk,{component:p(qo,{}),toolTip:"Export As",items:Qk,onClick:m}),!s.hidePast&&p(we,{title:"Paste molfile",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:g,children:p(Fp,{})})}),!s.hideAdd&&p(we,{title:"Add Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:o,"data-test-id":"panel-structures-button-add",children:p(Cn,{})})}),!s.hideDelete&&p(we,{title:"Delete Molecule",popupPlacement:"left",children:p("button",{className:"bar-button",type:"button",onClick:x,children:p(St,{})})}),!s.hidePredict&&t&&t.length>0&&p(ke,{popupTitle:"Predict Spectra",popupPlacement:"left",onClick:y,children:p(Pr,{})}),w("p",{children:[t&&t.length>0&&`${+(e+1)} / ${t.length}`," "]})]})}function ql(e,t,n){if(t.length>0&&Object.keys(e).length>0){const o=n==="x"?0:n==="y"?1:void 0;if(o!==void 0){if(t[o]===e.atomLabel)return{oclIDs:[e.oclID],nbAtoms:e.nbAtoms};if(t[o]==="H")return{oclIDs:e.hydrogenOCLIDs,nbAtoms:e.nbAtoms*e.nbHydrogens}}else return{oclIDs:[e.oclID].concat(e.hydrogenOCLIDs),nbAtoms:e.nbAtoms+e.nbAtoms*e.nbHydrogens}}return{oclIDs:[],nbAtoms:0}}function Xo(e,t){let n=e.find(s=>s.id===t),o;if(!n){for(const s of e)if(o=s.signals.findIndex(i=>i.id===t),o>=0){n=s;break}}return{datum:n,signalIndex:o}}function tS(e,t,n){let o=[];for(let s in e.assignment.assignment){let i,l,r=!1;if((e.assignment.assignment[s].x||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].x);const a=Xo(n,s);i=a.datum,l=a.signalIndex,r=!0}if((e.assignment.assignment[s].y||[]).some(a=>t.includes(a))){o=o.concat(e.assignment.assignment[s].y);const a=Xo(n,s);i=a.datum,l=a.signalIndex,r=!0}if(i&&(o.push(i.id),l!==void 0&&o.push(i.signals[l].id)),r)break}return o}function nS(e,t){const n=e.assignment.isOnHover?e.assignment.assignment[e.assignment.onHoverID]:null,o=e.assignment.isOnHover?e.assignment.onHoverAxis:null;return n?t===B.DM_1D?n.x||[]:t===B.DM_2D?o?o==="x"?n.x||[]:o==="y"?n.y||[]:(n.x||[]).concat(n.y||[]):(n.x||[]).concat(n.y||[]):[]:[]}function oS(e,t){let n=e?e.slice():[];const{nbAtoms:o,oclIDs:s}=t;let i=o;return s.forEach(l=>{n.includes(l)?(i*=-1,n=n.filter(r=>r!==l)):n.push(l)}),[n,i]}function sS({displayerMode:e,activeTab:t,zones:n,ranges:o}){const s=le(),i=Y(),l=Dn(),r=je(),a=ct(r.assignment.activeID!==void 0?r.assignment.activeID:zu),[u,d]=c.exports.useState([]),[h,m]=c.exports.useState(null),[g,x]=c.exports.useState([]);c.exports.useEffect(()=>{if(t){const I=t.split(",");I.length===1?x([t.replace(/[0-9]/g,"")]):I.length===2&&x(I.map(N=>N.replace(/[0-9]/g,"")))}},[t]),c.exports.useEffect(()=>{h&&(h==="show"?l.dispatch({type:"SHOW",payload:{convertedHighlights:u}}):h==="hide"&&(l.dispatch({type:"HIDE",payload:{convertedHighlights:u}}),d([])),m(null))},[h,u,l]);const y=c.exports.useMemo(()=>{if(n||o){if(e===B.DM_1D&&o&&o.values)return o.values;if(e===B.DM_2D&&n&&n.values)return n.values}return[]},[e,o,n]),C=c.exports.useMemo(()=>{const I={x:[],y:[]};for(let N in r.assignment.assignment)r.assignment.assignment[N].x&&I.x.push(...r.assignment.assignment[N].x),r.assignment.assignment[N].y&&I.y.push(...r.assignment.assignment[N].y);return I},[r.assignment]),v=c.exports.useMemo(()=>C.x.concat(C.y),[C.x,C.y]),k=c.exports.useMemo(()=>{let I=[];return l.highlight.highlighted.forEach(N=>{var D;if(r.assignment.assignment[N]){const{datum:R}=Xo(y,N),O=(D=l.highlight.sourceData)==null?void 0:D.type;R&&(O===ue.ZONE||O===ue.RANGE)&&(I=I.concat(R.signals.map(L=>zi(r,[L.id]).length>0?L.diaIDs:[]).flat()))}}),nS(r,e).concat(I)},[r,y,e,l.highlight]),E=c.exports.useCallback((I,N)=>oS(I,N),[]),T=c.exports.useCallback((I,N)=>{var A;if(!Xt(N)&&a.isActive){const D=ql(I,g,a.activeAxis);if(D.nbAtoms>0){D.oclIDs.forEach(L=>{a.toggle(L)});const{datum:R,signalIndex:O}=Xo(y,a.id);if(R){let L=[],H=0;O===void 0?e===B.DM_1D?[L,H]=E(R.diaIDs||[],D):e===B.DM_2D&&([L,H]=E(R[a.activeAxis].diaIDs||[],D)):((A=R.signals)==null?void 0:A[O])&&(e===B.DM_1D?[L,H]=E(R.signals[O].diaIDs||[],D):e===B.DM_2D&&([L,H]=E(R.signals[O][a.activeAxis].diaIDs||[],D))),e===B.DM_1D?i({type:Yc,payload:{nbAtoms:H,rangeData:R,diaIDs:L,signalIndex:O}}):e===B.DM_2D&&i({type:tu,payload:{nbAtoms:H,zoneData:R,diaIDs:L,axis:a.activeAxis,signalIndex:O}})}a.onClick(a.activeAxis)}else s.info("Not assigned! Different atom type or no attached hydrogens found!")}},[a,s,y,i,e,g,E]);return{handleOnAtomHover:c.exports.useCallback(I=>{const N=ql(I,g,a.activeAxis).oclIDs;if(N.length>0){const A=tS(r,N,y);d(A),m("show")}else m("hide")},[a.activeAxis,r,y,g]),handleOnClickAtom:T,currentDiaIDsToHighlight:k,assignedDiaIDsMerged:v}}const Nt={panel:P({display:"flex",overflow:"auto",flexGrow:1,width:"100%",height:"100%",flexDirection:"column"}),innerPanel:P({display:"flex",flex:"1",flexDirection:"column",overflow:"auto"}),molecule:P({display:"flex",flex:"1"}),toolbar:P({display:"flex",borderBottom:"0.55px solid rgb(240, 240, 240)",padding:"0px 10px",justifyContent:"end",height:22}),slider:P({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:0}),items:P({display:"flex",flexDirection:"column",flex:"1 1 0%",height:"100%",minHeight:0})};function iS({zones:e,ranges:t,molecules:n,activeTab:o,displayerMode:s,onMoleculeChange:i,actionsOptions:l,children:r}){const[a,u]=c.exports.useState(0),[d,h]=c.exports.useState([]),m=Y(),g=he(),{currentDiaIDsToHighlight:x,handleOnAtomHover:y,handleOnClickAtom:C,assignedDiaIDsMerged:v}=sS({zones:e,ranges:t,activeTab:o,displayerMode:s});c.exports.useEffect(()=>{n&&h(M=>(n.length>M.length&&u(d.length),n))},[d.length,n]),c.exports.useEffect(()=>{i==null||i(d[a]||null)},[a,d,i]);const k=c.exports.useCallback((M,I)=>{m({type:Ai,molfile:I,key:M})},[m]),E=c.exports.useCallback((M=null)=>{g.show(p(Vk,{selectedMolecule:M}),{position:te.TOP_CENTER,width:700,height:500})},[g]),T=c.exports.useCallback(M=>{u(M)},[]);return w("div",{css:Nt.panel,children:[p(eS,{currentIndex:a,molecules:d,onOpenMoleculeEditor:()=>E(),onMoleculeIndexChange:T,actionsOptions:l}),w("div",{css:Nt.innerPanel,children:[p("div",{css:Nt.molecule,children:p(hd,{onChange:M=>u(M),defaultIndex:a,children:d&&d.length>0?d.map((M,I)=>{var N;return w("div",{css:Nt.items,children:[w("span",{css:Nt.toolbar,children:[p(qs,{mf:M.mf})," - ",(N=M.mw)==null?void 0:N.toFixed(2)]}),p("div",{css:Nt.slider,className:"mol-svg-container",onDoubleClick:()=>E(M),style:{backgroundColor:(I+1)%2!==0?"#fafafa":"white"},children:p(Js,{children:({height:A,width:D})=>p(Lp,{OCL:Bt,id:`molSVG${I}`,width:D,height:A,molfile:M.molfile||"",setMolfile:R=>k(M.key,R),setSelectedAtom:C,atomHighlightColor:x&&x.length>0?"red":"#FFD700",atomHighlightOpacity:.35,highlights:x&&x.length>0?x:v,setHoverAtom:y})})})]},M.key)}):p("div",{css:Nt.slider,style:{height:"100%"},onClick:()=>E(),children:p("span",{children:"Click to draw molecule"})})})}),r]})]})}const lS=c.exports.memo(iS),rS={ranges:{},zones:{}};function bd({onMoleculeChange:e,children:t,actionsOptions:n}){const{molecules:o,displayerMode:s,activeTab:i}=$(),l=ve(rS),r=(l==null?void 0:l.ranges)||{},a=(l==null?void 0:l.zones)||{};return p(lS,{molecules:o,displayerMode:s,activeTab:i,ranges:r,zones:a,onMoleculeChange:e,actionsOptions:n,children:t})}const aS=[{key:1,value:"manual",label:"Manual"}];function cS({onClose:e=()=>null,nucleus:t}){const n=c.exports.useRef(),o=Y(),s=c.exports.useMemo(()=>{const a=Lt[t]?Object.entries(Lt[t]).map(u=>({key:u[0],value:u[0],label:u[0]}),[]):[];return aS.concat(a)},[t]),i=c.exports.useCallback(()=>{n.current.submitForm()},[]),l=c.exports.useCallback(a=>{o({type:qc,payload:a}),e()},[o,e]);c.exports.useEffect(()=>{function a(u){const[d,h]=u.range;n.current.setValues(S(b({},n.current.values),{from:d,to:h}))}return de.on("brushEnd",a),()=>{de.off("brushEnd",a)}},[]);const r=c.exports.useCallback(a=>{const m=Lt[t][a]||{delta:0},{delta:d=0}=m,h=G(m,["delta"]);n.current.setValues(b(S(b({},n.current.values),{targetX:d}),h))},[t]);return w("div",{css:ht,children:[w("div",{className:"header handle",children:[p("span",{children:"Spectra calibration"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",style:{flex:1},children:w(re,{ref:n,initialValues:{from:-1,to:1,nbPeaks:1,targetX:0},onSubmit:l,children:[w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Options :"}),p(Me,{data:s,style:{width:270,height:30,marginBottom:"20px"},onChange:r})]}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Range :"}),p(Q,{title:"From : ",children:p(W,{name:"from",type:"number"})}),p(Q,{title:"To : ",children:p(W,{name:"to",type:"number"})})]}),p("div",{className:" margin-10",children:p(Q,{className:"custom-label",title:"Number of Peaks : ",children:p(W,{name:"nbPeaks",type:"number"})})}),p("div",{className:" margin-10",children:p(Q,{className:"custom-label",title:"Target PPM :",children:p(W,{name:"targetX",type:"number"})})})]})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:i,className:"btn",children:"Done"})})]})}function yd(e,t=null){try{return new Function("args",`return ${e}`)(t)}catch(n){return n}}const uS=`function run(data) {

  return JSON.stringify(data,undefined, 2);
  
}(args);
`;function dS({data:e}){const{values:t,setFieldValue:n}=pe(),[o,s]=c.exports.useState(t.code?t.code:uS),[i,l]=c.exports.useState("");return c.exports.useEffect(()=>{const r=yd(o,e);r instanceof Error?l(r.message):(n("code",o),l(r))},[o,e,n]),w("div",{style:{marginTop:"20px"},children:[p("textarea",{value:o,onChange:r=>s(r.target.value),style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",backgroundColor:"#fcfcfc",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}}),p("p",{style:{marginBottom:"5px"},children:"Result:"}),p("textarea",{value:i,readOnly:!0,style:{border:"0.55px solid #f3f3f3",fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12,padding:"1em",width:"90%",marginBottom:"10px",minHeight:"100px",overflow:"auto",maxHeight:"200px"}})]})}var pS=c.exports.memo(dS);const hS=P`
  width: 100%;
  thead {
    border-bottom: 1px solid lightgray;
    background-color: #fafafa;
    font-size: 12px;
  }

  td,
  th {
    padding: 3px 5px;
    text-align: center;
  }

  .operation-col {
    width: 30px;
  }

  .input {
    height: 25px !important;
    width: 100% !important;
    margin: 0 !important;
  }

  .input.disbale {
    background-color: #e8e8e8;
    border-radius: 5px;
  }

  .label,
  .index {
    width: 100px;
  }

  .counter {
    width: 50px;
  }

  .add {
    background-color: transparent;
    border: 0;
    outline: none;
    svg {
      font-szie: 14px;
      fill: green;
    }
  }
`;function fS({data:e,onAfterSave:t},n){const o=Y(),s=c.exports.useRef(),[i,l]=c.exports.useState({});c.exports.useImperativeHandle(n,()=>({saveSetting(){s.current.submitForm()}})),c.exports.useEffect(()=>{const h=Object.keys(e.columns).reduce((m,g)=>(m[g]=S(b({},e.columns[g]),{tempKey:g}),m),{});l(h),s.current.setValues({columns:h,code:e.code})},[e]);const r=c.exports.useMemo(()=>Object.keys(i),[i]),a=c.exports.useMemo(()=>{function h(){return r.reduce((m,g)=>(m[g]=ee().shape(S(b({tempKey:Vn().required().test("unique","must be unique column name",x=>{const y=s.current.values.columns;return Object.keys(y).reduce((C,v)=>(y[v].tempKey===x&&C.push(x),C),[]).length===1})},i[g].type===Bo.FORMULA?{formula:Vn().required()}:{}),{index:Vn().required()})),m),{})}return ee().shape({columns:ee().shape(h())})},[i,r,s]),u=c.exports.useCallback(h=>{t==null||t(!0);const m=Object.entries(h.columns).reduce((g,[x,y])=>(g[x]=b(b({},i[x]),y),g),{});o({type:Uc,payload:{code:h.code,columns:m}})},[i,o,t]),d=c.exports.useCallback(h=>{l(m=>S(b({},m),{[`temp${h}`]:{tempKey:"",type:"FORMULA",valueKey:"value",formula:"",index:h}}))},[]);return w(re,{ref:s,initialValues:{columns:i,code:null},validationSchema:a,onSubmit:u,children:[r&&w("table",{css:hS,children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter",children:"#"}),p("th",{className:"label",children:"Label"}),p("th",{children:"value"}),p("th",{className:"index",children:"index"})]})}),p("tbody",{children:r.map((h,m)=>w("tr",{children:[p("td",{className:"counter",children:m+1}),p("td",{className:"label",children:p(W,{name:`columns.${h}.tempKey`,value:i[h].tempKey},h)}),p("td",{children:i[h].type===Bo.FORMULA?p(W,{name:`columns.${h}.formula`,value:i[h].formula}):p("div",{className:"input disbale"})}),p("td",{className:"index",children:p(W,{name:`columns.${h}.index`,value:i[h].index})}),p("td",{className:"operation-col",children:r.length===m+1&&p("button",{className:"add",type:"button",onClick:()=>d(m+1),children:p(Cn,{})})})]},h))})]}),p(pS,{data:e})]})}var mS=c.exports.forwardRef(fS);const vo={container:P`
    background-color: white;
    position: absolute;
    height: auto;
    z-index: 99999999999999;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  `,ul:P`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `,li:P`
    text-align: center;
    color: black;
    border-bottom: 0.55px solid #f9f9f9;
    min-width: 150px;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background-color: gray;
      color: white;
    }
  `,label:P`
    padding: 10px 30px;
    display: block;
  `};function gS({data:e=[],onSelect:t,renderItem:n=null}){return p("div",{css:vo.container,children:p("ul",{css:vo.ul,children:e.map((o,s)=>p("li",{css:vo.li,onClick:()=>t(s),children:(n==null?void 0:n(o))||p("span",{css:vo.label,children:o.label})},o.key))})})}const xS=P`
  padding: 2px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
  border: 0.55px solid lightgray;
  font-size: 10px;

  // button {
  //   text-transform: Capitalize;
  // }
`;function vd(e){const{data:t,selectedKey:n,onSelect:o,formatSelectedValue:s=x=>x.label,renderItem:i=null}=e,[l,r]=c.exports.useState(!1),[a,u]=c.exports.useState(),{rootRef:d}=ji(),h=c.exports.useRef(null);c.exports.useEffect(()=>{if(n){const x=t.find(y=>y.key===n)||null;u(x)}},[n,t]);const m=c.exports.useCallback(x=>{h.current&&!x.target.closest(`.${h.current.className}`)&&l&&setTimeout(()=>{r(!1)},0)},[l]);c.exports.useEffect(()=>(d&&d.addEventListener("click",m),()=>d.removeEventListener("click",m)),[m,l,d]);const g=c.exports.useCallback(x=>{u(t[x]),o==null||o(t[x])},[t,o]);return w("div",{className:"dropdown",ref:h,css:xS,children:[p("button",{type:"button",onClick:x=>{r(y=>!y),x.stopPropagation()},children:a?s(a):p(Op,{})}),l&&p(gS,{data:t,onSelect:g,renderItem:i})]})}const bS=e=>P`
  position: relative;

  .delete {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .dropDown-container {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .label-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 45px;
  }

  .label {
    text-align: center;
  }

  ${e}
`,yS=[{key:$n.RELATIVE,label:"Relative"},{key:$n.ABSOLUTE,label:"Absolute"},{key:$n.MIN,label:"Min Intensity"},{key:$n.MAX,label:"Max Intensity"}];function vS({charLabel:e,rangeLabel:t,data:n,onColumnFilter:o}){const s=Y(),i=c.exports.useCallback(()=>{s({type:_i,colKey:e})},[e,s]);return w("div",{css:bS,children:[w("div",{className:"container",children:[n.type===Bo.NORMAL&&p("div",{className:"dropDown-container",children:p(vd,{data:yS,formatSelectedValue:l=>l.label.substring(0,3),selectedKey:n.valueKey,onSelect:o})}),w("div",{className:"label-container",children:[w("span",{className:"label",children:[" ",e]}),p("span",{className:"label",children:t})]})]}),p(pd,{onDelete:i})]})}function CS({data:e,activeTab:t}){const n=Be(t),o=c.exports.useMemo(()=>{const r=V(e,"code","");return yd(r,e)},[e]),s=Y(),i=c.exports.useCallback((r,a)=>{s({type:Kc,payload:{columnKey:r,valueKey:a}})},[s]),l=c.exports.useMemo(()=>{const r=[{Header:"#",index:0,Cell:({row:d})=>d.index+1}];function a(d,h,m){const g=d.original[h][m];return g instanceof Error?f("span",{style:{color:"red"},children:g.message}):n(g)}function u(d,h){return f(vS,{charLabel:h,data:d,onColumnFilter:m=>i(h,m.key),rangeLabel:d.from&&d.to?`${n(d.from)} - ${n(d.to)}`:""})}return e.columns&&Object.keys(e.columns).forEach(d=>{const{valueKey:h,index:m}=e.columns[d];gs(r,{index:m+1,Cell:({row:g})=>a(g,d,h),Header:()=>u(e.columns[d],d),id:d})}),r.sort((d,h)=>d.index-h.index)},[i,e.columns,n]);return e.values&&e.values.length>0?F(c.exports.Fragment,{children:[f(fo,{data:e.values,columns:l}),f("div",{style:{width:"100%",padding:"10px"},dangerouslySetInnerHTML:{__html:o}})]}):f(Ut,{})}var kS=c.exports.memo(CS);function SS({activeTab:e,spectraAnalysis:t}){const[n,o]=c.exports.useState(!1),s=c.exports.useRef(),i=le(),l=he(),r=Y(),a=c.exports.useMemo(()=>{const{values:y,options:{columns:C,code:v}}=t[e]||{values:{},options:{columns:{},code:null}};return{values:Object.values(y),columns:C,code:v}},[e,t]),u=c.exports.useCallback(()=>{o(!n)},[n]),d=c.exports.useCallback(()=>{s.current.saveSetting()},[]),h=c.exports.useCallback(()=>{o(!1)},[]),m=c.exports.useCallback(y=>{de.emit("showYSpectraTrackers",y)},[]),g=c.exports.useCallback(()=>{r({type:ze}),l.show(p(cS,{nucleus:e}),{isBackgroundBlur:!1,position:te.TOP_CENTER,width:500})},[e,l,r]),x=c.exports.useCallback(async()=>{const y=by(t,e);await ms(y)?i.success("Data copied to clipboard"):i.error("copy to clipboard failed")},[e,i,t]);return w("div",{css:[Dt,n&&P`
            .table-container th {
              position: relative;
            }
          `],children:[!n&&w(ot,{deleteToolTip:"Delete All Peaks",showSettingButton:!0,canDelete:!1,onSettingClick:u,children:[p(ke,{popupTitle:"Copy To Clipboard",onClick:x,children:p(qo,{})}),p(ke,{popupTitle:"Spectra calibration",onClick:g,children:p($p,{style:{fontSize:"18px"}})}),p(Ge,{popupTitle:"Y Spectra Tracker",popupPlacement:"right",onClick:m,children:p(Hp,{})})]}),n&&p(In,{onSave:d,onClose:u}),p("div",{className:"inner-container",children:n?p(mS,{data:a,onAfterSave:h,ref:s}):p(kS,{data:a,activeTab:e})})]})}const wS=c.exports.memo(SS);function ES(){const{activeTab:e,spectraAnalysis:t,displayerKey:n}=$();return e?p(wS,{activeTab:e,spectraAnalysis:t,displayerKey:n}):p("div",{})}const Ts={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},AS=[{id:1,label:"Peak Number :",checkController:"showPeakNumber",formatController:"peakNumberFormat"},{id:2,label:"Peak Index : ",checkController:"showPeakIndex",formatController:"peakIndexFormat"},{id:3,label:"\u03B4 (ppm) :",checkController:"showDeltaPPM",formatController:"deltaPPMFormat"},{id:4,label:"\u03B4 (Hz) :",checkController:"showDeltaHz",formatController:"deltaHzFormat"},{id:5,label:"Peak Width",checkController:"showPeakWidth",formatController:"peakWidthFormat"},{id:6,label:"Intensity :",checkController:"showIntensity",formatController:"intensityFormat"}];function TS({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(null),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=ed,u),{}),a=pt(t.current,"formatting.panels.peaks");s.current.setValues(a||r)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"peaks",value:r}}),o.success("Peaks preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ts.container,children:f(re,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>F("div",{style:Ts.groupContainer,children:[f(Le,{style:Ts.header,value:r}),AS.map(a=>f(Fe,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`,hideFormat:a.formatController==="deltaPPMFormat"},a.id))]},r))})})}const DS=c.exports.memo(TS);function RS(e,t){const n=xs(),o=ce();return f(DS,{innerRef:t,nucleus:n,preferences:o})}var IS=c.exports.forwardRef(RS);function NS({activeTab:e,preferences:t,data:n,info:o}){const s=Y(),i=Be(o.nucleus),l=c.exports.useCallback((m,g)=>{m.preventDefault(),m.stopPropagation();const x=g.original;s({type:is,data:{id:x.id,xIndex:x.xIndex}})},[s]),r=c.exports.useMemo(()=>pt(t.current,`formatting.panels.peaks.[${e}]`,ed),[e,t]),a=c.exports.useCallback((m,g)=>{const x=parseFloat(m.target.value)-parseFloat(g.value);s({type:vi,shiftValue:x})},[s]),u=c.exports.useMemo(()=>[{showWhen:"showPeakNumber",index:1,Header:"#",Cell:({row:m})=>m.index+1,style:{width:"1%",maxWidth:"40px",minWidth:"40px"}},{showWhen:"showPeakIndex",index:2,Header:"index",accessor:m=>Ye(m.xIndex,r.peakIndexFormat)},{showWhen:"showDeltaPPM",index:3,Header:"\u03B4 (ppm)",accessor:m=>i(m.value),Cell:({row:m})=>f(rt,{value:i(m.original.value),onSave:g=>a(g,m.original),type:"number"})},{showWhen:"showDeltaHz",index:4,Header:"\u03B4 (Hz)",accessor:m=>Ye(m.valueHz,r.deltaHzFormat)},{showWhen:"showIntensity",index:5,Header:"Intensity",style:{maxWidth:"80px"},accessor:m=>Ye(m.intensity,r.intensityFormat)},{showWhen:"showPeakWidth",index:6,Header:"Peak Width",accessor:m=>Ye(m.peakWidth,r.peakWidthFormat)}],[i,r,a]),d=c.exports.useMemo(()=>[{index:20,Header:"",style:{width:"1%",maxWidth:"24px",minWidth:"24px"},id:"delete-button",Cell:({row:m})=>f("button",{type:"button",className:"delete-button",onClick:g=>l(g,m),children:f(St,{})})}],[l]),h=c.exports.useMemo(()=>{let m=[...d];for(const x of u){const g=x,{showWhen:y}=g,C=G(g,["showWhen"]);r[y]&&gs(m,C)}return m.sort((x,y)=>x.index-y.index)},[u,d,r]);return n&&n.length>0?f(fo,{data:n,columns:h,approxItemHeight:20,enableVirtualScroll:!0}):f(Ut,{})}var MS=c.exports.memo(NS);function PS({peaks:e,info:t,xDomain:n,activeTab:o,preferences:s}){var E;const[i,l]=c.exports.useState(!1),[r,a]=c.exports.useState(!1),u=Be(t.nucleus),d=Y(),h=he(),m=c.exports.useRef(),g=c.exports.useCallback(()=>{d({type:is,data:null})},[d]),x=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:g},{text:"No"}]})},[h,g]),y=c.exports.useCallback(()=>{a(!r)},[r]),C=c.exports.useCallback(()=>{m.current.saveSetting(),a(!1)},[]),v=c.exports.useCallback(()=>{l(!i)},[i]),k=c.exports.useMemo(()=>{function T(M){return M*1e5>=n[0]*1e5&&M*1e5<=n[1]*1e5}return(e==null?void 0:e.values)?(i?e.values.filter(I=>T(I.x)):e.values).map(I=>{const N=Number(u(I.x));return{value:N,valueHz:(t==null?void 0:t.originFrequency)?Number(N)*t.originFrequency:"",id:I.id,intensity:I.y,peakWidth:I.width?I.width:"",isConstantlyHighlighted:T(N)}}).sort((I,N)=>I.value-N.value):[]},[i,u,t,e,n]);return w("div",{css:[Dt,r&&P`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!r&&p(ot,{counter:(E=e==null?void 0:e.values)==null?void 0:E.length,onDelete:x,deleteToolTip:"Delete All Peaks",onFilter:v,filterToolTip:i?"Show all peaks":"Hide peaks out of view",filterIsActive:i,counterFiltered:k.length,showSettingButton:!0,onSettingClick:y}),r&&p(In,{onSave:C,onClose:y}),p("div",{className:"inner-container",children:r?p(IS,{ref:m}):p(MS,{data:k,activeTab:o,preferences:s,info:t})})]})}const _S=c.exports.memo(PS),FS={peaks:null,info:{}};function LS(){const{xDomain:e,activeTab:t}=$(),{peaks:n,info:o}=ve(FS),s=ce();return p(_S,{peaks:n,info:o,xDomain:e,activeTab:t,preferences:s})}const OS=P`
  overflow: auto;
  width: 400px;
  .innerContainer {
    padding: 5px;
    width: 100%;
    height: 180px;
    border: none;
  }

  .mainButtonsContainer {
    padding: 5px 0px;
    border-bottom: 0.55px solid #ebebeb;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0 5px;
  }

  button:disabled {
    opacity: 0.6;
  }
`;function $S({text:e,onClose:t,onCopyClick:n}){return w("div",{css:OS,children:[w("div",{className:"mainButtonsContainer handle",children:[p("button",{type:"button",onClick:()=>n(e),children:p(ei,{})}),p(me,{onClick:t})]}),p("div",{className:"innerContainer",dangerouslySetInnerHTML:{__html:e}})]})}const HS=P`
  .btn {
    background-color: transparent;
    border: none;
  }

  .icon svg {
    font-size: 12px;
  }

  .preview-publication-icon svg {
    font-size: 13px;
  }

  button {
    margin-right: 2px;
  }
`;function zS({ranges:e,info:t,onUnlink:n,onFilterActivated:o,onSettingClick:s,isFilterActive:i,filterCounter:l,showMultiplicityTrees:r,showJGraph:a,showRangesIntegrals:u}){var O;const d=Y(),h=he(),m=le(),g=ce(),x=je(),y=V(e,"options.sum",null),C=c.exports.useCallback(L=>{d({type:Mc,value:L}),h.close()},[d,h]),v=c.exports.useCallback(()=>{h.show(p(md,{onClose:()=>h.close(),onSave:C,header:y?`Set new Ranges Sum (Current: ${Number(y).toFixed(2)})`:"Set new Ranges Sum",sumOptions:e==null?void 0:e.options}))},[C,y,h,e==null?void 0:e.options]),k=c.exports.useCallback(()=>{n()},[n]),E=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:k},{text:"No"}]})},[k,h]),T=c.exports.useCallback(()=>{h.showConfirmDialog({message:"All ranges will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{d({type:us,payload:{data:{assignmentData:x}}})}},{text:"No"}]})},[x,d,h]),M=c.exports.useCallback(()=>{d({type:du})},[d]),I=c.exports.useCallback(()=>{d({type:pu})},[d]),N=c.exports.useCallback(()=>{d({type:xu})},[d]),A=c.exports.useCallback(async L=>{await oC(L)?m.success("Data copied to clipboard"):m.error("copy to clipboard failed")},[m]),D=c.exports.useCallback(()=>{const{originFrequency:L,nucleus:H}=t,X=V(g.current,`formatting.nucleusByKey[${H.toLowerCase()}]`),J=Ml(X.ppm),z=Ml(X.hz),j=zp(e.values,{nucleus:H,nbDecimalDelta:J,nbDecimalJ:z,observedFrequency:L});h.show(p($S,{text:j,onCopyClick:A,onClose:()=>h.close()}),{})},[t,h,g,e.values,A]),R=c.exports.useCallback(L=>{d({type:ru,payload:L})},[d]);return p("div",{css:HS,children:w(ot,{counter:(O=e==null?void 0:e.values)==null?void 0:O.length,onDelete:T,deleteToolTip:"Delete All Ranges",onFilter:o,filterToolTip:i?"Show all ranges":"Hide ranges out of view",filterIsActive:i,counterFiltered:l,showSettingButton:!0,onSettingClick:s,children:[p(ke,{popupTitle:"Preview publication string",popupPlacement:"right",onClick:D,className:"btn preview-publication-icon",children:p(qo,{})}),p(ke,{popupTitle:y?`Change Ranges Sum (${Number(y).toFixed(2)})`:"Change Ranges Sum",popupPlacement:"right",onClick:v,className:"btn icon",children:p(Rr,{})}),p(ke,{popupTitle:"Remove all Assignments",popupPlacement:"right",onClick:E,disabled:!e||!e.values||e.values.length===0,className:"btn icon",children:p(_r,{})}),p(Ge,{popupTitle:r?"Hide Multiplicity Trees in Spectrum":"Show Multiplicity Trees in Spectrum",popupPlacement:"right",onClick:M,disabled:!e||!e.values||e.values.length===0,children:p(Vp,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{popupTitle:a?"Hide J Graph":"Show J Graph",popupPlacement:"right",onClick:N,disabled:!e||!e.values||e.values.length===0,children:p(jp,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{popupTitle:u?"Hide integrals":"Show integrals",popupPlacement:"right",onClick:I,defaultValue:u,disabled:!e||!e.values||e.values.length===0,children:p(Fr,{style:{pointerEvents:"none",fontSize:"12px"}})}),p(Ge,{className:"icon",popupTitle:"fix integral values",popupPlacement:"right",onClick:R,children:p(Ir,{})})]})})}const Ln={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2},inputWrapper:{width:"100px",flex:"4",borderRadius:"5px"}},VS=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function jS({nucleus:e,preferences:t,innerRef:n}){const o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=Bi(d),u),{}),a=pt(t.current,"formatting.panels.ranges");s.current.setValues(a||r)}},[e,t]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{t.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"ranges",value:r}}),o.success("ranges preferences saved successfully")},[o,t]);return c.exports.useImperativeHandle(n,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ln.container,children:f(re,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>F("div",{style:Ln.groupContainer,children:[f(Le,{style:Ln.header,value:r}),VS.map(a=>f(Fe,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id)),f(Q,{title:"J Graph tolerance (Hz) :",style:{label:Ln.inputLabel,wrapper:Ln.inputWrapper},children:f(W,{name:`${r}.jGraphTolerance`,type:"number"})})]},r))})})}const BS=c.exports.memo(jS);function XS(e,t){const n=xs(),o=ce();return f(BS,{innerRef:t,preferences:o,nucleus:n})}var YS=c.exports.forwardRef(XS);function Cd(e,t=null){const[n,o]=c.exports.useState(t),s=c.exports.useMemo(()=>{const r=e.slice();return n!==null&&r.sort((a,u)=>n.direction==="asc"?V(a,n.key,0)-V(u,n.key,0):n.direction==="desc"?V(u,n.key,0)-V(a,n.key,0):0),r},[e,n]),i=c.exports.useCallback(r=>{var d;const a=(d=r.currentTarget)==null?void 0:d.id;let u="asc";if(a&&n&&n.key===a)switch(n.direction){case"asc":u="desc";break;case"desc":u="original";break;default:u="asc";break}o({key:a,direction:u})},[n]),l=c.exports.useCallback(r=>{const a={flag:null,content:" "};if(!n||n.key!==r)return a;switch(n.direction){case"desc":return{flag:!0,content:" \u25BC"};case"asc":return{flag:!1,content:" \u25B2"};default:return a}},[n]);return{items:s,isSortedDesc:l,onSort:{onClick:i}}}function Co(e,t){return V(e,t,!1)}function GS({rowSpanTags:e,value:t,onHoverRange:n,format:o}){return f("td",S(b(b({},e),n),{children:Ye(t,o)}))}function yn(n){var o=n,{onClick:e}=o,t=G(o,["onClick"]);return f(c.exports.Fragment,{children:f("button",b({type:"button",onClick:e},t))})}const ZS=e=>{const{onChange:t=()=>null,enableValidation:n=!0}=e,{values:o,errors:s}=pe();return c.exports.useEffect(()=>{n?Object.keys(s).length===0&&t(o):t(o)},[o,n,s,t]),null},On={container:P`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0.4rem;
  `,inputInfo:P`
    font-size: 10px;
    color: black;
    font-weight: bold;
  `,infoText:P`
    padding: 10px;
    font-size: 13px;
  `,signalContainer:P`
    border: 0.55px solid #dedede;
  `,inputContainer:P`
    display: flex;
    justify-content: center;
  `,addSignalBtn:P`
    margin-top: 15px;
    margin-top: 20px;
    width: 100%;
    background-color: #fcfcfc;
    border-top: 0.55px solid #dedede;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0.4rem;
    font-size: 12px;

    & :disabled {
      opacity: 0.6;
    }
  `};function WS({onFocus:e,onBlur:t,range:n},o){const{values:s,setFieldValue:i}=pe(),{activeTab:l}=$(),r=Be(l),a=c.exports.useCallback(h=>{const m={multiplicity:"m",kind:"signal",delta:Number(h.newSignalDelta),js:[{multiplicity:$t("m"),coupling:""}]},g=s.signals.slice().concat(m);i("signals",g),i("activeTab",String(g.length-1))},[i,s.signals]),u=c.exports.useMemo(()=>ee().shape({newSignalDelta:ae().test("test-range","",function(m){const{path:g,createError:x}=this;if(m&&m>n.from&&m<n.to)return!0;const y=` ${m?m.toFixed(5):0} ppm out of the range`;return x({path:g,message:y})}).required()}),[n]),d=c.exports.useCallback(()=>{o.current.submitForm()},[o]);return p("div",{css:On.container,children:w("div",{children:[p("p",{css:On.infoText,children:"Edit or select a delta value of new signal (ppm):"}),w(re,{ref:o,validationSchema:u,initialValues:{newSignalDelta:(n.from+n.to)/2},onSubmit:a,children:[p("div",{css:On.inputContainer,children:p(W,{name:"newSignalDelta",type:"number",placeholder:"\u{1D6C5} (ppm)",onFocus:e,onBlur:t,style:{input:{width:"250px",height:"30px"}},checkErrorAfterInputTouched:!1})}),w("p",{css:On.inputInfo,children:["[ ",`${r(n.from)} ppm - ${r(n.to)} ppm`," ]"]}),p(yn,{css:On.addSignalBtn,onClick:d,children:p(Cn,{title:"Add new signal"})})]})]})})}var US=c.exports.forwardRef(WS);const KS={input:{width:"50px",height:"26px",borderWidth:0,margin:"0 5px"}};function qS({signal:e,index:t,onFocus:n}){return F("div",{style:{display:"flex",alignItems:"center"},children:[f("span",{children:"\u{1D6C5}: "}),f(W,{name:`signals.${t}.delta`,type:"number",placeholder:"J (Hz)",onFocus:n,style:KS,checkErrorAfterInputTouched:!1}),f("span",{children:e.js.map(o=>$t(o.multiplicity)).join("")})]})}const JS=P`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  height: 100%;
  font-size: 12px;

  th,
  td {
    text-align: center;
    margin: 0;
    padding: 0.3rem;
    border-bottom: 1px solid #f5f5f5;

    button {
      background-color: transparent;
      border: none;
    }

    .add-button {
      color: blue;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-button {
      border-radius: 25%;
      padding: 0;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
    }
    .delete-button:hover {
      .icon {
        color: red;
      }
    }

    input {
      background-color: transparent;
      border: 0.5px solid #dedede;
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .selectBox {
      background-color: transparent;
      border: 0.5px solid #dedede;
      height: 100%;
      width: 100% !important;
      text-align: center;
      margin: 0;
    }
  }

  tr {
    :last-child {
      background-color: #fcfcfc;
    }
  }
`;function QS({push:e,remove:t,onFocus:n,onBlur:o}){const{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback((a,u)=>{Kn(a)||i(u,"")},[i]),r=c.exports.useMemo(()=>Un.map(a=>S(b({key:a.value},a),{value:a.label})),[]);return p("table",{css:JS,children:w("tbody",{children:[w("tr",{children:[p("th",{children:"#"}),p("th",{children:"Multiplicity"}),p("th",{children:"J (Hz)"}),p("th",{children:""})]}),V(s,`signals[${s.activeTab}].js`,[]).map((a,u)=>w("tr",{children:[p("td",{children:u+1}),p("td",{children:p(rn,{className:"selectBox",name:`signals.${s.activeTab}.js.${u}.multiplicity`,data:r,onChange:d=>l(d,`signals.${s.activeTab}.js.${u}.coupling`)})}),p("td",{children:p(W,{name:`signals.${s.activeTab}.js.${u}.coupling`,type:"number",placeholder:"J (Hz)",disabled:!Kn(a.multiplicity),onFocus:n,onBlur:o,style:{input:{width:"100%",height:"26px"}},checkErrorAfterInputTouched:!1})}),p("td",{children:p(yn,{className:"delete-button",onClick:()=>{t(u)},children:p(St,{className:"icon",title:"Delete coupling"})})})]},`editCouplings${s.activeTab}${u}`)),p("tr",{}),p("tr",{children:p("td",{colSpan:4,children:p(yn,{className:"add-button",onClick:()=>e({multiplicity:$t("m"),coupling:""}),children:p(Cn,{title:"Add new coupling"})})})})]})})}var ew=c.exports.memo(QS);const tw=P`
  border-spacing: 0;
  width: 100%;
  font-size: 12px;
  height: 100%;

  margin: 0;
  padding: 0.4rem;
  text-align: center;
`;function nw({onFocus:e,onBlur:t}){const{values:n}=pe();return p("div",{css:tw,children:p(Bp,{name:`signals.${n.activeTab}.js`,render:({push:o,remove:s})=>p("div",{children:p(ew,{push:o,remove:s,onFocus:e,onBlur:t})})})})}var ow=c.exports.memo(nw);const sw=P`
  text-align: center;
  width: 100%;

  .errorText {
    color: red;
  }

  .infoText {
    padding: 10px;
    margin: 10px 0;
    font-size: 14px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`,iw=P`
  color: red;
`,lw=P`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function rw({range:e}){const t=c.exports.useRef(),[n,o]=c.exports.useState(null),{values:s,setFieldValue:i,errors:l}=pe(),{activeTab:r}=$(),{info:a}=ve({info:{}}),u=Be(r);c.exports.useEffect(()=>{function v(k){if((a==null?void 0:a.originFrequency)&&n)if(s.activeTab==="addSignalTab")t.current.setValues({[n]:(k.range[1]-k.range[0])/2+k.range[0]});else if(n.includes("delta"))i(n,(k.range[1]-k.range[0])/2+k.range[0]);else{const E=Number(u(Math.abs(k.range[0]-k.range[1])*a.originFrequency));i(n,E)}o(null)}return de.on("brushEnd",v),()=>{de.off("brushEnd",v)}},[n,i,s.activeTab,u,a]),c.exports.useEffect(()=>{function v(k){n&&(s.activeTab==="addSignalTab"?t.current.setValues({[n]:k.xPPM}):n.includes("delta")&&i(n,k.xPPM)),o(null)}return de.on("mouseClick",v),()=>{de.off("mouseClick",v)}},[s.activeTab,n,i]);const d=c.exports.useCallback(v=>{o(v.target.name)},[o]),h=c.exports.useCallback(({tabid:v})=>{i("activeTab",v)},[i]),m=c.exports.useCallback(({tabid:v})=>{const k=s.signals.filter((E,T)=>T!==Number(v));i("signals",k)},[i,s.signals]);c.exports.useEffect(()=>{i("activeTab",s.signals.length>0?(s.signals.length-1).toString():"addSignalTab")},[i,s.signals.length]);const g=c.exports.useCallback(v=>!!((l==null?void 0:l.signals)&&(l==null?void 0:l.signals[v])),[l]),x=c.exports.useMemo(()=>{const v=s.signals.length>0?s.signals.map((E,T)=>p(Ne,{tabid:`${T}`,tabstyles:g(T)?iw:lw,canDelete:!0,render:()=>p(qS,{signal:E,index:T,onFocus:d}),children:p(ow,{onFocus:d})},`signalForm${T}`)):[],k=p(Ne,{tablabel:"+",tabid:"addSignalTab",canDelete:!1,className:"add-signal-tab",children:p(US,{onFocus:d,range:e,ref:t})},"addSignalTab");return v.concat(k)},[d,e,g,s.signals]),y=p("p",{className:"infoText",children:"Focus on an input field and press Shift + Drag & Drop to draw a coupling constant in spectrum view."}),C=p("p",{className:"infoText",children:"Focus on the input field and press Shift + Left mouse click to select new signal delta value in spectrum view."});return w("div",{children:[p("div",{css:sw,children:l.signals&&(l.signals.noSignals||l.signals.noCouplings)?w("div",{children:[p("p",{className:"errorText",children:l.signals.noSignals||l.signals.noCouplings[0].message}),l.signals.noSignals?C:null]}):s.activeTab==="addSignalTab"?C:y}),p(Rn,{activeTab:s.activeTab,onClick:h,onDelete:m,children:x})]})}var aw=c.exports.memo(rw);const cw=()=>c.exports.useMemo(()=>ee().shape({signals:Ps().of(ee().shape({j:Ps().of(ee().shape({multiplicity:Vn().required(),coupling:Xp().test("checkValue","",function(t){const{path:n,createError:o}=this,s=Kn(this.parent.multiplicity);return!s&&isNaN(t)||s&&!isNaN(t)?!0:o({path:n,message:`${n} is required`})})})).min(1,"There must be at least one coupling in a signal")})).min(1,"There must be at least one signal in a range!")}),[]),uw=P`
  width: 600px;
  height: 500px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      border-left: 1px solid #ececec;
      padding-left: 6px;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 5px;

      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
    input,
    button {
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      height: 36px;
      margin: 2px;
    }
    input {
      flex: 10;
    }
    button {
      flex: 2;
      color: white;
      background-color: gray;
    }
  }
`;function dw({onSaveEditRangeModal:e=()=>null,onCloseEditRangeModal:t=()=>null,onZoomEditRangeModal:n=()=>null,range:o,automaticZoom:s=!0}){const i=c.exports.useRef(null),{activeTab:l}=$(),r=Y(),a=Be(l),u=cw(),d=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{s&&d()},[s,d]);const h=c.exports.useCallback(()=>{t()},[t]),m=c.exports.useCallback(v=>v.filter(k=>k.coupling!=="").map(k=>S(b({},k),{multiplicity:$t(k.multiplicity)})),[]),g=c.exports.useCallback(v=>v.map(k=>S(b({id:U()},k),{multiplicity:k.js.map(E=>$t(E.multiplicity)).join(""),js:m(k.js)})),[m]),x=c.exports.useCallback(async v=>{const k=b({},o);k.signals=g(v.signals),await e(k),h()},[g,h,e,o]),y=c.exports.useMemo(()=>{const v=o.signals.map(k=>{let E=0;const T=[];return k.multiplicity.split("").forEach(M=>{let I={multiplicity:M,coupling:""};Kn(M)&&(I=b({},k.js[E]),I.coupling=Number(a(I.coupling)),E++),I.multiplicity=$t(I.multiplicity),T.push(I)}),S(b({},k),{js:T})});return{activeTab:"0",signals:v}},[a,o]),C=c.exports.useCallback(v=>{const k=g(v.signals);r({type:uu,payload:{tempRange:Object.assign({},o,{signals:k})}})},[r,g,o]);return p("div",{css:uw,children:w(re,{ref:i,initialValues:y,validationSchema:u,onSubmit:x,children:[w("div",{className:"header handle",children:[p(yn,{onClick:d,className:"zoom-button",children:p(Qn,{title:"Set to default view on range in spectrum"})}),p("span",{children:` Range and Signal edition: ${a(o.from)} ppm to ${a(o.to)} ppm`}),p(Ki,{onClick:()=>i.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:h})]}),p(aw,{range:o}),p(ZS,{onChange:C})]})})}function pw(e){const t=Y(),n=he(),o=je(),s=c.exports.useCallback(()=>{const d=Math.abs(e.from-e.to);t({type:ls,xDomain:[e.from-d,e.to+d]})},[t,e.from,e.to]),i=c.exports.useCallback(()=>{t({type:us,payload:{data:{id:e.id,assignmentData:o}}})},[o,t,e.id]),l=c.exports.useCallback(d=>{t({type:jc,payload:{data:{rowData:e,value:d}}})},[t,e]),r=c.exports.useCallback(d=>{t({type:Bc,payload:{editedRowData:d,assignmentData:o}})},[o,t]),a=c.exports.useCallback(()=>{t({type:ze}),n.close()},[t,n]),u=c.exports.useCallback(()=>{t({type:co,payload:{selectedTool:_.editRange.id,tempRange:e}}),n.show(f(dw,{onCloseEditRangeModal:a,onSaveEditRangeModal:r,onZoomEditRangeModal:s,range:e}),{position:te.MIDDLE_RIGHT,transition:Je.SCALE,isBackgroundBlur:!1})},[a,t,n,e,r,s]);return c.exports.useMemo(()=>({editRange:u,deleteRange:i,zoomRange:s,changeRangeSignalKind:l}),[l,i,u,s])}const hw=P`
  width: 66px;
  padding: 0 !important;
  button {import useEditRangeModal from './../../../hooks/useEditRangeModal';

    background-color: transparent;
    border: none;
    padding: 5px;
  }

  button:disabled {
    opacity: 0.6;
  }
`,fw={marginLeft:2,marginRight:2,border:"none",height:"20px"};function mw({rowData:e,onHoverSignal:t,rowSpanTags:n}){const{editRange:o,deleteRange:s,changeRangeSignalKind:i,zoomRange:l}=pw(e);return w(c.exports.Fragment,{children:[p("td",S(b({},t),{children:p(Me,{onChange:i,data:ni,defaultValue:e.tableMetaInfo.signal.kind,style:fw})})),w("td",S(b({},n),{css:hw,children:[p("button",{type:"button",className:"delete-button",onClick:s,children:p(St,{})}),p("button",{type:"button",className:"zoom-button",onClick:l,children:p(Qn,{title:"Zoom to range in spectrum"})}),p("button",{type:"button",className:"edit-button",onClick:o,children:p(Lr,{color:"blue"})})]}))]})}function gw({rowData:e,onHoverSignal:t}){const n=V(e,"tableMetaInfo.signal.js");return f("td",S(b({},t),{children:n==null?void 0:n.map(o=>isNaN(o.coupling)?"":o.coupling.toFixed(1)).join(",")}))}const Jl={color:"red",fontWeight:"bold"};function xw({rowData:e,assignment:t,highlight:n,onUnlinkVisibilityChange:o,unlinkVisibility:s,onLink:i,onUnlink:l,rowSpanTags:r,onHover:a,highlightData:u}){var g;const d=c.exports.useMemo(()=>V(e,"diaIDs",0),[e]),h=c.exports.useCallback(x=>{o==null||o(x)},[o]),m=c.exports.useMemo(()=>{var y;return t.isActive||t.isOnHover||n.isActive&&((y=u.highlight.sourceData)==null?void 0:y.type)!==ue.SIGNAL?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"}},[t.isActive,t.isOnHover,n.isActive,(g=u.highlight.sourceData)==null?void 0:g.type]);return f("td",S(b(b({},r),a),{onClick:x=>i==null?void 0:i(x,t),children:e.nbAtoms!==void 0&&e.nbAtoms>0?e.diaIDs&&e.diaIDs.length>0?F("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.nbAtoms," "," ( ",f("span",{style:m,children:d.length})," ) ",f("sup",{children:f("button",{type:"button",style:{visibility:s?"visible":"hidden",padding:0,margin:0},onClick:x=>l==null?void 0:l(x,!0),children:f(Jo,{color:"red"})})})]}):t.isActive?F("div",{children:[`${e.nbAtoms} (`,f("span",{style:Jl,children:"0"}),")"]}):e.nbAtoms:t.isActive?F("div",{children:["0 (",f("span",{style:Jl,children:"0"}),")"]}):""}))}var bw=c.exports.memo(xw);function yw({value:e,rowSpanTags:t,onHoverRange:n,format:o}){return f("td",S(b(b({},t),n),{children:Ye(e,o)}))}var Ql=c.exports.memo(yw);function vw({rowData:e,rowSpanTags:t,onHoverRange:n,format:o}){const s=Y(),i=c.exports.useMemo(()=>{const r=Ta(e),a=Ye(e.integration,o);return r?a:`[ ${a} ]`},[o,e]),l=c.exports.useCallback(r=>{s({type:zc,payload:{data:{value:r.target.value,id:e.id}}})},[s,e.id]);return f("td",S(b(b({},t),n),{children:f(rt,{value:i,onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}})}))}function Cw({rowData:e,onHover:t,assignment:n,highlight:o,onUnlinkVisibilityChange:s,unlinkVisibility:i,onLink:l,onUnlink:r}){const a=c.exports.useMemo(()=>V(e,"tableMetaInfo.signal.diaIDs",[]),[e]),u=c.exports.useMemo(()=>n.isActive||o.isActive?{color:"red",fontWeight:"bold"}:void 0,[n.isActive,o.isActive]),d=c.exports.useCallback(m=>{s==null||s(m)},[s]),h=c.exports.useCallback(m=>{l==null||l(m,n)},[n,l]);return f("td",S(b({},t),{onClick:h,style:u,children:a&&a.length>0?F("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:i?"visible":"hidden",padding:0,margin:0},onClick:m=>r==null?void 0:r(m,!1),children:f(Jo,{color:"red"})})})]}):n.isActive?"0":""}))}var kw=c.exports.memo(Cw);function kd(e){return(t,n,o="",s="")=>{const i=V(e,n,"0.000");return Ye(t,i,o,s)}}function Sw({rowData:e,onHoverSignal:t,preferences:n}){const o=Y(),s=e.tableMetaInfo.signal,i=kd(n),l=c.exports.useCallback(r=>{o({type:Vc,payload:{value:r.target.value,rangeID:e.id,signalID:s.id}})},[o,e.id,s.id]);return s?f("td",S(b({},t),{children:Yi(s.multiplicity,["m"])?f(rt,{value:s.delta.toFixed(3),onSave:l,type:"number",style:{padding:"0.1rem 0.4rem"}}):`${i(e.from,"fromFormat")} - ${i(e.to,"toFormat")}`})):f("td",{children:""})}const ww=P`
  background-color: #ff6f0057;
`,Ew=P`
  background-color: #f5f5dc;
`;function Aw({rowData:e,onUnlink:t,onContextMenu:n,preferences:o}){const s=je(),i=ct(e.id),l=ie([i.id].concat(i.assigned.x||[]).concat(zi(s,e.signals.map(N=>N.id))),{type:ue.RANGE}),r=ie(i.assigned.x||[],{type:ue.RANGE}),a=ct(e.tableMetaInfo.id),u=ie([a.id].concat(a.assigned.x||[]),{type:ue.SIGNAL}),d=Dn(),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),y=kd(o),C=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e.tableMetaInfo,"hide",!1)?{display:"none"}:void 0}),[e.tableMetaInfo]),v=c.exports.useCallback((N,A)=>{N&&N.stopPropagation(),A!==void 0?A?(t(e),m(!1),i.removeAll("x")):(t(e,V(e,"tableMetaInfo.signalIndex",void 0)),x(!1),a.removeAll("x")):(m(!1),x(!1))},[i,a,t,e]),k=c.exports.useCallback((N,A)=>{N.stopPropagation(),A.onClick("x")},[]),E=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),l.show()},onMouseLeave:()=>{i.onMouseLeave("x"),l.hide()}}),[i,l]),T=c.exports.useMemo(()=>({onMouseEnter:()=>{i.onMouseEnter("x"),r.show()},onMouseLeave:()=>{i.onMouseLeave("x"),r.hide()}}),[i,r]),M=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),I=c.exports.useMemo(()=>l.isActive||i.isActive?ww:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)?Ew:null,[i.isActive,l.isActive,e]);return w("tr",{onContextMenu:N=>n(N,e),css:I,children:[p("td",S(b(b({},C),E),{children:e.tableMetaInfo.rowIndex+1})),Co(o,"showFrom")&&p(Ql,{value:e.from,rowSpanTags:C,onHoverRange:E,format:y("showFrom",void 0)}),Co(o,"showTo")&&p(Ql,{value:e.to,rowSpanTags:C,onHoverRange:E,format:y("toFormat",void 0)}),p(Sw,{rowData:e,onHoverSignal:M,preferences:o}),Co(o,"showRelative")&&p(vw,{rowData:e,rowSpanTags:C,onHoverRange:E,format:y("relativeFormat",void 0)}),Co(o,"showAbsolute")&&p(GS,{value:e.absolute,rowSpanTags:C,onHoverRange:E,format:y("absoluteFormat",void 0)}),p("td",S(b({},M),{children:V(e,"tableMetaInfo.signal.multiplicity","")})),p(gw,{rowData:e,onHoverSignal:M}),p(kw,{rowData:e,assignment:a,highlight:u,onHover:M,unlinkVisibility:g,onUnlinkVisibilityChange:N=>x(N),onLink:k,onUnlink:v}),p(bw,{rowData:e,assignment:i,highlight:r,onHover:T,unlinkVisibility:h,onUnlinkVisibilityChange:N=>m(N),onLink:k,onUnlink:v,rowSpanTags:C,highlightData:d}),p(mw,{rowData:e,onHoverSignal:M,onHoverRange:E,rowSpanTags:C})]})}function Tw(e){return c.exports.useMemo(()=>{const t=[];return e.forEach((n,o)=>{n.signals.length===1?t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:n.signals[0],rowIndex:o,signalIndex:0,id:n.signals[0].id})})):n.signals.length>1&&n.signals.forEach((s,i)=>{let l=!1,r=null;i<n.signals.length-1&&i===0?r=n.signals.length:l=!0,t.push(S(b({rowKey:U()},n),{tableMetaInfo:S(b({},n.tableMetaInfo),{signal:s,rowSpan:r,hide:l,rowIndex:o,signalIndex:i,id:s.id})}))})}),t},[e])}const Dw=P`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  font-size: 12px;
  .react-contextmenu-wrapper {
    display: contents;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  }
  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function Rw({tableData:e,onUnlink:t,context:n,activeTab:o,preferences:s}){const i=o==null?void 0:o.replace(/[0-9]/g,""),l=c.exports.useRef(),{items:r,isSortedDesc:a,onSort:u}=Cd(e),d=Tw(r),h=g=>V(s,g,!1),m=c.exports.useCallback((g,x)=>{Xt(g)||(g.preventDefault(),l.current.handleContextMenu(g,x))},[l]);return w(c.exports.Fragment,{children:[w("table",{css:Dw,children:[p("thead",{children:w("tr",{children:[p("th",{children:"#"}),h("showFrom")?w("th",S(b({id:"from"},u),{children:["From",a("from").content]})):null,h("showTo")?w("th",S(b({id:"to"},u),{children:["To ",a("to").content]})):null,p("th",{children:"\u03B4 (ppm) "}),h("showRelative")?w("th",S(b({id:"integration"},u),{children:["Rel. ",i," ",a("integration").content]})):null,h("showAbsolute")?p("th",{children:"Absolute"}):null,p("th",{children:"Mult."}),p("th",{children:"J (Hz)"}),p("th",{children:p(Or,{style:{fontSize:10}})}),p("th",{children:"\u03A3"}),p("th",{children:"Kind"}),p("th",{children:""})]})}),p("tbody",{children:d==null?void 0:d.map(g=>p(Aw,{rowData:g,onUnlink:t,onContextMenu:(x,y)=>m(x,y),preferences:s},g.rowKey))})]}),p(Wt,{ref:l,context:n})]})}function Iw({ranges:e,data:t,info:n,xDomain:o,preferences:s,activeTab:i,molecules:l,showMultiplicityTrees:r,showJGraph:a,showRangesIntegrals:u}){const[d,h]=c.exports.useState(!1),m=je(),g=Y(),x=le(),[y,C]=c.exports.useState(!1),v=c.exports.useRef(),k=c.exports.useMemo(()=>{const R=(L,H)=>(H=H*1e4,L=L*1e4,H>=o[0]*1e4&&L<=o[1]*1e4||L<=o[0]*1e4&&H>=o[1]*1e4),O=L=>L.filter(H=>R(H.from,H.to));return e.values?(d?O(e.values):e.values).map(H=>S(b({},H),{tableMetaInfo:{isConstantlyHighlighted:R(H.from,H.to)}})):[]},[d,e.values,o]),E=c.exports.useCallback((R,O=-1)=>{g({type:Xc,payload:{rangeData:R,assignmentData:m,signalIndex:O}})},[m,g]),T=c.exports.useCallback(async R=>{if(t.x&&t.re){const{x:O,re:L}=t,{from:H,to:X}=R,{fromIndex:J,toIndex:z}=qn(O,{from:H,to:X}),j=b({x:Array.from(O.slice(J,z)),y:Array.from(L.slice(J,z))},R);await ms(JSON.stringify(j,void 0,2))?x.show("Data copied to clipboard"):x.error("copy to clipboard failed")}},[t,x]),M=c.exports.useMemo(()=>V(s.current,`formatting.panels.ranges.[${i}]`)||Bi(i),[i,s]),I=c.exports.useMemo(()=>[{label:"Copy to clipboard",onClick:T}],[T]),N=c.exports.useCallback(()=>{h(!d)},[d]),A=c.exports.useCallback(()=>{C(!y)},[y]),D=c.exports.useCallback(()=>{v.current.saveSetting(),C(!1)},[]);return p(Qe,{children:w("div",{css:[Dt,y&&P`
              th {
                position: relative;
              }
            `],children:[!y&&p(zS,{ranges:e,info:n,activeTab:i,molecules:l,showRangesIntegrals:u,showMultiplicityTrees:r,showJGraph:a,isFilterActive:d,onUnlink:E,onFilterActivated:N,onSettingClick:A,filterCounter:k.length}),y&&p(In,{onSave:D,onClose:A}),p("div",{className:"inner-container",children:y?p(YS,{ref:v}):p("div",{className:"table-container",children:k&&k.length>0?p(Rw,{activeTab:i,tableData:k,onUnlink:E,context:I,preferences:M}):p(Ut,{})})})]})})}const Nw=c.exports.memo(Iw),Mw={ranges:{},data:{},info:{}};function Pw(){const{displayerKey:e,xDomain:t,activeTab:n,molecules:o,toolOptions:{selectedTool:s,data:{showMultiplicityTrees:i,showRangesIntegrals:l,showJGraph:r}}}=$(),{ranges:a,data:u,info:d}=ve(Mw),h=ce();return p(Nw,{ranges:a,data:u,info:d,showMultiplicityTrees:i,showJGraph:r,showRangesIntegrals:l,selectedTool:s,displayerKey:e,preferences:h,xDomain:t,activeTab:n,molecules:o})}function Ji(){const e=ce();return t=>V(e.current,`display.toolBarButtons.${t}`,!0)}function _w({data:e,activeSpectrum:t,activeTab:n,displayerMode:o,spectrums:s,isAutomaticPickingVisible:i}){const l=he(),r=le(),a=Y(),u=c.exports.useCallback(()=>{l.showConfirmDialog({message:"All records will be deleted, Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:Ti})}},{text:"No"}]})},[a,l]),d=c.exports.useCallback(()=>{const C=s.map(v=>v.id);a({type:Wn,id:C})},[a,s]),h=c.exports.useCallback(()=>{a({type:Wn,id:[]})},[a]),m=c.exports.useCallback(()=>{function C(k){let E=n.split(",");E=E[0]===E[1]?[E[0]]:E;const T=[];for(const M of E)k.some(N=>N.info.nucleus===M)||T.push(M);return T}const v=C(e);v.length>0?a({type:$c,nucleus:v}):r.error("Nothing to calculate")},[n,r,e,a]),g=c.exports.useCallback(()=>{a({type:nu})},[a]),x=c.exports.useCallback(()=>{a({type:ou})},[a]),y=c.exports.useCallback(async()=>{const C=await r.showLoading("Automatic Ranges/Zones detection for all spectra in progress");setTimeout(()=>{a({type:hu}),a({type:fu}),C()},0)},[a,r]);return F(ot,{onDelete:u,counter:s==null?void 0:s.length,deleteToolTip:"Delete all spectra",children:[f(ke,{popupTitle:"Hide all spectra",onClick:h,children:f(Yp,{})}),f(ke,{popupTitle:"Show all spectra",onClick:d,children:f(wo,{})}),t&&n&&n.split(",").length>1&&f(ke,{popupTitle:"Add missing projection",onClick:m,children:f(Gp,{})}),o===B.DM_1D&&s.length>1&&F(et,{children:[f(ke,{popupTitle:"Reset Scale",onClick:x,children:f(Zp,{})}),f(ke,{popupTitle:"Same Top",onClick:g,children:f(Wp,{})})]}),e&&e.length>0&&i&&f(ke,{popupTitle:"Automatic Ranges/Zones picking for all spectra",onClick:y,children:f($r,{})})]})}const Fw=c.exports.memo(_w);function Lw({spectrums:e}){const{data:t,activeSpectrum:n,activeTab:o,displayerMode:s}=$(),l=Ji()("autoRangesTool");return f(Fw,{data:t,activeSpectrum:n,activeTab:o,displayerMode:s,spectrums:e,isAutomaticPickingVisible:l})}function Ow({color:e,activated:t}){return f("div",{style:{backgroundColor:e,height:"12px",width:"12px",opacity:t?1:.1,display:"inline-block"}})}function $w({positiveColor:e,negativeColor:t,activated:n}){return f("svg",{width:"12",height:"12",viewBox:"0 0 12 12",opacity:n?1:.1,children:F("g",{children:[f("path",{d:"M0,0H12L0,12Z",fill:e,strokeWidth:"0"}),f("path",{d:"M12,12H0L12,0Z",fill:t,strokeWidth:"0"})]})})}function Hw(e){const{style:t,onClick:n=()=>null,activated:o}=e;return f("button",{style:t,type:"button",onClick:n,children:e.dimension===2?f($w,S(b({},e.color),{activated:o})):f(Ow,b({activated:o},e.color))})}var zw=c.exports.memo(Hw);function Vw({data:e,onChangeMarkersVisibility:t,markersVisible:n,style:o}){const s=i=>n.findIndex(l=>l.id===i)!==-1;return f("button",{style:S(b({},o),{opacity:s(e.id)&&e.peaks&&e.peaks.values.length>0?1:.1}),type:"button",onClick:()=>t(e),disabled:e.peaks&&e.peaks.values.length===0,children:f(Up,{})})}function jw({data:e,onChangeVisibility:t,style:n}){const o=(s,i)=>e?e.display[i]:!0;return F(et,{children:[e.info.dimension===1&&f("button",{"data-test-id":"hide-show-spectrum-button",style:n,type:"button",onClick:()=>t(e,"isVisible"),children:f(wo,{style:b({},o(e.id,"isVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.color}:{opacity:.1,fill:e.display.color})})}),e.info.dimension===2&&F("div",{style:{minWidth:"40px"},children:[f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isPositiveVisible"),children:f(wo,{style:b({},o(e.id,"isPositiveVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.positiveColor}:{opacity:.1,fill:e.display.positiveColor})})}),f("button",{style:S(b({},n),{width:"20px",minWidth:"20px"}),type:"button",onClick:()=>t(e,"isNegativeVisible"),children:f(wo,{style:b({},o(e.id,"isNegativeVisible")?{opacity:1,strokeWidth:"1px",fill:e.display.negativeColor}:{opacity:.1,fill:e.display.negativeColor})})})]})]})}const Xe={button:{backgroundColor:"transparent",border:"none",width:"26px",minWidth:"26px"},row:{display:"flex",alignContent:"center",height:"25px",borderBottom:"0.55px solid #f1f1f1"},name:{flex:1,height:"100%",display:"flex"},info:{flex:"1 1 1px",height:"100%",display:"block",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"24px"},icon:{display:"flex",margin:"auto",justifyContent:"center"}};function Bw({activeSpectrum:e,markersVisible:t,data:n,onChangeVisibility:o,onChangeMarkersVisibility:s,onChangeActiveSpectrum:i,onOpenSettingModal:l,onContextMenu:r}){var x,y;const a=C=>(C&&(C=C.replace(/(?<value>[0-9]+)/g,"<sub>$<value></sub>")),C),u=e&&e.id===n.id,{color:d,name:h,positiveColor:m,negativeColor:g}=n.display;return F("div",{style:b(b({},Xe.row),u?{backgroundColor:"#fafafa"}:{opacity:e?.2:1}),onContextMenu:r,children:[f(jw,{data:n,onChangeVisibility:o,style:Xe.button}),F("div",{"data-test-id":"activate-deactivate-spectrum-button",style:Xe.name,onClick:()=>i(n),children:[f("div",{style:S(b({},Xe.icon),{width:"16px"}),children:n.info.isFid?f(Kp,{}):n.info.dimension===2?f(qp,{}):f(Pr,{})}),f("span",{style:Xe.info,children:h}),f("div",{style:Xe.info,dangerouslySetInnerHTML:{__html:n.info&&a(n.info.solvent)}}),F("span",{style:Xe.info,children:[f("span",{style:{borderLeft:"0.55px solid #e5e5e5",paddingRight:"5px"}}),(x=n.info)==null?void 0:x.experiment]}),f("span",{style:Xe.info,children:(y=n.info)==null?void 0:y.pulse})]}),f(Vw,{data:n,style:b(b({},Xe.icon),Xe.button),onChangeMarkersVisibility:s,markersVisible:t}),f(zw,{style:Xe.button,dimension:n.info.dimension,color:{positiveColor:m,color:d,negativeColor:g},activated:u,onClick:C=>l(n,C)})]})}var Xw=c.exports.memo(Bw);function Yw(e){const{onColorChange:t=()=>null,name:n}=e,{values:o,setFieldValue:s}=pe(),i=c.exports.useCallback(l=>{t(l),s(n,`${l.hex}${Math.round(l.rgb.a*255).toString(16)}`)},[n,t,s]);return f(Dr.SketchPicker,{color:{hex:V(o,n,"#000")},presetColors:xa,onChangeComplete:l=>i(l)})}var Ws=c.exports.memo(Yw);function Gw(e){const t=e.length,n=Math.floor(t/307200)||1,o=new Float64Array(t/n>>0);let s=0;for(let i=0;i<o.length;i+=n)o[s++]=e[i];return o}function Zw(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,l=t.length>0?t[0].x:0,r=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:l,y:a},{x:r,y:a}]}function Ww({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=Gw(t.re),l=Hr(i,n),r={},a={};for(let u in l.sanplot){const{x:d,y:h}=l.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};r[u]=m,a[u]=Zw(l[u],m,{yLogBase:o})}return{sanPlot:r,lines:a}},[t.re,n,o]);return F("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f("div",{style:{display:"block"},children:F(pn,{width:180,height:220,children:[f(Jp,{title:"Sanplot"}),f(Ke,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:5,right:60})]})}),f("div",{style:{display:"block",width:180,height:180},children:F(pn,{width:180,height:180,children:[f(Ke,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",label:`Intensity [Log${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:5,right:60})]})})]})}var Uw=c.exports.memo(Ww);function Kw({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=c.exports.useCallback(()=>{n.current&&n.current.submitForm()},[]);return f(re,{ref:n,initialValues:e.display,onSubmit:t,children:F("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f("div",{style:{display:"block",position:"relative"},children:f(Ws,{name:"color",onColorChange:o})}),f(Uw,{color:"red",data:e.data})]})})}function qw(e){const r=e,{onAfterChange:t=()=>null,name:n}=r,o=G(r,["onAfterChange","name"]),{values:s,setFieldValue:i}=pe(),l=c.exports.useCallback(a=>{t(a),i(n,a)},[n,t,i]);return f(Qp,b({className:"horizontal-slider",thumbClassName:"thumb",trackClassName:"track",defaultValue:V(s,n,[0,100]),onAfterChange:l,renderThumb:(a,u)=>f("div",S(b({},a),{children:f("span",{children:u.valueNow})})),pearling:!0,minDistance:10},o))}var er=c.exports.memo(qw);function Jw(e){let t=e[0].length,n=e.length,o=Math.floor(t*n/204800)||1;const s=new Float64Array(t*n/o>>0);let i=0;for(let l=0;l<s.length;l+=o)s[i++]=e[l/n>>0][l%n];return s}function Qw(e,t,n){const{log10:o,abs:s}=Math,{yLogBase:i}=n,l=t.length>0?t[0].x:0,r=t.length>0?t[t.length-1].x:0,a=o(s(e))/o(i);return[{x:l,y:a},{x:r,y:a}]}function eE({color:e="red",data:t,options:n={}}){const{yLogBase:o=2}=n,s=c.exports.useMemo(()=>{const i=Jw(t.z),l=Hr(i,n),r={},a={};for(let u in l.sanplot){const{x:d,y:h}=l.sanplot[u];let m=new Array(d.length);for(let g=0;g<d.length;g++)m[g]={x:d[g],y:h[g]};r[u]=m,a[u]=Qw(l[u],m,{yLogBase:o})}return{sanPlot:r,lines:a}},[t.z,n,o]);return F("div",{children:[f("div",{style:{textAlign:"center",paddingBottom:5,paddingTop:5},children:"San Plot"}),F("div",{style:{borderTop:"1px solid #ededed",marginTop:"10px",paddingTop:"10px",display:"flex",flexDirection:"row"},children:[F(pn,{width:220,height:180,children:[f(Ke,{data:s.sanPlot.positive,xAxis:"x",yAxis:"y",label:"positive",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.positive,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.6rem"}}),f($e,{id:"y",label:`Intensity [Log ${o}]`,position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:90,right:5})]}),F(pn,{width:220,height:180,children:[f(Ke,{data:s.sanPlot.negative,xAxis:"x",yAxis:"y",label:"negative",lineStyle:{stroke:e,strokeWidth:1.2},markerStyle:{fill:e,stroke:e}}),f(Ke,{data:s.lines.negative,xAxis:"x",yAxis:"y",label:"noise level",lineStyle:{stroke:"blue",strokeWidth:.8,strokeDasharray:"3, 3"},markerStyle:{fill:e,stroke:e}}),f($e,{id:"x",label:"Pt",position:"bottom",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.5rem"}}),f($e,{id:"y",position:"left",tickLabelStyle:{fontSize:"0.6rem"},labelStyle:{fontSize:"0.7rem"}}),f(Ro,{position:"embedded",bottom:90,right:5})]})]})]})}var tE=c.exports.memo(eE);function nE({data:e,onSubmit:t}){const n=c.exports.useRef(null),o=P`
    .positive {
      display: inline-block;
      .track-1 {
        background-color: ${e.display.positiveColor} !important;
      }
    }
    .negative {
      display: inline-block;

      .track-1 {
        background-color: ${e.display.negativeColor} !important;
      }
    }
  `,s=c.exports.useCallback(()=>{n.current.submitForm()},[]);return p(re,{ref:n,initialValues:e.display,onSubmit:t,children:w("div",{css:o,children:[w("div",{className:"positive",children:[p("span",{style:{padding:"0 10px"},children:"Positive"}),p(Ws,{name:"positiveColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(er,{name:"contourOptions.positive.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(W,{name:"contourOptions.positive.numberOfLayers",onChange:s,type:"number"})]})]}),w("div",{className:"negative",children:[p("span",{style:{padding:"0 10px"},children:"Negative"}),p(Ws,{name:"negativeColor",onColorChange:s}),w("div",{style:{padding:"5px"},children:[p("span",{className:"label",children:"contour Levels [ min - max ]"}),p(er,{name:"contourOptions.negative.contourLevels",onAfterChange:s}),p("span",{className:"label",children:"number of Layers "}),p(W,{name:"contourOptions.negative.numberOfLayers",onChange:s,type:"number"})]})]}),p(tE,{data:e.data})]})})}const oE=P`
  position: fixed;
  z-index: 999999999;
  width:100%;
  height:100%;
  left:0;
  top:0;
  .inner-conatiner{
    position:absolute;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 4px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.15) 0px 8px 16px;
      overflow: auto;
      height: 350px;
  }


  .sketch-picker {
    border-radius: none !important;
    box-shadow: none !important;
  }


  .horizontal-slider {
    width: 80%;
    height: 15px;
  }

  .thumb {
    height: 15px;
    line-height: 15px;
    width: 20px;
    text-align: center;
    color: black;
    border-radius: 5px;
    cursor: grab;
    font-size: 10px;
    background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
    background-image: linear-gradient(top, #f4f1ee, #fff);
  }

  .track {
    top: 0;
    bottom: 0;
    background: #eaeaea;
    border-radius: 999px;
    border-radius: 5px;
  }

  .track-1 {
    background: red;
  }
   
  .label{
    font-size: 12px;
    margin: 8px 0;
    display: block;
  }
 
  }
`;function sE({position:e,data:t,onClose:n}){const o=Y(),{id:s,info:i}=t,l=c.exports.useCallback(d=>{o({type:oc,id:s,display:d})},[o,s]),r=c.exports.useCallback(d=>{d.target===d.currentTarget&&n()},[n]);if(!e)return null;const{x:a,y:u}=e;return p("div",{css:oE,onClick:r,children:p("div",{className:"inner-conatiner",style:{left:i.dimension===2?a-450:a-240,width:i.dimension===2?450:240,padding:i.dimension===2?"10px 0":"",top:u},children:i.dimension===2?p(nE,{onSubmit:l,data:t}):p(Kw,{onSubmit:l,data:t})})})}function iE(){return!0}var lE=c.exports.memo(sE,iE);function rE({data:e,activeSpectrum:t,activeTab:n,onTabChange:o}){const s=c.exports.useRef(),[i,l]=c.exports.useState([]),[r,a]=c.exports.useState(null),[u,d]=c.exports.useState(null),[h,m]=c.exports.useState(!1),g=le(),x=Y();c.exports.useEffect(()=>{if(e){const A=e.reduce((D,R)=>(R.info.dimension===1&&R.display.isPeaksMarkersVisible===!0&&D.push({id:R.id}),D),[]);l(A)}},[e,x]);const y=c.exports.useMemo(()=>e?os("nucleus")(e,!0):[],[e]);c.exports.useEffect(()=>{o({tab:n,data:y[n]})},[n,o,y]);const C=c.exports.useCallback(A=>{const D=i.findIndex(O=>O.id===A.id),R=[...i];D===-1?R.push({id:A.id}):R.splice(D,1),x({type:Si,data:R}),l(R)},[x,i]),v=c.exports.useCallback(A=>{o({tab:A.tabid,data:y[A.tabid]}),x({type:Mi,tab:A.tabid})},[x,o,y]),k=c.exports.useMemo(()=>[{label:"Copy to Clipboard",onClick:async A=>{const{x:D,y:R,info:O}=A;await ms(JSON.stringify({x:D,y:R,info:O},void 0,2))?g.success("Data copied to clipboard"):g.error("Copy to clipboard failed")}},{label:"Delete",onClick:A=>{setTimeout(()=>{x({type:Ti,id:A.id})},0)}}],[g,x]),E=c.exports.useCallback((A,D)=>{Xt(A)||(A.preventDefault(),s.current.handleContextMenu(A,D))},[s]),T=c.exports.useCallback((A,D)=>{d({x:D.nativeEvent.clientX,y:D.nativeEvent.clientY}),a(A),m(!0)},[]),M=c.exports.useCallback((A,D)=>{x({type:Wn,id:A.id,key:D,value:!A.display[D]})},[x]),I=c.exports.useCallback(A=>{setTimeout(()=>{t&&t.id===A.id?x({type:zo,data:null}):x({type:zo,data:{id:A.id}})},0)},[t,x]),N=c.exports.useCallback(()=>{m(!1)},[]);return F("div",{style:{height:"calc(100% - 25px)"},children:[f(Rn,{activeTab:n,onClick:v,children:y&&Object.keys(y).map(A=>{var D;return f(Ne,{tablabel:A,tabid:A,children:(D=y[A])==null?void 0:D.map(R=>f(Xw,{activeSpectrum:t,markersVisible:i,data:R,onChangeVisibility:M,onChangeMarkersVisibility:C,onChangeActiveSpectrum:I,onOpenSettingModal:T,onContextMenu:O=>E(O,R)},R.id))},A)})}),f(Wt,{ref:s,context:k}),h?f(lE,{onClose:N,data:r,position:u}):null]})}const aE=c.exports.memo(rE);function cE({onTabChange:e}){const{data:t,activeSpectrum:n,activeTab:o}=$();return f(aE,{data:t,activeSpectrum:n,activeTab:o,onTabChange:e})}const uE={overflow:"hidden",height:"100%",display:"flex",flexDirection:"column",width:"100%"};function dE(){const[e,t]=c.exports.useState([]),n=c.exports.useCallback(o=>{t(o.data?o.data:[])},[]);return F("div",{style:uE,children:[f(Lw,{spectrums:e}),f(cE,{onTabChange:n})]})}var pE=c.exports.memo(dE);const ye={hmbc:{from:2,to:3},cosy:{from:3,to:4},hsqc:{from:1,to:1},hmqc:{from:1,to:1},inadequate:{from:1,to:1}};function Sd(e,t){return ye[t]&&e.from===ye[t].from&&e.to===ye[t].to}function wd(e){return e.split(/\d+/)[1]}function Ed(e,t){const n=V(e,`state.${t.atomType}.error`,null);if(n){for(let{key:o,color:s}of fi)if(o!=="incomplete"&&(o==="notAttached"||o==="ambiguousAttachment")&&V(n,`${o}`,[]).some(i=>e.values[i].id===t.id))return s}return null}function Ad(e,t,n,o,s){var i;if(e&&e.info.dimension===2){const l=Gn(e,t.signal.id);if(l){const r=t.axis==="x"?"y":"x",a=(i=l[r])==null?void 0:i.delta;if(a!==void 0)return a*n>=o&&a*n<=s}}return!1}function Yo(e,t,n,o,s,i,l){if(e&&e.info.dimension===2){const r=Gn(e,t.signal.id);if((r==null?void 0:r.x.delta)&&(r==null?void 0:r.y.delta))return r.x.delta*n>=o&&r.x.delta*n<=s&&r.y.delta*n>=i&&r.y.delta*n<=l}return!1}function tr(e){var o;let t="X";e.experimentType==="hsqc"||e.experimentType==="hmqc"?t=!e.signal||e.signal.sign===0?"S":`S${e.signal.sign===1?"+":"-"}`:e.experimentType==="hmbc"||e.experimentType==="cosy"||e.experimentType==="tocsy"?t="M":e.experimentType==="noesy"||e.experimentType==="roesy"?t="NOE":e.experimentType==="inadequate"?t="I":e.experimentType==="adequate"&&(t="A");const n=(o=e.signal.j)==null?void 0:o.pathLength;if(n){const s=ye[e.experimentType]&&n.from>=ye[e.experimentType].from&&n.from<=ye[e.experimentType].to&&n.to>=ye[e.experimentType].from&&n.to<=ye[e.experimentType].to;return`${t}${s?"":"*"}`}return t}function Td(e){return Qo(S(b({},e),{edited:S(b({},e.edited),{moved:!0})}))}function Hn(e,t){const n=e.id.split("_");return Qo(S(b({},e),{id:n[t==="x"?0:1],axis:t,match:[],edited:S(b({},e.edited),{moved:!0})}))}function xe(e,t,n,o){const s=Ie(t),i=Ve(e),l=t.id.split("_");return o==="add"?eh(i,s===1?Td(t):Hn(t,n)):(o==="remove"||o==="unmove")&&th(i,n==="x"?l[0]:l[1]),i}function hE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:n,selectedCorrelationIdDim2:o,action:s,link:i,correlations:l}){const r=l.find(x=>x.id===n),a=l.find(x=>x.id===o),u=(r==null?void 0:r.id)!==e.id,d=t&&(a==null?void 0:a.id)!==(t==null?void 0:t.id),h=Ie(i),m=[],g={};if(s==="move"){if(h===1){const x=xe(e,i,"x","remove");let y;r?y=xe(u?r:x,i,"x","add"):y=Pn({atomType:e.atomType,link:[Td(i)]}),m.push(x,y),g.skipDataUpdate=!0}else if(h===2){const x=xe(e,i,"x","remove");m.push(x);const y=xe(t,i,"y","remove");m.push(y),r&&a?(m.push(xe(u?r:x,i,"x","add")),m.push(xe(d?a:y,i,"y","add"))):r&&o==="new"?(m.push(xe(u?r:x,i,"x","add")),m.push(Pn({atomType:t.atomType,link:[Hn(i,"y")]}))):n==="new"&&a?(m.push(Pn({atomType:e.atomType,link:[Hn(i,"x")]})),m.push(xe(d?a:y,i,"y","add"))):n==="new"&&o==="new"&&(m.push(Pn({atomType:e.atomType,link:[Hn(i,"x")]})),m.push(Pn({atomType:t.atomType,link:[Hn(i,"y")]}))),g.skipDataUpdate=!0}}else if(s==="remove"){const x=xe(e,i,"x","remove");if(m.push(x),Ie(i)===2){const y=xe(t,i,"y","remove");m.push(y)}}else s==="unmove"?h===1?r&&m.push(xe(r,i,"x","unmove")):h===2&&r&&a&&(m.push(xe(r,i,"x","unmove")),m.push(xe(a,i,"y","unmove"))):s==="setPathLength"&&(m.push(nr(e,i,"x")),m.push(nr(t,i,"y")));return{editedCorrelations:m,buildCorrelationDataOptions:g}}function nr(e,t,n){var i,l;const o=Ve(e);if(Ie(t)===2){const r=t.id.split("_")[n==="x"?0:1],a=o.link.find(u=>u.id===r);if(a){const u=(i=t.signal.j)==null?void 0:i.pathLength;Sd(u,a.experimentType)?((l=a.signal.j)==null||delete l.pathLength,a.signal.j&&Object.keys(a.signal.j).length===0&&delete a.signal.j,delete a.edited.pathLength):(a.signal.j?a.signal.j.pathLength=u:a.signal.j={pathLength:u},a.edited.pathLength=!0)}}return o}function fE(e,t){e=e.toLowerCase().replace(/\s+/g,"").split(",").map(s=>s==="sp"?"sp1":s).join(","),e=e.replaceAll("sp","");let n=[];return/^(?:[0-9],{0,1})+$/g.test(e)&&(n=e.split(",").filter(s=>s.length>0).map(s=>Number(s))),n=n.filter(s=>s>=(t==="protonsCount"?0:1)&&(t==="protonsCount"||s<=3)),n.filter((s,i,l)=>l.indexOf(s)===i)}function mE(e,t,n,o,s,i,l){if(l.pseudo===!0||n===null||!l.link.some(g=>g.experimentID===n.id))return!1;const r=t.split(",").map(g=>wd(g)),a=1e4,u=o[0]*a,d=o[1]*a,h=s[0]*a,m=s[1]*a;if(i===B.DM_1D){const g=l.link.find(C=>Ie(C)===1);if(!g)return!1;let x=zr(g);if(x===void 0)return!1;if(x*=a,Re(e,g.experimentID,!0)&&r[0]===l.atomType&&x>=u&&x<=d||l.link.some(C=>{const v=Re(e,C.experimentID,!0);return Ad(v,C,a,u,d)}))return!0}else if(i===B.DM_2D){if(!r.includes(l.atomType))return!1;const g=l.link.find(y=>Ie(y)===2);if(!g)return!1;const x=Re(e,g.experimentID,!0);if(Yo(x,g,a,u,d,h,m))return!0;if(l.link.some(y=>{const C=Re(e,y.experimentID,!0);return Yo(C,y,a,u,d,h,m)}))return!0}return!1}function Go({correlation:e}){const{data:t,xDomain:n,yDomain:o,displayerMode:s,activeTab:i,activeSpectrum:l}=$();return c.exports.useMemo(()=>mE(t,i,l,n,o,s,e),[l,i,e,s,t,n,o])}const gE=P`
  margin-top: 10px;
  padding: 5px;
  text-align: center;

  p {
    font-size: 14px;
  }

  button:focus {
    outline: none;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 90px;

    color: white;
    background-color: gray;
  }
`;function or({description:e,onConfirm:t}){const n=c.exports.useCallback(o=>{o.preventDefault(),o.stopPropagation(),t()},[t]);return w("div",{css:gE,children:[p("p",{children:e}),p("button",{type:"button",onClick:n,children:"Confirm"})]})}const xE=P`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  .input-container {
    width: 100%;
    margin-top: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }

  .warning {
    margin-top: 5px;
    color: red;
  }
`;function bE({signal:e,experimentType:t,onEdit:n}){var d,h,m,g;const[o,s]=c.exports.useState(((d=e.j)==null?void 0:d.pathLength)!==void 0?e.j.pathLength.from:((h=ye[t])==null?void 0:h.from)||0),[i,l]=c.exports.useState(((m=e.j)==null?void 0:m.pathLength)!==void 0?e.j.pathLength.to:((g=ye[t])==null?void 0:g.to)||0),[r,a]=c.exports.useState(!1),u=c.exports.useCallback(()=>{const x={from:o,to:i},y=S(b({},e),{j:S(b({},e.j),{pathLength:x})});n(y)},[i,o,n,e]);return c.exports.useEffect(()=>{a(o<=0||o>i)},[i,o]),w("div",{css:xE,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(Q,{title:"Min:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(kt,{type:"number",value:o,onChange:x=>{s(Number(x.target.value))},style:{input:{color:r?"red":"black"}}})}),p(Q,{title:"Max:",style:{label:{marginRight:"5px",fontSize:"14px",fontWeight:"normal"}},children:p(kt,{type:"number",value:i,onChange:x=>{l(Number(x.target.value))}})})]}),r?w("p",{className:"warning",children:["Minimum must not be 0 or higher than the maximum value."," "]}):p(yn,{type:"button",onClick:u,disabled:r,children:"Set"})]})}const yE=P`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  p {
    font-size: 14px;
  }

  .selection-container {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }
`;function vE({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:s}){const[i,l]=c.exports.useState(e.id),[r,a]=c.exports.useState((t==null?void 0:t.id)||void 0);function u(h){const m=lt(h);return`${m?m.toFixed(2):"?"}`}const d=c.exports.useCallback((h,m)=>{const g=o.reduce((x,y)=>(y.pseudo===!1&&y.atomType===n.atomType[m]&&x.push({key:y.id,value:y.id,label:`${y.label.origin}: ${u(y)}`}),x),[]);return g.push({key:"new",value:"new",label:`new -> ${(m===0?lt(e):lt(t)).toFixed(2)}`}),p(Me,{onChange:x=>{m===0?l(x):a(x)},data:g,defaultValue:h.id,style:{width:110,height:25,margin:0,border:"1px solid grey"}})},[e,t,o,n.atomType]);return w("div",{css:yE,children:[p("p",{children:"Move of signals on either one or both axes."}),p("p",{children:'"New" means to separate into a new row or column.'}),w("div",{className:"selection-container",children:[d(e,0),t&&d(t,1)]}),p("button",{type:"button",onClick:()=>s(i,r),children:"Move"})]})}const CE=P`
  width: 490px;
  height: 220px;
  padding: 5px;

  button:focus {
    outline: none;
  }

  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }

    p {
      font-weight: bold;

      margin-bottom: 5px;
      margin-right: 30px;
      padding: 0px 10px;
      width: 100%;

      text-align: center;
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  .tabs-container {
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none;
  }
`;function Qi({correlationDim1:e,correlationDim2:t,link:n,correlations:o,onClose:s,onEdit:i}){const[l,r]=c.exports.useState("move"),a=c.exports.useCallback(()=>{const h=Ie(n);return h===1?` 1D (${n.signal.delta.toFixed(3)})`:h===2?`${n.signal.x?`${n.signal.x.delta.toFixed(2)}`:"?"} (${e.label.origin}), ${n.signal.y?n.signal.y.delta.toFixed(2):"?"} (${t.label.origin})`:""},[e.label.origin,n,t]),u=c.exports.useCallback((h,m,g,x)=>{const{editedCorrelations:y,buildCorrelationDataOptions:C}=hE({correlationDim1:e,correlationDim2:t,selectedCorrelationIdDim1:m,selectedCorrelationIdDim2:g,action:h,link:x||n,correlations:o});i(y,h,x||n,C),s==null||s()},[e,t,o,n,s,i]),d=c.exports.useMemo(()=>p("div",{className:"tabs-container",children:w(Rn,{position:Ui.TOP,activeTab:l,onClick:h=>r(h.tabid),children:[p(Ne,{tablabel:"Move",tabid:"move",children:p(vE,{correlationDim1:e,correlationDim2:t,link:n,correlations:o,onEdit:(h,m)=>u("move",h,m)})}),p(Ne,{tablabel:"Unmove",tabid:"unmove",children:p(or,{description:"Movement of signal to its original place.",onConfirm:()=>u("unmove",e.id,t.id)})}),p(Ne,{tablabel:"Remove",tabid:"remove",children:p(or,{description:"Deletion of signal.",onConfirm:()=>u("remove",void 0,void 0)})}),p(Ne,{tablabel:"J Coupling",tabid:"setPathLength",children:p(bE,{signal:n.signal,experimentType:n.experimentType,onEdit:h=>{const m=S(b({},n),{signal:h});u("setPathLength",e,t,m)}})})]})}),[l,e,t,o,u,n]);return w("div",{css:CE,children:[w("div",{className:"header handle",children:[p(me,{onClick:s}),p("p",{className:"header-info",children:`${n.experimentType.toUpperCase()} signal at ${a()}`})]}),d]})}function kE({spectraData:e,correlationsData:t,correlation:n,onEdit:o}){var k;const s=c.exports.useRef(),i=he(),l=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const E=[];return n.link.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair_X"));const M=gi(e,T.experimentID,T.signal.id,!0);M&&E.push(M)}}),E},[n,e]),r=ie(l),a=c.exports.useCallback(E=>{E.currentTarget.focus(),r.show()},[r]),u=c.exports.useCallback(E=>{E.currentTarget.blur(),r.hide()},[r]),d=Go({correlation:n}),h=c.exports.useMemo(()=>({style:{color:Ed(t,n)||void 0,backgroundColor:r.isActive?"#ff6f0057":d?"#f5f5dc":"inherit"},title:n.pseudo===!1&&n.link.reduce((E,T)=>(T.pseudo===!1&&!E.includes(T.experimentType.toUpperCase())&&E.push(T.experimentType.toUpperCase()),E),[]).sort().join("/"),onMouseEnter:a,onMouseLeave:u}),[n,t,r.isActive,d,a,u]),m=c.exports.useMemo(()=>n.edited.equivalence?{backgroundColor:"#F7F2E0"}:{color:Number.isInteger(n.equivalence)?n.equivalence===1?"#bebebe":"black":"red"},[n]),g=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(E=>Ie(E)===1&&E.pseudo===!1).map(E=>{var T;return{label:`edit 1D (${E.signal.delta.toFixed(3)}${((T=E.edited)==null?void 0:T.moved)===!0?"[MOVED]":""})`,onClick:()=>{r.hide(),i.show(p(Qi,{onClose:()=>i.close(),onEdit:o,link:E,correlationDim1:n,correlationDim2:void 0,correlations:t.values}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete all (${n.label.origin})`,onClick:()=>{i.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{o([n],"removeAll")}},{text:"No"}]}),r.hide()}}]):[],[n,t.values,r,i,o]),x=c.exports.useCallback(E=>{E.preventDefault(),s.current.handleContextMenu(E)},[s]),v=h,{title:y}=v,C=G(v,["title"]);return p("th",S(b({},C),{title:y===!1?void 0:y,children:w("div",{style:{display:"block"},onContextMenu:E=>{g.length>0&&x(E)},children:[p("p",{children:n.label.origin}),p("p",{children:lt(n)?(k=lt(n))==null?void 0:k.toFixed(2):""}),p("p",{style:m,children:Number.isInteger(n.equivalence)?n.equivalence:n.equivalence.toFixed(2)}),p(Wt,{ref:s,context:g})]})}))}function SE({rowCorrelation:e,columnCorrelation:t,commonLinks:n,correlations:o,spectraData:s,onEdit:i}){const l=c.exports.useRef(),r=he(),a=c.exports.useMemo(()=>{const E=[];return n.forEach(T=>{if(T.pseudo===!1){E.push(T.signal.id),E.push(Ce(T.signal.id,"Crosshair"));const M=gi(s,T.experimentID,T.signal.id,!0);M&&E.push(M)}}),E},[n,s]),u=ie(a),d=c.exports.useCallback(E=>{E.currentTarget.focus(),u.show()},[u]),h=c.exports.useCallback(E=>{E.currentTarget.blur(),u.hide()},[u]),m=c.exports.useCallback(E=>{E.preventDefault(),l.current.handleContextMenu(E)},[l]),g=c.exports.useCallback((E,T)=>{const M=e.link.filter(A=>(A.experimentType==="hsqc"||A.experimentType==="hmqc")&&A.pseudo===!0).length;let I,N;if(E==="add"){const A=Qo({experimentType:"hsqc",experimentID:U(),atomType:[t.atomType,e.atomType],id:U(),pseudo:!0,signal:{id:U(),sign:0}});I=xe(t,A,"x","add"),N=xe(e,A,"y","add"),N.edited.protonsCount||(N.protonsCount=[M+1])}else I=xe(t,T,"x","remove"),N=xe(e,T,"y","remove"),N.edited.protonsCount||(N.protonsCount=M-1>0?[M-1]:[]);i([I,N],E,T,{skipDataUpdate:!0})},[t,i,e]),x=c.exports.useMemo(()=>{const E=n.map(M=>{var N;const I=`${tr(M)} (${M.signal.x?M.signal.x.delta.toFixed(2):"?"}, ${M.signal.y?M.signal.y.delta.toFixed(2):"?"})${((N=M.edited)==null?void 0:N.moved)===!0?"[MOVED]":""}`;return M.pseudo===!1?[{label:`edit ${I}`,onClick:()=>{u.hide(),r.show(f(Qi,{onClose:()=>r.close(),onEdit:i,link:M,correlationDim1:t,correlationDim2:e,correlations:o}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}]:[]}).flat(),T=n.find(M=>M.pseudo===!0&&M.experimentType==="hsqc");return e.pseudo===!0&&(T?E.push({label:"remove pseudo HSQC",onClick:()=>g("remove",T)}):E.push({label:"add pseudo HSQC",onClick:()=>g("add")})),E},[t,n,o,g,u,r,i,e]),y=c.exports.useMemo(()=>n.map((E,T)=>{var M;return F("label",{children:[f("label",{style:{color:E.pseudo===!0||((M=E.edited)==null?void 0:M.moved)===!0?"blue":"black"},children:tr(E)}),T<n.length-1&&f("label",{children:"/"})]},E.id)}),[n]),C=c.exports.useMemo(()=>n.reduce((E,T)=>(E.includes(T.experimentType.toUpperCase())||E.push(T.experimentType.toUpperCase()),E),[]).join("/"),[n]),v=Go({correlation:e}),k=Go({correlation:t});return F("td",{onContextMenu:E=>{x.length>0&&m(E)},style:{backgroundColor:u.isActive?"#ff6f0057":k||v?"#f5f5dc":"inherit"},title:C,onMouseEnter:d,onMouseLeave:h,children:[y,f(Wt,{ref:l,context:x})]})}function wE({additionalColumnData:e,correlations:t,correlation:n,styleRow:o,styleLabel:s,onSaveEditEquivalences:i,onSaveEditNumericValues:l,onEditCorrelationTableCellHandler:r,spectraData:a}){var O;const u=c.exports.useRef(),d=he(),h=c.exports.useMemo(()=>{if(n.pseudo===!0)return[];const L=[];return n.link.forEach(H=>{if(H.pseudo===!1){L.push(H.signal.id),L.push(Ce(H.signal.id,"Crosshair_Y"));const X=gi(a,H.experimentID,H.signal.id,!0);X&&L.push(X)}}),L},[n,a]),m=ie(h),g=c.exports.useCallback(L=>{i(n,L.target.value)},[n,i]),x=c.exports.useCallback((L,H)=>{l({correlation:n,values:fE(L.target.value,H),key:H})},[n,l]),y=c.exports.useMemo(()=>e.map(L=>{const H=[];return n.link.forEach(X=>{L.link.forEach(J=>{if(X.axis!==J.axis&&X.experimentID===J.experimentID&&X.signal.id===J.signal.id&&!H.some(z=>z.signal.id===X.signal.id)){let z=X.experimentType;X.signal&&X.signal.sign!==0&&(z+=X.signal.sign===1?" (+)":" (-)"),H.push(Qo(S(b({},X),{experimentLabel:z,axis:void 0,id:`${J.id}_${X.id}`})))}})}),f(SE,{rowCorrelation:n,columnCorrelation:L,commonLinks:H,correlations:t,spectraData:a,onEdit:r},`addColData_${n.id}_${L.id}`)}),[e,n,t,r,a]),C=c.exports.useMemo(()=>n.edited.equivalence?{color:"blue"}:{color:n.equivalence===1?"#bebebe":"black"},[n]),v=c.exports.useCallback(L=>{L.currentTarget.focus(),m.show()},[m]),k=c.exports.useCallback(L=>{L.currentTarget.blur(),m.hide()},[m]),E=Go({correlation:n}),T=c.exports.useMemo(()=>({style:S(b({},o),{backgroundColor:m.isActive?"#ff6f0057":E?"#f5f5dc":"inherit"}),title:n.pseudo===!1&&n.link.reduce((L,H)=>(H.pseudo===!1&&!L.includes(H.experimentType.toUpperCase())&&L.push(H.experimentType.toUpperCase()),L),[]).sort().join("/"),onMouseEnter:v,onMouseLeave:k}),[n.link,n.pseudo,m.isActive,E,v,k,o]),M=c.exports.useMemo(()=>n.pseudo===!1?n.link.filter(L=>Ie(L)===1&&L.pseudo===!1).map(L=>{var H;return{label:`edit 1D (${L.signal.delta.toFixed(3)})${((H=L.edited)==null?void 0:H.moved)===!0?"[MOVED]":""}`,onClick:()=>{m.hide(),d.show(f(Qi,{onClose:()=>d.close(),onEdit:r,link:L,correlationDim1:n,correlationDim2:void 0,correlations:t}),{position:te.MIDDLE_RIGHT,isBackgroundBlur:!1})}}}).concat([{label:`delete ${n.label.origin}`,onClick:()=>{d.showConfirmDialog({message:`All signals of ${n.label.origin} (${lt(n).toFixed(2)}) will be deleted. Are you sure?`,buttons:[{text:"Yes",handler:()=>{r([n],"removeAll")}},{text:"No"}]}),m.hide()}}]):[],[n,m,d,r,t]),I=c.exports.useCallback(L=>{L.preventDefault(),u.current.handleContextMenu(L)},[u]),R=T,{title:N}=R,A=G(R,["title"]),D=N||"";return F("tr",{style:o,children:[F("td",S(b({title:D},A),{style:S(b({},T.style),{styleLabel:s}),onContextMenu:L=>{M.length>0&&I(L)},children:[nh(t,n),f(Wt,{ref:u,context:M})]})),f("td",S(b({title:D},A),{children:lt(n)?(O=lt(n))==null?void 0:O.toFixed(2):""})),f("td",S(b({title:D},A),{children:n.pseudo===!1?n.atomType!=="H"?f(rt,{type:"number",value:n.equivalence,style:C,onSave:g}):f("text",{style:C,children:n.equivalence}):""})),f("td",S(b({title:D},A),{children:n.atomType!=="H"?f(rt,{type:"text",value:n.protonsCount.join(","),style:n.edited.protonsCount?{color:"blue"}:{},onSave:L=>x(L,"protonsCount")}):""})),f("td",S(b({title:D},A),{style:S(b({},T.style),{borderRight:"1px solid"}),children:n.atomType!=="H"?f(rt,{type:"text",value:n.hybridization.map(L=>`sp${L}`).join(","),style:n.edited.hybridization?{color:"blue"}:{},onSave:L=>x(L,"hybridization")}):""})),y]})}const EE=P`
  overflow: auto;
  height: 100%;
  display: block;
  table {
    border-spacing: 0;
    border: 1px solid #dedede;
    width: 100%;
    font-size: 12px;
    height: 100%;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  thead tr {
    background-color: white !important;
  }
  th {
    position: sticky;
    background-color: white;
    top: 0;
  }

  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;function AE({correlationsData:e,filteredCorrelationsData:t,additionalColumnData:n,editEquivalencesSaveHandler:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,showProtonsAsRows:l,spectraData:r}){const a=c.exports.useMemo(()=>t?t.values.filter(d=>l?d.atomType==="H":d.atomType!=="H").map(d=>p(wE,{additionalColumnData:n,correlations:e.values,correlation:d,styleRow:{backgroundColor:"mintcream"},styleLabel:d.atomType==="H"?{color:Ed(e,d)}:{},onSaveEditEquivalences:o,onSaveEditNumericValues:s,onEditCorrelationTableCellHandler:i,spectraData:r},`correlation${d.atomType}${d.id}`)):[],[t,l,n,e,o,s,i,r]),u=c.exports.useMemo(()=>n.map(d=>p(kE,{spectraData:r,correlationsData:e,correlation:d,onEdit:i},`additionalCorrelationHeader_${d.id}`)),[n,e,i,r]);return p("div",{css:EE,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"\u03B4 (ppm)"}),p("th",{children:"Equiv"}),p("th",{children:"#H"}),p("th",{style:{borderRight:"1px solid"},children:"Hybrid"}),u]})}),p("tbody",{children:a})]})})}const TE=P`
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  white-space: nowrap;
  span {
    margin-left: 8px;
  }
`;function DE({correlationsData:e}){if(!e)return null;const t=oh(e.options.mf),n=Object.keys(t).length>0?Object.keys(t).map((o,s)=>{const i=e.state[o],l=i?i.error:void 0,r=l?Zg.findIndex(a=>l[a]!==void 0):"black";return p("span",{style:{color:i?i.complete===!0&&(!l||Object.keys(l).length===0)?"green":r>=0?fi[r].color:"black":"black"},children:`${o}: ${i?i.current:"-"}/${t[o]}   `},`molFormulaView_${s}`)}):p("p",{style:{fontStyle:"italic",color:"orange"},children:"Molecular formula is not set"});return p("div",{css:TE,children:n})}var RE=c.exports.memo(DE);const IE=P`
  text-align: center;

  input {
    height: 100%;
    width: 200px;
    border-radius: 5px;
    border: 0.55px solid #c7c7c7;
    margin: 0px 5px 0px 5px;
    text-align: center;
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 36px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }
`;function NE({onSave:e=()=>null,previousMF:t}){const[n,o]=c.exports.useState(""),[s,i]=c.exports.useState(!0),[l,r]=c.exports.useState(!1),a=c.exports.useCallback(h=>{if(h.trim().length===0)return!1;try{return Fa(h),!0}catch{return!1}},[]),u=c.exports.useCallback(h=>{r(!0),a(h.target.value)?(i(!0),o(h.target.value)):(i(!1),o(""))},[a]),d=c.exports.useCallback(()=>{e(l?n.trim():t)},[l,n,e,t]);return w("div",{css:IE,children:[p("input",{type:"text",onChange:u,defaultValue:t}),p("button",{type:"button",onClick:d,disabled:!s,children:s?"Set":"Invalid"})]})}const ME=P`
  overflow: auto;
  width: 400px;
  height: 550px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  .info {
    margin-top: 0;
    margin-bottom: 10px;
    padding: 0px 10px;
    width: 100%;

    text-align: center;
  }

  .optional {
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 0px 10px;

    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .optional2 {
    margin-top: 5px;
    margin-bottom: 25px;
    padding: 0px 10px;
    width: 100%;

    text-align: center;
  }
`;function PE({onClose:e,onSave:t,molecules:n,previousMF:o}){const[s,i]=c.exports.useState(0);c.exports.useEffect(()=>{n&&n.length>0&&i(0)},[n]);const l=c.exports.useCallback(u=>{t==null||t(u),e==null||e()},[e,t]),r=c.exports.useCallback(()=>{t==null||t(n[s].mf),e==null||e()},[s,n,e,t]),a=c.exports.useCallback(u=>{i(u)},[]);return w("div",{css:ME,children:[p("div",{className:"header handle",children:p(me,{onClick:e})}),p("div",{children:p("p",{className:"info",children:"Please type in a molecular formula!"})}),p(NE,{onSave:l,previousMF:o}),w("div",{children:[p("p",{className:"optional",children:"OR"}),p("p",{className:"optional2",children:"Select a molecule as reference!"})]}),p(fd,{molecules:n,onChange:a}),p("button",{type:"button",onClick:r,children:"Set"})]})}const _E=P`
  width: 220px;
  height: 270px;
  padding: 5px;
  text-align: center;

  button:focus {
    outline: none;
  }

  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;

    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      user-select: none;
    }

    button {
      height: 36px;
      margin: 2px;
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 20%;

    color: white;
    background-color: gray;
  }

  table {
    margin-top: 10px;
    width: 100%;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input {
      width: 100px;
      text-align: center;
      border-radius: 5px;
      border: 0.55px solid #c7c7c7;
    }
  }
`;function FE({onClose:e,onSave:t,previousTolerance:n}){const[o,s]=c.exports.useState(),[i,l]=c.exports.useState({});c.exports.useEffect(()=>{if(n){s(n);const d={};Object.keys(n).forEach(h=>{d[h]=!0}),l(d)}else s(void 0)},[n]);const r=c.exports.useCallback(()=>{t==null||t(o),e==null||e()},[e,t,o]),a=c.exports.useCallback((d,h)=>{const m=d.target.value;m.trim().length>0?(s(S(b({},o),{[h]:Number(m)})),l(S(b({},i),{[h]:!0}))):l(S(b({},i),{[h]:!1}))},[i,o]),u=c.exports.useMemo(()=>o?Object.keys(o).map(d=>w("tr",{children:[p("td",{children:d}),p("td",{children:p("input",{type:"number",onChange:h=>a(h,d),defaultValue:o[d],style:i[d]?{}:{backgroundColor:"orange"}})})]},`tolerance_${d}`)):void 0,[i,a,o]);return w("div",{css:_E,children:[w("div",{className:"header handle",children:[p("span",{children:"Set Shift Tolerances"}),p(me,{onClick:e})]}),w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{children:"Atom"}),p("th",{children:"Value"})]})}),p("tbody",{children:u})]}),p("button",{type:"button",onClick:r,disabled:Object.keys(i).some(d=>!i[d]),children:"Set"})]})}const LE=P`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;

  .extra-header-content {
    display: flex;
    width: 100%;

    .overview-container {
      width: 100%;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }

    .table-view-selection {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 2px;

      white-space: nowrap;

      label {
        font-size: 13px;
      }
    }
  }
`;function OE(){const{molecules:e,correlations:t,data:n,xDomain:o,yDomain:s,displayerMode:i,activeTab:l}=$(),r=Y(),a=he(),u=je(),[d,h]=c.exports.useState([]),[m,g]=c.exports.useState("H"),[x,y]=c.exports.useState(!1),[C,v]=c.exports.useState(!1),k=c.exports.useMemo(()=>{const z=j=>{if(j.pseudo===!0)return!1;const K=l.split(",").map(st=>wd(st)),ne=1e4,Pe=o[0]*ne,ft=o[1]*ne,Kt=s[0]*ne,qt=s[1]*ne;if(i===B.DM_1D){const st=j.link.find(Qt=>Ie(Qt)===1);if(!st)return!1;let Jt=zr(st);if(Jt===void 0)return!1;if(Jt*=ne,Re(n,st.experimentID,!0)&&K[0]===j.atomType&&Jt>=Pe&&Jt<=ft||j.link.some(Qt=>{const Md=Re(n,Qt.experimentID,!0);return Ad(Md,Qt,ne,Pe,ft)}))return!0}else if(i===B.DM_2D){if(!K.includes(j.atomType))return!1;const st=j.link.find(Nn=>Ie(Nn)===2);if(!st)return!1;const Jt=Re(n,st.experimentID,!0);if(Yo(Jt,st,ne,Pe,ft,Kt,qt))return!0;if(j.link.some(Nn=>{const Qt=Re(n,Nn.experimentID,!0);return Yo(Qt,Nn,ne,Pe,ft,Kt,qt)}))return!0}return!1};if(t){const j=C?t.values.filter(K=>z(K)):t.values;return S(b({},t),{values:j})}},[l,t,i,C,n,o,s]),E=c.exports.useCallback(z=>{r({type:cc,payload:{mf:z}})},[r]),T=c.exports.useCallback(z=>{r({type:uc,payload:{tolerance:z}})},[r]),M=c.exports.useCallback(()=>{a.show(p(PE,{onClose:()=>a.close(),onSave:E,molecules:e,previousMF:t.options.mf}))},[t,E,a,e]),I=c.exports.useCallback(()=>{a.show(p(FE,{onClose:()=>a.close(),onSave:T,previousTolerance:t.options.tolerance}))},[t,T,a]),N=c.exports.useMemo(()=>["H","H-H"].concat(t?t.values.map(j=>j.atomType).filter((j,K,ne)=>j!=="H"&&ne.indexOf(j)===K):[]).map(j=>({key:j,label:j,value:j})),[t]);c.exports.useEffect(()=>{const z=m.split("-")[0];h(k?k.values.filter(j=>j.atomType===z).reverse():[])},[k,m]);const A=c.exports.useCallback((z,j)=>{r({type:Bs,payload:{id:z.id,correlation:S(b({},z),{equivalence:j,edited:S(b({},z.edited),{equivalence:j!==1})})}})},[r]),D=c.exports.useCallback(({correlation:z,values:j,key:K})=>{r({type:Bs,payload:{id:z.id,correlation:S(b({},z),{[K]:j,edited:S(b({},z.edited),{[K]:!0})}),options:{skipDataUpdate:!0}}})},[r]),R=c.exports.useCallback((z,j)=>{r({type:rc,payload:{correlations:z,options:j}})},[r]),O=c.exports.useCallback(z=>{r({type:ac,payload:{correlation:z,assignmentData:u}})},[u,r]),L=c.exports.useCallback(z=>{const j=Ie(z);if(j===1){const K=Re(n,z.experimentID,!1),ne=mi(K,z.signal.id),Pe=Ba(K,z.signal.id);r({type:wc,payload:{spectrum:K,range:ne,signal:Pe,assignmentData:u}})}else if(j===2){const K=Re(n,z.experimentID,!1),ne=_o(K,z.signal.id),Pe=Gn(K,z.signal.id);r({type:Lc,payload:{spectrum:K,zone:ne,signal:Pe,assignmentData:u}})}},[u,r,n]),H=c.exports.useCallback(z=>{var K;if(Ie(z)===2){const ne=Re(n,z.experimentID,!1),Pe=_o(ne,z.signal.id),ft=Gn(ne,z.signal.id);r({type:Oc,payload:{spectrum:ne,zone:Pe,signal:ft,pathLength:(K=z.signal.j)==null?void 0:K.pathLength}})}},[r,n]),X=c.exports.useCallback((z,j,K,ne)=>{j==="add"||j==="move"||j==="remove"||j==="unmove"||j==="setPathLength"?(K&&K.pseudo===!1&&(j==="remove"?L(K):j==="setPathLength"&&H(K)),R(z,ne)):j==="removeAll"&&O(z[0])},[H,O,L,R]),J=c.exports.useCallback(()=>{v(!C)},[C]);return w("div",{css:LE,children:[w(ot,{canDelete:!1,counter:t?t.values.length:0,onFilter:J,filterToolTip:C?"Show all correlations":"Hide correlations out of view",filterIsActive:C,counterFiltered:k==null?void 0:k.values.length,children:[p(we,{title:`Set molecular formula (${t.options.mf})`,popupPlacement:"right",children:p("button",{type:"button",onClick:M,children:p(sh,{})})}),p(we,{title:"Set shift tolerance",popupPlacement:"right",children:p("button",{type:"button",onClick:I,children:p(ih,{})})}),w("div",{className:"extra-header-content",children:[p("div",{className:"overview-container",children:p(RE,{correlationsData:t})}),p("div",{className:"table-view-selection",children:w("span",{children:[p("label",{children:"View:"}),p(Me,{onChange:z=>{g(z),y(z==="H-H")},data:N,defaultValue:m,style:{fontSize:"12px",width:"70px",height:"18px",border:"1px solid grey"}})]})})]})]}),p(AE,{correlationsData:t,filteredCorrelationsData:k,additionalColumnData:d,editEquivalencesSaveHandler:A,onSaveEditNumericValues:D,onEditCorrelationTableCellHandler:X,showProtonsAsRows:x,spectraData:n})]})}var $E=c.exports.memo(OE);const Ds={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},row:{display:"flex",margin:"5px 0px"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"30%",textAlign:"center"}},HE=[{id:1,label:"From :",checkController:"showFrom",formatController:"fromFormat"},{id:2,label:"To :",checkController:"showTo",formatController:"toFormat"},{id:3,label:"Absolute :",checkController:"showAbsolute",formatController:"absoluteFormat"},{id:4,label:"Relative :",checkController:"showRelative",formatController:"relativeFormat"}];function zE({nucleus:e,innerRef:t}){const n=le(),o=ce(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{if(e){const r=e.reduce((u,d)=>(u[d]=$v,u),{}),a=pt(o.current,"formatting.panels.zones");s.current.setValues(a||r)}},[e,o]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{o.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"zones",value:r}}),n.success("zones preferences saved successfully")},[n,o]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}}),[]),f("div",{style:Ds.container,children:f(re,{onSubmit:l,ref:s,children:e==null?void 0:e.map(r=>F("div",{style:Ds.groupContainer,children:[f(Le,{style:Ds.header,value:r}),HE.map(a=>f(Fe,{label:a.label,checkControllerName:`${r}.${a.checkController}`,formatControllerName:`${r}.${a.formatController}`},a.id))]},r))})})}const VE=c.exports.memo(zE);function jE(e,t){const n=xs();return f(VE,{innerRef:t,nucleus:n})}var BE=c.exports.forwardRef(jE);const XE=P`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  text-align: center;

  .input-container {
    width: 100%;
    margin-top: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    flex: 2;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 30px;
    margin: 0 auto;
    margin-top: 15px;
    display: block;
    width: 60px;

    color: white;
    background-color: gray;
  }

  .warning {
    margin-top: 5px;
    color: red;
  }
`;function YE({signalIndex:e}){var o,s,i,l,r,a,u,d,h,m,g,x,y,C,v,k,E,T;const{errors:t,values:n}=pe();return w("div",{css:XE,children:[p("p",{children:"Setting of the minimum and maximum path length (J coupling)."}),w("div",{className:"input-container",children:[p(Zs,{name:`signals[${e}].j.pathLength.from`,defaultValue:((s=(o=n.signals[e].j)==null?void 0:o.pathLength)==null?void 0:s.from)||((i=ye[n.experimentType])==null?void 0:i.from)||1,label:"Min: ",style:{input:{color:((a=(r=(l=t.signals)==null?void 0:l[e].j)==null?void 0:r.pathLength)==null?void 0:a.from)?"red":"black"}},min:1,max:((d=(u=n.signals[e].j)==null?void 0:u.pathLength)==null?void 0:d.to)||((h=ye[n.experimentType])==null?void 0:h.to),pattern:"[1-9]+"}),p(Zs,{name:`signals[${e}].j.pathLength.to`,defaultValue:((g=(m=n.signals[e].j)==null?void 0:m.pathLength)==null?void 0:g.to)||((x=ye[n.experimentType])==null?void 0:x.to)||1,label:"Max: ",style:{input:{color:((v=(C=(y=t.signals)==null?void 0:y[e].j)==null?void 0:C.pathLength)==null?void 0:v.to)?"red":"black"}},min:((E=(k=n.signals[e].j)==null?void 0:k.pathLength)==null?void 0:E.from)||((T=ye[n.experimentType])==null?void 0:T.from)||1,pattern:"[1-9]+"})]})]})}function GE({signalIndex:e}){return f(YE,{signalIndex:e})}const ZE=P`
  text-align: center;
  width: 100%;

  .errorText {
    color: red;
  }

  .infoText {
    padding: 10px;
    margin: 10px 0;
    font-size: 14px;
    text-align: left;
    color: white;
    background-color: #5f5f5f;
    border-radius: 5px;
  }
`,WE=P`
  color: red;
`,UE=P`
  display: inline-grid;
  list-style: none;
  padding: 0.5rem 1.5rem;
`;function KE(){const{values:e,setFieldValue:t,errors:n}=pe(),o=c.exports.useCallback(r=>!!((n==null?void 0:n.signals)&&(n==null?void 0:n.signals[r])),[n]),s=c.exports.useMemo(()=>e.signals.length>0?e.signals.map((a,u)=>p(Ne,{tabid:`${u}`,tabstyles:o(u)?WE:UE,render:()=>w("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:"11px"},children:[w("span",{children:["\u{1D6C5}",p("sub",{children:a.x.nucleus}),": ",a.x.delta.toFixed(2)]}),w("span",{children:["\u{1D6C5}",p("sub",{children:a.y.nucleus}),": ",a.y.delta.toFixed(2)]})]}),children:p(GE,{signalIndex:u})},`signalForm_zone${u}`)):[],[o,e.signals]),i=c.exports.useCallback(({tabid:r})=>{t("activeTab",r)},[t]),l=c.exports.useCallback(({tabid:r})=>{const a=e.signals.filter((u,d)=>d!==Number(r));t("signals",a)},[t,e.signals]);return w("div",{children:[p("div",{css:ZE}),p(Rn,{activeTab:e.activeTab,onClick:i,onDelete:l,children:s})]})}const qE=()=>c.exports.useMemo(()=>ee().shape({signals:Ps().of(ee().shape({j:ee().shape({pathLength:ee().shape({from:ae().required().positive().integer(),to:ae().required().positive().integer()})})})).min(1,"There must be at least one signal in a zone!")}),[]),JE=P`
  width: 500px;
  height: 250px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      border-left: 1px solid #ececec;
      padding-left: 6px;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 5px;

      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
  }
`;function QE({onSaveEditZoneModal:e=()=>null,onCloseEditZoneModal:t=()=>null,onZoomEditZoneModal:n=()=>null,rowData:o}){const s=c.exports.useRef(null),i=qE(),l=c.exports.useCallback(()=>{n(o)},[n,o]);c.exports.useEffect(()=>{l()},[l]);const r=c.exports.useCallback(()=>{t()},[t]),a=c.exports.useCallback(async d=>{const h=S(b({},o),{signals:d.signals.map(m=>{var g,x;return Sd((g=m.j)==null?void 0:g.pathLength,o.tableMetaInfo.experiment)&&((x=m.j)==null||delete x.pathLength,m.j&&Object.keys(m.j).length===0&&delete m.j),m})});await e(h),r()},[r,e,o]),u=c.exports.useMemo(()=>({activeTab:"0",signals:o.signals.map(d=>{var h,m;return S(b({},d),{j:b({pathLength:{from:((h=ye[o.tableMetaInfo.experiment])==null?void 0:h.from)||1,to:((m=ye[o.tableMetaInfo.experiment])==null?void 0:m.to)||1}},d.j)})})}),[o.signals,o.tableMetaInfo.experiment]);return p("div",{css:JE,children:w(re,{ref:s,initialValues:u,validationSchema:i,onSubmit:a,children:[w("div",{className:"header handle",children:[p(yn,{onClick:l,className:"zoom-button",children:p(Qn,{title:"Set to default view on range in spectrum"})}),p("span",{children:"Zone and Signal edition"}),p(Ki,{onClick:()=>s.current.submitForm(),popupTitle:"Save and exit"}),p(me,{onClick:r})]}),p(KE,{})]})})}const e2={marginLeft:2,marginRight:2,border:"none",height:"20px"};function t2({rowData:e,rowSpanTags:t}){const n=Y(),o=je(),s=he(),i=c.exports.useCallback(d=>{n({type:Jc,payload:{rowData:e,value:d}})},[n,e]),l=c.exports.useCallback(()=>{n({type:ds,payload:{id:e.id,assignmentData:o}})},[o,n,e]),r=c.exports.useCallback(()=>{const d=Math.abs(e.x.from-e.x.to)*10;n({type:ls,xDomain:e.x.from<=e.x.to?[e.x.from-d,e.x.to+d]:[e.x.to-d,e.x.from+d]});const h=Math.abs(e.y.from-e.y.to)*10;n({type:Ci,yDomain:e.y.from<=e.y.to?[e.y.from-h,e.y.to+h]:[e.y.to-h,e.y.from+h]})},[n,e.x.from,e.x.to,e.y.from,e.y.to]),a=c.exports.useCallback(d=>{n({type:Qc,payload:{editedRowData:d}})},[n]),u=c.exports.useCallback(()=>{n({type:co,payload:{selectedTool:_.editRange.id,tempRange:e}}),s.show(f(QE,{onCloseEditZoneModal:()=>s.close(),onSaveEditZoneModal:a,onZoomEditZoneModal:()=>r(),rowData:e}),{position:te.MIDDLE_RIGHT,transition:Je.SCALE,isBackgroundBlur:!1})},[n,s,e,a,r]);return F(c.exports.Fragment,{children:[f("td",{children:f(Me,{onChange:d=>{i(d)},data:ni,defaultValue:e.tableMetaInfo.signal.kind,style:e2})}),F("td",S(b({},t),{children:[f("button",{type:"button",className:"delete-button",onClick:l,children:f(St,{})}),f("button",{type:"button",className:"zoom-button",onClick:r,children:f(Qn,{title:"Zoom to zone in spectrum"})}),f("button",{type:"button",className:"edit-button",onClick:u,children:f(Lr,{color:"blue"})})]}))]})}function sr({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:l,showUnlinkButton:r,setShowUnlinkButton:a}){return f("td",S(b({},o),{onClick:u=>s(u,t,l),style:n.isActive||t.isActive&&t.activeAxis===l?{color:"red",fontWeight:"bold"}:void 0,children:V(e,`tableMetaInfo.signal.${l}.diaIDs`,[]).length>0?F("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.tableMetaInfo.signal[l].diaIDs.length," ",f("sup",{children:f("button",{type:"button",style:{visibility:r?"visible":"hidden",padding:0,margin:0},onClick:u=>i(u,!1,l),children:f(Jo,{color:"red"})})})]}):t.isActive&&t.activeAxis===l?"0":""}))}function n2({rowData:e,assignmentSignal:t,onHoverSignalX:n,onHoverSignalY:o,showUnlinkButtonSignalX:s,showUnlinkButtonSignalY:i,setShowUnlinkButtonSignalX:l,setShowUnlinkButtonSignalY:r,onClick:a,onUnlink:u,highlightSignalX:d,highlightSignalY:h}){return F(c.exports.Fragment,{children:[f(sr,{rowData:e,assignment:t,highlight:d,onHover:n,onClick:a,onUnlink:u,axis:"x",showUnlinkButton:s,setShowUnlinkButton:l}),f(sr,{rowData:e,assignment:t,highlight:h,onHover:o,onClick:a,onUnlink:u,axis:"y",showUnlinkButton:i,setShowUnlinkButton:r})]})}function o2({rowData:e,onHoverSignalX:t,onHoverSignalY:n}){const o=Y(),s=V(e,"tableMetaInfo.signal.x.delta",null),i=V(e,"tableMetaInfo.signal.y.delta",null),l=V(e,"tableMetaInfo.signal.id",void 0),r=c.exports.useCallback(u=>{const d=u.target.value;o({type:Xs,payload:{zoneID:e.id,signal:{id:l,x:d}}})},[o,l,e.id]),a=c.exports.useCallback(u=>{const d=u.target.value;o({type:Xs,payload:{zoneID:e.id,signal:{id:l,y:d}}})},[o,l,e.id]);return F(c.exports.Fragment,{children:[f("td",S(b({},t),{children:s!==null?f(rt,{value:s.toFixed(2),onSave:r,type:"number",style:{padding:"0.1rem 0.4rem"}}):""})),f("td",S(b({},n),{children:i!==null?f(rt,{value:i.toFixed(2),onSave:a,type:"number",style:{padding:"0.1rem 0.4rem"}}):""}))]})}function ir({rowData:e,assignment:t,highlight:n,onHover:o,onClick:s,onUnlink:i,axis:l,showUnlinkButton:r,setShowUnlinkButton:a,rowSpanTags:u}){return f("td",S(b(b({},u),o),{onClick:d=>s(d,t,l),children:V(e,`${l}.nbAtoms`,0)>0?V(e,`${l}.diaIDs`,0).length>0?F("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e[l].nbAtoms," ","(",f("span",{style:t.isActive&&t.activeAxis===l||t.isOnHover&&t.onHoverAxis===l||n.isActive?{color:"red",fontWeight:"bold"}:{color:"black",fontWeight:"normal"},children:V(e,`${l}.diaIDs`,[]).length}),")"," ",f("sup",{children:f("button",{type:"button",style:{visibility:r?"visible":"hidden",padding:0,margin:0},onClick:d=>i(d,!0,l),children:f(Jo,{color:"red"})})})]}):t.isActive&&t.activeAxis===l?F("div",{children:[`${V(e,`${l}.nbAtoms`,"")} (`,f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):e[l].nbAtoms:t.isActive&&t.activeAxis===l?F("div",{children:["0 (",f("span",{style:{color:"red",fontWeight:"bold"},children:"0"}),")"]}):""}))}function s2({rowData:e,assignmentZone:t,onHoverZoneX:n,onHoverZoneY:o,showUnlinkButtonZoneX:s,showUnlinkButtonZoneY:i,setShowUnlinkButtonZoneX:l,setShowUnlinkButtonZoneY:r,rowSpanTags:a,onClick:u,onUnlink:d,highlightZoneX:h,highlightZoneY:m}){return F(c.exports.Fragment,{children:[f(ir,{rowData:e,assignment:t,highlight:h,onHover:n,onClick:u,onUnlink:d,axis:"x",showUnlinkButton:s,setShowUnlinkButton:l,rowSpanTags:a}),f(ir,{rowData:e,assignment:t,highlight:m,onHover:o,onClick:u,onUnlink:d,axis:"y",showUnlinkButton:i,setShowUnlinkButton:r,rowSpanTags:a})]})}const i2={backgroundColor:"#ff6f0057"},l2={backgroundColor:"#f5f5dc"};function r2({rowData:e,onUnlink:t,onContextMenu:n,rowIndex:o}){const s=ct(e.id),i=ie([s.id]),l=ie([Ce(s.id,"X")].concat(s.assigned.x||[])),r=ie([Ce(s.id,"Y")].concat(s.assigned.y||[])),a=ct(e.tableMetaInfo.id),u=ie([Ce(a.id,"X")].concat(a.assigned.x||[],Ce(a.id,"Crosshair"))),d=ie([Ce(a.id,"Y")].concat(a.assigned.y||[],Ce(a.id,"Crosshair"))),[h,m]=c.exports.useState(!1),[g,x]=c.exports.useState(!1),[y,C]=c.exports.useState(!1),[v,k]=c.exports.useState(!1),E=c.exports.useMemo(()=>({rowSpan:e.tableMetaInfo.rowSpan,style:V(e,"tableMetaInfo.hide",!1)===!0?{display:"none"}:null}),[e]),T=c.exports.useCallback((R,O,L)=>{R&&R.stopPropagation(),t(e,O,e.tableMetaInfo.signalIndex,L),L==="x"?O!==void 0?O?(m(!1),s.removeAll("x")):(C(!1),a.removeAll("x")):(m(!1),C(!1)):L==="y"?O!==void 0?O?(x(!1),s.removeAll("y")):(k(!1),a.removeAll("y")):(x(!1),k(!1)):(m(!1),s.removeAll("x"),C(!1),a.removeAll("x"),x(!1),s.removeAll("y"),k(!1),a.removeAll("y"))},[a,s,t,e]),M=c.exports.useCallback((R,O,L)=>{R.stopPropagation(),O.onClick(L)},[]),I=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("x"),l.show()},onMouseLeave:()=>{s.onMouseLeave("x"),l.hide()}}),[s,l]),N=c.exports.useMemo(()=>({onMouseEnter:()=>{s.onMouseEnter("y"),r.show()},onMouseLeave:()=>{s.onMouseLeave("y"),r.hide()}}),[s,r]),A=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("x"),u.show()},onMouseLeave:()=>{a.onMouseLeave("x"),u.hide()}}),[a,u]),D=c.exports.useMemo(()=>({onMouseEnter:()=>{a.onMouseEnter("y"),d.show()},onMouseLeave:()=>{a.onMouseLeave("y"),d.hide()}}),[a,d]);return w("tr",S(b({onContextMenu:R=>n(R,e),style:i.isActive||s.isActive?i2:V(e,"tableMetaInfo.isConstantlyHighlighted",!1)===!0?l2:null},i.onHover),{children:[p("td",S(b({},E),{children:o+1})),p(o2,{rowData:e,onHoverSignalX:A,onHoverSignalY:D}),p(n2,{rowData:e,assignmentSignal:a,onHoverSignalX:A,onHoverSignalY:D,showUnlinkButtonSignalX:y,showUnlinkButtonSignalY:v,setShowUnlinkButtonSignalX:R=>C(R),setShowUnlinkButtonSignalY:R=>k(R),onClick:M,onUnlink:T,highlightSignalX:u,highlightSignalY:d}),p(s2,{rowData:e,assignmentZone:s,onHoverZoneX:I,onHoverZoneY:N,showUnlinkButtonZoneX:h,showUnlinkButtonZoneY:g,setShowUnlinkButtonZoneX:R=>m(R),setShowUnlinkButtonZoneY:R=>x(R),rowSpanTags:E,onClick:M,onUnlink:T,highlightZoneX:l,highlightZoneY:r}),p(t2,{rowData:e,rowSpanTags:E})]}))}const a2=P`
  border-spacing: 0;
  border: 1px solid #dedede;
  width: 100%;
  font-size: 12px;
  .react-contextmenu-wrapper {
    display: contents;
  }
  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  thead tr:nth-of-type(1) th {
    top: 0;
  }
  thead tr:nth-of-type(2) th {
    top: 21px;
  }
  th {
    position: sticky;
    background-color: white;
    z-index: 2;
  }
  th,
  td {
    white-space: nowrap;
    text-align: center;
    margin: 0;
    padding: 0.1rem 0.4rem;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;

    :last-child {
      border-right: 0;
    }
    button {
      background-color: transparent;
      border: none;
      padding: 0 5px;
    }
  }
`;function c2({tableData:e,onUnlink:t,context:n,nuclei:o,experiment:s}){const i=c.exports.useRef(null),l=c.exports.useCallback((m,g)=>{Xt(m)||(m.preventDefault(),i.current.handleContextMenu(m,g))},[i]),r=c.exports.useMemo(()=>{const m=[];return e.forEach((g,x)=>{g.signals.length===1?m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:g.signals[0],rowIndex:x,signalIndex:0,id:g.signals[0].id,experiment:s,nuclei:o})})):g.signals.length>1&&g.signals.forEach((y,C)=>{let v=!1,k=null;C<g.signals.length-1&&C===0?k=g.signals.length:v=!0,m.push(S(b({},g),{tableMetaInfo:S(b({},g.tableMetaInfo),{signal:y,rowSpan:k,hide:v,rowIndex:x,signalIndex:C,id:y.id,experiment:s})}))})}),m},[s,o,e]),{items:a,isSortedDesc:u,onSort:d}=Cd(r),h=c.exports.useMemo(()=>a.map((m,g)=>p(r2,{rowIndex:g,rowData:m,onUnlink:t,onContextMenu:(x,y)=>l(x,y)},`${m.tableMetaInfo.id}`)),[l,a,t]);return w("div",{children:[w("table",{css:a2,children:[w("thead",{children:[w("tr",{children:[p("th",{rowSpan:2,children:"#"}),p("th",{colSpan:2,children:"\u03B4 (ppm)"}),p("th",{colSpan:2,children:p(Or,{})}),p("th",{colSpan:2,children:"\u03A3"}),p("th",{rowSpan:2,children:"Kind"}),p("th",{rowSpan:2,children:""})]}),w("tr",{children:[p("th",S(b({id:"tableMetaInfo.signal.x.delta"},d),{children:w(en,{text:"F2",children:[o[0]," ",u("tableMetaInfo.signal.x.delta").content]})})),p("th",S(b({id:"tableMetaInfo.signal.y.delta"},d),{children:w(en,{text:"F1",children:[o[1]," ",u("tableMetaInfo.signal.y.delta").content]})})),p("th",{children:p(en,{text:"F2",children:o[0]})}),p("th",{children:p(en,{text:"F1",children:o[1]})}),p("th",{children:p(en,{text:"F2",children:o[0]})}),p("th",{children:p(en,{text:"F1",children:o[1]})})]})]}),p("tbody",{children:h})]}),p(Wt,{ref:i,context:n})]})}function en(e){return w(Qe,{children:[p("div",{style:{position:"absolute",fontSize:8,color:"#3539E6"},children:e.text}),p("div",{style:{marginLeft:5},children:e.children})]})}const u2=P`
  .remove-assignments-btn {
    border-radius: 5px;
    margin-top: 3px;
    margin-left: 2px;
    border: none;
    height: 16px;
    width: 18px;
    font-size: 12px;
    padding: 0;
    background-color: transparent;
  }
  .toggle {
    width: 22px;
    height: 22px;
    margin-left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;function d2({zones:e,activeTab:t,xDomain:n,yDomain:o,experiment:s}){const[i,l]=c.exports.useState(!1),r=je(),a=Y(),u=he(),[d,h]=c.exports.useState(!1),m=c.exports.useRef(),g=c.exports.useMemo(()=>{const I=(A,D,R,O)=>(A=A*1e4,D=D*1e4,R=R*1e4,O=O*1e4,(D>=n[0]*1e4&&A<=n[1]*1e4||A<=n[0]*1e4&&D>=n[1]*1e4)&&(O>=o[0]*1e4&&R<=o[1]*1e4||R<=o[0]*1e4&&O>=o[1]*1e4)),N=A=>A.filter(D=>I(D.x.from,D.x.to,D.y.from,D.y.to));if(e.values)return(i?N(e.values):e.values).map(D=>S(b({},D),{tableMetaInfo:{isConstantlyHighlighted:I(D.x.from,D.x.to,D.y.from,D.y.to)}}))},[e,i,n,o]),x=c.exports.useCallback(()=>{l(!i)},[i]),y=c.exports.useCallback((I=null,N=void 0,A=-1,D=void 0)=>{a({type:eu,payload:{zoneData:I,assignmentData:r,isOnZoneLevel:N,signalIndex:A,axis:D}})},[r,a]),C=c.exports.useCallback(()=>{y()},[y]),v=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All assignments will be removed. Are you sure?",buttons:[{text:"Yes",handler:C},{text:"No"}]})},[C,u]),k=c.exports.useCallback(()=>{u.showConfirmDialog({message:"All zones will be deleted. Are You sure?",buttons:[{text:"Yes",handler:()=>{a({type:ds,payload:{assignmentData:r}})}},{text:"No"}]})},[r,a,u]),E=c.exports.useCallback(()=>{h(!d)},[d]),T=c.exports.useCallback(()=>{m.current.saveSetting(),h(!1)},[]),M=c.exports.useCallback(I=>{de.emit("onZonesVisibilityChange",{key:I})},[]);return p(Qe,{children:w("div",{css:[Dt,u2,d&&P`
              th {
                position: relative;
              }
            `],children:[!d&&w(ot,{counter:e.values?e.values.length:0,onDelete:k,deleteToolTip:"Delete All Zones",onFilter:x,filterToolTip:i?"Show all zones":"Hide zones out of view",filterIsActive:i,counterFiltered:g==null?void 0:g.length,showSettingButton:!0,onSettingClick:E,children:[p(we,{title:"Remove all Assignments",popupPlacement:"right",children:p("button",{className:"remove-assignments-btn",type:"button",onClick:v,disabled:!e.values||e.values.length===0,children:p(_r,{})})}),p(Ge,{popupTitle:"show/hide zones",popupPlacement:"right",defaultValue:!0,onClick:()=>M("zones"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"z"})}),p(Ge,{popupTitle:"show/hide signals",popupPlacement:"right",defaultValue:!0,onClick:()=>M("signals"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"s"})}),p(Ge,{popupTitle:"show/hide peaks",popupPlacement:"right",defaultValue:!0,onClick:()=>M("peaks"),children:p("span",{style:{fontSize:"12px",pointerEvents:"none"},children:"p"})})]}),d&&p(In,{onSave:T,onClose:E}),p("div",{className:"inner-container",children:d?p(BE,{ref:m}):p("div",{className:"table-container",children:g&&g.length>0?p(c2,{tableData:g,onUnlink:y,nuclei:t&&t.split(",").length===2?t.split(","):["?","?"],experiment:s}):p(Ut,{})})})]})})}const p2=c.exports.memo(d2),h2={zones:{},info:{}};function f2(){const{displayerKey:e,xDomain:t,yDomain:n,activeTab:o}=$(),{zones:s,info:i}=ve(h2);return p(p2,{xDomain:t,yDomain:n,activeTab:o,displayerKey:e,zones:s,experiment:i.experiment})}const Zo={data:{solvent:{description:"Solvent database",value:x2([...lh,...rh])}}};function lr(e,t){const o=(Zo.data[e]?Zo.data[e].value:[]).filter(l=>l.nucleus===t);return{data:o,getSolvents:()=>m2(o),search:(l=[])=>ah(o,{keywords:l})}}function m2(e){const t=[],n=new Map;for(const o of e)n.has(o.solvent)||(n.set(o.solvent,!0),t.push(o.solvent));return t}function g2(){return Object.keys(Zo.data).map(e=>{const{description:t}=Zo.data[e];return{id:e,name:t}})}function x2(e){return e.map(t=>(t.ranges=t.ranges.map(n=>b({id:U()},n)),t),[])}function b2(e){const t=[];let n=0;for(const l of e){let r=[];const o=l,{ranges:a}=o,u=G(o,["ranges"]);for(const d of a){r.push(d.id||U());const s=d,{signals:h=[]}=s,m=G(s,["signals"]);for(const g of h){const i=g,{js:x=[]}=i,y=G(i,["js"]),C=y2(x),v=S(b(b(b(b({},u),m),y),C),{index:n,id:r,ranges:a});t.push(v)}}n++}return t}function y2(e){if(e&&e.length>0){const{coupling:t,multiplicity:n}=e.reduce((o,{coupling:s,multiplicity:i})=>(o.coupling.push(s.toFixed(1)),o.multiplicity+=i,o),{coupling:[],multiplicity:""});return{multiplicity:n,coupling:t.join(",")}}else return{multiplicity:"s",coupling:""}}const rr={container:{padding:10,backgroundColor:"#f1f1f1",height:"100%",overflowY:"auto"},groupContainer:{padding:"5px",borderRadius:"5px",margin:"10px 0px",backgroundColor:"white"},header:{borderBottom:"1px solid #e8e8e8",paddingBottom:"5px",fontWeight:"bold",color:"#4a4a4a"},inputContainer:{flex:4,borderRadius:"5px"},inputLabel:{flex:2,fontSize:"11px",fontWeight:"bold",color:"#232323"},input:{width:"100px"}};function v2(e,t){const n=ce(),o=le(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{const r=pt(n.current,"formatting.panels.database");s.current.setValues(r||td)},[n]);c.exports.useEffect(()=>{i()},[i]);const l=c.exports.useCallback(r=>{n.dispatch({type:"SET_PANELS_PREFERENCES",payload:{key:"database",value:r}}),o.success("database preferences saved successfully")},[o,n]);return c.exports.useImperativeHandle(t,()=>({saveSetting:()=>{s.current.submitForm()}})),f("div",{style:rr.container,children:f(re,{onSubmit:l,ref:s,children:F("div",{style:rr.groupContainer,children:[f(Fe,{label:"Smiles",checkControllerName:"showSmiles",hideFormat:!0}),f(Fe,{label:"Solvent",checkControllerName:"showSolvent",hideFormat:!0}),f(Fe,{label:"Names",checkControllerName:"showNames",hideFormat:!0}),f(Fe,{label:"Range",checkControllerName:"showRange",hideFormat:!0}),f(Fe,{label:"\u03B4 (ppm)",checkControllerName:"showDelta",hideFormat:!0}),f(Fe,{label:"Assignment",checkControllerName:"showAssignment",hideFormat:!0}),f(Fe,{label:"J (Hz)",checkControllerName:"showCoupling",hideFormat:!0}),f(Fe,{label:"Multiplicity",checkControllerName:"showMultiplicity",hideFormat:!0})]})})})}var C2=c.exports.forwardRef(v2);const Rs={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},k2=[{showWhen:"showNames",index:1,Header:"names",accessor:e=>e.names?e.names.join(","):"",enableRowSpan:!0,style:b({width:"100px",minWidth:"100px",maxWidth:"100px"},Rs)},{showWhen:"showRange",index:2,Header:"From - To",accessor:e=>`${e.from.toFixed(2)} - ${e.to.toFixed(2)}`,enableRowSpan:!0},{showWhen:"showDelta",index:3,Header:"\u03B4 (ppm)",accessor:"delta"},{showWhen:"showAssignment",index:4,Header:"Assignment",accessor:"assignment"},{showWhen:"showMultiplicity",index:5,Header:"Multi.",accessor:"multiplicity"},{showWhen:"showCoupling",index:6,Header:"J (Hz)",accessor:"coupling",style:b({width:"60px",minWidth:"60px"},Rs)},{showWhen:"showSolvent",index:7,Header:"Solvent",accessor:"solvent",style:b({width:"80px",minWidth:"80px"},Rs)},{showWhen:"showSmiles",index:8,Header:"Smiles",accessor:"index",enableRowSpan:!0,Cell:({row:e})=>p("div",{className:"smiles-container",style:{width:"100px",display:"block",overflow:"hidden"},children:(e==null?void 0:e.original.smiles)&&p(ch,{height:60,width:60,smiles:e.original.smiles})})}];function S2({data:e,onAdd:t}){const n=ce(),o=c.exports.useMemo(()=>[{index:10,Header:"",width:"1%",maxWidth:"24px",minWidth:"24px",id:"add-button",accessor:"index",enableRowSpan:!0,Cell:({row:i})=>p("button",{type:"button",className:"add-button",onClick:()=>t(i),children:p(Cn,{})})}],[t]),s=c.exports.useMemo(()=>{const i=pt(n.current,"formatting.panels.database",td);let l=[...o];for(const a of k2){const r=a,{showWhen:u}=r,d=G(r,["showWhen"]);i[u]&&gs(l,d)}return l.sort((a,u)=>a.index-u.index)},[o,n]);return e&&e.length>0?p(fo,{data:e,columns:s,highlightedSource:ue.DATABASE,groupKey:"index",approxItemHeight:30,enableVirtualScroll:!0}):p(Ut,{})}var w2=c.exports.memo(S2);const E2=P`
  .header {
    height: 30px;
    padding: 2px 0px 2px 5px;
  }
  .input-container {
    width: 100%;
  }
  .search-input {
    width: 100% !important;
    border-radius: 5px;
    border: 0.55px solid gray;
    padding: 0 5px;
    outline: none;
  }
  .smiles-container svg {
    display: block;
    margin: 0 auto;
  }
`,ar={solvent:"",searchKeywords:""};function A2({nucleus:e,selectedTool:t}){const n=Y(),{handleChangeOption:o}=bs(),s=Be(e),[i,l]=c.exports.useState(!1),r=c.exports.useRef(),[a,u]=c.exports.useState(ar),d=c.exports.useRef(null),[h,m]=c.exports.useState({data:[],databases:[],solvents:[]}),{item:g}=uh("Database"),x=c.exports.useCallback(()=>{l(!i)},[i]),y=c.exports.useCallback(()=>{r.current.saveSetting(),l(!1)},[]),C=c.exports.useCallback(I=>{if(typeof I=="string"||I===-1){const N=String(I);u(A=>S(b({},A),{solvent:N}))}else u(N=>S(b({},N),{searchKeywords:I.target.value}))},[]);c.exports.useEffect(()=>{(g==null?void 0:g.isOpen)&&setTimeout(()=>{const I=R2(g2());d.current=lr(I[0].key,e);const N=d.current.data,A=cr(d.current.getSolvents());m({data:N,databases:I,solvents:A})})},[g==null?void 0:g.isOpen,e]),c.exports.useEffect(()=>{const{solvent:I,searchKeywords:N}=a;setTimeout(()=>{if(d.current)if(!I&&!N){const A=d.current.data,D=cr(d.current.getSolvents());m(R=>S(b({},R),{data:A,solvents:D}))}else{const A=[...N.split(",")];I!=="-1"&&A.unshift(`solvent:${I}`);const D=d.current.search(A);m(R=>S(b({},R),{data:D}))}})},[a]),c.exports.useEffect(()=>{function I(N){t===_.databaseRangesSelection.id&&u(A=>{const D=A.searchKeywords?A.searchKeywords.split(","):[],[R,O]=N.range,L=[...D,`delta:${s(R)}..${s(O)}`].join(",");return S(b({},A),{searchKeywords:L})})}return de.on("brushEnd",I),()=>{de.off("brushEnd",I)}},[s,t]);const v=c.exports.useCallback(I=>{d.current=lr(I,e),u(ar)},[e]),k=c.exports.useMemo(()=>b2(h.data),[h.data]),E=c.exports.useCallback(I=>{const{index:N}=I.original,{ranges:A,solvent:D,names:R=[]}=h.data[N];n({type:gu,payload:{ranges:A,info:{solvent:D,nucleus:e,name:R[0]}}})},[n,e,h.data]),T=c.exports.useCallback(()=>{u(I=>S(b({},I),{searchKeywords:""}))},[]),M=c.exports.useCallback(I=>{const N=I?_.databaseRangesSelection.id:_.zoom.id;o(N)},[o]);return w("div",{css:[Dt,E2,i&&P`
            .table-container {
              table,
              th {
                position: relative !important;
              }
            }
          `],children:[!i&&w(ot,{showSettingButton:!0,onSettingClick:x,canDelete:!1,className:"header",children:[p(Ge,{defaultValue:t===_.databaseRangesSelection.id,popupTitle:"Filter by select ranges",popupPlacement:"right",onClick:M,children:p(dh,{style:{pointerEvents:"none",fontSize:"12px",transform:"rotate(90deg)"}})},`${t}`),p(Me,{style:{flex:2},data:h.databases,onChange:v}),p(Me,{style:{flex:1},data:h.solvents,onChange:C}),p(kt,{value:a.searchKeywords,renderIcon:()=>p(ph,{}),style:{inputWrapper:{flex:3}},className:"search-input",type:"text",debounceTime:250,placeholder:"Search for parameter...",onChange:C,onClear:T,canClear:!0})]}),i&&p(In,{onSave:y,onClose:x}),p("div",{className:"inner-container",children:i?p(C2,{ref:r}):p(w2,{data:k,onAdd:E})})]})}const T2=c.exports.memo(A2);function D2(){const{activeTab:e,toolOptions:{selectedTool:t}}=$();return e?p(T2,{nucleus:e,selectedTool:t}):p("div",{})}function cr(e){const t=e.map(n=>({key:n,label:n,value:n}),[]);return t.unshift({key:"-1",label:"All",value:"-1"}),t}function R2(e){return e.map(({id:t,name:n})=>({key:t,value:t,label:n}))}const I2={width:"100%",height:"100%",padding:"0px",display:"flex",flexDirection:"column"};function N2({children:e,className:t,style:n,testID:o}){return f("div",{className:t,style:b(b({},I2),n),"data-test-id":o,children:e})}var M2=c.exports.memo(N2);const P2={width:"100%",overflowY:"auto",display:"flex",flexDirection:"column",padding:"5px 0px",color:"gray"};function _2({children:e,className:t,style:n}){const o=c.exports.useMemo(()=>c.exports.Children.map(e,s=>c.exports.cloneElement(s,{style:b({borderBottom:"0.55px solid #d8d8d8"},s.props.style)})),[e]);return f("div",{className:t,style:b(b({},P2),n),children:o})}var F2=c.exports.memo(_2);const L2={width:"100%",display:"flex",alignItems:"flex-start"};function O2(e){return e.toLowerCase()==="top"?"flex-start":e.toLowerCase()==="bottom"?"flex-end":"center"}function $2({children:e,className:t,style:n,align:o="center",vAlign:s="center",size:i=1,onClick:l=()=>null}){return f("div",{className:t,style:b(S(b({},L2),{alignItems:O2(s),textAlign:o,flex:i}),n),onClick:l,children:e})}var Xn=c.exports.memo($2);const H2={width:"100%",display:"flex",padding:"0px 5px",color:"#424242",backgroundColor:"#d8d8d8",borderBottom:"0.55px solid #d8d8d8",fontSize:11,fontWeight:"bold"};function z2({children:e,className:t,style:n}){return f("div",{className:t,style:b(b({},H2),n),children:e})}var V2=c.exports.memo(z2);const j2={width:"100%",display:"flex",padding:"5px 0px"};function B2({children:e,className:t,style:n,onClick:o=()=>null}){return f("div",{className:t,style:b(b({},j2),n),onClick:o,children:e})}var Dd=c.exports.memo(B2);function X2({filters:e,spectraCounter:t,selectedTool:n,activeFilterID:o}){const s=Y(),i=he(),l=le(),r=c.exports.useRef({index:null}),a=c.exports.useCallback(async(g,x)=>{const y=await l.showLoading(`${x?"Enable":"Disable"} filter in progress`);setTimeout(()=>{s({type:hc,id:g,checked:x}),y()},0)},[l,s]),u=c.exports.useCallback(({id:g,name:x})=>{const y=[{text:"Yes",handler:async()=>{const C=await l.showLoading("Delete filter process in progress");s({type:fc,payload:{id:g}}),C()}},{text:"No"}];t>1&&y.unshift({text:"Yes, for all spectra",handler:async()=>{const C=await l.showLoading("Delete all spectra filter process in progress");s({type:mc,payload:{filterType:x}}),C()}}),i.showConfirmDialog({message:"Are you sure you want to delete the spectrum?",buttons:y})},[l,s,i,t]),d=c.exports.useCallback(async g=>{const x=await l.showLoading("Filter snapshot process in progress");setTimeout(()=>{s({type:Hc,id:g}),x()},0)},[l,s]),h=c.exports.useCallback((g,x)=>{const{id:y,name:C}=g;o&&o===y?r.current.index=x:o||(r.current.index=null);const v=["filter-row"];return o===y?v.push("filter-active"):n===C?v.push("filter-current"):r.current.index!=null&&x>r.current.index&&v.push("filter-deactive"),v.join(" ")},[o,n]),m=c.exports.useMemo(()=>e==null?void 0:e.map((g,x)=>F(Dd,{className:h(g,x),children:[f(Xn,{align:"center",size:2,onClick:()=>d(g.id),children:g.label}),f(Xn,{align:"left",size:3,children:f("div",{onClick:y=>y.stopPropagation(),children:f(Vr,{data:g.error?g.error:g.value})})}),F(Xn,{align:"center",vAlign:"center",size:1,children:[f(ho,{checked:g.flag,onChange:y=>a(g.id,y.target.checked)}),g.isDeleteAllow&&f("button",{className:"btn",type:"button",onClick:()=>u(g),children:f(St,{})})]})]},g.id)),[d,e,h,u,a]);return f(et,{children:m})}const Y2={filters:[]},G2=c.exports.memo(X2);function Z2(){const{toolOptions:{selectedTool:e,data:{activeFilterID:t}}}=$(),{filters:n}=ve(Y2),o=qu().length;return f(G2,{selectedTool:e,filters:n,spectraCounter:o,activeFilterID:t})}const W2=P`
  .btn {
    background-color: transparent;
    border: none;
    height: 25;
    width: 25;
    padding: 5px;
  }
  .filter-row {
    padding: 5px !important;
  }
  .filter-active {
    background-color: #f7f7f7;
    div,
    span,
    .btn {
      color: black !important;
    }

    li {
      background-color: transparent !important;
    }
  }
  .filter-current {
    background-color: #707070;
    div,
    span,
    .btn {
      color: white !important;
    }

    li {
      background-color: transparent !important;
    }
  }

  .filter-deactive {
    opacity: 0.3;
  }
`;function U2({filters:e}){return c.exports.useMemo(()=>e?w(M2,{testID:"filters-table",children:[p(V2,{children:w(Dd,{children:[p(Xn,{align:"center",size:1,children:"Label"}),p(Xn,{align:"center",size:2,children:"Properties"})]})}),p(F2,{css:W2,children:p(Z2,{})})]}):p(Ut,{}),[e])}const K2={filters:[]},q2=c.exports.memo(U2);function J2(){const{filters:e}=ve(K2);return p(q2,{filters:e})}const Q2=P`
  padding: 10px;
  border-top: solid #f2f2f2 1px;

  .row {
    flex: row;
    display: flex;
    padding-bottom: 10px;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 160px;
  }

  .footer-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }

  .btn:not([disabled]):hover {
    background-color: #ffffff;
  }
  .btn:hover {
    background-color: #f2f2f2 !important;
  }
  .btn:disabled {
    opacity: 0.5;
  }
  .btn {
    border: none;
    padding: 0 15px;
    background-color: #ffffff;
    border-radius: 5px;
    height: 25px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }
`,eA=ee().shape({frequency:ae().integer().required().label("Frequency"),"1d":ee({"1H":ee({from:ae().integer().required().label("1H ' From ' "),to:ae().integer().required().label("1H ' To ' ")}),"13C":ee().shape({from:ae().integer().required().label("13C ' From ' "),to:ae().integer().required().label("13C ' To ' ")}),lineWidth:ae().integer().min(1).required().label("Line Width")})});function tA({onPredict:e=()=>null}){const t=c.exports.useRef(),n=c.exports.useCallback(()=>{t.current.submitForm()},[]),o=c.exports.useCallback(async s=>{e(s)},[e]);return w("div",{css:Q2,children:[p("div",{children:w(re,{ref:t,initialValues:Ha,validationSchema:eA,onSubmit:o,children:[p(xd,{}),w("div",{className:"row margin-10",children:[p("span",{className:"custom-label",children:"Frequency : "}),p(rn,{data:za,style:{width:290,height:30,margin:0},name:"frequency"})]}),w("div",{className:"row",children:[p(Le,{value:"1H",className:"custom-label"}),p(Q,{title:"From",children:p(W,{name:"1d.1H.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(W,{name:"1d.1H.to",type:"number"})})]}),w("div",{className:"row",children:[p(Le,{value:"13C",className:"custom-label"}),p(Q,{title:"From",children:p(W,{name:"1d.13C.from",type:"number"})}),p(Q,{title:"To",style:{label:{padding:"0 10px"}},children:p(W,{name:"1d.13C.to",type:"number"})})]}),w("div",{className:"row margin-10 padding-h-10",children:[p("span",{className:"custom-label",children:"Line Width : "}),p(W,{name:"1d.lineWidth",type:"number",style:{input:{margin:0}}}),p("span",{style:{paddingLeft:"0.4rem"},children:" Hz "})]})]})}),p("div",{children:p("button",{type:"button",onClick:n,className:"btn",children:"Predict spectrum"})})]})}function nA(){const[e,t]=c.exports.useState(),n=c.exports.useCallback(l=>{t(l)},[]),o=Y(),s=le(),i=c.exports.useCallback(async l=>{if(e){o({type:vt,isLoading:!0});const r=await s.showLoading("Predict 1H, 13C, COSY, HSQC, and HMBC in progress");o({type:ps,payload:{mol:e,options:l}}),r()}else s.error("No Molecule selected")},[s,o,e]);return f(bd,{onMoleculeChange:n,actionsOptions:{hidePredict:!0,hideDelete:!0,hideExport:!0},children:f(tA,{onPredict:i})})}const oA=[{title:"Spectra",component:f(pE,{}),hidePreferenceKey:"spectraPanel",mode:null},{title:"Information",component:f(MC,{}),style:{overflow:"hidden"},hidePreferenceKey:"informationPanel",mode:null},{title:"Peaks",component:f(LS,{}),hidePreferenceKey:"peaksPanel",mode:null},{title:"Filters",component:f(J2,{}),hidePreferenceKey:"filtersPanel",mode:null},{title:"Integrals",component:f(Ik,{}),hidePreferenceKey:"integralsPanel",mode:null},{title:"Ranges",component:f(Pw,{}),hidePreferenceKey:"rangesPanel",mode:B.DM_1D},{title:"Multiple Spectra Analysis",component:f(ES,{}),hidePreferenceKey:"multipleSpectraAnalysisPanel",mode:null},{title:"Matrix Generation",component:f(zk,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Zones",component:f(f2,{}),hidePreferenceKey:"zonesPanel",mode:B.DM_2D},{title:"Summary",component:f($E,{}),hidePreferenceKey:"summaryPanel",mode:null},{title:"Structures",component:f(bd,{}),hidePreferenceKey:"structuresPanel",mode:null},{title:"Database",component:f(D2,{}),hidePreferenceKey:"databasePanel",mode:null},{title:"Automatic Assignment",component:f(wC,{}),hidePreferenceKey:"",mode:null,isExperimental:!0},{title:"Prediction",component:f(nA,{}),hidePreferenceKey:"predictionPanel",mode:null}],ur={null:"Spectra",peakPicking:"Peaks",integral:"Integrals",rangesPicking:"Ranges",zone2D:"Zones",multipleSpectraAnalysis:"Multiple Spectra Analysis"};function sA(){const e=ce();return c.exports.useCallback(t=>V(e.current,`display.panels.${t.hidePreferenceKey}`),[e])}function iA({displayerMode:e}){const t=sA(),n=ud(),o=c.exports.useCallback(i=>{const l=t(i);return(l==null?void 0:l.hidden)!==!0&&(l==null?void 0:l.display)===!0&&i.isExperimental===void 0&&(i.mode==null||i.mode===e)||i.isExperimental&&n},[e,t,n]),s=c.exports.useCallback(i=>{const l=t(i);return(l==null?void 0:l.hidden)!==!0&&(l==null?void 0:l.open)},[t]);return f("div",{style:{width:"100%",height:"100%",flex:"1 1 0%"},children:f(ul,{children:oA.map(i=>o(i)&&f(ul.Item,{title:i.title,defaultOpened:s(i),children:i.component},i.title))})})}const lA=c.exports.memo(iA);function rA(){const{displayerMode:e,toolOptions:{selectedTool:t}}=$();return f(lA,{displayerMode:e,selectedTool:t})}function bs(){const e=Y(),t=le(),{open:n}=hh(),[o,s]=c.exports.useState(!1),i=c.exports.useRef({clicks:[]}),l=c.exports.useCallback(h=>{[_.peakPicking.id,_.integral.id,_.zone2D.id,_.exclusionZones.id].includes(h)&&t.show("Press Shift + Left Mouse button to select zone"),Object.keys(ur).includes(h)&&n(ur[h]),e({type:co,payload:{selectedTool:h}})},[t,e,n]),r=c.exports.useCallback(()=>{i.current.clicks.length===0&&e({type:bn,zoomType:Bn.HORIZONTAL});const h=Uo(()=>{i.current.clicks=[]},500);i.current.clicks.push(h),h(),i.current.clicks.length>1&&(br(i.current.clicks,m=>m.cancel()),i.current.clicks=[],e({type:bn}))},[e,i]),a=c.exports.useCallback(()=>{e({type:Di})},[e]),u=c.exports.useCallback(()=>{e({type:wi,isRealSpectrumVisible:!o}),s(!o)},[e,o]),d=c.exports.useCallback(()=>{e({type:Ni})},[e]);return{handleChangeOption:l,handleFullZoomOut:r,changeDisplayViewModeHandler:a,changeSpectrumViewHandler:u,alignSpectrumsVerticallyHandler:d,isRealSpectrumShown:o}}function aA(){const{keysPreferences:e,displayerMode:t,overDisplayer:n,data:o,activeSpectrum:s}=$(),i=Y(),l=le(),r=$i(),{handleChangeOption:a,handleFullZoomOut:u,alignSpectrumsVerticallyHandler:d,changeDisplayViewModeHandler:h}=bs(),{saveToClipboardHandler:m,saveAsJSONHandler:g,saveAsHandler:x}=cd(),{highlight:y,remove:C}=Dn(),v=je(),k=c.exports.useMemo(()=>t===B.DM_1D&&o&&o.length>0,[o,t]),E=c.exports.useCallback(async N=>{const{type:A,extra:{id:D}}=N;switch(A){case ue.INTEGRAL:{i({type:rs,integralID:D}),C();break}case ue.PEAK:{i({type:is,data:{id:D}}),C();break}case ue.RANGE:{i({type:us,payload:{data:{id:D,assignmentData:v}}}),C();break}case ue.ZONE:{i({type:ds,payload:{id:D,assignmentData:v}}),C();break}case ue.EXCLUSION_ZONE:{const R=await l.showLoading("Exclusion filter in progress");i({type:lu,payload:{id:D,spectrumID:N.extra.spectrumID}}),R(),C();break}}},[v,i,C,l]),T=c.exports.useCallback((N,A)=>{o&&o.length>0&&A>=1&&A<=9&&(N.shiftKey?(i({type:Vo,keyCode:A}),l.show(`Configuration Reset, press '${A}' again to reload it.`)):Xt(N)||((e==null?void 0:e[A])?i({type:Pi,keyCode:A}):(i({type:Vo,keyCode:A}),l.show(`Configuration saved, press '${A}' again to reload it.`))))},[l,o,i,e]),M=c.exports.useCallback(N=>{function A(R,O=!0){if(t===B.DM_1D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(O&&t===B.DM_2D)throw new Error(`Switch to 1D Mode and select a spectrum to proceed with ${R}`)}function D(R,O=!0){if(t===B.DM_2D&&!s)throw new Error(`Select a spectrum to proceed with ${R}`);if(O&&t===B.DM_1D)throw new Error(`Switch to 2D Mode and select a spectrum to proceed with ${R}`)}try{if(!N.shiftKey&&!N.metaKey)switch(N.key){case"f":u();break;case"z":case"Escape":a(_.zoom.id);break;case"r":{t===B.DM_2D?(D(_.zone2D.label,!1),a(_.zone2D.id)):(A(_.rangesPicking.label,!1),a(_.rangesPicking.id));break}case"a":{A(_.phaseCorrection.label),a(_.phaseCorrection.id);break}case"b":{A(_.baseLineCorrection.label),a(_.baseLineCorrection.id);break}case"p":{A(_.peakPicking.label),a(_.peakPicking.id);break}case"i":{A(_.integral.label),a(_.integral.id);break}case"e":{A(_.exclusionZones.label),a(_.exclusionZones.id);break}default:}if(!N.shiftKey&&!N.metaKey&&!N.ctrlKey)switch(N.key){case"c":{k&&d();break}case"s":{k&&h();break}default:}if(!N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"c":m(),N.preventDefault();break;case"s":g(),N.preventDefault();break;case"o":r(),N.preventDefault();break;default:}if(N.shiftKey&&(N.metaKey||N.ctrlKey))switch(N.key){case"s":case"S":x(),N.preventDefault();break;default:}}catch(R){l.error(R.message)}},[s,l,d,k,h,t,a,u,r,x,g,m]),I=c.exports.useCallback(N=>{if(!["input","textarea"].includes(N.target.localName)&&n){const A=Number(N.code.substr(N.code.length-1))||0;A>0?T(N,A):["Delete","Backspace"].includes(N.key)&&y.sourceData?(N.preventDefault(),E(y.sourceData)):M(N)}},[E,y,T,n,M]);return c.exports.useEffect(()=>(document.addEventListener("keydown",I,!0),()=>document.removeEventListener("keydown",I,!0)),[I]),null}const cA="https://docs.nmrium.org";var uA={version:"git-cd0ccbd3eae286de7f55dd84367b6e39130d9156"};function dA({width:e=100,height:t=100}){return F("svg",{style:{width:e,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 752.34 221.73",children:[f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M.64,31.7A31.67,31.67,0,0,1,54.72,9.29l0,0A31.66,31.66,0,0,1,64,31.7V190a13.39,13.39,0,0,0,26.77,0V54a31.7,31.7,0,0,1,31.7-31.7V40.58A13.38,13.38,0,0,0,109.13,54V190a31.71,31.71,0,0,1-63.41,0V31.7a13.29,13.29,0,0,0-3.88-9.46l0,0A13.41,13.41,0,0,0,19,31.7V164.82H.64Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M154.21,54v68.17a13.34,13.34,0,0,0,3.89,9.47h0A13.39,13.39,0,0,0,181,122.14V99.32h-.06a31.63,31.63,0,0,1,9.29-22.38l0,0a31.65,31.65,0,0,1,44.8,0l0,0a31.58,31.58,0,0,1,9.3,22.39V118H226V99.32a13.3,13.3,0,0,0-3.89-9.46h0a13.44,13.44,0,0,0-18.93,0l0,0a13.3,13.3,0,0,0-3.83,8.19v24.09a31.7,31.7,0,0,1-54.11,22.42v0a31.66,31.66,0,0,1-9.3-22.4V54Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M729.19,96.34c-8.65,0-14.26,3.17-17.67,8-3.41-5.12-8.78-8-16-8-8.16,0-13.52,3.17-16.32,7.31v-5.6H661V159h18.28V124.62c0-7.19,3.41-11.46,9.5-11.46,5.85,0,8.78,3.9,8.78,10V159h18.27V124.62c0-7.19,3.42-11.46,9.51-11.46,5.85,0,8.77,3.9,8.77,10V159h18.28V121.57C752.34,106.33,743.2,96.34,729.19,96.34Z"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M629.26,98.05v33.26c0,8.66-4.63,12.56-11.33,12.56-5.85,0-10.6-3.54-10.6-11.09V98.05H589.05v37.41c0,16.45,10.48,25.22,22.79,25.22,8,0,14.13-2.92,17.42-7.43V159h18.28V98.05Z"}),f("rect",{fill:"#2b143e",x:"558.22",y:"98.05",width:"18.28",height:"60.93"}),f("path",{fill:"#2b143e",fillRule:"evenodd",d:"M567.36,92.68a11,11,0,1,0-11-11A11.08,11.08,0,0,0,567.36,92.68Z"}),f("path",{fill:"#ea580c",fillRule:"evenodd",d:"M478.77,159H498V116.57L525.66,159H549.2l-22.3-34.75c5.45-2.13,8.12-4.14,11.48-8.86a31.07,31.07,0,0,0,6.07-18.26V94.62c0-10.61-3.45-15.93-9.28-21.78S520.75,63.09,510,63.09H478.71l.06,95.89Zm33.1-50.27h-6.46v-.06H498V82.19h10.87c4.67,0,9.44,1.38,11.94,3.81a12.84,12.84,0,0,1,3.81,9.2C524.58,102.52,518.92,108.71,511.87,108.71Z"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"372.91 60.8 372.91 158.98 392.16 158.98 392.16 119.23 419.91 157.41 447.61 119.23 447.61 158.98 466.87 158.98 466.87 60.8 419.91 125.22 372.91 60.8"}),f("polygon",{fill:"#ea580c",fillRule:"evenodd",points:"283.89 61.04 283.89 159.1 303.14 159.1 303.14 105.85 361.01 160.93 361.01 62.83 341.67 62.83 341.67 116.08 283.89 61.04"})]})}const pA=P`
  display: flex;
  flex-direction: column;
  user-select:
  button:focus {
    outline: none;
  }
  .header {
    height: 34px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    padding: 5px;

    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      user-select: none;

    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .center-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    list-style-type: disc;
    margin-left:20px;
    }
  span,li{
    user-select: text;
  }
  span.title {
    font-weight: bold;
    color: #ea580c;
  }
  span.content {
    color: #2b143e;
    font-size: 14px;
    text-align: left;
  }

  img {
    width: 100px;
  }

  a {
    color: #969696;
  }

  a:hover,
  a:focus {
    color: #00bcd4;
  }

  .separator {
    border-bottom: 1px solid gray;
    width: 15px;
    height: 1px;
    margin: 10px 0px;
  }
`;function hA({onClose:e=()=>null}){return w("div",{css:pA,children:[w("div",{className:"header handle",children:[p("span",{children:"About NMRium"}),p(me,{onClick:e})]}),w("div",{className:"container",children:[w("div",{className:"center-container",children:[p(dA,{width:160,height:50}),"Version ",p(fA,{}),p("span",{className:"separator"}),p("a",{href:"https://git.nmrium.org",target:"_blank",rel:"noreferrer",children:"GitHub ( https://git.nmrium.org )"})]}),p("div",{className:"center-container",children:p("span",{className:"separator"})}),p("span",{className:"content",children:"This project is developed by Zakodium S\xE0rl (Switzerland), the University of Cologne (Germany), Johannes Gutenberg University Mainz (Germany) and Universidad del Valle (Colombia)."}),w("div",{className:"center-container",children:[p("span",{className:"separator"}),p("span",{className:"title",children:"Funding is provided by"}),p("span",{className:"separator"})]}),p("div",{className:"content",children:w("ul",{children:[p("li",{children:"IDNMR grant, which part of the Scientific Library Services and Information Systems (LIS) initiative of the DFG."}),p("li",{children:"Zakodium S\xE0rl (Switzerland)."}),p("li",{children:"Universidad del Valle (Cali, Colombia)."})]})})]})]})}function fA(){const{version:e}=uA;return e==="HEAD"?p(Qe,{children:"HEAD"}):e.startsWith("git-")?w("a",{href:`https://github.com/cheminfo/nmrium/tree/${e.slice(4)}`,target:"_blank",rel:"noreferrer",children:["git-",e.slice(4,14)]}):p("a",{href:`https://github.com/cheminfo/nmrium/tree/${e}`,target:"_blank",rel:"noreferrer",children:e})}function mA(){return F(et,{children:[f("p",{className:"section-header",children:"Spectra"}),f(Q,{title:"Transparency of Dimmed Spectra [ 0 - 1 ]",children:f(W,{name:"controllers.dimmedSpectraTransparency",checkValue:e=>e>=0&&e<=1,type:"number"})})]})}const gA=[{label:"Spectra selection panel",name:"panels.spectraPanel"},{label:"Spectra information Panel",name:"panels.informationPanel"},{label:"Peaks and peak picking",name:"panels.peaksPanel"},{label:"Integration and integrals",name:"panels.integralsPanel"},{label:"1D ranges peak picking",name:"panels.rangesPanel"},{label:"Chemical structure panel",name:"panels.structuresPanel"},{label:"Filters Panel",name:"panels.filtersPanel"},{label:"2D zones peak picking",name:"panels.zonesPanel"},{label:"Assignment summary Panel",name:"panels.summaryPanel"},{label:"Multiple Spectra Analysis Panel",name:"panels.multipleSpectraAnalysisPanel"},{label:"Database Panel",name:"panels.databasePanel"},{label:"Prediction Panel",name:"panels.predictionPanel"},{label:"Experimental Features",name:"general.experimentalFeatures",hideOpenOption:!0}];function dr(e){return f(mt,{style:{container:{display:"block",margin:"0 auto",width:"fit-content"}},className:"checkbox-element",name:e.name},e.name)}function xA({preferences:e}){const t=c.exports.useMemo(()=>[{index:1,Header:"#",Cell:({row:o})=>o.index+1},{index:1,Header:"Feature",accessor:"label",style:{width:"60%"}},{index:2,Header:"Active",Cell:({row:o})=>f(dr,{name:`display.${o.original.name}.display`})},{index:3,Header:"Open on load",Cell:({row:o})=>o.original.hideOpenOption?f("div",{}):f(dr,{name:`display.${o.original.name}.open`})}],[]),n=c.exports.useMemo(()=>gA.filter(o=>V(e,`${o.name}.hidden`)!==!0),[e]);return f("div",{style:{width:"100%",overflow:"hidden"},children:f(fo,{columns:t,data:n})})}const bA=P`
  .counter-col {
    width: 30px;
  }
  .nucleus-label-col {
    display: flex;
    justify-content: center;
    width: 80px;
  }

  .width-100 {
    width: 100% !important;
    margin: 0px !important;
  }

  .nucleus-format-input-col {
    text-align: center;
    width: 100px;
  }

  th {
    font-size: 11px;
    font-weight: 600;
  }
  .operation-container {
    display: flex;
  }
  .add {
    background-color: transparent;
    border: 0;
    outline: none;
    svg {
      font-szie: 14px;
      fill: green;
    }
  }
`;function yA(){const{values:e,setFieldValue:t}=pe(),n=c.exports.useMemo(()=>V(e,"formatting.nucleus",[]),[e]),o=c.exports.useCallback(i=>{const l=n.splice(0,i);t("formatting.nucleus",l)},[n,t]),s=c.exports.useCallback(()=>{const i={key:U(),name:"",ppm:"0.00",hz:"0.00"},l=[...n,i];t("formatting.nucleus",l)},[n,t]);return w(c.exports.Fragment,{children:[p("p",{className:"section-header",children:"Formating according to Nucleus"}),p("div",{css:bA,children:w("table",{children:[p("thead",{children:w("tr",{children:[p("th",{className:"counter-col",children:"#"}),p("th",{className:"nucleus-label-col",children:"Nucleus "}),p("th",{className:"nucleus-format-input-col",children:"\u03B4 (ppm)"}),p("th",{className:"nucleus-format-input-col",children:"Coupling (Hz)"}),p("th",{className:"nucleus-format-input-col"})]})}),p("tbody",{children:n==null?void 0:n.map((i,l)=>{const r=l+1;return w("tr",{children:[w("td",{className:"counter-col",children:[w("span",{children:[r," - "]})," "]}),p("td",{className:"nucleus-label-col",children:p(W,{name:`formatting.nucleus.${l}.name`,className:"width-100"})}),p("td",{className:"nucleus-format-input-col",children:p(W,{name:`formatting.nucleus.${l}.ppm`,className:"width-100"})}),p("td",{className:"nucleus-format-input-col",children:p(W,{name:`formatting.nucleus.${l}.hz`,className:"width-100"})}),w("td",{className:"operation-container",children:[p(me,{onClick:()=>o(l),popupTitle:`remove ${i.name}`,popupPlacement:"right"}),n.length===l+1&&p("button",{className:"add",type:"button",onClick:s,children:p(Cn,{})})]})]},`${i.key}`)})})]})})]})}const vA=P`
  .container {
    display: flex;
    span {
      padding: 5px !important;
    }
    span {
      flex: 1;
      text-align: left !important;
    }
  }

  .new-container {
    background-color: #f6f6f6;
    display: flex;
    padding: 0.3em;

    input {
      padding: 0.5em;
      color: black;
      outline: none;
      background-color: transparent !important;
    }
  }

  .delete-button:hover {
    color: white;
  }

  .save-button:hover {
    color: green;
  }
  .delete-button,
  .save-button {
    padding: 5px;
  }
`,CA=({item:e,onSave:t,onDelete:n})=>{const[o,s]=c.exports.useState(""),i=c.exports.useCallback(a=>{a.stopPropagation(),s(""),t(o)},[o,t]),l=c.exports.useCallback(a=>{a.stopPropagation(),n(e.key)},[e.key,n]),r=c.exports.useCallback(a=>{s(a.target.value)},[]);return p("div",{css:vA,children:e.key==="new"?w("div",{className:"new-container",children:[p("input",{value:o,placeholder:"Custom workspace",onClick:a=>a.stopPropagation(),onChange:r}),p("button",{type:"button",className:"save-button",onClick:i,disabled:!o,children:"save"})]}):w("div",{className:"container",children:[p("span",{children:e.label}),!He[e.key]&&p("button",{type:"button",className:"delete-button",onClick:l,children:"Delete"})]})})},kA=P`
  .main-content {
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none;
  }

  .tab-content {
    width: 100%;
  }

  .section-header {
    font-size: 13px;
    color: #2ca8ff;
    margin-bottom: 10px;
    border-bottom: 0.55px solid #f9f9f9;
    padding: 6px 2px;
  }

  .label {
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
  }

  .input {
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    padding: 5px;
    width: 100px;
    margin-right: 10px;
    height: initial !important;
  }

  .close-bt {
    border: none;
    color: red;
    background-color: transparent;
    outline: none;
    position: absolute;
    right: 10px;
    top: 2px;
    width: 30px;
    height: 30px;
  }

  .checkbox-label {
    min-width: 300px;
    display: inline-block;
  }

  .help-checkbox-element {
    .checkbox-label {
      width: 260px;
    }
  }

  .workspace-container {
    display: flex;
    background-color: #f4f4f4;
    align-items: center;
    cursor: default;
    padding: 0.5em;
    .dropdown {
      padding: 0.4em 1em;
    }
    & .label {
      font-size: 0.8em;
    }
  }
`;function SA({onClose:e}){const[t,n]=c.exports.useState("controllers"),C=ce(),{dispatch:o}=C,s=G(C,["dispatch"]),i=le(),l=c.exports.useRef(),r=c.exports.useMemo(()=>{const v=Object.keys(s.workspaces).reduce((k,E)=>(He[E]||k.push({key:E,label:s.workspaces[E].label}),k),[]);return[...n0,...v,{key:"new",label:"Custom workspace"}]},[s.workspaces]),a=c.exports.useCallback(()=>{l.current.submitForm()},[]),u=c.exports.useCallback(()=>{o({type:"RESET_PREFERENCES"}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),d=c.exports.useCallback(v=>{o({type:"SET_PREFERENCES",payload:v}),i.success("Settings saved successfully"),e==null||e()},[i,o,e]),h=c.exports.useCallback(v=>{n(v.tabid)},[]),m=c.exports.useCallback(v=>{o({type:"ADD_WORKSPACE",payload:{workspace:v,data:l.current.values}})},[o]),g=c.exports.useCallback(v=>{o({type:"REMOVE_WORKSPACE",payload:{workspace:v}})},[o]),x=c.exports.useCallback(v=>{o({type:"SET_WORKSPACE",payload:{workspace:v.key}})},[o]),y=c.exports.useCallback(v=>p(CA,{item:v,onSave:m,onDelete:g}),[m,g]);return w("div",{css:[ht,kA],children:[w("div",{className:"header handle",children:[p("span",{children:"General Settings"}),p(me,{onClick:e,className:"close-bt"})]}),w("div",{className:"workspace-container",children:[p("span",{className:"label",children:"Workspace : "}),p(vd,{data:r,renderItem:y,selectedKey:s==null?void 0:s.workspace.current,onSelect:x})]}),p("div",{className:"main-content",children:p(re,{ref:l,initialValues:s.current,onSubmit:d,children:w(Rn,{position:Ui.LEFT,activeTab:t,onClick:h,children:[p(Ne,{tablabel:"Controllers",tabid:"controllers",children:p("div",{className:"inner-content",children:p(mA,{})})}),p(Ne,{tablabel:"Formatting",tabid:"formatting",children:p("div",{className:"inner-content",children:p(yA,{})})}),p(Ne,{tablabel:"Display",tabid:"display",children:p("div",{className:"inner-content",children:p(xA,{preferences:s.current.display})})})]})},JSON.stringify(s.current))}),w("div",{className:"footer-container",children:[p("button",{type:"button",onClick:a,className:"btn",children:"Save"}),p("button",{type:"button",onClick:u,className:"btn",children:"Reset"})]})]})}const _e={container:{height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function wA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useRef(),s=c.exports.useRef(),i=c.exports.useCallback(()=>{e({type:Cc,options:{maxNumberOfPeaks:n.current.value,minMaxRatio:t.current.value,noiseFactor:o.current.value,lookNegative:s.current.checked}})},[e]),l=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:_e.container,children:[f(un,{ref:n,label:"Max Number Of Peaks:",name:"maxNumberOfPeaks",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:50}),f(un,{ref:o,label:"Noise factor",name:"noiseFactor",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:3}),f(un,{ref:t,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:_e.input,inputContainer:_e.inputContainer,label:_e.label},defaultValue:.1,step:"0.01"}),F("div",{style:{justifyItems:"baseline",marginRight:"3px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect Negative:"}),f(ho,{name:"lookNegative",ref:s})]}),f("button",{type:"button",style:_e.actionButton,onClick:i,children:"Apply"}),f("button",{type:"button",style:_e.actionButton,onClick:l,children:"Cancel"})]})}const ko={container:{padding:"5px",height:"100%",display:"flex",alignItems:"center"},label:{lineHeight:2,userSelect:"none"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function EA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),[o,s]=c.exports.useState("polynomial"),i=c.exports.useCallback(d=>{let h={};switch(o){case"airpls":h=b({algorithm:n.current.value},d);break;case"polynomial":h=b({algorithm:n.current.value},d);break}e({type:Ic,options:h})},[o,e]),l=c.exports.useCallback(()=>{e({type:ze})},[e]),r=c.exports.useCallback(()=>Object.keys(_s).map(d=>({key:d,label:_s[d],value:d})),[]),a=c.exports.useCallback(d=>{s(d)},[]),u=c.exports.useMemo(()=>{switch(o){case"airpls":return{validation:ee().shape({maxIterations:ae().integer().min(1).required(),tolerance:ae().moreThan(0).required()}),initialValue:{maxIterations:100,tolerance:.001}};case"autoPolynomial":case"polynomial":return{validation:ee().shape({degree:ae().integer().min(1).max(6).required()}),initialValue:{degree:3}};default:return{validation:{},initialValue:{}}}},[o]);return F("div",{style:ko.container,children:[f("span",{style:ko.label,children:"Algorithm: "}),f(Me,{ref:n,data:r(),style:{marginLeft:10,marginRight:10},onChange:a,defaultValue:"polynomial"}),F(re,{ref:t,onSubmit:i,initialValues:u.initialValue,validationSchema:u.validation,children:[o&&o==="airpls"&&F("div",{style:{display:"flex"},children:[f(Q,{title:"maxIterations:",children:f(W,{type:"number",name:"maxIterations"})}),f(Q,{title:"tolerance:",style:{label:{padding:"0 5px"}},children:f(W,{type:"number",name:"tolerance"})})]}),o&&["autoPolynomial","polynomial"].includes(o)&&f(Q,{title:"degree [ 1 - 6 ]:",children:f(W,{type:"number",name:"degree",min:1,max:6,style:{inputWrapper:{height:"100%"}}})})]},JSON.stringify(u.initialValue)),f("button",{type:"button",style:ko.actionButton,onClick:()=>t.current.submitForm(),children:"Apply"}),f("button",{type:"button",style:ko.actionButton,onClick:l,children:"Cancel"})]})}const pr={container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"0.55px solid #c7c7c7",borderRadius:"5px",userSelect:"none",backgroundColor:"#18ce0f14",fontSize:"10px",color:"#00801d",margin:"0px 5px",cursor:"ew-resize"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:"100%",paddingLeft:"5px",paddingRight:"5px"}};function AA(e,t){const{name:n,value:o=0,onChange:s,label:i,style:l,className:r}=e,a=c.exports.useRef(0),u=c.exports.useRef(o);c.exports.useImperativeHandle(t,()=>({setValue:h=>{u.current=h}}));const d=c.exports.useCallback(h=>{function m(x){let y=x.clientX-a.current;if(a.current=x.clientX,x.buttons===1){const C=y/(x.shiftKey?10:1);u.current=u.current+C,s({value:u.current,name:n})}}function g(){window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)}a.current=h.clientX,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},[n,s]);return f("div",{style:b(b({},pr.container),l),className:r,onMouseDown:d,children:f("span",{style:pr.label,children:i})})}var hr=c.exports.forwardRef(AA);const tn={container:{padding:"5px",height:"100%",display:"flex"},input:{width:"100px"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},select:{marginLeft:"5px",marginRight:"10px",border:"none",height:"20px"}},Oe={manual:"manual",automatic:"automatic",absolute:"absolute"},TA=[{key:Oe.manual,label:"Manual",value:Oe.manual},{key:Oe.automatic,label:"Automatic",value:Oe.automatic},{key:Oe.absolute,label:"Absolute",value:Oe.absolute}];function DA({data:e,pivot:t,filter:n}){const o=Y(),[s,i]=c.exports.useState({ph0:0,ph1:0}),l=c.exports.useRef({ph0:0,ph1:0}),r=c.exports.useRef(),a=c.exports.useRef(),[u,d]=c.exports.useState(Oe.manual);c.exports.useEffect(()=>{n?(l.current=n.value,i(n.value),r.current.setValue(n.value.ph0),a.current.setValue(n.value.ph1)):(r.current.setValue(l.current.ph0),a.current.setValue(l.current.ph1))},[n]);const h=c.exports.useCallback(()=>{switch(u){case Oe.automatic:{o({type:yc});break}case Oe.manual:{o({type:bc,value:s});break}case Oe.absolute:{o({type:vc});break}}},[o,u,s]),m=c.exports.useCallback((v,k)=>{if(k==="ph1"&&e.re){const E=v.ph0-l.current.ph0,T=v.ph1-l.current.ph1;v.ph0+=E-T*(t==null?void 0:t.index)/e.re.length}o({type:Ri,value:v})},[e.re,o,t==null?void 0:t.index]),g=c.exports.useCallback(v=>{const{name:k,value:E}=v.target;if(v.target){const T=S(b({},l.current),{[k]:E});String(E).trim()!=="-"&&m(T,k),l.current=T,i(l.current)}},[m]),x=c.exports.useCallback(v=>{const k=S(b({},l.current),{[v.name]:v.value});m(k,v.name),l.current=k,i(l.current)},[m]),y=c.exports.useCallback(()=>{o({type:ze})},[o]),C=c.exports.useCallback(v=>{d(v)},[]);return F("div",{style:tn.container,children:[f(Me,{onChange:C,data:TA,defaultValue:Oe.manual,style:tn.select}),u===Oe.manual&&F(et,{children:[f(Q,{title:"PH0 :",style:{wrapper:{marginRight:"5px"}},children:f(kt,{name:"ph0",style:{input:tn.input},onChange:g,value:s.ph0,type:"number",debounceTime:250})}),f(Q,{title:"PH1 :",children:f(kt,{name:"ph1",style:{input:tn.input},onChange:g,value:s.ph1,type:"number",debounceTime:250})}),f(hr,{ref:r,name:"ph0",label:"Change Ph0 By mouse click and drag",style:{width:"20%"},onChange:x}),f(hr,{ref:a,name:"ph1",label:"Change Ph1 By mouse click and drag",style:{width:"20%"},onChange:x})]}),f("button",{type:"button",style:tn.actionButton,onClick:h,children:"Apply"}),f("button",{type:"button",style:tn.actionButton,onClick:y,children:"Cancel"})]})}const RA=c.exports.memo(DA),IA={datum:{},filter:null};function NA(){const{toolOptions:{data:{pivot:e}}}=$(),{data:t,filters:n}=ve(IA),o=c.exports.useMemo(()=>n.find(s=>s.name===Ht)||null,[n]);return f(RA,{data:t,filter:o,pivot:e})}const Mt={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px",alignItems:"baseline"},input:{height:"100%",width:"50px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},inputContainer:{flex:2},label:{flex:5},actionButton:{height:"100%",minWidth:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none",padding:"3px"},hint:{lineHeight:2,userSelect:"none",fontSize:"11px"}};function MA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useRef(),o=c.exports.useCallback(()=>{e({type:kc,options:{peakPicking:{minMaxRatio:Number(n.current.value)||.05,lookNegative:t.current.checked}}})},[e]),s=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:Mt.container,children:[F("div",{style:{justifyItems:"baseline",margin:"0 10px"},children:[f("label",{style:{marginRight:"2px",lineHeight:2,userSelect:"none"},htmlFor:"lookNegative",children:"Detect negative:"}),f(ho,{name:"lookNegative",ref:t})]}),f(un,{ref:n,label:"Min Max Ratio:",name:"minMaxRatio",style:{input:Mt.input,inputContainer:Mt.inputContainer,label:Mt.label},defaultValue:.05,step:"0.01"}),f("button",{type:"button",style:Mt.actionButton,onClick:o,"data-test-id":"auto-ranges-detection-btn",children:"Auto ranges picking"}),f("button",{type:"button",style:Mt.actionButton,onClick:s,children:"Cancel"}),f("span",{style:Mt.hint,children:"Manual selection using SHIFT + select zone or click on Auto peak picking"})]})}const nn={container:{padding:"5px",height:"100%",display:"flex"},input:{height:"100%",width:"80px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px 0px 5px",textAlign:"center"},actionButton:{height:"100%",width:"60px",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"},label:{lineHeight:2,userSelect:"none"}},PA=qi(8,21);function _A(){const e=Y(),{data:t,activeSpectrum:n}=$(),o=c.exports.useRef(),[s,i]=c.exports.useState(1),l=c.exports.useCallback(()=>{e({type:gc,value:{zeroFillingSize:Number(o.current.value),lineBroadeningValue:s}})},[e,s]),r=c.exports.useCallback(()=>t&&(n==null?void 0:n.id)?2**Math.round(Math.log2(t[n.index].data.x.length)):"",[n,t]),a=c.exports.useCallback(d=>{if(d.target){const h=d.target.validity.valid?Number(d.target.value):s;i(h)}},[s]),u=c.exports.useCallback(()=>{e({type:ze})},[e]);return F("div",{style:nn.container,children:[f("span",{style:nn.label,children:"Size: "}),f(Me,{ref:o,data:PA,style:{marginLeft:10,marginRight:10},defaultValue:r()}),f("span",{style:nn.label,children:"Line Broadening: "}),f("input",{name:"line-broadening",style:nn.input,type:"number",defaultValue:s,onInput:a,pattern:"^\\d*(\\.\\d{0,2})?$",step:"any"}),f("button",{type:"button",style:nn.actionButton,onClick:l,children:"Apply"}),f("button",{type:"button",style:nn.actionButton,onClick:u,children:"Cancel"})]})}const on={container:{padding:"5px",height:"100%",display:"flex",fontSize:"12px"},input:{width:"50px"},inputContainer:{flex:"2"},label:{flex:"5"},actionButton:{height:"100%",borderRadius:"5px",border:"0.55px solid #c7c7c7",margin:"0px 5px",userSelect:"none"}};function FA(){const e=Y(),t=c.exports.useRef(),n=c.exports.useCallback(()=>{e({type:Sc,options:{thresholdFactor:t.current.value}})},[e]),o=c.exports.useCallback(()=>{e({type:ze})},[e]),s=c.exports.useCallback(i=>{i.target&&e({type:cu,payload:i.target.value})},[e]);return F("div",{style:on.container,children:[f(un,{ref:t,label:"NoiseFactor",name:"noiseFactor",style:{input:on.input,inputContainer:on.inputContainer,label:on.label},defaultValue:1,onChange:s}),f("button",{type:"button",style:on.actionButton,onClick:n,children:"Auto Zones Picking"}),f("button",{type:"button",style:on.actionButton,onClick:o,children:"Cancel"})]})}function LA(e){const{isFullscreen:t,onMaximize:n=()=>null,selectedOptionPanel:o,hideGeneralSettings:s}=e,i=he(),l=c.exports.useMemo(()=>{switch(o){case _.zeroFilling.id:return f(_A,{});case _.phaseCorrection.id:return f(NA,{});case _.peakPicking.id:return f(wA,{});case _.rangesPicking.id:return f(MA,{});case _.baseLineCorrection.id:return f(EA,{});case _.zone2D.id:return f(FA,{})}},[o]),r=c.exports.useCallback(()=>{i.show(f(SA,{}),{position:te.TOP_CENTER,enableResizing:!0,width:600,height:400})},[i]),a=c.exports.useCallback(()=>{i.show(f(hA,{}),{isBackgroundBlur:!1,position:te.MIDDLE,width:500,height:480})},[i]);return F(fh,{children:[F("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[f("div",{children:f(Se,{orientation:"horizontal",children:f(Se.Item,{onClick:a,titleOrientation:"horizontal",id:"logo",title:"About NMRium",children:f("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:f(mh,{})})})})}),f("div",{className:"toolOptionsPanel",children:l})]}),F(Se,{orientation:"horizontal",children:[f(Se.Item,{id:"user-manual",title:"User manual",onClick:()=>window.open(cA,"_blank"),children:f(gh,{})}),!s&&f(Se.Item,{id:"general-settings",onClick:r,title:"General settings",children:f(xh,{})}),!t&&f(Se.Item,{id:"full-screen",onClick:n,title:"Full Screen",className:"windowButton",children:f(bh,{})})]})]})}const OA=c.exports.memo(LA);function $A({isFullscreen:e,onMaximize:t}){const{toolOptions:{selectedOptionPanel:n}}=$(),{current:{display:{general:o}},workspace:{base:s}}=ce(),i=!!((o==null?void 0:o.hideGeneralSettings)&&s);return f(OA,{selectedOptionPanel:n,isFullscreen:e,onMaximize:t,hideGeneralSettings:i})}const ge={MOL:"mol",NMRIUM:"nmrium",JSON:"json",DX:"dx",JDX:"jdx",JDF:"jdf",ZIP:"zip",NMREDATA:"nmredata"},HA={ZIP:"504b0304"};function zA(e){return new Uint8Array(e).slice(0,4).reduce((t,n)=>t+=n.toString(16).padStart(2,"0"),"")}async function VA(e,t={asBuffer:!1}){const n=await fetch(e);return jA(n),t.asBuffer?n.arrayBuffer():n.text()}function jA(e){if(!e.ok)throw new Error(`HTTP ${e.status} - ${e.statusText}`);return e}function an(e){return e.replace(/^.*\./,"").toLowerCase()}function Rd(e){return e.substr(0,e.lastIndexOf("."))}function BA(e){const t=e.replace(/^.*[\\/]/,"").split(".");return{name:t[0].toLowerCase(),extension:t[1].toLowerCase()}}function Pt(e,t={}){return Promise.all([].map.call(e,n=>new Promise((o,s)=>{const i=new FileReader;i.onabort=l=>s(l),i.onerror=l=>s(l),i.onload=()=>{if(i.result){const l=i.result,r=Rd(n.name),a=an(n.name);o({binary:l,name:r,extension:a})}},t.asBuffer?i.readAsArrayBuffer(n):i.readAsBinaryString(n)})))}async function So(e,t={}){const n=[];for(const o of e)try{const s=await o.async(t.asBuffer?"uint8array":"text"),i=Rd(o.name),l=an(o.name);n.push({binary:s,name:i,extension:l})}catch(s){console.error(s)}return n}const XA=P`
  height: 100%;
  background-color: #b5b5b599;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 99999;

  p {
    color: white;
    background-color: rgb(104, 104, 104);
    padding: 1.5%;
    border-radius: 30px;
    margin: 0px;
  }

  svg {
    stroke-width: 0;
    font-size: 3rem !important;
    fill: white;
  }
`,YA=P`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
`;function GA(e){const{width:t,height:n}=$(),o=Y(),s=le(),i=c.exports.useCallback(async(g,x)=>{for(let y of x){const C=g.filter(v=>an(v.name)===y);switch(y){case ge.MOL:{const v=await So(C);o({type:Vs,files:v});break}case ge.NMRIUM:case ge.JSON:{const v=await So(C,{asBuffer:!0});if(C.length===1){const k=new TextDecoder("utf8");v[0].binary=k.decode(v[0].binary),o({type:xn,files:v})}else throw new Error("You can add only one json file");break}case ge.JDX:case ge.DX:{const v=await So(C,{asBuffer:!0});o({type:$o,files:v});break}case ge.JDF:{const v=await So(C,{asBuffer:!0});o({type:js,files:v});break}}}},[o]),l=c.exports.useCallback(async g=>{const x=[...new Set(g.map(y=>an(y.name)))];for(let y of x){const C=g.filter(v=>an(v.name)===y);try{switch(y){case ge.MOL:{const v=await Pt(C);o({type:Vs,files:v});break}case ge.NMRIUM:case ge.JSON:if(C.length===1){const v=await Pt(C,{asBuffer:!0});if(zA(v[0].binary)===HA.ZIP){const E=await dn.loadAsync(v[0].binary);await i(Object.values(E.files),[ge.NMRIUM])}else{const E=new TextDecoder("utf8");v[0].binary=E.decode(v[0].binary),o({type:xn,files:v})}}else throw new Error("You can add only one json file");break;case ge.JDX:case ge.DX:{const v=await Pt(C,{asBuffer:!0});o({type:$o,files:v});break}case ge.JDF:{const v=await Pt(C,{asBuffer:!0});o({type:js,files:v});break}case ge.ZIP:{const v=await Pt(C,{asBuffer:!0});for(const k of v){const E=await dn.loadAsync(k.binary),T=[...new Set(Object.values(E.files).map(I=>an(I.name)))];T.some(I=>ge[I.toUpperCase()]&&I!==ge.ZIP)?(Object.keys(E.files).some(N=>["2rr","fid","1r"].some(A=>N.endsWith(A)))&&o({type:Ho,files:v}),await i(Object.values(E.files),T)):o({type:Ho,files:v})}break}case ge.NMREDATA:Pt(C,{asBuffer:!0}).then(async v=>{for(const k of v)o({type:Zn,file:k})});break;default:throw new Error("The file extension must be zip, dx, jdx, json, mol, nmredata or nmrium.")}}catch(v){o({type:vt,isLoading:!1}),s.error(v.message)}}},[s,o,i]),r=c.exports.useCallback(g=>{o({type:vt,isLoading:!0}),l(g)},[o,l]),{getRootProps:a,getInputProps:u,isDragActive:d,open:h}=yh({onDrop:r,noClick:!0}),m=c.exports.useCallback(()=>{h()},[h]);return p(By,{value:m,children:w("div",S(b({},a()),{role:"none",css:YA,children:[p("input",b({"data-test-id":"dropzone-input"},u())),d&&w("div",{css:XA,style:{width:`${t}px`,height:`${n}px`,marginTop:"30px",marginLeft:"30px"},children:[p(vh,{}),p("p",{children:"Drop your files here"})]}),e.children]}))})}const ZA=[Pi,cs,pc,ze,Vo,vt,ec,nc,Ec,co,Ni,Ii,tc,ki,ls,Ci,as,wi,Ri,Di,bn,Gb,Yb,Mi,Wn,Si,zo,sc,jo];function WA(e){return!ZA.includes(e)}const UA=P`
  .menu {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 0px;
    margin: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99999;
    padding: 2px;
    background-color: white;

    button:hover {
      background-color: #fafafa;
    }
  }

  .menu-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-item {
    background-color: transparent;
    border: none;
    border-bottom: 0.55px solid whitesmoke;
    height: 35px;
    outline: outline;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;

    svg {
      display: inline-block;
    }

    :focus {
      outline: none !important;
    }
    span {
      font-size: 10px;
      padding: 0px 10px;
    }
  }
`;function KA({icon:e,label:t,onClick:n}){return w("button",{type:"button",className:"menu-item",onClick:n,children:[e,p("span",{children:t})]})}function qA({items:e,boxBounding:t,onClick:n}){const o=c.exports.useRef(),[s,i]=c.exports.useState({x:t.width,y:t.height});return c.exports.useLayoutEffect(()=>{const l=o.current.getBoundingClientRect();i(r=>{let a=t.height;return l.bottom>window.innerHeight&&(a=t.height*2+(l.bottom-window.innerHeight)),S(b({},r),{y:a})})},[t.height]),p("div",{ref:o,className:"menu",style:{transform:`translate(${s.x}px, -${s.y}px) `},children:e==null?void 0:e.map(l=>p(KA,S(b({},l),{onClick:()=>n(l)}),l.id))})}function fr({component:e,toolTip:t="",items:n=[],onClick:o=()=>null}){const s=c.exports.useRef(null),[i,l]=c.exports.useState(!1),r=c.exports.useCallback(()=>{l(!1)},[]),a=c.exports.useCallback(()=>{l(h=>!h)},[]),u=c.exports.useCallback(h=>{l(!1),o(h)},[o]),d=c.exports.useCallback(()=>{var h;return(h=s.current)==null?void 0:h.getBoundingClientRect()},[]);return w("div",{style:{height:"auto"},css:UA,children:[p("div",{ref:s,children:p(Se.Item,{id:`menu-${t}`,title:t,active:i,onClick:a,children:e})}),i&&p(qA,{items:n,boxBounding:d(),onClick:u}),i&&p("div",{className:"menu-cover",onClick:r})]})}const JA={info:{},datum:{},ftCounter:0,fidCounter:0};function Id(){const{data:e,activeSpectrum:t,activeTab:n}=$();return c.exports.useMemo(()=>{if(e){let o={},s={},i=0,l=0;for(const r of e){const{isFid:a,isFt:u,nucleus:d}=r.info;n===At(d)&&(a&&l++,u&&i++,t&&r.id===t.id&&(o=r.info,s=r.data))}return{info:o,datum:s,ftCounter:i,fidCounter:l}}return JA},[t,e,n])}function QA(e){const x=e,{name:t,style:n={},onChange:o=()=>null,className:s="",value:i,placeholder:l=""}=x,r=G(x,["name","style","onChange","className","value","placeholder"]),{values:a,handleChange:u,setFieldValue:d,errors:h}=pe(),m=c.exports.useCallback(y=>{o(y),u(y)},[u,o]);c.exports.useEffect(()=>{i&&d(t,i)},[t,d,i]);const g=c.exports.useMemo(()=>V(h,t),[h,t]);return f("textarea",b({name:t,className:s,placeholder:l,value:i||V(a,t),onChange:m,style:b(b({},n),g&&{borderColor:"red",borderWidth:"1px",outline:"none"})},r))}const eT=P`
  width: 600px;
  height: 300px;

  .inner-content {
    flex: 1;
    border: none;
    overflow: hidden;
    padding: 0px;
  }

  .text-area {
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    padding: 0 0 0 15px;
  }
`,tT=ee({publicationText:Vn().required()});function nT({onClose:e}){const t=c.exports.useRef(),n=Y(),o=le(),s=c.exports.useCallback(async i=>{const l=await o.showLoading("Generate spectrum from publication string in progress");setTimeout(()=>{n({type:mu,payload:i}),l()}),e()},[o,n,e]);return w("div",{css:[ht,eT],children:[w("div",{className:"header handle",children:[p("span",{children:"Import from publication string"}),p(me,{onClick:e,className:"close-bt"})]}),p("div",{className:"inner-content",children:p(re,{ref:t,initialValues:{publicationText:"1H NMR (CDCl3, 400MHz) \u03B4 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H)"},validationSchema:tT,onSubmit:s,children:p(QA,{name:"publicationText",className:"text-area",placeholder:"Enter publication string"})})}),p("div",{className:"footer-container",children:p("button",{type:"button",onClick:()=>t.current.submitForm(),className:"btn primary",children:"Import"})})]})}const oT=P`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 5px;
  button:focus {
    outline: none;
  }
  .header {
    height: 24px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
    }

    button {
      background-color: transparent;
      border: none;
      svg {
        height: 16px;
      }
    }
  }
  .container {
    display: flex;
    margin: 30px 5px;
    input,
    button {
      padding: 5px;
      border: 1px solid gray;
      border-radius: 5px;
      height: 36px;
      margin: 2px;
    }
    input {
      flex: 10;
    }
    button {
      flex: 2;
      color: white;
      background-color: gray;
    }
  }
`,sT=["dx","jdx"];function iT({onLoadClick:e,onClose:t,startLoading:n}){const o=c.exports.useRef(),s=c.exports.useCallback(()=>{const i=o.current.value,{name:l,extension:r}=BA(i);sT.includes(r)?(n==null||n(),VA(i,{asBuffer:!0}).then(a=>{e({binary:a,name:l,extension:r,jcampURL:i})})):e(null)},[e,n]);return w("div",{css:oT,children:[w("div",{className:"header handle",children:[p("span",{children:"Load JCAMP Dialog"}),p(me,{onClick:t})]}),w("div",{className:"container",children:[p("input",{ref:o,type:"text",placeholder:"Enter URL to JCAMP-DX file"}),p("button",{type:"button",onClick:s,children:"Load"})]})]})}const mr=[{id:"importFile",icon:f(ys,{}),label:"Import from file system (Press Ctrl + O)"},{id:"importJDX",icon:f(ys,{}),label:"Add JCAMP-DX from URL"},{id:"importPublicationString",icon:f(ys,{}),label:"Import from publication string"}],lT=[{id:"svg",icon:f(Mr,{}),label:"Export as SVG"},{id:"png",icon:f(Nr,{}),label:"Export as PNG"},{id:"json",icon:f(vs,{}),label:"Save data ( Press Ctrl + S )"},{id:"advance_save",icon:f(vs,{}),label:"Save data as  ( Press Ctrl + Shift + S )"},{id:"nmre",icon:f(vs,{}),label:"Save NMRE data"},{id:"copy",icon:f(ei,{}),label:"Copy image to Clipboard ( Press Ctrl + C )"}];function rT({info:e,verticalAlign:t,displayerMode:n,ftCounter:o,fidCounter:s,activeSpectrum:i}){const l=Y(),r=le(),a=he(),u=$i(),d=ud(),h=Ji(),m=c.exports.useMemo(()=>d?mr:mr.filter(H=>H.id!=="importPublicationString"),[d]),{isRealSpectrumShown:g,changeSpectrumViewHandler:x,changeDisplayViewModeHandler:y,alignSpectrumsVerticallyHandler:C}=bs(),{saveAsSVGHandler:v,saveAsPNGHandler:k,saveAsJSONHandler:E,saveAsNMREHandler:T,saveToClipboardHandler:M,saveAsHandler:I}=cd(),N=c.exports.useCallback(H=>{H?(l({type:$o,files:[H]}),a.close()):r.error("you file must be one of those extensions [ .jdx, dx ] ")},[r,l,a]),A=c.exports.useCallback(()=>{a.close(),l({type:vt,isLoading:!0})},[l,a]),D=c.exports.useCallback(()=>{a.show(f(iT,{onLoadClick:N,onClose:()=>a.close(),startLoading:A}),{})},[N,a,A]),R=c.exports.useCallback(()=>{a.show(f(nT,{onClose:()=>a.close()}),{})},[a]),O=c.exports.useCallback(({id:H})=>{switch(H){case"importFile":u();break;case"importJDX":D();break;case"importPublicationString":R();break;default:return}},[u,D,R]),L=c.exports.useCallback(({id:H})=>{switch(H){case"svg":v();break;case"png":k();break;case"json":E();break;case"advance_save":I();break;case"nmre":T();break;case"copy":M();break}},[v,k,E,I,T,M]);return F(c.exports.Fragment,{children:[h("import")&&f(fr,{component:f(Ch,{}),toolTip:"Import",onClick:H=>(O(H),null),items:m}),h("exportAs")&&f(fr,{component:f(qo,{}),toolTip:"Export As",onClick:H=>(L(H),null),items:lT}),n===B.DM_1D&&h("spectraStackAlignments")&&o>1&&((e==null?void 0:e.isFt)||!i)&&f(Se.Item,{id:"spectra-alignment",className:"cheminfo",title:"Spectra alignment ( Press s )",onClick:y,children:t.align==="stack"?f(kh,{}):f(Sh,{})}),n===B.DM_1D&&h("realImaginary")&&e.isComplex&&f(Se.Item,{id:"display",title:g?"Display Real ":"Display Imaginary",onClick:x,className:"cheminfo",children:f(wh,{})}),n===B.DM_1D&&h("spectraCenterAlignments")&&(o>0||s>0)&&f(Se.Item,{id:"baseline-position",title:t.align==="bottom"?"Baseline  Center ( Press c )":"Baseline  Bottom ( Press c )",onClick:C,className:"cheminfo",children:f("div",{style:{fontSize:24},children:t.align==="bottom"?f(Eh,{}):f(Ah,{})})})]})}const aT=c.exports.memo(rT);function cT(){const{activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o}=$(),{info:s,fidCounter:i,ftCounter:l}=Id();return f(aT,{info:s,fidCounter:i,ftCounter:l,activeSpectrum:e,verticalAlign:t,displayerMode:n,activeTab:o})}function Te(e){const{children:t,value:n=null,isActive:o=!1,onChange:s=()=>null,isVisible:i=!0,id:l,title:r}=e,[a,u]=c.exports.useState(e.isActive),d=c.exports.useCallback(()=>{const h=!a;u(h),s(h?n:null)},[a,s,n]);return c.exports.useEffect(()=>{u(o)},[o]),i?f(Se.Item,{onClick:d,title:r,id:l,active:a,children:t}):null}function uT({children:e,value:t,onChange:n=()=>null}){const[o,s]=c.exports.useState([]),i=c.exports.useCallback(r=>{const u=[...o].map(d=>({value:d.value,isActive:d.value===r}));s(u),n(r)},[n,o]),l=c.exports.useMemo(()=>{let r=0;return c.exports.Children.map(e,a=>{var u;if(a)if(a.type===Te){const d=c.exports.cloneElement(a,{onChange:i,isActive:(u=o[r])==null?void 0:u.isActive,index:r});return r++,d}else return c.exports.cloneElement(a)})},[e,i,o]);return c.exports.useEffect(()=>{const r=c.exports.Children.map(e,a=>{if(a&&a.type===Te)return{value:a.props.value,isActive:a.props.value===t}});s(r)},[e,t]),f(et,{children:l})}function dT({defaultValue:e,activeSpectrum:t,info:n,datum:o,displayerMode:s,ftCounter:i,mode:l}){const[r,a]=c.exports.useState(""),u=Ji(),d=Y(),{handleChangeOption:h,handleFullZoomOut:m}=bs(),g=c.exports.useCallback(y=>{a(y),h(y)},[h]);c.exports.useEffect(()=>{a(e)},[e]);const x=c.exports.useCallback(()=>{d({type:xc,value:""}),d({type:nc,selectedFilter:null})},[d]);return F(et,{children:[F(uT,{value:r,onChange:g,children:[u("zoomTool")&&f(Te,{value:_.zoom.id,id:"zoomIn",title:`${_.zoom.label} ( Press z )`,children:f("div",{style:{fontSize:14},children:f(Qn,{})})},_.zoom.id),u("zoomOutTool")&&f(Se.Item,{id:"zoom-out",onClick:m,title:"Horizontal zoom out ( Press f ), Horizontal and Vertical zoom out, double click ( Press ff )",children:f("div",{style:{fontSize:14},children:f(Th,{})})}),s===B.DM_1D&&u("peakTool")&&f(Te,{value:_.peakPicking.id,title:`${_.peakPicking.label} ( Press p )`,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"peakPicking",children:f(Dh,{})},_.peakPicking.id),s===B.DM_1D&&u("integralTool")&&f(Te,{value:_.integral.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"integralPicking",title:`${_.integral.label} ( Press i )`,children:f(Fr,{})},_.integral.id),s===B.DM_2D&&u("zonePickingTool")&&f(Te,{value:_.zone2D.id,id:"zone2d",isVisible:!!(t&&!(n==null?void 0:n.isFid)),title:`${_.zone2D.label} ( Press r )`,children:f(Rh,{})},_.zone2D.id),s===B.DM_2D&&u("slicingTool")&&f(Te,{value:_.slicingTool.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),id:"slic",title:`${_.slicingTool.label}`,children:f("p",{children:"Slic"})},_.slicingTool.id),s===B.DM_1D&&u("autoRangesTool")&&f(Te,{value:_.rangesPicking.id,isVisible:!!(t&&!(n==null?void 0:n.isFid)),title:`${_.rangesPicking.label} ( Press r )`,id:"ranges-pick",children:f($r,{})},_.rangesPicking.id),s===B.DM_1D&&u("multipleSpectraAnalysisTool")&&i>1&&l==="RTL"&&f(Te,{value:_.multipleSpectraAnalysis.id,id:"multipleSpectraAnalysis",title:_.multipleSpectraAnalysis.label,children:f(dl,{})},_.multipleSpectraAnalysis.id),s===B.DM_1D&&u("zeroFillingTool")&&f(Te,{value:_.zeroFilling.id,isVisible:ri({info:n}),id:"zeroFilling",title:_.zeroFilling.label,children:f(Ih,{})},_.zeroFilling.id),s===B.DM_1D&&u("phaseCorrectionTool")&&f(Te,{value:_.phaseCorrection.id,id:"phaseCorrection",title:`${_.phaseCorrection.label} ( Press a )`,isVisible:!!(t&&n&&ii({info:n})&&o.im),children:f(Nh,{})},_.phaseCorrection.id),s===B.DM_1D&&u("baseLineCorrectionTool")&&f(Te,{value:_.baseLineCorrection.id,id:"baseLineCorrection",title:`${_.baseLineCorrection.label} ( Press b )`,isVisible:!!(t&&n&&oi({info:n})),children:f(Mh,{})},_.baseLineCorrection.id),s===B.DM_1D&&u("exclusionZonesTool")&&!(n==null?void 0:n.isFid)&&i>0&&f(Te,{value:_.exclusionZones.id,title:`${_.exclusionZones.label} ( Press e )`,id:"exclusionZones",children:f("div",{style:{fontSize:18},children:f(dl,{})})},_.exclusionZones.id)]}),s===B.DM_1D&&u("FFTTool")&&n&&si({info:n})&&f(Se.Item,{id:"fft-filter",className:"cheminfo",title:"FFT Filter",onClick:x,children:f(Ph,{})})]})}const pT=c.exports.memo(dT);function hT({defaultValue:e=_.zoom.id}){const{activeSpectrum:t,displayerMode:n,activeTab:o,mode:s}=$(),i=Id();return f(pT,S(b({},i),{activeSpectrum:t,displayerMode:n,activeTab:o,defaultValue:e,mode:s}))}function fT({selectedTool:e}){return f("div",{style:{fontSize:18},children:F(Se,{orientation:"vertical",children:[f(hT,{defaultValue:e}),f(cT,{})]})})}const mT=c.exports.memo(fT);function gT(){const{toolOptions:{selectedTool:e}}=$();return f(mT,{selectedTool:e})}const xT=P`
  border: 0.55px #e6e6e6 solid;
  display: flex;
  flex: 1;
  flex-direction: 'column';
  height: 100%;
  margin-left: -1px;
`,bT=P`
  background-color: white;
  width: 100%;
  display: block;
  height: 100%;
  font-size: 14px;

  div:focus {
    outline: none !important;
  }

  button {
    cursor: pointer;
    color: black;
    &:disabled {
      cursor: default;
    }
  }

  button:active,
  button:hover,
  button:focus,
  [type='button']:focus,
  button {
    outline: none !important;
  }
  * {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .SplitPane {
    height: 100%;
  }

  .Resizer.vertical:after {
    content: '\\22EE';
    top: 50%;
    color: black;
    position: absolute;
    font-size: 14px;
  }

  .Resizer.vertical {
    padding: 2px;
  }

  .Resizer.vertical:hover {
    background-color: #dfdfdf !important;
    border-left: 0.55px #bbbbbb;
 solid;
    border-right: 0.55px #bbbbbb solid;
  }
`,yT={},vT={spectra:[]};function CT(e){return p(Fh,{style:{width:"100%"},children:p(_h,{FallbackComponent:J1,children:p(kT,b({},e))})})}function kT({data:e=vT,workspace:t,preferences:n=yT,getSpinner:o=Ru,onDataChange:s,emptyText:i}){const l=c.exports.useRef(null),r=c.exports.useRef(null),[a,u]=Lh(!1),d=Oh(l,a,{onClose:()=>{u(!1)}}),[h,m]=c.exports.useReducer(Hy,wu,Ly),[g,x]=c.exports.useReducer(f0,_u,i0),{displayerMode:y,data:C}=h;c.exports.useEffect(()=>{WA(h.actionType)&&(s==null||s(h))},[s,h]);const v=c.exports.useMemo(()=>Oy(m),[]);c.exports.useEffect(()=>{var M;(M=l.current)==null||M.focus()},[d]),c.exports.useEffect(()=>{x({type:"INIT_PREFERENCES",payload:{display:n,workspace:t,dispatch:x}})},[n,t]),c.exports.useEffect(()=>{v({type:vt,isLoading:!0}),e&&v({type:yi,payload:e})},[e,v]);const k=c.exports.useCallback(M=>{Xt(M)||M.preventDefault()},[]),E=c.exports.useCallback(()=>{v({type:jo,payload:!0})},[v]),T=c.exports.useCallback(()=>{v({type:jo,payload:!1})},[v]);return p(Sv,{value:{rootRef:l.current,elementsWraperRef:r.current},children:p(m0,{value:g,children:p("div",{onMouseEnter:E,onMouseLeave:T,style:{height:"100%",position:"relative"},children:p(gv,{wrapperRef:r.current,children:p(Vy,{value:v,children:p(zy,{value:h,children:p(kv,{wrapperRef:r.current,children:p(F0,{children:p(P0,{spectraData:C,children:p(Zy,{value:o,children:p("div",{className:"nmrium-container",ref:l,css:bT,onContextMenu:k,style:{height:"100%",width:"100%"},children:p(GA,{children:w("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",width:"100%"},children:[p($A,{isFullscreen:d,onMaximize:u}),w("div",{style:{display:"flex",flexDirection:"row",height:"100%"},children:[p(gT,{}),w($h,{initialSeparation:"590px",orientation:"horizontal",sideSeparation:"end",children:[w("div",{css:xT,children:[p(aA,{}),p("div",{"data-test-id":"viewer",style:{width:"100%",height:"100%"},children:y===B.DM_1D?p(q1,{emptyText:i}):p(nv,{emptyText:i})})]}),p(rA,{})]}),p("div",{ref:r,id:"main-wrapper",style:{position:"absolute",pointerEvents:"none",zIndex:0,left:0,right:0,top:0,bottom:0}},String(d))]})]})})})})})})})})})})})})})}var ST=c.exports.memo(CT);function wT(e,t){let n=[];function o(s){Object.keys(s).forEach(i=>{t===i&&n.push({[i]:s[i]}),Array.isArray(s[i])?s[i].forEach(l=>{o(l)}):typeof s[i]=="object"&&s[i]!==null&&o(s[i])})}return o(e),n}function ET(e){const[t,n]=c.exports.useState(),[o,s]=c.exports.useState("");c.exports.useEffect(()=>{const l=wT(e,o);n(o?l:e)},[e,o]);const i=c.exports.useCallback(Uo(l=>{const r=l.target.value;s(r)},500),[e]);return F("div",{style:{display:"flex",flexDirection:"column",paddingTop:"10px"},children:[f("input",{style:{border:"1px solid gray",padding:"5px"},type:"text",placeholder:"Search for key...",onChange:i}),f(Vr,{data:t}),";"]})}function Nd(){const[e,t]=c.exports.useState(),[n,o]=c.exports.useState({}),s=c.exports.useCallback(async l=>{try{const r=await Pt(l,{asBuffer:!0}),a=new TextDecoder("utf8"),u=JSON.parse(a.decode(r[0].binary));t(u)}catch{alert("Invalid JSON file")}},[]),i=c.exports.useCallback(l=>{o(l)},[]);return F("div",{style:{display:"flex",height:"100vh",padding:"20px"},children:[f("div",{style:{flex:9},children:f(ST,{data:e,onDataChange:i})}),F("div",{style:{display:"flex",flexDirection:"column",padding:"10px",flex:3},children:[f("div",{style:{flex:3},children:f(Hh,{onDrop:s,color:"gray"})}),f("div",{style:{flex:9},children:f(ET,{data:n})})]})]})}var AT=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nd});const TT=c.exports.lazy(()=>it(()=>import("./TestHighlight.06a9f74c.js"),["assets/TestHighlight.06a9f74c.js","assets/vendor.3abbb066.js"]));function DT(){return f(c.exports.Suspense,{fallback:null,children:F(Wo,{children:[f(gt,{path:"/test/highlight",component:TT}),f(gt,{path:"/",component:Nd}),f(gt,{render:()=>f("div",{children:"Page not found"})})]})})}zh.render(f(Vh,{children:F(Wo,{children:[f(gt,{path:"/test",component:DT}),f(gt,{path:"/",render:e=>f(pf,b({},e))})]})}),document.getElementById("root"));export{F0 as H,ST as N,ms as c,ie as u};
//# sourceMappingURL=index.987bae94.js.map
