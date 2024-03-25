// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,w,"$1e"),t=s.call(t,d,"e"),t=s.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,v,"e-0$1"),r.alternate&&(t=s.call(t,y,"$1."),t=s.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var x=String.fromCharCode,A=isNaN,_=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,a,o,f,c,l,s,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(a=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!A(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=E.exec(r);t;)(e=r.slice(i,E.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=E.lastIndex,t=E.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function S(r){var e,n;if("string"!=typeof r)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var k=Object.prototype,j=k.toString,T=k.__defineGetter__,V=k.__defineSetter__,O=k.__lookupGetter__,L=k.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(O.call(r,e)||L.call(r,e)?(t=r.__proto__,r.__proto__=k,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&V&&V.call(r,e,n.set),r};function G(r,e,n){$(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}var R=eval;function H(){var r;try{R('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}function W(r){return Math.abs(r)}var C=11754943508222875e-54,M=2220446049250313e-31;var P=H()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||1e6,i=t.tolerance||M,t.keep?function(r,e,n){var t,i,a,o,u,f;if(0===(a=(f=(t="function"==typeof r.next)?r.next().value:r())[1])&&(a=C),o=a,u=0,!0===t)do{(f=r.next().value)&&(0===(u=f[1]+f[0]*u)&&(u=C),0===(o=f[1]+f[0]/o)&&(o=C),a*=i=o*(u=1/u))}while(f&&W(i-1)>e&&--n);else do{(f=r())&&(0===(u=f[1]+f[0]*u)&&(u=C),0===(o=f[1]+f[0]/o)&&(o=C),a*=i=o*(u=1/u))}while(f&&W(i-1)>e&&--n);return a}(r,i,n):function(r,e,n){var t,i,a,o,u,f,c;if(o=(c=(t="function"==typeof r.next)?r.next().value:r())[1],a=c[0],0===o&&(o=C),u=o,f=0,!0===t)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=C),0===(u=c[1]+c[0]/u)&&(u=C),o*=i=u*(f=1/f))}while(W(i-1)>e&&--n);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=C),0===(u=c[1]+c[0]/u)&&(u=C),o*=i=u*(f=1/f))}while(c&&W(i-1)>e&&--n);return a/o}(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||M,n=t.maxIter||1e6,t.keep?function(r,e,n){var t,i,a,o,u;0===(o=(u=r())[1])&&(o=C),i=o,a=0;do{(u=r())&&(0===(a=u[1]+u[0]*a)&&(a=C),0===(i=u[1]+u[0]/i)&&(i=C),o*=t=i*(a=1/a))}while(u&&W(t-1)>e&&--n);return o}(r,i,n):function(r,e,n){var t,i,a,o,u,f;u=(f=r())[1],i=f[0],0===u&&(u=C),a=u,o=0;do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=C),0===(a=f[1]+f[0]/a)&&(a=C),u*=t=a*(o=1/o))}while(f&&W(t-1)>e&&--n);return i/u}(r,i,n)};function Z(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function X(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var Y=Function;function q(r){var e,n,t,i;if(r.length>500)return function(e){return X(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new Y(e+="//# sourceURL=evalpoly.factory.js")()}Z(X,"factory",q);var z="function"==typeof Math.fround?Math.fround:null;var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Float32Array;var nr=Number.POSITIVE_INFINITY,tr="function"==typeof Float32Array?Float32Array:null;var ir,ar="function"==typeof Float32Array?Float32Array:void 0;ir=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,5e40]),n=e,r=(er&&n instanceof Float32Array||"[object Float32Array]"===rr(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===nr}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur=new or(1);var fr="function"==typeof z?z:function(r){return ur[0]=r,ur[0]};function cr(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=fr(fr(r[t-=1]*e)+r[t-1]),t-=2;t>=0;)n=fr(fr(n*e)+r[t]),t-=1;return n}function lr(r,e,n){var t,i,a,o;if(0===(t=r.length))return NaN;if(t!==e.length)return NaN;if(0===n||1===t)return r[0]/e[0];if(W(n)<=1)for(i=r[t-1],a=e[t-1],o=t-2;o>=0;--o)i*=n,a*=n,i+=r[o],a+=e[o];else for(n=1/n,i=r[0],a=e[0],o=1;o<t;++o)i*=n,a*=n,i+=r[o],a+=e[o];return i/a}function sr(r){return r!=r}Z(cr,"factory",(function(r){var e,n,t,i;if((r=new or(r)).length>500)return function(e){return cr(r,e)};if(e="return function evalpolyf(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return f64_to_f32("+r[0],t=n-1,i=1;i<n;i++)e+="+f64_to_f32(x*",i<t&&(e+="f64_to_f32("),e+=r[i];for(i=0;i<2*t;i++)e+=")";e+=";"}return e+="}",new Y("f64_to_f32",e+="//# sourceURL=evalpolyf.factory.js")(fr)})),Z(lr,"factory",(function(r,e){var n,t,i,a;if(r.length>500)return function(n){return lr(r,e,n)};if(n="return function evalrational(x){",n+="var ax,s1,s2;",0===(t=r.length))n+="return NaN;";else if(t!==e.length)n+="return NaN;";else if(1===t)n+="return "+r[0]/e[0]+";";else{for(n+="if(x===0.0){return "+r[0]/e[0]+";}",n+="if(x<0.0){ax=-x;}else{ax=x;}",n+="if(ax<=1.0){",n+="s1 = "+r[0],i=t-1,a=1;a<t;a++)n+="+x*",a<i&&(n+="("),n+=r[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="s2 = "+e[0],i=t-1,a=1;a<t;a++)n+="+x*",a<i&&(n+="("),n+=e[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="}else{",n+="x = 1.0/x;",n+="s1 = "+r[i=t-1],a=i-1;a>=0;a--)n+="+x*",a>0&&(n+="("),n+=r[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="s2 = "+e[i=t-1],a=i-1;a>=0;a--)n+="+x*",a>0&&(n+="("),n+=e[a];for(a=0;a<i-1;a++)n+=")";n+=";",n+="}",n+="return s1/s2;"}return n+="}",new Y(n+="//# sourceURL=evalrational.factory.js")()}));var pr=Math.floor;function vr(r){return pr(r)===r}function yr(r){return vr(r/2)}function gr(r){return yr(r>0?r-1:r+1)}var hr=Number.NEGATIVE_INFINITY;function dr(r){return r===nr||r===hr}var wr=Math.sqrt,br="function"==typeof Uint32Array;var mr="function"==typeof Uint32Array?Uint32Array:null;var xr,Ar="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(br&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r=xr,Nr="function"==typeof Float64Array;var Fr="function"==typeof Float64Array?Float64Array:null;var Er,Ur="function"==typeof Float64Array?Float64Array:void 0;Er=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr([1,3.14,-3.14,NaN]),n=e,r=(Nr&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Ir=Er,Sr="function"==typeof Uint8Array;var kr="function"==typeof Uint8Array?Uint8Array:null;var jr,Tr="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,e,n;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,256,257]),n=e,r=(Sr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Vr=jr,Or="function"==typeof Uint16Array;var Lr="function"==typeof Uint16Array?Uint16Array:null;var $r,Gr="function"==typeof Uint16Array?Uint16Array:void 0;$r=function(){var r,e,n;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Or&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Rr,Hr={uint16:$r,uint8:Vr};(Rr=new Hr.uint16(1))[0]=4660;var Wr,Cr,Mr=52===new Hr.uint8(Rr.buffer)[0];!0===Mr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Pr={HIGH:Wr,LOW:Cr},Zr=new Ir(1),Xr=new _r(Zr.buffer),Yr=Pr.HIGH,qr=Pr.LOW;function zr(r,e,n,t){return Zr[0]=r,e[t]=Xr[Yr],e[t+n]=Xr[qr],e}function Br(r){return zr(r,[0,0],1,0)}Z(Br,"assign",zr);var Dr=!0===Mr?0:1,Jr=new Ir(1),Kr=new _r(Jr.buffer);function Qr(r,e){return Jr[0]=r,Kr[Dr]=e>>>0,Jr[0]}function re(r){return 0|r}var ee,ne,te=2147483647,ie=2147483648,ae=!0===Mr?1:0,oe=new Ir(1),ue=new _r(oe.buffer);function fe(r){return oe[0]=r,ue[ae]}!0===Mr?(ee=1,ne=0):(ee=0,ne=1);var ce={HIGH:ee,LOW:ne},le=new Ir(1),se=new _r(le.buffer),pe=ce.HIGH,ve=ce.LOW;function ye(r,e){return se[pe]=r,se[ve]=e,le[0]}var ge=[0,0];function he(r,e){var n,t;return Br.assign(r,ge,1,0),n=ge[0],n&=te,t=fe(e),ye(n|=t&=ie,ge[1])}var de=1072693247,we=1e300,be=1e-300;var me=!0===Mr?1:0,xe=new Ir(1),Ae=new _r(xe.buffer);function _e(r,e){return xe[0]=r,Ae[me]=e>>>0,xe[0]}var Ne=1023;var Fe=1048575,Ee=1048576,Ue=1072693248,Ie=536870912,Se=524288,ke=20,je=9007199254740992,Te=.9617966939259756,Ve=.9617967009544373,Oe=-7.028461650952758e-9,Le=[1,1.5],$e=[0,.5849624872207642],Ge=[0,1.350039202129749e-8];var Re=1.4426950408889634,He=1.4426950216293335,We=1.9259629911266175e-8;var Ce=1023,Me=-1023,Pe=-1074,Ze=22250738585072014e-324,Xe=4503599627370496;function Ye(r,e,n,t){return sr(r)||dr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&W(r)<Ze?(e[t]=r*Xe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}Z((function(r){return Ye(r,[0,0],1,0)}),"assign",Ye);var qe=2146435072;var ze=2220446049250313e-31,Be=2148532223,De=[0,0],Je=[0,0];function Ke(r,e){var n,t;return 0===e||0===r||sr(r)||dr(r)?r:(Ye(r,De,1,0),r=De[0],e+=De[1],e+=function(r){var e=fe(r);return(e=(e&qe)>>>20)-Ne|0}(r),e<Pe?he(0,r):e>Ce?r<0?hr:nr:(e<=Me?(e+=52,t=ze):t=1,Br.assign(r,Je,1,0),n=Je[0],n&=Be,t*ye(n|=e+Ne<<20,Je[1])))}var Qe=.6931471805599453,rn=1048575;var en=1048576,nn=1071644672,tn=20,an=.6931471824645996,on=-1.904654299957768e-9;var un=1072693247,fn=1105199104,cn=1139802112,ln=1083179008,sn=1072693248,pn=1083231232,vn=3230714880,yn=31,gn=1e300,hn=1e-300,dn=8008566259537294e-32,wn=[0,0],bn=[0,0];function mn(r,e){var n,t,i,a,o,u,f,c,l,s,p,v,y,g;if(sr(r)||sr(e))return NaN;if(Br.assign(e,wn,1,0),o=wn[0],0===wn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return wr(r);if(-.5===e)return 1/wr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(dr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:W(r)<1==(e===nr)?0:nr}(r,e)}if(Br.assign(r,wn,1,0),a=wn[0],0===wn[1]){if(0===a)return function(r,e){return e===hr?nr:e===nr?0:e>0?gr(e)?r:0:gr(e)?he(nr,r):nr}(r,e);if(1===r)return 1;if(-1===r&&gr(e))return-1;if(dr(r))return r===hr?mn(-0,-e):e<0?0:nr}if(r<0&&!1===vr(e))return(r-r)/(r-r);if(i=W(r),n=a&te|0,t=o&te|0,f=o>>>yn|0,u=(u=a>>>yn|0)&&gr(e)?-1:1,t>fn){if(t>cn)return function(r,e){return(fe(r)&te)<=de?e<0?we*we:be*be:e>0?we*we:be*be}(r,e);if(n<un)return 1===f?u*gn*gn:u*hn*hn;if(n>sn)return 0===f?u*gn*gn:u*hn*hn;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*We-a*Re)-((t=Qr(t=(o=He*i)+u,0))-o),r[0]=t,r[1]=n,r}(bn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,v,y,g,h,d,w,b,m,x,A,_;return m=0,n<Ee&&(m-=53,n=fe(e*=je)),m+=(n>>ke)-Ne|0,n=(x=n&Fe|0)|Ue|0,x<=235662?A=0:x<767610?A=1:(A=0,m+=1,n-=Ee),o=Qr(i=(w=(e=_e(e,n))-(c=Le[A]))*(b=1/(e+c)),0),t=(n>>1|Ie)+Se,f=_e(0,t+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Qr(f=3+(a=o*o)+(d+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),s=Qr(s=(w=o*f)+(b=u*f+(d-(f-3-a))*i),0),p=Ve*s,g=(v=Oe*s+(b-(s-w))*Te+Ge[A])-((y=Qr(y=p+v+(l=$e[A])+(h=m),0))-h-l-p),r[0]=y,r[1]=g,r}(bn,i,n);if(v=(s=(e-(c=Qr(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Br.assign(v,wn,1,0),y=re(wn[0]),g=re(wn[1]),y>=ln){if(0!=(y-ln|g))return u*gn*gn;if(s+dn>v-l)return u*gn*gn}else if((y&te)>=pn){if(0!=(y-vn|g))return u*hn*hn;if(s<=v-l)return u*hn*hn}return v=function(r,e,n){var t,i,a,o,u,f,c,l,s,p;return s=((l=r&te|0)>>tn)-Ne|0,c=0,l>nn&&(i=_e(0,((c=r+(en>>s+1)>>>0)&~(rn>>(s=((c&te)>>tn)-Ne|0)))>>>0),c=(c&rn|en)>>tn-s>>>0,r<0&&(c=-c),e-=i),r=re(r=fe(f=1-((f=(a=(i=Qr(i=n+e,0))*an)+(o=(n-(i-e))*Qe+i*on))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<tn>>>0)>>tn<=0?Ke(f,c):_e(f,r)}(y,l,s),u*v}var xn=9007199254740991,An=2147483647;function _n(r,e){var n,t,i,a,o,u,f;if(sr(r)||sr(e))return NaN;if(!vr(r)||!vr(e))return NaN;if(e<0)return 0;if(t=1,r<0&&(r=-r+e-1,gr(e)&&(t*=-1)),e>r)return 0;if(0===e||e===r)return t;if(1===e||e===r-1)return t*r;for(f=pr(xn/r),n=1,o=1;o<=e&&!(n>f);o++)n*=r,n/=o,r-=1;return o>e?t*n:(u=function(r,e){return sr(r)||sr(e)||r===nr||e===nr||r===hr||e===hr?NaN:vr(r)&&vr(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=An&&e<=An?function(r,e){var n,t=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,t+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<t}(r,e):function(r,e){var n,t=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,t*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return t*r}(r,e)):NaN}(i=_n(r,e-o+1),a=_n(e,e-o+1)),t*(n/=a/=u)*(i/=u))}var Nn={};function Fn(r){var e,n;if(void 0===(e=Nn[r])){for(e=[],n=0;n<r;n++)e.push(0);for(n=r-1;n>=0;n-=2)e[n]=_n((r+n-1)/2,n);Nn[r]=e}return e}function En(r,e){var n,t;return t=X(Fn(n=W(r)),e),r>=0?t:mn(-1,n-1)*t}Z(En,"factory",(function(r){var e,n,t,i;return e=Fn(n=W(r)),t=q(e),i=mn(-1,n-1),r>=0||1===i?t:function(r){return-1*t(r)}}));var Un=1.4142135623730951;function In(r,e){var n,t,i,a;if(sr(r)||sr(e)||r<0||!vr(r))return NaN;if(0===r)return 1;if(1===r)return e;for(t=1,i=0,a=r;a>1;a--)n=e*t-a*i,i=t,t=n;return e*t-i}function Sn(r){return function(){return r}}function kn(r,e){return mn(2,.5*r)*In(r,Un*e)}Z(In,"factory",(function(r){return r<0||sr(r)||!vr(r)?Sn(NaN):0===r?Sn(1):function(e){var n,t,i,a;if(sr(e))return NaN;for(t=1,i=0,a=r;a>1;a--)n=e*t-a*i,i=t,t=n;return e*t-i}})),Z(kn,"factory",(function(r){var e;return r<0||sr(r)||!vr(r)?Sn(NaN):0===r?Sn(1):(e=mn(2,.5*r),function(n){return e*In(r,Un*n)})}));var jn=Math.ceil,Tn={};function Vn(r){var e,n,t,i,a,o,u,f,c;if(void 0===(e=Tn[r])){if(f=r+1,e=new Array(f),0===r)e[0]=2;else{for(c=0;c<f;c++)e[c]=0;for(t=jn(n=r/2),i=pr(n),c=0;c<=i;c++)a=2*c+r%2,o=2*_n(t+c-1,i-c-1),u=_n(t+c-1,i-c),e[a]+=o+u}Tn[r]=e}return e}function On(r,e){var n,t;return t=X(Vn(n=W(r)),e),r>=0?t:mn(-1,n)*t}Z(On,"factory",(function(r){var e,n,t,i;return e=Vn(n=W(r)),t=q(e),i=mn(-1,n),r>=0||1===i?t:function(r){return-1*t(r)}}));var Ln=H()?function(r,e){var n,t,i,a,o;if(o={},arguments.length>1&&(o=e),n=o.tolerance||M,i=o.maxTerms||1e6,a=o.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(W(n*(a+=t))>=W(t)||0==--i)break}else do{a+=t=r()}while(W(n*a)<W(t)&&--i);return a}:function(r,e){var n,t,i,a,o;o={},arguments.length>1&&(o=e),n=o.tolerance||M,i=o.maxTerms||1e6,a=o.initialValue||0;do{a+=t=r()}while(W(n*a)<W(t)&&--i);return a},$n={};G($n,"continuedFraction",P),G($n,"evalpoly",X),G($n,"evalpolyf",cr),G($n,"evalrational",lr),G($n,"fibpoly",En),G($n,"hermitepoly",kn),G($n,"lucaspoly",On),G($n,"normhermitepoly",In),G($n,"sumSeries",Ln);export{P as continuedFraction,$n as default,X as evalpoly,cr as evalpolyf,lr as evalrational,En as fibpoly,kn as hermitepoly,On as lucaspoly,In as normhermitepoly,Ln as sumSeries};
//# sourceMappingURL=mod.js.map
