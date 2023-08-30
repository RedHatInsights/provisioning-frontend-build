(self.webpackChunkprovisioning=self.webpackChunkprovisioning||[]).push([[971],{8786:(e,n,t)=>{"use strict";t.d(n,{$l:()=>c,CD:()=>s,bQ:()=>i,cE:()=>o,eF:()=>a,ix:()=>u});var r=t(8061),a=[500,600,700,800,900,1e3,1200,1400,1600,1800,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3,3e4,6e4,6e4],c=[{name:"Create reservation",description:"Submit requested data"},{name:"Transfer keys",description:"Uploading public key to AWS"},{name:"Launch instance(s)",description:"Call AWS API for launching instance(s)"},{name:"Instance description",description:"Fetch instance(s) descriptions"}],i=[{name:"Create reservation",description:"Submit data of requested instances"},{name:"Ensure resource group",description:"Ensure resource group is present on Azure account"},{name:"Launch instance(s)",description:"Launch defined instance(s) on Azure"}],o=[{name:"Create reservation",description:"Submit requested data"},{name:"Launch instance(s)",description:"Call Google API"},{name:"Fetch instance(s) description",description:"Fetch instance(s) descriptions"}],s=[{name:"New SSH key",description:"Creating new SSH public key resource"}],u=[r.Zz,r.kD,r.go]},2849:(e,n,t)=>{"use strict";t.d(n,{A3:()=>o,KM:()=>s,TM:()=>c,WD:()=>i});var r=t(3708),a=t(8786),c=function(e,n,t,r){return e<n?"success":e===n&&t?"danger":e===n&&r?"warning":e===n?"info":e>n?"pending":void 0},i=function(e){switch(e){case r.Zz:return a.$l;case r.kD:return a.bQ;case r.go:return a.cE;default:throw new Error("Steps requested for unknown provider: ".concat(e))}},o=function(e){switch(e){case r.Zz:return"instance_type";case r.kD:return"instance_size";case r.go:return"machine_type";default:return"instance_type"}},s=function(e){switch(e){case r.Zz:return"region";case r.go:return"zone";default:return"region"}}},3212:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>ae});var r=t(4572),a=t(885),c=t(3264),i=t.n(c),o=t(5697),s=t.n(o),u=t(7402),l=t(438),d=t(9947),p=t(8424),f=t(5106),v=t(5293),m=t(8779),h=t(7646),g=t(6043),b=t(2588),y=t(7422),S=t(6948),E=t(1942),I=t(5451),w=t(9609),O=t(5435),k=t(5100),D=t(3273),P=t(4687),x=t.n(P);function Z(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){o=!0,c=e},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw c}}}}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var T=x().mark((function e(n){var t,r,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Z(n),e.prev=1,t.s();case 3:if((r=t.n()).done){e.next=9;break}return a=r.value,e.next=7,a;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])}));var C=t(8786),z=t(2849),_=t(4713),A=t(8240),R=t(6771),L=t(3912),N=t(3134),q=t(2589),M=t(470),H=t(8124),W=t(2740),F=t(9260),K=t(7619),$=t(2643),B=t(8061),Q=t(3708),G=function(e,n,t){switch(n){case Q.Zz:return"https://console.aws.amazon.com/ec2/home?region=".concat(t,"#InstanceDetails:instanceId=").concat(e);case Q.kD:return"https://portal.azure.com/#@rhdevcloudops.onmicrosoft.com/resource".concat(e,"/overview");case Q.go:return"https://console.cloud.google.com/compute/instancesDetail/zones/".concat(t,"/instances/").concat(e);default:return null}};function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V=[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20},{title:"50",value:50}],X=function(e){var n=e.reservationID,t=e.provider,r=e.region,c=i().useState({perPage:5,page:1,startIdx:0,endIdx:5}),o=(0,a.Z)(c,2),s=o[0],u=o[1],l=(0,O.a)(["launchInfo",n],(function(){return(0,D.rb)(n,t)}),{select:function(e){return null==e?void 0:e.instances}}),d=l.data,p=l.isLoading,f=null==d?void 0:d.slice(s.startIdx,s.endIdx),v=null==f?void 0:f.some((function(e){var n;return(null===(n=e.detail)||void 0===n||null===(n=n.public_dns)||void 0===n?void 0:n.length)>0}));return p?i().createElement($.b,null,i().createElement(K.$,{isSVG:!0,size:"xl"})):i().createElement(W.Z,{style:{position:"relative",marginLeft:"-20%",marginRight:"-20%"}},i().createElement(F.t,{itemCount:(null==d?void 0:d.length)||0,page:s.page,onSetPage:function(e,n,t,r,a){u({perPage:t,page:n,startIdx:r,endIdx:a})},perPage:s.perPage,onPerPageSelect:function(e,n,t,r,a){u((function(e){return J(J({},e),{},{perPage:n,page:t,startIdx:r,endIdx:a})}))},perPageOptions:V,isCompact:!0,ouiaId:"instances-pagination"}),i().createElement(_.X,{ouiaId:"instances table","aria-label":"instances description table",variant:"compact"},i().createElement(A.h,null,i().createElement(R.Tr,null,i().createElement(L.Th,null,"ID"),v&&i().createElement(L.Th,null,"DNS"),i().createElement(L.Th,null,"SSH command"))),i().createElement(N.p,null,null==f?void 0:f.map((function(e){var n=e.instance_id,a=e.detail;return i().createElement(R.Tr,{key:n},i().createElement(q.Td,{"aria-label":"instance id",dataLabel:"ID"},i().createElement(b.zx,{variant:"link",icon:i().createElement(M.ZP,null),iconPosition:"right",isInline:!0,component:"a",rel:"noreferrer",target:"_blank",href:G(n,t,r)},function(e,n){return n===Q.kD?e.split("/").slice(-1):e}(n,t))),v&&i().createElement(q.Td,{"aria-label":"instance dns",dataLabel:"DNS"},null!=a&&a.public_dns?i().createElement(H.M5,{isReadOnly:!0,hoverTip:"Copy DNS",clickTip:"DNS was copied!",variant:"expansion"},null==a?void 0:a.public_dns):"N/A"),i().createElement(q.Td,{"aria-label":"ssh command",dataLabel:"SSH"},null!=a&&a.public_ipv4?i().createElement(H.M5,{isReadOnly:!0,hoverTip:"Copy SSH command",clickTip:"SSH was copied!",variant:"expansion"},"ssh ".concat(function(e){switch(e){case B.Zz:return"ec2-user";case B.kD:return"azureuser";case B.go:return"gcp-user"}}(t),"@").concat(null==a?void 0:a.public_ipv4)):"N/A"))})))))};X.propTypes={provider:s().string.isRequired,region:s().string.isRequired,reservationID:s().number.isRequired};const Y=X;var ee=t(8421);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re=function(e){var n=e.setLaunchSuccess,t=i().useState([]),c=(0,a.Z)(t,2),o=c[0],s=c[1],P=i().useState(),x=(0,a.Z)(P,2),Z=x[0],j=x[1],_=i().useState(),A=(0,a.Z)(_,2),R=A[0],L=A[1],N=i().useState(0),q=(0,a.Z)(N,2),M=q[0],H=q[1],W=i().useState(0),F=(0,a.Z)(W,2),K=F[0],$=F[1],B=i().useState(),Q=(0,a.Z)(B,2),G=Q[0],U=Q[1],J=(0,k.Q)(),V=(0,a.Z)(J,1)[0],X=V.chosenSource,ne=V.chosenInstanceType,re=V.chosenNumOfInstances,ae=V.chosenRegion,ce=V.sshPublicName,ie=V.sshPublicKey,oe=V.chosenSshKeyId,se=V.uploadedKey,ue=V.chosenImageID,le=V.provider,de=V.chosenTemplate,pe=function(e){var n=i().useRef(null),t=i().useRef(e),r=i().useState(),c=(0,a.Z)(r,2),o=c[0],s=c[1];return i().useEffect((function(){n.current=T(t.current)}),[]),{nextInterval:function(){var e=n.current.next().value;return s(void 0!==e&&e),void 0!==e&&e},currentInterval:o}}(C.eF),fe=pe.nextInterval,ve=pe.currentInterval,me=(0,w.D)((0,D.Rr)(le),{onSuccess:function(e){var n;we(),U(null==e||null===(n=e.data)||void 0===n?void 0:n.reservation_id)}}),he=me.mutate,ge=me.error,be=function(){var e;return te((e={source_id:X},(0,r.Z)(e,(0,z.A3)(le),ne),(0,r.Z)(e,"amount",re),(0,r.Z)(e,"image_id",ue),(0,r.Z)(e,(0,z.KM)(le),ae),(0,r.Z)(e,"pubkey_id",oe),e),de&&{launch_template_id:de})};i().useEffect((function(){D.Rr&&(se?(s(C.CD.concat((0,z.WD)(le))),Se({name:ce,body:ie})):(s((0,z.WD)(le)),he(be())))}),[D.Rr,s,se]);var ye=(0,w.D)(D.jm,{onSuccess:function(e){var n;we(),he(te(te({},be()),{},{pubkey_id:null==e||null===(n=e.data)||void 0===n?void 0:n.id}))}}),Se=ye.mutate,Ee=ye.error,Ie=(0,O.a)(["reservation",G],(function(){return(0,D.c6)(G)}),{enabled:!!G&&!Z,staleTime:0,refetchInterval:function(e){return!(null!=e&&e.success||null!=e&&e.error)&&ve},onSuccess:function(e){K<e.step&&!e.error&&($((function(e){return e+1})),we()),(null==e||!e.success)&&fe(),e.success&&n()},onError:function(){L("The reservation was created but we can't get the launch progress status.\n           Check your ".concat((0,ee.v)(le)," console later. If this issue persists, please contact support."))},refetchIntervalInBackground:!0}).data;i().useEffect((function(){if(!1===ve&&L("The launch progress is slower than expected, but we are still on it.\n         It is safe to close this window and check your ".concat((0,ee.v)(le)," console later")),ge||Ee||null!=Ie&&Ie.error){var e,n,t=null==ge||null===(e=ge.response)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.msg,r=null==Ee||null===(n=Ee.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.msg;j(t||r||(null==Ie?void 0:Ie.error))}}),[ge,Ee,null==Ie?void 0:Ie.error,ve]);var we=function(){return H((function(e){return e+1}))};return i().createElement(y.Ts,null,(function(e){var n=e.goToStepById,t=e.onClose;return i().createElement(d.u,{variant:"large"},i().createElement(p.k,{color:(null==Ie?void 0:Ie.success)?"#3E8635":null,icon:null!=Ie&&Ie.success?I.ZP:S.ZP}),i().createElement(m.D,{headingLevel:"h4",size:"lg",ouiaId:"launch-status"},null!=Ie&&Ie.success?"System(s) launched successfully":"Launching system(s)"),G&&i().createElement(h.x,{component:"small",ouiaId:"launch-id"},"launch ID: ".concat(G)),i().createElement(f.B,null,!(null!=Ie&&Ie.success)&&i().createElement(u.S,{isCenterAligned:!0},o.map((function(e,n){var t=e.name,r=e.description,a=(0,z.TM)(n,M,Z,R);return i().createElement(l.c,{variant:a,id:t,key:t,icon:n>M?i().createElement(E.ZP,null):void 0,isCurrent:n===M,description:r,titleId:t,"aria-label":"step ".concat(t," ").concat(a),popoverRender:(Z||R)&&n===M?function(e){return i().createElement(g.J,{"aria-label":"".concat(t," error message"),headerContent:Z?"Error":"Warning",bodyContent:Z||R,reference:e,position:"right"})}:void 0},t)})))),(null==Ie?void 0:Ie.success)&&C.ix.includes(le)&&i().createElement(Y,{provider:le,region:ae,reservationID:G}),Z&&i().createElement(b.zx,{id:"wizard-provisioning-failed-edit-button",onClick:function(){return n(1)},variant:"primary"},"Edit"),i().createElement(v.i,null,i().createElement(b.zx,{variant:"link",isDisabled:!Z&&M<2,onClick:t},"Close")))}))};re.propTypes={setLaunchSuccess:s().func.isRequired};const ae=re},598:()=>{},2857:()=>{},7625:()=>{},108:()=>{},8992:()=>{},187:()=>{},1320:()=>{},1751:()=>{},1626:()=>{},3398:()=>{},6928:()=>{},1993:()=>{},4958:()=>{},4994:()=>{},4690:()=>{},7494:()=>{},7761:()=>{}}]);
//# sourceMappingURL=../sourcemaps/971.56abb4d4c3107369d9438528b26609b7.js.map