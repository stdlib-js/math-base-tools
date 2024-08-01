// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var e,t,f;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,f=parseInt(t,10),!isFinite(f)){if(!n(t))throw new Error("invalid integer. Value: "+t);f=0}return f<0&&("u"===r.specifier||10!==e)&&(f=4294967295+f+1),f<0?(t=(-f).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=f.toString(e),f||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var u=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,w,"$1e"),t=s.call(t,d,"e"),t=s.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,y,"e-0$1"),r.alternate&&(t=s.call(t,v,"$1."),t=s.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function x(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var m=String.fromCharCode,_=Array.isArray;function A(r){return r!=r}function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,o,a,u,c,l,s,p,y,v,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",c=1,l=0;l<r.length;l++)if("string"==typeof(t=r[l]))u+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=f(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!A(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(a)?String(t.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,v=t.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+x(g):x(g)+p)),u+=t.arg||"",c+=1}return u}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function E(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(E(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function S(r){var e,n;if("string"!=typeof r)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var j=Object.prototype,k=j.toString,T=j.__defineGetter__,V=j.__defineSetter__,O=j.__lookupGetter__,L=j.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(O.call(r,e)||L.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(r,e,n.get),a&&V&&V.call(r,e,n.set),r};function $(r,e,n){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}var G=eval;function H(){var r;try{G('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}function M(r){return Math.abs(r)}var W,C=11754943508222875e-54,P=2220446049250313e-31;W=H()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||1e6,i=t.tolerance||P,t.keep?function(r,e,n){var t,i,o,a,f,u;if(0===(o=(u=(t="function"==typeof r.next)?r.next().value:r())[1])&&(o=C),a=o,f=0,!0===t)do{(u=r.next().value)&&(0===(f=u[1]+u[0]*f)&&(f=C),0===(a=u[1]+u[0]/a)&&(a=C),o*=i=a*(f=1/f))}while(u&&M(i-1)>e&&--n);else do{(u=r())&&(0===(f=u[1]+u[0]*f)&&(f=C),0===(a=u[1]+u[0]/a)&&(a=C),o*=i=a*(f=1/f))}while(u&&M(i-1)>e&&--n);return o}(r,i,n):function(r,e,n){var t,i,o,a,f,u,c;if(a=(c=(t="function"==typeof r.next)?r.next().value:r())[1],o=c[0],0===a&&(a=C),f=a,u=0,!0===t)do{(c=r.next().value)&&(0===(u=c[1]+c[0]*u)&&(u=C),0===(f=c[1]+c[0]/f)&&(f=C),a*=i=f*(u=1/u))}while(M(i-1)>e&&--n);else do{(c=r())&&(0===(u=c[1]+c[0]*u)&&(u=C),0===(f=c[1]+c[0]/f)&&(f=C),a*=i=f*(u=1/u))}while(c&&M(i-1)>e&&--n);return o/a}(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||P,n=t.maxIter||1e6,t.keep?function(r,e,n){var t,i,o,a,f;0===(a=(f=r())[1])&&(a=C),i=a,o=0;do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=C),0===(i=f[1]+f[0]/i)&&(i=C),a*=t=i*(o=1/o))}while(f&&M(t-1)>e&&--n);return a}(r,i,n):function(r,e,n){var t,i,o,a,f,u;f=(u=r())[1],i=u[0],0===f&&(f=C),o=f,a=0;do{(u=r())&&(0===(a=u[1]+u[0]*a)&&(a=C),0===(o=u[1]+u[0]/o)&&(o=C),f*=t=o*(a=1/a))}while(u&&M(t-1)>e&&--n);return i/f}(r,i,n)};var Z=W;function X(r,e,n){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var q=Function;function z(r){var e,n,t,i;if(r.length>500)return function(e){return Y(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new q(e+="//# sourceURL=evalpoly.factory.js")()}X(Y,"factory",z);var B,D="function"==typeof Math.fround?Math.fround:null,J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"",nr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,o;if(null==r)return K.call(r);n=r[er],o=er,e=null!=(i=r)&&Q.call(i,o);try{r[er]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[er]=n:delete r[er],t}:function(r){return K.call(r)},tr="function"==typeof Float32Array,ir=Number.POSITIVE_INFINITY,or="function"==typeof Float32Array?Float32Array:null,ar="function"==typeof Float32Array?Float32Array:void 0;B=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,5e40]),n=e,r=(tr&&n instanceof Float32Array||"[object Float32Array]"===nr(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===ir}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var fr=B,ur=new fr(1),cr="function"==typeof D?D:function(r){return ur[0]=r,ur[0]};function lr(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=cr(cr(r[t-=1]*e)+r[t-1]),t-=2;t>=0;)n=cr(cr(n*e)+r[t]),t-=1;return n}function sr(r,e,n){var t,i,o,a;if(0===(t=r.length))return NaN;if(t!==e.length)return NaN;if(0===n||1===t)return r[0]/e[0];if(M(n)<=1)for(i=r[t-1],o=e[t-1],a=t-2;a>=0;--a)i*=n,o*=n,i+=r[a],o+=e[a];else for(n=1/n,i=r[0],o=e[0],a=1;a<t;++a)i*=n,o*=n,i+=r[a],o+=e[a];return i/o}function pr(r,e,n){var t,i,o,a;if(0===(t=r.length))return NaN;if(t!==e.length)return NaN;if(0===n||1===t)return cr(r[0]/e[0]);if(function(r){return Math.abs(r)}(n)<=1)for(i=r[t-1],o=e[t-1],a=t-2;a>=0;--a)i=cr(i*n),o=cr(o*n),i=cr(i+r[a]),o=cr(o+e[a]);else for(n=cr(1/n),i=r[0],o=e[0],a=1;a<t;++a)i=cr(i*n),o=cr(o*n),i=cr(i+r[a]),o=cr(o+e[a]);return cr(i/o)}function yr(r){return r!=r}X(lr,"factory",(function(r){var e,n,t,i;if((r=new fr(r)).length>500)return function(e){return lr(r,e)};if(e="return function evalpolyf(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return f64_to_f32("+r[0],t=n-1,i=1;i<n;i++)e+="+f64_to_f32(x*",i<t&&(e+="f64_to_f32("),e+=r[i];for(i=0;i<2*t;i++)e+=")";e+=";"}return e+="}",new q("f64_to_f32",e+="//# sourceURL=evalpolyf.factory.js")(cr)})),X(sr,"factory",(function(r,e){var n,t,i,o;if(r.length>500)return function(n){return sr(r,e,n)};if(n="return function evalrational(x){",n+="var ax,s1,s2;",0===(t=r.length))n+="return NaN;";else if(t!==e.length)n+="return NaN;";else if(1===t)n+="return "+r[0]/e[0]+";";else{for(n+="if(x===0.0){return "+r[0]/e[0]+";}",n+="if(x<0.0){ax=-x;}else{ax=x;}",n+="if(ax<=1.0){",n+="s1 = "+r[0],i=t-1,o=1;o<t;o++)n+="+x*",o<i&&(n+="("),n+=r[o];for(o=0;o<i-1;o++)n+=")";for(n+=";",n+="s2 = "+e[0],i=t-1,o=1;o<t;o++)n+="+x*",o<i&&(n+="("),n+=e[o];for(o=0;o<i-1;o++)n+=")";for(n+=";",n+="}else{",n+="x = 1.0/x;",n+="s1 = "+r[i=t-1],o=i-1;o>=0;o--)n+="+x*",o>0&&(n+="("),n+=r[o];for(o=0;o<i-1;o++)n+=")";for(n+=";",n+="s2 = "+e[i=t-1],o=i-1;o>=0;o--)n+="+x*",o>0&&(n+="("),n+=e[o];for(o=0;o<i-1;o++)n+=")";n+=";",n+="}",n+="return s1/s2;"}return n+="}",new q(n+="//# sourceURL=evalrational.factory.js")()})),X(pr,"factory",(function(r,e){var n,t,i,o;if(r.length>500)return function(n){return pr(r,e,n)};if(n="return function evalrationalf(x){",n+="var ax,s1,s2;",0===(t=r.length))n+="return NaN;";else if(t!==e.length)n+="return NaN;";else if(1===t)n+="return "+cr(r[0]/e[0])+";";else{for(n+="if(x===0.0){return "+cr(r[0]/e[0])+";}",n+="if(x<0.0){ax=-x;}else{ax=x;}",n+="if(ax<=1.0){",n+="s1 = f64_to_f32("+r[0],i=t-1,o=1;o<t;o++)n+="+f64_to_f32(x*",o<i&&(n+="("),n+=r[o];for(o=0;o<2*i;o++)n+=")";for(n+=";",n+="s2 = f64_to_f32("+e[0],i=t-1,o=1;o<t;o++)n+="+f64_to_f32(x*",o<i&&(n+="("),n+=e[o];for(o=0;o<2*i;o++)n+=")";for(n+=";",n+="}else{",n+="x = f64_to_f32(1.0/x);",n+="s1 = f64_to_f32("+r[i=t-1],o=i-1;o>=0;o--)n+="+f64_to_f32(x*",o>0&&(n+="("),n+=r[o];for(o=0;o<2*i;o++)n+=")";for(n+=";",n+="s2 = f64_to_f32("+e[i=t-1],o=i-1;o>=0;o--)n+="+f64_to_f32(x*",o>0&&(n+="("),n+=e[o];for(o=0;o<2*i;o++)n+=")";n+=";",n+="}",n+="return f64_to_f32(s1/s2);"}return n+="}",new q("f64_to_f32",n+="//# sourceURL=evalrationalf.factory.js")(cr)}));var vr=Math.floor;function gr(r){return vr(r)===r}function hr(r){return gr(r/2)}function dr(r){return hr(r>0?r-1:r+1)}var wr=Number.NEGATIVE_INFINITY;function br(r){return r===ir||r===wr}var xr,mr=Math.sqrt,_r="function"==typeof Uint32Array,Ar="function"==typeof Uint32Array?Uint32Array:null,Nr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(_r&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Fr,Ur=xr,Er="function"==typeof Float64Array,Ir="function"==typeof Float64Array?Float64Array:null,Sr="function"==typeof Float64Array?Float64Array:void 0;Fr=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,NaN]),n=e,r=(Er&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var jr,kr=Fr,Tr="function"==typeof Uint8Array,Vr="function"==typeof Uint8Array?Uint8Array:null,Or="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,e,n;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,256,257]),n=e,r=(Tr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Lr,Rr=jr,$r="function"==typeof Uint16Array,Gr="function"==typeof Uint16Array?Uint16Array:null,Hr="function"==typeof Uint16Array?Uint16Array:void 0;Lr=function(){var r,e,n;if("function"!=typeof Gr)return!1;try{e=new Gr(e=[1,3.14,-3.14,65536,65537]),n=e,r=($r&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Mr,Wr={uint16:Lr,uint8:Rr};(Mr=new Wr.uint16(1))[0]=4660;var Cr,Pr,Zr=52===new Wr.uint8(Mr.buffer)[0];!0===Zr?(Cr=1,Pr=0):(Cr=0,Pr=1);var Xr={HIGH:Cr,LOW:Pr},Yr=new kr(1),qr=new Ur(Yr.buffer),zr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e,n,t){return Yr[0]=r,e[t]=qr[zr],e[t+n]=qr[Br],e}function Jr(r){return Dr(r,[0,0],1,0)}X(Jr,"assign",Dr);var Kr=!0===Zr?0:1,Qr=new kr(1),re=new Ur(Qr.buffer);function ee(r,e){return Qr[0]=r,re[Kr]=e>>>0,Qr[0]}function ne(r){return 0|r}var te,ie,oe=2147483647,ae=2147483648,fe=!0===Zr?1:0,ue=new kr(1),ce=new Ur(ue.buffer);function le(r){return ue[0]=r,ce[fe]}!0===Zr?(te=1,ie=0):(te=0,ie=1);var se={HIGH:te,LOW:ie},pe=new kr(1),ye=new Ur(pe.buffer),ve=se.HIGH,ge=se.LOW;function he(r,e){return ye[ve]=r,ye[ge]=e,pe[0]}var de=[0,0];function we(r,e){var n,t;return Jr.assign(r,de,1,0),n=de[0],n&=oe,t=le(e),he(n|=t&=ae,de[1])}var be=1072693247,xe=1e300,me=1e-300,_e=!0===Zr?1:0,Ae=new kr(1),Ne=new Ur(Ae.buffer);function Fe(r,e){return Ae[0]=r,Ne[_e]=e>>>0,Ae[0]}var Ue=1023,Ee=1048575,Ie=1048576,Se=1072693248,je=536870912,ke=524288,Te=20,Ve=9007199254740992,Oe=.9617966939259756,Le=.9617967009544373,Re=-7.028461650952758e-9,$e=[1,1.5],Ge=[0,.5849624872207642],He=[0,1.350039202129749e-8],Me=1.4426950408889634,We=1.4426950216293335,Ce=1.9259629911266175e-8,Pe=1023,Ze=-1023,Xe=-1074,Ye=22250738585072014e-324,qe=4503599627370496;function ze(r,e,n,t){return yr(r)||br(r)?(e[t]=r,e[t+n]=0,e):0!==r&&M(r)<Ye?(e[t]=r*qe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}X((function(r){return ze(r,[0,0],1,0)}),"assign",ze);var Be=2146435072,De=2220446049250313e-31,Je=2148532223,Ke=[0,0],Qe=[0,0];function rn(r,e){var n,t;return 0===e||0===r||yr(r)||br(r)?r:(ze(r,Ke,1,0),r=Ke[0],e+=Ke[1],e+=function(r){var e=le(r);return(e=(e&Be)>>>20)-Ue|0}(r),e<Xe?we(0,r):e>Pe?r<0?wr:ir:(e<=Ze?(e+=52,t=De):t=1,Jr.assign(r,Qe,1,0),n=Qe[0],n&=Je,t*he(n|=e+Ue<<20,Qe[1])))}var en=.6931471805599453,nn=1048575,tn=1048576,on=1071644672,an=20,fn=.6931471824645996,un=-1.904654299957768e-9,cn=1072693247,ln=1105199104,sn=1139802112,pn=1083179008,yn=1072693248,vn=1083231232,gn=3230714880,hn=31,dn=1e300,wn=1e-300,bn=8008566259537294e-32,xn=[0,0],mn=[0,0];function _n(r,e){var n,t,i,o,a,f,u,c,l,s,p,y,v,g;if(yr(r)||yr(e))return NaN;if(Jr.assign(e,xn,1,0),a=xn[0],0===xn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return mr(r);if(-.5===e)return 1/mr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(br(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(e===ir)?0:ir}(r,e)}if(Jr.assign(r,xn,1,0),o=xn[0],0===xn[1]){if(0===o)return function(r,e){return e===wr?ir:e===ir?0:e>0?dr(e)?r:0:dr(e)?we(ir,r):ir}(r,e);if(1===r)return 1;if(-1===r&&dr(e))return-1;if(br(r))return r===wr?_n(-0,-e):e<0?0:ir}if(r<0&&!1===gr(e))return(r-r)/(r-r);if(i=M(r),n=o&oe|0,t=a&oe|0,u=a>>>hn|0,f=(f=o>>>hn|0)&&dr(e)?-1:1,t>ln){if(t>sn)return function(r,e){return(le(r)&oe)<=be?e<0?xe*xe:me*me:e>0?xe*xe:me*me}(r,e);if(n<cn)return 1===u?f*dn*dn:f*wn*wn;if(n>yn)return 0===u?f*dn*dn:f*wn*wn;p=function(r,e){var n,t,i,o,a,f,u;return o=(i=e-1)*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333)),n=(f=i*Ce-o*Me)-((t=ee(t=(a=We*i)+f,0))-a),r[0]=t,r[1]=n,r}(mn,i)}else p=function(r,e,n){var t,i,o,a,f,u,c,l,s,p,y,v,g,h,d,w,b,x,m,_,A;return x=0,n<Ie&&(x-=53,n=le(e*=Ve)),x+=(n>>Te)-Ue|0,n=(m=n&Ee|0)|Se|0,m<=235662?_=0:m<767610?_=1:(_=0,x+=1,n-=Ie),a=ee(i=(w=(e=Fe(e,n))-(c=$e[_]))*(b=1/(e+c)),0),t=(n>>1|je)+ke,u=Fe(0,t+=_<<18),d=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),u=ee(u=3+(o=a*a)+(d+=(f=b*(w-a*u-a*(e-(u-c))))*(a+i)),0),s=ee(s=(w=a*u)+(b=f*u+(d-(u-3-o))*i),0),p=Le*s,g=(y=Re*s+(b-(s-w))*Oe+He[_])-((v=ee(v=p+y+(l=Ge[_])+(h=x),0))-h-l-p),r[0]=v,r[1]=g,r}(mn,i,n);if(y=(s=(e-(c=ee(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Jr.assign(y,xn,1,0),v=ne(xn[0]),g=ne(xn[1]),v>=pn){if(0!=(v-pn|g))return f*dn*dn;if(s+bn>y-l)return f*dn*dn}else if((v&oe)>=vn){if(0!=(v-gn|g))return f*wn*wn;if(s<=y-l)return f*wn*wn}return y=function(r,e,n){var t,i,o,a,f,u,c,l,s,p;return s=((l=r&oe|0)>>an)-Ue|0,c=0,l>on&&(i=Fe(0,((c=r+(tn>>s+1)>>>0)&~(nn>>(s=((c&oe)>>an)-Ue|0)))>>>0),c=(c&nn|tn)>>an-s>>>0,r<0&&(c=-c),e-=i),r=ne(r=le(u=1-((u=(o=(i=ee(i=n+e,0))*fn)+(a=(n-(i-e))*en+i*un))*(t=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<an>>>0)>>an<=0?rn(u,c):Fe(u,r)}(v,l,s),f*y}var An=9007199254740991,Nn=2147483647;function Fn(r,e){var n,t,i,o,a,f,u;if(yr(r)||yr(e))return NaN;if(!gr(r)||!gr(e))return NaN;if(e<0)return 0;if(t=1,r<0&&(r=-r+e-1,dr(e)&&(t*=-1)),e>r)return 0;if(0===e||e===r)return t;if(1===e||e===r-1)return t*r;for(r-e<e&&(e=r-e),u=vr(An/r),n=1,a=1;a<=e&&!(n>u);a++)n*=r,n/=a,r-=1;return a>e?t*n:(i=Fn(r,e-a+1))===ir?t*i:(f=function(r,e){return yr(r)||yr(e)||r===ir||e===ir||r===wr||e===wr?NaN:gr(r)&&gr(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=Nn&&e<=Nn?function(r,e){var n,t=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,t+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<t}(r,e):function(r,e){var n,t=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,t*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return t*r}(r,e)):NaN}(i,o=Fn(e,e-a+1)),t*(n/=o/=f)*(i/=f))}var Un={};function En(r){var e,n;if(void 0===(e=Un[r])){for(e=[],n=0;n<r;n++)e.push(0);for(n=r-1;n>=0;n-=2)e[n]=Fn((r+n-1)/2,n);Un[r]=e}return e}function In(r,e){var n,t;return t=Y(En(n=M(r)),e),r>=0?t:_n(-1,n-1)*t}X(In,"factory",(function(r){var e,n,t,i;return e=En(n=M(r)),t=z(e),i=_n(-1,n-1),r>=0||1===i?t:function(r){return-1*t(r)}}));var Sn=1.4142135623730951;function jn(r,e){var n,t,i,o;if(yr(r)||yr(e)||r<0||!gr(r))return NaN;if(0===r)return 1;if(1===r)return e;for(t=1,i=0,o=r;o>1;o--)n=e*t-o*i,i=t,t=n;return e*t-i}function kn(r){return function(){return r}}function Tn(r,e){return _n(2,.5*r)*jn(r,Sn*e)}X(jn,"factory",(function(r){return r<0||yr(r)||!gr(r)?kn(NaN):0===r?kn(1):function(e){var n,t,i,o;if(yr(e))return NaN;for(t=1,i=0,o=r;o>1;o--)n=e*t-o*i,i=t,t=n;return e*t-i}})),X(Tn,"factory",(function(r){var e;return r<0||yr(r)||!gr(r)?kn(NaN):0===r?kn(1):(e=_n(2,.5*r),function(n){return e*jn(r,Sn*n)})}));var Vn,On=Math.ceil,Ln={};function Rn(r){var e,n,t,i,o,a,f,u,c;if(void 0===(e=Ln[r])){if(u=r+1,e=new Array(u),0===r)e[0]=2;else{for(c=0;c<u;c++)e[c]=0;for(t=On(n=r/2),i=vr(n),c=0;c<=i;c++)o=2*c+r%2,a=2*Fn(t+c-1,i-c-1),f=Fn(t+c-1,i-c),e[o]+=a+f}Ln[r]=e}return e}function $n(r,e){var n,t;return t=Y(Rn(n=M(r)),e),r>=0?t:_n(-1,n)*t}X($n,"factory",(function(r){var e,n,t,i;return e=Rn(n=M(r)),t=z(e),i=_n(-1,n),r>=0||1===i?t:function(r){return-1*t(r)}})),Vn=H()?function(r,e){var n,t,i,o,a;if(a={},arguments.length>1&&(a=e),n=a.tolerance||P,i=a.maxTerms||1e6,o=a.initialValue||0,1==("function"==typeof r.next)){for(t of r)if(M(n*(o+=t))>=M(t)||0==--i)break}else do{o+=t=r()}while(M(n*o)<M(t)&&--i);return o}:function(r,e){var n,t,i,o,a;a={},arguments.length>1&&(a=e),n=a.tolerance||P,i=a.maxTerms||1e6,o=a.initialValue||0;do{o+=t=r()}while(M(n*o)<M(t)&&--i);return o};var Gn=Vn,Hn={};return $(Hn,"continuedFraction",Z),$(Hn,"evalpoly",Y),$(Hn,"evalpolyf",lr),$(Hn,"evalrational",sr),$(Hn,"evalrationalf",pr),$(Hn,"fibpoly",In),$(Hn,"hermitepoly",Tn),$(Hn,"lucaspoly",$n),$(Hn,"normhermitepoly",jn),$(Hn,"sumSeries",Gn),Hn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=e();
//# sourceMappingURL=index.js.map
