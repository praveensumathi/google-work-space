(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218,731],{56194:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(86218)}])},86218:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(45081),o=r(30494),a=r(99407),i=r(20884),d=r(61642);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});var u=r(87677),s=r(74848),l=u._(r(96540)),c=u._(r(23248)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var h={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},v=function(e){function t(){return o._(this,t),n._(this,t,arguments)}return i._(t,e),a._(t,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:h.error,children:[(0,s.jsx)(c.default,{children:(0,s.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:h.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,s.jsx)("h1",{className:"next-error-h1",style:h.h1,children:t}):null,(0,s.jsx)("div",{style:h.wrap,children:(0,s.jsxs)("h2",{style:h.h2,children:[this.props.title||t?n:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),t}(l.default.Component);v.displayName="ErrorPage",v.getInitialProps=p,v.origGetInitialProps=p,("function"==typeof t.default||"object"===d._(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},51432:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(87677)._(r(96540)).default.createContext({})},42452:(e,t)=>{"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},23248:(e,t,r)=>{"use strict";var n=r(77836);Object.defineProperty(t,"__esModule",{value:!0});var o=r(71893),a=r(61642);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return h}});var i=r(87677),d=r(40544),u=r(74848),s=d._(r(96540)),l=i._(r(2495)),c=r(51432),f=r(27592),p=r(42452);function h(e){void 0===e&&(e=!1);var t=[(0,u.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function v(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(84636);var _=["name","httpEquiv","charSet","itemProp"];function y(e,t){var r,a,i,d,u=t.inAmpMode;return e.reduce(v,[]).reverse().concat(h(u).reverse()).filter((r=new Set,a=new Set,i=new Set,d={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var u=0,s=_.length;u<s;u++){var l=_[u];if(e.props.hasOwnProperty(l)){if("charSet"===l)i.has(l)?t=!1:i.add(l);else{var c=e.props[l],f=d[l]||new Set;("name"!==l||!n)&&f.has(c)?t=!1:(f.add(c),d[l]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!u&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=o._({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,s.default.cloneElement(e,a)}return s.default.cloneElement(e,{key:r})})}var m=function(e){var t=e.children,r=(0,s.useContext)(c.AmpStateContext),n=(0,s.useContext)(f.HeadManagerContext);return(0,u.jsx)(l.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,p.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"===a._(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2495:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var n=r(96540),o=n.useLayoutEffect,a=n.useEffect;function i(e){var t=e.headManager,r=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},84636:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(56194)),_N_E=e.O()}]);