import{r,W as z,j as e,Y as H,b as E}from"./app-BIEula0p.js";import"./TextInput-C-Wtrkxo.js";import{N as M,l as Q,I as W}from"./index-BtMszlmd.js";import{F as P}from"./index-K9dtHOwW.js";import{F as y,a as w,b as k,c as C}from"./index-DdGNLbV7.js";import{H as R}from"./index-Pz2xR59u.js";import"./Dropdown-CmCu7-N1.js";import"./transition-BLMPNg7n.js";import"./index-fukkS0K1.js";const U="_container_1yiu6_1",V="_content_1yiu6_9",q="_left_1yiu6_21",K="_imgContainer_1yiu6_31",O="_profileImg_1yiu6_39",Y="_doctorInfoContainer_1yiu6_51",G="_right_1yiu6_59",J="_doctorName_1yiu6_67",X="_doctorProfession_1yiu6_79",Z="_dateSelect_1yiu6_229",ee="_scrollBtn_1yiu6_245",te="_inactive_1yiu6_267",se="_dateSelectContainer_1yiu6_275",ae="_dateBoxContainer_1yiu6_283",ne="_dateBox_1yiu6_283",ie="_selectedDateBox_1yiu6_327",le="_dateBoxTitle_1yiu6_339",ce="_dateBoxDayInfo_1yiu6_355",oe="_submitBtnQuick_1yiu6_371",re="_blockedHour_1yiu6_471",n={container:U,content:V,left:q,imgContainer:K,profileImg:O,doctorInfoContainer:Y,right:G,doctorName:J,doctorProfession:X,dateSelect:Z,scrollBtn:ee,inactive:te,dateSelectContainer:se,dateBoxContainer:ae,dateBox:ne,selectedDateBox:ie,dateBoxTitle:le,dateBoxDayInfo:ce,submitBtnQuick:oe,blockedHour:re},S=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00"],I=["08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00"];function Be({auth:T,dates:d,employee:l,type:h}){const[x,D]=r.useState(h==="onsite"?"onsite":"online"),[c,N]=r.useState(!1),[s,F]=r.useState(null),f=r.useRef({}),m=(t,a)=>{const i=f.current[a],u=200,_=t==="left"?-u:u;i.scrollBy({top:0,left:_,behavior:"smooth"});const o=i.previousElementSibling,B=i.nextElementSibling;i.addEventListener("scroll",()=>{i.scrollLeft===0?o.classList.add(n.inactive):o.classList.remove(n.inactive),i.scrollLeft>=i.scrollWidth-i.clientWidth?B.classList.add(n.inactive):B.classList.remove(n.inactive)})},p=t=>{D(t),j("online",t==="online"?1:0)},$=()=>{E.get("/employee/get_blocked_hours/"+l.uid).then(t=>{F(t.data)})};r.useEffect(()=>{p(h),$()},[]);const{data:A,setData:j,post:L,get:de,processing:xe,errors:me,reset:be}=z({date:null,hour:null,time:null,online:h==="online"?1:0,employeeUID:l.uid}),b=t=>{const a=t.target.getAttribute("data-date"),i=t.target.getAttribute("data-hour"),u=a+" "+i;j("time",u),document.querySelectorAll(".timeBox").forEach(o=>{o.classList.remove("bg-[#c99b31]"),o.classList.remove("text-white")}),t.target.classList.add("bg-[#c99b31]"),t.target.classList.add("text-white")},g=()=>{console.log(A),L(route("reservation.check"))},v=()=>{const t=document.querySelectorAll(".timeBox");let a=null;t.forEach(i=>{a||i.hasAttribute("disabled")||(a=i)}),a&&(j("time",a.getAttribute("data-date")+" "+a.getAttribute("data-hour")),g())};return e.jsxs(e.Fragment,{children:[e.jsx(M,{user:T.user}),e.jsx(H,{title:"Welcome"}),e.jsxs("div",{className:`${n.container} `,children:[e.jsx("div",{className:"items-center mx-auto max-w-[1000px] p-2    ",children:e.jsxs("div",{className:"flex md:flex-row flex-col min-h-[380px] ",children:[e.jsxs("div",{className:"flex-1 md:w-1/2 w-full bg-white     border-r-[1px] shadow-md  ",children:[e.jsxs("div",{className:"flex flex-row gap-6 p-4 ",children:[e.jsx("img",{className:"rounded-full w-[100px] h-[100px] object-cover",src:l.profile_image?"/images/"+l.profile_image:Q,alt:""}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("h3",{className:"font-medium text-xl leading-6 ",children:[l.username," ",l.name]}),e.jsx("h4",{className:"font-normal text-base  ",children:"Internist, Allgemeinmediziner (Hausarzt), Hausarzt"})]})]}),e.jsxs("div",{className:"p-6  relative",children:[e.jsxs("ul",{className:"flex border-b-[1px] gap-6",children:[e.jsx("li",{onClick:()=>p("online"),className:`tab-item relative pb-3 cursor-pointer
                                              ${x==="online"?"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#627282]":"text-[#627282]"}`,children:e.jsxs("div",{className:"flex gap-1 items-center   ",children:[e.jsx(W,{}),"Videosprechstunde"," "]})}),e.jsx("li",{onClick:()=>p("onsite"),className:`tab-item relative pb-3 cursor-pointer
                                            ${x==="onsite"?"after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#627282]":"text-[#627282]"}`,children:e.jsxs("div",{className:" ",children:["Vor-Ort-Termin"," "]})})]}),e.jsx("div",{className:"tab-content",children:x==="onsite"?e.jsxs("div",{className:"pt-5 flex gap-2",children:[e.jsx(R,{className:"h-5 w-5 text-[#8c8a9a]"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{children:"Karl-Marx-Str. 27, Berlin"}),e.jsx("span",{className:" text-[#627282] text-sm ",children:"Praxis Dr.med. Usan Thanabalasingam Facharzt für Innere Medizin und Kardiologie"})]})]}):e.jsx("div",{className:"pt-5"})})]})]}),e.jsx("div",{className:"flex-1 md:w-1/2 w-full bg-white shadow-md ",children:x==="onsite"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"px-12 pt-6",children:e.jsx("button",{className:n.submitBtnQuick,onClick:v,children:"Nächstmöglicher Termin"})}),e.jsx("div",{children:e.jsxs("div",{className:`${n.dateSelectContainer} `,children:[e.jsxs("div",{className:`${n.dateSelect}  `,children:[e.jsx("button",{className:`${n.scrollBtn} left ${n.inactive}`,onClick:()=>m("left",l.uid),children:e.jsx(y,{className:"text-white"})}),e.jsx("div",{className:`${n.dateBoxContainer} border-b-[1px] pb-3 `,ref:t=>f.current[l.uid]=t,children:s&&(c?d.map(t=>(console.log(s[t.date]),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:n.dateBox,children:[e.jsx("h6",{className:n.dateBoxTitle,children:t.day}),e.jsx("p",{className:n.dateBoxDayInfo,children:t.weekday})]}),e.jsx("div",{className:"flex flex-col items-center justify-center gap-2 min-w-[100px]",children:S.map(a=>(console.log(s[t.date]),s[t]&&s[t].includes(a)?e.jsx("button",{children:"blockec"}):e.jsx("button",{className:s[t.date]&&s[t.date].includes(a)?"border-2 border-transparent text-[#c7982e] bg-[#c99b314d] text-base font-semibold px-3 py-1 rounded-md disabled bg-gray-300 cursor-not-allowed timeBox":"border-2 border-transparent text-[#c7982e] bg-[#c99b314d] hover:border-[#c7982e] text-base font-semibold px-3 py-1 rounded-md timeBox","data-date":t.date,"data-hour":a,onClick:i=>{b(i)},disabled:s[t.date]&&s[t.date].includes(a),children:a})))})]}))):d.map(t=>(console.log(s[t.date]),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:n.dateBox,children:[e.jsx("h6",{className:n.dateBoxTitle,children:t.day}),e.jsx("p",{className:n.dateBoxDayInfo,children:t.weekday})]}),e.jsx("div",{className:"flex flex-col items-center justify-center gap-2 min-w-[100px]",children:S.slice(0,5).map(a=>(console.log(s[t.date]),s[t]&&s[t].includes(a)?e.jsx("button",{children:"blockec"}):e.jsx("button",{className:s[t.date]&&s[t.date].includes(a)?"border-2 border-transparent text-[#c7982e] bg-[#c99b314d]  text-base font-semibold px-3 py-1 rounded-md disabled bg-gray-300 cursor-not-allowed timeBox":"border-2 border-transparent text-[#c7982e] bg-[#c99b314d] hover:border-[#c7982e] text-base font-semibold px-3 py-1 rounded-md timeBox","data-date":t.date,"data-hour":a,onClick:i=>{b(i)},disabled:s[t.date]&&s[t.date].includes(a),children:a})))})]}))))}),e.jsx("button",{className:`${n.scrollBtn} right`,onClick:()=>m("right",l.uid),children:e.jsx(w,{className:"text-white"})})]}),e.jsx("button",{onClick:()=>N(!c),className:" text-[#c7982e] mb-6 flex gap-2 items-center justify-center ",children:c?e.jsxs(e.Fragment,{children:[" ",e.jsxs("span",{children:["Weniger anzeigen"," "]})," ",e.jsx(k,{className:"h-5 w-5"})," "]}):e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{children:"Mehr Sprechzeiten anzeigen"})," ",e.jsx(C,{className:"h-5 w-5"})," "]})})]})}),e.jsx("div",{className:"px-12 pb-6",children:e.jsx("button",{className:n.submitBtnQuick,onClick:g,children:"Termin vereinbaren"})})]}):e.jsxs("div",{children:[e.jsx("div",{className:"px-12 pt-6",children:e.jsx("div",{className:"px-12 pt-6",children:e.jsx("button",{className:n.submitBtnQuick,onClick:v,children:"Nächstmöglicher Termin"})})}),e.jsxs("div",{className:`${n.dateSelectContainer} `,children:[e.jsxs("div",{className:`${n.dateSelect}  `,children:[e.jsx("button",{className:`${n.scrollBtn} left ${n.inactive}`,onClick:()=>m("left",l.uid),children:e.jsx(y,{className:"text-white"})}),e.jsx("div",{className:`${n.dateBoxContainer} border-b-[1px] pb-3 `,ref:t=>f.current[l.uid]=t,children:s&&(c?d.map(t=>(console.log(s[t.date]),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:n.dateBox,children:[e.jsx("h6",{className:n.dateBoxTitle,children:t.day}),e.jsx("p",{className:n.dateBoxDayInfo,children:t.weekday})]}),e.jsx("div",{className:"flex flex-col items-center justify-center gap-2 min-w-[100px]",children:I.map(a=>(console.log(s[t.date]),s[t]&&s[t].includes(a)?e.jsx("button",{children:"blockec"}):e.jsx("button",{className:s[t.date]&&s[t.date].includes(a)?"border-2 border-transparent text-[#c7982e] bg-[#c99b314d]  text-base font-semibold px-3 py-1 rounded-md disabled bg-gray-300 cursor-not-allowed timeBox":"border-2 border-transparent text-[#c7982e] bg-[#c99b314d] hover:border-[#c7982e] text-base font-semibold px-3 py-1 rounded-md timeBox","data-date":t.date,"data-hour":a,onClick:i=>{b(i)},disabled:s[t.date]&&s[t.date].includes(a),children:a})))})]}))):d.map(t=>(console.log(s[t.date]),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:n.dateBox,children:[e.jsx("h6",{className:n.dateBoxTitle,children:t.day}),e.jsx("p",{className:n.dateBoxDayInfo,children:t.weekday})]}),e.jsx("div",{className:"flex flex-col items-center justify-center gap-2 min-w-[100px]",children:I.slice(0,5).map(a=>s[t]&&s[t].includes(a)?e.jsx("button",{children:"blockec"}):e.jsx("button",{className:s[t.date]&&s[t.date].includes(a)?"border-2 border-transparent text-[#c7982e] bg-[#c99b314d]  text-base font-semibold px-3 py-1 rounded-md disabled bg-gray-300 cursor-not-allowed timeBox":"border-2 border-transparent text-[#c7982e] bg-[#c99b314d] hover:border-[#c7982e] text-base font-semibold px-3 py-1 rounded-md timeBox","data-date":t.date,"data-hour":a,onClick:i=>{b(i)},disabled:s[t.date]&&s[t.date].includes(a),children:a}))})]}))))}),e.jsx("button",{className:`${n.scrollBtn} right`,onClick:()=>m("right",l.uid),children:e.jsx(w,{className:"text-white"})})]}),e.jsx("button",{onClick:()=>N(!c),className:" text-[#c7982e] mb-6 flex gap-2 items-center justify-center ",children:c?e.jsxs(e.Fragment,{children:[" ",e.jsxs("span",{children:["Weniger anzeigen"," "]})," ",e.jsx(k,{className:"h-5 w-5"})," "]}):e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{children:"Mehr Sprechzeiten anzeigen"})," ",e.jsx(C,{className:"h-5 w-5"})," "]})})]}),e.jsx("div",{className:" px-12 pb-6",children:e.jsx("button",{className:n.submitBtnQuick,onClick:g,children:"Termin vereinbaren"})})]})})]})}),e.jsx(P,{})]})]})}export{Be as default};
