import{c as t,r as c,j as e,B as r}from"./main-DFkfCgrY.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),w=({currentPdfSource:a,subject:l,selectedSemester:o,selectedNoteType:n,isMobile:i})=>{const[d,s]=c.useState(!1);c.useEffect(()=>{s(!1);const m=new URL(a).searchParams.get("file");console.log("here->"+a),fetch(m).then(p=>{p.ok||s(!0)}).catch(()=>{s(!0)})},[a]);const h=()=>{s(!1)};return d?e.jsxs("div",{className:"w-full h-[400px] border border-input rounded-lg overflow-hidden flex flex-col items-center justify-center bg-muted/50",children:[e.jsxs("div",{className:"text-center p-6",children:[e.jsx(u,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"PDF Not Available"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is currently being prepared. Please check back later or contact the developer."}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-2",children:[o==="semester1"?"Semester 1":"Semester 2"," - ",n==="notes"?"Notes":"Handwritten Notes"]})]}),e.jsxs(r,{onClick:h,children:[e.jsx(x,{className:"w-4 h-4 mr-2"}),"Try Again"]})]}):e.jsxs("div",{className:`w-full ${i?"h-[calc(100vh-300px)]":"h-[600px]"} border border-input rounded-lg overflow-hidden relative`,children:[e.jsx("iframe",{src:`https://docs.google.com/gview?url=https://raw.githubusercontent.com/GaneshSabat196/Notes/main/${l.file.toLowerCase()}.pdf&embedded=true`,className:"w-full h-full",title:`${l.title} - ${o} ${n}`,sandbox:"allow-same-origin allow-scripts allow-popups"}),e.jsxs("div",{className:"flex justify-center gap-4 mt-4",children:[e.jsxs(r,{variant:"outline",size:"sm",children:[e.jsx(v,{className:"w-4 h-4 mr-2"}),"Helpful"]}),e.jsxs(r,{variant:"outline",size:"sm",children:[e.jsx(f,{className:"w-4 h-4 mr-2"}),"Report Issue"]})]})]})};export{w as default};
//# sourceMappingURL=PdfViewer-S2qQ7jT6.js.map
