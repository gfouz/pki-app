var o=Object.defineProperty,u=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>u(e,m(t));import{s as h,C as r}from"./vendor.5520c495.js";import{H as g}from"./Nav.7a242bfd.js";import{j as i,F as w,a as l,R as v}from"./index.495406b6.js";const x=e=>i(y,d(a({},e),{children:e.children})),y=h.div`
   display: flex;
   align-items: center;
  ${e=>e.center&&r`
      justify-content: center;
    `};
  ${e=>e.left&&r`
      justify-content: flex-start;
    `}; 
  ${e=>e.right&&r`
      justify-content: flex-end;
    `};  
  ${e=>e.evenly&&r`
      justify-content: space-evenly;
    `};
  ${e=>e.between&&r`
      justify-content: space-between;
    `};
  ${e=>e.wrap&&r`
      flex-wrap: wrap;
    `};   
  ${e=>e.spread&&r`
       width: 100%;
       height: 100%;
    `};
  ${e=>e.up&&r`
       align-items: flex-start;
    `};  
  ${e=>e.down&&r`
       align-items: flex-end;
    `};    
  @media (max-width: ${e=>e.rezise}){
     max-width: 100%;
  }  
  ${e=>e.css};  
`;function k(){return i(w,{children:l($,{children:[i(g,{padding:"2em"}),i(x,{spread:!0,center:!0,children:l(v,{evenly:!0,wrap:!0,children:[i("h1",{children:"Services"}),i("h1",{children:"Services"}),i("h1",{children:"Services"})]})})]})})}const $=h.div`
width: 100%;
height: 100vh;
min-height: 100vh;
background-color: brown;
h1{
  padding: 0 0.2em;
}
.container {
  background-color: lightblue;
  height: 600px;
}
`;export{k as default};
