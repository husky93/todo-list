(()=>{"use strict";var e={358:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const d=a},774:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,":root {\n    --bg-color: #252525;\n    --bg-color-dark: #1D1D1D;\n    --bg-color-light: #363636;\n    --text-color: #E6E6E6;\n    --text-color-dark: #A7A7A7;\n    --primary-color: #D64540;\n    --success-color: #40D674;\n    --medium-color: #D6BE56;\n\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    position: relative;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    color: var(--text-color);\n    background-color: var(--bg-color-dark);\n}\n\n.wrapper {\n    max-width: 1296px;\n    margin: 0 auto;\n}\n\naside, footer .wrapper, .content {\n    padding: 36px 48px;\n}\n\n.content {\n    flex: 1 70%;\n    background-color: var(--bg-color);\n}\n\n.btn {\n    cursor: pointer;\n    padding: 8px 18px;\n    border-radius: 6px;\n    font-weight: 500;\n    font-size: 15px;\n    display: flex;\n    align-items: center;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    color: var(--text-color);\n}\n\n.btn--primary {\n    border: 2px var(--bg-color-light) solid;\n}\n\n.btn--primary:hover {\n    background-color: var(--bg-color-light);\n}\n\n\n/* Header */\n\n\nh1 {\n    font-size: 36px;\n    font-weight: 700;\n    font-family: 'Work Sans', sans-serif;\n    padding: 36px 48px;\n}\n\n/* Main */\n\n.main {\n    flex: 1;\n    display: flex;\n}\n\n.wrapper--main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n@media screen and (min-width: 768px) {\n    .wrapper--main {\n        flex-direction: row;\n    }\n}\n\n\n/* Menu */\n.menu {\n    background-color: var(--bg-color-dark);\n    color: var(--text-color-dark);\n    font-weight: 500;\n    font-size: 17px;\n    z-index: 5;\n    flex: 1 30%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 24px;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.link {\n    display: flex;\n    align-items: center;\n    border-radius: 6px;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.link:hover {\n    background-color: var(--bg-color-light);\n    color: var(--text-color);\n}\n\n.project-link {\n    padding: 12px;\n    cursor: pointer;\n}\n\n.link-number {\n    flex-shrink: 0;\n    font-size: 11px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--primary-color);\n    width: 16px;\n    height: 16px;\n    border-radius: 100%;\n    color: var(--text-color);\n    margin-right: 12px;\n}\n\n/* Todo */\n\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 18px;\n    border-radius: 6px;\n    width: 100%;\n    border: 3px var(--bg-color-light) solid;\n}\n\n.completed {\n    text-decoration: line-through;\n}\n\n.todo-details {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 24px;\n}\n\n.todo-ui {\n    display: flex;\n    align-self: center;\n    gap: 8px;\n}\n\n.todo-button {\n    cursor: pointer;\n    position: relative;\n}\n\n.tooltip {\n    font-size: 14px;\n    font-weight: 400;\n    opacity: 0;\n    position: absolute;\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--bg-color-light);\n    color: var(--text-color);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    z-index: 1;\n    top: 100%;\n    left: 50%;\n    margin-left: -60px;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px var(--text-color-dark) solid;\n}\n\n.tooltip::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;  /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent var(--text-color-dark) transparent;\n  }\n\n.todo-button:hover .tooltip {\n    opacity: 1;\n    visibility: visible;\n}\n\n.todo-date {\n    font-size: 14px;\n    margin: 0;\n}\n\n.form-check {\n    display: flex;\n    align-items: center;\n    font-weight: 400;\n    font-size: 15px;\n    gap: 8px;\n}\n\n.form-check label {\n    position: relative;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;  \n    word-break: break-all;\n    overflow: hidden;\n    hyphens: auto;\n    text-align: left;\n    margin-right: 12px;\n}\n\n.priority-low {\n    border-left: 3px var(--success-color) solid;\n}\n\n.priority-medium {\n    border-left: 3px var(--medium-color) solid;\n}\n\n.priority-high {\n    border-left: 3px var(--primary-color) solid;\n}\n\n@media screen and (min-width: 768px) {\n  .todo {\n      flex-direction: row;\n      justify-content: space-between;\n      padding: 12px;\n  }\n  .todo-details {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .todo-ui {\n    align-self: initial;\n  }\n}\n\n/* Footer */\n\nfooter {   \n    z-index: 10;\n}\n\nfooter .wrapper {\n    background-color: var(--bg-color-light);\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n}\n\n.gh-link {\n    color: var(--text-color);\n}\n\n\n/* Modal */\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 999;\n}\n\n.modal-overlay {\n    width: 100vw;\n    min-height: 100vh;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal-body {\n    background-color: var(--bg-color);\n    width: 50%;\n    height: 50%;\n    min-width: 400px;\n    min-height: 400px;\n    position: relative;\n    padding: 36px 48px;\n    border-radius: 6px;\n    -webkit-box-shadow: 7px 7px 13px -6px rgba(0, 0, 0, 0.71);\n    -moz-box-shadow: 7px 7px 13px -6px rgba(0, 0, 0, 0.71);\n    box-shadow: 7px 7px 13px -6px rgba(0, 0, 0, 0.71);\n    overflow: hidden;\n}\n\n.modal-close {\n    cursor: pointer;\n    position: absolute;\n    right: 12px;\n    top: 12px;\n}\n\n.modal-title {\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 38px;\n    position: relative;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;  \n    word-break: break-all;\n    overflow: hidden;\n    hyphens: auto;\n    text-align: left;\n}\n\n.modal-body .details {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.modal-label {\n    margin-top: 12px;\n    font-size: 13px;\n    font-weight: 300;\n}\n\n.modal-description {\n    margin-bottom: 12px;\n    display: -webkit-box;\n    -webkit-line-clamp: 11;\n    -webkit-box-orient: vertical;  \n    word-break: break-all;\n    overflow: hidden;\n    hyphens: auto;\n    text-align: left;\n}\n\n.form--add, .form--edit, .form--project {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 12px;\n    height: 100%;\n}\n\n.form--project {\n    justify-content: flex-start;\n}\n\n.input-group {\n    font-size: 15px;\n}\n\n.input-group:not(.radio-group) {\n    display: flex;\n    flex-direction: column;\n    width:100%;\n    gap: 12px;\n}\n\n.radio-group {\n    margin-bottom: 6px;\n}\n\n.radio-group input {\n    margin-right: 6px;\n}\n\n.radio-group label {\n    font-weight: 500;\n}\n\n.textarea-group:not(.radio-group) {\n    align-items: flex-start;\n}\n\n.input--edit:not(.radio) {\n    background-color: var(--bg-color-light);\n    border-radius: 6px;\n    border: none;\n    padding: 8px 18px;\n    color: var(--text-color);\n    font-size: 15px;\n    font-weight: 400;\n    font-family: 'Roboto', sans-serif;\n}\n\nlegend {\n    font-size: 15px;\n    margin-bottom: 6px;\n}\n\ntextarea {\n    min-height: 120px;\n    width: 100%;\n}\n\n.add-submit, .edit-submit, .project-submit {\n    background-color: var(--bg-color-dark);\n    align-self: flex-end;\n}\n\n::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var l=e[d],c=o.base?l[0]+o.base:l[0],s=i[c]||0,p="".concat(c," ").concat(s);i[c]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var l=o(e,r),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),d=n(565),l=n.n(d),c=n(216),s=n.n(c),p=n(589),u=n.n(p),m=n(358),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=n(774),h={};function b(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e,t,n){var o,r;return b(1,arguments),y(t)?r=t:n=t,new Intl.DateTimeFormat(null===(o=n)||void 0===o?void 0:o.locale,r).format(e)}function y(e){return void 0!==e&&!("locale"in e)}h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),t()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals,Math.pow(10,8);var x=36e5;function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function L(e,t){b(1,arguments);var n=t||{},o=null==n.additionalDigits?2:w(n.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,i=D(e);if(i.date){var a=S(i.date,o);r=C(a.restDateString,a.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var d,l=r.getTime(),c=0;if(i.time&&(c=P(i.time),isNaN(c)))return new Date(NaN);if(!i.timezone){var s=new Date(l+c),p=new Date(0);return p.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),p.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),p}return d=A(i.timezone),isNaN(d)?new Date(NaN):new Date(l+c+d)}var j={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},E=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,T=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,k=/^([+-])(\d{2})(?::?(\d{2}))?$/;function D(e){var t,n={},o=e.split(j.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?t=o[0]:(n.date=o[0],t=o[1],j.timeZoneDelimiter.test(n.date)&&(n.date=e.split(j.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=j.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function S(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{year:null===i?r:100*i,restDateString:e.slice((o[1]||o[2]).length)}}function C(e,t){if(null===t)return new Date(NaN);var n=e.match(E);if(!n)return new Date(NaN);var o=!!n[4],r=N(n[1]),i=N(n[2])-1,a=N(n[3]),d=N(n[4]),l=N(n[5])-1;if(o)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,l)?function(e,t,n){var o=new Date(0);o.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(t,d,l):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(M[t]||(z(e)?29:28))}(t,i,a)&&function(e,t){return t>=1&&t<=(z(e)?366:365)}(t,r)?(c.setUTCFullYear(t,i,Math.max(r,a)),c):new Date(NaN)}function N(e){return e?parseInt(e):1}function P(e){var t=e.match(T);if(!t)return NaN;var n=q(t[1]),o=q(t[2]),r=q(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,o,r)?n*x+6e4*o+1e3*r:NaN}function q(e){return e&&parseFloat(e.replace(",","."))||0}function A(e){if("Z"===e)return 0;var t=e.match(k);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(o*x+6e4*r):NaN}var M=[31,null,31,30,31,30,31,31,30,31,30,31];function z(e){return e%400==0||e%4==0&&e%100!=0}const O=(e,[...t])=>{const n=t;let o=e;return{addTodo:e=>{n.push(e)},removeTodo:e=>{n.splice(e,1)},editTodo:(e,t,o,r,i)=>{n[e].title=t,n[e].description=o,n[e].dueDate=r,n[e].priority=i},get title(){return o},set title(e){o=e},get todoList(){return n}}},U={currentProject:0,projectList:[]},I=(()=>{const e=document.querySelector("main"),t=document.querySelector(".wrapper--main");let n=null;const o=([...e],t,n)=>{const o=document.createElement(`${n}`);return e.forEach((e=>o.classList.add(e))),t&&t.appendChild(o),o},r=([...e],t,n)=>{const o=document.createElement("p");e.forEach((e=>o.classList.add(e))),o.textContent=n,t.appendChild(o)},i=([...e],t,n)=>{const o=document.createElement("a");return e.forEach((e=>o.classList.add(e))),o.innerHTML=n,t.appendChild(o),o},a=([...e],t,n)=>{const o=document.createElement("span");e.forEach((e=>o.classList.add(e))),o.textContent=n,t.appendChild(o)},d=([...e],t,n,o)=>{const r=document.createElement("button");e.forEach((e=>r.classList.add(e))),r.textContent=n,o&&(r.type=o),t.appendChild(r)},l=e=>{const t=document.querySelector(".modal-close");for(;e.childElementCount>1;)e.lastElementChild!==t&&e.removeChild(e.lastElementChild)},c=([...e],t,n,r,i,a,d)=>{const l=o(["input-group"],t,"div"),c=document.createElement("input"),s=document.createElement("label");return e.forEach((e=>c.classList.add(e))),d&&(c.value=d),c.type=n,c.name=r,c.id=r,c.required=!!a,s.htmlFor=r,s.textContent=i,l.append(s,c),c},s=([...e],t,n,r,i,a)=>{const d=o(["input-group","radio-group"],t,"div"),l=document.createElement("input"),c=document.createElement("label");return e.forEach((e=>l.classList.add(e))),l.type="radio",l.name=n,l.id=r,l.required=!!a,c.htmlFor=n,c.textContent=i,d.append(l,c),l},p=([...e],t,n,r,i)=>{const a=o(["input-group","textarea-group"],t,"div"),d=document.createElement("textarea"),l=document.createElement("label");return e.forEach((e=>d.classList.add(e))),d.name=n,d.id=n,d.required=!!i,l.htmlFor=n,l.textContent=r,d.style.resize="none",a.append(l,d),d};return{get currentTodoList(){return n},createTemplate:()=>{(()=>{const t=document.createElement("footer"),n=o(["wrapper"],t,"div");r(["text--footer"],n,"Created by"),i(["gh-link"],n,"husky93").href="https://github.com/husky93",e.after(t)})(),(()=>{const e=o(["menu"],t,"aside"),n=o(["navbar"],e,"nav");(e=>{o(["project-list"],e,"div")})(o(["projects-tab"],n,"div"))})(),o(["content"],t,"div"),I.renderProjectList(),I.renderTodos(U.projectList[0].todoList),(()=>{const e=document.querySelector("footer"),t=o(["wrapper","modal"],null,"div"),n=o(["modal-overlay"],t,"div"),r=o(["modal-body"],n,"div"),d=i(["close","modal-close"],r,"");a(["material-symbols-outlined"],d,"close"),t.style.display="none",e.after(t)})(),(()=>{const e=document.querySelector(".menu"),t=i(["project-add","btn","btn--primary"],e,"Add project");a(["icon--add","material-symbols-outlined"],t,"add")})()},renderProjectList:()=>{const e=document.querySelector(".project-list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);U.projectList.forEach(((t,n)=>{const a=o(["link"],e,"div");i(["project-link"],a,t.title).dataset.id=n,r(["link-number"],a,t.todoList.length)}))},renderTodos:e=>{const t=document.querySelector(".content");for(n=e;t.lastElementChild;)t.removeChild(t.lastElementChild);e.forEach((e=>{((e,t)=>{const n=v(L(e.dueDate),{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"});let d;d=1===e.priority?"high":2===e.priority?"medium":"low";const l=o(["container","todo",`priority-${d}`],t,"div");(([...e],t,n,r,i)=>{const a=o(["form-check"],t,"div"),d=document.createElement("input"),l=document.createElement("label");e.forEach((e=>a.classList.add(e))),d.type="checkbox",d.id=i,r?(d.checked=!0,a.classList.add("completed")):d.checked=!1,l.textContent=n,l.htmlFor=i,a.append(d,l)})(["form-check"],l,e.title,e.isDone,e.id);const c=o(["todo-details"],l,"div");r(["todo-date"],c,n),((e,t)=>{const n=o(["todo-ui"],t,"div"),r=i(["todo-button","btn-details"],n,""),d=i(["todo-button","todo-delete"],n,""),l=i(["todo-button","todo-edit"],n,"");a(["material-symbols-outlined"],r,"visibility"),a(["material-symbols-outlined"],d,"delete"),a(["material-symbols-outlined"],l,"edit");const c=o(["tooltip"],r,"span"),s=o(["tooltip"],d,"span"),p=o(["tooltip"],l,"span");c.textContent="Show Details",s.textContent="Delete Todo",p.textContent="Edit Todo",r.dataset.id=e,d.dataset.id=e,l.dataset.id=e})(e.id,c)})(e,t)})),(()=>{const e=document.querySelector(".content"),t=i(["add","btn","btn--primary"],e,"Add Todo");a(["icon--add","material-symbols-outlined"],t,"add")})()},renderDetails:e=>{const t=document.querySelector(".modal-body"),n=v(L(e.dueDate),{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"});let i;i=1===e.priority?"High":2===e.priority?"Medium":"Low";const a=`Priority: ${i}`;l(t),(([...e],t,n,o)=>{const r=document.createElement(`${n}`);e.forEach((e=>r.classList.add(e))),r.textContent=o,t.appendChild(r)})(["modal-title"],t,"h3",e.title);const d=o(["modal-content","details"],t,"div");r(["modal-date"],d,`Due date: ${n}`),r(["modal-label"],d,"Description:"),r(["modal-description"],d,e.description),r(["modal-prio"],d,a),e.isDone&&r(["modal-isdone"],d,"Task is completed")},renderEdit:e=>{const t=document.querySelector(".modal-body");l(t);const n=o(["form--edit"],t,"form");n.method="post";const r=c(["input","input--edit"],n,"text","title","Title:",!0),i=p(["textarea","input--edit"],n,"description","Description:",!1),a=c(["input","input--edit"],n,"datetime-local","dueDate","Due date:",!0),u=document.createElement("fieldset"),m=document.createElement("legend");m.textContent="Select priority",u.appendChild(m);const f=s(["input","input--edit","radio"],u,"priority","low","Low",!0),g=s(["input","input--edit","radio"],u,"priority","medium","Medium",!0),h=s(["input","input--edit","radio"],u,"priority","high","High",!0);1===e.priority?h.checked=!0:2===e.priority?g.checked=!0:f.checked=!0,r.value=e.title,i.value=e.description,a.value=e.dueDate,n.appendChild(u),d(["btn","btn--primary","edit-submit"],n,"Submit changes","submit")},renderAddTodo:()=>{const e=document.querySelector(".modal-body");l(e);const t=o(["form--add"],e,"form");t.method="post",c(["input","input--edit"],t,"text","title","Title:",!0),p(["textarea","input--edit"],t,"description","Description:",!1),c(["input","input--edit"],t,"datetime-local","dueDate","Due date:",!0);const n=document.createElement("fieldset"),r=document.createElement("legend");r.textContent="Select priority",n.appendChild(r),s(["input","input--edit","radio"],n,"priority","low","Low",!0),s(["input","input--edit","radio"],n,"priority","medium","Medium",!0),s(["input","input--edit","radio"],n,"priority","high","High",!0),t.appendChild(n),d(["btn","btn--primary","add-submit"],t,"Add new Todo","submit")},renderAddProject:()=>{const e=document.querySelector(".modal-body");l(e);const t=o(["form--project"],e,"form");t.method="post",c(["input","input--edit"],t,"text","title","Project Title:",!0),d(["btn","btn--primary","project-submit"],t,"Add new project","submit")}}})(),F=I;function Z(e){b(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}const B=(e,t,n,o,r)=>{let i=e,a=t,d=n,l=o,c=!1;const s=r||String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,"");return{get title(){return i},set title(e){i=e},get description(){return a},set description(e){a=e},get dueDate(){return d},set dueDate(e){d=e},get priority(){return l},set priority(e){if(1!==e&&2!==e&&3!==e)throw new Error("Todo.priority setting new value failed / Must be integer 1, 2 or 3");l=e},get isDone(){return c},set isDone(e){if("boolean"!=typeof e)throw new Error("Todo.isDone setting new value failed / Wrong value type provided, must be boolean");c=e},get id(){return s}}},H=(()=>{const e=e=>e.sort(((e,t)=>function(e,t){b(2,arguments);var n=Z(e),o=Z(t),r=n.getTime()-o.getTime();return r<0?-1:r>0?1:r}(L(e.dueDate),L(t.dueDate))));return{showModal:()=>{document.querySelector(".modal").style.display="block"},closeModal:()=>{document.querySelector(".modal").style.display="none"},showDetails:e=>{let t=F.currentTodoList.filter((t=>t.id===e.target.parentElement.dataset.id));[t]=t,F.renderDetails(t),H.showModal()},deleteTodo:e=>{const{currentProject:t}=U;U.projectList[t].todoList.forEach(((n,o)=>{n.id===e.target.parentElement.dataset.id&&(U.projectList[t].removeTodo(o),F.renderTodos(U.projectList[t].todoList),F.renderProjectList())})),localStorage.setObject("projects",U)},editTodo:e=>{let t=F.currentTodoList.filter((t=>t.id===e.target.parentElement.dataset.id));[t]=t,F.renderEdit(t),H.showModal()},addTodo:()=>{F.renderAddTodo(),H.showModal()},addProject:()=>{F.renderAddProject(),H.showModal()},submitEdit:(t,n)=>{t.preventDefault();const{currentProject:o}=U,r=t.target.elements.title.value,i=t.target.elements.description.value,a=t.target.elements.dueDate.value,d=document.querySelector('input[name="priority"]:checked');let l;l="low"===d.id?3:"medium"===d?2:1,U.projectList[o].todoList.forEach(((t,d)=>{t.id===n.id&&(U.projectList[o].editTodo(d,r,i,a,l),e(U.projectList[o].todoList),F.renderTodos(U.projectList[o].todoList))})),H.closeModal(),localStorage.setObject("projects",U)},submitAddTodo:t=>{t.preventDefault();const{currentProject:n}=U,o=t.target.elements.title.value,r=t.target.elements.description.value,i=t.target.elements.dueDate.value,a=document.querySelector('input[name="priority"]:checked');let d;d="low"===a.id?3:"medium"===a?2:1;const l=B(o,r,i,d);U.projectList[n].todoList.push(l),e(U.projectList[n].todoList),F.renderTodos(U.projectList[n].todoList),F.renderProjectList(),H.closeModal(),localStorage.setObject("projects",U)},submitAddProject:e=>{e.preventDefault();const t=e.target.elements.title.value,n=O(t,[]);U.projectList.push(n);const o=U.projectList.length-1;U.currentProject=o,F.renderProjectList(),F.renderTodos(U.projectList[o].todoList),H.closeModal(),localStorage.setObject("projects",U)},switchProject:e=>{U.currentProject=e.target.dataset.id;const{currentProject:t}=U,{todoList:n}=U.projectList[t];F.renderTodos(n)},toggleCheckmark:e=>{const{currentProject:t}=U;U.projectList[t].todoList.forEach(((n,o)=>{n.id===e.target.id&&(U.projectList[t].todoList[o].isDone=!n.isDone,e.target.parentElement.classList.toggle("completed"))})),localStorage.setObject("projects",U)},sortByDate:e}})(),R=H,_={addInitialEventListeners:()=>{(()=>{const e=document.querySelector(".modal-close"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-body");e.addEventListener("click",R.closeModal),t.addEventListener("click",R.closeModal),n.onclick=e=>e.stopPropagation()})(),_.addBtnAddEventListeners(),_.addTodoUiEventListeners(),_.addSwitchProjectListeners(),_.addBtnProjectEventListeners()},addTodoUiEventListeners:()=>{const e=document.querySelectorAll(".btn-details"),t=document.querySelectorAll(".todo-delete"),n=document.querySelectorAll(".todo-edit"),o=document.querySelectorAll('input[type="checkbox"]');e.forEach((e=>e.addEventListener("click",R.showDetails))),t.forEach((e=>e.addEventListener("click",(e=>{R.deleteTodo(e),_.addTodoUiEventListeners(),_.addBtnAddEventListeners(),_.addSwitchProjectListeners()})))),n.forEach((e=>e.addEventListener("click",(e=>{const{currentProject:t}=U,{todoList:n}=U.projectList[t];let o=n.filter((t=>t.id===e.target.parentElement.dataset.id));[o]=o,R.editTodo(e),_.addFormEditListener(o)})))),o.forEach((e=>e.addEventListener("change",R.toggleCheckmark)))},addSwitchProjectListeners:()=>{document.querySelectorAll(".project-link").forEach((e=>e.addEventListener("click",(e=>{R.switchProject(e),_.addTodoUiEventListeners(),_.addBtnAddEventListeners()}))))},addFormEditListener:e=>{document.querySelector(".form--edit").addEventListener("submit",(t=>{R.submitEdit(t,e),_.addTodoUiEventListeners(),_.addBtnAddEventListeners()}))},addFormAddListener:()=>{document.querySelector(".form--add").addEventListener("submit",(e=>{R.submitAddTodo(e),_.addTodoUiEventListeners(),_.addBtnAddEventListeners(),_.addSwitchProjectListeners()}))},addFormProjectListener:()=>{document.querySelector(".form--project").addEventListener("submit",(e=>{R.submitAddProject(e),_.addTodoUiEventListeners(),_.addBtnAddEventListeners(),_.addSwitchProjectListeners()}))},addBtnAddEventListeners:()=>{document.querySelector(".add").addEventListener("click",(e=>{R.addTodo(e),_.addFormAddListener()}))},addBtnProjectEventListeners:()=>{document.querySelector(".project-add").addEventListener("click",(e=>{R.addProject(e),_.addFormProjectListener()}))}},$=_;if(Storage.prototype.setObject=function(e,t){this.setItem(e,JSON.stringify(t))},Storage.prototype.getObject=function(e){const t=this.getItem(e);return t&&JSON.parse(t)},localStorage.getObject("projects")){const e=localStorage.getObject("projects"),t={currentProject:e.currentProject,projectList:[]};e.projectList.forEach((e=>{const{title:n}=e,o=e.todoList.map((e=>{const t=B(e.title,e.description,e.dueDate,e.priority,e.id);return t.isDone=e.isDone,t}));t.projectList.push(O(n,o))})),U.projectList=t.projectList,U.projectList.forEach((e=>R.sortByDate(e.todoList)))}else{const e=O("Example Project One",[B("Add footer","Lorem ipsum dolor sit amet...","2022-08-12T19:30",1),B("Create UI module","Lorem ipsum dolor sit amet...","2022-08-12T19:45",2),B("Team meeting","Lorem ipsum dolor sit amet...","2022-08-13T12:30",3),B("Drink some coffee","Lorem ipsum dolor sit amet...","2022-08-13T11:30",1)]),t=O("Learn JavaScript",[B("Learn React","Default description","2022-09-14T20:30",1),B("Learn about factory functions","Default description","2023-04-23T14:30",3)]),n=B("Browse social media","Lorem ipsum dolor sit amet...","2023-06-16T21:30",3),o=B("Make Todo List Project","Default description","2022-08-12T17:30",2);n.isDone=!0,o.isDone=!0,e.addTodo(n),t.addTodo(o),U.projectList.push(e),U.projectList.push(t),U.projectList.forEach((e=>R.sortByDate(e.todoList))),function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}()&&localStorage.setObject("projects",U)}F.createTemplate(),$.addInitialEventListeners()})()})();