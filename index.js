// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function x(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+x(t):x(t)+r}var N=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,c,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(t=r[s]))c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,_(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,L=V.__lookupGetter__,H=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=V,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function W(r,e,n){R(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}var C=eval;function P(){var r;try{C('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}function M(r){return Math.abs(r)}var Z=11754943508222875e-54,X=2220446049250313e-31,Y=1e6;function q(r,e,n){var t,i,a,o,u,f,c;if(o=(c=(t="function"==typeof r.next)?r.next().value:r())[1],a=c[0],0===o&&(o=Z),u=o,f=0,!0===t)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=Z),0===(u=c[1]+c[0]/u)&&(u=Z),o*=i=u*(f=1/f))}while(M(i-1)>e&&--n);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=Z),0===(u=c[1]+c[0]/u)&&(u=Z),o*=i=u*(f=1/f))}while(c&&M(i-1)>e&&--n);return a/o}function z(r,e,n){var t,i,a,o,u,f;if(0===(a=(f=(t="function"==typeof r.next)?r.next().value:r())[1])&&(a=Z),o=a,u=0,!0===t)do{(f=r.next().value)&&(0===(u=f[1]+f[0]*u)&&(u=Z),0===(o=f[1]+f[0]/o)&&(o=Z),a*=i=o*(u=1/u))}while(f&&M(i-1)>e&&--n);else do{(f=r())&&(0===(u=f[1]+f[0]*u)&&(u=Z),0===(o=f[1]+f[0]/o)&&(o=Z),a*=i=o*(u=1/u))}while(f&&M(i-1)>e&&--n);return a}var B,D=1e6;function J(r,e,n){var t,i,a,o,u,f;u=(f=r())[1],i=f[0],0===u&&(u=Z),a=u,o=0;do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=Z),0===(a=f[1]+f[0]/a)&&(a=Z),u*=t=a*(o=1/o))}while(f&&M(t-1)>e&&--n);return i/u}function K(r,e,n){var t,i,a,o,u;0===(o=(u=r())[1])&&(o=Z),i=o,a=0;do{(u=r())&&(0===(a=u[1]+u[0]*a)&&(a=Z),0===(i=u[1]+u[0]/i)&&(i=Z),o*=t=i*(a=1/a))}while(u&&M(t-1)>e&&--n);return o}B=P()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||Y,i=t.tolerance||X,t.keep?z(r,i,n):q(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||X,n=t.maxIter||D,t.keep?K(r,i,n):J(r,i,n)};var Q=B;function rr(r,e,n){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function er(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var nr=Function;function tr(r){var e,n,t,i;if(r.length>500)return function(e){return er(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new nr(e+="//# sourceURL=evalpoly.factory.js")()}function ir(r,e,n){var t,i,a,o;if(0===(t=r.length))return NaN;if(t!==e.length)return NaN;if(0===n||1===t)return r[0]/e[0];if(M(n)<=1)for(i=r[t-1],a=e[t-1],o=t-2;o>=0;--o)i*=n,a*=n,i+=r[o],a+=e[o];else for(n=1/n,i=r[0],a=e[0],o=1;o<t;++o)i*=n,a*=n,i+=r[o],a+=e[o];return i/a}function ar(r){return r!=r}rr(er,"factory",tr),rr(ir,"factory",(function(r,e){var n,t,i,a;if(r.length>500)return function(n){return ir(r,e,n)};if(n="return function evalrational(x){",n+="var ax,s1,s2;",0===(t=r.length))n+="return NaN;";else if(t!==e.length)n+="return NaN;";else if(1===t)n+="return "+r[0]/e[0]+";";else{for(n+="if(x===0.0){return "+r[0]/e[0]+";}",n+="if(x<0.0){ax=-x;}else{ax=x;}",n+="if(ax<=1.0){",n+="s1 = "+r[0],i=t-1,a=1;a<t;a++)n+="+x*",a<i&&(n+="("),n+=r[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="s2 = "+e[0],i=t-1,a=1;a<t;a++)n+="+x*",a<i&&(n+="("),n+=e[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="}else{",n+="x = 1.0/x;",n+="s1 = "+r[i=t-1],a=i-1;a>=0;a--)n+="+x*",a>0&&(n+="("),n+=r[a];for(a=0;a<i-1;a++)n+=")";for(n+=";",n+="s2 = "+e[i=t-1],a=i-1;a>=0;a--)n+="+x*",a>0&&(n+="("),n+=e[a];for(a=0;a<i-1;a++)n+=")";n+=";",n+="}",n+="return s1/s2;"}return n+="}",new nr(n+="//# sourceURL=evalrational.factory.js")()}));var or=Math.floor;function ur(r){return or(r)===r}function fr(r){return ur(r/2)}function cr(r){return fr(r>0?r-1:r+1)}var lr=Number.POSITIVE_INFINITY,sr=Number.NEGATIVE_INFINITY;function pr(r){return r===lr||r===sr}var vr,yr=Math.sqrt,gr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),hr=Object.prototype.toString,dr=Object.prototype.hasOwnProperty,wr="function"==typeof Symbol?Symbol:void 0,br="function"==typeof wr?wr.toStringTag:"",mr=gr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return hr.call(r);n=r[br],a=br,e=null!=(i=r)&&dr.call(i,a);try{r[br]=void 0}catch(e){return hr.call(r)}return t=hr.call(r),e?r[br]=n:delete r[br],t}:function(r){return hr.call(r)},xr="function"==typeof Uint32Array,Ar="function"==typeof Uint32Array?Uint32Array:null,Nr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(xr&&n instanceof Uint32Array||"[object Uint32Array]"===mr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var _r,Er=vr,Ur="function"==typeof Float64Array,Ir="function"==typeof Float64Array?Float64Array:null,Sr="function"==typeof Float64Array?Float64Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,NaN]),n=e,r=(Ur&&n instanceof Float64Array||"[object Float64Array]"===mr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var kr,Fr=_r,jr="function"==typeof Uint8Array,Tr="function"==typeof Uint8Array?Uint8Array:null,Vr="function"==typeof Uint8Array?Uint8Array:void 0;kr=function(){var r,e,n;if("function"!=typeof Tr)return!1;try{e=new Tr(e=[1,3.14,-3.14,256,257]),n=e,r=(jr&&n instanceof Uint8Array||"[object Uint8Array]"===mr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Or,$r=kr,Gr="function"==typeof Uint16Array,Lr="function"==typeof Uint16Array?Uint16Array:null,Hr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,e,n;if("function"!=typeof Lr)return!1;try{e=new Lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Gr&&n instanceof Uint16Array||"[object Uint16Array]"===mr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Rr,Wr={uint16:Or,uint8:$r};(Rr=new Wr.uint16(1))[0]=4660;var Cr,Pr,Mr=52===new Wr.uint8(Rr.buffer)[0];!0===Mr?(Cr=1,Pr=0):(Cr=0,Pr=1);var Zr={HIGH:Cr,LOW:Pr},Xr=new Fr(1),Yr=new Er(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e,n,t){return Xr[0]=r,e[t]=Yr[qr],e[t+n]=Yr[zr],e}function Dr(r){return Br(r,[0,0],1,0)}rr(Dr,"assign",Br);var Jr=!0===Mr?0:1,Kr=new Fr(1),Qr=new Er(Kr.buffer);function re(r,e){return Kr[0]=r,Qr[Jr]=e>>>0,Kr[0]}function ee(r){return 0|r}var ne,te,ie=2147483647,ae=!0===Mr?1:0,oe=new Fr(1),ue=new Er(oe.buffer);function fe(r){return oe[0]=r,ue[ae]}!0===Mr?(ne=1,te=0):(ne=0,te=1);var ce={HIGH:ne,LOW:te},le=new Fr(1),se=new Er(le.buffer),pe=ce.HIGH,ve=ce.LOW;function ye(r,e){return se[pe]=r,se[ve]=e,le[0]}var ge=[0,0];function he(r,e){var n,t;return Dr.assign(r,ge,1,0),n=ge[0],n&=ie,t=fe(e),ye(n|=t&=2147483648,ge[1])}var de=!0===Mr?1:0,we=new Fr(1),be=new Er(we.buffer);function me(r,e){return we[0]=r,be[de]=e>>>0,we[0]}var xe=1023,Ae=1048576,Ne=[1,1.5],_e=[0,.5849624872207642],Ee=[0,1.350039202129749e-8];function Ue(r,e,n,t){return ar(r)||pr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&M(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}rr((function(r){return Ue(r,[0,0],1,0)}),"assign",Ue);var Ie=[0,0],Se=[0,0];function ke(r,e){var n,t;return 0===e||0===r||ar(r)||pr(r)?r:(Ue(r,Ie,1,0),e+=Ie[1],e+=function(r){var e=fe(r);return(e=(2146435072&e)>>>20)-xe|0}(r=Ie[0]),e<-1074?he(0,r):e>1023?r<0?sr:lr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Dr.assign(r,Se,1,0),n=Se[0],n&=2148532223,t*ye(n|=e+xe<<20,Se[1])))}var Fe=1048575,je=1048576,Te=1083179008,Ve=1e300,Oe=1e-300,$e=[0,0],Ge=[0,0];function Le(r,e){var n,t,i,a,o,u,f,c,l,s,p,v,y,g;if(ar(r)||ar(e))return NaN;if(Dr.assign(e,$e,1,0),o=$e[0],0===$e[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return yr(r);if(-.5===e)return 1/yr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(pr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(e===lr)?0:lr}(r,e)}if(Dr.assign(r,$e,1,0),a=$e[0],0===$e[1]){if(0===a)return function(r,e){return e===sr?lr:e===lr?0:e>0?cr(e)?r:0:cr(e)?he(lr,r):lr}(r,e);if(1===r)return 1;if(-1===r&&cr(e))return-1;if(pr(r))return r===sr?Le(-0,-e):e<0?0:lr}if(r<0&&!1===ur(e))return(r-r)/(r-r);if(i=M(r),n=a&ie|0,t=o&ie|0,f=o>>>31|0,u=(u=a>>>31|0)&&cr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(fe(r)&ie)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ve*Ve:u*Oe*Oe;if(n>1072693248)return 0===f?u*Ve*Ve:u*Oe*Oe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=re(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ge,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,l,s,p,v,y,g,h,d,w,b,m,x,A,N;return m=0,n<Ae&&(m-=53,n=fe(e*=9007199254740992)),m+=(n>>20)-xe|0,n=1072693248|(x=1048575&n|0),x<=235662?A=0:x<767610?A=1:(A=0,m+=1,n-=Ae),o=re(i=(w=(e=me(e,n))-(c=Ne[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=me(0,t+=A<<18),d=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=re(f=3+(a=o*o)+(d+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(s=re(s=(w=o*f)+(b=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(b-(s-w))+Ee[A])-((y=re(y=(p=.9617967009544373*s)+v+(l=_e[A])+(h=m),0))-h-l-p),r[0]=y,r[1]=g,r}(Ge,i,n);if(v=(s=(e-(c=re(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Dr.assign(v,$e,1,0),y=ee($e[0]),g=ee($e[1]),y>=Te){if(0!=(y-Te|g))return u*Ve*Ve;if(s+8008566259537294e-32>v-l)return u*Ve*Ve}else if((y&ie)>=1083231232){if(0!=(y-3230714880|g))return u*Oe*Oe;if(s<=v-l)return u*Oe*Oe}return v=function(r,e,n){var t,i,a,o,u,f,c,l,s,p;return s=((l=r&ie|0)>>20)-xe|0,c=0,l>1071644672&&(i=me(0,((c=r+(je>>s+1)>>>0)&~(Fe>>(s=((c&ie)>>20)-xe|0)))>>>0),c=(c&Fe|je)>>20-s>>>0,r<0&&(c=-c),e-=i),r=ee(r=fe(f=1-((f=(a=.6931471824645996*(i=re(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ke(f,c):me(f,r)}(y,l,s),u*v}var He=Math.round;function Re(r,e){var n,t;if(ar(r)||ar(e))return NaN;if(!ur(r)||!ur(e))return NaN;if(e<0)return 0;if(r<0)return n=Re(-r+e-1,e),cr(e)&&(n=-n),n;if(e>r)return 0;if(0===e||e===r)return 1;if(1===e||e===r-1)return r;for(r-e<e&&(e=r-e),n=r,t=2;t<=e;t++)n*=(r-t+1)/t;return ur(n)?n:He(n)}var We={};function Ce(r){var e,n;if(void 0===(e=We[r])){for(e=[],n=0;n<r;n++)e.push(0);for(n=r-1;n>=0;n-=2)e[n]=Re((r+n-1)/2,n);We[r]=e}return e}function Pe(r,e){var n,t;return t=er(Ce(n=M(r)),e),r>=0?t:Le(-1,n-1)*t}rr(Pe,"factory",(function(r){var e,n,t,i;return e=Ce(n=M(r)),t=tr(e),i=Le(-1,n-1),r>=0||1===i?t:function(r){return-1*t(r)}}));var Me=1.4142135623730951;function Ze(r,e){var n,t,i,a;if(ar(r)||ar(e)||r<0||!ur(r))return NaN;if(0===r)return 1;if(1===r)return e;for(t=1,i=0,a=r;a>1;a--)n=e*t-a*i,i=t,t=n;return e*t-i}function Xe(r){return function(){return r}}function Ye(r,e){return Le(2,.5*r)*Ze(r,Me*e)}rr(Ze,"factory",(function(r){return r<0||ar(r)||!ur(r)?Xe(NaN):0===r?Xe(1):function(e){var n,t,i,a;if(ar(e))return NaN;for(t=1,i=0,a=r;a>1;a--)n=e*t-a*i,i=t,t=n;return e*t-i}})),rr(Ye,"factory",(function(r){var e;return r<0||ar(r)||!ur(r)?Xe(NaN):0===r?Xe(1):(e=Le(2,.5*r),function(n){return e*Ze(r,Me*n)})}));var qe=Math.ceil,ze={};function Be(r){var e,n,t,i,a,o,u,f,c;if(void 0===(e=ze[r])){if(f=r+1,e=new Array(f),0===r)e[0]=2;else{for(c=0;c<f;c++)e[c]=0;for(t=qe(n=r/2),i=or(n),c=0;c<=i;c++)a=2*c+r%2,o=2*Re(t+c-1,i-c-1),u=Re(t+c-1,i-c),e[a]+=o+u}ze[r]=e}return e}function De(r,e){var n,t;return t=er(Be(n=M(r)),e),r>=0?t:Le(-1,n)*t}rr(De,"factory",(function(r){var e,n,t,i;return e=Be(n=M(r)),t=tr(e),i=Le(-1,n),r>=0||1===i?t:function(r){return-1*t(r)}}));var Je,Ke=1e6,Qe=1e6;Je=P()?function(r,e){var n,t,i,a,o;if(o={},arguments.length>1&&(o=e),n=o.tolerance||X,i=o.maxTerms||Ke,a=o.initialValue||0,1==("function"==typeof r.next)){for(t of r)if(M(n*(a+=t))>=M(t)||0==--i)break}else do{a+=t=r()}while(M(n*a)<M(t)&&--i);return a}:function(r,e){var n,t,i,a,o;o={},arguments.length>1&&(o=e),n=o.tolerance||X,i=o.maxTerms||Qe,a=o.initialValue||0;do{a+=t=r()}while(M(n*a)<M(t)&&--i);return a};var rn=Je,en={};return W(en,"continuedFraction",Q),W(en,"evalpoly",er),W(en,"evalrational",ir),W(en,"fibpoly",Pe),W(en,"hermitepoly",Ye),W(en,"lucaspoly",De),W(en,"normhermitepoly",Ze),W(en,"sumSeries",rn),en},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=e();
//# sourceMappingURL=index.js.map