!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=n(2),a=n(4);n.d(t,"h",function(){return o.a}),n.d(t,"app",function(){return r.a}),n.d(t,"Router",function(){return a.a})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(6),a=n(5);t.App=function(e,t){var n=e.todos,l=e.filterType,u=e.actions,c=function(e){u.addTodo(e.target.value)};return o.h("div",{class:"todoapp"},o.h("header",{className:"header"},o.h("h1",null,"Todos"),o.h("input",{className:"new-todo",placeholder:"What needs to be done?",onchange:function(e){return c(e)},autoFocus:!0})),n.length>0?o.h("section",{class:"main"},o.h("input",{class:"toggle-all",type:"checkbox"}),o.h("label",{for:"toggle-all"},"Mark all as complete"),o.h("ul",{class:"todo-list"},n.filter(function(e){switch(l){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}).map(function(e,t){return o.h(r.TodoItem,{actions:{toggle:function(){return u.toggleTodo(t)},del:function(){return u.delTodo(t)}},key:t,value:e.value,completed:e.completed})})),o.h(a.Footer,{action:function(e){return u.router.go(e)},filterType:l})):"")}},function(e,t,n){"use strict";t.a=function(e){function t(e,n,l){Object.keys(n||[]).map(function(u){var c=n[u],i=l?l+"."+u:u;"function"==typeof c?e[u]=function(e){var t=c(p,m,o("action",{name:i,data:e}).data,o);if(null==t||"function"==typeof t.then)return t;r(p=a(p,o("update",t)),v)}:t(e[u]||(e[u]={}),c,i)})}function n(){r(p,v),o("loaded")}function o(e,t){return(g[e]||[]).map(function(e){var n=e(p,m,t,o);null!=n&&(t=n)}),t}function r(t,n){h=f(e.root||(e.root=document.body),h,d,d=o("render",n)(t,m))}function a(e,t){var n={};if("object"!=typeof t||Array.isArray(t))return t;for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n}function l(e,t){if("string"==typeof e)var n=document.createTextNode(e);else{for(var n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag),o=0;o<e.children.length;)n.appendChild(l(e.children[o++],t));for(var o in e.data)"oncreate"===o?e.data[o](n):u(n,o,e.data[o])}return n}function u(e,t,n,o){if("key"===t);else if("style"===t)for(var r in a(o,n=n||{}))e.style[r]=n[r]||"";else{try{e[t]=n}catch(e){}"function"!=typeof n&&(n?e.setAttribute(t,n):e.removeAttribute(t))}}function c(e,t,n){for(var o in a(t,n)){var r=n[o],l="value"===o||"checked"===o?e[o]:t[o];"onupdate"===o&&r?r(e):r!==l&&u(e,o,r,l)}}function i(e){if(e&&(e=e.data))return e.key}function s(e,t,n){function o(){e.removeChild(t)}(n.data&&n.data.onremove||o)(t,o)}function f(e,t,n,o){if(null==n)t=e.insertBefore(l(o),t);else if(o.tag&&o.tag===n.tag){c(t,n.data,o.data);for(var r=o.children.length,a=n.children.length,u={},d=[],h={},p=0;p<a;p++){var v=t.childNodes[p];d[p]=v;var m=n.children[p],g=i(m);null!=g&&(u[g]=[v,m])}for(var p=0,y=0;y<r;){var v=d[p],m=n.children[p],b=o.children[y],g=i(m);if(h[g])p++;else{var T=i(b),k=u[T]||[];null==T?(null==g&&(f(t,v,m,b),y++),p++):(g===T?(f(t,k[0],k[1],b),p++):k[0]?(t.insertBefore(k[0],v),f(t,k[0],k[1],b)):f(t,v,null,b),y++,h[T]=b)}}for(;p<a;){var m=n.children[p],g=i(m);null==g&&s(t,d[p],m),p++}for(var p in u){var k=u[p],A=k[1];h[A.data.key]||s(t,k[0],A)}}else if(o!==n){var p=t;e.replaceChild(t=l(o),p)}return t}for(var d,h,p={},v=e.view,m={},g={},y=-1,b=e.plugins||[];y<b.length;y++){var T=b[y]?b[y](e):e;null!=T.state&&(p=a(p,T.state)),t(m,T.actions),Object.keys(T.events||[]).map(function(e){g[e]=(g[e]||[]).concat(T.events[e])})}"l"!==document.readyState[0]?n():addEventListener("DOMContentLoaded",n)}},function(e,t,n){"use strict";t.a=function(e,t){for(var n,o=[],r=[],a=arguments.length;a-- >2;)o[o.length]=arguments[a];for(;o.length;)if(Array.isArray(n=o.pop()))for(var a=n.length;a--;)o[o.length]=n[a];else null!=n&&!0!==n&&!1!==n&&("number"==typeof n&&(n+=""),r[r.length]=n);return"string"==typeof e?{tag:e,data:t||{},children:r}:e(t,r)}},function(e,t,n){"use strict";t.a=function(e){function t(t){var n,o={};for(var r in e.view){var a=[];n||"*"===r||t.replace(RegExp("^"+r.replace(/\//g,"\\/").replace(/:([\w]+)/g,function(e,t){return a.push(t),"([-\\w]+)"})+"/?$","g"),function(){for(var e=1;e<arguments.length-2;)o[a.shift()]=arguments[e++];n=r})}return{match:n||"*",params:o}}return{state:{router:t(location.pathname)},actions:{router:{match:function(e,n,o,r){return{router:r("route",t(o))}},go:function(e,t,n){history.pushState({},"",n),t.router.match(n.split("?")[0])}}},events:{loaded:function(e,t){function n(){t.router.match(location.pathname)}n(),addEventListener("popstate",n)},render:function(e,t,n){return n[e.router.match]}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.Footer=function(e){var t=e?e.filterType:null,n=e.action;return o.h("footer",{class:"footer"},o.h("span",{class:"todo-count"},o.h("strong",null,"0")," item left"),o.h("ul",{class:"filters"},o.h("li",null,o.h("a",{className:t?null:"selected",href:"#",onclick:function(){return n("/")}},"All")),o.h("li",null,o.h("a",{className:"active"===t?"selected":null,href:"#",onclick:function(){return n("/active")}},"Active")),o.h("li",null,o.h("a",{className:"active"===t?"completed":null,href:"#",onclick:function(){return n("/completed")}},"Completed"))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.TodoItem=function(e){var t=e.completed,n=void 0!==t&&t,r=e.value,a=e.actions;return o.h("li",{className:n?"completed":null},o.h("div",{class:"view"},o.h("input",{class:"toggle",type:"checkbox",checked:n,onchange:function(){return a.toggle()}}),o.h("label",null,r),o.h("button",{class:"destroy",onclick:function(){return a.del()}})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(1);o.app({state:{todos:[]},view:{"/":function(e,t){return o.h("div",null,o.h(r.App,{todos:e.todos,actions:t}),o.h("footer",{class:"info"},o.h("p",null,"Double-click to edit a todo"),o.h("p",null,"Template by ",o.h("a",{href:"http://sindresorhus.com"},"Sindre Sorhus")),o.h("p",null,"Created by ",o.h("a",{href:"http://todomvc.com"},"Azzgo")),o.h("p",null,"Base On Tech ",o.h("a",{href:"https://github.com/hyperapp/hyperapp"},"HyperApp"))))},"/:filterType":function(e,t){return o.h("div",null,o.h(r.App,{todos:e.todos,filterType:e.router.params.filterType,actions:t}),o.h("footer",{class:"info"},o.h("p",null,"Double-click to edit a todo"),o.h("p",null,"Template by ",o.h("a",{href:"http://sindresorhus.com"},"Sindre Sorhus")),o.h("p",null,"Created by ",o.h("a",{href:"http://todomvc.com"},"Azzgo")),o.h("p",null,"Base On Tech ",o.h("a",{href:"https://github.com/hyperapp/hyperapp"},"HyperApp"))))}},events:{},actions:{addTodo:function(e,t,n){return{todos:e.todos.concat([{value:n,completed:!1}])}},delTodo:function(e,t,n){return{todos:e.todos.filter(function(e,t){return t!==n})}},toggleTodo:function(e,t,n){return{todos:e.todos.map(function(e,t){if(n===t)return{value:e.value,completed:!e.completed}})}}},plugins:[o.Router],root:document.body})}]);