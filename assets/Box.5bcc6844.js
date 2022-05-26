var r=Object.defineProperty,d=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(i,t,n)=>t in i?r(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,a=(i,t)=>{for(var n in t||(t={}))g.call(t,n)&&o(i,n,t[n]);if(e)for(var n of e(t))h.call(t,n)&&o(i,n,t[n]);return i},l=(i,t)=>d(i,$(t));import{s as m,C as x}from"./vendor.5520c495.js";import{j as s}from"./index.495406b6.js";function c(i,t){return`display: flex; 
    flex-direction: row; 
    justify-content:${i};
    align-items: ${t};`}function u(i,t){return`display: flex; 
    flex-direction: column; 
    justify-content:${i};
    align-items: ${t};`}const p={sm:"576px",md:"768px",xmd:"840px",l:"993px",xl:"1200px",xxl:"1400px"};function b(i){return s(f,l(a({},i),{children:i.children}))}const f=m.div`
  position: relative;
  height: ${i=>i.height};
  width: ${i=>i.width||"100%"};
  max-width: ${i=>i.max};
  min-width: ${i=>i.min};
  margin: ${i=>i.margin};
  padding: ${i=>i.padding};
  background-color: ${i=>i.bg};
  text-align: ${i=>i.textalign};

  ${i=>i.row&&x`
      ${c(i.justify,i.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${i=>i.column&&x`
      ${u(i.justify,i.align)};
      height: ${t=>t.height||"100%"};
    `};

  ${i=>i.boxProps};
`;export{b as B,p as b,u as c,c as r};
