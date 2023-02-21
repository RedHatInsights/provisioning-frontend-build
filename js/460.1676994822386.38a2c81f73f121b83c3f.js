(self.webpackChunkprovisioning_frontend=self.webpackChunkprovisioning_frontend||[]).push([[460],{3821:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ue});var r=n(7462),a=n(885),i=n(5987),o=n(5697),c=n.n(o),s=n(3147),u=n(3264),l=n.n(u),p=n(3806);const d={chosenSource:void 0,chosenNumOfInstances:1,chosenInstanceType:void 0,uploadedKey:!1,chosenRegion:"us-east-1",chosenImageID:void 0,sshPublicName:"",sshPublicKey:"",chosenSshKeyId:void 0,chosenSshKeyName:null};var f=(0,p.fH)((function(){return(0,u.useState)(d)})),m=f.Provider,y=f.useTracked,b=n(8767),v=new b.QueryClient;const h=function(e){var t=e.children;return l().createElement(b.QueryClientProvider,{client:v},t)};var g=function(e){var t=e.isOpen,n=e.onConfirm,r=e.onCancel;return l().createElement(s.Modal,{ouiaId:"app-confirm-modal",id:"app-confirm-modal","aria-label":"confirm cancel of launch modal",variant:s.ModalVariant.small,title:"Exit instance launching?",isOpen:t,onClose:r,actions:[l().createElement(s.Button,{key:"exit",variant:"primary",onClick:n,ouiaId:"btn-exit-confirm"},"Exit"),l().createElement(s.Button,{key:"stay",variant:"link",onClick:r},"Stay")],titleIconVariant:"warning"},"All inputs will be discarded.")};g.propTypes={isOpen:c().bool.isRequired,onConfirm:c().func.isRequired,onCancel:c().func.isRequired};const S=g;var E=n(159),O=n(4942),w=n(4213),I="sources",k="pubkeys",D=n(5861),P=n(7757),j=n.n(P),x=n(5564),T=n.n(x),C=function(e){return"/api/provisioning/v1/".concat(e)},_=function(){var e=(0,D.Z)(j().mark((function e(t){var n,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get(C("sources?provider=".concat(t)));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,D.Z)(j().mark((function e(){var t,n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get(C("pubkeys"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,D.Z)(j().mark((function e(t){var n,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get(C("instance_types/aws?region=".concat(t)));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=(0,D.Z)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T().post(C("reservations/aws"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=(0,D.Z)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T().post(C("pubkeys"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=(0,D.Z)(j().mark((function e(t){var n,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get(C("reservations/".concat(t)));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=(0,D.Z)(j().mark((function e(t){var n,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get((a="composes/".concat(t,"/clones"),"/api/image-builder/v1/".concat(a)));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=(0,D.Z)(j().mark((function e(t,n){var r,a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T().get(C("reservations/".concat(n,"/").concat(t)));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){var t=e.setValidation,n=y(),r=(0,a.Z)(n,2),i=r[0],o=r[1],c=l().useState(!1),u=(0,a.Z)(c,2),p=u[0],d=u[1],f=l().useState(null),m=(0,a.Z)(f,2),v=m[0],h=m[1],g=function(e,t){return{id:e,toString:function(){return t},compareTo:function(t){return t.id===e}}},S=(0,b.useQuery)(I,(function(){return _("aws")}),{onSuccess:function(e){var t=i.chosenSource;t&&h(g(t,e.find((function(e){return e.id===t})).name))}}),E=S.error,O=S.isLoading,w=S.data;return E?(console.warn("Failed to fetch sources list"),l().createElement(l().Fragment,null,l().createElement(s.Alert,{ouiaId:"select_account_alert",variant:"warning",isInline:!0,title:"There are problems fetching accounts"}),l().createElement(s.Select,{ouiaId:"select_account_empty",isDisabled:!0,placeholderText:"No accounts found","aria-label":"Select account"}))):O?l().createElement(s.Spinner,{isSVG:!0,size:"sm","aria-label":"Loading accounts"}):l().createElement(s.Select,{ouiaId:"select_account",isOpen:p,onToggle:function(e){return d(e)},selections:v,onSelect:function(e,n,r){r?(h(null),o((function(e){return F(F({},e),{},{chosenSource:null})})),t("error")):(h(n),o((function(e){return F(F({},e),{},{chosenSource:n.id})})),t("success")),d(!1)},placeholderText:"Select account","aria-label":"Select account"},w.map((function(e){var t=e.name,n=e.id;return l().createElement(s.SelectOption,{"aria-label":"Source account",key:n,value:g(n,t)})})))};q.propTypes={setValidation:c().func.isRequired};const G=q;function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=function(){var e=y(),t=(0,a.Z)(e,2),n=t[0].chosenNumOfInstances,r=t[1];return l().createElement(s.NumberInput,{max:45,min:1,value:n,onMinus:function(){var e=n-1;r((function(t){return z(z({},t),{},{chosenNumOfInstances:e})}))},onChange:function(e){var t=Math.floor(Number(e.target.value));t>45&&(t=45),t<1&&(t=1),r((function(e){return z(z({},e),{},{chosenNumOfInstances:t})}))},onPlus:function(){var e=n+1;r((function(t){return z(z({},t),{},{chosenNumOfInstances:e})}))},inputName:"instances",inputAriaLabel:"number of instances",minusBtnAriaLabel:"instances-minus",plusBtnAriaLabel:"instances-plus"})};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=e.setValidation,n=e.architecture,i=y(),o=(0,a.Z)(i,2),c=o[0],u=o[1],p=l().useState(!1),d=(0,a.Z)(p,2),f=d[0],m=d[1],v=l().useState(5),h=(0,a.Z)(v,2),g=h[0],S=h[1],E=l().useState(null),O=(0,a.Z)(E,2),w=O[0],I=O[1],k=l().useState(""),D=(0,a.Z)(k,2),P=D[0],j=D[1],x=(0,b.useQuery)(["instanceTypes",c.chosenRegion],(function(){return N(c.chosenRegion)}),{select:function(e){return e.filter((function(e){return e.architecture===n}))}}),T=x.isLoading,C=x.error,_=x.data;if(!c.chosenSource||""===c.chosenSource)return l().createElement(l().Fragment,null,l().createElement(s.TextInput,{ouiaId:"instance_type_readonly",className:"pf-c-form-control",readOnly:!0,type:"text",value:"Select account to load instances",id:"input-readonly","aria-label":"Readonly input example"}));if(C)return console.warn("Failed to fetch instance types list"),l().createElement(l().Fragment,null,l().createElement(s.Alert,{ouiaId:"instance_type_alert",variant:"warning",isInline:!0,title:"There are problems fetching instance types"}),l().createElement(s.Select,{ouiaId:"instance_type_empty",isDisabled:!0,placeholderText:"No instance types found","aria-label":"Select instance type"}));if(T)return l().createElement(s.Spinner,{isSVG:!0,size:"sm","aria-label":"Contents of the small example"});var Z=w||_;return l().createElement(s.Select,(0,r.Z)({ouiaId:"select_instance_type",variant:"typeahead","aria-label":"Select instance type",placeholderText:"Select instance type",maxHeight:"450px",isOpen:f,selections:c.chosenInstanceType,onToggle:function(e){m(e)},onSelect:function(e,n,r){r?(t("error"),u((function(e){return Q(Q({},e),{},{chosenInstanceType:null})})),m(!1)):(u((function(e){return Q(Q({},e),{},{chosenInstanceType:n})})),t("success"),m(!1))},onFilter:function(e,t){var n=t.replace(/\\+$/,"");P!==n&&(S(5),j(n),I(_.filter((function(e){return e.name.includes(n)}))))}},g<Z.length&&{loadingVariant:{text:"View more (".concat(Z.length-g,")"),onClick:function(){return S(g+5)}}}),function(e,t){return t<e.length&&(e=e.slice(0,t)),e.map((function(e,t){return l().createElement(s.SelectOption,{"aria-label":"Instance Type item",key:t,description:"".concat(e.cores," cores |\n          ").concat(e.vcpus," vCPU |\n          ").concat((parseFloat(e.memory_mib)/1024).toFixed(1)," GiB memory |\n          ").concat(e.storage_gb>0?e.storage_gb+" GB storage | ":"EBS only | ","\n          ").concat(e.architecture),value:e.name})}))}(Z,g))};U.propTypes={setValidation:c().func.isRequired,architecture:c().string.isRequired};const J=U;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.composeID,n=y(),r=(0,a.Z)(n,2),i=r[0],o=r[1],c=l().useState(!1),u=(0,a.Z)(c,2),p=u[0],d=u[1],f=(0,b.useQuery)(["image_region",t],(function(){return B(t)}),{select:function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.map((function(e){return{id:e.id,region:e.request.region}}))}}),m=f.isError,v=f.isLoading,h=f.data,g=[{region:"us-east-1",id:t}],S=h?g.concat(h):g;return m?l().createElement(l().Fragment,null,l().createElement(s.Alert,{ouiaId:"regions_alert",variant:"warning",isInline:!0,title:"There are problems fetching image's regions"}),l().createElement(s.Select,{ouiaId:"regions_empty",isDisabled:!0,placeholderText:"No regions have found"})):v?l().createElement(s.Spinner,{isSVG:!0,size:"sm","aria-label":"loading available regions"}):l().createElement(s.Select,{ouiaId:"select_regions",variant:"typeahead","aria-label":"Select region",label:"Select region",maxHeight:"450px",isOpen:p,selections:i.chosenRegion,onToggle:function(e){d(e)},onSelect:function(e,t){o((function(e){var n;return X(X({},e),{},{chosenRegion:t,chosenImageID:null===(n=S.find((function(e){return e.region===t})))||void 0===n?void 0:n.id})})),d(!1)}},S.map((function(e){var t=e.id,n=e.region;return l().createElement(s.SelectOption,{"aria-label":"Region item",key:t,value:n})})))};Y.propTypes={composeID:c().string.isRequired};const ee=Y;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(e){var t=e.setStepValidated,n=e.architecture,r=e.composeID,i=y(),o=(0,a.Z)(i,1)[0],c=o.chosenSource,u=o.chosenInstanceType,p=l().useState({sources:c?"success":"default",types:u?"success":"default"}),d=(0,a.Z)(p,2),f=d[0],m=d[1];return l().useEffect((function(){var e=Object.values(f).some((function(e){return"success"!==e}));t(!e)}),[f]),l().createElement(s.Form,null,l().createElement(s.Title,{ouiaId:"account_custom_title",headingLevel:"h1",size:"xl"},"Account and customizations | AWS"),l().createElement(s.Text,{ouiaId:"account_custom_description"},"Configure instances that will run on your AWS. All the instances will launch with the same configuration."),l().createElement(s.FormGroup,{label:"Select account",validated:f.sources,helperTextInvalid:"Please pick a value",isRequired:!0,fieldId:"aws-select-source"},l().createElement(G,{setValidation:function(e){return m((function(t){return ne(ne({},t),{},{sources:e})}))}})),l().createElement(s.FormGroup,{label:"Select region",isRequired:!0,fieldId:"aws-select-region",labelIcon:l().createElement(s.Popover,{bodyContent:"Select available geographical region"},l().createElement(s.Button,{ouiaId:"region_help",type:"button","aria-label":"More info for regions field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-region",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(w.ZP,{noVerticalAlign:!0})))},l().createElement(ee,{composeID:r})),l().createElement(s.FormGroup,{label:"Select instance type",isRequired:!0,helperTextInvalid:"Please pick a value",fieldId:"aws-select-instance-types",labelIcon:l().createElement(s.Popover,{bodyContent:"Select AWS instance type based on your computing, memory, networking, or storage needs"},l().createElement(s.Button,{ouiaId:"instance_type_help",type:"button","aria-label":"More info for instance types field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-instance-types",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(w.ZP,{noVerticalAlign:!0})))},l().createElement(J,{architecture:n,setValidation:function(e){return m((function(t){return ne(ne({},t),{},{types:e})}))}})),l().createElement(s.FormGroup,{label:"Count",isRequired:!0,fieldId:"aws-select-instance-counter",labelIcon:l().createElement(s.Popover,{bodyContent:"Specify the number of AWS instances to be launched"},l().createElement(s.Button,{ouiaId:"instance_count_help",type:"button","aria-label":"More info for instance counter field",onClick:function(e){return e.preventDefault()},"aria-describedby":"aws-select-instance-counter",className:"pf-c-form__group-label-help",variant:"plain"},l().createElement(w.ZP,{noVerticalAlign:!0})))},l().createElement(M,null)))};re.propTypes={setStepValidated:c().func.isRequired,architecture:c().string.isRequired,composeID:c().string.isRequired};const ae=re;var ie=function(e){var t=e.imageName,n=y(),r=(0,a.Z)(n,1)[0],i=(0,b.useQuery)(I,(function(){return _("aws")})),o=i.error,c=i.data;return o&&console.log("Failed to fetch sources list"),l().createElement(s.DescriptionList,{isHorizontal:!0},l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Image"),l().createElement(s.DescriptionListDescription,null,t)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Account"),l().createElement(s.DescriptionListDescription,null,null==c?void 0:c.find((function(e){return e.id===r.chosenSource})).name)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Region"),l().createElement(s.DescriptionListDescription,null,r.chosenRegion)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Instance type"),l().createElement(s.DescriptionListDescription,null,r.chosenInstanceType)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,"Count"),l().createElement(s.DescriptionListDescription,null,r.chosenNumOfInstances)),l().createElement(s.DescriptionListGroup,null,l().createElement(s.DescriptionListTerm,null,r.uploadedKey?"New SSH key":"Existing SSH key"),l().createElement(s.DescriptionListDescription,null,r.uploadedKey?r.sshPublicName:r.chosenSshKeyName)))};ie.propTypes={imageName:c().string.isRequired};const oe=ie;var ce=function(e){var t=e.imageName,n=l().useState(!0),r=(0,a.Z)(n,2),i=r[0],o=r[1];return l().createElement(s.ExpandableSection,{toggleText:"AWS",onToggle:function(e){o(e)},isExpanded:i,isIndented:!0},l().createElement(oe,{imageName:t}))};ce.propTypes={imageName:c().string.isRequired};var se=function(e){var t=e.imageName;return l().createElement("div",{className:"pf-c-form"},l().createElement(s.Title,{ouiaId:"review_details_title",headingLevel:"h1"},"Review details"),l().createElement(s.Text,{ouiaId:"review_details_description"},"Review the information below and then click ",l().createElement("b",null,"Launch")," to finish the process."),l().createElement(ce,{imageName:t}))};se.propTypes={imageName:c().string.isRequired};const ue=se;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e,t){return{id:e,toString:function(){return t},compareTo:function(t){return t.id==e}}},fe=function(e){var t=e.setStepValidated,n=y(),r=(0,a.Z)(n,2),i=r[0],o=r[1],c=l().useState(!1),u=(0,a.Z)(c,2),p=u[0],d=u[1],f=l().useState(i.chosenSshKeyId?de(i.chosenSshKeyId,i.chosenSshKeyName):null),m=(0,a.Z)(f,2),v=m[0],h=m[1];l().useEffect((function(){t(!!v)}),[v]);var g=(0,b.useQuery)(k,Z),S=g.isLoading,E=g.isError,O=g.data;return S?l().createElement(s.Spinner,{isSVG:!0,size:"sm","aria-label":"Loading saved SSH keys"}):E||O&&O.length<1?l().createElement(l().Fragment,null,E&&l().createElement(s.Alert,{ouiaId:"pubkey_alert",variant:"warning",isInline:!0,title:"There are problems fetching saved SSH keys"}),l().createElement(s.Select,{ouiaId:"pubkey_empty",isDisabled:!0,placeholderText:"No SSH key found","aria-label":"Select public key"})):l().createElement(s.Select,{ouiaId:"select_pubkey",onToggle:function(e){return d(e)},onSelect:function(e,t){o((function(e){return pe(pe({},e),{},{chosenSshKeyId:t.id,chosenSshKeyName:t.toString()})})),h(t),d(!1)},isOpen:p,selections:v,placeholderText:"Select public key...","aria-label":"Select public key"},O.map((function(e){var t=e.id,n=e.name;return l().createElement(s.SelectOption,{"aria-label":"Public key ".concat(n),key:t,value:de(t,n)})})))};fe.propTypes={setStepValidated:c().func.isRequired};const me=fe;function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){return new RegExp("^(ssh|ecdsa)").test(e)},he=function(e){var t=e.setStepValidated,n=y(),r=(0,a.Z)(n,2),i=r[0],o=i.sshPublicName,c=i.sshPublicKey,u=r[1],p=l().useState(),d=(0,a.Z)(p,2),f=d[0],m=d[1],b=l().useState({sshKeyBody:ve(c)?"success":"default",sshKeyName:o?"success":"default"}),v=(0,a.Z)(b,2),h=v[0],g=v[1],S=l().useState(o),E=(0,a.Z)(S,2),w=E[0],I=E[1],k=l().useState(c),D=(0,a.Z)(k,2),P=D[0],j=D[1];l().useEffect((function(){var e=Object.values(h).some((function(e){return"success"!==e}));t(!e)}),[h]);var x=function(e,t){return g((function(n){return be(be({},n),{},(0,O.Z)({},e,t))}))};return l().createElement(s.FormGroup,{isStack:!0},l().createElement(s.FormGroup,{validated:h.sshKeyName,helperTextInvalid:"Name is required",label:"Name",isRequired:!0,fieldId:"ssh-name"},l().createElement(s.TextInput,{ouiaId:"new_pubkey_name",validated:h.sshKeyName,value:w,id:"public-key-name",onChange:function(e){u((function(t){return be(be({},t),{},{sshPublicName:e})})),I(e)},onBlur:function(){0!==w.length?x("sshKeyName","success"):x("sshKeyName","error")},type:"text"})),l().createElement(s.FormGroup,{helperTextInvalid:"Must be SSH public key format",label:"SSH public key",isRequired:!0,fieldId:"ssh-file",validated:h.sshKeyBody},l().createElement(s.FileUpload,{ouiaId:"new_pubkey_file",id:"public-key-value",onDataChange:function(e){ve(e)?(u((function(t){return be(be({},t),{},{sshPublicKey:e})})),j(e),x("sshKeyBody","success")):x("sshKeyBody","error")},allowEditingUploadedText:!0,onTextChange:function(e){u((function(t){return be(be({},t),{},{sshPublicKey:e})})),j(e)},onTextAreaBlur:function(){x("sshKeyBody",""===P?"default":ve(P)?"success":"error")},type:"text",value:P,validated:h.sshKeyBody,onReadStarted:function(){m(!0)},onReadFinished:function(){m(!1)},onReadFailed:function(){u((function(e){return be(be({},e),{},{sshPublicName:"<Failed to load the file>"})})),x("sshKeyBody","error")},onClearClick:function(){u((function(e){return be(be({},e),{},{sshPublicName:void 0,sshPublicKey:void 0})})),j(""),x("sshKeyBody","default")},isLoading:f,filenamePlaceholder:"Drag a file here"})))};he.propTypes={setStepValidated:c().func.isRequired};const ge=he;function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe="newKey",we=function(e){var t=e.setStepValidated,n=y(),r=(0,a.Z)(n,2),i=r[0],o=r[1],c=(0,b.useQuery)(k,Z),u=c.isError,p=c.data,d=l().useState(!1),f=(0,a.Z)(d,2),m=f[0],v=f[1],h=function(e){o((function(t){return Ee(Ee({},t),{},{uploadedKey:Oe===e})}))},g=function(e,t){h(t.currentTarget.value)};return l().useEffect((function(){(u||(null==p?void 0:p.length)<1)&&(v(!0),h(Oe))}),[u,p]),l().createElement(s.Form,{className:"pubkeys"},l().createElement(s.Title,{ouiaId:"pubkey_title",headingLevel:"h1"},"SSH keys authentication"),l().createElement(s.Text,{ouiaId:"pubkey_description"},"Establish secure, reliable communication and strong encryption to protect data."),l().createElement(s.FormGroup,{role:"radiogroup",isStack:!0,isRequired:!0,label:"Select a method to add SSH pubic key"},l().createElement(s.Radio,{id:"existing-pubkey-radio",ouiaId:"pubkey_radio",isChecked:!i.uploadedKey,isDisabled:m,name:"ssh-keys-radio",value:"existKey",onChange:g,label:"Select existing SSH public key","data-testid":"existing-pubkey-radio",body:(!i.uploadedKey||m)&&l().createElement(s.FormGroup,{label:"Select public key"},l().createElement(me,{setStepValidated:t}))}),l().createElement(s.Radio,{id:"upload-pubkey-radio",ouiaId:"new_pubkey_radio",isChecked:i.uploadedKey,name:"ssh-keys-radio",value:Oe,onChange:g,label:"Add and save a new SSH public key",description:"Newly added key will be automatically saved. Result of the provisioning will not be affected this process.","data-testid":"upload-pubkey-radio",body:i.uploadedKey&&l().createElement(ge,{setStepValidated:t})})))};we.propTypes={setStepValidated:c().func.isRequired};const Ie=we;var ke=n(6948),De=n(1942),Pe=n(470);const je=function(e,t,n){return"aws"===t?"https://console.aws.amazon.com/ec2/home?region=".concat(n,"#InstanceDetails:instanceId=").concat(e):null};var xe=function(e){var t=e.reservationID,n=e.error,r=e.createdAt,i=e.provider,o=y(),c=(0,a.Z)(o,1)[0].chosenRegion,u=(0,b.useQuery)(["launchInfo",t],(function(){return K(t,i)}),{enabled:!n,select:function(e){return e.instances}}),p=u.data,d=u.isLoading;return l().createElement(s.Bullseye,null,l().createElement(s.ExpandableSection,{toggleTextCollapsed:"Show additional info",toggleTextExpanded:""},l().createElement(s.DescriptionList,{columnModifier:{lg:"2Col"}},l().createElement(s.Card,{component:"div"},l().createElement(s.DescriptionListTerm,null,"Launch ID"),l().createElement(s.DescriptionListDescription,null,l().createElement("span",{"aria-label":"launch id"},t))),n&&l().createElement(s.Card,{component:"div"},l().createElement(s.DescriptionListTerm,null,"Error message"),l().createElement(s.DescriptionListDescription,null,l().createElement("span",{"aria-label":"launch error"},l().createElement(s.Truncate,{content:n})))),l().createElement(s.Card,{component:"div"},l().createElement(s.DescriptionListTerm,null,"Started at"),l().createElement(s.DescriptionListDescription,null,r?l().createElement(s.Timestamp,{date:new Date(r)}):"N/A")),d&&l().createElement(s.Card,{component:"div"},l().createElement(s.DescriptionListTerm,null,"Host"),l().createElement(s.DescriptionListDescription,null,l().createElement(s.Spinner,{size:"md"}))),null==p?void 0:p.map((function(e){return l().createElement(s.Card,{key:e,component:"div"},l().createElement(s.DescriptionListTerm,null,"Host"),l().createElement(s.DescriptionListDescription,null,l().createElement("span",{"aria-label":"instance link"},l().createElement("a",{href:je(e,i,c),rel:"noreferrer",target:"_blank"},e," ",l().createElement(Pe.ZP,null)))))})))))};xe.propTypes={createdAt:c().string,error:c().string,finishedAt:c().string,reservationID:c().number,provider:c().string},xe.defaultProps={createdAt:void 0,finishedAt:void 0,reservationID:void 0,error:void 0,provider:"aws"};const Te=xe;function Ce(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return _e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_e(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function _e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ze=j().mark((function e(t){var n,r,a;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Ce(t),e.prev=1,n.s();case 3:if((r=n.n()).done){e.next=9;break}return a=r.value,e.next=7,a;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n.e(e.t0);case 14:return e.prev=14,n.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])}));var Ne=[500,600,700,800,900,1e3,1200,1400,1600,1800,2e3,3e3,4e3,5e3,1e4,15e3,2e4,25e3,3e4],Le=[{name:"Create reservation",description:"Submitting AWS reservation form"},{name:"Transfer keys",description:"Uploading public key to AWS"},{name:"Launch instance(s)",description:"Running the new instance(s)"}],Re=[{name:"New SSH key",description:"Creating new SSH public key resource"}],Ae="aws",Be=function(e){if(e===Ae)return Le};var Ke=function(e){var t=e.imageID,n=e.setLaunchSuccess,r=e.provider,i=l().useState([]),o=(0,a.Z)(i,2),c=o[0],u=o[1],p=l().useState(),d=(0,a.Z)(p,2),f=d[0],m=d[1],v=l().useState(0),h=(0,a.Z)(v,2),g=h[0],S=h[1],E=l().useState(0),O=(0,a.Z)(E,2),w=O[0],I=O[1],k=l().useState(),D=(0,a.Z)(k,2),P=D[0],j=D[1],x=y(),T=(0,a.Z)(x,1)[0],C=T.chosenSource,_=T.chosenInstanceType,Z=T.chosenNumOfInstances,N=T.chosenRegion,B=T.sshPublicName,K=T.sshPublicKey,V=T.chosenSshKeyId,F=T.uploadedKey,q=T.chosenImageID,G=function(e){var t=l().useRef(null),n=l().useRef(e),r=l().useState(),i=(0,a.Z)(r,2),o=i[0],c=i[1];return l().useEffect((function(){t.current=Ze(n.current)}),[]),{nextInterval:function(){var e=t.current.next().value;return c(e),void 0!==e&&e},currentInterval:o}}(Ne),H=G.nextInterval,z=G.currentInterval,M=function(e,t){var n=function(){if(e===Ae)return u},r=l().useState(),i=(0,a.Z)(r,2),o=i[0],c=i[1],s=(0,b.useMutation)(L,{onSuccess:function(e){t(e)}}),u=s.mutate,p=s.error;return l().useEffect((function(){c(n)}),[e]),[o,p]}(r,(function(e){var t;ee(),j(null==e||null===(t=e.data)||void 0===t?void 0:t.reservation_id)})),W=(0,a.Z)(M,2),Q=W[0],U=W[1];l().useEffect((function(){Q&&(F?(u(Re.concat(Be(r))),$({name:B,body:K})):(u(Be(r)),Q({source_id:C,instance_type:_,amount:Z,image_id:q||t,region:N,pubkey_id:V})))}),[Q,u,F]);var J=(0,b.useMutation)(R,{onSuccess:function(e){var n;ee(),Q({source_id:C,instance_type:_,amount:Z,image_id:q||t,region:N,pubkey_id:null==e||null===(n=e.data)||void 0===n?void 0:n.id})}}),$=J.mutate,X=J.error,Y=(0,b.useQuery)(["reservation",P],(function(){return A(P)}),{enabled:!!P&&g<c.length&&!f,refetchInterval:function(e){return!(null!=e&&e.success||null!=e&&e.error)&&z},onSuccess:function(e){w<e.step&&(I((function(e){return e+1})),ee()),(null==e||!e.success)&&H(),e.success&&n()},refetchIntervalInBackground:!0}).data;l().useEffect((function(){if(!1!==z){if(U||X||null!=Y&&Y.error){var e,t,n,r,a=null==U||null===(e=U.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.msg,i=null==X||null===(n=X.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.msg;m(a||i||(null==Y?void 0:Y.error))}}else m("Session timed out, the reservation took too long to fulfill")}),[U,X,null==Y?void 0:Y.error,z]);var ee=function(){return S((function(e){return e+1}))};return l().createElement(s.WizardContextConsumer,null,(function(e){var t=e.goToStepById,n=e.onClose;return l().createElement(s.EmptyState,{variant:"large"},l().createElement(s.EmptyStateIcon,{icon:ke.ZP}),l().createElement(s.Title,{headingLevel:"h4",size:"lg",ouiaId:"launch-status"},"Launching system(s)"),l().createElement(s.EmptyStateBody,null,l().createElement(s.ProgressStepper,{isCenterAligned:!0},c.map((function(e,t){var n=e.name,r=e.description,a=function(e,t,n){return e<t?"success":e===t&&n?"danger":e===t?"info":e>t?"pending":void 0}(t,g,f);return l().createElement(s.ProgressStep,{variant:a,id:n,key:n,icon:t>g?l().createElement(De.ZP,null):void 0,isCurrent:t===g,description:r,titleId:n,"aria-label":"step ".concat(n," ").concat(a),popoverRender:f&&t===g?function(e){return l().createElement(s.Popover,{"aria-label":"".concat(n," error message"),headerContent:l().createElement("div",null,"Error"),bodyContent:l().createElement("div",null,f),reference:e,position:"right"})}:void 0},n)})))),P&&l().createElement("input",{type:"hidden",name:"reservation_id",value:P}),l().createElement(s.EmptyStateBody,null,((null==Y?void 0:Y.error)||(null==Y?void 0:Y.success))&&l().createElement(Te,{reservationID:P,error:f,createdAt:null==Y?void 0:Y.created_at,finishedAt:null==Y?void 0:Y.finished_at})),f&&l().createElement(s.Button,{id:"wizard-provisioning-failed-edit-button",onClick:function(){return t(1)},variant:"primary"},"Edit"),l().createElement(s.EmptyStateSecondaryActions,null,l().createElement(s.Button,{variant:"link",isDisabled:!f&&g<2,onClick:n},"Close")))}))};Ke.propTypes={imageID:c().string.isRequired,provider:c().string.isRequired,setLaunchSuccess:c().func.isRequired};const Ve=Ke;function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ge={1:"account",4:"sshkey",5:"review"},He=function(e){return Ge[e]};const ze=function(){return u.createElement(s.WizardFooter,null,u.createElement(s.WizardContextConsumer,null,(function(e){var t=e.activeStep,n=e.onNext,r=e.onBack,a=e.onClose,i=void 0===t.enableNext||t.enableNext;return u.createElement(u.Fragment,null,u.createElement(s.Button,{id:"wizard-provisioning-".concat(He(t.id),"-next-button"),variant:s.ButtonVariant.primary,type:"submit",onClick:n,isDisabled:!i},t.nextButtonText||"Next"),!t.hideBackButton&&u.createElement(s.Button,{id:"wizard-provisioning-".concat(He(t.id),"-back-button"),variant:s.ButtonVariant.secondary,onClick:r,isDisabled:1==t.id},"Back"),!t.hideCancelButton&&u.createElement("div",{className:E.Z.wizardFooterCancel},u.createElement(s.Button,{variant:s.ButtonVariant.link,onClick:a},"Cancel")))})))};var Me=["isOpen","onClose","image"],We={sshStep:!1,awsStep:!1},Qe=function(e){var t=e.isOpen,n=e.onClose,o=e.image,c=(0,i.Z)(e,Me),u=l().useState(1),p=(0,a.Z)(u,2),d=p[0],f=p[1],y=l().useState(We),b=(0,a.Z)(y,2),v=b[0],g=b[1],E=l().useState(!1),O=(0,a.Z)(E,2),w=O[0],I=O[1],k=l().useState(),D=(0,a.Z)(k,2),P=D[0],j=D[1],x=function(){I(!1),f(1),g(We),n()},T=function(e){var t=e.stepIdReached,n=e.image,r=n.name,a=n.id,i=n.architecture,o=e.stepValidation,c=e.setStepValidation,s=e.setLaunchSuccess;return[{name:"Account and customization",steps:[{name:"AWS",id:1,enableNext:o.awsStep,component:l().createElement(ae,{architecture:i||"x86_64",composeID:a,setStepValidated:function(e){return c((function(t){return qe(qe({},t),{},{awsStep:e})}))}}),canJumpTo:t>=1}]},{name:"SSH key authentication",id:4,component:l().createElement(Ie,{setStepValidated:function(e){return c((function(t){return qe(qe({},t),{},{sshStep:e})}))}}),canJumpTo:t>=4,enableNext:o.sshStep},{name:"Review details",id:5,component:l().createElement(ue,{imageName:r}),canJumpTo:t>=5,nextButtonText:"Launch"},{name:"Finish Progress",id:6,component:l().createElement(Ve,{provider:Ae,setLaunchSuccess:function(){return s(!0)},imageID:a}),isFinishedStep:!0}]}({stepIdReached:d,image:o,stepValidation:v,setStepValidation:g,setLaunchSuccess:j});return t?l().createElement(m,null,l().createElement(h,null,l().createElement(s.Wizard,(0,r.Z)({},c,{title:"Launch",description:"Launch image ".concat(o.name),steps:T,isOpen:!0,onClose:function(){d>=5&&!P?I(!0):x()},onNext:function(e,t){var n=e.id,r=e.name,a=t.prevId,i=t.prevName;console.debug("current id: ".concat(n,", current name: ").concat(r,", previous id: ").concat(a,", previous name: ").concat(i)),f((function(e){return e<n?n:e}))},className:"provisioning",footer:l().createElement(ze,null)})),l().createElement(S,{isOpen:w,onConfirm:x,onCancel:function(){return I(!1)}}))):null};Qe.propTypes={isOpen:c().bool.isRequired,onClose:c().func,image:c().shape({name:c().string,id:c().string,architecture:c().string}).isRequired};const Ue=Qe},209:()=>{}}]);