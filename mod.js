// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&a&&a.call(r,n,t.set),r},v=n()?c:l,y=v;var p=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},s=eval;var h=function(){var r;try{s('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r},b=h;var w=function(r){return Math.abs(r)},m=2220446049250313e-31,d=w,A=m;function x(r,n,t){var e,u,o,a,i,f,c;if(a=(c=(e="function"==typeof r.next)?r.next().value:r())[1],o=c[0],0===a&&(a=11754943508222875e-54),i=a,f=0,!0===e)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=11754943508222875e-54),0===(i=c[1]+c[0]/i)&&(i=11754943508222875e-54),a*=u=i*(f=1/f))}while(d(u-1)>n&&--t);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=11754943508222875e-54),0===(i=c[1]+c[0]/i)&&(i=11754943508222875e-54),a*=u=i*(f=1/f))}while(c&&d(u-1)>n&&--t);return o/a}function N(r,n,t){var e,u,o,a,i,f;if(0===(o=(f=(e="function"==typeof r.next)?r.next().value:r())[1])&&(o=11754943508222875e-54),a=o,i=0,!0===e)do{(f=r.next().value)&&(0===(i=f[1]+f[0]*i)&&(i=11754943508222875e-54),0===(a=f[1]+f[0]/a)&&(a=11754943508222875e-54),o*=u=a*(i=1/i))}while(f&&d(u-1)>n&&--t);else do{(f=r())&&(0===(i=f[1]+f[0]*i)&&(i=11754943508222875e-54),0===(a=f[1]+f[0]/a)&&(a=11754943508222875e-54),o*=u=a*(i=1/i))}while(f&&d(u-1)>n&&--t);return o}var _=function(r,n){var t,e,u;return e={},arguments.length>1&&(e=n),t=e.maxIter||1e6,u=e.tolerance||A,e.keep?N(r,u,t):x(r,u,t)},g=w,U=m;function j(r,n,t){var e,u,o,a,i,f;i=(f=r())[1],u=f[0],0===i&&(i=11754943508222875e-54),o=i,a=0;do{(f=r())&&(0===(a=f[1]+f[0]*a)&&(a=11754943508222875e-54),0===(o=f[1]+f[0]/o)&&(o=11754943508222875e-54),i*=e=o*(a=1/a))}while(f&&g(e-1)>n&&--t);return u/i}function I(r,n,t){var e,u,o,a,i;0===(a=(i=r())[1])&&(a=11754943508222875e-54),u=a,o=0;do{(i=r())&&(0===(o=i[1]+i[0]*o)&&(o=11754943508222875e-54),0===(u=i[1]+i[0]/u)&&(u=11754943508222875e-54),a*=e=u*(o=1/o))}while(i&&g(e-1)>n&&--t);return a}var F=function(r,n){var t,e,u;return e={},arguments.length>1&&(e=n),u=e.tolerance||U,t=e.maxIter||1e6,e.keep?I(r,u,t):j(r,u,t)},S=_,O=F,E=b()?S:O,T=v;var H=function(r,n,t){T(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var G=function(r,n){var t,e;if((e=r.length)<2||0===n)return 0===e?0:r[0];for(t=r[e-=1]*n+r[e-1],e-=2;e>=0;)t=t*n+r[e],e-=1;return t},L=G;var P=G;H(P,"factory",(function(r){var n,t,e,u;if(r.length>500)return function(n){return L(r,n)};if(n="return function evalpoly(x){",0===(t=r.length))n+="return 0.0;";else if(1===t)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],e=t-1,u=1;u<t;u++)n+="+x*",u<e&&(n+="("),n+=r[u];for(u=0;u<e-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var V=P,k=w;var M=function(r,n,t){var e,u,o,a;if(0===(e=r.length))return NaN;if(e!==n.length)return NaN;if(0===t||1===e)return r[0]/n[0];if(k(t)<=1)for(u=r[e-1],o=n[e-1],a=e-2;a>=0;--a)u*=t,o*=t,u+=r[a],o+=n[a];else for(t=1/t,u=r[0],o=n[0],a=1;a<e;++a)u*=t,o*=t,u+=r[a],o+=n[a];return u/o},W=M;var R=M;H(R,"factory",(function(r,n){var t,e,u,o;if(r.length>500)return function(t){return W(r,n,t)};if(t="return function evalrational(x){",t+="var ax,s1,s2;",0===(e=r.length))t+="return NaN;";else if(e!==n.length)t+="return NaN;";else if(1===e)t+="return "+r[0]/n[0]+";";else{for(t+="if(x===0.0){return "+r[0]/n[0]+";}",t+="if(x<0.0){ax=-x;}else{ax=x;}",t+="if(ax<=1.0){",t+="s1 = "+r[0],u=e-1,o=1;o<e;o++)t+="+x*",o<u&&(t+="("),t+=r[o];for(o=0;o<u-1;o++)t+=")";for(t+=";",t+="s2 = "+n[0],u=e-1,o=1;o<e;o++)t+="+x*",o<u&&(t+="("),t+=n[o];for(o=0;o<u-1;o++)t+=")";for(t+=";",t+="}else{",t+="x = 1.0/x;",t+="s1 = "+r[u=e-1],o=u-1;o>=0;o--)t+="+x*",o>0&&(t+="("),t+=r[o];for(o=0;o<u-1;o++)t+=")";for(t+=";",t+="s2 = "+n[u=e-1],o=u-1;o>=0;o--)t+="+x*",o>0&&(t+="("),t+=n[o];for(o=0;o<u-1;o++)t+=")";t+=";",t+="}",t+="return s1/s2;"}return t+="}",t+="//# sourceURL=evalrational.factory.js",new Function(t)()}));var Y=R;var q=function(r){return r!=r},C=Math.floor,z=C;var B=function(r){return z(r)===r},D=B;var J=function(r){return D(r/2)};var K=function(r){return J(r>0?r-1:r+1)},Q=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY,Z=Q,$=X;var rr=function(r){return r===Z||r===$},nr=Math.sqrt;var tr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var er=function(){return tr&&"symbol"==typeof Symbol.toStringTag},ur=Object.prototype.toString,or=ur;var ar=function(r){return or.call(r)},ir=Object.prototype.hasOwnProperty;var fr=function(r,n){return null!=r&&ir.call(r,n)},cr="function"==typeof Symbol?Symbol.toStringTag:"",lr=fr,vr=cr,yr=ur;var pr=ar,sr=function(r){var n,t,e;if(null==r)return yr.call(r);t=r[vr],n=lr(r,vr);try{r[vr]=void 0}catch(n){return yr.call(r)}return e=yr.call(r),n?r[vr]=t:delete r[vr],e},hr=er()?sr:pr,br=hr,wr="function"==typeof Uint32Array;var mr="function"==typeof Uint32Array?Uint32Array:null,dr=function(r){return wr&&r instanceof Uint32Array||"[object Uint32Array]"===br(r)},Ar=mr;var xr=function(){var r,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,4294967296,4294967297]),r=dr(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Nr="function"==typeof Uint32Array?Uint32Array:void 0,_r=function(){throw new Error("not implemented")},gr=xr()?Nr:_r,Ur=hr,jr="function"==typeof Float64Array;var Ir="function"==typeof Float64Array?Float64Array:null,Fr=function(r){return jr&&r instanceof Float64Array||"[object Float64Array]"===Ur(r)},Sr=Ir;var Or=function(){var r,n;if("function"!=typeof Sr)return!1;try{n=new Sr([1,3.14,-3.14,NaN]),r=Fr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Er="function"==typeof Float64Array?Float64Array:void 0,Tr=function(){throw new Error("not implemented")},Hr=Or()?Er:Tr,Gr=hr,Lr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null,Vr=function(r){return Lr&&r instanceof Uint8Array||"[object Uint8Array]"===Gr(r)},kr=Pr;var Mr=function(){var r,n;if("function"!=typeof kr)return!1;try{n=new kr(n=[1,3.14,-3.14,256,257]),r=Vr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Wr="function"==typeof Uint8Array?Uint8Array:void 0,Rr=function(){throw new Error("not implemented")},Yr=Mr()?Wr:Rr,qr=hr,Cr="function"==typeof Uint16Array;var zr="function"==typeof Uint16Array?Uint16Array:null,Br=function(r){return Cr&&r instanceof Uint16Array||"[object Uint16Array]"===qr(r)},Dr=zr;var Jr=function(){var r,n;if("function"!=typeof Dr)return!1;try{n=new Dr(n=[1,3.14,-3.14,65536,65537]),r=Br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0,Xr=function(){throw new Error("not implemented")},Zr={uint16:Jr()?Qr:Xr,uint8:Yr};(Kr=new Zr.uint16(1))[0]=4660;var $r,rn,nn=52===new Zr.uint8(Kr.buffer)[0];!0===nn?($r=1,rn=0):($r=0,rn=1);var tn=gr,en={HIGH:$r,LOW:rn},un=new Hr(1),on=new tn(un.buffer),an=en.HIGH,fn=en.LOW;var cn=function(r,n){return un[0]=n,r[0]=on[an],r[1]=on[fn],r};var ln=function(r,n){return 1===arguments.length?cn([0,0],r):cn(r,n)},vn=gr,yn=!0===nn?0:1,pn=new Hr(1),sn=new vn(pn.buffer);var hn=function(r,n){return pn[0]=r,sn[yn]=n>>>0,pn[0]},bn=hn;var wn=function(r){return 0|r},mn=gr,dn=!0===nn?1:0,An=new Hr(1),xn=new mn(An.buffer);var Nn,_n,gn=function(r){return An[0]=r,xn[dn]};!0===nn?(Nn=1,_n=0):(Nn=0,_n=1);var Un=gr,jn={HIGH:Nn,LOW:_n},In=new Hr(1),Fn=new Un(In.buffer),Sn=jn.HIGH,On=jn.LOW;var En=function(r,n){return Fn[Sn]=r,Fn[On]=n,In[0]},Tn=En,Hn=ln,Gn=gn,Ln=Tn,Pn=[0,0];var Vn=function(r,n){var t,e;return Hn(Pn,r),t=Pn[0],t&=2147483647,e=Gn(n),Ln(t|=e&=2147483648,Pn[1])},kn=K,Mn=Vn,Wn=X,Rn=Q;var Yn=function(r,n){return n===Wn?Rn:n===Rn?0:n>0?kn(n)?r:0:kn(n)?Mn(Rn,r):Rn},qn=gn;var Cn=function(r,n){return(2147483647&qn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},zn=w,Bn=Q;var Dn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:zn(r)<1==(n===Bn)?0:Bn},Jn=gr,Kn=!0===nn?1:0,Qn=new Hr(1),Xn=new Jn(Qn.buffer);var Zn=function(r,n){return Qn[0]=r,Xn[Kn]=n>>>0,Qn[0]};var $n=gn,rt=bn,nt=Zn,tt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},et=[1,1.5],ut=[0,.5849624872207642],ot=[0,1.350039202129749e-8];var at=bn,it=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ft=rr,ct=q,lt=w;var vt=function(r,n){return ct(n)||ft(n)?(r[0]=n,r[1]=0,r):0!==n&&lt(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var yt=gn;var pt=function(r){var n=yt(r);return(n=(2146435072&n)>>>20)-1023|0},st=Q,ht=X,bt=q,wt=rr,mt=Vn,dt=function(r,n){return 1===arguments.length?vt([0,0],r):vt(r,n)},At=pt,xt=ln,Nt=Tn,_t=[0,0],gt=[0,0];var Ut=function(r,n){var t,e;return 0===n||0===r||bt(r)||wt(r)?r:(dt(_t,r),n+=_t[1],(n+=At(r=_t[0]))<-1074?mt(0,r):n>1023?r<0?ht:st:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,xt(gt,r),t=gt[0],t&=2148532223,e*Nt(t|=n+1023<<20,gt[1])))};var jt=gn,It=Zn,Ft=bn,St=wn,Ot=Ut,Et=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Tt=q,Ht=K,Gt=rr,Lt=B,Pt=nr,Vt=w,kt=ln,Mt=bn,Wt=wn,Rt=X,Yt=Q,qt=Yn,Ct=Cn,zt=Dn,Bt=function(r,n,t){var e,u,o,a,i,f,c,l,v,y,p,s,h,b,w,m,d,A,x,N;return A=0,t<1048576&&(A-=53,t=$n(n*=9007199254740992)),A+=(t>>20)-1023|0,t=1072693248|(x=1048575&t|0),x<=235662?N=0:x<767610?N=1:(N=0,A+=1,t-=1048576),e=524288+(t>>1|536870912),i=(d=1/((n=nt(n,t))+(c=et[N])))*((m=n-c)-(a=rt(u=m*d,0))*(f=nt(0,e+=N<<18))-a*(n-(f-c))),w=(o=u*u)*o*tt(o),f=rt(f=3+(o=a*a)+(w+=i*(a+u)),0),h=(p=-7.028461650952758e-9*(v=rt(v=(m=a*f)+(d=i*f+(w-(f-3-o))*u),0))+.9617966939259756*(d-(v-m))+ot[N])-((s=rt(s=(y=.9617967009544373*v)+p+(l=ut[N])+(b=A),0))-b-l-y),r[0]=s,r[1]=h,r},Dt=function(r,n){var t,e,u,o,a;return t=(a=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*it(u)))-((e=at(e=(o=1.4426950216293335*u)+a,0))-o),r[0]=e,r[1]=t,r},Jt=function(r,n,t){var e,u,o,a,i,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=It(0,e)),f=(i=.6931471805599453*(t-((o=Ft(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(a=.6931471824645996*o)+i)-a),u=c-(o=c*c)*Et(o),r=jt(c=1-(c*u/(u-2)-(f+c*f)-c)),r=St(r),c=(r+=l<<20>>>0)>>20<=0?Ot(c,l):It(c,r)},Kt=1e300,Qt=1e-300,Xt=[0,0],Zt=[0,0];var $t=function r(n,t){var e,u,o,a,i,f,c,l,v,y,p,s,h,b;if(Tt(n)||Tt(t))return NaN;if(kt(Xt,t),i=Xt[0],0===Xt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Pt(n);if(-.5===t)return 1/Pt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Gt(t))return zt(n,t)}if(kt(Xt,n),a=Xt[0],0===Xt[1]){if(0===a)return qt(n,t);if(1===n)return 1;if(-1===n&&Ht(t))return-1;if(Gt(n))return n===Rt?r(-0,-t):t<0?0:Yt}if(n<0&&!1===Lt(t))return(n-n)/(n-n);if(o=Vt(n),e=2147483647&a|0,u=2147483647&i|0,c=i>>>31|0,f=(f=a>>>31|0)&&Ht(t)?-1:1,u>1105199104){if(u>1139802112)return Ct(n,t);if(e<1072693247)return 1===c?f*Kt*Kt:f*Qt*Qt;if(e>1072693248)return 0===c?f*Kt*Kt:f*Qt*Qt;p=Dt(Zt,o)}else p=Bt(Zt,o,e);if(y=(t-(l=Mt(t,0)))*p[0]+t*p[1],v=l*p[0],kt(Xt,s=y+v),h=Wt(Xt[0]),b=Wt(Xt[1]),h>=1083179008){if(0!=(h-1083179008|b))return f*Kt*Kt;if(y+8008566259537294e-32>s-v)return f*Kt*Kt}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|b))return f*Qt*Qt;if(y<=s-v)return f*Qt*Qt}return f*(s=Jt(h,v,y))},re=$t,ne=Math.round,te=B,ee=q,ue=K,oe=ne;var ae=function r(n,t){var e,u;if(ee(n)||ee(t))return NaN;if(!te(n)||!te(t))return NaN;if(t<0)return 0;if(n<0)return e=r(-n+t-1,t),ue(t)&&(e=-e),e;if(t>n)return 0;if(0===t||t===n)return 1;if(1===t||t===n-1)return n;for(n-t<t&&(t=n-t),e=n,u=2;u<=t;u++)e*=(n-u+1)/u;return te(e)?e:oe(e)},ie=ae,fe=ie,ce={};var le=function(r){var n,t;if(void 0===(n=ce[r])){for(n=[],t=0;t<r;t++)n.push(0);for(t=r-1;t>=0;t-=2)n[t]=fe((r+t-1)/2,t);ce[r]=n}return n},ve=V,ye=re,pe=w,se=le;var he=V.factory,be=re,we=w,me=le;var de=function(r,n){var t,e,u;return e=pe(r),t=se(e),u=ve(t,n),r>=0?u:ye(-1,e-1)*u};H(de,"factory",(function(r){var n,t,e,u;return t=we(r),n=me(t),e=he(n),u=be(-1,t-1),r>=0||1===u?e:function(r){return-1*e(r)}}));var Ae=de,xe=q,Ne=B;var _e=function(r){return function(){return r}},ge=_e,Ue=q,je=B;var Ie=function(r,n){var t,e,u,o;if(xe(r)||xe(n)||r<0||!Ne(r))return NaN;if(0===r)return 1;if(1===r)return n;for(e=1,u=0,o=r;o>1;o--)t=n*e-o*u,u=e,e=t;return n*e-u};H(Ie,"factory",(function(r){return r<0||Ue(r)||!je(r)?ge(NaN):0===r?ge(1):function(n){var t,e,u,o;if(Ue(n))return NaN;for(e=1,u=0,o=r;o>1;o--)t=n*e-o*u,u=e,e=t;return n*e-u}}));var Fe=Ie,Se=re,Oe=Fe;var Ee=_e,Te=q,He=B,Ge=re,Le=Fe;var Pe=function(r,n){return Se(2,.5*r)*Oe(r,1.4142135623730951*n)};H(Pe,"factory",(function(r){var n;return r<0||Te(r)||!He(r)?Ee(NaN):0===r?Ee(1):(n=Ge(2,.5*r),function(t){return n*Le(r,1.4142135623730951*t)})}));var Ve=Pe,ke=Math.ceil,Me=ie,We=C,Re=ke,Ye={};var qe=function(r){var n,t,e,u,o,a,i,f,c;if(void 0===(n=Ye[r])){if(f=r+1,n=new Array(f),0===r)n[0]=2;else{for(c=0;c<f;c++)n[c]=0;for(e=Re(t=r/2),u=We(t),c=0;c<=u;c++)o=2*c+r%2,a=2*Me(e+c-1,u-c-1),i=Me(e+c-1,u-c),n[o]+=a+i}Ye[r]=n}return n},Ce=V,ze=re,Be=w,De=qe;var Je=V.factory,Ke=re,Qe=w,Xe=qe;var Ze=function(r,n){var t,e,u;return e=Be(r),t=De(e),u=Ce(t,n),r>=0?u:ze(-1,e)*u};H(Ze,"factory",(function(r){var n,t,e,u;return t=Qe(r),n=Xe(t),e=Je(n),u=Ke(-1,t),r>=0||1===u?e:function(r){return-1*e(r)}}));var $e=Ze,ru=w,nu=m;var tu=function(r,n){var t,e,u,o,a;if(a={},arguments.length>1&&(a=n),t=a.tolerance||nu,u=a.maxTerms||1e6,o=a.initialValue||0,!0===("function"==typeof r.next)){for(e of r)if(ru(t*(o+=e))>=ru(e)||0==--u)break}else do{o+=e=r()}while(ru(t*o)<ru(e)&&--u);return o},eu=w,uu=m;var ou=function(r,n){var t,e,u,o,a;a={},arguments.length>1&&(a=n),t=a.tolerance||uu,u=a.maxTerms||1e6,o=a.initialValue||0;do{o+=e=r()}while(eu(t*o)<eu(e)&&--u);return o},au=tu,iu=ou,fu=b()?au:iu,cu=p,lu={};cu(lu,"continuedFraction",E),cu(lu,"evalpoly",V),cu(lu,"evalrational",Y),cu(lu,"fibpoly",Ae),cu(lu,"hermitepoly",Ve),cu(lu,"lucaspoly",$e),cu(lu,"normhermitepoly",Fe),cu(lu,"sumSeries",fu);var vu=lu;export{E as continuedFraction,vu as default,V as evalpoly,Y as evalrational,Ae as fibpoly,Ve as hermitepoly,$e as lucaspoly,Fe as normhermitepoly,fu as sumSeries};
//# sourceMappingURL=mod.js.map
