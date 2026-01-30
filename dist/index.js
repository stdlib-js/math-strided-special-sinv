"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(z,u){
var j=require('@stdlib/strided-base-smap/dist'),x=require('@stdlib/math-base-special-invf/dist');function l(e,r,i,a,n){return j(e,r,i,a,n,x)}u.exports=l
});var o=s(function(A,q){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-invf/dist');function E(e,r,i,a,n,m,y){return R(e,r,i,a,n,m,y,_)}q.exports=E
});var f=s(function(B,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),b=o();O(c,"ndarray",b);p.exports=c
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=f(),t,d=h(g(__dirname,"./native.js"));d instanceof Error?t=k:t=d;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
