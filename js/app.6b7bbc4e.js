(function(){"use strict";var n={5882:function(n,e,t){var a=t(5130),r=t(6768);const o={id:"app"};function i(n,e,t,a,i,c){const u=(0,r.g2)("NavComponent"),s=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(u),(0,r.bF)(s)])}const c=n=>((0,r.Qi)("data-v-c9b9ee46"),n=n(),(0,r.jt)(),n),u={class:"navbar p-5",role:"navigation","aria-label":"main navigation"},s={class:"navbar-brand signal-brand mr-3 pr-3"},d={class:"navbar-item"},l={class:"square-line"},f=c((()=>(0,r.Lk)("span",{class:"brand-name accent-line"},"SIGNAL",-1))),v=c((()=>(0,r.Lk)("a",{class:"navbar-burger",role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbar"},[(0,r.Lk)("span",{"aria-hidden":"true"}),(0,r.Lk)("span",{"aria-hidden":"true"}),(0,r.Lk)("span",{"aria-hidden":"true"}),(0,r.Lk)("span",{"aria-hidden":"true"})],-1))),b={class:"navbar-menu",id:"navbar"},p=(0,r.Fv)('<div class="navbar-start" data-v-c9b9ee46><a class="navbar-item" data-v-c9b9ee46>Overview</a><a class="navbar-item" data-v-c9b9ee46>Ledger</a><a class="navbar-item" data-v-c9b9ee46>Payments</a><a class="navbar-item" data-v-c9b9ee46>Insights</a></div>',1),m={class:"navbar-end"},h={class:"navbar-item"},g={class:"account buttons"},k={class:"button search"},y={class:"button notifications is-active"},L={class:"button avatar"},w=c((()=>(0,r.Lk)("div",{class:"avatar-img"},null,-1)));function C(n,e,t,a,o,i){const c=(0,r.g2)("font-awesome-icon");return(0,r.uX)(),(0,r.CE)("nav",u,[(0,r.Lk)("div",s,[(0,r.Lk)("div",d,[(0,r.Lk)("div",l,[(0,r.bF)(c,{icon:["fas","shekel-sign"],rotation:90})]),f]),v]),(0,r.Lk)("div",b,[p,(0,r.Lk)("div",m,[(0,r.Lk)("div",h,[(0,r.Lk)("div",g,[(0,r.Lk)("a",k,[(0,r.bF)(c,{icon:"search"})]),(0,r.Lk)("a",y,[(0,r.bF)(c,{icon:"bell"})]),(0,r.Lk)("a",L,[w,(0,r.bF)(c,{icon:"caret-down"})])])])])])])}var E={name:"NavComponent",data(){return{}},methods:{},computed:{},props:{},components:{}},O=t(1241);const S=(0,O.A)(E,[["render",C],["__scopeId","data-v-c9b9ee46"]]);var j=S,A={components:{NavComponent:j}};const N=(0,O.A)(A,[["render",i]]);var F=N,T=t(1387);const _=[{path:"/",name:"dashboard",component:()=>t.e(945).then(t.bind(t,9594))}],x=(0,T.aE)({history:(0,T.LA)("/signal/"),routes:_});var P=x,I=t(8950),B=t(2353),q=t(92),M=t(292);I.Yv.add(B.X7I,q.C91);const X=(0,a.Ef)(F);X.component("font-awesome-icon",M.gc),X.use(P).mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return n[a].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,a,r,o){if(!a){var i=1/0;for(d=0;d<n.length;d++){a=n[d][0],r=n[d][1],o=n[d][2];for(var c=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](a[u])}))?a.splice(u--,1):(c=!1,o<i&&(i=o));if(c){n.splice(d--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[a,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,a){return t.f[a](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/dashboard.3326be67.js"}}(),function(){t.miniCssF=function(n){return"css/dashboard.377b5dcb.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="Signal:";t.l=function(a,r,o,i){if(n[a])n[a].push(r);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==e+o){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",e+o),c.src=a),n[a]=[r];var f=function(e,t){c.onerror=c.onload=null,clearTimeout(v);var r=n[a];if(delete n[a],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(n){return n(t)})),e)return e(t)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/signal/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,a,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var c=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&t.type,c=t&&t.target&&t.target.href||e,u=new Error("Loading CSS chunk "+n+" failed.\n("+a+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=c,i.href=e,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},e=function(n,e){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var r=t[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===n||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===n||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=t.miniCssF(a),c=t.p+i;if(e(i,c))return r();n(a,c,null,r,o)}))},r={524:0};t.f.miniCss=function(n,e){var t={945:1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=a(n).then((function(){r[n]=0}),(function(e){throw delete r[n],e})))}}}(),function(){var n={524:0};t.f.j=function(e,a){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(t,a){r=n[e]=[t,a]}));a.push(r[2]=o);var i=t.p+t.u(e),c=new Error,u=function(a){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,a){var r,o,i=a[0],c=a[1],u=a[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var d=u(t)}for(e&&e(a);s<i.length;s++)o=i[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(d)},a=self["webpackChunkSignal"]=self["webpackChunkSignal"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(5882)}));a=t.O(a)})();
//# sourceMappingURL=app.6b7bbc4e.js.map