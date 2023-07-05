import{m as B}from"./element-plus-57978b99.js";import{T as v}from"./typenet-5334c2a0.js";import{b as D,D as F,a9 as E,o as u,c as n,O as d,a as e,F as r,a6 as _,R as y,Q as C,U as m,V as h,W as w,u as i,L as f,T as A,au as $,av as b}from"./@vue-f3f56c11.js";import{B as z,b as N,_ as g,C as S}from"./index-129dd17f.js";import{f as V}from"./@vueuse-eb97cd29.js";import"./lodash-es-9d35530d.js";import"./async-validator-604317c1.js";import"./@element-plus-009c8a55.js";import"./dayjs-0e47d17d.js";import"./aos-80360ef4.js";import"./@ctrl-aa1b1e70.js";import"./pinia-600a5770.js";import"./vue-demi-3c8f99f1.js";import"./picture-verification-code-77c40e50.js";import"./vue-router-f3610fff.js";import"./markdown-transform-html-09900b72.js";import"./nprogress-6c9d9548.js";function T(){D(()=>{const o=document.querySelector(".typenet-text");(o==null?void 0:o.querySelector(".type-container"))==null&&new v(".typenet-text",{speed:10,style:"font-weight: bold; line-height: 28px"}).type("\u4F7F\u7528",{style:"font-weight: bold; font-size: 40px;line-height: 60px"}).type(" CodeCV Resume ",{style:"color: #ff7449;font-weight: bold; font-size: 40px;line-height: 60px"}).type("\u514D\u8D39\u751F\u6210\u4F60\u7684\u7B80\u5386",{style:"font-weight: bold; font-size: 40px;line-height: 60px"}).line().line().type("CodeCV \u652F\u6301\u4F60\u4F7F\u7528 Markdown \u8BED\u6CD5\u6765\u7F16\u5199\u4F60\u7684\u7B80\u5386\uFF0C\u53EF\u6269\u5C55\u6027\u6781\u9AD8\u3002\u4E14\u652F\u6301\u53CC\u7F16\u8F91\u6A21\u5F0F\uFF0C").type("Markdown\u6A21\u5F0F ",{style:"color: #ff7449"}).type("\u4EE5\u53CA").type(" \u5185\u5BB9\u6A21\u5F0F ",{style:"color: #ff7449"}).type("\u65E0\u7F1D\u5207\u6362\uFF0C\u591A\u79CD\u6A21\u677F\u9002\u914D\uFF0C\u7F16\u5199\u4E00\u5957\u7B80\u5386\u5185\u5BB9\u53EF\u9002\u914D\u591A\u4E2A\u7B80\u5386\u6A21\u677F\uFF0C\u4F60\u60F3\u8981\u7684\u8FD9\u91CC\u90FD\u6709\uFF5E").start()})}const q=[{name:"\u7B80\u5386\u5236\u4F5C",path:"/template",tooltip:!1},{name:"\u8BED\u6CD5\u52A9\u624B",path:"/syntax/helper",tooltip:!1},{name:"\u66F4\u65B0\u5185\u5BB9",path:"/update/line",tooltip:!1}],M=[{name:"GitHub",path:"https://github.com/acmenlei/markdown-resume-to-pdf",icon:"iconfont icon-github"},{name:"Gitee",path:"https://gitee.com/codeleilei/markdown2pdf",icon:"iconfont icon-gitee"}],O={id:"header"},G={class:"nav","data-aos":"zoom-out-right"},H=["onClick"],I={class:"operator","data-aos":"zoom-out-left"},L=F({__name:"header",setup(o){function l(a){window.location.href=a}return(a,c)=>{const p=E("router-link");return u(),n("div",O,[d(z),e("ul",G,[(u(!0),n(r,null,_(i(q),(t,s)=>(u(),n("li",{key:s},[t.tooltip?w("",!0):(u(),y(p,{key:0,to:t.path||""},{default:C(()=>[m(h(t.name),1)]),_:2},1032,["to"]))]))),128)),(u(!0),n(r,null,_(i(M),(t,s)=>(u(),n("li",{onClick:x=>l(t.path),key:s},[e("i",{class:f(t.icon)},null,2),m(" "+h(t.name),1)],8,H))),128))]),e("div",I,[d(N)])])}}});const R=g(L,[["__scopeId","data-v-8dc3f326"]]),k=o=>($("data-v-acf6d573"),o=o(),b(),o),Q={class:"introduce flex flex-space-around flex-align-around flex-align-center"},U={class:"introduce-l","data-aos":"slide-right"},W=k(()=>e("div",{class:"typenet-text"},null,-1)),j=k(()=>e("i",{class:"iconfont icon-goto"},null,-1)),J={class:"introduce-r","data-aos":"slide-left"},K=["src","alt","onClick"],P=F({__name:"home",setup(o){T();const l=V();return(a,c)=>{const p=B;return u(),n(r,null,[d(R),e("div",Q,[e("div",U,[W,e("button",{onClick:c[0]||(c[0]=t=>a.$router.push("/template")),class:f(["start btn pointer",{"dark-start":i(l)}])},[m(" \u9A6C\u4E0A\u5F00\u59CB "),j],2)]),e("div",J,[(u(!0),n(r,null,_(i(S).slice(2,7),(t,s)=>(u(),y(p,{key:t.id,placement:"top",content:t.name},{default:C(()=>[e("img",{class:f({"img-light":!i(l)}),style:A({transform:`rotate(${40-s*20}deg)`,zIndex:999-s}),src:t.img,alt:t.name,onClick:x=>a.$router.push({path:"/editor",query:{type:t.type}})},null,14,K)]),_:2},1032,["content"]))),128))])])],64)}}});const mt=g(P,[["__scopeId","data-v-acf6d573"]]);export{mt as default};