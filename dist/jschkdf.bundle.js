!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("crypto")):"function"==typeof define&&define.amd?define(["crypto"],t):"object"==typeof exports?exports.jschkdf=t(require("crypto")):e.jschkdf=t(e.crypto)}(this,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Users/jun/ProjectJavaScript/js_crypto_hkdf/dist",r(r.s=7)}([function(e,t,r){e.exports=r(8)},function(e,t){function r(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"compute",{enumerable:!0,get:function(){return n.compute}}),Object.defineProperty(t,"verify",{enumerable:!0,get:function(){return n.verify}}),t.default=void 0;var n=r(12),o={compute:n.compute,verify:n.verify};t.default=o},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRandomBytes",{enumerable:!0,get:function(){return n.getRandomBytes}}),Object.defineProperty(t,"getRandomAsciiString",{enumerable:!0,get:function(){return n.getRandomAsciiString}}),t.default=void 0;var n=r(10),o={getRandomBytes:n.getRandomBytes,getRandomAsciiString:n.getRandomAsciiString};t.default=o},function(e,t,r){e.exports=r(15)},function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(9),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof e,f=t.regeneratorRuntime;if(f)s&&(e.exports=f);else{(f=t.regeneratorRuntime=s?e.exports:{}).wrap=b;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(C([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=_.prototype=j.prototype=Object.create(v);A.prototype=w.constructor=_,_.constructor=A,_[c]=A.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===A||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(w),e},f.awrap=function(e){return{__await:e}},O(S.prototype),S.prototype[u]=function(){return this},f.AsyncIterator=S,f.async=function(e,t,r,n){var o=new S(b(e,t,r,n));return f.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},O(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return u.type="throw",u.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(e,t,r,n){var o=t&&t.prototype instanceof j?t:j,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(e,t,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(e,t,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function j(){}function A(){}function _(){}function O(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var t;this._invoke=function(r,n){function i(){return new Promise(function(t,i){!function t(r,n,i,a){var u=x(e[r],e,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(s).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,a)})}a(u.arg)}(r,n,t,i)})}return t=t?t.then(i,i):i()}}function k(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t,r){"use strict";var n=r(3),o=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomAsciiString=function(e){return c.apply(this,arguments)},t.getRandomBytes=s;var i=o(r(0)),a=o(r(1)),u=n(r(11));function c(){return(c=(0,a.default)(i.default.mark(function e(t){var r,n,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:for(r=e.sent,n="",o=0;o<t;o++)r[o]=r[o]%94+32,n+=String.fromCharCode(r[o]);return e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function s(e){return f.apply(this,arguments)}function f(){return(f=(0,a.default)(i.default.mark(function e(t){var r,n,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.getWebCryptoAll(),n=u.getNodeCrypto(),o=new Uint8Array(t),void 0===r||"function"!=typeof r.getRandomValues){e.next=7;break}r.getRandomValues(o),e.next=12;break;case 7:if(void 0===n){e.next=11;break}o=new Uint8Array(n.randomBytes(t)),e.next=12;break;case 11:throw new Error("UnsupportedEnvironment");case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWebCryptoAll=function(){if("undefined"==typeof window)return;if(window.crypto)return window.crypto;if(window.msCrypto)return window.msCrypto},t.getNodeCrypto=function(){return"undefined"!=typeof window?void 0:r(5)}},function(e,t,r){"use strict";var n=r(3),o=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.compute=s,t.verify=function(e,t,r){return p.apply(this,arguments)};var i=o(r(0)),a=o(r(1)),u=o(r(13)),c=n(r(14));function s(e,t){return f.apply(this,arguments)}function f(){return(f=(0,a.default)(i.default.mark(function e(t,r){var n,o,a,s,f,p,l,h,d,y,v,m,g=arguments;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g.length>2&&void 0!==g[2]?g[2]:"SHA-256",o=c.getWebCryptoAll(),a=c.getNodeCrypto(),void 0===o||"function"!=typeof o.importKey||"function"!=typeof o.sign){e.next=39;break}if(void 0!==window.msCrypto){e.next=26;break}return e.prev=5,e.next=8,o.importKey("raw",t,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 8:return s=e.sent,e.next=11,o.sign("HMAC",s,r);case 11:return f=e.sent,e.abrupt("return",new Uint8Array(f));case 15:return e.prev=15,e.t0=e.catch(5),e.next=19,o.importKey("raw",t,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 19:return p=e.sent,e.next=22,o.sign({name:"HMAC",hash:{name:n}},p,r);case 22:return l=e.sent,e.abrupt("return",new Uint8Array(l));case 24:e.next=37;break;case 26:if("SHA-512"!==n){e.next=28;break}throw new Error("HMAC-SHA512UnsupportedInIE");case 28:return h=function(e,t,r,n,i){return new Promise(function(a,u){var c=o.importKey(e,t,r,n,i);c.oncomplete=function(e){a(e.target.result)},c.onerror=function(){u("KeyImportingFailed")}})},d=function(e,t,r){return new Promise(function(n,i){var a=o.sign({name:"HMAC",hash:{name:e}},t,r);a.oncomplete=function(e){n(new Uint8Array(e.target.result))},a.onerror=function(){i("ComputingHMACFailed")}})},e.next=32,h("raw",t,{name:"HMAC",hash:{name:n}},!1,["sign","verify"]);case 32:return y=e.sent,e.next=35,d(n,y,r);case 35:return v=e.sent,e.abrupt("return",new Uint8Array(v));case 37:e.next=45;break;case 39:if(void 0===a){e.next=44;break}return m=a.createHmac(u.default.hashes[n].nodeName,t),e.abrupt("return",new Uint8Array(m.update(r).digest()));case 44:throw new Error("UnsupportedEnvironment");case 45:case"end":return e.stop()}},e,this,[[5,15]])}))).apply(this,arguments)}function p(){return(p=(0,a.default)(i.default.mark(function e(t,r,n){var o,a,u=arguments;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=u.length>3&&void 0!==u[3]?u[3]:"SHA-256",n instanceof Uint8Array){e.next=3;break}throw new Error("InvalidInputMac");case 3:return e.next=5,s(t,r,o);case 5:return a=e.sent,e.abrupt("return",n.toString()===a.toString());case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={hashes:{"SHA-256":{nodeName:"sha256",hashSize:32},"SHA-384":{nodeName:"sha384",hashSize:48},"SHA-512":{nodeName:"sha512",hashSize:64}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWebCryptoAll=function(){if("undefined"==typeof window)return;if(window.msCrypto)return window.msCrypto.subtle;if(window.crypto)return window.crypto.subtle},t.getNodeCrypto=function(){return"undefined"!=typeof window?void 0:r(5)}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),u={hashes:{"SHA-256":{nodeName:"sha256",hashSize:32},"SHA-384":{nodeName:"sha384",hashSize:48},"SHA-512":{nodeName:"sha512",hashSize:64}}};function c(){if("undefined"!=typeof window)return window.crypto?window.crypto.subtle:void 0}var s=r(6),f=r.n(s),p=r(2),l=r.n(p);function h(){return d.apply(this,arguments)}function d(){return(d=a()(o.a.mark(function e(t){var r,n,i,a,u,s,p,l=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=1<l.length&&void 0!==l[1]?l[1]:"SHA-256",n=2<l.length&&void 0!==l[2]?l[2]:32,i=3<l.length&&void 0!==l[3]?l[3]:"",a=4<l.length&&void 0!==l[4]?l[4]:null,i||(i=""),u=c(),a){e.next=10;break}return e.next=9,f.a.getRandomBytes(n);case 9:a=e.sent;case 10:if(void 0===u||"function"!=typeof u.importKey||"function"!=typeof u.deriveBits||void 0!==window.msCrypto){e.next=28;break}return e.prev=11,e.next=14,u.subtle.importKey("raw",t,{name:"HKDF"},!1,["deriveKey","deriveBits"]);case 14:return p=e.sent,e.next=17,u.subtle.deriveBits({name:"HKDF",salt:a,info:new Uint8Array(i),hash:r},p,8*n);case 17:s=e.sent,s=new Uint8Array(s),e.next=26;break;case 21:return e.prev=21,e.t0=e.catch(11),e.next=25,y(t,a,r,i,n);case 25:s=e.sent;case 26:e.next=31;break;case 28:return e.next=30,y(t,a,r,i,n);case 30:s=e.sent;case 31:return e.abrupt("return",{key:s,salt:a});case 32:case"end":return e.stop()}},e,this,[[11,21]])}))).apply(this,arguments)}function y(){return v.apply(this,arguments)}function v(){return(v=a()(o.a.mark(function e(t,r,n,i,a){var c,s,f,p,h,d,y;return o.a.wrap(function(e){for(var o=Math.ceil;;)switch(e.prev=e.next){case 0:return c=u.hashes[n].hashSize,e.next=3,l.a.compute(r,t,n);case 3:s=e.sent,f=new Uint8Array([]),p=new Uint8Array(o(a/c)*c),h=new Uint8Array(i),d=0;case 8:if(!(d<o(a/c))){e.next=20;break}return(y=new Uint8Array(f.length+h.length+1)).set(f),y.set(h,f.length),y.set(new Uint8Array([d+1]),f.length+h.length),e.next=15,l.a.compute(s,y,n);case 15:f=e.sent,p.set(f,c*d);case 17:d++,e.next=8;break;case 20:return e.abrupt("return",p.slice(0,a));case 21:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}r.d(t,"compute",function(){return h});t.default={compute:h}}])});