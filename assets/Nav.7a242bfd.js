var f=Object.defineProperty,g=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(i,e,t)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e)=>{for(var t in e||(e={}))p.call(e,t)&&s(i,t,e[t]);if(o)for(var t of o(e))u.call(e,t)&&s(i,t,e[t]);return i},l=(i,e)=>g(i,m(e));import{s as v,C as $,u as y,L as k}from"./vendor.5520c495.js";import{j as a,F as x}from"./index.495406b6.js";function N(i){const e=["/contactos","/consultas","/servicios","/"],t=y(),{pathname:c}=t,h=e.filter(n=>n!==c);return a(x,{children:a(b,l(r({},i),{children:a("div",{className:"links",children:h.map((n,d)=>a("div",{children:a(k,{className:"links__item",to:`${n}`,children:a("h4",{className:"",children:n==="/"?"inicio":n.slice(1)})})},n+d))})}))})}const b=v.div`
  --fullheight: ${i=>i.height};

  width: 100%;
  height: var(--fullheight);
  line-height: var(--fullheight);
  top: ${i=>i.top||"0"};
  left: ${i=>i.left||"0"};
  position: ${i=>i.position};
  background-color: ${i=>i.bg};
  margin: ${i=>i.margin||"0"};
  padding: ${i=>i.padding||"0"};
  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${i=>i.color||"#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--fullheight);
      transition: all 0.4s;
    }  
    a:hover {
      color: #50a3c0;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${i=>i.mixed&&$`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}
`;export{N as H};
