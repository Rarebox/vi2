import{r as s,j as r}from"./app-BIEula0p.js";function a(){const t=s.useRef(null),o=async()=>{try{const e=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});t.current.srcObject=e}catch(e){console.error("Error accessing media devices:",e)}};return r.jsxs("div",{children:[r.jsx("button",{onClick:o,children:"Start Video"}),r.jsx("video",{ref:t,autoPlay:!0})]})}export{a as default};
