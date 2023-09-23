// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return r!=r}var t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function n(r){return r===t||r===e}function o(r){return r!=r}var i=Math.floor;function a(r){return i(r)===r}function u(r){return a(r/2)}function c(r){return u(r>0?r-1:r+1)}var l=Math.sqrt;function f(r){return Math.abs(r)}var p,y="function"==typeof Object.defineProperty?Object.defineProperty:null,s=Object.defineProperty,b=Object.prototype,g=b.toString,d=b.__defineGetter__,v=b.__defineSetter__,m=b.__lookupGetter__,h=b.__lookupSetter__;p=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?s:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===g.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(r,t)||h.call(r,t)?(n=r.__proto__,r.__proto__=b,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&d&&d.call(r,t,e.get),a&&v&&v.call(r,t,e.set),r};var w=p;function _(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var S=_(),A=Object.prototype.toString,E=Object.prototype.hasOwnProperty;function j(r,t){return null!=r&&E.call(r,t)}var F,T="function"==typeof Symbol?Symbol.toStringTag:"",N=S&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return A.call(r);e=r[T],t=j(r,T);try{r[T]=void 0}catch(t){return A.call(r)}return n=A.call(r),t?r[T]=e:delete r[T],n}:function(r){return A.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,V="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,t,e;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(I&&e instanceof Uint32Array||"[object Uint32Array]"===N(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var k,U=F,x=_(),P=Object.prototype.toString,G="function"==typeof Symbol?Symbol.toStringTag:"",C=x&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return P.call(r);e=r[G],t=j(r,G);try{r[G]=void 0}catch(t){return P.call(r)}return n=P.call(r),t?r[G]=e:delete r[G],n}:function(r){return P.call(r)},L="function"==typeof Float64Array,$="function"==typeof Float64Array?Float64Array:null,R="function"==typeof Float64Array?Float64Array:void 0;k=function(){var r,t,e;if("function"!=typeof $)return!1;try{t=new $([1,3.14,-3.14,NaN]),e=t,r=(L&&e instanceof Float64Array||"[object Float64Array]"===C(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Y,H=k,W=_(),M=Object.prototype.toString,Z="function"==typeof Symbol?Symbol.toStringTag:"",B=W&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return M.call(r);e=r[Z],t=j(r,Z);try{r[Z]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[Z]=e:delete r[Z],n}:function(r){return M.call(r)},X="function"==typeof Uint8Array,q="function"==typeof Uint8Array?Uint8Array:null,z="function"==typeof Uint8Array?Uint8Array:void 0;Y=function(){var r,t,e;if("function"!=typeof q)return!1;try{t=new q(t=[1,3.14,-3.14,256,257]),e=t,r=(X&&e instanceof Uint8Array||"[object Uint8Array]"===B(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var J,D=Y,K=_(),Q=Object.prototype.toString,rr="function"==typeof Symbol?Symbol.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Q.call(r);e=r[rr],t=j(r,rr);try{r[rr]=void 0}catch(t){return Q.call(r)}return n=Q.call(r),t?r[rr]=e:delete r[rr],n}:function(r){return Q.call(r)},er="function"==typeof Uint16Array,nr="function"==typeof Uint16Array?Uint16Array:null,or="function"==typeof Uint16Array?Uint16Array:void 0;J=function(){var r,t,e;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(er&&e instanceof Uint16Array||"[object Uint16Array]"===tr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir,ar={uint16:J,uint8:D};(ir=new ar.uint16(1))[0]=4660;var ur,cr,lr=52===new ar.uint8(ir.buffer)[0];!0===lr?(ur=1,cr=0):(ur=0,cr=1);var fr={HIGH:ur,LOW:cr},pr=new H(1),yr=new U(pr.buffer),sr=fr.HIGH,br=fr.LOW;function gr(r,t,e,n){return pr[0]=r,t[n]=yr[sr],t[n+e]=yr[br],t}function dr(r){return gr(r,[0,0],1,0)}w(dr,"assign",{configurable:!1,enumerable:!1,writable:!1,value:gr});var vr,mr=_(),hr=Object.prototype.toString,wr="function"==typeof Symbol?Symbol.toStringTag:"",_r=mr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return hr.call(r);e=r[wr],t=j(r,wr);try{r[wr]=void 0}catch(t){return hr.call(r)}return n=hr.call(r),t?r[wr]=e:delete r[wr],n}:function(r){return hr.call(r)},Sr="function"==typeof Float64Array,Ar="function"==typeof Float64Array?Float64Array:null,Er="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,t;if("function"!=typeof Ar)return!1;try{r=function(r){return Sr&&r instanceof Float64Array||"[object Float64Array]"===_r(r)}(t=new Ar([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var jr=!0===lr?0:1,Fr=new vr(1),Tr=new U(Fr.buffer);function Nr(r,t){return Fr[0]=r,Tr[jr]=t>>>0,Fr[0]}function Ir(r){return 0|r}var Or,Vr=Number.NEGATIVE_INFINITY,kr=Number.POSITIVE_INFINITY,Ur=2147483647,xr=_(),Pr=Object.prototype.toString,Gr="function"==typeof Symbol?Symbol.toStringTag:"",Cr=xr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Pr.call(r);e=r[Gr],t=j(r,Gr);try{r[Gr]=void 0}catch(t){return Pr.call(r)}return n=Pr.call(r),t?r[Gr]=e:delete r[Gr],n}:function(r){return Pr.call(r)},Lr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Rr="function"==typeof Float64Array?Float64Array:void 0;Or=function(){var r,t;if("function"!=typeof $r)return!1;try{r=function(r){return Lr&&r instanceof Float64Array||"[object Float64Array]"===Cr(r)}(t=new $r([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Yr=!0===lr?1:0,Hr=new Or(1),Wr=new U(Hr.buffer);function Mr(r){return Hr[0]=r,Wr[Yr]}var Zr,Br,Xr,qr=_(),zr=Object.prototype.toString,Jr="function"==typeof Symbol?Symbol.toStringTag:"",Dr=qr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return zr.call(r);e=r[Jr],t=j(r,Jr);try{r[Jr]=void 0}catch(t){return zr.call(r)}return n=zr.call(r),t?r[Jr]=e:delete r[Jr],n}:function(r){return zr.call(r)},Kr="function"==typeof Float64Array,Qr="function"==typeof Float64Array?Float64Array:null,rt="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t;if("function"!=typeof Qr)return!1;try{r=function(r){return Kr&&r instanceof Float64Array||"[object Float64Array]"===Dr(r)}(t=new Qr([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")},!0===lr?(Br=1,Xr=0):(Br=0,Xr=1);var tt={HIGH:Br,LOW:Xr},et=new Zr(1),nt=new U(et.buffer),ot=tt.HIGH,it=tt.LOW;function at(r,t){return nt[ot]=r,nt[it]=t,et[0]}var ut=[0,0];function ct(r,t){var e,n;return dr.assign(r,ut,1,0),e=ut[0],e&=Ur,n=Mr(t),at(e|=n&=2147483648,ut[1])}var lt,ft=_(),pt=Object.prototype.toString,yt="function"==typeof Symbol?Symbol.toStringTag:"",st=ft&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return pt.call(r);e=r[yt],t=j(r,yt);try{r[yt]=void 0}catch(t){return pt.call(r)}return n=pt.call(r),t?r[yt]=e:delete r[yt],n}:function(r){return pt.call(r)},bt="function"==typeof Float64Array,gt="function"==typeof Float64Array?Float64Array:null,dt="function"==typeof Float64Array?Float64Array:void 0;lt=function(){var r,t;if("function"!=typeof gt)return!1;try{r=function(r){return bt&&r instanceof Float64Array||"[object Float64Array]"===st(r)}(t=new gt([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dt:function(){throw new Error("not implemented")};var vt=!0===lr?1:0,mt=new lt(1),ht=new U(mt.buffer);function wt(r,t){return mt[0]=r,ht[vt]=t>>>0,mt[0]}var _t,St=1023,At=1048576,Et=[1,1.5],jt=[0,.5849624872207642],Ft=[0,1.350039202129749e-8],Tt=Number.POSITIVE_INFINITY,Nt=Number.NEGATIVE_INFINITY,It="function"==typeof Object.defineProperty?Object.defineProperty:null,Ot=Object.defineProperty,Vt=Object.prototype,kt=Vt.toString,Ut=Vt.__defineGetter__,xt=Vt.__defineSetter__,Pt=Vt.__lookupGetter__,Gt=Vt.__lookupSetter__;_t=function(){try{return It({},"x",{}),!0}catch(r){return!1}}()?Ot:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===kt.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===kt.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(Pt.call(r,t)||Gt.call(r,t)?(n=r.__proto__,r.__proto__=Vt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ut&&Ut.call(r,t,e.get),a&&xt&&xt.call(r,t,e.set),r};var Ct=_t;function Lt(r,t,e,o){return function(r){return r!=r}(r)||n(r)?(t[o]=r,t[o+e]=0,t):0!==r&&f(r)<22250738585072014e-324?(t[o]=4503599627370496*r,t[o+e]=-52,t):(t[o]=r,t[o+e]=0,t)}!function(r,t,e){Ct(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return Lt(r,[0,0],1,0)}),"assign",Lt);var $t=[0,0],Rt=[0,0];function Yt(r,t){var e,o,i;return 0===t||0===r||(i=r)!=i||n(r)?r:(Lt(r,$t,1,0),t+=$t[1],t+=function(r){var t=Mr(r);return(t=(2146435072&t)>>>20)-St|0}(r=$t[0]),t<-1074?ct(0,r):t>1023?r<0?Nt:Tt:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,dr.assign(r,Rt,1,0),e=Rt[0],e&=2148532223,o*at(e|=t+St<<20,Rt[1])))}var Ht=1048575,Wt=1048576,Mt=1083179008,Zt=1e300,Bt=1e-300,Xt=[0,0],qt=[0,0];function zt(r,t){var e,i,u,p,y,s,b,g,d,v,m,h,w,_;if(o(r)||o(t))return NaN;if(dr.assign(t,Xt,1,0),y=Xt[0],0===Xt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return l(r);if(-.5===t)return 1/l(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(n(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(t===kr)?0:kr}(r,t)}if(dr.assign(r,Xt,1,0),p=Xt[0],0===Xt[1]){if(0===p)return function(r,t){return t===Vr?kr:t===kr?0:t>0?c(t)?r:0:c(t)?ct(kr,r):kr}(r,t);if(1===r)return 1;if(-1===r&&c(t))return-1;if(n(r))return r===Vr?zt(-0,-t):t<0?0:kr}if(r<0&&!1===a(t))return(r-r)/(r-r);if(u=f(r),e=p&Ur|0,i=y&Ur|0,b=y>>>31|0,s=(s=p>>>31|0)&&c(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,t){return(Mr(r)&Ur)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===b?s*Zt*Zt:s*Bt*Bt;if(e>1072693248)return 0===b?s*Zt*Zt:s*Bt*Bt;m=function(r,t){var e,n,o,i,a,u;return e=(a=1.9259629911266175e-8*(o=t-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Nr(n=(i=1.4426950216293335*o)+a,0))-i),r[0]=n,r[1]=e,r}(qt,u)}else m=function(r,t,e){var n,o,i,a,u,c,l,f,p,y,s,b,g,d,v,m,h,w,_,S,A;return w=0,e<At&&(w-=53,e=Mr(t*=9007199254740992)),w+=(e>>20)-St|0,e=1072693248|(_=1048575&e|0),_<=235662?S=0:_<767610?S=1:(S=0,w+=1,e-=At),a=Nr(o=(m=(t=wt(t,e))-(l=Et[S]))*(h=1/(t+l)),0),n=524288+(e>>1|536870912),c=wt(0,n+=S<<18),v=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Nr(c=3+(i=a*a)+(v+=(u=h*(m-a*c-a*(t-(c-l))))*(a+o)),0),g=(s=-7.028461650952758e-9*(p=Nr(p=(m=a*c)+(h=u*c+(v-(c-3-i))*o),0))+.9617966939259756*(h-(p-m))+Ft[S])-((b=Nr(b=(y=.9617967009544373*p)+s+(f=jt[S])+(d=w),0))-d-f-y),r[0]=b,r[1]=g,r}(qt,u,e);if(h=(v=(t-(g=Nr(t,0)))*m[0]+t*m[1])+(d=g*m[0]),dr.assign(h,Xt,1,0),w=Ir(Xt[0]),_=Ir(Xt[1]),w>=Mt){if(0!=(w-Mt|_))return s*Zt*Zt;if(v+8008566259537294e-32>h-d)return s*Zt*Zt}else if((w&Ur)>=1083231232){if(0!=(w-3230714880|_))return s*Bt*Bt;if(v<=h-d)return s*Bt*Bt}return h=function(r,t,e){var n,o,i,a,u,c,l,f,p,y;return p=((f=r&Ur|0)>>20)-St|0,l=0,f>1071644672&&(o=wt(0,((l=r+(Wt>>p+1)>>>0)&~(Ht>>(p=((l&Ur)>>20)-St|0)))>>>0),l=(l&Ht|Wt)>>20-p>>>0,r<0&&(l=-l),t-=o),r=Ir(r=Mr(c=1-((c=(i=.6931471824645996*(o=Nr(o=e+t,0)))+(a=.6931471805599453*(e-(o-t))+-1.904654299957768e-9*o))*(n=c-(o=c*c)*(0===(y=o)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-i))+c*u)-c))),(r+=l<<20>>>0)>>20<=0?Yt(c,l):wt(c,r)}(w,d,v),s*h}var Jt=Number.NEGATIVE_INFINITY,Dt=1e308;function Kt(t,e){var o,a;return r(t)||r(e)||n(e)?NaN:n(t)||0===t||e<-324||f(t)>9007199254740992&&e<=0?t:e>308?t>=0?0:Jt:e<-308?(o=zt(10,-(e+308)),n(a=t*Dt*o)?t:i(a)/Dt/o):n(a=t*(o=zt(10,-e)))?t:i(a)/o}var Qt="function"==typeof Object.defineProperty?Object.defineProperty:null,re=Object.defineProperty;function te(r){return"number"==typeof r}function ee(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function ne(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+ee(o):ee(o)+r,n&&(r="-"+r)),r}var oe=String.prototype.toLowerCase,ie=String.prototype.toUpperCase;function ae(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!te(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=ne(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=ne(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===ie.call(r.specifier)?ie.call(e):oe.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function ue(r){return"string"==typeof r}var ce=Math.abs,le=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,pe=String.prototype.replace,ye=/e\+(\d)$/,se=/e-(\d)$/,be=/^(\d+)$/,ge=/^(\d+)e/,de=/\.0$/,ve=/\.0*e/,me=/(\..*[^0])0*e/;function he(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!te(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":ce(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=pe.call(e,me,"$1e"),e=pe.call(e,ve,"e"),e=pe.call(e,de,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=pe.call(e,ye,"e+0$1"),e=pe.call(e,se,"e-0$1"),r.alternate&&(e=pe.call(e,be,"$1."),e=pe.call(e,ge,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===fe.call(r.specifier)?fe.call(e):le.call(e)}function we(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function _e(r,t,e){var n=t-r.length;return n<0?r:r=e?r+we(n):we(n)+r}var Se=String.fromCharCode,Ae=isNaN,Ee=Array.isArray;function je(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Fe(r){var t,e,n,o,i,a,u,c,l;if(!Ee(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(ue(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=je(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ae(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Ae(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=ae(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Ae(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ae(i)?String(n.arg):Se(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=he(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ne(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_e(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ne(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Ie(r){var t,e,n,o;for(e=[],o=0,n=Te.exec(r);n;)(t=r.slice(o,Te.lastIndex-n[0].length)).length&&e.push(t),e.push(Ne(n)),o=Te.lastIndex,n=Te.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Oe(r){return"string"==typeof r}function Ve(r){var t,e,n;if(!Oe(r))throw new TypeError(Ve("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Ie(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Fe.apply(null,e)}var ke,Ue=Object.prototype,xe=Ue.toString,Pe=Ue.__defineGetter__,Ge=Ue.__defineSetter__,Ce=Ue.__lookupGetter__,Le=Ue.__lookupSetter__;ke=function(){try{return Qt({},"x",{}),!0}catch(r){return!1}}()?re:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===xe.call(r))throw new TypeError(Ve("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===xe.call(e))throw new TypeError(Ve("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ce.call(r,t)||Le.call(r,t)?(n=r.__proto__,r.__proto__=Ue,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Pe&&Pe.call(r,t,e.get),a&&Ge&&Ge.call(r,t,e.set),r};var $e=ke;function Re(r,t,e){$e(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ye(r){return"number"==typeof r}var He=_();function We(){return He&&"symbol"==typeof Symbol.toStringTag}var Me,Ze=Object.prototype.toString,Be=Object.prototype.hasOwnProperty,Xe="function"==typeof Symbol?Symbol:void 0,qe="function"==typeof Xe?Xe.toStringTag:"";Me=We()?function(r){var t,e,n;if(null==r)return Ze.call(r);e=r[qe],t=function(r,t){return null!=r&&Be.call(r,t)}(r,qe);try{r[qe]=void 0}catch(t){return Ze.call(r)}return n=Ze.call(r),t?r[qe]=e:delete r[qe],n}:function(r){return Ze.call(r)};var ze=Me,Je=Number,De=Je.prototype.toString,Ke=We();function Qe(r){return"object"==typeof r&&(r instanceof Je||(Ke?function(r){try{return De.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ze(r)))}function rn(r){return Ye(r)||Qe(r)}function tn(r,t){if(!(this instanceof tn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ye(r))throw new TypeError(Ve("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ye(t))throw new TypeError(Ve("invalid argument. Imaginary component must be a number. Value: `%s`.",t));return $e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),$e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}return Re(rn,"isPrimitive",Ye),Re(rn,"isObject",Qe),Re(tn,"BYTES_PER_ELEMENT",8),Re(tn.prototype,"BYTES_PER_ELEMENT",8),Re(tn.prototype,"byteLength",16),Re(tn.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Re(tn.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r})),function(r,t){return new tn(Kt(function(r){return r.re}(r),t),Kt(function(r){return r.im}(r),t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).cfloorn=t();
//# sourceMappingURL=browser.js.map