(self.webpackChunkprovisioning=self.webpackChunkprovisioning||[]).push([[649],{6835:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Oe});var r=n(4572),a=n(885),c=n(5697),i=n.n(c),o=n(3264),l=n.n(o),u=n(3708),s=n(8571),p=n(8421),f=n(5100),m=n(3115),d=n(9775),b=n(6043),g=n(8779),y=n(2588),h=n(7646),v=n(4046),O=n(8061),E=n(1278),j=n(6674),P=n(2694),S=n(7619),w=n(3945);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.setValidation,n=e.image,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0].chosenSource,o=c[1],u=l().useState(!1),s=(0,a.Z)(u,2),p=s[0],m=s[1],d=l().useState(null),b=(0,a.Z)(d,2),g=b[0],y=b[1],h=function(e,t){return{id:e,toString:function(){return t},compareTo:function(t){return t.id===e}}},v=(0,w.C)(n,{onSuccess:function(e){i?(y(h(i,e.find((function(e){return e.id===i})).name)),t("success")):1===e.length&&(y(h(e[0].id,e[0].name)),o((function(t){return D(D({},t),{},{chosenSource:e[0].id})})),t("success"))}}),O=v.isLoading,I=v.error,_=v.sources;return I?(console.warn("Failed to fetch sources list"),l().createElement(l().Fragment,null,l().createElement(E.b,{ouiaId:"select_account_alert",variant:"warning",isInline:!0,title:"There are problems fetching accounts"}),l().createElement(j.P,{ouiaId:"select_account_empty",isDisabled:!0,placeholderText:"No accounts found","aria-label":"Select account"}))):O?l().createElement(S.$,{isSVG:!0,size:"sm","aria-label":"Loading accounts"}):l().createElement(j.P,{ouiaId:"select_account",isOpen:p,onToggle:function(e){return m(e)},selections:g,maxHeight:"180px",onSelect:function(e,n,r){r?(y(null),o((function(e){return D(D({},e),{},{chosenSource:null})})),t("error")):(y(n),o((function(e){return D(D({},e),{},{chosenSource:n.id})})),t("success")),m(!1)},placeholderText:"Select account","aria-label":"Select account"},_&&_.map((function(e){var t=e.name,n=e.id;return l().createElement(P.$,{"aria-label":"Source account",key:n,value:h(n,t)})})))};_.propTypes={setValidation:i().func.isRequired,image:s.n};const T=_;var x=n(614),Z=n(5435),z=n(3273);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){var t,n=e.setValidation,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0],u=i.chosenInstanceType,s=i.chosenNumOfInstances,p=i.chosenRegion,m=i.chosenSource,d=i.provider,b=c[1],g=(0,Z.a)(["instanceTypes",p],(function(){return(0,z.j8)(p,d)}),{enabled:!!p&&!!m&&!!u}).data,y=null==g||null===(t=g.find((function(e){return e.name===u})))||void 0===t?void 0:t.vcpus;(0,o.useEffect)((function(){h(s)}),[u]);var h=function(e){n(y*e>32?"warning":"success")},v=y*s>32;return l().createElement(l().Fragment,null,l().createElement(x.Y,{max:45,min:1,value:s,validated:v&&"warning",onMinus:function(){var e=s-1;h(e),b((function(t){return C(C({},t),{},{chosenNumOfInstances:e})}))},onChange:function(e){var t=Math.floor(Number(e.target.value));t>45&&(t=45),t<1&&(t=1),h(t),b((function(e){return C(C({},e),{},{chosenNumOfInstances:t})}))},onPlus:function(){var e=s+1;h(e),b((function(t){return C(C({},t),{},{chosenNumOfInstances:e})}))},inputName:"instances",inputAriaLabel:"number of instances",minusBtnAriaLabel:"instances-minus",plusBtnAriaLabel:"instances-plus"}))};V.propTypes={setValidation:i().func.isRequired};const R=V;var q=n(7462),A=n(5861),N=n(4687),L=n.n(N),F=n(2607),M=n(8998),G=["<",">","="],J=function(e){return e=(e=e.replace("memory","memory_mib")).replace("storage","storage_gb"),G.every((function(t){return!e.includes(t)}))&&(e="name ~> /".concat(e,"/i")),"types[".concat(e,"]")},$=function(){var e=(0,A.Z)(L().mark((function e(t,n){var r,a,c,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=J(t),a={types:n},e.prev=2,c=M(r),e.next=6,c.evaluate(a);case 6:if(i=e.sent){e.next=9;break}return e.abrupt("return",{error:!1,result:[]});case 9:return e.abrupt("return",{error:!1,result:i});case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",{error:!0,result:e.t0});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=n(3493),B=n.n(Q);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.setValidation,n=e.architecture,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0],o=i.chosenInstanceType,u=i.chosenRegion,s=i.chosenSource,p=i.provider,m=c[1],d=l().useState(!1),b=(0,a.Z)(d,2),g=b[0],y=b[1],h=l().useState(3),v=(0,a.Z)(h,2),O=v[0],E=v[1],w=l().useState(null),I=(0,a.Z)(w,2),D=I[0],_=I[1],T=l().useState(!0),x=(0,a.Z)(T,2),k=x[0],C=x[1],V=l().useState(),R=(0,a.Z)(V,2),N=R[0],M=R[1],G=(0,Z.a)(["instanceTypes",u],(function(){return(0,z.j8)(u,p)}),{staleTime:3e5,select:function(e){return e.filter((function(e){return e.architecture===n}))},enabled:!!u&&!!s,onError:function(){t("error")}}),J=G.isInitialLoading,Q=G.error,H=G.data;if(!s||""===s)return l().createElement(l().Fragment,null,l().createElement(F.oi,{ouiaId:"instance_type_readonly",className:"pf-c-form-control",readOnly:!0,type:"text",value:"Select account to load instances",id:"input-readonly","aria-label":"Select instance type - disabled"}));var Y=function(){var e=(0,A.Z)(L().mark((function e(t){var n,r,a;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=7;break}return e.next=3,$(t,H);case 3:n=e.sent,r=n.error,a=n.result,r?_([]):Array.isArray(a)?_(a):a instanceof Object&&_([a]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(Q)return l().createElement(l().Fragment,null,l().createElement(j.P,{validated:"error",ouiaId:"instance_type_empty",isDisabled:!0,placeholderText:"No instance types found",toggleAriaLabel:"Select instance type"}));if(J)return l().createElement(S.$,{isSVG:!0,size:"sm","aria-label":"loading instance type select"});var W=D||H;return l().createElement(l().Fragment,null,l().createElement(j.P,(0,q.Z)({ouiaId:"select_instance_type",variant:"typeahead",id:"instance_type_select",validated:!k&&"warning",typeAheadAriaLabel:"Selected instance type",toggleAriaLabel:"Select instance type",placeholderText:"Select instance type",maxHeight:"180px",isOpen:g,selections:o||N,onToggle:function(e){y(e)},onSelect:function(e,n,r){if(r)t("error"),C(!0),m((function(e){return U(U({},e),{},{chosenInstanceType:null})})),y(!1);else{var a=H.find((function(e){return n===e.name}));a?(C(a.supported),m((function(e){return U(U({},e),{},{chosenInstanceType:n})})),a.supported?t("success"):t("warning")):M(n),y(!1)}},onFilter:function(){},isInputValuePersisted:!0,onTypeaheadInputChanged:function(e){if(""!==e){var t=e.replace(/\\+$/,"");E(3),B()(Y,200)(t)}else _(null)}},O<(null==W?void 0:W.length)&&{loadingVariant:{text:"View more (".concat(W.length-O,")"),onClick:function(){return E(O+3)}}}),function(e,t){var n,r;return t<(null===(n=e)||void 0===n?void 0:n.length)&&(e=e.slice(0,t)),null===(r=e)||void 0===r?void 0:r.map((function(e,t){return l().createElement(P.$,{"aria-label":"Instance Type ".concat(e.name),key:t,description:"".concat(e.cores||"only vCPU"," cores |\n          ").concat(e.vcpus," vCPU |\n          ").concat((parseFloat(e.memory_mib)/1024).toFixed(1)," GiB memory |\n          ").concat(e.storage_gb>0?e.storage_gb+" GB storage | ":"EBS only | ","\n          ").concat(e.architecture),value:e.name})}))}(W,O)))};Y.propTypes={setValidation:i().func.isRequired,architecture:i().string.isRequired};const W=Y;var K=n(6030),X=n(6621),ee=n(5673),te=n(383);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ae=function(){var e,t=(0,f.Q)(),n=(0,a.Z)(t,2),r=n[0],c=r.chosenSource,i=r.chosenRegion,o=r.chosenTemplate,u=n[1],s=l().useState(!1),p=(0,a.Z)(s,2),m=p[0],d=p[1],b=(0,Z.a)([te.gQ,"".concat(i,"-").concat(c)],(function(){return(0,z.yB)(c,i)}),{enabled:!!c&&!!i}),g=b.error,y=b.isInitialLoading,h=b.data,v=o&&(null===(e=h.find((function(e){return e.id===o})))||void 0===e?void 0:e.name);return y?l().createElement(S.$,{isSVG:!0,size:"sm","aria-label":"Loading templates"}):l().createElement(l().Fragment,null,l().createElement(j.P,{ouiaId:"select_templates",isOpen:m,direction:"up",onToggle:function(e){return d(e)},selections:v,onSelect:function(e,t,n){n||u((function(e){var n;return re(re({},e),{},{chosenTemplate:null===(n=h.find((function(e){return e.name===t})))||void 0===n?void 0:n.id})})),d(!1)},maxHeight:"180px",placeholderText:g||0===(null==h?void 0:h.length)?"No template found":"Select templates","aria-label":"Select templates",clearSelectionsAriaLabel:"clear template selection",onClear:function(){u((function(e){return re(re({},e),{},{chosenTemplate:void 0})}))},isDisabled:g||0===(null==h?void 0:h.length),validated:g&&"error"},h&&h.map((function(e){var t=e.name,n=e.id;return l().createElement(P.$,{"aria-label":"template option",key:n,value:t})}))),g&&l().createElement(X.p,{id:"template-error-inline"},l().createElement(ee.u,{variant:"error"},"There are problems fetching templates: ".concat(null==g?void 0:g.message)," ")))};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function(e){var t=e.setStepValidated,n=e.image,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0],o=i.chosenSource,u=i.chosenRegion,s=i.chosenInstanceType,p=c[1],E=l().useState({sources:o?"success":"default",types:s?"success":"default",amount:"success"}),j=(0,a.Z)(E,2),P=j[0],S=j[1];return l().useEffect((function(){var e=Object.values(P).some((function(e){return"error"==e||"default"==e}));t(!e)}),[P]),l().createElement(m.l,null,l().createElement(g.D,{ouiaId:"account_custom_title",headingLevel:"h1",size:"xl"},"Account and customizations | Amazon"),l().createElement(d.c,{label:"Select account",validated:P.sources,helperTextInvalid:"Please pick a value",isRequired:!0,fieldId:"aws-select-source"},l().createElement(T,{image:n,setValidation:function(e){return S((function(t){return ie(ie({},t),{},{sources:e})}))}})),l().createElement(d.c,{label:"Select region",isRequired:!0,fieldId:"aws-select-region",labelIcon:l().createElement(b.J,{bodyContent:"Select available geographical region"},l().createElement(y.zx,{ouiaId:"region_help",type:"button","aria-label":"More info for regions field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-region",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(K.Z,{provider:O.Zz,onChange:function(e){var t=e.region,n=e.imageID;p((function(e){return ie(ie({},e),{},{chosenRegion:t,chosenImageID:n})}))},composeID:n.id,currentRegion:u})),l().createElement(d.c,{label:"Select instance type",isRequired:!0,validated:P.types,helperTextInvalid:"There are problems fetching instance types.",helperText:"warning"===P.types&&"The selected specification does not meet minimum requirements for this image",fieldId:"aws-select-instance-types",labelIcon:l().createElement(b.J,{bodyContent:l().createElement("div",null,"Select AWS instance type based on your computing, memory, networking, or storage needs",l().createElement("br",null),l().createElement("br",null),l().createElement("b",null,"Tip:")," You can filter by a query search, i.e:",l().createElement("br",null),l().createElement(h.x,{component:"small"},"vcpus = 2 and cores < 4 and memory < 4000"))},l().createElement(y.zx,{ouiaId:"instance_type_help",type:"button","aria-label":"More info for instance types field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-instance-types",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(W,{architecture:n.architecture,setValidation:function(e){return S((function(t){return ie(ie({},t),{},{types:e})}))}})),l().createElement(d.c,{label:"Select template (optional)",fieldId:"aws-select-template",labelIcon:l().createElement(b.J,{bodyContent:l().createElement("span",null,"Launch templates contains the configuration information to launch an instance. Note that instance type and public SSH key will be still required and will override template values. For further information and for creating launch templates"," ",l().createElement("a",{rel:"noreferrer",target:"_blank",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"},"click here"))},l().createElement(y.zx,{ouiaId:"template_help",type:"button","aria-label":"template field info",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-template",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(ae,null)),l().createElement(d.c,{label:"Count",isRequired:!0,fieldId:"aws-select-instance-counter",validated:P.amount,helperText:"warning"===P.amount&&"Launching many vCPUs might exceed service quota limit.",labelIcon:l().createElement(b.J,{bodyContent:"Specify the number of AWS instances to be launched"},l().createElement(y.zx,{ouiaId:"instance_count_help",type:"button","aria-label":"More info for instance counter field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-instance-counter",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(R,{setValidation:function(e){return S((function(t){return ie(ie({},t),{},{amount:e})}))}})))};oe.propTypes={setStepValidated:i().func.isRequired,image:s.n};const le=oe;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){var t=e.setStepValidated,n=e.image,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0],o=c[1],u=l().useState({sources:i.chosenSource?"success":"default",types:i.chosenInstanceType?"success":"default",amount:"success"}),s=(0,a.Z)(u,2),p=s[0],E=s[1];return l().useEffect((function(){var e=Object.values(p).some((function(e){return"error"==e||"default"==e}));t(!e)}),[p]),l().createElement(m.l,null,l().createElement(g.D,{ouiaId:"account_custom_title",headingLevel:"h1",size:"xl"},"Account and customizations | Google cloud"),l().createElement(d.c,{label:"Select account",validated:p.sources,helperTextInvalid:"Please pick a value",isRequired:!0,fieldId:"gcp-select-source"},l().createElement(T,{image:n,setValidation:function(e){return E((function(t){return se(se({},t),{},{sources:e})}))}})),l().createElement(d.c,{label:"Select zone",isRequired:!0,fieldId:"gcp-select-zone",labelIcon:l().createElement(b.J,{headerContent:l().createElement("div",null,"GCP zones")},l().createElement(y.zx,{ouiaId:"zone_help",type:"button","aria-label":"More info for zones field",onClick:function(e){return e.preventDefault()},"aria-describedby":"gcp-select-zone",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(K.Z,{provider:O.go,onChange:function(e){var t=e.region,n=e.imageID;o((function(e){return se(se({},e),{},{chosenRegion:t,chosenImageID:n})}))},composeID:n.id,currentRegion:i.chosenRegion})),l().createElement(d.c,{label:"Select machine type",isRequired:!0,validated:p.types,helperTextInvalid:"There are problems fetching instance types.",helperText:"warning"===p.types&&"The selected specification does not meet minimum requirements for this image",fieldId:"gcp-select-machine-types",labelIcon:l().createElement(b.J,{bodyContent:l().createElement("div",null,"Select GCP instance type based on your computing, memory, networking, or storage needs",l().createElement("br",null),l().createElement("br",null),l().createElement("b",null,"Tip:")," You can filter by a query search, i.e:",l().createElement("br",null),l().createElement(h.x,{component:"small"},"vcpus = 2 and storage > 30 and memory < 4000"))},l().createElement(y.zx,{ouiaId:"machine_type_help",type:"button","aria-label":"More info for machine types field",onClick:function(e){return e.preventDefault()},"aria-describedby":"gcp-select-machine-types",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(W,{architecture:n.architecture,setValidation:function(e){return E((function(t){return se(se({},t),{},{types:e})}))}})),l().createElement(d.c,{label:"Select template (optional)",fieldId:"gcp-select-template",labelIcon:l().createElement(b.J,{bodyContent:l().createElement("span",null,"Launch templates contains the configuration information to launch an instance. Note that machine type and public SSH key will be still required and will override template values. For further information and for creating launch templates"," ",l().createElement("a",{rel:"noreferrer",target:"_blank",href:"https://cloud.google.com/compute/docs/instance-templates"},"click here"))},l().createElement(y.zx,{ouiaId:"template_help",type:"button","aria-label":"template field info",onClick:function(e){return e.preventDefault()},"aria-describedby":"gcp-select-template",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(ae,null)),l().createElement(d.c,{label:"Count",isRequired:!0,fieldId:"gcp-select-instance-counter",validated:p.amount,helperText:"warning"===p.amount&&"Launching many vCPUs might exceed service quota limit.",labelIcon:l().createElement(b.J,{headerContent:l().createElement("div",null,"Number of GCP instances")},l().createElement(y.zx,{ouiaId:"instance_count_help",type:"button","aria-label":"More info for instance counter field",onClick:function(e){return e.preventDefault()},"aria-describedby":"gcp-select-instance-counter",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(R,{setValidation:function(e){return E((function(t){return se(se({},t),{},{amount:e})}))}})))};pe.propTypes={setStepValidated:i().func.isRequired,image:s.n};const fe=pe;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=function(e){var t=e.setStepValidated,n=e.image,r=(0,f.Q)(),c=(0,a.Z)(r,2),i=c[0],o=c[1],u=l().useState({sources:i.chosenSource?"success":"default",types:i.chosenInstanceType?"success":"default",amount:"success"}),s=(0,a.Z)(u,2),p=s[0],E=s[1];return l().useEffect((function(){var e=Object.values(p).some((function(e){return"error"==e||"default"==e}));t(!e)}),[p]),l().createElement(m.l,null,l().createElement(g.D,{ouiaId:"account_custom_title",headingLevel:"h1",size:"xl"},"Account and customizations | Azure"),l().createElement(d.c,{label:"Select account",validated:p.sources,helperTextInvalid:"Please pick a value",isRequired:!0,fieldId:"azure-select-source"},l().createElement(T,{image:n,setValidation:function(e){return E((function(t){return de(de({},t),{},{sources:e})}))}})),l().createElement(d.c,{label:"Select location",isRequired:!0,fieldId:"azure-select-location",labelIcon:l().createElement(b.J,{headerContent:l().createElement("div",null,"Azure locations")},l().createElement(y.zx,{ouiaId:"location_help",type:"button","aria-label":"More info for location field",onClick:function(e){return e.preventDefault()},"aria-describedby":"azure-select-location",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(K.Z,{provider:O.kD,currentRegion:i.chosenRegion,onChange:function(e){var t=e.region,n=e.imageID;o((function(e){return de(de({},e),{},{chosenRegion:t,chosenImageID:n})}))},composeID:n.id})),l().createElement(d.c,{label:"Select instance size",isRequired:!0,validated:p.types,helperTextInvalid:"There are problems fetching instance types.",helperText:"warning"===p.types&&"The selected specification does not meet minimum requirements for this image",fieldId:"azure-select-instance-size",labelIcon:l().createElement(b.J,{bodyContent:l().createElement("div",null,"Select Azure instance type based on your computing, memory, networking, or storage needs",l().createElement("br",null),l().createElement("br",null),l().createElement("b",null,"Tip:")," You can filter by a query search, i.e:",l().createElement("br",null),l().createElement(h.x,{component:"small"},"vcpus = 2 and storage > 30 and memory < 4000"))},l().createElement(y.zx,{ouiaId:"machine_type_help",type:"button","aria-label":"More info for instance size field",onClick:function(e){return e.preventDefault()},"aria-describedby":"azure-select-instance-size",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(W,{architecture:n.architecture,setValidation:function(e){return E((function(t){return de(de({},t),{},{types:e})}))}})),l().createElement(d.c,{label:"Count",isRequired:!0,fieldId:"azure-select-instance-counter",validated:p.amount,helperText:"warning"===p.amount&&"Launching many vCPUs might exceed service quota limit.",labelIcon:l().createElement(b.J,{headerContent:l().createElement("div",null,"Number of Azure instances")},l().createElement(y.zx,{ouiaId:"instance_count_help",type:"button","aria-label":"More info for instance counter field",onClick:function(e){return e.preventDefault()},"aria-describedby":"azure-select-instance-counter",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(v.ZP,{noVerticalAlign:!0})))},l().createElement(R,{setValidation:function(e){return E((function(t){return de(de({},t),{},{amount:e})}))}})))};be.propTypes={setStepValidated:i().func.isRequired,image:s.n};const ge=be;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.setStepValidated,n=e.image,r=(0,f.Q)(),c=(0,a.Z)(r,2)[1],i=n.provider;switch(l().useEffect((function(){i&&c((function(e){return he(he({},e),{},{provider:i,chosenRegion:(0,p.A)(i),chosenImageID:n.id})}))}),[i,c]),i){case u.Zz:return l().createElement(le,{setStepValidated:t,image:n});case u.kD:return l().createElement(ge,{setStepValidated:t,image:n});case u.go:return l().createElement(fe,{setStepValidated:t,image:n});default:throw new Error("Can not render AccountCustomizations for unrecognized provider: ".concat(i))}};ve.propTypes={setStepValidated:i().func.isRequired,image:s.n};const Oe=ve},6030:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(4925),a=n(2982),c=n(4572),i=n(885),o=n(5697),l=n.n(o),u=n(3264),s=n.n(u),p=n(1278),f=n(6674),m=n(2694),d=n(7619),b=n(5435),g=n(1536),y=n(8061),h=n(383),v=n(3273),O=n(8421),E=["id"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.provider,n=e.currentRegion,c=e.composeID,o=e.onChange,l=s().useState(!1),u=(0,i.Z)(l,2),j=u[0],S=u[1],w=(0,b.a)([h.TO,c],(function(){return(0,v.$6)(c)}),{select:function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.map((function(e){return{id:e.id,region:e.request.region}}))}}),I=w.isError,D=w.isLoading,_=w.data,T=(null==_?void 0:_.map((function(e){return{queryKey:[h.TO,e.id],queryFn:function(){return(0,v.Dy)(e.id)}}})))||[],x=(0,g.h)({queries:T}),Z=x.some((function(e){return e.isLoading})),z=[{region:t&&(0,O.A)(t),id:c}];if(x.length&&x.every((function(e){return!1===e.isLoading}))){var k=null==x?void 0:x.map((function(e){return null==e?void 0:e.data}));null==k||k.forEach((function(e,t){_[t]=P(P({},_[t]),null==e?void 0:e.options)}));var C=null==_?void 0:_.filter((function(e,t){return"success"===k[t].status}));z.push.apply(z,(0,a.Z)(C))}return I?s().createElement(s().Fragment,null,s().createElement(p.b,{ouiaId:"regions_alert",variant:"warning",isInline:!0,title:"There are problems fetching image's regions"}),s().createElement(f.P,{ouiaId:"regions_empty",isDisabled:!0,placeholderText:"No regions have been found"})):D||Z?s().createElement(d.$,{isSVG:!0,size:"sm","aria-label":"loading available regions"}):s().createElement(f.P,{ouiaId:"select_regions",variant:"typeahead","aria-label":"Select region",label:"Select region",maxHeight:"180px",isOpen:j,selections:n,onToggle:function(e){S(e)},onSelect:function(e,t){var n=z.find((function(e){return e.region===t})),a=n.id,c=(0,r.Z)(n,E);o(P({region:t,imageID:a},c)),S(!1)},isDisabled:!y.xM.includes(t)},z.map((function(e){var t=e.id,n=e.region;return s().createElement(m.$,{"aria-label":"Region item",key:t,value:n})})))};S.propTypes={provider:l().oneOf([y.Zz,y.kD,y.go]).isRequired,composeID:l().string.isRequired,onChange:l().func.isRequired,currentRegion:l().string};const w=S},1754:()=>{},2857:()=>{},1091:()=>{},4498:()=>{},108:()=>{},8992:()=>{},187:()=>{},1751:()=>{},8752:()=>{},1338:()=>{},4282:()=>{},9076:()=>{},1993:()=>{},6974:()=>{}}]);
//# sourceMappingURL=../sourcemaps/649.7160790ec0a014685b727fb98e92ea4f.js.map