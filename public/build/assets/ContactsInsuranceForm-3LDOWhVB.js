import{q as u,W as h,j as e}from"./app-BIEula0p.js";import{I as o}from"./InputError-CIiaKQUz.js";import{I as n}from"./InputLabel-CNtEixf2.js";import{P as p}from"./PrimaryButton-CvhpiGD6.js";function v({className:i=""}){const s=u().props.auth.user;console.log(s.available_dates);const{data:l,setData:t,patch:m,errors:r,processing:d,recentlySuccessful:x}=h({place_residence:s.place_residence?s.place_residence:"",telephone:s.telephone?s.telephone:"",mobile:s.mobile?s.mobile:"",email:s.email?s.email:"",health_insurance:s.health_insurance?s.health_insurance:""}),c=a=>{a.preventDefault(),m(route("contacts.update"))};return e.jsxs("section",{className:i,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Available Dates"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your available dates."})]}),e.jsxs("form",{onSubmit:c,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"place_residence",value:"Place of Residence"}),e.jsx("input",{id:"place_residence",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:l.place_residence,onChange:a=>t("place_residence",a.target.value)}),e.jsx(o,{className:"mt-2",message:r.place_residence})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"telephone",value:"Telephone"}),e.jsx("input",{id:"telephone",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:l.telephone,onChange:a=>t("telephone",a.target.value)}),e.jsx(o,{className:"mt-2",message:r.telephone})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"mobile",value:"Mobile"}),e.jsx("input",{id:"mobile",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:l.mobile,onChange:a=>t("mobile",a.target.value)}),e.jsx(o,{className:"mt-2",message:r.mobile})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx("input",{id:"email",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:l.email,onChange:a=>t("email",a.target.value)}),e.jsx(o,{className:"mt-2",message:r.email})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"health_insurance",value:"Health Insurance"}),e.jsx("input",{id:"health_insurance",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:l.health_insurance,onChange:a=>t("health_insurance",a.target.value)}),e.jsx(o,{className:"mt-2",message:r.health_insurance})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(p,{className:"ml-4",processing:d,children:"Update"})})]})]})}export{v as default};
