import{r,j as e,a as m,q as k,W as N}from"./app-BIEula0p.js";import"./TextInput-C-Wtrkxo.js";import"./Dropdown-CmCu7-N1.js";import{N as S}from"./index-BtMszlmd.js";import{a as f,b as x,I}from"./index-BGMGb9VK.js";import{d as y,e as B}from"./index-fukkS0K1.js";import{F as P}from"./index-K9dtHOwW.js";import"./transition-BLMPNg7n.js";const C="_container_1wm3y_3",T="_rightSide_1wm3y_17",V="_title_1wm3y_27",A="_type_1wm3y_1",q="_cursor_1wm3y_1",D="_bigTitle_1wm3y_87",L="_desc_1wm3y_123",E="_btnGroup_1wm3y_139",F="_videoBtn_1wm3y_151",W="_onSiteBtn_1wm3y_195",$="_leftSide_1wm3y_241",G="_bannerImg_1wm3y_253",H={container:C,rightSide:T,title:V,type:A,cursor:q,bigTitle:D,desc:L,btnGroup:E,videoBtn:F,onSiteBtn:W,leftSide:$,bannerImg:G},O="_container_rz58z_1",R="_selectBoxContainer_rz58z_13",K="_selectBoxSelectedItemContainer_rz58z_37",M="_selectBoxSelectedItem_rz58z_37",U="_selectBoxBtn_rz58z_59",X="_optionsContainer_rz58z_85",Y="_option_rz58z_85",Q="_doctorName_rz58z_121",Z="_doctorProfession_rz58z_135",J="_doctorImg_rz58z_149",ee="_radioLabel_rz58z_163",ne="_selectedRadioLabel_rz58z_225",te={container:O,selectBoxContainer:R,selectBoxSelectedItemContainer:K,selectBoxSelectedItem:M,selectBoxBtn:U,optionsContainer:X,option:Y,doctorName:Q,doctorProfession:Z,doctorImg:J,radioLabel:ee,selectedRadioLabel:ne},se=n=>{r.useState(!1),r.useState(null);const[l,a]=r.useState("online");return console.log(l),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10 flex flex-col md:flex-row gap-4",children:[e.jsxs(m,{href:route("reservierung"),className:"flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] hover:border hover:border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out",children:[e.jsx(f,{}),"Videosprechstunde"]}),e.jsxs(m,{href:route("reservierung"),className:"flex items-center gap-2 bg-[#ca9b31] hover:bg-[#f9f8f2] hover:border hover:border-[#ca9b31] hover:text-[#ca9b31]  text-white font-medium text-lg px-4 py-3 rounded-xl shadow-md   transition duration-150 ease-in-out",children:[e.jsx(f,{}),"Vor-Ort-Termin"]})]}),e.jsx("div",{className:te.container})]})},ie="_container_l2nfe_9",re="_steps_l2nfe_21",ae="_stepContainer_l2nfe_31",le="_stepIndicator_l2nfe_41",oe="_stepIndicatorNumber_l2nfe_59",ce="_stepTitle_l2nfe_79",de="_stepDesc_l2nfe_99",i={container:ie,steps:re,stepContainer:ae,stepIndicator:le,stepIndicatorNumber:oe,stepTitle:ce,stepDesc:de},ue="_card_9kz6q_5",ge="_cardImgContainer_9kz6q_23",he="_cardImg_9kz6q_23",me="_cardBody_9kz6q_43",fe="_cardTitle_9kz6q_53",xe="_cardText_9kz6q_69",be="_cardLink_9kz6q_85",pe="_transition_9kz6q_129",g={card:ue,cardImgContainer:ge,cardImg:he,cardBody:me,cardTitle:fe,cardText:xe,cardLink:be,"card-img":"_card-img_9kz6q_105","card-img-reverse":"_card-img-reverse_9kz6q_113","card-img-loaded":"_card-img-loaded_9kz6q_121",transition:pe},_e=({title:n,img:l,text:a,link:o,linkText:s,direction:d})=>{const c=r.useRef(null);r.useEffect(()=>{c.current&&c.current.addEventListener("load",()=>{c.current.classList.add(g["card-img-loaded"])})},[]);const u=d==="right"?g["card-img"]:g["card-img-reverse"];return e.jsx("div",{className:"flex md:flex-row flex-col justify-center items-center w-full bg-[#fafafa] md:p-0 p-4 overflow-hidden",children:d==="right"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:w-1/2 w-full md:py-0 my-8 md:px-8 px-4 grid gap-4",children:[e.jsx("h4",{className:"text-[#ca9b31] text-[25px] font-normal capitalize",children:n}),e.jsx("p",{className:"text-gray-900 text-lg font-normal leading-loose break-words",children:a})]}),e.jsx("div",{className:"flex md:w-1/2 w-full h-full object-cover",children:e.jsx("img",{ref:c,src:l,alt:"",className:`w-full h-full object-cover transition duration-1000 ${u}`})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex md:w-1/2 w-full h-full object-cover",children:e.jsx("img",{ref:c,src:l,alt:"",className:`w-full h-full object-cover transition duration-1000 ${u}`})}),e.jsxs("div",{className:"md:w-1/2 w-full md:py-0 my-8 md:px-8 px-4 grid gap-4",children:[e.jsx("h4",{className:"text-[#ca9b31] text-[25px] font-normal capitalize",children:n}),e.jsx("p",{className:"text-gray-900 text-lg font-normal leading-loose break-words",children:a})]})]})})},we=()=>e.jsx("div",{className:" bg-[#F9F8F2] rounded-t-2xl  ",children:e.jsxs("div",{className:"grid md:grid-cols-3 grid-cols-1 md:p-8 p-4 ",children:[e.jsxs("div",{className:i.stepContainer,children:[e.jsx("div",{className:i.stepIndicator,children:e.jsx("span",{className:i.stepIndicatorNumber,children:"1"})})," ",e.jsx("h5",{className:i.stepTitle,children:"Konto erstellen"}),e.jsx("p",{className:i.stepDesc,children:"Beginnen Sie den Zugriff auf Gesundheitsdienste, indem Sie ein kostenloses Konto erstellen."})]}),e.jsxs("div",{className:i.stepContainer,children:[e.jsx("div",{className:i.stepIndicator,children:e.jsx("span",{className:i.stepIndicatorNumber,children:"2"})}),e.jsx("h5",{className:i.stepTitle,children:"Termin wählen"}),e.jsx("p",{className:i.stepDesc,children:"Planen Sie Ihren Termin, indem Sie ein passendes Datum und eine passende Uhrzeit auswählen."})]}),e.jsxs("div",{className:i.stepContainer,children:[e.jsx("div",{className:i.stepIndicator,children:e.jsx("span",{className:i.stepIndicatorNumber,children:"3"})}),e.jsx("h5",{className:i.stepTitle,children:"Erinnerungen erhalten"}),e.jsx("p",{className:i.stepDesc,children:"Vergessen Sie Ihren Termin nicht mit automatischen Erinnerungen."})]})]})}),je="/build/assets/banner-image-C3Szkny6.jpeg",ve=n=>e.jsxs("div",{className:"relative w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col md:flex-row justify-center items-center bg-gray-900/50 ",style:{backgroundImage:`url(${je})`,backgroundSize:"cover"},children:[e.jsx("div",{className:"absolute inset-0 bg-gray-900/50 pointer-events-none"}),e.jsxs("div",{className:"absolute flex flex-col justify-center items-center",children:[e.jsx("h3",{className:" text-white font-bold text-2xl leading-10 tracking-tight  sm:text-3xl sm:leading-none sm:tracking-tighter mt-2 mb-4 sm:mb-8 flex justify-center items-center",children:"Videoberatung Deutschlandweit"}),e.jsx("div",{children:e.jsxs("h2",{className:`${H.title} lg:whitespace-nowrap whitespace-normal text-center text-white font-extrabold text-4xl sm:leading-[67px] tracking-tight sm:text-6xl leading-none sm:tracking-tighter  mb-3 sm:mb-6`,children:["Buchen Sie jetzt einen",e.jsx("br",{}),e.jsx("span",{className:"flex justify-center items-center mt-2",children:"Pflegeberatungstermin via Videokonferenz"})]})}),e.jsx(se,{employees:n})]}),e.jsx("div",{className:"absolute lg:-bottom-40 md:-bottom-52 -bottom-[460px] w-full px-12 ",children:e.jsx(we,{})})]}),ze=ve,ke="_container_w0z92_9",Ne="_titleContainer_w0z92_19",Se="_title_w0z92_19",Ie="_subTitle_w0z92_53",ye="_cardContainer_w0z92_71",b={container:ke,titleContainer:Ne,title:Se,subTitle:Ie,cardContainer:ye},Be="/build/assets/about1-CvvH_hS7.png",Pe="/build/assets/about2-D-32YGwC.png",Ce="/build/assets/about3-DOSeLncF.png",Te="/build/assets/about-img-DqEgFTeY.png",Ve=[{id:1,title:"Beratungsbesuch § 37 Abs. 3 SGB XI",img:Be,text:"Sie erhalten Pflegegeld und benötigen einen Beratungsbesuch? Dann buchen Sie einfach einen Termin bei unseren freundlichen Experten! Die Termine sind abhängig vom Pflegegrad unterschiedlich häufig in Anspruch zu nehmen, um das Pflegegeld zu sichern.",link:"",linkText:"Mehr lesen",direction:"right"},{id:2,title:"Sie haben die Wahl: Vor Ort!",img:Pe,text:"Bei den Vitalisten wählen Sie ganz bequem aus: Wir bieten Hausbesuche zur Pflegeberatung nach § 37 Abs. 3 SGB XI in Gelsenkirchen und Umgebung (Bochum, Dortmund, Essen, Hagen, Herne) an.​",link:"",linkText:"Mehr lesen",direction:"left"},{id:3,title:" NEU:  Videoberatung deutschlandweit",img:Ce,text:"Deutschlandweit bieten wir im Rahmen des Modellprojektes Telepflege des GKV-Spitzenverbandes super bequem Beratungsbesuche als Videokonferenz an. Dazu brauchen Sie nur ein Smartphone oder einen Laptop mit Internetanschluss. Sie haben nicht viel Zeit für den Besuch, oder Ihre Angehörigen wollen sich von einem anderen Ort aus dazuschalten? Dann ist die Videoberatung die perfekte Lösung!",link:"",linkText:"Mehr lesen",direction:"right"}],Ae=()=>{const[n,l]=r.useState(!1),a=r.useRef(null),o=r.useRef(null);return r.useEffect(()=>{const s=()=>{const d=a.current.getBoundingClientRect().top,c=o.current.getBoundingClientRect().top;d<window.innerHeight*.8||c<window.innerHeight*.8?l(!0):l(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[n]),e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center mb-20 md:mt-52 mt-[420px] px-12 ",children:[e.jsx("h3",{className:b.title,children:"Willkommen bei den VIP Vitalisten: im Dienste Ihrer Gesundheit"}),e.jsx("h5",{className:b.subTitle,children:"Schön, dass Sie uns besuchen.Herzlich Willkommen bei den Vitalisten."})]}),e.jsx("div",{className:"grid grid-cols-1 max-w-screen-lg mx-auto ",children:Ve.map(s=>e.jsx(_e,{img:s.img,title:s.title,text:s.text,link:s.link,direction:s.direction},s.id))}),e.jsxs("div",{className:"flex flex-col justify-center items-center mt-32 md:mt-40 px-4 md:px-0 ",children:[e.jsx("h5",{className:"text-[#c7982e] font-bold leading-6 text-lg",ref:o,style:{transform:n?"translateY(0)":"translateY(50px)",opacity:n?1:0,transition:"transform 0.5s ease-in-out, opacity 0.5s ease-in-out"},children:"WÄHLEN SIE UNS?"}),e.jsxs("h1",{className:"text-4xl font-semibold leading-10 text-center  ",ref:a,style:{transform:n?"translateY(0)":"translateY(50px)",opacity:n?1:0,transition:"transform 0.5s ease-in-out, opacity 0.5s ease-in-out"},children:["Warum",e.jsx("span",{className:"text-[#c7982e] ml-2",children:"VIP Vitalisten?"})]}),e.jsx("img",{src:Te,alt:"",className:"max-w-full  w-[1217px] h-[462px] object-cover  rounded-xl mt-12 md:mt-16"}),e.jsxs("div",{className:`max-w-full  w-[1217px] text-base  font-normal leading-6 items-center text-center  px-4  mt-12 md:mt-16  flex flex-col gap-6\r
                `,children:[e.jsx("p",{children:"Wir bieten Ihnen bundesweit Beratungsbesuche nach § 37 Abs. 3 SGB XI über einen sicheren Video-Chat. Vergessen Sie langweilige Warteschleifen und endlose Papierkram-Orgien – bei uns geht alles blitzschnell und unkompliziert!"}),e.jsx("p",{children:"Und das Beste daran? Mit unserer einfachen Online-Terminbuchung sind Sie nur wenige Klicks von Ihrer persönlichen Beratung entfernt! Buchen Sie ganz leicht Ihren verfügbaren Wunschtermin. Wir sorgen mit unseren Fachkräften dafür, dass Sie und Ihre Liebsten die bestmögliche Beratung erhalten – schnell, unkompliziert und mit einem Lächeln!"}),e.jsx("p",{children:"Übrigens: Für ausgewählte Städte wie Bochum, Essen, Gelsenkirchen, Dortmund und Hagen bieten wir optional auch klassische Hausbesuche an. Auch diesen Service können Sie ganz einfach online buchen."})]})]})]})},qe=Ae,De="_container_178fh_9",Le="_imgContainer_178fh_27",Ee="_img_178fh_27",Fe="_contentContainer_178fh_47",We="_title_178fh_53",$e="_bigTitle_178fh_101",Ge="_bigTitleColored_178fh_119",He="_paragraph_178fh_125",Oe="_answerList_178fh_141",Re="_answerListItem_178fh_151",Ke="_fadeIn_178fh_241",Me="_fadeOut_178fh_249",Ue="_rotateIn_178fh_257",Xe="_rotateOut_178fh_265",h={container:De,imgContainer:Le,img:Ee,contentContainer:Fe,title:We,"slide-in-left":"_slide-in-left_178fh_1",bigTitle:$e,bigTitleColored:Ge,paragraph:He,answerList:Oe,answerListItem:Re,fadeIn:Ke,fadeOut:Me,rotateIn:Ue,rotateOut:Xe},p=[{id:1,question:"Was ist eine Pflegeberatung nach § 37 Abs. 3 SGB XI?",answer:"Die Pflegeberatung nach § 37 Abs. 3 des Sozialgesetzbuches XI (SGB XI) ist eine gesetzlich vorgeschriebene Beratung für Pflegebedürftige, die Pflegegeld beziehen und von Angehörigen oder ehrenamtlichen Pflegepersonen zu Hause gepflegt werden. Diese Beratung soll sicherstellen, dass die häusliche Pflege ordnungsgemäß durchgeführt wird und die Pflegenden die nötige Unterstützung und Informationen erhalten."},{id:2,question:"Kostet die Pflegeberatung Geld?",answer:"Die Kosten für die Pflegeberatung nach § 37 Abs. 3 SGB XI rechnen wir direkt mit der Pflegeversicherung ab. Für Sie entstehen keine Kosten."},{id:3,question:"Welche Vorteile hat die Videoberatung im Vergleich zum Hausbesuch?",answer:[` 1. Zeitersparnis:


Sie müssen keine An- und Abreise des Beraters einplanen, was insbesondere in ländlichen Gebieten oder bei langen Anfahrtswegen vorteilhaft ist.

Flexible Terminvereinbarungen sind einfacher möglich, da keine Anfahrtszeiten berücksichtigt werden müssen.`,`2. Komfort und Bequemlichkeit:

Die Beratung kann bequem von zu Hause aus durchgeführt werden, ohne dass die pflegebedürftige Person und die Pflegeperson sich auf den Besuch vorbereiten müssen.

Keine Notwendigkeit, den Haushalt für den Besuch vorzubereiten oder mögliche Störungen durch Besucher zu berücksichtigen.`,`3. Schnellere Verfügbarkeit:


Videoberatungen können oft kurzfristiger und flexibler organisiert werden, da Berater keine Fahrtzeiten einplanen müssen.

Dies ermöglicht eine schnellere Reaktion auf akute Fragen oder Probleme.`,`4. Geringere Ansteckungsgefahr:


Gerade in Zeiten von Pandemien oder ansteckenden Krankheiten minimiert die Videoberatung das Infektionsrisiko, da kein physischer Kontakt stattfindet.,
`,`5. Diskretion und Privatsphäre:


Videoberatung kann diskreter sein, da keine zusätzlichen Personen das Haus betreten müssen und Nachbarn oder Besucher nicht mitbekommen, dass eine Beratung stattfindet.`,`6. Erreichbarkeit:


Videoberatung ermöglicht es auch, Berater in entlegenen oder unterversorgten Gebieten zu erreichen, wo es möglicherweise keine lokalen Berater gibt. Auch eine unkomplizierte Anbindung von Angehörigen ist dadurch möglich, selbst wenn diese zum Zeitpunkt an einem anderen Ort sind.`,`Fazit
Videoberatung bietet zahlreiche Vorteile in Bezug auf Flexibilität, Komfort, Sicherheit und Effizienz. Sie stellt eine wertvolle Ergänzung zu traditionellen Hausbesuchen dar und kann insbesondere für Personen in abgelegenen Gebieten oder mit eingeschränkter Mobilität eine optimale Lösung sein.`]},{id:4,question:"Ist die Pflegeberatung verpflichtend?",answer:"Ja, die Inanspruchnahme der Pflegeberatung ist für Pflegegeldempfänger verpflichtend. Erfolgt die Beratung nicht regelmäßig, kann die Pflegekasse das Pflegegeld kürzen oder in Einzelfällen sogar einstellen."},{id:5,question:"Wie wird die Pflegeberatung beantragt?",answer:"Pflegebedürftige Menschen mit einem Pflegegrad zwischen 2 und 5 haben automatisch einen Anspruch, ein separater Antrag vor der Durchführung ist daher nicht erforderlich. Die VIP regelt alles formelle für Sie."},{id:6,question:"Wer hat Anspruch auf eine Pflegeberatung?",answer:"Pflegebedürftige Personen, die Leistungen der Pflegeversicherung in Form von Pflegegeld beziehen, haben Anspruch auf eine regelmäßige Pflegeberatung. Dies gilt für alle Pflegegrade (2 bis 5)."},{id:7,question:"Wie oft muss die Pflegeberatung in Anspruch genommen werden?",answer:["Die Häufigkeit der Beratung hängt vom Pflegegrad ab:","Pflegegrad 2 und 3: einmal alle sechs Monate","Pflegegrad 4 und 5: einmal alle drei Monate"]},{id:8,question:"Was sind die Inhalte der Pflegeberatung?",answer:["Überprüfung der Pflegesituation und Qualität der häuslichen Pflege","Beratung zu pflegerischen Techniken und Hilfsmitteln","Information über weitere Unterstützungsangebote und Entlastungsmöglichkeiten","Tipps zur Verbesserung der Pflegesituation"]},{id:9,question:"Wer führt die Pflegeberatung durch?",answer:"Die Pflegeberatung wird von zugelassenen Pflegediensten oder qualifizierten Pflegeberatern durchgeführt. Alle Mitarbeiterinnen und Mitarbeiter (Vitalisten) sind als examinierte Fachkräfte zugelassen und besonders weitergebildet."},{id:10,question:"Welche Vorteile bietet die Pflegeberatung?",answer:["Die Pflegeberatung bietet mehrere Vorteile:",`
Sicherstellung einer hohen Pflegequalität`,"Unterstützung und Entlastung der pflegenden Angehörigen","Information über zusätzliche Hilfs- und Entlastungsangebote","Vermeidung von Pflegefehlern und gesundheitlichen Risiken für den Pflegebedürftigen"]},{id:11,question:"Wie kann ich einen Termin vereinbaren?",answer:"Am einfachsten nutzen Sie unser Kontaktformular. Wir melden uns dann zeitnah bei Ihnen."}],Ye=()=>{const[n,l]=r.useState(null),[a,o]=r.useState(!1),[s,d]=r.useState("");r.useRef(null);const c=t=>{l(n===t?null:t)},u=()=>{o(!a)},_=t=>{d(t.target.value)},w=s?p.filter(t=>t.question.toLowerCase().includes(s.toLowerCase())):p,j=()=>{d(""),o(!1)};return e.jsxs("div",{className:"mx-auto my-36 flex flex-col items-center justify-center w-full max-w-3xl ",children:[!a&&e.jsxs("div",{className:"flex w-full justify-between relative items-center mb-12 md:px-0 px-6",children:[e.jsx("h2",{className:`${h.title} flex items-center justify-center mx-auto text-5xl font-semibold leading-[52px] text-[#c7982e]`,children:"Weitere Infos | FAQ"}),e.jsx(x,{onClick:u,className:"flex items-end text-[#c7982e] cursor-pointer w-5 h-5 hover:opacity-60"})]}),a&&e.jsx("div",{className:"w-full relative mb-12 md:px-0 px-6",children:e.jsxs("div",{className:"relative flex items-center w-full",children:[e.jsx(x,{className:"absolute left-4 text-[#c7982e]"}),e.jsx("input",{type:"text",placeholder:"Suche...",onChange:_,className:"w-full pl-12 pr-8 h-12 text-sm text-[#c7982e] placeholder-[#c7982e] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c7982e] focus:border-transparent"}),e.jsx(I,{className:"absolute right-4 text-[#c7982e] cursor-pointer",onClick:j})]})}),w.map(t=>e.jsxs("div",{className:"flex flex-col justify-center w-full max-w-[800px] pt-3 md:px-0 px-6",children:[e.jsxs("button",{className:`flex items-center justify-between px-4 py-4 text-left w-full transition duration-1000 ease-in-out border-2 border-[#c7982e]  rounded-lg shadow-md ${n===t.id?"border-2":"border-b-2 border-[#c7982e]"}`,onClick:()=>c(t.id),children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h3",{className:"text-2xl text-[#c7982e] leading-normal",children:t.question})}),e.jsx("span",{className:`${n===t.id?h.rotateIn:h.rotateOut}`,children:n===t.id?e.jsx(y,{className:" text-[#c7982e]"}):e.jsx(B,{className:" text-[#c7982e]"})})]}),n===t.id&&e.jsx("div",{className:"py-5 px-3",children:Array.isArray(t.answer)?e.jsx("ul",{className:" space-y-2",children:t.answer.map((v,z)=>e.jsx("li",{className:"text-lg text-gray-700",children:v},z))}):e.jsx("div",{className:" space-y-2",children:e.jsx("span",{className:"text-lg text-gray-700",children:t.answer})})})]},t.id))]})},Qe=Ye;function ln({auth:n,laravelVersion:l,phpVersion:a,employees:o}){const{status:s}=k().props;return console.log(s),N({search:""}),console.log(o),r.useState([]),e.jsxs(e.Fragment,{children:[e.jsx(S,{user:n.user}),e.jsx(ze,{employees:o}),e.jsx(qe,{}),e.jsx(Qe,{}),e.jsx(P,{})]})}export{ln as default};