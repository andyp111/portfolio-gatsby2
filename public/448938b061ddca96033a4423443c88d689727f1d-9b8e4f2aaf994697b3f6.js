/*! For license information please see 448938b061ddca96033a4423443c88d689727f1d-9b8e4f2aaf994697b3f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"094J":function(e,t,a){"use strict";(function(e){var n=a("q1tI"),r=a("puqk"),o={},c=function(e,t,a){return o[e]||(o[e]={callbacks:[],value:a}),o[e].callbacks.push(t),{deregister:function(){var a=o[e].callbacks,n=a.indexOf(t);n>-1&&a.splice(n,1)},emit:function(a){o[e].value!==a&&(o[e].value=a,o[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};t.a=function(t,a){if(void 0===a&&(a=void 0!==e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),a){var o=(l=a,{get:function(e,t){var a=l.getItem(e);return null==a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){l.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,a){var o=a.get,l=a.set,i=Object(n.useRef)(null),s=Object(n.useState)((function(){return o(t,e)})),u=s[0],f=s[1];Object(r.a)("storage",(function(e){if(e.key===t){var a=JSON.parse(e.newValue);u!==a&&f(a)}})),Object(n.useEffect)((function(){return i.current=c(t,f,e),function(){i.current.deregister()}}),[e,t]);var d=Object(n.useCallback)((function(e){var a="function"==typeof e?e(u):e;l(t,a),f(a),i.current.emit(e)}),[u,l,t]);return[u,d]}(e,t,o)}}var l;return n.useState}}).call(this,a("yLpj"))},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),l=a("q1tI"),i=a.n(l),s=a("vUet"),u=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.noGutters,f=e.as,d=void 0===f?"div":f,v=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(s.a)(a,"row"),_=m+"-cols",p=[];return u.forEach((function(e){var t,a=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+_+n+"-"+t)})),i.a.createElement(d,Object(n.a)({ref:t},v,{className:c.a.apply(void 0,[o,m,l&&"no-gutters"].concat(p))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),l=a("q1tI"),i=a.n(l),s=a("vUet"),u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,l=e.as,u=void 0===l?"div":l,f=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),v=Object(s.a)(a,"container"),m="string"==typeof o?"-"+o:"-fluid";return i.a.createElement(u,Object(n.a)({ref:t},d,{className:c()(f,o?""+v+m:v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),l=a("q1tI"),i=a.n(l),s=a("vUet"),u=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,f=void 0===l?"div":l,d=Object(r.a)(e,["bsPrefix","className","as"]),v=Object(s.a)(a,"col"),m=[],_=[];return u.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+v+c:""+v+c+"-"+t),null!=n&&_.push("order"+c+"-"+n),null!=a&&_.push("offset"+c+"-"+a)})),m.length||m.push(v),i.a.createElement(f,Object(n.a)({},d,{ref:t,className:c.a.apply(void 0,[o].concat(m,_))}))}));f.displayName="Col",t.a=f},LbRr:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("g+62"),c=a("ZlXN");t.a=function(){var e=Object(o.a)(!1);return r.a.createElement("header",{className:"nav-header",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"nav-outer-div",style:{marginBottom:"1rem",boxShadow:"0 5px 2px -2px rgba(0,0,0,.2)"}},r.a.createElement("div",{className:"nav-outer-div",style:{margin:"0 auto",maxWidth:"100%",padding:"1.45rem 1.0875rem",display:"flex",justifyContent:"center"}},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{class:"navbar-brand",href:"/"},"Home"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link",href:"/contact"},"Contact")),r.a.createElement("li",{className:"nav-dark-light",style:{padding:"5px"}},r.a.createElement(c.a,{onClick:function(t){"dark"===t?e.enable():e.disable()}}))))))))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var n=a("q1tI"),r=a.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.a.createContext&&r.a.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function s(e){return function(t){return r.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.attr,o=e.size,c=e.title,s=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:a,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.a.createElement("title",null,c),e.children)};return void 0!==c?r.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(o)}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},ZlXN:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_icons_ri__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("v7au"),SwitchIcons=function SwitchIcons(props){var handleDarkClick=function(){return props.onClick&&props.onClick("dark")},handleLightClick=function(){return props.onClick&&props.onClick("light")},windowGlobal="undefined"!=typeof window&&window,storage=windowGlobal.localStorage,_useState=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(storage),isDarkMode=_useState[0],handleDarkMode=_useState[1],lightOrCloud=eval(isDarkMode)?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:function(){handleDarkMode(!1),handleLightClick()}}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.b,{onClick:function(){handleDarkMode(!0),handleDarkClick()}});return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,lightOrCloud)};__webpack_exports__.a=SwitchIcons},"g+62":function(e,t,a){"use strict";(function(e){var n=a("puqk"),r=a("q1tI"),o=a("094J"),c=function(){},l={classList:{add:c,remove:c}},i=function(t,a,n){void 0===n&&(n=e);var c=t?Object(o.a)(t,a):r.useState,i=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},s={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},u="(prefers-color-scheme: dark)"===i.media,f=n.document&&n.document.body||l;return{usePersistedDarkModeState:c,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=f),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(n){e.classList.add(n?t:a),e.classList.remove(n?a:t)}},mediaQueryEventTarget:s,getInitialValue:function(e){return u?i.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,o=t.classNameDark,c=t.classNameLight,l=t.onChange,s=t.storageKey;void 0===s&&(s="darkMode");var u=t.storageProvider,f=t.global,d=Object(r.useMemo)((function(){return i(s,u,f)}),[s,u,f]),v=d.getDefaultOnChange,m=d.mediaQueryEventTarget,_=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),p=_[0],b=_[1],g=Object(r.useMemo)((function(){return l||v(a,o,c)}),[l,a,o,c,v]);return Object(r.useEffect)((function(){g(p)}),[g,p]),Object(n.a)("change",(function(e){return b(e.matches)}),m),{value:p,enable:Object(r.useCallback)((function(){return b(!0)}),[b]),disable:Object(r.useCallback)((function(){return b(!1)}),[b]),toggle:Object(r.useCallback)((function(){return b((function(e){return!e}))}),[b])}}}).call(this,a("yLpj"))},puqk:function(e,t,a){"use strict";(function(e){var n=a("q1tI");t.a=function(t,a,r,o){void 0===r&&(r=e),void 0===o&&(o={});var c=Object(n.useRef)(),l=o.capture,i=o.passive,s=o.once;Object(n.useEffect)((function(){c.current=a}),[a]),Object(n.useEffect)((function(){if(r&&r.addEventListener){var e=function(e){return c.current(e)},a={capture:l,passive:i,once:s};return r.addEventListener(t,e,a),function(){r.removeEventListener(t,e,a)}}}),[t,r,l,i,s])}}).call(this,a("yLpj"))},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("wx14");var n=a("q1tI"),r=a.n(n),o=r.a.createContext({});o.Consumer,o.Provider;function c(e,t){var a=Object(n.useContext)(o);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=448938b061ddca96033a4423443c88d689727f1d-9b8e4f2aaf994697b3f6.js.map