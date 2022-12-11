// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}var l=eval;function y(){var r;try{l('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}function v(r){return Math.abs(r)}var s=11754943508222875e-54,p=2220446049250313e-31,b=1e6;function h(r,n,t){var e,o,u,i,f,a,c;if(i=(c=(e="function"==typeof r.next)?r.next().value:r())[1],u=c[0],0===i&&(i=s),f=i,a=0,!0===e)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=s),0===(f=c[1]+c[0]/f)&&(f=s),i*=o=f*(a=1/a))}while(v(o-1)>n&&--t);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=s),0===(f=c[1]+c[0]/f)&&(f=s),i*=o=f*(a=1/a))}while(c&&v(o-1)>n&&--t);return u/i}function w(r,n,t){var e,o,u,i,f,a;if(0===(u=(a=(e="function"==typeof r.next)?r.next().value:r())[1])&&(u=s),i=u,f=0,!0===e)do{(a=r.next().value)&&(0===(f=a[1]+a[0]*f)&&(f=s),0===(i=a[1]+a[0]/i)&&(i=s),u*=o=i*(f=1/f))}while(a&&v(o-1)>n&&--t);else do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=s),0===(i=a[1]+a[0]/i)&&(i=s),u*=o=i*(f=1/f))}while(a&&v(o-1)>n&&--t);return u}var d,m=1e6;function g(r,n,t){var e,o,u,i,f,a;f=(a=r())[1],o=a[0],0===f&&(f=s),u=f,i=0;do{(a=r())&&(0===(i=a[1]+a[0]*i)&&(i=s),0===(u=a[1]+a[0]/u)&&(u=s),f*=e=u*(i=1/i))}while(a&&v(e-1)>n&&--t);return o/f}function x(r,n,t){var e,o,u,i,f;0===(i=(f=r())[1])&&(i=s),o=i,u=0;do{(f=r())&&(0===(u=f[1]+f[0]*u)&&(u=s),0===(o=f[1]+f[0]/o)&&(o=s),i*=e=o*(u=1/u))}while(f&&v(e-1)>n&&--t);return i}d=y()?function(r,n){var t,e,o;return e={},arguments.length>1&&(e=n),t=e.maxIter||b,o=e.tolerance||p,e.keep?w(r,o,t):h(r,o,t)}:function(r,n){var t,e,o;return e={},arguments.length>1&&(e=n),o=e.tolerance||p,t=e.maxIter||m,e.keep?x(r,o,t):g(r,o,t)};var A=d;function N(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t}function U(r){var n,t,e,o;if(r.length>500)return function(n){return _(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,o=1;o<t;o++)n+="+x*",o<e&&(n+="("),n+=r[o];for(o=0;o<e-1;o++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}function j(r,n,t){var e,o,u,i;if(0===(e=r.length))return NaN;if(e!==n.length)return NaN;if(0===t||1===e)return r[0]/n[0];if(v(t)<=1)for(o=r[e-1],u=n[e-1],i=e-2;i>=0;--i)o*=t,u*=t,o+=r[i],u+=n[i];else for(t=1/t,o=r[0],u=n[0],i=1;i<e;++i)o*=t,u*=t,o+=r[i],u+=n[i];return o/u}function I(r){return r!=r}N(_,"factory",U),N(j,"factory",(function(r,n){var t,e,o,u;if(r.length>500)return function(t){return j(r,n,t)};if(t="return function evalrational(x){",t+="var ax,s1,s2;",0===(e=r.length))t+="return NaN;";else if(e!==n.length)t+="return NaN;";else if(1===e)t+="return "+r[0]/n[0]+";";else{for(t+="if(x===0.0){return "+r[0]/n[0]+";}",t+="if(x<0.0){ax=-x;}else{ax=x;}",t+="if(ax<=1.0){",t+="s1 = "+r[0],o=e-1,u=1;u<e;u++)t+="+x*",u<o&&(t+="("),t+=r[u];for(u=0;u<o-1;u++)t+=")";for(t+=";",t+="s2 = "+n[0],o=e-1,u=1;u<e;u++)t+="+x*",u<o&&(t+="("),t+=n[u];for(u=0;u<o-1;u++)t+=")";for(t+=";",t+="}else{",t+="x = 1.0/x;",t+="s1 = "+r[o=e-1],u=o-1;u>=0;u--)t+="+x*",u>0&&(t+="("),t+=r[u];for(u=0;u<o-1;u++)t+=")";for(t+=";",t+="s2 = "+n[o=e-1],u=o-1;u>=0;u--)t+="+x*",u>0&&(t+="("),t+=n[u];for(u=0;u<o-1;u++)t+=")";t+=";",t+="}",t+="return s1/s2;"}return t+="}",t+="//# sourceURL=evalrational.factory.js",new Function(t)()}));var F=Math.floor;function S(r){return F(r)===r}function O(r){return S(r/2)}function T(r){return O(r>0?r-1:r+1)}var E=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY;function G(r){return r===E||r===H}var L,P=Math.sqrt,V="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),k=Object.prototype.toString,M=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol.toStringTag:"",R=V&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return k.call(r);t=r[W],u=W,n=null!=(o=r)&&M.call(o,u);try{r[W]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[W]=t:delete r[W],e}:function(r){return k.call(r)},Y="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,C="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(Y&&t instanceof Uint32Array||"[object Uint32Array]"===R(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B=L,D="function"==typeof Float64Array,J="function"==typeof Float64Array?Float64Array:null,K="function"==typeof Float64Array?Float64Array:void 0;z=function(){var r,n,t;if("function"!=typeof J)return!1;try{n=new J([1,3.14,-3.14,NaN]),t=n,r=(D&&t instanceof Float64Array||"[object Float64Array]"===R(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,X=z,Z="function"==typeof Uint8Array,$="function"==typeof Uint8Array?Uint8Array:null,rr="function"==typeof Uint8Array?Uint8Array:void 0;Q=function(){var r,n,t;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,256,257]),t=n,r=(Z&&t instanceof Uint8Array||"[object Uint8Array]"===R(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr=Q,er="function"==typeof Uint16Array,or="function"==typeof Uint16Array?Uint16Array:null,ur="function"==typeof Uint16Array?Uint16Array:void 0;nr=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,65536,65537]),t=n,r=(er&&t instanceof Uint16Array||"[object Uint16Array]"===R(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir,fr={uint16:nr,uint8:tr};(ir=new fr.uint16(1))[0]=4660;var ar,cr,lr=52===new fr.uint8(ir.buffer)[0];!0===lr?(ar=1,cr=0):(ar=0,cr=1);var yr={HIGH:ar,LOW:cr},vr=new X(1),sr=new B(vr.buffer),pr=yr.HIGH,br=yr.LOW;function hr(r,n,t,e){return vr[0]=r,n[e]=sr[pr],n[e+t]=sr[br],n}function wr(r){return hr(r,[0,0],1,0)}N(wr,"assign",hr);var dr=!0===lr?0:1,mr=new X(1),gr=new B(mr.buffer);function xr(r,n){return mr[0]=r,gr[dr]=n>>>0,mr[0]}function Ar(r){return 0|r}var Nr,_r,Ur=2147483647,jr=!0===lr?1:0,Ir=new X(1),Fr=new B(Ir.buffer);function Sr(r){return Ir[0]=r,Fr[jr]}!0===lr?(Nr=1,_r=0):(Nr=0,_r=1);var Or={HIGH:Nr,LOW:_r},Tr=new X(1),Er=new B(Tr.buffer),Hr=Or.HIGH,Gr=Or.LOW;function Lr(r,n){return Er[Hr]=r,Er[Gr]=n,Tr[0]}var Pr=[0,0];function Vr(r,n){var t,e;return wr.assign(r,Pr,1,0),t=Pr[0],t&=Ur,e=Sr(n),Lr(t|=e&=2147483648,Pr[1])}var kr=!0===lr?1:0,Mr=new X(1),Wr=new B(Mr.buffer);function Rr(r,n){return Mr[0]=r,Wr[kr]=n>>>0,Mr[0]}var Yr=1023,qr=1048576,Cr=[1,1.5],zr=[0,.5849624872207642],Br=[0,1.350039202129749e-8];function Dr(r,n,t,e){return I(r)||G(r)?(n[e]=r,n[e+t]=0,n):0!==r&&v(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}N((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e;return 0===n||0===r||I(r)||G(r)?r:(Dr(r,Jr,1,0),n+=Jr[1],n+=function(r){var n=Sr(r);return(n=(2146435072&n)>>>20)-Yr|0}(r=Jr[0]),n<-1074?Vr(0,r):n>1023?r<0?H:E:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr.assign(r,Kr,1,0),t=Kr[0],t&=2148532223,e*Lr(t|=n+Yr<<20,Kr[1])))}var Xr=1048575,Zr=1048576,$r=1083179008,rn=1e300,nn=1e-300,tn=[0,0],en=[0,0];function on(r,n){var t,e,o,u,i,f,a,c,l,y,s,p,b,h;if(I(r)||I(n))return NaN;if(wr.assign(n,tn,1,0),i=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return P(r);if(-.5===n)return 1/P(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(G(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:v(r)<1==(n===E)?0:E}(r,n)}if(wr.assign(r,tn,1,0),u=tn[0],0===tn[1]){if(0===u)return function(r,n){return n===H?E:n===E?0:n>0?T(n)?r:0:T(n)?Vr(E,r):E}(r,n);if(1===r)return 1;if(-1===r&&T(n))return-1;if(G(r))return r===H?on(-0,-n):n<0?0:E}if(r<0&&!1===S(n))return(r-r)/(r-r);if(o=v(r),t=u&Ur|0,e=i&Ur|0,a=i>>>31|0,f=(f=u>>>31|0)&&T(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Sr(r)&Ur)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*rn*rn:f*nn*nn;if(t>1072693248)return 0===a?f*rn*rn:f*nn*nn;s=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=xr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(en,o)}else s=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,s,p,b,h,w,d,m,g,x,A,N;return g=0,t<qr&&(g-=53,t=Sr(n*=9007199254740992)),g+=(t>>20)-Yr|0,t=1072693248|(x=1048575&t|0),x<=235662?A=0:x<767610?A=1:(A=0,g+=1,t-=qr),i=xr(o=(d=(n=Rr(n,t))-(c=Cr[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Rr(0,e+=A<<18),w=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=xr(a=3+(u=i*i)+(w+=(f=m*(d-i*a-i*(n-(a-c))))*(i+o)),0),b=(s=-7.028461650952758e-9*(y=xr(y=(d=i*a)+(m=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(m-(y-d))+Br[A])-((p=xr(p=(v=.9617967009544373*y)+s+(l=zr[A])+(h=g),0))-h-l-v),r[0]=p,r[1]=b,r}(en,o,t);if(p=(y=(n-(c=xr(n,0)))*s[0]+n*s[1])+(l=c*s[0]),wr.assign(p,tn,1,0),b=Ar(tn[0]),h=Ar(tn[1]),b>=$r){if(0!=(b-$r|h))return f*rn*rn;if(y+8008566259537294e-32>p-l)return f*rn*rn}else if((b&Ur)>=1083231232){if(0!=(b-3230714880|h))return f*nn*nn;if(y<=p-l)return f*nn*nn}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&Ur|0)>>20)-Yr|0,c=0,l>1071644672&&(o=Rr(0,((c=r+(Zr>>y+1)>>>0)&~(Xr>>(y=((c&Ur)>>20)-Yr|0)))>>>0),c=(c&Xr|Zr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Ar(r=Sr(a=1-((a=(u=.6931471824645996*(o=xr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Qr(a,c):Rr(a,r)}(b,l,y),f*p}var un=Math.round;function fn(r,n){var t,e;if(I(r)||I(n))return NaN;if(!S(r)||!S(n))return NaN;if(n<0)return 0;if(r<0)return t=fn(-r+n-1,n),T(n)&&(t=-t),t;if(n>r)return 0;if(0===n||n===r)return 1;if(1===n||n===r-1)return r;for(r-n<n&&(n=r-n),t=r,e=2;e<=n;e++)t*=(r-e+1)/e;return S(t)?t:un(t)}var an={};function cn(r){var n,t;if(void 0===(n=an[r])){for(n=[],t=0;t<r;t++)n.push(0);for(t=r-1;t>=0;t-=2)n[t]=fn((r+t-1)/2,t);an[r]=n}return n}function ln(r,n){var t,e;return e=_(cn(t=v(r)),n),r>=0?e:on(-1,t-1)*e}N(ln,"factory",(function(r){var n,t,e,o;return n=cn(t=v(r)),e=U(n),o=on(-1,t-1),r>=0||1===o?e:function(r){return-1*e(r)}}));var yn=1.4142135623730951;function vn(r,n){var t,e,o,u;if(I(r)||I(n)||r<0||!S(r))return NaN;if(0===r)return 1;if(1===r)return n;for(e=1,o=0,u=r;u>1;u--)t=n*e-u*o,o=e,e=t;return n*e-o}function sn(r){return function(){return r}}function pn(r,n){return on(2,.5*r)*vn(r,yn*n)}N(vn,"factory",(function(r){return r<0||I(r)||!S(r)?sn(NaN):0===r?sn(1):function(n){var t,e,o,u;if(I(n))return NaN;for(e=1,o=0,u=r;u>1;u--)t=n*e-u*o,o=e,e=t;return n*e-o}})),N(pn,"factory",(function(r){var n;return r<0||I(r)||!S(r)?sn(NaN):0===r?sn(1):(n=on(2,.5*r),function(t){return n*vn(r,yn*t)})}));var bn=Math.ceil,hn={};function wn(r){var n,t,e,o,u,i,f,a,c;if(void 0===(n=hn[r])){if(a=r+1,n=new Array(a),0===r)n[0]=2;else{for(c=0;c<a;c++)n[c]=0;for(e=bn(t=r/2),o=F(t),c=0;c<=o;c++)u=2*c+r%2,i=2*fn(e+c-1,o-c-1),f=fn(e+c-1,o-c),n[u]+=i+f}hn[r]=n}return n}function dn(r,n){var t,e;return e=_(wn(t=v(r)),n),r>=0?e:on(-1,t)*e}N(dn,"factory",(function(r){var n,t,e,o;return n=wn(t=v(r)),e=U(n),o=on(-1,t),r>=0||1===o?e:function(r){return-1*e(r)}}));var mn,gn=1e6,xn=1e6;mn=y()?function(r,n){var t,e,o,u,i;if(i={},arguments.length>1&&(i=n),t=i.tolerance||p,o=i.maxTerms||gn,u=i.initialValue||0,1==("function"==typeof r.next)){for(e of r)if(v(t*(u+=e))>=v(e)||0==--o)break}else do{u+=e=r()}while(v(t*u)<v(e)&&--o);return u}:function(r,n){var t,e,o,u,i;i={},arguments.length>1&&(i=n),t=i.tolerance||p,o=i.maxTerms||xn,u=i.initialValue||0;do{u+=e=r()}while(v(t*u)<v(e)&&--o);return u};var An=mn,Nn={};return c(Nn,"continuedFraction",A),c(Nn,"evalpoly",_),c(Nn,"evalrational",j),c(Nn,"fibpoly",ln),c(Nn,"hermitepoly",pn),c(Nn,"lucaspoly",dn),c(Nn,"normhermitepoly",vn),c(Nn,"sumSeries",An),Nn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).tools=n();
//# sourceMappingURL=browser.js.map
