var R=Object.defineProperty,z=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&x(e,o,t[o]);if(g)for(var o of g(t))b.call(t,o)&&x(e,o,t[o]);return e},h=(e,t)=>z(e,S(t));import{j as m,s as p,C as s,r as c,R as j,a as C,H as O,b as P,c as f}from"./vendor.5520c495.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};k();const H="modulepreload",y={},I="/pki-app/",u=function(t,o){return!o||o.length===0?t():Promise.all(o.map(l=>{if(l=`${I}${l}`,l in y)return;y[l]=!0;const n=l.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":H,n||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),n)return new Promise((_,E)=>{a.addEventListener("load",_),a.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};const r=m.exports.jsx,v=m.exports.jsxs,w=m.exports.Fragment,A=e=>r(D,h(d({},e),{children:e.children})),D=p.div`
   display: flex;
   align-items: center;
  ${e=>e.center&&s`
      justify-content: center;
    `};
  ${e=>e.left&&s`
      justify-content: flex-start;
    `}; 
  ${e=>e.right&&s`
      justify-content: flex-end;
    `};  
  ${e=>e.evenly&&s`
      justify-content: space-evenly;
    `};
  ${e=>e.between&&s`
      justify-content: space-between;
    `};
  ${e=>e.wrap&&s`
      flex-wrap: wrap;
    `};   
  ${e=>e.spread&&s`
       width: 100%;
       height: 100%;
    `};
  ${e=>e.widen&&s`
       width: 100%;
    `};
  ${e=>e.heighten&&s`
       height: 100%;
    `};      
  ${e=>e.up&&s`
       align-items: flex-start;
    `};  
  ${e=>e.down&&s`
       align-items: flex-end;
    `}; 
  ${e=>e.vh&&s`
       width: 100%;
       min-height: 100vh;
    `};       
  @media (max-width: ${e=>e.rezise}){
     max-width: 100%;
  }  
  ${e=>e.css};  
`;function $(e){let t=e.tag||"h1";const o=c.exports.createElement(t,null,`${e.text}`);return r(w,{children:r(F,h(d({},e),{children:o}))})}const F=p.div`
  top: ${e=>e.top};
  left: ${e=>e.left};
  right: ${e=>e.right};
  bottom: ${e=>e.bottom};
  color: ${e=>e.color};
  margin: ${e=>e.margin};
  width: ${e=>e.width};
  max-width: ${e=>e.maxwidth};
  font-size: ${e=>e.fontsize};
  text-align: ${e=>e.textalign};
  font-family: ${e=>e.family};
  letter-spacing: ${e=>e.space};
  text-transform: ${e=>e.transform};
  position: ${e=>e.position};
`;function M(e){return c.exports.createElement("svg",d({viewBox:"0 0 512 512",width:e.size||"1em",length:e.height||"auto"},e),c.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}const N=()=>r(T,{children:r("div",{className:"card",children:v(A,{children:[r($,{color:"#ffffff",text:"Seguridad"}),r(M,{size:"2em",color:"#ffffff"}),r($,{color:"#ffffff",text:"Loading..."})]})})}),T=p.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  .card {
    padding: 1em;
    text-align: center;
    background-color: #333333;
    border-radius: 8px;

  }
`,V=c.exports.lazy(()=>u(()=>import("./index.2c3b7c13.js"),["assets/index.2c3b7c13.js","assets/vendor.5520c495.js","assets/Nav.7a242bfd.js"])),q=c.exports.lazy(()=>u(()=>import("./index.a328f22c.js"),["assets/index.a328f22c.js","assets/Box.5bcc6844.js","assets/vendor.5520c495.js","assets/Nav.7a242bfd.js"])),B=c.exports.lazy(()=>u(()=>import("./index.3923db1d.js"),["assets/index.3923db1d.js","assets/Nav.7a242bfd.js","assets/vendor.5520c495.js","assets/Box.5bcc6844.js"])),G=c.exports.lazy(()=>u(()=>import("./index.9100cd05.js"),["assets/index.9100cd05.js","assets/vendor.5520c495.js","assets/Nav.7a242bfd.js"]));j.render(r(C.StrictMode,{children:r(w,{children:r(O,{children:r(c.exports.Suspense,{fallback:r(N,{}),children:v(P,{children:[r(f,{path:"/",element:r(V,{})}),r(f,{path:"/contactos",element:r(q,{})}),r(f,{path:"/consultas",element:r(B,{})}),r(f,{path:"/servicios",element:r(G,{})})]})})})})}),document.getElementById("root"));export{w as F,$ as H,A as R,M as S,v as a,r as j};
