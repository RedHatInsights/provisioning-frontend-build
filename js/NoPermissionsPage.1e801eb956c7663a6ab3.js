/*! For license information please see NoPermissionsPage.1e801eb956c7663a6ab3.js.LICENSE.txt */
(self.webpackChunkprovisioning_frontend=self.webpackChunkprovisioning_frontend||[]).push([[452],{4748:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s});var n=r(5893),o=r(3264),i=r(4184),a=r.n(i),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};const s=function(e){var t=e.children,r=e.className,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["children","className"]);return(0,o.useEffect)((function(){console.error('Using deprecated "Main" component. Do not use it. Either remove it from your JSX or replace it by "section" HTML element.')}),[]),(0,n.jsx)("section",c({},i,{className:"".concat(a()(r,"pf-l-page__main-section pf-c-page__main-section"))},{children:t}))}},6251:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(3264),o=r.n(n),i=r(6530),a=r(4748),c=r(5893),s=r(3669);const l=(0,r(400).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0});var u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},p=function(){return(0,c.jsxs)(o().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,c.jsx)("a",u({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const f=function(e){var t=e.prevPageButtonText,r=void 0===t?"Return to previous page":t,n=e.toLandingPageText,o=void 0===n?"Go to landing page":n,i=e.title,a=e.actions,f=void 0===a?null:a,y=e.serviceName,v=e.icon,h=void 0===v?l:v,d=e.description,m=void 0===d?(0,c.jsx)(p,{}):d,g=e.showReturnButton,O=void 0===g||g,b=e.className,j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),w=i||"You do not have access to ".concat(y);return(0,c.jsxs)(s.EmptyState,u({variant:s.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(b||"")},j,{children:[(0,c.jsx)(s.EmptyStateIcon,{icon:h}),(0,c.jsx)(s.Title,u({headingLevel:"h5",size:"lg"},{children:w})),(0,c.jsx)(s.EmptyStateBody,{children:m}),f,O&&(document.referrer?(0,c.jsx)(s.Button,u({variant:"primary",onClick:function(){return history.back()}},{children:r})):(0,c.jsx)(s.Button,u({variant:"primary",component:"a",href:"."},{children:o})))]}))},y=(0,i.withRouter)((function(){return(0,n.useEffect)((function(){var e,t,r;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(r=t.appAction)||void 0===r||r.call(t,"no-permissions")}),[]),o().createElement(a.ZP,null,o().createElement(f,{serviceName:"Sample app"}))}))},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,s=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))r.call(a,u)&&(s[u]=a[u]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(s[c[p]]=a[c[p]])}}return s}},5251:(e,t,r)=>{"use strict";r(7418);var n=r(3264),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},5893:(e,t,r)=>{"use strict";e.exports=r(5251)}}]);