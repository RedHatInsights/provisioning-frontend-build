(self.webpackChunkprovisioning=self.webpackChunkprovisioning||[]).push([[852],{3273:(e,n,t)=>{"use strict";t.d(n,{jm:()=>g,Rr:()=>h,Dy:()=>O,$6:()=>y,j8:()=>m,yB:()=>k,$k:()=>v,c6:()=>b,rb:()=>w,bF:()=>f,WC:()=>d});var r=t(5861),c=t(4687),a=t.n(c),o=t(256),i=t.n(o),u=t(8061),s=function(e){return"/api/provisioning/v1/".concat(e)},l=function(e){return"/api/image-builder/v1/".concat(e)},p=function(e,n){return e===u.kD?s("instance_types/".concat(e,"?region=").concat(n,"&zone=1")):s("instance_types/".concat(e,"?region=").concat(n))},d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("sources?provider=".concat(n)));case 2:return t=e.sent,r=t.data.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("sources/".concat(n,"/upload_info")));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("pubkeys"));case 2:return n=e.sent,t=n.data.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(t,n),e.next=3,i().get(r);case 3:return c=e.sent,o=c.data.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(e){return function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",i().post(s("reservations/".concat(e)),t));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().post(s("pubkeys"),n));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("reservations/".concat(n)));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(l("composes/".concat(n,"/clones")));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(l("clones/".concat(n)));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("reservations/".concat(t,"/").concat(n)));case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(s("sources/".concat(n,"/launch_templates?region=").concat(t)));case 2:return r=e.sent,c=r.data.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},383:(e,n,t)=>{"use strict";t.d(n,{TO:()=>o,Uy:()=>a,gQ:()=>i,jO:()=>c,uI:()=>r});var r="sources",c="source_upload_info",a=["pubkeys"],o="image_region",i="templates"},3945:(e,n,t)=>{"use strict";t.d(n,{C:()=>v,N:()=>f});var r=t(4572),c=t(3264),a=t.n(c),o=t(5435),i=t(1536),u=t(383),s=t(3273),l=t(8061);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).refetch,t=void 0!==n&&n,r=(0,o.a)([u.uI,e],(function(){return(0,s.WC)(e)}),{enabled:!!e,refetchInterval:t&&1e4});return{error:r.error,isLoading:r.isInitialLoading,sources:r.data}},v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.refetch,r=void 0!==t&&t,c=n.onSuccess,o=void 0===c?function(){}:c,p=function(e,n){var t=f(e,{refetch:n.refetch}),r=t.sources,c=t.isLoading,a=t.error,o=(null==r?void 0:r.map((function(e){return{queryKey:[u.jO,e.id],queryFn:function(){return(0,s.bF)(e.id)},retry:1}})))||[],l=(0,i.h)({queries:o}),p=c||l.some((function(e){return e.isLoading})),v=[];return!c&&(null==r||r.forEach((function(e,n){l[n].isSuccess&&v.push(d(d({},l[n].data),e))}))),{isLoading:p,error:a,infos:v}}(e.provider,{refetch:r}),v=p.isLoading,m=p.error,h=p.infos,g=e.isTesting?h:null==h?void 0:h.filter(function(e){switch(e.provider){case l.Zz:return function(n){var t,r;return(null===(t=e.sourceIDs)||void 0===t?void 0:t.includes(n.id))||(null===(r=e.accountIDs)||void 0===r?void 0:r.includes(n.aws.account_id))};case l.kD:return function(n){var t,r,c;return(null===(t=e.uploadOptions)||void 0===t?void 0:t.source_id)===n.id||(null===(r=n.azure)||void 0===r?void 0:r.subscription_id)===(null===(c=e.uploadOptions)||void 0===c?void 0:c.subscription_id)};case l.go:return function(){return!0};default:return function(n){var t;return null===(t=e.sourceIDs)||void 0===t?void 0:t.includes(n.id)}}}(e));return a().useEffect((function(){v||m||o(g)}),[v,m]),{isLoading:v,error:m,sources:g||[]}}},5100:(e,n,t)=>{"use strict";t.d(n,{A:()=>l,Q:()=>p});var r=t(4572),c=t(3264),a=t(3806);const o={chosenSource:void 0,chosenNumOfInstances:1,chosenInstanceType:void 0,uploadedKey:!1,chosenRegion:void 0,chosenImageID:void 0,sshPublicName:"",sshPublicKey:"",chosenSshKeyId:void 0,chosenSshKeyName:null,provider:void 0};function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=(0,a.fH)((function(e){return(0,c.useState)(u(u({},o),e))})),l=s.Provider,p=s.useTracked},3708:(e,n,t)=>{"use strict";t.d(n,{Zz:()=>r.Zz,go:()=>r.go,kD:()=>r.kD});var r=t(8061)},8421:(e,n,t)=>{"use strict";t.d(n,{A:()=>c,v:()=>a});var r=t(3708),c=function(e){switch(e){case r.Zz:return"us-east-1";case r.go:return"us-central1-a";case r.kD:return"eastus";default:throw new Error("Unrecognized provider was entered: ".concat(e))}},a=function(e){switch(e){case r.Zz:return"Amazon cloud";case r.kD:return"Azure";case r.go:return"Google cloud";default:throw new Error("Unrecognized provider was entered: ".concat(e))}}},8571:(e,n,t)=>{"use strict";t.d(n,{n:()=>o});var r=t(5697),c=t.n(r),a=t(8061),o=c().shape({name:c().string,id:c().string,provider:c().oneOf([a.Zz,a.kD,a.go]),architecture:c().string,sourceIDs:c().arrayOf(c().string),accountIDs:c().arrayOf(c().string)}).isRequired},8988:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>U});var r=t(7462),c=t(885),a=t(4925),o=t(5697),i=t.n(o),u=t(1073),s=t(3264),l=t.n(s),p=t(6734),d=t(950),f=new p.S({defaultOptions:{queries:{staleTime:5e3}}});const v=function(e){var n=e.children;return l().createElement(d.aH,{client:f},n)};var m=t(5100),h=t(3945),g=t(2588),b=t(7713),y=function(e){var n=e.isOpen,t=e.onConfirm,r=e.onCancel;return l().createElement(b.u,{ouiaId:"app-confirm-modal",id:"app-confirm-modal","aria-label":"confirm cancel of launch modal",variant:b.v.small,title:"Exit instance launching?",isOpen:n,onClose:r,actions:[l().createElement(g.zx,{key:"exit",variant:"primary",onClick:t,ouiaId:"btn-exit-confirm"},"Exit"),l().createElement(g.zx,{key:"stay",variant:"link",onClick:r},"Stay")],titleIconVariant:"warning"},"All inputs will be discarded.")};y.propTypes={isOpen:i().bool.isRequired,onConfirm:i().func.isRequired,onCancel:i().func.isRequired};const O=y;var w=t(8257),k=t(7422),E=t(159),x=t(4572),S=t(2643),j=t(7619),P=t(8421);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,x.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=l().lazy((function(){return Promise.all([t.e(276),t.e(217),t.e(950)]).then(t.bind(t,5974))})),C=l().lazy((function(){return Promise.all([t.e(276),t.e(217),t.e(986),t.e(649)]).then(t.bind(t,6835))})),I=l().lazy((function(){return t.e(595).then(t.bind(t,3595))})),L=l().lazy((function(){return Promise.all([t.e(276),t.e(217),t.e(946),t.e(992)]).then(t.bind(t,8001))})),T=l().lazy((function(){return Promise.all([t.e(276),t.e(295),t.e(901),t.e(971)]).then(t.bind(t,3212))})),N={1:"account",4:"sshkey",5:"review"},R=function(e){return N[e]},_=function(e){var n=e.children;return l().createElement(s.Suspense,{fallback:l().createElement(S.b,null,l().createElement(j.$,{isSVG:!0,size:"lg"}))},n)};_.propTypes={children:i().node.isRequired};const q=function(){return s.createElement(w.d,null,s.createElement(k.Ts,null,(function(e){var n=e.activeStep,t=e.onNext,r=e.onBack,c=e.onClose,a=void 0===n.enableNext||n.enableNext;return s.createElement(s.Fragment,null,s.createElement(g.zx,{id:"wizard-provisioning-".concat(R(n.id),"-next-button"),variant:g.Wu.primary,type:"submit",onClick:t,isDisabled:!a},n.nextButtonText||"Next"),!n.hideBackButton&&s.createElement(g.zx,{id:"wizard-provisioning-".concat(R(n.id),"-back-button"),variant:g.Wu.secondary,onClick:r,isDisabled:1==n.id},"Back"),!n.hideCancelButton&&s.createElement("div",{className:E.Z.wizardFooterCancel},s.createElement(g.zx,{variant:g.Wu.link,onClick:c},"Cancel")))})))};var F=t(8571),B=t(5387),V=t(256),A=t.n(V),K=["onClose","image"],W={sshStep:!1,awsStep:!1},H=function(e){var n,t,o,i,p,d,f=e.onClose,v=e.image,m=(0,a.Z)(e,K),g=l().useState(1),b=(0,c.Z)(g,2),y=b[0],w=b[1],k=l().useState(W),E=(0,c.Z)(k,2),x=E[0],S=E[1],j=l().useState(!1),D=(0,c.Z)(j,2),N=D[0],R=D[1],F=l().useState(),V=(0,c.Z)(F,2),H=V[0],J=V[1],U=(0,h.C)(v,{refetch:y<=2}),$=U.isLoading,G=U.error,Q=U.sources;n=function(){return A().defaults.headers.common["X-Correlation-Id"]=(0,B.Z)(),function(){return delete A().defaults.headers.common["X-Correlation-Id"]}},t=(0,s.useRef)(),o=(0,s.useRef)(!1),i=(0,s.useRef)(!1),p=(0,s.useState)(0),d=(0,c.Z)(p,2)[1],o.current&&(i.current=!0),(0,s.useEffect)((function(){return o.current||(t.current=n(),o.current=!0),d((function(e){return e+1})),function(){i.current&&t.current&&t.current()}}),[]);var X=function(){R(!1),w(1),S(W),f()},M=function(e){return e.availableSources.length>0?(t=(n=e).stepIdReached,r=n.image,c=n.stepValidation,a=n.setStepValidation,o=n.setLaunchSuccess,[{name:"Account and customization",steps:[{name:(0,P.v)(r.provider),id:1,enableNext:c.awsStep,component:l().createElement(_,null,l().createElement(C,{image:r,setStepValidated:function(e){return a((function(n){return Z(Z({},n),{},{awsStep:e})}))}})),canJumpTo:t>=1}]},{name:"SSH key authentication",id:4,component:l().createElement(_,null,l().createElement(L,{setStepValidated:function(e){return a((function(n){return Z(Z({},n),{},{sshStep:e})}))}})),canJumpTo:t>=4,enableNext:c.sshStep},{name:"Review details",id:5,component:l().createElement(_,null,l().createElement(I,{imageName:r.name})),canJumpTo:t>=5,nextButtonText:"Launch"},{name:"Finish Progress",id:6,component:l().createElement(_,null,l().createElement(T,{setLaunchSuccess:function(){return o(!0)},imageID:r.id})),isFinishedStep:!0}]):function(e){var n=e.image,t=e.isLoading,r=e.sourcesError;return[{name:"Define source",id:1,component:l().createElement(_,null,l().createElement(z,{image:n,isLoading:t,error:r})),isFinishedStep:!0}]}(e);var n,t,r,c,a,o}({sourcesError:G,isLoading:$,availableSources:Q,stepIdReached:y,image:v,stepValidation:x,setStepValidation:S,setLaunchSuccess:J});return l().createElement(l().Fragment,null,l().createElement(u.e,(0,r.Z)({},m,{title:"Launch",description:"Launch image ".concat(v.name),steps:M,onClose:function(){y>=5&&!H?R(!0):X()},onNext:function(e,n){var t=e.id,r=e.name,c=n.prevId,a=n.prevName;console.debug("current id: ".concat(t,", current name: ").concat(r,", previous id: ").concat(c,", previous name: ").concat(a)),w((function(e){return e<t?t:e}))},className:"provisioning",footer:l().createElement(q,null)})),l().createElement(O,{isOpen:N,onConfirm:X,onCancel:function(){return R(!1)}}))},J=function(e){return l().createElement(m.A,null,l().createElement(v,null,l().createElement(H,e)))};H.propTypes={onClose:i().func,image:F.n},J.propTypes=H.propTypes;const U=J},8061:(e,n,t)=>{"use strict";t.d(n,{Zz:()=>r,go:()=>a,kD:()=>c,xM:()=>o});var r="aws",c="azure",a="gcp",o=[r]},5467:()=>{},347:()=>{},1452:()=>{},4946:()=>{},897:()=>{},5238:()=>{},6822:()=>{},314:()=>{},9854:()=>{},209:()=>{},7234:()=>{},1177:()=>{}}]);