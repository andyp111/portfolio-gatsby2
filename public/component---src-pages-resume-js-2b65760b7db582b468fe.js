(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"094J":function(e,t,a){"use strict";(function(e){var n=a("q1tI"),r=a("puqk"),c={},o=function(e,t,a){return c[e]||(c[e]={callbacks:[],value:a}),c[e].callbacks.push(t),{deregister:function(){var a=c[e].callbacks,n=a.indexOf(t);n>-1&&a.splice(n,1)},emit:function(a){c[e].value!==a&&(c[e].value=a,c[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};t.a=function(t,a){if(void 0===a&&(a=void 0!==e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),a){var c=(l=a,{get:function(e,t){var a=l.getItem(e);return null==a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){l.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,a){var c=a.get,l=a.set,i=Object(n.useRef)(null),u=Object(n.useState)((function(){return c(t,e)})),s=u[0],d=u[1];Object(r.a)("storage",(function(e){if(e.key===t){var a=JSON.parse(e.newValue);s!==a&&d(a)}})),Object(n.useEffect)((function(){return i.current=o(t,d,e),function(){i.current.deregister()}}),[e,t]);var f=Object(n.useCallback)((function(e){var a="function"==typeof e?e(s):e;l(t,a),d(a),i.current.emit(e)}),[s,l,t]);return[s,f]}(e,t,c)}}var l;return n.useState}}).call(this,a("yLpj"))},F2CN:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("LbRr");t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement("div",null,r.a.createElement("iframe",{width:"100%",height:"900",src:"https://www.docdroid.net/b8mM7sh/andy-phamresume2021-pdf",frameborder:"0",allowtransparency:!0,allowfullscreen:!0,title:"resume"})))}},LbRr:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("g+62"),o=a("ZlXN");t.a=function(){var e=Object(c.a)(!1);return r.a.createElement("header",{className:"nav-header",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"nav-outer-div",style:{marginBottom:"1rem",boxShadow:"0 5px 2px -2px rgba(0,0,0,.2)"}},r.a.createElement("div",{className:"nav-outer-div",style:{margin:"0 auto",maxWidth:"100%",padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"center"}},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{class:"navbar-brand",href:"/"},"Home"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),r.a.createElement("li",{className:"nav-dark-light",style:{padding:"5px"}},r.a.createElement(o.a,{onClick:function(t){"dark"===t?e.enable():e.disable()}}))))))))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return o}));var n=a("q1tI"),r=a.n(n),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.a.createContext&&r.a.createContext(c),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function u(e){return function(t){return r.a.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,n=e.attr,c=e.size,o=e.title,u=i(e,["attr","size","title"]),s=c||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.a.createElement("title",null,o),e.children)};return void 0!==o?r.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(c)}},ZlXN:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_icons_ri__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("v7au"),SwitchIcons=function SwitchIcons(props){var handleDarkClick=function(){return props.onClick&&props.onClick("dark")},handleLightClick=function(){return props.onClick&&props.onClick("light")},windowGlobal="undefined"!=typeof window&&window,storage=windowGlobal.localStorage,_useState=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(storage),isDarkMode=_useState[0],handleDarkMode=_useState[1],lightOrCloud=eval(isDarkMode)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:function(){handleDarkMode(!1),handleLightClick()}}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){handleDarkMode(!0),handleDarkClick()}});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,lightOrCloud)};__webpack_exports__.a=SwitchIcons},"g+62":function(e,t,a){"use strict";(function(e){var n=a("puqk"),r=a("q1tI"),c=a("094J"),o=function(){},l={classList:{add:o,remove:o}},i=function(t,a,n){void 0===n&&(n=e);var o=t?Object(c.a)(t,a):r.useState,i=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},u={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,d=n.document&&n.document.body||l;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(n){e.classList.add(n?t:a),e.classList.remove(n?a:t)}},mediaQueryEventTarget:u,getInitialValue:function(e){return s?i.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,c=t.classNameDark,o=t.classNameLight,l=t.onChange,u=t.storageKey;void 0===u&&(u="darkMode");var s=t.storageProvider,d=t.global,f=Object(r.useMemo)((function(){return i(u,s,d)}),[u,s,d]),_=f.getDefaultOnChange,m=f.mediaQueryEventTarget,v=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(e)),p=v[0],b=v[1],g=Object(r.useMemo)((function(){return l||_(a,c,o)}),[l,a,c,o,_]);return Object(r.useEffect)((function(){g(p)}),[g,p]),Object(n.a)("change",(function(e){return b(e.matches)}),m),{value:p,enable:Object(r.useCallback)((function(){return b(!0)}),[b]),disable:Object(r.useCallback)((function(){return b(!1)}),[b]),toggle:Object(r.useCallback)((function(){return b((function(e){return!e}))}),[b])}}}).call(this,a("yLpj"))},puqk:function(e,t,a){"use strict";(function(e){var n=a("q1tI");t.a=function(t,a,r,c){void 0===r&&(r=e),void 0===c&&(c={});var o=Object(n.useRef)(),l=c.capture,i=c.passive,u=c.once;Object(n.useEffect)((function(){o.current=a}),[a]),Object(n.useEffect)((function(){if(r&&r.addEventListener){var e=function(e){return o.current(e)},a={capture:l,passive:i,once:u};return r.addEventListener(t,e,a),function(){r.removeEventListener(t,e,a)}}}),[t,r,l,i,u])}}).call(this,a("yLpj"))},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-resume-js-2b65760b7db582b468fe.js.map