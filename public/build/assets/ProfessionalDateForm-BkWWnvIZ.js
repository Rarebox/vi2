import{q as c,W as u,j as e}from"./app-BIEula0p.js";import{I as r}from"./InputError-CIiaKQUz.js";import{I as n}from"./InputLabel-CNtEixf2.js";import{P as g}from"./PrimaryButton-CvhpiGD6.js";function h({className:m=""}){const o=c().props.auth.user;console.log(o.available_dates);const{data:i,setData:t,patch:l,errors:a,processing:d,recentlySuccessful:x}=u({training_profession:o.training_profession?o.training_profession:"",training_completion_date:o.completion_date?o.completion_date:"",lifetime_employee_number:o.lifetime_employee_number?o.lifetime_employee_number:"",job_scope:o.job_scope?o.job_scope:"",organization:o.organization?o.organization:""}),p=s=>{s.preventDefault(),l(route("professional.update"))};return e.jsxs("section",{className:m,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Available Dates"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your professional"})]}),e.jsxs("form",{onSubmit:p,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"training_profession",value:"Training Profession"}),e.jsx("input",{id:"training_profession",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:i.training_profession,onChange:s=>t("training_profession",s.target.value)}),e.jsx(r,{className:"mt-2",message:a.training_profession})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"training_completion_date",value:"Training Completion Date"}),e.jsx("input",{id:"training_completion_date",type:"date",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:i.training_completion_date,onChange:s=>t("training_completion_date",s.target.value)}),e.jsx(r,{className:"mt-2",message:a.training_completion_date})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"lifetime_employee_number",value:"Lifetime Employee Number"}),e.jsx("input",{id:"lifetime_employee_number",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:i.lifetime_employee_number,onChange:s=>t("lifetime_employee_number",s.target.value)}),e.jsx(r,{className:"mt-2",message:a.lifetime_employee_number})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"job_scope",value:"Job Scope"}),e.jsx("input",{id:"job_scope",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:i.job_scope,onChange:s=>t("job_scope",s.target.value)}),e.jsx(r,{className:"mt-2",message:a.job_scope})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"organization",value:"Organization"}),e.jsx("input",{id:"organization",type:"text",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:i.organization,onChange:s=>t("organization",s.target.value)}),e.jsx(r,{className:"mt-2",message:a.organization})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(g,{className:"ml-4",processing:d,children:"Update"})})]})]})}export{h as default};
