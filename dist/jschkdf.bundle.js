!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("crypto")):"function"==typeof define&&define.amd?define(["crypto"],e):"object"==typeof exports?exports.jschkdf=e(require("crypto")):t.jschkdf=e(t.crypto)}(this,function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Users/jun/ProjectJavaScript/js_crypto_hkdf/dist",r(r.s=7)}([function(t,e,r){t.exports=r(8)},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)})}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"compute",{enumerable:!0,get:function(){return n.compute}}),Object.defineProperty(e,"verify",{enumerable:!0,get:function(){return n.verify}}),e.default=void 0;var n=r(12),o={compute:n.compute,verify:n.verify};e.default=o},function(t,e){t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(e,r){e.exports=t},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getRandomBytes",{enumerable:!0,get:function(){return n.getRandomBytes}}),Object.defineProperty(e,"getRandomAsciiString",{enumerable:!0,get:function(){return n.getRandomAsciiString}}),e.default=void 0;var n=r(10),o={getRandomBytes:n.getRandomBytes,getRandomAsciiString:n.getRandomAsciiString};e.default=o},function(t,e,r){t.exports=r(15)},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(9),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=O.prototype=j.prototype=Object.create(v);_.prototype=w.constructor=O,O.constructor=_,O[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},A(S.prototype),S.prototype[u]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,r,n){var o=new S(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function j(){}function _(){}function O(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,r){"use strict";var n=r(3),o=r(4);Object.defineProperty(e,"__esModule",{value:!0}),e.getRandomAsciiString=function(t){return c.apply(this,arguments)},e.getRandomBytes=s;var i=o(r(0)),a=o(r(1)),u=n(r(11));function c(){return(c=(0,a.default)(i.default.mark(function t(e){var r,n,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:for(r=t.sent,n="",o=0;o<e;o++)r[o]=r[o]%94+32,n+=String.fromCharCode(r[o]);return t.abrupt("return",n);case 6:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function s(t){return f.apply(this,arguments)}function f(){return(f=(0,a.default)(i.default.mark(function t(e){var r,n,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=u.getWebCryptoAll(),n=u.getNodeCrypto(),o=new Uint8Array(e),void 0===r||"function"!=typeof r.getRandomValues){t.next=7;break}r.getRandomValues(o),t.next=12;break;case 7:if(void 0===n){t.next=11;break}o=new Uint8Array(n.randomBytes(e)),t.next=12;break;case 11:throw new Error("UnsupportedEnvironment");case 12:return t.abrupt("return",o);case 13:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getWebCryptoAll=function(){if("undefined"==typeof window)return;if(window.crypto)return window.crypto;if(window.msCrypto)return window.msCrypto},e.getNodeCrypto=function(){return"undefined"!=typeof window?void 0:r(5)}},function(t,e,r){"use strict";var n=r(3),o=r(4);Object.defineProperty(e,"__esModule",{value:!0}),e.compute=s,e.verify=function(t,e,r){return p.apply(this,arguments)};var i=o(r(0)),a=o(r(1)),u=o(r(13)),c=n(r(14));function s(t,e){return f.apply(this,arguments)}function f(){return(f=(0,a.default)(i.default.mark(function t(e,r){var n,o,a,s,f,p,l,h,d,y,v,m,g,w=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=w.length>2&&void 0!==w[2]?w[2]:"SHA-256",o=c.getWebCrypto(),a=c.getNodeCrypto(),s=c.getMsCrypto(),void 0===o||"function"!=typeof o.importKey||"function"!=typeof o.sign){t.next=26;break}return t.prev=5,t.next=8,o.importKey("raw",e,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 8:return f=t.sent,t.next=11,o.sign("HMAC",f,r);case 11:return p=t.sent,t.abrupt("return",new Uint8Array(p));case 15:return t.prev=15,t.t0=t.catch(5),t.next=19,o.importKey("raw",e,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 19:return l=t.sent,t.next=22,o.sign({name:"HMAC",hash:{name:n}},l,r);case 22:return h=t.sent,t.abrupt("return",new Uint8Array(h));case 24:t.next=44;break;case 26:if(void 0===a){t.next=31;break}return d=a.createHmac(u.default.hashes[n].nodeName,e),t.abrupt("return",new Uint8Array(d.update(r).digest()));case 31:if(void 0===s||"function"!=typeof s.importKey||"function"!=typeof s.sign){t.next=43;break}return y=function(t,e,r,n,o){return new Promise(function(i){s.importKey(t,e,r,n,o).oncomplete=function(t){i(t.target.result)}})},v=function(t,e,r){return new Promise(function(n){s.sign({name:"HMAC",hash:{name:t}},e,r).oncomplete=function(t){n(new Uint8Array(t.target.result))}})},t.next=36,y("raw",e,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 36:return m=t.sent,t.next=39,v(n,m,r);case 39:return g=t.sent,t.abrupt("return",new Uint8Array(g));case 43:throw new Error("UnsupportedEnvironment");case 44:case"end":return t.stop()}},t,this,[[5,15]])}))).apply(this,arguments)}function p(){return(p=(0,a.default)(i.default.mark(function t(e,r,n){var o,a,u=arguments;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=u.length>3&&void 0!==u[3]?u[3]:"SHA-256",n instanceof Uint8Array){t.next=3;break}throw new Error("InvalidInputMac");case 3:return t.next=5,s(e,r,o);case 5:return a=t.sent,t.abrupt("return",n.toString()===a.toString());case 7:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={hashes:{"SHA-256":{nodeName:"sha256",hashSize:32},"SHA-384":{nodeName:"sha384",hashSize:48},"SHA-512":{nodeName:"sha512",hashSize:64}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getWebCrypto=function(){if("undefined"==typeof window)return;if(window.crypto)return window.crypto.subtle},e.getNodeCrypto=function(){return"undefined"!=typeof window?void 0:r(5)},e.getMsCrypto=function(){if("undefined"==typeof window)return;if(window.crypto)return;if(window.msCrypto)return window.msCrypto.subtle}},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),u={hashes:{"SHA-256":{nodeName:"sha256",hashSize:32},"SHA-384":{nodeName:"sha384",hashSize:48},"SHA-512":{nodeName:"sha512",hashSize:64}}};function c(){if("undefined"!=typeof window)return window.crypto?window.crypto.subtle:void 0}var s=r(6),f=r.n(s),p=r(2),l=r.n(p);function h(){return d.apply(this,arguments)}function d(){return(d=a()(o.a.mark(function t(e){var r,n,i,a,u,s,p,l=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=1<l.length&&void 0!==l[1]?l[1]:"SHA-256",n=2<l.length&&void 0!==l[2]?l[2]:32,i=3<l.length&&void 0!==l[3]?l[3]:"",a=4<l.length&&void 0!==l[4]?l[4]:null,i||(i=""),u=c(),a){t.next=10;break}return t.next=9,f.a.getRandomBytes(n);case 9:a=t.sent;case 10:if(void 0===u||"function"!=typeof u.importKey||"function"!=typeof u.deriveBits){t.next=28;break}return t.prev=11,t.next=14,u.subtle.importKey("raw",e,{name:"HKDF"},!1,["deriveKey","deriveBits"]);case 14:return p=t.sent,t.next=17,u.subtle.deriveBits({name:"HKDF",salt:a,info:new Uint8Array(i),hash:r},p,8*n);case 17:s=t.sent,s=new Uint8Array(s),t.next=26;break;case 21:return t.prev=21,t.t0=t.catch(11),t.next=25,y(e,a,r,i,n);case 25:s=t.sent;case 26:t.next=31;break;case 28:return t.next=30,y(e,a,r,i,n);case 30:s=t.sent;case 31:return t.abrupt("return",{key:s,salt:a});case 32:case"end":return t.stop()}},t,this,[[11,21]])}))).apply(this,arguments)}function y(){return v.apply(this,arguments)}function v(){return(v=a()(o.a.mark(function t(e,r,n,i,a){var c,s,f,p,h,d,y;return o.a.wrap(function(t){for(var o=Math.ceil;;)switch(t.prev=t.next){case 0:return c=u.hashes[n].hashSize,t.next=3,l.a.compute(r,e,n);case 3:s=t.sent,f=new Uint8Array([]),p=new Uint8Array(o(a/c)*c),h=new Uint8Array(i),d=0;case 8:if(!(d<o(a/c))){t.next=20;break}return(y=new Uint8Array(f.length+h.length+1)).set(f),y.set(h,f.length),y.set(new Uint8Array([d+1]),f.length+h.length),t.next=15,l.a.compute(s,y,n);case 15:f=t.sent,p.set(f,c*d);case 17:d++,t.next=8;break;case 20:return t.abrupt("return",p.slice(0,a));case 21:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}r.d(e,"compute",function(){return h});e.default={compute:h}}])});