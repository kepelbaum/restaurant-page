(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(601),i=n.n(r),a=n(314),o=n.n(a),u=n(417),c=n.n(u),s=new URL(n(38),n.b),l=o()(i()),d=c()(s);l.push([e.id,`body {\n    color: red;\n    background: url(${d}); \n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 100px;\n}\n\n#content {\n    background-color: rgba(15, 10, 3, 0.8);\n    width: 40vw;\n    height: 60vh;\n    color: antiquewhite;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 40px;\n    align-items: center;\n    text-wrap: wrap;\n}\n\n#content div {\n    max-width: 20vw;\n    font-size: 1.2rem;\n}\n\nbutton {\n    color: red;\n    width: 120px;\n    height: 60px;\n    font-size: 20px;\n}\n\nnav {\n    display: flex;\n    justify-content: space-between; \n    gap: 30px;\n}\n\n`,""]);const p=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var p=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var u=n(a[o]);t[u].references--}for(var c=r(e,i),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},38:(e,t,n)=>{e.exports=n.p+"00cd7d87015b8b298551.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),i=n.n(r),a=n(659),o=n.n(a),u=n(56),c=n.n(u),s=n(540),l=n.n(s),d=n(113),p=n.n(d),m=n(365),f={};function v(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("h1"),n=document.createElement("h2"),r=document.createElement("div");t.textContent="La Baguette Restaurant",n.textContent="Our restaurant is ABSOLUTELY WONDERFUL!!!",r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.appendChild(t),e.appendChild(n),e.appendChild(r)}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals,n(38),console.log("Hello webpack!"),document.querySelector("#content");const h=document.querySelector(".home"),g=document.querySelector(".menu"),b=document.querySelector(".about");v(),h.addEventListener("click",(()=>{v()})),g.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("h1"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");t.textContent="Signature Chicken",n.textContent="CHICKEN PICCATA: Capers, Spinach, Lemon Butter with Spaghetti Aglio Olio (1030 cal)",a.textContent="CHICKEN MARSALA: Mushrooms & Marsala Sauce with Spaghetti Aglio Olio (970 cal)",r.textContent="CHICKEN FRANCESE: Parmesan-Crusted, Lemon Butter, Crispy Vesuvio Potatoes, Asparagus (910 cal)",i.textContent="CHICKEN PARMESAN: Provolone & Marinara Sauce with Spaghetti Marinara (1300 cal)",e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(a)}()})),b.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="";const t=document.createElement("div"),n=document.createElement("div");document.createElement("div"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed risus pretium. Faucibus purus in massa tempor nec feugiat nisl. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Eu augue ut lectus arcu bibendum at varius. Cursus vitae congue mauris rhoncus. Faucibus in ornare quam viverra orci sagittis. Sagittis id consectetur purus ut faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim. Aliquet enim tortor at auctor urna nunc id. Nibh praesent tristique magna sit amet purus gravida quis blandit.",n.textContent="Id interdum velit laoreet id donec. Accumsan in nisl nisi scelerisque eu ultrices. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Rhoncus urna neque viverra justo. Integer eget aliquet nibh praesent tristique. Ultrices in iaculis nunc sed augue. Porta non pulvinar neque laoreet suspendisse. Commodo nulla facilisi nullam vehicula ipsum a arcu. Suspendisse potenti nullam ac tortor vitae. Faucibus turpis in eu mi bibendum neque egestas. Nisl rhoncus mattis rhoncus urna. Donec et odio pellentesque diam volutpat commodo sed. Quam pellentesque nec nam aliquam sem. Id donec ultrices tincidunt arcu. Pellentesque habitant morbi tristique senectus. Adipiscing at in tellus integer feugiat scelerisque varius. Maecenas sed enim ut sem viverra. Mauris sit amet massa vitae tortor condimentum lacinia.",e.appendChild(t),e.appendChild(n)}()}))})()})();