(self.webpackChunkprovisioning=self.webpackChunkprovisioning||[]).push([[992],{8001:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var n=r(4572),a=r(885),i=r(5697),o=r.n(i),c=r(3264),s=r.n(c),l=r(3115),u=r(9775),d=r(5575),p=r(7646),y=r(8779),f=r(5435),b=r(5100),h=r(1278),m=r(6674),v=r(2694),S=r(7619),k=r(383),g=r(3273),O=r(8061),E=(0,n.Z)({},O.kD,["ssh-ed25519"]),P=r(8421);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e,t){return{id:e,toString:function(){return t},compareTo:function(t){return t.id==e}}},D=function(e){var t=e.setStepValidated,r=(0,b.Q)(),n=(0,a.Z)(r,2),i=n[0],o=n[1],c=s().useState(!1),l=(0,a.Z)(c,2),d=l[0],p=l[1],y=s().useState(i.chosenSshKeyId?w(i.chosenSshKeyId,i.chosenSshKeyName):null),O=(0,a.Z)(y,2),j=O[0],D=O[1],I=s().useState(!0),x=(0,a.Z)(I,2),N=x[0],Z=x[1];s().useEffect((function(){var e,r,n,a,o=null==R||null===(e=R.find((function(e){return e.id===(null==j?void 0:j.id)})))||void 0===e?void 0:e.type;r=i.provider,n=o,(null===(a=E[r])||void 0===a?void 0:a.includes(n))?(t(!1),Z(!1)):(t(!!j),Z(!0))}),[j]);var T=(0,f.a)(k.Uy,g.$k),_=T.isLoading,C=T.isError,R=T.data;return _?s().createElement(S.$,{isSVG:!0,size:"sm","aria-label":"Loading saved SSH keys"}):C||R&&R.length<1?s().createElement(s().Fragment,null,C&&s().createElement(h.b,{ouiaId:"pubkey_alert",variant:"warning",isInline:!0,title:"There are problems fetching saved SSH keys"}),s().createElement(m.P,{ouiaId:"pubkey_empty",isDisabled:!0,placeholderText:"No SSH key found","aria-label":"Select public key"})):s().createElement(u.c,{helperTextInvalid:"Key format is not support in ".concat((0,P.v)(i.provider)),label:"Select public key",validated:!N&&"error"},s().createElement(m.P,{ouiaId:"select_pubkey",onToggle:function(e){return p(e)},onSelect:function(e,t){o((function(e){return K(K({},e),{},{chosenSshKeyId:t.id,chosenSshKeyName:t.toString()})})),D(t),p(!1)},isOpen:d,selections:j,placeholderText:"Select public key...","aria-label":"Select public key",validated:!N&&"error"},R.map((function(e){var t=e.id,r=e.name;return s().createElement(v.$,{"aria-label":"Public key ".concat(r),key:t,value:w(t,r)})}))))};D.propTypes={setStepValidated:o().func.isRequired};const I=D;var x=r(2607),N=r(4575),Z=r(2588),T=r(6043),_=r(4046);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){var t=e.setStepValidated,r=function(e){var t,r=new RegExp("^(ssh|ecdsa)");return(null===(t=E[p])||void 0===t||!t.some((function(t){return null==e?void 0:e.startsWith(t)})))&&r.test(e)},i=(0,b.Q)(),o=(0,a.Z)(i,2),c=o[0],l=c.sshPublicName,d=c.sshPublicKey,p=c.provider,y=o[1],f=s().useState(),h=(0,a.Z)(f,2),m=h[0],v=h[1],S=s().useState({sshKeyBody:r(d)?"success":"default",sshKeyName:l?"success":"default"}),k=(0,a.Z)(S,2),g=k[0],O=k[1],P=s().useState(l),j=(0,a.Z)(P,2),K=j[0],w=j[1],D=s().useState(d),I=(0,a.Z)(D,2),C=I[0],B=I[1];s().useEffect((function(){var e=Object.values(g).some((function(e){return"success"!==e}));t(!e)}),[g]);var V=function(e,t){return O((function(r){return R(R({},r),{},(0,n.Z)({},e,t))}))};return s().createElement(u.c,{isStack:!0},s().createElement(u.c,{validated:g.sshKeyName,helperTextInvalid:"Name is required",label:"Name",isRequired:!0,fieldId:"ssh-name"},s().createElement(x.oi,{ouiaId:"new_pubkey_name",validated:g.sshKeyName,value:K,id:"public-key-name",onChange:function(e){y((function(t){return R(R({},t),{},{sshPublicName:e})})),w(e)},onBlur:function(){0!==K.length?V("sshKeyName","success"):V("sshKeyName","error")},type:"text"})),s().createElement(u.c,{helperTextInvalid:"Public key format is invalid or unsupported",label:"SSH public key",isRequired:!0,fieldId:"ssh-file",validated:g.sshKeyBody,labelIcon:Object.keys(E).includes(p)&&s().createElement(T.J,{bodyContent:s().createElement("span",null,"Azure does not support ed25519 keys, please use RSA key instead. See",s().createElement("a",{rel:"noreferrer",target:"_blank",href:"https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/ed25519-ssh-keys"},"further information"))},s().createElement(Z.zx,{ouiaId:"pubkey_help",type:"button","aria-label":"More info for pubkeys format",onClick:function(e){return e.preventDefault()},"aria-describedby":"public key content",className:"pf-c-form__group-label-help",variant:"plain"},s().createElement(_.ZP,{noVerticalAlign:!0})))},s().createElement(N.p,{id:"public-key-value",onDataChange:function(e){r(e)?(y((function(t){return R(R({},t),{},{sshPublicKey:e})})),B(e),V("sshKeyBody","success")):V("sshKeyBody","error")},allowEditingUploadedText:!0,onTextChange:function(e){y((function(t){return R(R({},t),{},{sshPublicKey:e})})),B(e)},onTextAreaBlur:function(){V("sshKeyBody",""===C?"default":r(C)?"success":"error")},type:"text",value:C,validated:g.sshKeyBody,onReadStarted:function(){v(!0)},onReadFinished:function(){v(!1)},onReadFailed:function(){y((function(e){return R(R({},e),{},{sshPublicName:"<Failed to load the file>"})})),V("sshKeyBody","error")},onClearClick:function(){y((function(e){return R(R({},e),{},{sshPublicName:void 0,sshPublicKey:void 0})})),B(""),V("sshKeyBody","default")},isLoading:m,filenamePlaceholder:"Drag a file here"})))};B.propTypes={setStepValidated:o().func.isRequired};const V=B;function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A="newKey",z=function(e){var t=e.setStepValidated,r=(0,b.Q)(),n=(0,a.Z)(r,2),i=n[0],o=n[1],c=(0,f.a)(k.Uy,g.$k),h=c.isError,m=c.data,v=s().useState(!1),S=(0,a.Z)(v,2),O=S[0],E=S[1],P=function(e){o((function(t){return q(q({},t),{},{uploadedKey:A===e})}))},j=function(e,t){P(t.currentTarget.value)};return s().useEffect((function(){(h||(null==m?void 0:m.length)<1)&&(E(!0),P(A))}),[h,m]),s().createElement(l.l,{className:"pubkeys"},s().createElement(y.D,{ouiaId:"pubkey_title",headingLevel:"h1"},"SSH key authentication"),s().createElement(p.x,{ouiaId:"pubkey_description"},"Establish secure, reliable communication and strong encryption to protect data."),s().createElement(u.c,{role:"radiogroup",isStack:!0,isRequired:!0,label:"Select a method to add SSH public key"},s().createElement(d.Y,{id:"existing-pubkey-radio",ouiaId:"pubkey_radio",isChecked:!i.uploadedKey,isDisabled:O,name:"ssh-keys-radio",value:"existKey",onChange:j,label:"Select existing SSH public key","data-testid":"existing-pubkey-radio",body:(!i.uploadedKey||O)&&s().createElement(I,{setStepValidated:t})}),s().createElement(d.Y,{id:"upload-pubkey-radio",ouiaId:"new_pubkey_radio",isChecked:i.uploadedKey,name:"ssh-keys-radio",value:A,onChange:j,label:"Add and save a new SSH public key",description:"Newly added key will be automatically saved.","data-testid":"upload-pubkey-radio",body:i.uploadedKey&&s().createElement(V,{setStepValidated:t})})))};z.propTypes={setStepValidated:o().func.isRequired};const F=z},1754:()=>{},2857:()=>{},1091:()=>{},4498:()=>{},108:()=>{},8992:()=>{},187:()=>{},311:()=>{},1751:()=>{},8752:()=>{},4282:()=>{},1993:()=>{},9624:()=>{},6974:()=>{}}]);
//# sourceMappingURL=../sourcemaps/992.40d41d8dee6298ae76bb1806cef3dc2a.js.map