import{i as de,r as h,g as pe,b as ve,n as ne,u as me,d as _e,e as Oe,w as T,f as ae,h as F,j as ge,s as we}from"./@vue-3109dbb8.js";var Q;const C=typeof window<"u",ye=e=>typeof e=="function",he=e=>typeof e=="string",D=()=>{},Pe=C&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function y(e){return typeof e=="function"?e():me(e)}function V(e,r){function t(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(a).catch(o)})}return t}const oe=e=>e();function be(e,r={}){let t,n,a=D;const o=s=>{clearTimeout(s),a(),a=D};return s=>{const c=y(e),f=y(r.maxWait);return t&&o(t),c<=0||f!==void 0&&f<=0?(n&&(o(n),n=null),Promise.resolve(s())):new Promise((p,m)=>{a=r.rejectOnCancel?m:p,f&&!n&&(n=setTimeout(()=>{t&&o(t),n=null,p(s())},f)),t=setTimeout(()=>{n&&o(n),n=null,p(s())},c)})}}function Se(e,r=!0,t=!0,n=!1){let a=0,o,u=!0,s=D,c;const f=()=>{o&&(clearTimeout(o),o=void 0,s(),s=D)};return m=>{const i=y(e),l=Date.now()-a,d=()=>c=m();return f(),i<=0?(a=Date.now(),d()):(l>i&&(t||!u)?(a=Date.now(),d()):r&&(c=new Promise((O,E)=>{s=n?E:O,o=setTimeout(()=>{a=Date.now(),u=!0,O(d()),f()},Math.max(0,i-l))})),!t&&!o&&(o=setTimeout(()=>u=!0,i)),u=!1,c)}}function Ee(e=oe){const r=h(!0);function t(){r.value=!1}function n(){r.value=!0}const a=(...o)=>{r.value&&e(...o)};return{isActive:ae(r),pause:t,resume:n,eventFilter:a}}function $e(e){return e}function M(e){return _e()?(Oe(e),!0):!1}function Ie(e,r=200,t={}){return V(be(r,t),e)}function mt(e,r=200,t={}){const n=h(e.value),a=Ie(()=>{n.value=e.value},r,t);return T(e,()=>a()),n}function _t(e,r=200,t=!1,n=!0,a=!1){return V(Se(r,t,n,a),e)}function je(e){return typeof e=="function"?F(e):h(e)}function se(e,r=!0){pe()?ve(e):r?e():ne(e)}function Ot(e,r,t={}){const{immediate:n=!0}=t,a=h(!1);let o=null;function u(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,u()}function c(...f){u(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...f)},y(r))}return n&&(a.value=!0,C&&c()),M(s),{isPending:ae(a),start:c,stop:s}}function gt(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=de(e),o=h(e);function u(s){if(arguments.length)return o.value=s,o.value;{const c=y(t);return o.value=o.value===c?y(n):c,o.value}}return a?u:[o,u]}var W=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,De=(e,r)=>{var t={};for(var n in e)Ae.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&W)for(var n of W(e))r.indexOf(n)<0&&Te.call(e,n)&&(t[n]=e[n]);return t};function Ce(e,r,t={}){const n=t,{eventFilter:a=oe}=n,o=De(n,["eventFilter"]);return T(e,V(a,r),o)}var Ne=Object.defineProperty,Fe=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?Ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Me=(e,r)=>{for(var t in r||(r={}))ie.call(r,t)&&z(e,t,r[t]);if(L)for(var t of L(r))ue.call(r,t)&&z(e,t,r[t]);return e},Re=(e,r)=>Fe(e,Le(r)),ke=(e,r)=>{var t={};for(var n in e)ie.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&L)for(var n of L(e))r.indexOf(n)<0&&ue.call(e,n)&&(t[n]=e[n]);return t};function xe(e,r,t={}){const n=t,{eventFilter:a}=n,o=ke(n,["eventFilter"]),{eventFilter:u,pause:s,resume:c,isActive:f}=Ee(a);return{stop:Ce(e,r,Re(Me({},o),{eventFilter:u})),pause:s,resume:c,isActive:f}}function A(e){var r;const t=y(e);return(r=t==null?void 0:t.$el)!=null?r:t}const S=C?window:void 0;C&&window.document;C&&window.navigator;C&&window.location;function N(...e){let r,t,n,a;if(he(e[0])||Array.isArray(e[0])?([t,n,a]=e,r=S):[r,t,n,a]=e,!r)return D;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const o=[],u=()=>{o.forEach(p=>p()),o.length=0},s=(p,m,i,l)=>(p.addEventListener(m,i,l),()=>p.removeEventListener(m,i,l)),c=T(()=>[A(r),y(a)],([p,m])=>{u(),p&&o.push(...t.flatMap(i=>n.map(l=>s(p,i,l,m))))},{immediate:!0,flush:"post"}),f=()=>{c(),u()};return M(f),f}let B=!1;function wt(e,r,t={}){const{window:n=S,ignore:a=[],capture:o=!0,detectIframe:u=!1}=t;if(!n)return;Pe&&!B&&(B=!0,Array.from(n.document.body.children).forEach(i=>i.addEventListener("click",D)));let s=!0;const c=i=>a.some(l=>{if(typeof l=="string")return Array.from(n.document.querySelectorAll(l)).some(d=>d===i.target||i.composedPath().includes(d));{const d=A(l);return d&&(i.target===d||i.composedPath().includes(d))}}),p=[N(n,"click",i=>{const l=A(e);if(!(!l||l===i.target||i.composedPath().includes(l))){if(i.detail===0&&(s=!c(i)),!s){s=!0;return}r(i)}},{passive:!0,capture:o}),N(n,"pointerdown",i=>{const l=A(e);l&&(s=!i.composedPath().includes(l)&&!c(i))},{passive:!0}),u&&N(n,"blur",i=>{var l;const d=A(e);((l=n.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(d!=null&&d.contains(n.document.activeElement))&&r(i)})].filter(Boolean);return()=>p.forEach(i=>i())}function le(e,r=!1){const t=h(),n=()=>t.value=Boolean(e());return n(),se(n,r),t}function Ve(e,r={}){const{window:t=S}=r,n=le(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=h(!1),u=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(u(),a=t.matchMedia(je(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return ge(s),M(()=>u()),o}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";k[x]=k[x]||{};const Qe=k[x];function ce(e,r){return Qe[e]||r}function We(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ze=Object.defineProperty,J=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,U=(e,r)=>{for(var t in r||(r={}))Be.call(r,t)&&H(e,t,r[t]);if(J)for(var t of J(r))Je.call(r,t)&&H(e,t,r[t]);return e};const He={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},q="vueuse-storage";function Ue(e,r,t,n={}){var a;const{flush:o="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,mergeDefaults:f=!1,shallow:p,window:m=S,eventFilter:i,onError:l=v=>{}}=n,d=(p?we:h)(r);if(!t)try{t=ce("getDefaultStorage",()=>{var v;return(v=S)==null?void 0:v.localStorage})()}catch(v){l(v)}if(!t)return d;const O=y(r),E=We(O),P=(a=n.serializer)!=null?a:He[E],{pause:g,resume:b}=xe(d,()=>$(d.value),{flush:o,deep:u,eventFilter:i});return m&&s&&(N(m,"storage",w),N(m,q,R)),w(),d;function $(v){try{if(v==null)t.removeItem(e);else{const _=P.write(v),I=t.getItem(e);I!==_&&(t.setItem(e,_),m&&m.dispatchEvent(new CustomEvent(q,{detail:{key:e,oldValue:I,newValue:_,storageArea:t}})))}}catch(_){l(_)}}function j(v){const _=v?v.newValue:t.getItem(e);if(_==null)return c&&O!==null&&t.setItem(e,P.write(O)),O;if(!v&&f){const I=P.read(_);return ye(f)?f(I,O):E==="object"&&!Array.isArray(I)?U(U({},O),I):I}else return typeof _!="string"?_:P.read(_)}function R(v){w(v.detail)}function w(v){if(!(v&&v.storageArea!==t)){if(v&&v.key==null){d.value=O;return}if(!(v&&v.key!==e)){g();try{d.value=j(v)}catch(_){l(_)}finally{v?ne(b):b()}}}}}function fe(e){return Ve("(prefers-color-scheme: dark)",e)}var qe=Object.defineProperty,G=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?qe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Xe=(e,r)=>{for(var t in r||(r={}))Ge.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))Ke.call(r,t)&&K(e,t,r[t]);return e};function Ye(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:a=S,storage:o,storageKey:u="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:c,emitAuto:f}=e,p=Xe({auto:"",light:"light",dark:"dark"},e.modes||{}),m=fe({window:a}),i=F(()=>m.value?"dark":"light"),l=c||(u==null?h(n):Ue(u,n,o,{window:a,listenToStorageChanges:s})),d=F({get(){return l.value==="auto"&&!f?i.value:l.value},set(g){l.value=g}}),O=ce("updateHTMLAttrs",(g,b,$)=>{const j=a==null?void 0:a.document.querySelector(g);if(!!j)if(b==="class"){const R=$.split(/\s/g);Object.values(p).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{R.includes(w)?j.classList.add(w):j.classList.remove(w)})}else j.setAttribute(b,$)});function E(g){var b;const $=g==="auto"?i.value:g;O(r,t,(b=p[$])!=null?b:$)}function P(g){e.onChanged?e.onChanged(g,E):E(g)}return T(d,P,{flush:"post",immediate:!0}),f&&T(i,()=>P(d.value),{flush:"post"}),se(()=>P(d.value)),d}var Ze=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,Y=(e,r,t)=>r in e?Ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,at=(e,r)=>{for(var t in r||(r={}))rt.call(r,t)&&Y(e,t,r[t]);if(X)for(var t of X(r))nt.call(r,t)&&Y(e,t,r[t]);return e},ot=(e,r)=>et(e,tt(r));function yt(e={}){const{valueDark:r="dark",valueLight:t="",window:n=S}=e,a=Ye(ot(at({},e),{onChanged:(s,c)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,s==="dark"):c(s)},modes:{dark:r,light:t}})),o=fe({window:n});return F({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}var Z=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ut=(e,r)=>{var t={};for(var n in e)st.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Z)for(var n of Z(e))r.indexOf(n)<0&&it.call(e,n)&&(t[n]=e[n]);return t};function ht(e,r,t={}){const n=t,{window:a=S}=n,o=ut(n,["window"]);let u;const s=le(()=>a&&"ResizeObserver"in a),c=()=>{u&&(u.disconnect(),u=void 0)},f=T(()=>A(e),m=>{c(),s.value&&a&&m&&(u=new ResizeObserver(r),u.observe(m,o))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return M(p),{isSupported:s,stop:p}}var ee;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ee||(ee={}));var lt=Object.defineProperty,te=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,re=(e,r,t)=>r in e?lt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,dt=(e,r)=>{for(var t in r||(r={}))ct.call(r,t)&&re(e,t,r[t]);if(te)for(var t of te(r))ft.call(r,t)&&re(e,t,r[t]);return e};const pt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};dt({linear:$e},pt);export{N as a,A as b,_t as c,Pe as d,Ot as e,yt as f,gt as g,Ie as h,C as i,wt as o,mt as r,M as t,ht as u};
