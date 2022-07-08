// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t,e,r,n,o,a){var l,u,i;if(t<=0)return n;for(l=r<0?(1-t)*r:0,u=o<0?(1-t)*o:0,i=0;i<t;i++)n[u]=a(e[l]),l+=r,u+=o;return n}function p(t,e,r,n,o,a,l,u){var i,f,c;if(t<=0)return o;for(i=n,f=l,c=0;c<t;c++)o[f]=u(e[i]),i+=r,f+=a;return o}c(y,"ndarray",p);var d="function"==typeof Math.fround?Math.fround:null,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",v=b&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return _.call(t);r=t[m],a=m,e=null!=(o=t)&&s.call(o,a);try{t[m]=void 0}catch(e){return _.call(t)}return n=_.call(t),e?t[m]=r:delete t[m],n}:function(t){return _.call(t)},g="function"==typeof Float32Array,j=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,w="function"==typeof Float32Array?Float32Array:void 0,S=new(function(){var t,e,r;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,5e40]),r=e,t=(g&&r instanceof Float32Array||"[object Float32Array]"===v(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===j}catch(e){t=!1}return t}()?w:function(){throw new Error("not implemented")})(1),A="function"==typeof d?d:function(t){return S[0]=t,S[0]};function F(t){return A(1/A(t))}function O(t,e,r,n,o){return y(t,e,r,n,o,F)}function T(t,e,r,n,o,a,l){return p(t,e,r,n,o,a,l,F)}c(O,"ndarray",T),t.default=O,t.ndarray=T,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).sinv={});
//# sourceMappingURL=browser.js.map
