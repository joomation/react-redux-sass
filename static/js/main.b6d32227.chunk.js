(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){"use strict";t.d(n,"c",function(){return c}),t.d(n,"a",function(){return i}),t.d(n,"b",function(){return u});var o=t(19),r="counter/INCREMENT",a="counter/DECREMENT",c=function(){return{type:r}},i=function(){return{type:a}},l={number:0};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;switch((arguments.length>1?arguments[1]:void 0).type){case r:return Object(o.a)({},e,{number:e.number+1});case a:return Object(o.a)({},e,{number:e.number-1});default:return e}}},30:function(e,n,t){e.exports=t(42)},39:function(e,n,t){},40:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(12),c=t.n(a),i=t(9),l=t(26),u=Object(i.b)({counter:l.b}),s=t(27),d=(t(39),t(40),t(20)),f=t(21),m=t(23),b=t(22),h=t(24),v=t(10),w=function(e){function n(){return Object(d.a)(this,n),Object(m.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{exact:!0,activeClassName:"active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(v.b,{activeClassName:"active",to:"/counter"},"Counter"))))}}]),n}(o.Component),E=t(8),p=Object(o.lazy)(function(){return t.e(4).then(t.bind(null,43))}),g=Object(o.lazy)(function(){return t.e(3).then(t.bind(null,44))});var O=function(){return r.a.createElement(v.a,{basename:"/react-redux-scss"},r.a.createElement(w,null),r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:p}),r.a.createElement(E.a,{path:"/counter",component:g}))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),N=Object(i.c)(u,k);c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-redux-scss",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-redux-scss","/service-worker.js");y?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(n,e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.b6d32227.chunk.js.map