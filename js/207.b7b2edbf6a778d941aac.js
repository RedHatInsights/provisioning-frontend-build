/*! For license information please see 207.b7b2edbf6a778d941aac.js.LICENSE.txt */
(self.webpackChunkprovisioning_frontend=self.webpackChunkprovisioning_frontend||[]).push([[207,679],{43047:(t,e,r)=>{"use strict";r.d(e,{$O:()=>n,ZP:()=>o});const n=(0,r(40400).IU)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),o=n},49661:t=>{t.exports={}},89892:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>R});var n=r(85893),o=r(95998),i=r(93264),a=r(3644),c=r(90154);const s=(0,r(40400).IU)({name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0});var u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)};const l=function(t){var e=t.description,r=t.dismissable,o=void 0===r||r,a=t.onDismiss,l=t.dismissDelay,f=void 0===l?8e3:l,p=t.title,y=t.sentryId,d=t.requestId,h=t.autoDismiss,v=void 0===h||h,b=t.id,m=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),g=(0,i.useRef)(),O=function(){a(b)},j=function(){v&&(g.current=setTimeout((function(){return O()}),f))},S=function(){g.current&&clearTimeout(g.current)};return(0,i.useEffect)((function(){return j(),function(){S()}}),[]),(0,n.jsxs)(c.Alert,u({className:"notification-item",id:"".concat(b),title:"string"==typeof p?p.replace(/<\/?[^>]+(>|$)/g,""):p},m,{actionClose:o?(0,n.jsx)(c.AlertActionCloseButton,u({"aria-label":"close-notification",variant:"plain",onClick:O},{children:(0,n.jsx)(s,{})})):null,onMouseEnter:S,onMouseLeave:j},{children:[(0,n.jsx)(c.TextContent,{children:(0,n.jsx)(c.Text,u({className:"sentry-mask data-hj-suppress",component:c.TextVariants.small},{children:"string"==typeof e?e.replace(/<\/?[^>]+(>|$)/g,""):e}))}),y&&(0,n.jsx)(c.TextContent,{children:(0,n.jsxs)(c.Text,u({component:c.TextVariants.small},{children:["Tracking Id: ",y]}))}),d&&(0,n.jsx)(c.TextContent,{children:(0,n.jsxs)(c.Text,u({component:c.TextVariants.small},{children:["Request Id: ",d]}))})]}))};var f=function(){return f=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},f.apply(this,arguments)};const p=function(t){var e=t.page,r=void 0===e?1:e,o=t.onSetPage,i=t.onClearAll,a=t.count,s=void 0===a?0:a;return(0,n.jsx)(c.Card,f({className:"notification-item"},{children:(0,n.jsx)(c.CardBody,{children:(0,n.jsxs)(c.Level,{children:[(0,n.jsx)(c.LevelItem,{children:(0,n.jsx)(c.Button,f({variant:c.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:i},{children:"Clear all"}))}),(0,n.jsx)(c.LevelItem,{children:(0,n.jsx)(c.Pagination,{itemCount:s,variant:c.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:r,onSetPage:o})})]})})}))};var y=function(){return y=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},y.apply(this,arguments)};const d=function(t){var e=t.notifications,r=void 0===e?[]:e,o=t.removeNotification,c=void 0===o?function(){}:o,s=t.rootId,u=t.onClearAll,f=(0,i.useState)({page:1}),d=f[0],h=f[1],v=d.page,b=r&&r.length<=5?r:r&&r.slice(5*(v-1),5*v);return 0===r.length?null:(0,a.createPortal)((0,n.jsxs)("div",y({className:"notifications-portal"},{children:[r.length>5&&(0,n.jsx)(p,{onSetPage:function(t,e){h((function(t){return y(y({},t),{page:e})}))},count:r.length,page:v,onClearAll:u}),b.map((function(t){return(0,n.jsx)(l,y({onDismiss:c},t),"".concat(t.id))}))]})),s&&document.getElementById(s)||document.body)};var h=r(21458),v=r(89376),b=r(39173),m=r(43047),g=function(){return g=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)};const O=function(){return(0,n.jsxs)(n.Fragment,{children:["If the problem persists, contact ",(0,n.jsx)("a",g({href:"https://access.redhat.com/support"},{children:"Red Hat Support"}))," or check our ",(0,n.jsx)("a",g({href:"https://status.redhat.com"},{children:" status page"}))," for known outages."]})};var j=function(){return j=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},j.apply(this,arguments)};const S=function(t){var e=t.errorTitle,r=void 0===e?"Something went wrong":e,o=t.errorDescription,i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["errorTitle","errorDescription"]);return(0,n.jsxs)(c.EmptyState,j({variant:c.EmptyStateVariant.large},i,{className:"ins-c-error-state"},{children:[(0,n.jsx)(c.EmptyStateIcon,{icon:m.$O}),(0,n.jsx)(c.Title,j({headingLevel:"h4",size:"lg"},{children:r})),(0,n.jsx)(c.EmptyStateBody,{children:(0,n.jsxs)(c.Stack,{children:[!o&&(0,n.jsx)(c.StackItem,{children:"There was a problem processing the request. Please try again."}),(0,n.jsx)(c.StackItem,{children:o||(0,n.jsx)(O,{})})]})}),document.referrer?(0,n.jsx)(c.Button,j({variant:"primary",onClick:function(){return history.back()}},{children:"Return to last page"})):(0,n.jsx)(c.Button,j({variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer"},{children:"Go to home page"}))]}))};var x=function(){return x=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},x.apply(this,arguments)},w="ins-error-boundary-stack";const E=function(t){var e=t.error;return e.stack?(0,n.jsx)(c.Text,x({className:w},{children:e.stack.split("\n").map((function(t){return(0,n.jsx)("div",{children:t},t)}))})):e.name&&e.message?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Text,x({component:"h6"},{children:e.name})),(0,n.jsx)(c.Text,x({className:w,component:"blockquote"},{children:e.message}))]}):(0,n.jsx)(c.Text,x({className:w,component:"blockquote"},{children:e.toString()}))};var P=r(94184),N=r.n(P),C=function(){return C=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},C.apply(this,arguments)};const I=function(t){var e,r=t.type,o=t.children,i=t.className,a=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["type","children","className"]),c=N()(i,((e={})["ins-l-".concat(r)]=void 0!==r,e));return(0,n.jsxs)("section",C({},a,{className:c},{children:[" ",o," "]}))};var T,_=(T=function(t,e){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},T(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}T(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),D=function(){return D=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},D.apply(this,arguments)};const A=function(t){function e(e){var r=t.call(this,e)||this;return r.state={hasError:!1,historyState:history.state},r}return _(e,t),e.getDerivedStateFromError=function(t){return{hasError:!0,error:t,historyState:history.state}},e.prototype.render=function(){return this.state.historyState!==history.state&&this.setState({hasError:!1,historyState:history.state}),this.state.hasError?this.props.silent?null:(0,n.jsxs)("div",{children:[(0,n.jsx)(v.Z,{children:(0,n.jsx)(b.Z,{title:this.props.headerTitle})}),(0,n.jsx)(I,{children:(0,n.jsx)(S,{errorTitle:this.props.errorTitle,errorDescription:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:this.props.errorDescription}),this.state.error&&(0,n.jsx)(c.ExpandableSection,D({toggleText:"Show details"},{children:(0,n.jsx)(E,{error:this.state.error})}))]})})})]}):this.props.children},e}(i.Component);var k=function(){return k=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},k.apply(this,arguments)},$=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},L=function(t){var e=t.clearNotifications,r=$(t,["clearNotifications"]),i=(0,o.v9)((function(t){return t.notifications})),a=(0,o.I0)();return(0,n.jsx)(d,k({notifications:i,removeNotification:function(t){return a((0,h.FV)(t))},onClearAll:e||function(){return a((0,h.L1)())}},r))};const R=function(t){var e=t.silent,r=void 0===e||e,o=$(t,["silent"]);return(0,n.jsx)(A,k({headerTitle:"Notifications portal",silent:r},{children:(0,n.jsx)(L,k({},o))}))}},84885:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>f});var n=r(27361),o=r.n(n),i=r(18721),a=r.n(i),c=r(21458),s=r(90154),u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},l=function(t,e,r){if("string"==typeof t)return{title:"Error",description:t};var n=e;Array.isArray(e)&&(n=e.find((function(e){return a()(t,e)})));var i=r;return Array.isArray(r)&&(i=r.find((function(e){return a()(t,e)}))),{title:o()(t,n)||"Error",description:o()(t,i),sentryId:null==t?void 0:t.sentryId,requestId:null==t?void 0:t.requestId}};const f=function(t){var e=u(u({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),t),r=function(t){return Boolean(t.match(new RegExp("^.*".concat(e.rejectedSuffix,"$"))))},n={dismissable:!e.autoDismiss,dismissDelay:e.dismissDelay};return function(t){var i=t.dispatch;return function(t){return function(f){var p=f.meta,y=f.type;if(p&&p.notifications){var d=p.notifications;(function(t){return Boolean(t.match(new RegExp("^.*".concat(e.pendingSuffix,"$"))))})(y)&&d.pending?("function"==typeof d.pending&&(d.pending=d.pending(f.payload)),i((0,c.wN)(u(u({},n),d.pending)))):function(t){return Boolean(t.match(new RegExp("^.*".concat(e.fulfilledSuffix,"$"))))}(y)&&d.fulfilled?("function"==typeof d.fulfilled&&(d.fulfilled=d.fulfilled(f.payload)),i((0,c.wN)(u(u({},n),d.fulfilled)))):r(y)&&d.rejected&&("function"==typeof d.rejected&&(d.rejected=d.rejected(f.payload)),i((0,c.wN)(u(u(u({},n),d.rejected),{sentryId:f.payload&&f.payload.sentryId,requestId:f.payload&&f.payload.requestId}))))}if(function(t){return t.isRejected&&!t.hasCustomNotification&&!t.noErrorOverride&&t.dispatchDefaultFailure}({isRejected:r(y),hasCustomNotification:p&&p.notifications&&p.notifications.rejected,noErrorOverride:p&&p.noError,dispatchDefaultFailure:e.dispatchDefaultFailure}))if(e.useStatusText)i((0,c.wN)(u({variant:s.AlertVariant.danger,dismissable:!0},l(f.payload,e.errorTitleKey,"statusText"))));else{var h=Array.isArray(e.errorNamespaceKey)&&e.errorNamespaceKey.find((function(t){return a()(f.payload,t)}));h?o()(f.payload,h).map((function(t){i((0,c.wN)(u({variant:s.AlertVariant.danger,dismissable:!0},l(t,e.errorTitleKey,e.errorDescriptionKey))))})):Array.isArray(f.payload)?f.payload.map((function(t){i((0,c.wN)(u({variant:s.AlertVariant.danger,dismissable:!0},l(t,e.errorTitleKey,e.errorDescriptionKey))))})):i((0,c.wN)(u({variant:s.AlertVariant.danger,dismissable:!0},l(f.payload,e.errorTitleKey,e.errorDescriptionKey))))}t(f)}}}}},17558:(t,e,r)=>{"use strict";r.d(e,{Dv:()=>o,Kf:()=>i,wt:()=>a});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(n,"ADD_NOTIFICATION"),i="".concat(n,"REMOVE_NOTIFICATION"),a="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(t,e,r)=>{"use strict";r.d(e,{FV:()=>a,L1:()=>c,wN:()=>i});var n=r(17558),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)},i=function(t){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},t)}},a=function(t){return{type:n.Kf,payload:t}},c=function(){return{type:n.wt}}},83215:(t,e,r)=>{"use strict";r.d(e,{ee:()=>a});var n=r(17558),o=(r(21458),function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}),i=[];const a=function(t,e){switch(void 0===t&&(t=i),e.type){case n.Dv:return r=t,a=e.payload,o(o([],r,!0),[a],!1);case n.Kf:return function(t,e){var r=e.payload,n=t.findIndex((function(t){return t.id===r}));return o(o([],t.slice(0,n),!0),t.slice(n+1),!0)}(t,e);case n.wt:return[];default:return t}var r,a}},20925:(t,e,r)=>{"use strict";r.d(e,{JH:()=>O});var n=r(64572);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var c="function"==typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function l(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function f(t,e,r){var n;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(a(1));return r(f)(t,e)}if("function"!=typeof t)throw new Error(a(2));var o=t,i=e,s=[],p=s,y=!1;function d(){p===s&&(p=s.slice())}function h(){if(y)throw new Error(a(3));return i}function v(t){if("function"!=typeof t)throw new Error(a(4));if(y)throw new Error(a(5));var e=!0;return d(),p.push(t),function(){if(e){if(y)throw new Error(a(6));e=!1,d();var r=p.indexOf(t);p.splice(r,1),s=null}}}function b(t){if(!l(t))throw new Error(a(7));if(void 0===t.type)throw new Error(a(8));if(y)throw new Error(a(9));try{y=!0,i=o(i,t)}finally{y=!1}for(var e=s=p,r=0;r<e.length;r++)(0,e[r])();return t}function m(t){if("function"!=typeof t)throw new Error(a(10));o=t,b({type:u.REPLACE})}function g(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(a(11));function r(){t.next&&t.next(h())}return r(),{unsubscribe:e(r)}}})[c]=function(){return this},t}return b({type:u.INIT}),(n={dispatch:b,subscribe:v,getState:h,replaceReducer:m})[c]=g,n}function p(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,c=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:u.INIT}))throw new Error(a(12));if(void 0===r(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(r)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},s=0;s<c.length;s++){var u=c[s],l=r[u],f=t[u],p=l(f,e);if(void 0===p)throw e&&e.type,new Error(a(14));o[u]=p,n=n||p!==f}return(n=n||c.length!==Object.keys(t).length)?o:t}}function y(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function d(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(a(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=e.map((function(t){return t(o)}));return n=y.apply(void 0,c)(r.dispatch),i(i({},r),{},{dispatch:n})}}}var h=function(){return h=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},h.apply(this,arguments)},v=function(){function t(t,e,r){void 0===t&&(t={}),void 0===e&&(e=[]),void 0===r&&(r=y);var n="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||r;this.store=f((function(e){return void 0===e&&(e=t),e}),t,n(d.apply(void 0,e))),this.reducers={}}return t.prototype.getStore=function(){return this.store},t.prototype.register=function(t){var e=this;return this.reducers=h(h({},this.reducers),t),this.store.replaceReducer(p(h({},this.reducers))),function(){e.reducers=Object.entries(e.reducers).filter((function(e){var r=e[0];return!Object.keys(t).includes(r)})).reduce((function(t,e){var r,n=e[0],o=e[1];return h(h({},t),((r={})[n]=o,r))}),{}),e.store.replaceReducer(p(h({},e.reducers)))}},t}();new v;const b=v;var m,g=function(){return g=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)};function O(t,e,r){return void 0===t&&(t={}),void 0===e&&(e=[]),function(t,e,r){return void 0===t&&(t={}),void 0===e&&(e=[]),m||(m=new b(t,function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],e,!0),r)),m.register({routerData:function(t,e){var r=e.type,n=e.payload;return g(g({},t),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),m}(t,e,r)}},35240:(t,e,r)=>{"use strict";r.d(e,{eb:()=>n}),r(82492),r(67523);function n(t,e){void 0===e&&(e=2);var r=t.split("/")[1],n=["beta","preview"].includes(r),o="/",i=t.replace(/(#|\?).*/,"").split("/");return i.shift(),n&&(i.shift(),o="/".concat(r,"/")),function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([],new Array(e),!0).reduce((function(t,r,n){return"".concat(t).concat(i[n]||"").concat(n<e-1?"/":"")}),o)}},89376:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(85893),o=r(94184),i=r.n(o),a=r(93264);const c=r.n(a)().createContext("light");var s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};const u=function(t){var e=t.className,r=t.children,o=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["className","children"]),a=i()(e,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(c.Consumer,{children:function(t){var e,c;void 0===t&&(t="light");var u=i()(((e={})["pf-m-".concat(t,"-200")]="dark"===t,e),((c={})["pf-m-light"]="light"===t,c));return(0,n.jsx)("section",s({},o,{className:"".concat(a," ").concat(u),"widget-type":"InsightsPageHeader"},{children:r}))}})}},39173:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(85893),o=r(94184),i=r.n(o),a=r(90154),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)};const s=function(t){var e=t.className,r=t.title,o=i()(e);return(0,n.jsx)(a.Title,c({headingLevel:"h1",size:"2xl",className:o,"widget-type":"InsightsPageHeaderTitle"},{children:r}))}},55140:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(54025),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};const i=function(t){var e,r=(0,n.useScalprum)(),i=(null===(e=r.api)||void 0===e?void 0:e.chrome)||{};return i=o(o({},i),{initialized:r.initialized}),"function"==typeof t?t(i):i}},94184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},8679:(t,e,r)=>{"use strict";var n=r(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(t){return n.isMemo(t)?a:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(d){var o=y(r);o&&o!==d&&t(e,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=s(e),h=s(r),v=0;v<a.length;++v){var b=a[v];if(!(i[b]||n&&n[b]||h&&h[b]||c&&c[b])){var m=p(r,b);try{u(e,b,m)}catch(t){}}}}return e}},82492:(t,e,r)=>{var n=r(42980),o=r(21463)((function(t,e,r){n(t,e,r)}));t.exports=o},27418:t=>{"use strict";var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var a,c,s=o(t),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))r.call(a,l)&&(s[l]=a[l]);if(e){c=e(a);for(var f=0;f<c.length;f++)n.call(a,c[f])&&(s[c[f]]=a[c[f]])}}return s}},69921:(t,e)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function j(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case l:case f:case i:case c:case a:case y:return t;default:switch(t=t&&t.$$typeof){case u:case p:case v:case h:case s:return t;default:return e}}case o:return e}}}function S(t){return j(t)===f}e.AsyncMode=l,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=s,e.Element=n,e.ForwardRef=p,e.Fragment=i,e.Lazy=v,e.Memo=h,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=y,e.isAsyncMode=function(t){return S(t)||j(t)===l},e.isConcurrentMode=S,e.isContextConsumer=function(t){return j(t)===u},e.isContextProvider=function(t){return j(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return j(t)===p},e.isFragment=function(t){return j(t)===i},e.isLazy=function(t){return j(t)===v},e.isMemo=function(t){return j(t)===h},e.isPortal=function(t){return j(t)===o},e.isProfiler=function(t){return j(t)===c},e.isStrictMode=function(t){return j(t)===a},e.isSuspense=function(t){return j(t)===y},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===f||t===c||t===a||t===y||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===h||t.$$typeof===s||t.$$typeof===u||t.$$typeof===p||t.$$typeof===m||t.$$typeof===g||t.$$typeof===O||t.$$typeof===b)},e.typeOf=j},59864:(t,e,r)=>{"use strict";t.exports=r(69921)},95998:(t,e,r)=>{"use strict";r.d(e,{zt:()=>g,I0:()=>x,v9:()=>h});var n=r(61688),o=r(52798),i=r(3644);let a=function(t){t()};const c=()=>a;var s=r(93264),u=r.n(s);const l=u().createContext(null);function f(){return(0,s.useContext)(l)}let p=()=>{throw new Error("uSES not initialized!")};const y=(t,e)=>t===e;function d(t=l){const e=t===l?f:()=>(0,s.useContext)(t);return function(t,r=y){const{store:n,subscription:o,getServerState:i}=e(),a=p(o.addNestedSub,n.getState,i||n.getState,t,r);return(0,s.useDebugValue)(a),a}}const h=d();r(8679),r(72973);const v={notify(){},get:()=>[]};const b="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?s.useLayoutEffect:s.useEffect;let m=null;const g=function({store:t,context:e,children:r,serverState:n}){const o=(0,s.useMemo)((()=>{const e=function(t,e){let r,n=v;function o(){a.onStateChange&&a.onStateChange()}function i(){r||(r=e?e.addNestedSub(o):t.subscribe(o),n=function(){const t=c();let e=null,r=null;return{clear(){e=null,r=null},notify(){t((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){let t=[],r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}const a={addNestedSub:function(t){return i(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=v)},getListeners:()=>n};return a}(t);return{store:t,subscription:e,getServerState:n?()=>n:void 0}}),[t,n]),i=(0,s.useMemo)((()=>t.getState()),[t]);b((()=>{const{subscription:e}=o;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[o,i]);const a=e||l;return u().createElement(a.Provider,{value:o},r)};function O(t=l){const e=t===l?f:()=>(0,s.useContext)(t);return function(){const{store:t}=e();return t}}const j=O();function S(t=l){const e=t===l?j:O(t);return function(){return e().dispatch}}const x=S();var w,E;w=o.useSyncExternalStoreWithSelector,p=w,(t=>{m=t})(n.useSyncExternalStore),E=i.unstable_batchedUpdates,a=E},88359:(t,e)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen");Symbol.for("react.module.reference")},72973:(t,e,r)=>{"use strict";r(88359)},75251:(t,e,r)=>{"use strict";r(27418);var n=r(93264),o=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),e.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,r){var n,i={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)c.call(e,n)&&!s.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:l,props:i,_owner:a.current}}e.jsx=u,e.jsxs=u},85893:(t,e,r)=>{"use strict";t.exports=r(75251)},53250:(t,e,r)=>{"use strict";var n=r(93264),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},i=n.useState,a=n.useEffect,c=n.useLayoutEffect,s=n.useDebugValue;function u(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!o(t,r)}catch(t){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=i({inst:{value:r,getSnapshot:e}}),o=n[0].inst,l=n[1];return c((function(){o.value=r,o.getSnapshot=e,u(o)&&l({inst:o})}),[t,r,e]),a((function(){return u(o)&&l({inst:o}),t((function(){u(o)&&l({inst:o})}))}),[t]),s(r),r};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},50139:(t,e,r)=>{"use strict";var n=r(93264),o=r(61688),i="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=o.useSyncExternalStore,c=n.useRef,s=n.useEffect,u=n.useMemo,l=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var f=c(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=u((function(){function t(t){if(!s){if(s=!0,a=t,t=n(t),void 0!==o&&p.hasValue){var e=p.value;if(o(e,t))return c=e}return c=t}if(e=c,i(a,t))return e;var r=n(t);return void 0!==o&&o(e,r)?e:(a=t,c=r)}var a,c,s=!1,u=void 0===r?null:r;return[function(){return t(e())},null===u?void 0:function(){return t(u())}]}),[e,r,n,o]);var y=a(t,f[0],f[1]);return s((function(){p.hasValue=!0,p.value=y}),[y]),l(y),y}},61688:(t,e,r)=>{"use strict";t.exports=r(53250)},52798:(t,e,r)=>{"use strict";t.exports=r(50139)}}]);
//# sourceMappingURL=../sourcemaps/207.82a63d9426f52d069d8fb499e215265e.js.map