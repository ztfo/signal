(function(){"use strict";var n={4454:function(n,e,t){var r=t(5130),a=t(6768);const o={id:"app"};function i(n,e,t,r,i,u){const s=(0,a.g2)("NavComponent"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(s),(0,a.bF)(c)])}const u={class:"navbar",role:"navigation","aria-label":"main navigation"},s=(0,a.Lk)("div",{class:"navbar-brand"},[(0,a.Lk)("a",{class:"navbar-item",href:"/"},[(0,a.Lk)("span",null,"signal")]),(0,a.Lk)("a",{class:"navbar-burger",role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[(0,a.Lk)("span",{"aria-hidden":"true"}),(0,a.Lk)("span",{"aria-hidden":"true"}),(0,a.Lk)("span",{"aria-hidden":"true"}),(0,a.Lk)("span",{"aria-hidden":"true"})])],-1),c={class:"navbar-menu",id:"navbar"},l=(0,a.Fv)('<div class="navbar-start"><a class="navbar-item">Overview</a><a class="navbar-item">Ledger</a><a class="navbar-item">Payments</a><a class="navbar-item">Insights</a></div>',1),f={class:"navbar-end"},d={class:"navbar-item"},v=(0,a.Lk)("div",{class:"buttons"},null,-1),p={class:"button search"},b={class:"button notifications"},m={class:"button avatar"},h=(0,a.Lk)("div",{class:"avatar-img"},"z",-1),g={class:"avatar-name"},k=(0,a.Lk)("span",null,"ztfo",-1);function y(n,e,t,r,o,i){const y=(0,a.g2)("font-awesome-icon");return(0,a.uX)(),(0,a.CE)("nav",u,[s,(0,a.Lk)("div",c,[l,(0,a.Lk)("div",f,[(0,a.Lk)("div",d,[v,(0,a.Lk)("a",p,[(0,a.bF)(y,{icon:"search"})]),(0,a.Lk)("a",b,[(0,a.bF)(y,{icon:"bell"})]),(0,a.Lk)("a",m,[h,(0,a.Lk)("div",g,[k,(0,a.bF)(y,{icon:"caret-down"})])])])])])])}var L={name:"NavComponent",data(){return{}},methods:{},computed:{},props:{},components:{}},w=t(1241);const C=(0,w.A)(L,[["render",y]]);var E=C,O={components:{NavComponent:E}};const S=(0,w.A)(O,[["render",i]]);var j=S,A=t(1387);const N=[{path:"/",name:"dashboard",component:()=>t.e(945).then(t.bind(t,5900))}],F=(0,A.aE)({history:(0,A.LA)("/"),routes:N});var x=F,T=t(8950),P=t(2353),_=t(92),B=t(292);T.Yv.add(P.X7I,_.C91);const I=(0,r.Ef)(j);I.component("font-awesome-icon",B.gc),I.use(x).mount("#app")}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return n[r].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],a=n[l][1],o=n[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){n.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,a,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/dashboard.5166bb99.js"}}(),function(){t.miniCssF=function(n){return"css/dashboard.84527916.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="Signal:";t.l=function(r,a,o,i){if(n[r])n[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+o),u.src=r),n[r]=[a];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(v);var a=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(n){return n(t)})),e)return e(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)a();else{var r=t&&t.type,u=t&&t.target&&t.target.href||e,s=new Error("Loading CSS chunk "+n+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var a=t[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===n||o===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===n||o===e)return a}},r=function(r){return new Promise((function(a,o){var i=t.miniCssF(r),u=t.p+i;if(e(i,u))return a();n(r,u,null,a,o)}))},a={524:0};t.f.miniCss=function(n,e){var t={945:1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=r(n).then((function(){a[n]=0}),(function(e){throw delete a[n],e})))}}}(),function(){var n={524:0};t.f.j=function(e,r){var a=t.o(n,e)?n[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(t,r){a=n[e]=[t,r]}));r.push(a[2]=o);var i=t.p+t.u(e),u=new Error,s=function(r){if(t.o(n,e)&&(a=n[e],0!==a&&(n[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};t.l(i,s,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(s)var l=s(t)}for(e&&e(r);c<i.length;c++)o=i[c],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},r=self["webpackChunkSignal"]=self["webpackChunkSignal"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4454)}));r=t.O(r)})();
//# sourceMappingURL=app.1b17a2fa.js.map