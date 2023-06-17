var w=Object.defineProperty;var C=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var f=(t,e,o)=>(C(t,typeof e!="symbol"?e+"":e,o),o);import{t as b}from"./config-5cd0b23e.js";import{r as F}from"./element-plus-04c0a14f.js";import{s as M,e as L}from"./index-1b74b57e.js";import{m as x}from"./markdown-transform-html-1da660b5.js";const S=(t,e)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function $(t){return(await S(Object.assign({}),`../../templates/modules/${t}/style.scss`)).default}const q=t=>{for(const e of b)if(t===e.type)return e.content;return""},I={h1:{max:30,min:-15,top:0,tag:"",optimal:0},h2:{max:30,min:-15,top:0,tag:"",optimal:0},h3:{max:20,min:-15,top:0,tag:"",optimal:0},h4:{max:20,min:-15,top:0,tag:"",optimal:0},h5:{max:20,min:-15,top:0,tag:"",optimal:0},h6:{max:20,min:-15,top:0,tag:"",optimal:0},li:{max:10,min:-15,top:0,tag:"",optimal:0},p:{max:10,min:-15,top:0,tag:"",optimal:0}},T=(t,e)=>t.optimal>e.optimal,g=(t,e,o)=>[t[e],t[o]]=[t[o],t[e]];class z{constructor(e){f(this,"container",[]);f(this,"cmp",T);this.cmp=e}push(e){const{container:o,cmp:n}=this;o.push(e);let c=o.length-1;for(;c;){const s=Math.floor((c-1)/2);if(!n(o[c],o[s]))return;g(o,c,s),c=s}}pop(){const{container:e,cmp:o}=this;if(!e.length)return null;g(e,0,e.length-1);const n=e.pop(),c=e.length;let s=0,i=s*2+1;for(;i<c;){const a=s*2+2;if(a<c&&o(e[a],e[i])&&(i=a),!o(e[i],e[s]))break;g(e,i,s),s=i,i=s*2+1}return n}top(){return this.container.length?this.container[0]:null}isEmpty(){return this.container.length===0}}function R(){return document.createElement("style")}function j(){return document.createElement("div")}function N(t){return document.head.querySelector(`style[${t}]`)}function G(t){var e;(e=N(t))==null||e.remove()}function D(t){return t.match(/\d+/g).map(o=>parseInt(o))}function U(t,e){const{showLoading:o,closeLoading:n}=A();o("\u6B63\u5728\u5BFC\u51FAPDF \u8BF7\u8010\u5FC3\u7B49\u5F85...");const c=getComputedStyle(e).getPropertyValue("background-color"),[s,i,a]=D(c);html2canvas(e,{allowTaint:!1,logging:!1,useCORS:!0,scale:4,backgroundColor:c}).then(r=>{var E;const l=new jspdf.jsPDF("p","mm","a4");l.setFillColor(s,i,a),l.rect(0,0,l.internal.pageSize.width,l.internal.pageSize.height,"F");const u=r.getContext("2d"),h=210,y=297,p=Math.floor(y*r.width/h);let m=0;for(;m<r.height;){const d=document.createElement("canvas");d.width=r.width,d.height=Math.min(p,r.height-m),(E=d.getContext("2d"))==null||E.putImageData(u==null?void 0:u.getImageData(0,m,r.width,Math.min(p,r.height-m)),0,0),l.addImage(d.toDataURL("image/jpeg",1),"JPEG",0,0,h,Math.min(y,h*d.height/d.width)),m+=p,r.height-m>1&&(l.addPage(),l.setFillColor(s,i,a),l.rect(0,0,l.internal.pageSize.width,l.internal.pageSize.height,"F"))}l.save(`${t}.pdf`),M("PDF\u5BFC\u51FA\u6210\u529F")}).catch(r=>{L("\u5BFC\u51FA\u5931\u8D25, "+r)}).finally(n)}function A(){let t=null;function e(n){t=F.service({lock:!0,text:n,background:"rgba(0, 0, 0, 0.7)"})}function o(){t&&t.close()}return{showLoading:e,closeLoading:o}}function V(t=0){const e=document.documentElement||document.body;let o=Math.abs(e.scrollTop-t)/20,n=0,c=-1;const s=o;function i(){n=e.scrollTop;const a=n-t;c==n||a==0||(c=n,window.requestAnimationFrame(function(){if(o=a>0?s:-s,n-=o,Math.abs(a)<s){e.scrollTop=t;return}e.scrollTop=n,Math.abs(a)>0&&i()}))}i()}function P({node:t,latest:e,uid:o}){var c,s;let n="";if(t.nodeType===Node.ELEMENT_NODE){const i=t.classList,a=t.tagName.toLowerCase();i.contains("flex-layout")?n+=`
::: start
`:i.contains("iconfont")?n+=`icon:${i[1].slice(5)} `:i.contains("head-layout")?n+=`
::: headStart
`:i.contains("main-layout")?n+=`
::: mainStart
`:a==="a"?n+="[":["b","strong"].includes(a)?n+="**":a[0]==="h"?n+="#".repeat(+a[1])+" ":a==="li"?n+=`${((c=t.parentElement)==null?void 0:c.tagName.toLowerCase())=="ul"?"- ":o+". "}`:["td","th"].includes(a)?n+="| ":a==="code"?n+="`":a==="i"&&i[0]!="iconfont"?n+="*":a==="br"&&(n+="&nbsp;");const r=t.childNodes;for(let l=0;l<r.length;l++){const u=r[l].nodeType==r[l].ELEMENT_NODE&&((s=r[l].parentElement)==null?void 0:s.tagName.toLowerCase())=="ol";n+=P({node:r[l],latest:l===r.length-1,uid:u?++o:0})}if(i.contains("flex-layout"))n+="::: end";else if(i.contains("head-layout"))n+="::: headEnd";else if(i.contains("main-layout"))n+="::: mainEnd";else if(i.contains("flex-layout-item")&&!e)n+=`
:::`;else if(a=="a")n+=`](${t.getAttribute("href")})`;else if(["b","strong"].includes(a))n+="**";else if(a=="img"){const l=t.alt,u=l==null?void 0:l.includes("\u4E2A\u4EBA\u5934\u50CF");n+=`![${u?"\u4E2A\u4EBA\u5934\u50CF":l}](${t.src})`}else a==="tr"?n+="|":["th","td"].includes(a)?n+=" ":a==="code"?n+="`":a==="i"&&i[0]!="iconfont"&&(n+="*");["b","span","strong","a","i","td","th","thead","code","ul","ol"].includes(a)||(n+=`
`)}else{const i=t.textContent||"";n+=i}return n}function k(t){var a;const e=document.createElement("div");e.innerHTML=t;const o=e.querySelector(".main-layout"),n=o||e,c=Array.from(n.childNodes);let s=null,i=document.createElement("div");for(const r of c)r.nodeType!==Node.TEXT_NODE&&(r.tagName.toLocaleLowerCase()==="h2"?(s&&i.appendChild(s),s=document.createElement("div"),s.className="resume-module",s.appendChild(r)):s?s.appendChild(r):i.appendChild(r));return s&&i.appendChild(s),o&&((a=n.parentNode)==null||a.replaceChild(i,n),i.className="main-layout",i=e),i}function J(t){return k(x(t))}export{z as H,j as a,J as b,R as c,U as d,P as e,q as g,$ as i,I as o,N as q,G as r,V as s};