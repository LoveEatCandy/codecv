const a="https://apn1-included-wildcat-34002.upstash.io";async function i(e){return await(await fetch("https://codecv.netlify.app/.netlify/functions/export",{method:"POST",body:JSON.stringify(e)})).json()}function r(){return new Promise((e,n)=>{fetch(`${a}/get/count`,{headers:{Authorization:"Bearer AoTSASQgMjgxNGVhYmMtMzJmYi00ZTlmLWJhOWYtZDFkODFkODNjNDM33cyXqw1YkkkyYnC-9my5SGRqXg_gsiKnSdQcbUwXHr4="}}).then(t=>t.json()).then(t=>e(t.result)).catch(n)})}async function u(){let e;try{e=await r()}catch{return Promise.resolve("\u83B7\u53D6\u5931\u8D25...")}return new Promise(n=>{fetch(`${a}/set/count/${parseInt(e)+1}`,{headers:{Authorization:"Bearer AYTSASQgMjgxNGVhYmMtMzJmYi00ZTlmLWJhOWYtZDFkODFkODNjNDM3MmNmYWU0NGZmMzY3NGVjOGFmYTJlZTIzNmE5ODUwYjc="}}).then(t=>t.json()).then(t=>n(t.result)).catch(n)})}async function s(){return await(await fetch(`${a}/get/templateData`,{headers:{Authorization:"Bearer AoTSASQgMjgxNGVhYmMtMzJmYi00ZTlmLWJhOWYtZDFkODFkODNjNDM33cyXqw1YkkkyYnC-9my5SGRqXg_gsiKnSdQcbUwXHr4="}})).json()}async function c(e){let n,t={};try{n=await s()}catch{return Promise.resolve({msg:"\u83B7\u53D6\u6A21\u677F\u6570\u636E\u5931\u8D25...",result:null})}return n.result&&(t=JSON.parse(n.result)),t[`t${e.name}`]=String(+(t[`t${e.name}`]||0)+1),await(await fetch(`${a}/set/templateData`,{method:"POST",body:JSON.stringify(t),headers:{Authorization:"Bearer AYTSASQgMjgxNGVhYmMtMzJmYi00ZTlmLWJhOWYtZDFkODFkODNjNDM3MmNmYWU0NGZmMzY3NGVjOGFmYTJlZTIzNmE5ODUwYjc="}})).json()}export{c as a,s as b,r as g,i as r,u as s};
