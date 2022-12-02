/*! For license information please see NoPermissionsPage.1670013937910.ab99b46653f79196b5ce.js.LICENSE.txt */
(self.webpackChunkprovisioning_frontend=self.webpackChunkprovisioning_frontend||[]).push([[452],{3754:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(3264);const o=r.n(n)().createContext("light")},4748:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(5893),o=r(3264),a=r.n(o),i=r(4184),c=r.n(i),s=r(6706),l=r(3754),p=function(){return p=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},p.apply(this,arguments)},u=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};const f=(0,s.$j)((function(t){var e=t.routerData;return{params:e&&e.params,path:e&&e.path}}),(function(){return{}}))((function(t){var e=t.path,r=t.params,o=void 0===r?{}:r,i=t.children,s=t.className,f=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["path","params","children","className"]),v=function(){var t,r,n;if(null===(n=null===(r=null===(t=null===window||void 0===window?void 0:window.insights)||void 0===t?void 0:t.chrome)||void 0===r?void 0:r.$internal)||void 0===n?void 0:n.store){var a=window.insights.chrome.$internal.store.getState();if(e&&a)return e.split("/").reduce((function(t,e){var r,n;return 0===e.indexOf(":")?t.dynamic=p(p({},t.dynamic),((r={})["data-".concat((n=e.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=o[e.substr(1)],r)):t.staticPart=u(u([],t.staticPart,!0),""!==e?[e]:[],!0),t}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),d=v.dynamic,y=v.staticPart;return(0,n.jsx)(l.Z.Consumer,{children:function(t){var e;void 0===t&&(t="light");var r=c()(((e={})["pf-m-".concat(t)]="dark"===t,e));return{dark:(0,n.jsx)("section",p({},f,d,{"page-type":y.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)},{children:a().Children.map(i,(function(t){return a().cloneElement(t,{className:"pf-m-dark"})}))})),light:(0,n.jsx)("section",p({},f,d,{"page-type":y.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section"))},{children:i}))}[t]}})}))},6251:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>v});var n=r(3264),o=r.n(n),a=r(6530),i=r(4748),c=r(5893),s=r(1242);const l=(0,r(400).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0});var p=function(){return p=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},p.apply(this,arguments)},u=function(){return(0,c.jsxs)(o().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,c.jsx)("a",p({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const f=function(t){var e=t.prevPageButtonText,r=void 0===e?"Return to previous page":e,n=t.toLandingPageText,o=void 0===n?"Go to landing page":n,a=t.title,i=t.actions,f=void 0===i?null:i,v=t.serviceName,d=t.icon,y=void 0===d?l:d,h=t.description,m=void 0===h?(0,c.jsx)(u,{}):h,g=t.showReturnButton,O=void 0===g||g,b=t.className,j=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),w=a||"You do not have access to ".concat(v);return(0,c.jsxs)(s.EmptyState,p({variant:s.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(b||"")},j,{children:[(0,c.jsx)(s.EmptyStateIcon,{icon:y}),(0,c.jsx)(s.Title,p({headingLevel:"h5",size:"lg"},{children:w})),(0,c.jsx)(s.EmptyStateBody,{children:m}),f,O&&(document.referrer?(0,c.jsx)(s.Button,p({variant:"primary",onClick:function(){return history.back()}},{children:r})):(0,c.jsx)(s.Button,p({variant:"primary",component:"a",href:"."},{children:o})))]}))},v=(0,a.withRouter)((function(){return(0,n.useEffect)((function(){var t,e,r;null===(t=insights)||void 0===t||null===(e=t.chrome)||void 0===e||null===(r=e.appAction)||void 0===r||r.call(e,"no-permissions")}),[]),o().createElement(i.Z,null,o().createElement(f,{serviceName:"Sample app"}))}))},4184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},7418:t=>{"use strict";var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,a){for(var i,c,s=o(t),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))r.call(i,p)&&(s[p]=i[p]);if(e){c=e(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(s[c[u]]=i[c[u]])}}return s}},5251:(t,e,r)=>{"use strict";r(7418);var n=r(3264),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var n,a={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(p=e.ref),e)c.call(e,n)&&!s.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===a[n]&&(a[n]=e[n]);return{$$typeof:o,type:t,key:l,ref:p,props:a,_owner:i.current}}e.jsx=l,e.jsxs=l},5893:(t,e,r)=>{"use strict";t.exports=r(5251)}}]);
//# sourceMappingURL=../sourcemaps/NoPermissionsPage.js.map