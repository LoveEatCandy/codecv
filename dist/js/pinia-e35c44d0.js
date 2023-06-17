import{i as Z}from"./vue-demi-3c8f99f1.js";import{ag as F,r as V,af as H,ar as G,y as $,w as A,K as T,i as E,as as B,ah as tt,d as et,e as st,n as nt,L as ot,h as ct}from"./@vue-08c382c3.js";/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let D;const k=t=>D=t,J=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function bt(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=H({install(u){k(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const K=()=>{};function W(t,o,s,e=K){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(r),r}function p(t,...o){t.slice().forEach(s=>{s(...o)})}const rt=t=>t();function R(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!B(e)?t[s]=R(r,e):t[s]=e}return t}const ut=Symbol();function at(t){return!L(t)||!t.hasOwnProperty(ut)}const{assign:y}=Object;function ft(t){return!!(E(t)&&t.effect)}function it(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const v=ot(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=H(ct(()=>{k(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return P=N(t,b,o,s,e,!0),P}function N(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),P={deep:!0};let b,v,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let I;function O(c){let n;b=v=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:_}):(R(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:_});const h=I=Symbol();nt().then(()=>{I===h&&(b=!0)}),v=!0,p(d,n,e.state.value[t])}const q=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{y(S,h)})}:K;function z(){f.stop(),d=[],m=[],e._s.delete(t)}function M(c,n){return function(){k(e);const h=Array.from(arguments),S=[],w=[];function X(i){S.push(i)}function Y(i){w.push(i)}p(m,{args:h,name:c,store:l,after:X,onError:Y});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return x instanceof Promise?x.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,x),x)}}const Q={_p:e,$id:t,$onAction:W.bind(null,m),$patch:O,$reset:q,$subscribe(c,n={}){const h=W(d,c,n.detached,()=>S()),S=f.run(()=>A(()=>e.state.value[t],w=>{(n.flush==="sync"?v:b)&&c({storeId:t,type:C.direct,events:_},w)},y({},P,n)));return h},$dispose:z},l=T(Q);e._s.set(t,l);const U=e._a&&e._a.runWithContext||rt,g=e._e.run(()=>(f=F(),U(()=>f.run(o))));for(const c in g){const n=g[c];if(E(n)&&!ft(n)||B(n))u||(j&&at(n)&&(E(n)?n.value=j[c]:R(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);g[c]=h,a.actions[c]=n}}return y(l,g),y(tt(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{O(n=>{y(n,c)})}}),e._p.forEach(c=>{y(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,v=!0,l}function yt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,P){const b=G();return a=a||(b?$(J,null):null),a&&k(a),a=D,a._s.has(e)||(u?N(e,o,r,a):it(e,r,a)),a._s.get(e)}return f.$id=e,f}export{bt as c,yt as d};