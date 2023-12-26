"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9433],{19107:(re,V,l)=>{l.d(V,{L:()=>P});var i=l(79692),L=l(95544),$=l(90436),h=l(41156),_=l(90348),ee=l(11861),d=l(2784),j=l(52160),te=l(49558);const le=(0,i.Z)({svgIcon:{display:"inline-block","& svg":{display:"inline-block",fontSize:"inherit",verticalAlign:"baseline"}}});function N(s){const{href:r,text:c,Icon:E}=s,v=le();return d.createElement(L.Z,{display:"flex"},d.createElement(L.Z,{mr:1,className:v.svgIcon},d.createElement($.Z,{component:"div"},E?d.createElement(E,null):d.createElement(j.Z,null))),d.createElement(L.Z,{flexGrow:"1"},d.createElement(te.rU,{to:r,target:"_blank",rel:"noopener"},c||r)))}const t={xs:1,sm:1,md:1,lg:2,xl:3};function F(s){var r,c;const E=[(0,h.Z)(o=>o.breakpoints.up("xl"))?"xl":null,(0,h.Z)(o=>o.breakpoints.up("lg"))?"lg":null,(0,h.Z)(o=>o.breakpoints.up("md"))?"md":null,(0,h.Z)(o=>o.breakpoints.up("sm"))?"sm":null,(0,h.Z)(o=>o.breakpoints.up("xs"))?"xs":null];let v=1;if(typeof s=="number")v=s;else{const o=(r=E.find(U=>U!==null))!=null?r:"xs";v=(c=s==null?void 0:s[o])!=null?c:t[o]}return v}function P(s){const{items:r,cols:c=void 0}=s,E=F(c);return d.createElement(_.Z,{rowHeight:"auto",cols:E},r.map(({text:v,href:o,Icon:U},ne)=>d.createElement(ee.Z,{key:ne},d.createElement(N,{href:o,text:v!=null?v:o,Icon:U}))))}},79433:(re,V,l)=>{l.r(V),l.d(V,{AboutCard:()=>he,AboutContent:()=>se,AboutField:()=>n});var i=l(34520),L=l(79692),$=l(90436),h=l(60905),_=l(7089),ee=l(94339),d=l(32552),j=l(61837),te=l(85256),le=l(24579),N=l(49558),t=l(2784),F=l(49462),P=l(30705),s=l(57032),r=l(78373),c=l(73495),E=l(91578),v=l(19107),o=l(52866),U=l(88188),ne=l(30254),ce=l(27604),de=l(67898),me=l(61068),ue=l(75650);const ve=(0,L.Z)(u=>({value:{fontWeight:"bold",overflow:"hidden",lineHeight:"24px",wordBreak:"break-word"},label:{color:u.palette.text.secondary,textTransform:"uppercase",fontSize:"10px",fontWeight:"bold",letterSpacing:.5,overflow:"hidden",whiteSpace:"nowrap"}}));function n(u){const{label:g,value:m,gridSizes:p,children:T}=u,y=ve(),C=(0,P.vJ)(T,f=>f.getElements()),D=C.length>0?C:t.createElement($.Z,{variant:"body2",className:y.value},m||"unknown");return t.createElement(h.Z,{item:!0,...p},t.createElement($.Z,{variant:"h2",className:y.label},g),D)}const ge=(0,L.Z)({description:{wordBreak:"break-word"}});function pe(u,g,m){if(g==="url"||u.includes("://"))return u;const p=m.type==="file"?`file://${m.target}`:m.target;return g==="file"||m.type==="file"?new URL(u,p).href:p}function se(u){var g,m,p,T,y,C,D,f,J,A,a,X,B,k,W,I,b,Q;const{entity:e}=u,H=ge(),S=e.kind.toLocaleLowerCase("en-US")==="system",Y=e.kind.toLocaleLowerCase("en-US")==="resource",Z=e.kind.toLocaleLowerCase("en-US")==="component",z=e.kind.toLocaleLowerCase("en-US")==="api",K=e.kind.toLocaleLowerCase("en-US")==="template",R=e.kind.toLocaleLowerCase("en-US")==="location",M=e.kind.toLocaleLowerCase("en-US")==="group",G=(0,r.g)(e,i.cz,{kind:"system"}),w=(0,r.g)(e,i.cz,{kind:"component"}),O=(0,r.g)(e,i.cz,{kind:"domain"}),q=(0,r.g)(e,i.S4);let oe;try{oe=(0,i.CV)(e)}catch{oe=void 0}return t.createElement(h.Z,{container:!0},t.createElement(n,{label:"Description",gridSizes:{xs:12}},t.createElement(N.SA,{className:H.description,content:((g=e==null?void 0:e.metadata)==null?void 0:g.description)||"No description"})),t.createElement(n,{label:"Information Author",value:"No Owner",gridSizes:{xs:12,sm:6,lg:4}},q.length>0&&t.createElement(c.rI,{entityRefs:q,defaultKind:"group"})),(S||O.length>0)&&t.createElement(n,{label:"Domain",value:"No Domain",gridSizes:{xs:12,sm:6,lg:4}},O.length>0&&t.createElement(c.rI,{entityRefs:O,defaultKind:"domain"})),(z||Z||Y||G.length>0)&&t.createElement(n,{label:"System",value:"No System",gridSizes:{xs:12,sm:6,lg:4}},G.length>0&&t.createElement(c.rI,{entityRefs:G,defaultKind:"system"})),Z&&w.length>0&&t.createElement(n,{label:"Parent Component",value:"No Parent Component",gridSizes:{xs:12,sm:6,lg:4}},t.createElement(c.rI,{entityRefs:w,defaultKind:"component"})),(z||Z||Y||K||M||R||typeof((m=e==null?void 0:e.spec)==null?void 0:m.type)=="string")&&t.createElement(n,{label:"Type",value:(p=e==null?void 0:e.spec)==null?void 0:p.type,gridSizes:{xs:12,sm:6,lg:4}}),(z||Z||typeof((T=e==null?void 0:e.spec)==null?void 0:T.lifecycle)=="string")&&t.createElement(n,{label:"Lifecycle",value:(y=e==null?void 0:e.spec)==null?void 0:y.lifecycle,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Source Code Languages",value:"No Tags",gridSizes:{xs:12,sm:6,lg:4}},(((C=e==null?void 0:e.metadata)==null?void 0:C.tags)||[]).map(x=>t.createElement(_.Z,{key:x,size:"small",label:x}))),R&&(((D=e==null?void 0:e.spec)==null?void 0:D.targets)||((f=e==null?void 0:e.spec)==null?void 0:f.target))&&t.createElement(n,{label:"Targets",gridSizes:{xs:12}},t.createElement(v.L,{cols:1,items:(e.spec.targets||[e.spec.target]).map(x=>x).map(x=>{var ie;return{text:x,href:pe(x,((ie=e==null?void 0:e.spec)==null?void 0:ie.type)||"unknown",oe)}})})),t.createElement(n,{label:"Module Name",value:(J=e==null?void 0:e.spec)==null?void 0:J.moduleName,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Modality",value:(A=e==null?void 0:e.spec)==null?void 0:A.modality,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Processing Purpose",value:(a=e==null?void 0:e.spec)==null?void 0:a.processingPurpose,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Body Parts",value:(X=e==null?void 0:e.spec)==null?void 0:X.bodyParts,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Protocol",value:(B=e==null?void 0:e.spec)==null?void 0:B.protocol,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Algorithm Type",value:(k=e==null?void 0:e.spec)==null?void 0:k.algorithmType,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Package Type",value:(W=e==null?void 0:e.spec)==null?void 0:W.packageType,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Supported OS",value:(I=e==null?void 0:e.spec)==null?void 0:I.supportedOs,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Development Status",value:(b=e==null?void 0:e.spec)==null?void 0:b.developmentStatus,gridSizes:{xs:12,sm:6,lg:4}}),t.createElement(n,{label:"Link to Project Page",value:(Q=e==null?void 0:e.spec)==null?void 0:Q.linkToProjectPage,gridSizes:{xs:12,sm:6,lg:4}}))}const Ee="backstage.io/techdocs-ref",ae="backstage.io/techdocs-entity",fe=(0,L.Z)({gridItemCard:{display:"flex",flexDirection:"column",height:"calc(100% - 10px)",marginBottom:"10px"},fullHeightCard:{display:"flex",flexDirection:"column",height:"100%"},gridItemCardContent:{flex:1},fullHeightCardContent:{flex:1}});function he(u){var g,m,p,T,y,C,D;const{variant:f}=u,J=(0,P.qD)(),A=fe(),{entity:a}=(0,r.u)(),X=(0,s.u)(F.q3),B=(0,s.u)(c.Ah),k=(0,s.u)(s.l),W=(0,s.u)(s.r),I=(0,P.tg)(E.v),b=(0,P.tg)(E.b),{allowed:Q}=(0,me.N$)(ue.es),e=(0,c.CV)(a,X),H=(g=a.metadata.annotations)==null?void 0:g[i.Tf];let S;if((m=a.metadata.annotations)!=null&&m[ae])try{S=(0,i.of)((p=a.metadata.annotations)==null?void 0:p[ae])}catch{S=void 0}const Y={label:"View Source",disabled:!e,icon:t.createElement(F.nW,{type:e==null?void 0:e.integrationType}),href:e==null?void 0:e.locationTargetUrl},Z={label:"View TechDocs",disabled:!((T=a.metadata.annotations)!=null&&T[Ee]||(y=a.metadata.annotations)!=null&&y[ae])||!I,icon:t.createElement(ne.Z,null),href:I&&I(S?{namespace:S.namespace||i.zG,kind:S.kind,name:S.name}:{namespace:a.metadata.namespace||i.zG,kind:a.kind,name:a.metadata.name})},z=[Y,Z];if((0,de.t)(a)){const O=(C=J.getSystemIcon("scaffolder"))!=null?C:U.Z,q={label:"Launch Template",icon:t.createElement(O,null),disabled:!b,href:b&&b({templateName:a.metadata.name,namespace:a.metadata.namespace||i.zG})};z.push(q)}let K="";f==="gridItem"?K=A.gridItemCard:f==="fullHeight"&&(K=A.fullHeightCard);let R="";f==="gridItem"?R=A.gridItemCardContent:f==="fullHeight"&&(R=A.fullHeightCardContent);const M=(D=a.metadata.annotations)==null?void 0:D[i.P1],G=(M==null?void 0:M.startsWith("url:"))||(M==null?void 0:M.startsWith("file:")),w=(0,t.useCallback)(async()=>{try{await B.refreshEntity((0,i.eE)(a)),k.post({message:"Refresh scheduled",severity:"info",display:"transient"})}catch(O){W.post(O)}},[B,k,W,a]);return t.createElement(ee.Z,{className:K},t.createElement(d.Z,{title:"About",action:t.createElement(t.Fragment,null,G&&Q&&t.createElement(j.Z,{"aria-label":"Refresh",title:"Schedule entity refresh",onClick:w},t.createElement(o.Z,null)),t.createElement(j.Z,{component:N.rU,"aria-label":"Edit",disabled:!H,title:"Edit Metadata",to:H!=null?H:"#"},t.createElement(ce.Z,null))),subheader:t.createElement(N.M6,{links:z})}),t.createElement(te.Z,null),t.createElement(le.Z,{className:R},t.createElement(se,{entity:a})))}var ye=l(99798),Ce=l(82394),Se=l(76635)}}]);})();

//# sourceMappingURL=9433.fc95d90c.chunk.js.map