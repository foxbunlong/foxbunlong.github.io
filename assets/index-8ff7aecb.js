(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function yl(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const le={},Qn=[],pt=()=>{},nm=()=>!1,im=/^on[^a-z]/,no=t=>im.test(t),vl=t=>t.startsWith("onUpdate:"),we=Object.assign,El=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sm=Object.prototype.hasOwnProperty,q=(t,e)=>sm.call(t,e),U=Array.isArray,Jn=t=>io(t)==="[object Map]",Ad=t=>io(t)==="[object Set]",$=t=>typeof t=="function",ye=t=>typeof t=="string",wl=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Sd=t=>ue(t)&&$(t.then)&&$(t.catch),Rd=Object.prototype.toString,io=t=>Rd.call(t),rm=t=>io(t).slice(8,-1),Nd=t=>io(t)==="[object Object]",Il=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ur=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},om=/-(\w)/g,ci=so(t=>t.replace(om,(e,n)=>n?n.toUpperCase():"")),am=/\B([A-Z])/g,mi=so(t=>t.replace(am,"-$1").toLowerCase()),kd=so(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ho=so(t=>t?`on${kd(t)}`:""),es=(t,e)=>!Object.is(t,e),Wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_r=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let du;const ba=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ye(i)?dm(i):Tl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ye(t))return t;if(ue(t))return t}}const cm=/;(?![^(]*\))/g,um=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function dm(t){const e={};return t.replace(hm,"").split(cm).forEach(n=>{if(n){const i=n.split(um);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cl(t){let e="";if(ye(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const i=Cl(t[n]);i&&(e+=i+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=yl(fm);function Pd(t){return!!t||t===""}const Me=t=>ye(t)?t:t==null?"":U(t)||ue(t)&&(t.toString===Rd||!$(t.toString))?JSON.stringify(t,xd,2):String(t),xd=(t,e)=>e&&e.__v_isRef?xd(t,e.value):Jn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ad(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!U(e)&&!Nd(e)?String(e):e;let Ye;class gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!e&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ye;try{return Ye=this,e()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function _m(t,e=Ye){e&&e.active&&e.effects.push(t)}function Od(){return Ye}function mm(t){Ye&&Ye.cleanups.push(t)}const bl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dd=t=>(t.w&sn)>0,Md=t=>(t.n&sn)>0,ym=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},vm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Dd(s)&&!Md(s)?s.delete(t):e[n++]=s,s.w&=~sn,s.n&=~sn}e.length=n}},Aa=new WeakMap;let Bi=0,sn=1;const Sa=30;let at;const Rn=Symbol(""),Ra=Symbol("");class Al{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_m(this,i)}run(){if(!this.active)return this.fn();let e=at,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=at,at=this,Xt=!0,sn=1<<++Bi,Bi<=Sa?ym(this):fu(this),this.fn()}finally{Bi<=Sa&&vm(this),sn=1<<--Bi,at=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){at===this?this.deferStop=!0:this.active&&(fu(this),this.onStop&&this.onStop(),this.active=!1)}}function fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const Ld=[];function yi(){Ld.push(Xt),Xt=!1}function vi(){const t=Ld.pop();Xt=t===void 0?!0:t}function We(t,e,n){if(Xt&&at){let i=Aa.get(t);i||Aa.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=bl()),Fd(s)}}function Fd(t,e){let n=!1;Bi<=Sa?Md(t)||(t.n|=sn,n=!Dd(t)):n=!t.has(at),n&&(t.add(at),at.deps.push(t))}function Vt(t,e,n,i,s,r){const o=Aa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(Rn)),Jn(t)&&a.push(o.get(Ra)));break;case"delete":U(t)||(a.push(o.get(Rn)),Jn(t)&&a.push(o.get(Ra)));break;case"set":Jn(t)&&a.push(o.get(Rn));break}if(a.length===1)a[0]&&Na(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Na(bl(l))}}function Na(t,e){const n=U(t)?t:[...t];for(const i of n)i.computed&&pu(i);for(const i of n)i.computed||pu(i)}function pu(t,e){(t!==at||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Em=yl("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wl)),wm=Sl(),Im=Sl(!1,!0),Tm=Sl(!0),gu=Cm();function Cm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=X(this);for(let r=0,o=this.length;r<o;r++)We(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yi();const i=X(this)[e].apply(this,n);return vi(),i}}),t}function bm(t){const e=X(this);return We(e,"has",t),e.hasOwnProperty(t)}function Sl(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?jm:Hd:e?Vd:jd).get(i))return i;const o=U(i);if(!t){if(o&&q(gu,s))return Reflect.get(gu,s,r);if(s==="hasOwnProperty")return bm}const a=Reflect.get(i,s,r);return(wl(s)?Ud.has(s):Em(s))||(t||We(i,"get",s),e)?a:Se(a)?o&&Il(s)?a:a.value:ue(a)?t?Wd(a):kl(a):a}}const Am=Bd(),Sm=Bd(!0);function Bd(t=!1){return function(n,i,s,r){let o=n[i];if(ui(o)&&Se(o)&&!Se(s))return!1;if(!t&&(!mr(s)&&!ui(s)&&(o=X(o),s=X(s)),!U(n)&&Se(o)&&!Se(s)))return o.value=s,!0;const a=U(n)&&Il(i)?Number(i)<n.length:q(n,i),l=Reflect.set(n,i,s,r);return n===X(r)&&(a?es(s,o)&&Vt(n,"set",i,s):Vt(n,"add",i,s)),l}}function Rm(t,e){const n=q(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Vt(t,"delete",e,void 0),i}function Nm(t,e){const n=Reflect.has(t,e);return(!wl(e)||!Ud.has(e))&&We(t,"has",e),n}function km(t){return We(t,"iterate",U(t)?"length":Rn),Reflect.ownKeys(t)}const $d={get:wm,set:Am,deleteProperty:Rm,has:Nm,ownKeys:km},Pm={get:Tm,set(t,e){return!0},deleteProperty(t,e){return!0}},xm=we({},$d,{get:Im,set:Sm}),Rl=t=>t,ro=t=>Reflect.getPrototypeOf(t);function Gs(t,e,n=!1,i=!1){t=t.__v_raw;const s=X(t),r=X(e);n||(e!==r&&We(s,"get",e),We(s,"get",r));const{has:o}=ro(s),a=i?Rl:n?xl:ts;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ys(t,e=!1){const n=this.__v_raw,i=X(n),s=X(t);return e||(t!==s&&We(i,"has",t),We(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Xs(t,e=!1){return t=t.__v_raw,!e&&We(X(t),"iterate",Rn),Reflect.get(t,"size",t)}function _u(t){t=X(t);const e=X(this);return ro(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function mu(t,e){e=X(e);const n=X(this),{has:i,get:s}=ro(n);let r=i.call(n,t);r||(t=X(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?es(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function yu(t){const e=X(this),{has:n,get:i}=ro(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Vt(e,"delete",t,void 0),r}function vu(){const t=X(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function Qs(t,e){return function(i,s){const r=this,o=r.__v_raw,a=X(o),l=e?Rl:t?xl:ts;return!t&&We(a,"iterate",Rn),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Js(t,e,n){return function(...i){const s=this.__v_raw,r=X(s),o=Jn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Rl:e?xl:ts;return!e&&We(r,"iterate",l?Ra:Rn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function Om(){const t={get(r){return Gs(this,r)},get size(){return Xs(this)},has:Ys,add:_u,set:mu,delete:yu,clear:vu,forEach:Qs(!1,!1)},e={get(r){return Gs(this,r,!1,!0)},get size(){return Xs(this)},has:Ys,add:_u,set:mu,delete:yu,clear:vu,forEach:Qs(!1,!0)},n={get(r){return Gs(this,r,!0)},get size(){return Xs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Qs(!0,!1)},i={get(r){return Gs(this,r,!0,!0)},get size(){return Xs(this,!0)},has(r){return Ys.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Js(r,!1,!1),n[r]=Js(r,!0,!1),e[r]=Js(r,!1,!0),i[r]=Js(r,!0,!0)}),[t,n,e,i]}const[Dm,Mm,Lm,Fm]=Om();function Nl(t,e){const n=e?t?Fm:Lm:t?Mm:Dm;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(q(n,s)&&s in i?n:i,s,r)}const Um={get:Nl(!1,!1)},Bm={get:Nl(!1,!0)},$m={get:Nl(!0,!1)},jd=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,jm=new WeakMap;function Vm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hm(t){return t.__v_skip||!Object.isExtensible(t)?0:Vm(rm(t))}function kl(t){return ui(t)?t:Pl(t,!1,$d,Um,jd)}function Wm(t){return Pl(t,!1,xm,Bm,Vd)}function Wd(t){return Pl(t,!0,Pm,$m,Hd)}function Pl(t,e,n,i,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Hm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Zn(t){return ui(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function mr(t){return!!(t&&t.__v_isShallow)}function zd(t){return Zn(t)||ui(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Kd(t){return _r(t,"__v_skip",!0),t}const ts=t=>ue(t)?kl(t):t,xl=t=>ue(t)?Wd(t):t;function qd(t){Xt&&at&&(t=X(t),Fd(t.dep||(t.dep=bl())))}function Gd(t,e){t=X(t);const n=t.dep;n&&Na(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function ei(t){return Yd(t,!1)}function zm(t){return Yd(t,!0)}function Yd(t,e){return Se(t)?t:new Km(t,e)}class Km{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:ts(e)}get value(){return qd(this),this._value}set value(e){const n=this.__v_isShallow||mr(e)||ui(e);e=n?e:X(e),es(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ts(e),Gd(this))}}function ge(t){return Se(t)?t.value:t}function En(t){return $(t)?t():ge(t)}const qm={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Xd(t){return Zn(t)?t:new Proxy(t,qm)}class Gm{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Al(e,()=>{this._dirty||(this._dirty=!0,Gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=X(this);return qd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ym(t,e,n=!1){let i,s;const r=$(t);return r?(i=t,s=pt):(i=t.get,s=t.set),new Gm(i,s,r||!s,n)}function Qt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){oo(r,e,n)}return s}function gt(t,e,n,i){if($(t)){const r=Qt(t,e,n,i);return r&&Sd(r)&&r.catch(o=>{oo(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(gt(t[r],e,n,i));return s}function oo(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Qt(l,null,10,[t,o,a]);return}}Xm(t,n,s,i)}function Xm(t,e,n,i=!0){console.error(t)}let ns=!1,ka=!1;const Pe=[];let Ct=0;const ti=[];let Ut=null,wn=0;const Qd=Promise.resolve();let Ol=null;function Qm(t){const e=Ol||Qd;return t?e.then(this?t.bind(this):t):e}function Jm(t){let e=Ct+1,n=Pe.length;for(;e<n;){const i=e+n>>>1;is(Pe[i])<t?e=i+1:n=i}return e}function Dl(t){(!Pe.length||!Pe.includes(t,ns&&t.allowRecurse?Ct+1:Ct))&&(t.id==null?Pe.push(t):Pe.splice(Jm(t.id),0,t),Jd())}function Jd(){!ns&&!ka&&(ka=!0,Ol=Qd.then(ef))}function Zm(t){const e=Pe.indexOf(t);e>Ct&&Pe.splice(e,1)}function ey(t){U(t)?ti.push(...t):(!Ut||!Ut.includes(t,t.allowRecurse?wn+1:wn))&&ti.push(t),Jd()}function Eu(t,e=ns?Ct+1:0){for(;e<Pe.length;e++){const n=Pe[e];n&&n.pre&&(Pe.splice(e,1),e--,n())}}function Zd(t){if(ti.length){const e=[...new Set(ti)];if(ti.length=0,Ut){Ut.push(...e);return}for(Ut=e,Ut.sort((n,i)=>is(n)-is(i)),wn=0;wn<Ut.length;wn++)Ut[wn]();Ut=null,wn=0}}const is=t=>t.id==null?1/0:t.id,ty=(t,e)=>{const n=is(t)-is(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ef(t){ka=!1,ns=!0,Pe.sort(ty);const e=pt;try{for(Ct=0;Ct<Pe.length;Ct++){const n=Pe[Ct];n&&n.active!==!1&&Qt(n,null,14)}}finally{Ct=0,Pe.length=0,Zd(),ns=!1,Ol=null,(Pe.length||ti.length)&&ef()}}function ny(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||le;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||le;d&&(s=n.map(g=>ye(g)?g.trim():g)),h&&(s=n.map(lm))}let a,l=i[a=Ho(e)]||i[a=Ho(ci(e))];!l&&r&&(l=i[a=Ho(mi(e))]),l&&gt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,s)}}function tf(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=tf(c,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ue(t)&&i.set(t,null),null):(U(r)?r.forEach(l=>o[l]=null):we(o,r),ue(t)&&i.set(t,o),o)}function ao(t,e){return!t||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,mi(e))||q(t,e))}let ct=null,nf=null;function yr(t){const e=ct;return ct=t,nf=t&&t.type.__scopeId||null,e}function iy(t,e=ct,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ku(-1);const r=yr(e);let o;try{o=t(...s)}finally{yr(r),i._d&&ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:C}=t;let N,j;const G=yr(t);try{if(n.shapeFlag&4){const R=s||i;N=Tt(u.call(R,R,h,r,g,d,v)),j=l}else{const R=e;N=Tt(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),j=e.props?l:sy(l)}}catch(R){zi.length=0,oo(R,t,1),N=Rt(On)}let B=N;if(j&&C!==!1){const R=Object.keys(j),{shapeFlag:ne}=B;R.length&&ne&7&&(o&&R.some(vl)&&(j=ry(j,o)),B=hi(B,j))}return n.dirs&&(B=hi(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),N=B,yr(G),N}const sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||no(n))&&((e||(e={}))[n]=t[n]);return e},ry=(t,e)=>{const n={};for(const i in t)(!vl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function oy(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ao(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ao(n,r))return!0}return!1}function ay({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ly=t=>t.__isSuspense;function cy(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):ey(t)}const Zs={};function hr(t,e,n){return sf(t,e,n)}function sf(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=le){var a;const l=Od()===((a=Ae)==null?void 0:a.scope)?Ae:null;let c,u=!1,h=!1;if(Se(t)?(c=()=>t.value,u=mr(t)):Zn(t)?(c=()=>t,i=!0):U(t)?(h=!0,u=t.some(R=>Zn(R)||mr(R)),c=()=>t.map(R=>{if(Se(R))return R.value;if(Zn(R))return qn(R);if($(R))return Qt(R,l,2)})):$(t)?e?c=()=>Qt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),gt(t,l,3,[g])}:c=pt,e&&i){const R=c;c=()=>qn(R())}let d,g=R=>{d=G.onStop=()=>{Qt(R,l,4)}},v;if(rs)if(g=pt,e?n&&gt(e,l,3,[c(),h?[]:void 0,g]):c(),s==="sync"){const R=sv();v=R.__watcherHandles||(R.__watcherHandles=[])}else return pt;let C=h?new Array(t.length).fill(Zs):Zs;const N=()=>{if(G.active)if(e){const R=G.run();(i||u||(h?R.some((ne,pe)=>es(ne,C[pe])):es(R,C)))&&(d&&d(),gt(e,l,3,[R,C===Zs?void 0:h&&C[0]===Zs?[]:C,g]),C=R)}else G.run()};N.allowRecurse=!!e;let j;s==="sync"?j=N:s==="post"?j=()=>$e(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),j=()=>Dl(N));const G=new Al(c,j);e?n?N():C=G.run():s==="post"?$e(G.run.bind(G),l&&l.suspense):G.run();const B=()=>{G.stop(),l&&l.scope&&El(l.scope.effects,G)};return v&&v.push(B),B}function uy(t,e,n){const i=this.proxy,s=ye(t)?t.includes(".")?rf(i,t):()=>i[t]:t.bind(i,i);let r;$(e)?r=e:(r=e.handler,n=e);const o=Ae;di(this);const a=sf(s,r.bind(i),n);return o?di(o):Nn(),a}function rf(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function qn(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))qn(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(Ad(t)||Jn(t))t.forEach(n=>{qn(n,e)});else if(Nd(t))for(const n in t)qn(t[n],e);return t}function _n(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),gt(l,n,8,[t.el,a,t,e]),vi())}}function hy(t,e){return $(t)?(()=>we({name:t.name},e,{setup:t}))():t}const dr=t=>!!t.type.__asyncLoader,of=t=>t.type.__isKeepAlive;function dy(t,e){af(t,"a",e)}function fy(t,e){af(t,"da",e)}function af(t,e,n=Ae){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(lo(e,i,n),n){let s=n.parent;for(;s&&s.parent;)of(s.parent.vnode)&&py(i,e,n,s),s=s.parent}}function py(t,e,n,i){const s=lo(e,t,i,!0);cf(()=>{El(i[e],s)},n)}function lo(t,e,n=Ae,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yi(),di(n);const a=gt(e,n,t,o);return Nn(),vi(),a});return i?s.unshift(r):s.push(r),r}}const zt=t=>(e,n=Ae)=>(!rs||t==="sp")&&lo(t,(...i)=>e(...i),n),gy=zt("bm"),lf=zt("m"),_y=zt("bu"),my=zt("u"),yy=zt("bum"),cf=zt("um"),uf=zt("sp"),vy=zt("rtg"),Ey=zt("rtc");function wy(t,e=Ae){lo("ec",t,e)}const Iy=Symbol.for("v-ndc");function Ko(t,e,n,i){let s;const r=n&&n[i];if(U(t)||ye(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Pa=t=>t?If(t)?Bl(t)||t.proxy:Pa(t.parent):null,Wi=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$emit:t=>t.emit,$options:t=>Ml(t),$forceUpdate:t=>t.f||(t.f=()=>Dl(t.update)),$nextTick:t=>t.n||(t.n=Qm.bind(t.proxy)),$watch:t=>uy.bind(t)}),qo=(t,e)=>t!==le&&!t.__isScriptSetup&&q(t,e),Ty={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(qo(i,e))return o[e]=1,i[e];if(s!==le&&q(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==le&&q(n,e))return o[e]=4,n[e];xa&&(o[e]=0)}}const u=Wi[e];let h,d;if(u)return e==="$attrs"&&We(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,q(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return qo(s,e)?(s[e]=n,!0):i!==le&&q(i,e)?(i[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==le&&q(t,o)||qo(e,o)||(a=r[0])&&q(a,o)||q(i,o)||q(Wi,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Iu(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xa=!0;function Cy(t){const e=Ml(t),n=t.proxy,i=t.ctx;xa=!1,e.beforeCreate&&Tu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:C,deactivated:N,beforeDestroy:j,beforeUnmount:G,destroyed:B,unmounted:R,render:ne,renderTracked:pe,renderTriggered:M,errorCaptured:qe,serverPrefetch:fn,expose:Mt,inheritAttrs:Ni,components:Ws,directives:zs,filters:$o}=e;if(c&&by(c,i,null),o)for(const he in o){const ie=o[he];$(ie)&&(i[he]=ie.bind(n))}if(s){const he=s.call(n,n);ue(he)&&(t.data=kl(he))}if(xa=!0,r)for(const he in r){const ie=r[he],pn=$(ie)?ie.bind(n,n):$(ie.get)?ie.get.bind(n,n):pt,Ks=!$(ie)&&$(ie.set)?ie.set.bind(n):pt,gn=nv({get:pn,set:Ks});Object.defineProperty(i,he,{enumerable:!0,configurable:!0,get:()=>gn.value,set:vt=>gn.value=vt})}if(a)for(const he in a)hf(a[he],i,n,he);if(l){const he=$(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ie=>{Py(ie,he[ie])})}u&&Tu(u,t,"c");function De(he,ie){U(ie)?ie.forEach(pn=>he(pn.bind(n))):ie&&he(ie.bind(n))}if(De(gy,h),De(lf,d),De(_y,g),De(my,v),De(dy,C),De(fy,N),De(wy,qe),De(Ey,pe),De(vy,M),De(yy,G),De(cf,R),De(uf,fn),U(Mt))if(Mt.length){const he=t.exposed||(t.exposed={});Mt.forEach(ie=>{Object.defineProperty(he,ie,{get:()=>n[ie],set:pn=>n[ie]=pn})})}else t.exposed||(t.exposed={});ne&&t.render===pt&&(t.render=ne),Ni!=null&&(t.inheritAttrs=Ni),Ws&&(t.components=Ws),zs&&(t.directives=zs)}function by(t,e,n=pt){U(t)&&(t=Oa(t));for(const i in t){const s=t[i];let r;ue(s)?"default"in s?r=ni(s.from||i,s.default,!0):r=ni(s.from||i):r=ni(s),Se(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Tu(t,e,n){gt(U(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function hf(t,e,n,i){const s=i.includes(".")?rf(n,i):()=>n[i];if(ye(t)){const r=e[t];$(r)&&hr(s,r)}else if($(t))hr(s,t.bind(n));else if(ue(t))if(U(t))t.forEach(r=>hf(r,e,n,i));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&hr(s,r,t)}}function Ml(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>vr(l,c,o,!0)),vr(l,e,o)),ue(e)&&r.set(e,l),l}function vr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&vr(t,r,n,!0),s&&s.forEach(o=>vr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ay[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ay={data:Cu,props:bu,emits:bu,methods:$i,computed:$i,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:$i,directives:$i,watch:Ry,provide:Cu,inject:Sy};function Cu(t,e){return e?t?function(){return we($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Sy(t,e){return $i(Oa(t),Oa(e))}function Oa(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function $i(t,e){return t?we(Object.create(null),t,e):e}function bu(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:we(Object.create(null),Iu(t),Iu(e??{})):e}function Ry(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const i in e)n[i]=Le(t[i],e[i]);return n}function df(){return{app:null,config:{isNativeTag:nm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ny=0;function ky(t,e){return function(i,s=null){$(i)||(i=we({},i)),s!=null&&!ue(s)&&(s=null);const r=df(),o=new Set;let a=!1;const l=r.app={_uid:Ny++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:rv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Rt(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Bl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Er=l;try{return c()}finally{Er=null}}};return l}}let Er=null;function Py(t,e){if(Ae){let n=Ae.provides;const i=Ae.parent&&Ae.parent.provides;i===n&&(n=Ae.provides=Object.create(i)),n[t]=e}}function ni(t,e,n=!1){const i=Ae||ct;if(i||Er){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Er._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(i&&i.proxy):e}}function xy(t,e,n,i=!1){const s={},r={};_r(r,uo,1),t.propsDefaults=Object.create(null),ff(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Wm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Oy(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=X(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ao(t.emitsOptions,d))continue;const g=e[d];if(l)if(q(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const v=ci(d);s[v]=Da(l,a,v,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{ff(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!q(e,h)&&((u=mi(h))===h||!q(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Da(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&Vt(t,"set","$attrs")}function ff(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ur(l))continue;const c=e[l];let u;s&&q(s,u=ci(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ao(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=X(n),c=a||le;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Da(s,l,h,c[h],t,!q(c,h))}}return o}function Da(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(di(s),i=c[n]=l.call(null,e),Nn())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===mi(n))&&(i=!0))}return i}function pf(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,g]=pf(h,e,!0);we(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ue(t)&&i.set(t,Qn),Qn;if(U(r))for(let u=0;u<r.length;u++){const h=ci(r[u]);Au(h)&&(o[h]=le)}else if(r)for(const u in r){const h=ci(u);if(Au(h)){const d=r[u],g=o[h]=U(d)||$(d)?{type:d}:we({},d);if(g){const v=Nu(Boolean,g.type),C=Nu(String,g.type);g[0]=v>-1,g[1]=C<0||v<C,(v>-1||q(g,"default"))&&a.push(h)}}}const c=[o,a];return ue(t)&&i.set(t,c),c}function Au(t){return t[0]!=="$"}function Su(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ru(t,e){return Su(t)===Su(e)}function Nu(t,e){return U(e)?e.findIndex(n=>Ru(n,t)):$(e)&&Ru(e,t)?0:-1}const gf=t=>t[0]==="_"||t==="$stable",Ll=t=>U(t)?t.map(Tt):[Tt(t)],Dy=(t,e,n)=>{if(e._n)return e;const i=iy((...s)=>Ll(e(...s)),n);return i._c=!1,i},_f=(t,e,n)=>{const i=t._ctx;for(const s in t){if(gf(s))continue;const r=t[s];if($(r))e[s]=Dy(s,r,i);else if(r!=null){const o=Ll(r);e[s]=()=>o}}},mf=(t,e)=>{const n=Ll(e);t.slots.default=()=>n},My=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),_r(e,"_",n)):_f(e,t.slots={})}else t.slots={},e&&mf(t,e);_r(t.slots,uo,1)},Ly=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=le;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(we(s,e),!n&&a===1&&delete s._):(r=!e.$stable,_f(e,s)),o=e}else e&&(mf(t,e),o={default:1});if(r)for(const a in s)!gf(a)&&!(a in o)&&delete s[a]};function Ma(t,e,n,i,s=!1){if(U(t)){t.forEach((d,g)=>Ma(d,e&&(U(e)?e[g]:e),n,i,s));return}if(dr(i)&&!s)return;const r=i.shapeFlag&4?Bl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,q(h,c)&&(h[c]=null)):Se(c)&&(c.value=null)),$(l))Qt(l,a,12,[o,u]);else{const d=ye(l),g=Se(l);if(d||g){const v=()=>{if(t.f){const C=d?q(h,l)?h[l]:u[l]:l.value;s?U(C)&&El(C,r):U(C)?C.includes(r)||C.push(r):d?(u[l]=[r],q(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,q(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,$e(v,n)):v()}}}const $e=cy;function Fy(t){return Uy(t)}function Uy(t,e){const n=ba();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=pt,insertStaticContent:v}=t,C=(f,p,_,y=null,m=null,T=null,S=!1,I=null,b=!!p.dynamicChildren)=>{if(f===p)return;f&&!Pi(f,p)&&(y=qs(f),vt(f,m,T,!0),f=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:E,ref:x,shapeFlag:k}=p;switch(E){case co:N(f,p,_,y);break;case On:j(f,p,_,y);break;case fr:f==null&&G(p,_,y,S);break;case Xe:Ws(f,p,_,y,m,T,S,I,b);break;default:k&1?ne(f,p,_,y,m,T,S,I,b):k&6?zs(f,p,_,y,m,T,S,I,b):(k&64||k&128)&&E.process(f,p,_,y,m,T,S,I,b,jn)}x!=null&&m&&Ma(x,f&&f.ref,T,p||f,!p)},N=(f,p,_,y)=>{if(f==null)i(p.el=a(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},j=(f,p,_,y)=>{f==null?i(p.el=l(p.children||""),_,y):p.el=f.el},G=(f,p,_,y)=>{[f.el,f.anchor]=v(f.children,p,_,y,f.el,f.anchor)},B=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),i(f,_,y),f=m;i(p,_,y)},R=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),s(f),f=_;s(p)},ne=(f,p,_,y,m,T,S,I,b)=>{S=S||p.type==="svg",f==null?pe(p,_,y,m,T,S,I,b):fn(f,p,m,T,S,I,b)},pe=(f,p,_,y,m,T,S,I)=>{let b,E;const{type:x,props:k,shapeFlag:O,transition:F,dirs:z}=f;if(b=f.el=o(f.type,T,k&&k.is,k),O&8?u(b,f.children):O&16&&qe(f.children,b,null,y,m,T&&x!=="foreignObject",S,I),z&&_n(f,null,y,"created"),M(b,f,f.scopeId,S,y),k){for(const ee in k)ee!=="value"&&!ur(ee)&&r(b,ee,null,k[ee],T,f.children,y,m,Lt);"value"in k&&r(b,"value",null,k.value),(E=k.onVnodeBeforeMount)&&wt(E,y,f)}z&&_n(f,null,y,"beforeMount");const se=(!m||m&&!m.pendingBranch)&&F&&!F.persisted;se&&F.beforeEnter(b),i(b,p,_),((E=k&&k.onVnodeMounted)||se||z)&&$e(()=>{E&&wt(E,y,f),se&&F.enter(b),z&&_n(f,null,y,"mounted")},m)},M=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let T=0;T<y.length;T++)g(f,y[T]);if(m){let T=m.subTree;if(p===T){const S=m.vnode;M(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},qe=(f,p,_,y,m,T,S,I,b=0)=>{for(let E=b;E<f.length;E++){const x=f[E]=I?Yt(f[E]):Tt(f[E]);C(null,x,p,_,y,m,T,S,I)}},fn=(f,p,_,y,m,T,S)=>{const I=p.el=f.el;let{patchFlag:b,dynamicChildren:E,dirs:x}=p;b|=f.patchFlag&16;const k=f.props||le,O=p.props||le;let F;_&&mn(_,!1),(F=O.onVnodeBeforeUpdate)&&wt(F,_,p,f),x&&_n(p,f,_,"beforeUpdate"),_&&mn(_,!0);const z=m&&p.type!=="foreignObject";if(E?Mt(f.dynamicChildren,E,I,_,y,z,T):S||ie(f,p,I,null,_,y,z,T,!1),b>0){if(b&16)Ni(I,p,k,O,_,y,m);else if(b&2&&k.class!==O.class&&r(I,"class",null,O.class,m),b&4&&r(I,"style",k.style,O.style,m),b&8){const se=p.dynamicProps;for(let ee=0;ee<se.length;ee++){const fe=se[ee],ot=k[fe],Vn=O[fe];(Vn!==ot||fe==="value")&&r(I,fe,ot,Vn,m,f.children,_,y,Lt)}}b&1&&f.children!==p.children&&u(I,p.children)}else!S&&E==null&&Ni(I,p,k,O,_,y,m);((F=O.onVnodeUpdated)||x)&&$e(()=>{F&&wt(F,_,p,f),x&&_n(p,f,_,"updated")},y)},Mt=(f,p,_,y,m,T,S)=>{for(let I=0;I<p.length;I++){const b=f[I],E=p[I],x=b.el&&(b.type===Xe||!Pi(b,E)||b.shapeFlag&70)?h(b.el):_;C(b,E,x,null,y,m,T,S,!0)}},Ni=(f,p,_,y,m,T,S)=>{if(_!==y){if(_!==le)for(const I in _)!ur(I)&&!(I in y)&&r(f,I,_[I],null,S,p.children,m,T,Lt);for(const I in y){if(ur(I))continue;const b=y[I],E=_[I];b!==E&&I!=="value"&&r(f,I,E,b,S,p.children,m,T,Lt)}"value"in y&&r(f,"value",_.value,y.value)}},Ws=(f,p,_,y,m,T,S,I,b)=>{const E=p.el=f?f.el:a(""),x=p.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:O,slotScopeIds:F}=p;F&&(I=I?I.concat(F):F),f==null?(i(E,_,y),i(x,_,y),qe(p.children,_,x,m,T,S,I,b)):k>0&&k&64&&O&&f.dynamicChildren?(Mt(f.dynamicChildren,O,_,m,T,S,I),(p.key!=null||m&&p===m.subTree)&&yf(f,p,!0)):ie(f,p,_,x,m,T,S,I,b)},zs=(f,p,_,y,m,T,S,I,b)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,b):$o(p,_,y,m,T,S,b):ou(f,p,b)},$o=(f,p,_,y,m,T,S)=>{const I=f.component=Xy(f,y,m);if(of(f)&&(I.ctx.renderer=jn),Qy(I),I.asyncDep){if(m&&m.registerDep(I,De),!f.el){const b=I.subTree=Rt(On);j(null,b,p,_)}return}De(I,f,p,_,m,T,S)},ou=(f,p,_)=>{const y=p.component=f.component;if(oy(f,p,_))if(y.asyncDep&&!y.asyncResolved){he(y,p,_);return}else y.next=p,Zm(y.update),y.update();else p.el=f.el,y.vnode=p},De=(f,p,_,y,m,T,S)=>{const I=()=>{if(f.isMounted){let{next:x,bu:k,u:O,parent:F,vnode:z}=f,se=x,ee;mn(f,!1),x?(x.el=z.el,he(f,x,S)):x=z,k&&Wo(k),(ee=x.props&&x.props.onVnodeBeforeUpdate)&&wt(ee,F,x,z),mn(f,!0);const fe=zo(f),ot=f.subTree;f.subTree=fe,C(ot,fe,h(ot.el),qs(ot),f,m,T),x.el=fe.el,se===null&&ay(f,fe.el),O&&$e(O,m),(ee=x.props&&x.props.onVnodeUpdated)&&$e(()=>wt(ee,F,x,z),m)}else{let x;const{el:k,props:O}=p,{bm:F,m:z,parent:se}=f,ee=dr(p);if(mn(f,!1),F&&Wo(F),!ee&&(x=O&&O.onVnodeBeforeMount)&&wt(x,se,p),mn(f,!0),k&&Vo){const fe=()=>{f.subTree=zo(f),Vo(k,f.subTree,f,m,null)};ee?p.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=zo(f);C(null,fe,_,y,f,m,T),p.el=fe.el}if(z&&$e(z,m),!ee&&(x=O&&O.onVnodeMounted)){const fe=p;$e(()=>wt(x,se,fe),m)}(p.shapeFlag&256||se&&dr(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&$e(f.a,m),f.isMounted=!0,p=_=y=null}},b=f.effect=new Al(I,()=>Dl(E),f.scope),E=f.update=()=>b.run();E.id=f.uid,mn(f,!0),E()},he=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Oy(f,p.props,y,_),Ly(f,p.children,_),yi(),Eu(),vi()},ie=(f,p,_,y,m,T,S,I,b=!1)=>{const E=f&&f.children,x=f?f.shapeFlag:0,k=p.children,{patchFlag:O,shapeFlag:F}=p;if(O>0){if(O&128){Ks(E,k,_,y,m,T,S,I,b);return}else if(O&256){pn(E,k,_,y,m,T,S,I,b);return}}F&8?(x&16&&Lt(E,m,T),k!==E&&u(_,k)):x&16?F&16?Ks(E,k,_,y,m,T,S,I,b):Lt(E,m,T,!0):(x&8&&u(_,""),F&16&&qe(k,_,y,m,T,S,I,b))},pn=(f,p,_,y,m,T,S,I,b)=>{f=f||Qn,p=p||Qn;const E=f.length,x=p.length,k=Math.min(E,x);let O;for(O=0;O<k;O++){const F=p[O]=b?Yt(p[O]):Tt(p[O]);C(f[O],F,_,null,m,T,S,I,b)}E>x?Lt(f,m,T,!0,!1,k):qe(p,_,y,m,T,S,I,b,k)},Ks=(f,p,_,y,m,T,S,I,b)=>{let E=0;const x=p.length;let k=f.length-1,O=x-1;for(;E<=k&&E<=O;){const F=f[E],z=p[E]=b?Yt(p[E]):Tt(p[E]);if(Pi(F,z))C(F,z,_,null,m,T,S,I,b);else break;E++}for(;E<=k&&E<=O;){const F=f[k],z=p[O]=b?Yt(p[O]):Tt(p[O]);if(Pi(F,z))C(F,z,_,null,m,T,S,I,b);else break;k--,O--}if(E>k){if(E<=O){const F=O+1,z=F<x?p[F].el:y;for(;E<=O;)C(null,p[E]=b?Yt(p[E]):Tt(p[E]),_,z,m,T,S,I,b),E++}}else if(E>O)for(;E<=k;)vt(f[E],m,T,!0),E++;else{const F=E,z=E,se=new Map;for(E=z;E<=O;E++){const Ge=p[E]=b?Yt(p[E]):Tt(p[E]);Ge.key!=null&&se.set(Ge.key,E)}let ee,fe=0;const ot=O-z+1;let Vn=!1,cu=0;const ki=new Array(ot);for(E=0;E<ot;E++)ki[E]=0;for(E=F;E<=k;E++){const Ge=f[E];if(fe>=ot){vt(Ge,m,T,!0);continue}let Et;if(Ge.key!=null)Et=se.get(Ge.key);else for(ee=z;ee<=O;ee++)if(ki[ee-z]===0&&Pi(Ge,p[ee])){Et=ee;break}Et===void 0?vt(Ge,m,T,!0):(ki[Et-z]=E+1,Et>=cu?cu=Et:Vn=!0,C(Ge,p[Et],_,null,m,T,S,I,b),fe++)}const uu=Vn?By(ki):Qn;for(ee=uu.length-1,E=ot-1;E>=0;E--){const Ge=z+E,Et=p[Ge],hu=Ge+1<x?p[Ge+1].el:y;ki[E]===0?C(null,Et,_,hu,m,T,S,I,b):Vn&&(ee<0||E!==uu[ee]?gn(Et,_,hu,2):ee--)}}},gn=(f,p,_,y,m=null)=>{const{el:T,type:S,transition:I,children:b,shapeFlag:E}=f;if(E&6){gn(f.component.subTree,p,_,y);return}if(E&128){f.suspense.move(p,_,y);return}if(E&64){S.move(f,p,_,jn);return}if(S===Xe){i(T,p,_);for(let k=0;k<b.length;k++)gn(b[k],p,_,y);i(f.anchor,p,_);return}if(S===fr){B(f,p,_);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(T),i(T,p,_),$e(()=>I.enter(T),m);else{const{leave:k,delayLeave:O,afterLeave:F}=I,z=()=>i(T,p,_),se=()=>{k(T,()=>{z(),F&&F()})};O?O(T,z,se):se()}else i(T,p,_)},vt=(f,p,_,y=!1,m=!1)=>{const{type:T,props:S,ref:I,children:b,dynamicChildren:E,shapeFlag:x,patchFlag:k,dirs:O}=f;if(I!=null&&Ma(I,null,_,f,!0),x&256){p.ctx.deactivate(f);return}const F=x&1&&O,z=!dr(f);let se;if(z&&(se=S&&S.onVnodeBeforeUnmount)&&wt(se,p,f),x&6)tm(f.component,_,y);else{if(x&128){f.suspense.unmount(_,y);return}F&&_n(f,null,p,"beforeUnmount"),x&64?f.type.remove(f,p,_,m,jn,y):E&&(T!==Xe||k>0&&k&64)?Lt(E,p,_,!1,!0):(T===Xe&&k&384||!m&&x&16)&&Lt(b,p,_),y&&au(f)}(z&&(se=S&&S.onVnodeUnmounted)||F)&&$e(()=>{se&&wt(se,p,f),F&&_n(f,null,p,"unmounted")},_)},au=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===Xe){em(_,y);return}if(p===fr){R(f);return}const T=()=>{s(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:I}=m,b=()=>S(_,T);I?I(f.el,T,b):b()}else T()},em=(f,p)=>{let _;for(;f!==p;)_=d(f),s(f),f=_;s(p)},tm=(f,p,_)=>{const{bum:y,scope:m,update:T,subTree:S,um:I}=f;y&&Wo(y),m.stop(),T&&(T.active=!1,vt(S,f,p,_)),I&&$e(I,p),$e(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Lt=(f,p,_,y=!1,m=!1,T=0)=>{for(let S=T;S<f.length;S++)vt(f[S],p,_,y,m)},qs=f=>f.shapeFlag&6?qs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),lu=(f,p,_)=>{f==null?p._vnode&&vt(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,_),Eu(),Zd(),p._vnode=f},jn={p:C,um:vt,m:gn,r:au,mt:$o,mc:qe,pc:ie,pbc:Mt,n:qs,o:t};let jo,Vo;return e&&([jo,Vo]=e(jn)),{render:lu,hydrate:jo,createApp:ky(lu,jo)}}function mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yf(t,e,n=!1){const i=t.children,s=e.children;if(U(i)&&U(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yt(s[r]),a.el=o.el),n||yf(o,a)),a.type===co&&(a.el=o.el)}}function By(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const $y=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),co=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),zi=[];let ut=null;function It(t=!1){zi.push(ut=t?null:[])}function jy(){zi.pop(),ut=zi[zi.length-1]||null}let ss=1;function ku(t){ss+=t}function vf(t){return t.dynamicChildren=ss>0?ut||Qn:null,jy(),ss>0&&ut&&ut.push(t),t}function Ft(t,e,n,i,s,r){return vf(P(t,e,n,i,s,r,!0))}function Vy(t,e,n,i,s){return vf(Rt(t,e,n,i,s,!0))}function Hy(t){return t?t.__v_isVNode===!0:!1}function Pi(t,e){return t.type===e.type&&t.key===e.key}const uo="__vInternal",Ef=({key:t})=>t??null,pr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Se(t)||$(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,i=0,s=null,r=t===Xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ef(e),ref:e&&pr(e),scopeId:nf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(Fl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),ss>0&&!o&&ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ut.push(l),l}const Rt=Wy;function Wy(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Iy)&&(t=On),Hy(t)){const a=hi(t,e,!0);return n&&Fl(a,n),ss>0&&!r&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag|=-2,a}if(tv(t)&&(t=t.__vccOpts),e){e=zy(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=Cl(a)),ue(l)&&(zd(l)&&!U(l)&&(l=we({},l)),e.style=Tl(l))}const o=ye(t)?1:ly(t)?128:$y(t)?64:ue(t)?4:$(t)?2:0;return P(t,e,n,i,s,o,r,!0)}function zy(t){return t?zd(t)||uo in t?we({},t):t:null}function hi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?qy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ef(a),ref:e&&e.ref?n&&s?U(s)?s.concat(pr(e)):[s,pr(e)]:pr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hi(t.ssContent),ssFallback:t.ssFallback&&hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gt(t=" ",e=0){return Rt(co,null,t,e)}function Ky(t,e){const n=Rt(fr,null,t);return n.staticCount=e,n}function Pu(t="",e=!1){return e?(It(),Vy(On,null,t)):Rt(On,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Rt(On):U(t)?Rt(Xe,null,t.slice()):typeof t=="object"?Yt(t):Rt(co,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hi(t)}function Fl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(uo in e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),i&64?(n=16,e=[Gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function qy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Cl([e.class,i.class]));else if(s==="style")e.style=Tl([e.style,i.style]);else if(no(s)){const r=e[s],o=i[s];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function wt(t,e,n,i=null){gt(t,e,7,[n,i])}const Gy=df();let Yy=0;function Xy(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Gy,r={uid:Yy++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pf(i,s),emitsOptions:tf(i,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ny.bind(null,r),t.ce&&t.ce(r),r}let Ae=null;const wf=()=>Ae||ct;let Ul,Hn,xu="__VUE_INSTANCE_SETTERS__";(Hn=ba()[xu])||(Hn=ba()[xu]=[]),Hn.push(t=>Ae=t),Ul=t=>{Hn.length>1?Hn.forEach(e=>e(t)):Hn[0](t)};const di=t=>{Ul(t),t.scope.on()},Nn=()=>{Ae&&Ae.scope.off(),Ul(null)};function If(t){return t.vnode.shapeFlag&4}let rs=!1;function Qy(t,e=!1){rs=e;const{props:n,children:i}=t.vnode,s=If(t);xy(t,n,s,e),My(t,i);const r=s?Jy(t,e):void 0;return rs=!1,r}function Jy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kd(new Proxy(t.ctx,Ty));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?ev(t):null;di(t),yi();const r=Qt(i,t,0,[t.props,s]);if(vi(),Nn(),Sd(r)){if(r.then(Nn,Nn),e)return r.then(o=>{Ou(t,o,e)}).catch(o=>{oo(o,t,0)});t.asyncDep=r}else Ou(t,r,e)}else Tf(t,e)}function Ou(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Xd(e)),Tf(t,n)}let Du;function Tf(t,e,n){const i=t.type;if(!t.render){if(!e&&Du&&!i.render){const s=i.template||Ml(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=we(we({isCustomElement:r,delimiters:a},o),l);i.render=Du(s,c)}}t.render=i.render||pt}di(t),yi(),Cy(t),vi(),Nn()}function Zy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}}))}function ev(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Zy(t)},slots:t.slots,emit:t.emit,expose:e}}function Bl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xd(Kd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}}))}function tv(t){return $(t)&&"__vccOpts"in t}const nv=(t,e)=>Ym(t,e,rs),iv=Symbol.for("v-scx"),sv=()=>ni(iv),rv="3.3.4",ov="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,Mu=In&&In.createElement("template"),av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?In.createElementNS(ov,t):In.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Mu.innerHTML=i?`<svg>${t}</svg>`:t;const a=Mu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cv(t,e,n){const i=t.style,s=ye(n);if(n&&!s){if(e&&!ye(e))for(const r in e)n[r]==null&&La(i,r,"");for(const r in n)La(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Lu=/\s*!important$/;function La(t,e,n){if(U(n))n.forEach(i=>La(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=uv(t,e);Lu.test(n)?t.setProperty(mi(i),n.replace(Lu,""),"important"):t[i]=n}}const Fu=["Webkit","Moz","ms"],Go={};function uv(t,e){const n=Go[e];if(n)return n;let i=ci(e);if(i!=="filter"&&i in t)return Go[e]=i;i=kd(i);for(let s=0;s<Fu.length;s++){const r=Fu[s]+i;if(r in t)return Go[e]=r}return e}const Uu="http://www.w3.org/1999/xlink";function hv(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Uu,e.slice(6,e.length)):t.setAttributeNS(Uu,e,n);else{const r=pm(e);n==null||r&&!Pd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function dv(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pd(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function fv(t,e,n,i){t.addEventListener(e,n,i)}function pv(t,e,n,i){t.removeEventListener(e,n,i)}function gv(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=_v(e);if(i){const c=r[e]=vv(i,s);fv(t,a,c,l)}else o&&(pv(t,a,o,l),r[e]=void 0)}}const Bu=/(?:Once|Passive|Capture)$/;function _v(t){let e;if(Bu.test(t)){e={};let i;for(;i=t.match(Bu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mi(t.slice(2)),e]}let Yo=0;const mv=Promise.resolve(),yv=()=>Yo||(mv.then(()=>Yo=0),Yo=Date.now());function vv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;gt(Ev(i,n.value),e,5,[i])};return n.value=t,n.attached=yv(),n}function Ev(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const $u=/^on[a-z]/,wv=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?lv(t,i,s):e==="style"?cv(t,n,i):no(e)?vl(e)||gv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iv(t,e,i,s))?dv(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hv(t,e,i,s))};function Iv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&$u.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$u.test(e)&&ye(n)?!1:e in t}const Tv=we({patchProp:wv},av);let ju;function Cv(){return ju||(ju=Fy(Tv))}const bv=(...t)=>{const e=Cv().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Av(i);if(!s)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Av(t){return ye(t)?document.querySelector(t):t}const Sv="/assets/long_thay-c3771372.jpg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw Ei(e)},Ei=function(t){return new Error("Firebase Database ("+Cf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rv=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Nv;const d=r<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const v=c<<6&192|h;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Af=function(t){const e=bf(t);return ho.encodeByteArray(e,!0)},wr=function(t){return Af(t).replace(/\./g,"")},Ir=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return Sf(void 0,t)}function Sf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pv(n)||(t[n]=Sf(t[n],e[n]));return t}function Pv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=()=>xv().__FIREBASE_DEFAULTS__,Dv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ir(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return Ov()||Dv()||Mv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fv=t=>{const e=Lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Rf=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},Uv=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wr(JSON.stringify(n)),wr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function Nf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pf(){return Cf.NODE_ADMIN===!0}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function xf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function $v(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="FirebaseError";class yt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jv,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Vv(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yt(s,a,i)}}function Vv(t,e){return t.replace(Hv,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Hv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=as(Ir(r[0])||""),n=as(Ir(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Wv=function(t){const e=Of(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zv=function(t){const e=Of(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Hu(r)&&Hu(o)){if(!Cr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function qv(t,e){const n=new Gv(t,e);return n.subscribe.bind(n)}class Gv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Yv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Xo),s.error===void 0&&(s.error=Xo),s.complete===void 0&&(s.complete=Xo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xo(){}function Df(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,w(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fo=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=1e3,Jv=2,Zv=4*60*60*1e3,eE=.5;function Wu(t,e=Qv,n=Jv){const i=e*Math.pow(n,t),s=Math.round(eE*i*(Math.random()-.5)*2);return Math.min(Zv,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Be{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new os;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iE(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(t){return t===yn?void 0:t}function iE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const rE={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},oE=Q.INFO,aE={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},lE=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=aE[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const cE=(t,e)=>e.some(n=>t instanceof n);let zu,Ku;function uE(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hE(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mf=new WeakMap,Fa=new WeakMap,Lf=new WeakMap,Qo=new WeakMap,Wl=new WeakMap;function dE(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Jt(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mf.set(n,t)}).catch(()=>{}),Wl.set(e,t),e}function fE(t){if(Fa.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Fa.set(t,e)}let Ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){Ua=t(Ua)}function gE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Jo(this),e,...n);return Lf.set(i,e.sort?e.sort():[e]),Jt(i)}:hE().includes(t)?function(...e){return t.apply(Jo(this),e),Jt(Mf.get(this))}:function(...e){return Jt(t.apply(Jo(this),e))}}function _E(t){return typeof t=="function"?gE(t):(t instanceof IDBTransaction&&fE(t),cE(t,uE())?new Proxy(t,Ua):t)}function Jt(t){if(t instanceof IDBRequest)return dE(t);if(Qo.has(t))return Qo.get(t);const e=_E(t);return e!==t&&(Qo.set(t,e),Wl.set(e,t)),e}const Jo=t=>Wl.get(t);function mE(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Jt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Jt(o.result),l.oldVersion,l.newVersion,Jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],Zo=new Map;function qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=vE.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Zo.set(e,r),r}pE(t=>({...t,get:(e,n,i)=>qu(e,n)||t.get(e,n,i),has:(e,n)=>!!qu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",Gu="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new wi("@firebase/app"),IE="@firebase/app-compat",TE="@firebase/analytics-compat",CE="@firebase/analytics",bE="@firebase/app-check-compat",AE="@firebase/app-check",SE="@firebase/auth",RE="@firebase/auth-compat",NE="@firebase/database",kE="@firebase/database-compat",PE="@firebase/functions",xE="@firebase/functions-compat",OE="@firebase/installations",DE="@firebase/installations-compat",ME="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",BE="@firebase/remote-config",$E="@firebase/remote-config-compat",jE="@firebase/storage",VE="@firebase/storage-compat",HE="@firebase/firestore",WE="@firebase/firestore-compat",zE="firebase",KE="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]",qE={[Ba]:"fire-core",[IE]:"fire-core-compat",[CE]:"fire-analytics",[TE]:"fire-analytics-compat",[AE]:"fire-app-check",[bE]:"fire-app-check-compat",[SE]:"fire-auth",[RE]:"fire-auth-compat",[NE]:"fire-rtdb",[kE]:"fire-rtdb-compat",[PE]:"fire-fn",[xE]:"fire-fn-compat",[OE]:"fire-iid",[DE]:"fire-iid-compat",[ME]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[BE]:"fire-rc",[$E]:"fire-rc-compat",[jE]:"fire-gcs",[VE]:"fire-gcs-compat",[HE]:"fire-fst",[WE]:"fire-fst-compat","fire-js":"fire-js",[zE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Map,ja=new Map;function GE(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ze(t){const e=t.name;if(ja.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;ja.set(e,t);for(const n of br.values())GE(n,t);return!0}function As(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new cn("app","Firebase",YE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=KE;function Ff(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$a,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(n||(n=Rf()),!n)throw Zt.create("no-options");const r=br.get(s);if(r){if(Cr(n,r.options)&&Cr(i,r.config))return r;throw Zt.create("duplicate-app",{appName:s})}const o=new sE(s);for(const l of ja.values())o.addComponent(l);const a=new XE(n,i,o);return br.set(s,a),a}function zl(t=$a){const e=br.get(t);if(!e&&t===$a&&Rf())return Ff();if(!e)throw Zt.create("no-app",{appName:t});return e}function Re(t,e,n){var i;let s=(i=qE[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}ze(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebase-heartbeat-database",JE=1,ls="firebase-heartbeat-store";let ea=null;function Uf(){return ea||(ea=mE(QE,JE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ls)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),ea}async function ZE(t){try{return await(await Uf()).transaction(ls).objectStore(ls).get(Bf(t))}catch(e){if(e instanceof yt)Dn.warn(e.message);else{const n=Zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Yu(t,e){try{const i=(await Uf()).transaction(ls,"readwrite");await i.objectStore(ls).put(e,Bf(t)),await i.done}catch(n){if(n instanceof yt)Dn.warn(n.message);else{const i=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(i.message)}}}function Bf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=1024,tw=30*24*60*60*1e3;class nw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=tw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xu(),{heartbeatsToSend:n,unsentEntries:i}=iw(this._heartbeatsCache.heartbeats),s=wr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xu(){return new Date().toISOString().substring(0,10)}function iw(t,e=ew){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Qu(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qu(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?xf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return wr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){ze(new Be("platform-logger",e=>new EE(e),"PRIVATE")),ze(new Be("heartbeat",e=>new nw(e),"PRIVATE")),Re(Ba,Gu,t),Re(Ba,Gu,"esm2017"),Re("fire-js","")}rw("");const Ju="@firebase/database",Zu="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f="";function ow(t){$f=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aw(e)}}catch{}return new lw},Tn=jf("localStorage"),Va=jf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new wi("@firebase/database"),cw=function(){let t=1;return function(){return t++}}(),Vf=function(t){const e=Xv(t),n=new Kv;n.update(e);const i=n.digest();return ho.encodeByteArray(i)},Ss=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ss.apply(null,i):typeof i=="object"?e+=_e(i):e+=i,e+=" "}return e};let kn=null,eh=!0;const uw=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ii.logLevel=Q.VERBOSE,kn=ii.log.bind(ii),e&&Va.set("logging_enabled",!0)):typeof t=="function"?kn=t:(kn=null,Va.remove("logging_enabled"))},ke=function(...t){if(eh===!0&&(eh=!1,kn===null&&Va.get("logging_enabled")===!0&&uw(!0)),kn){const e=Ss.apply(null,t);kn(e)}},Rs=function(t){return function(...e){ke(t,...e)}},Ha=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ss(...t);ii.error(e)},Ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Ss(...t)}`;throw ii.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+Ss(...t);ii.warn(e)},hw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mn="[MIN_NAME]",rn="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===Mn||e===rn)return-1;if(e===Mn||t===rn)return 1;{const n=th(t),i=th(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},fw=function(t,e){return t===e?0:t<e?-1:1},xi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},ql=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=_e(e[i]),n+=":",n+=ql(t[e[i]]);return n+="}",n},Hf=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wf=function(t){w(!Kl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},pw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _w(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const mw=new RegExp("^-?(0*)\\d{1,10}$"),yw=-2147483648,vw=2147483647,th=function(t){if(mw.test(t)){const e=Number(t);if(e>=yw&&e<=vw)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ew=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}si.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="5",zf="v",Kf="s",qf="r",Gf="f",Yf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xf="ls",Qf="p",Wa="ac",Jf="websocket",Zf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Tw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tp(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let i;if(e===Jf)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zf)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tw(t)&&(n.ns=t.namespace);const s=[];return Ke(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta={},na={};function Yl(t){const e=t.toString();return ta[e]||(ta[e]=new Cw),ta[e]}function bw(t,e){const n=t.toString();return na[n]||(na[n]=e()),na[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ns(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="start",Sw="close",Rw="pLPCommand",Nw="pRTLPCB",np="id",ip="pw",sp="ser",kw="cb",Pw="seg",xw="ts",Ow="d",Dw="dframe",rp=1870,op=30,Mw=rp-op,Lw=25e3,Fw=3e4;class Gn{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=Yl(n),this.urlFn=l=>(this.appCheckToken&&(l[Wa]=this.appCheckToken),tp(n,Zf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Aw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fw)),dw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===nh)this.id=a,this.password=l;else if(o===Sw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[nh]="t",i[sp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[kw]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zf]=Gl,this.transportSessionId&&(i[Kf]=this.transportSessionId),this.lastSessionId&&(i[Xf]=this.lastSessionId),this.applicationId&&(i[Qf]=this.applicationId),this.appCheckToken&&(i[Wa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yf.test(location.hostname)&&(i[qf]=Gf);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gn.forceAllow_=!0}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){return Gn.forceAllow_?!0:!Gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pw()&&!gw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Af(n),s=Hf(i,Mw);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Dw]="t",i[np]=e,i[ip]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xl{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cw(),window[Rw+this.uniqueCallbackIdentifier]=e,window[Nw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[np]=this.myID,e[ip]=this.myPW,e[sp]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+op+i.length<=rp;){const o=this.pendingSegs.shift();i=i+"&"+Pw+s+"="+o.seg+"&"+xw+s+"="+o.ts+"&"+Ow+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Lw)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=16384,Bw=45e3;let Ar=null;typeof MozWebSocket<"u"?Ar=MozWebSocket:typeof WebSocket<"u"&&(Ar=WebSocket);class lt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=Yl(n),this.connURL=lt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[zf]=Gl,typeof location<"u"&&location.hostname&&Yf.test(location.hostname)&&(o[qf]=Gf),n&&(o[Kf]=n),i&&(o[Xf]=i),s&&(o[Wa]=s),r&&(o[Qf]=r),tp(e,Jf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let i;Pf(),this.mySock=new Ar(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ar!==null&&!lt.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||Tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=as(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Hf(n,Uw);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gn,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let i=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[lt];else{const s=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=6e4,jw=5e3,Vw=10*1024,Hw=100*1024,ia="t",ih="d",Ww="s",sh="r",zw="e",rh="o",oh="a",ah="n",lh="p",Kw="h";class qw{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ia in e){const n=e[ia];n===oh?this.upgradeIfSecondaryHealthy_():n===sh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xi("t",e),i=xi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ah,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xi("t",e),i=xi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xi(ia,e);if(ih in e){const i=e[ih];if(n===Kw){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ah){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ww?this.onConnectionShutdown_(i):n===sh?this.onReset_(i):n===zw?Ha("Server Error: "+i):n===rh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ha("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gl!==i&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($w))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends lp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sr}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=32,uh=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new te("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function cp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function up(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function me(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof te)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new te(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=W(t),i=W(e);if(n===null)return e;if(n===i)return Fe(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ql(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ht(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Yw{constructor(e,n){this.errorPrefix_=n,this.parts_=up(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fo(this.parts_[i]);dp(this)}}function Xw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fo(e),dp(t)}function Qw(t){const e=t.parts_.pop();t.byteLength_-=fo(e),t.parts_.length>0&&(t.byteLength_-=1)}function dp(t){if(t.byteLength_>uh)throw new Error(t.errorPrefix_+"has a key path longer than "+uh+" bytes ("+t.byteLength_+").");if(t.parts_.length>ch)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ch+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends lp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Jl}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=1e3,Jw=60*5*1e3,hh=30*1e3,Zw=1.3,eI=3e4,tI="server_kill",dh=3;class jt extends ap{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oi,this.maxReconnectDelay_=Jw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Pf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(_e(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new os,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const i=fi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Wv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ha("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eI&&(this.reconnectDelay_=Oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new qw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{et(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(tI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vu(this.interruptReasons_)&&(this.reconnectDelay_=Oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ql(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new te(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dh&&(this.reconnectDelay_=hh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$f.replace(/\./g,"-")]=1,jl()?e["framework.cordova"]=1:kf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return Vu(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new H(Mn,e),s=new H(Mn,n);return this.compare(i,s)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;class fp extends po{static get __EMPTY_NODE(){return er}static set __EMPTY_NODE(e){er=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw Ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(rn,er)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,er)}toString(){return".key"}}const Pn=new fp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ee.RED,this.left=s??Ve.EMPTY_NODE,this.right=r??Ve.EMPTY_NODE}copy(e,n,i,s,r){return new Ee(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class nI{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tr(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new nI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e){return Ti(t.name,e.name)}function Zl(t,e){return Ti(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;function sI(t){za=t}const pp=function(t){return typeof t=="number"?"number:"+Wf(t):"string:"+t},gp=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else w(t===za||t.isEmpty(),"priority of unexpected type.");w(t===za||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gp(this.priorityNode_)}static set __childrenNodeConstructor(e){fh=e}static get __childrenNodeConstructor(){return fh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:W(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=W(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wf(this.value_):e+=this.value_,this.lazyHash_=Vf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(i);return w(s>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p,mp;function rI(t){_p=t}function oI(t){mp=t}class aI extends po{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(rn,new ve("[PRIORITY-POST]",mp))}makePost(e,n){const i=_p(e);return new H(n,new ve("[PRIORITY-POST]",i))}toString(){return".priority"}}const ce=new aI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=Math.log(2);class cI{constructor(e){const n=r=>parseInt(Math.log(r)/lI,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rr=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const g=parseInt(u/2,10)+l,v=s(l,g),C=s(g+1,c);return h=t[g],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,v,C)}},r=function(l){let c=null,u=null,h=t.length;const d=function(v,C){const N=h-v,j=h;h-=v;const G=s(N+1,j),B=t[N],R=n?n(B):B;g(new Ee(R,B.node,C,null,G))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const C=l.nextBitIsOne(),N=Math.pow(2,l.count-(v+1));C?d(N,Ee.BLACK):(d(N,Ee.BLACK),d(N,Ee.RED))}return u},o=new cI(t.length),a=r(o);return new Ve(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;const Wn={};class Bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(Wn&&ce,"ChildrenNode.ts has not been loaded"),sa=sa||new Bt({".priority":Wn},{".priority":ce}),sa}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==Pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(H.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Rr(i,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Bt(u,c)}addToIndexes(e,n){const i=Tr(this.indexes_,(s,r)=>{const o=fi(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),s===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rr(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new Bt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Tr(this.indexes_,s=>{if(s===Wn)return s;{const r=n.get(e.name);return r?s.remove(new H(e.name,r)):s}});return new Bt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di;class D{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&gp(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new D(new Ve(Zl),null,Bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new H(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Di:this.priorityNode_;return new D(s,o,r)}}updateChild(e,n){const i=W(e);if(i===null)return n;{w(W(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(re(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ce,(o,a)=>{n[o]=a.val(e),i++,r&&D.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pp(this.getPriority().val())+":"),this.forEachChild(ce,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Vf(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new H(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,H.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===Pn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ce),s=n.getIterator(ce);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uI extends D{constructor(){super(new Ve(Zl),D.EMPTY_NODE,Bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ks=new uI;Object.defineProperties(H,{MIN:{value:new H(Mn,D.EMPTY_NODE)},MAX:{value:new H(rn,ks)}});fp.__EMPTY_NODE=D.EMPTY_NODE;ve.__childrenNodeConstructor=D;sI(ks);oI(ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=!0;function Ce(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&hI){const n=[];let i=!1;if(Ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return D.EMPTY_NODE;const r=Rr(n,iI,o=>o.name,Zl);if(i){const o=Rr(n,ce.getCompare());return new D(r,Ce(e),new Bt({".priority":o},{".priority":ce}))}else return new D(r,Ce(e),Bt.Default)}else{let n=D.EMPTY_NODE;return Ke(t,(i,s)=>{if(xt(t,i)&&i.substring(0,1)!=="."){const r=Ce(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Ce(e))}}rI(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends po{constructor(e){super(),this.indexPath_=e,w(!V(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ti(e.name,n.name):r}makePost(e,n){const i=Ce(e),s=D.EMPTY_NODE.updateChild(this.indexPath_,i);return new H(n,s)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ks);return new H(rn,e)}toString(){return up(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI extends po{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ti(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const i=Ce(e);return new H(n,i)}toString(){return".value"}}const yp=new dI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){return{type:"value",snapshotNode:t}}function pi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function us(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(us(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pi(n,i)):o.trackChildChange(hs(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ce,(s,r)=>{n.hasChild(s)||i.trackChildChange(us(s,r))}),n.isLeafNode()||n.forEachChild(ce,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(hs(s,r,o))}else i.trackChildChange(pi(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.indexedFilter_=new tc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ds.getStartPost_(e),this.endPost_=ds.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new H(n,i))||(i=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=D.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(ce,(o,a)=>{r.matches(new H(o,a))||(s=s.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ds(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new H(n,i))||(i=D.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const l=new H(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(u&&!i.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(hs(n,i,h)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(us(n,h));const C=a.updateImmediateChild(n,D.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(pi(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(us(c.name,c.node)),r.trackChildChange(pi(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gI(t){return t.loadsAllData()?new tc(t.getIndex()):t.hasLimit()?new pI(t):new ds(t)}function _I(t,e){const n=t.copy();return n.index_=e,n}function ph(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===yp?n="$value":t.index_===Pn?n="$key":(w(t.index_ instanceof ec,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=_e(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+_e(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=_e(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ap{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Rs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nr.getListenId_(e,i),a={};this.listens_[o]=a;const l=ph(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),fi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Nr.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ph(e._queryParams),i=e._path.toString(),s=new os;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hl(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=as(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return{value:null,children:new Map}}function Ep(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=W(e);t.children.has(i)||t.children.set(i,kr());const s=t.children.get(i);e=re(e),Ep(s,e,n)}}function Ka(t,e,n){t.value!==null?n(e,t.value):yI(t,(i,s)=>{const r=new te(e.toString()+"/"+i);Ka(s,r,n)})}function yI(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=10*1e3,EI=30*1e3,wI=5*60*1e3;class II{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vI(e);const i=_h+(EI-_h)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ke(e,(s,r)=>{r>0&&xt(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*wI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dt||(dt={}));function wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ic(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=dt.ACK_USER_WRITE,this.source=wp()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Pr(Y(),n,this.revert)}}else return w(W(this.path)===e,"operationForChild called for unrelated child."),new Pr(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=dt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new fs(this.source,Y()):new fs(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=dt.OVERWRITE}operationForChild(e){return V(this.path)?new Ln(this.source,Y(),this.snap.getImmediateChild(e)):new Ln(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=dt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Ln(this.source,Y(),n.value):new ps(this.source,Y(),n)}else return w(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function CI(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fI(o.childName,o.snapshotNode))}),Mi(t,s,"child_removed",e,i,n),Mi(t,s,"child_added",e,i,n),Mi(t,s,"child_moved",r,i,n),Mi(t,s,"child_changed",e,i,n),Mi(t,s,"value",e,i,n),s}function Mi(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>AI(t,a,l)),o.forEach(a=>{const l=bI(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AI(t,e,n){if(e.childName==null||n.childName==null)throw Ei("Should only compare child_ events.");const i=new H(e.childName,e.snapshotNode),s=new H(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e){return{eventCache:t,serverCache:e}}function qi(t,e,n,i){return go(new an(e,n,i),t.serverCache)}function Ip(t,e,n,i){return go(t.eventCache,new an(e,n,i))}function xr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const SI=()=>(ra||(ra=new Ve(fw)),ra);class oe{constructor(e,n=SI()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ke(e,(i,s)=>{n=n.set(new te(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(V(e))return null;{const i=W(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(re(e),n);return r!=null?{path:me(new te(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=W(e),i=this.children.get(n);return i!==null?i.subtree(re(e)):new oe(null)}}set(e,n){if(V(e))return new oe(n,this.children);{const i=W(e),r=(this.children.get(i)||new oe(null)).set(re(e),n),o=this.children.insert(i,r);return new oe(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=W(e),i=this.children.get(n);if(i){const s=i.remove(re(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=W(e),i=this.children.get(n);return i?i.get(re(e)):null}}setTree(e,n){if(V(e))return n;{const i=W(e),r=(this.children.get(i)||new oe(null)).setTree(re(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new oe(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(me(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(V(e))return null;{const r=W(e),o=this.children.get(r);return o?o.findOnPath_(re(e),me(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,i){if(V(e))return this;{this.value&&i(n,this.value);const s=W(e),r=this.children.get(s);return r?r.foreachOnPath_(re(e),me(n,s),i):new oe(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(me(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new oe(null))}}function Gi(t,e,n){if(V(e))return new _t(new oe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Fe(s,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(s,r))}else{const s=new oe(n),r=t.writeTree_.setTree(e,s);return new _t(r)}}}function mh(t,e,n){let i=t;return Ke(n,(s,r)=>{i=Gi(i,me(e,s),r)}),i}function yh(t,e){if(V(e))return _t.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new _t(n)}}function qa(t,e){return $n(t,e)!=null}function $n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function vh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(i,s)=>{e.push(new H(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new H(i,s.value))}),e}function en(t,e){if(V(e))return t;{const n=$n(t,e);return n!=null?new _t(new oe(n)):new _t(t.writeTree_.subtree(e))}}function Ga(t){return t.writeTree_.isEmpty()}function gi(t,e){return Tp(Y(),t.writeTree_,e)}function Tp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Tp(me(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(me(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){return Sp(e,t)}function RI(t,e,n,i,s){w(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=i}function NI(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function kI(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&PI(a,i.path)?s=!1:ht(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return xI(t),!0;if(i.snap)t.visibleWrites=yh(t.visibleWrites,i.path);else{const a=i.children;Ke(a,l=>{t.visibleWrites=yh(t.visibleWrites,me(i.path,l))})}return!0}else return!1}function PI(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(me(t.path,n),e))return!0;return!1}function xI(t){t.visibleWrites=Cp(t.allWrites,OI,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function OI(t){return t.visible}function Cp(t,e,n){let i=_t.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)ht(n,o)?(a=Fe(n,o),i=Gi(i,a,r.snap)):ht(o,n)&&(a=Fe(o,n),i=Gi(i,Y(),r.snap.getChild(a)));else if(r.children){if(ht(n,o))a=Fe(n,o),i=mh(i,a,r.children);else if(ht(o,n))if(a=Fe(o,n),V(a))i=mh(i,Y(),r.children);else{const l=fi(r.children,W(a));if(l){const c=l.getChild(re(a));i=Gi(i,Y(),c)}}}else throw Ei("WriteRecord should have .snap or .children")}}return i}function bp(t,e,n,i,s){if(!i&&!s){const r=$n(t.visibleWrites,e);if(r!=null)return r;{const o=en(t.visibleWrites,e);if(Ga(o))return n;if(n==null&&!qa(o,Y()))return null;{const a=n||D.EMPTY_NODE;return gi(o,a)}}}else{const r=en(t.visibleWrites,e);if(!s&&Ga(r))return n;if(!s&&n==null&&!qa(r,Y()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ht(c.path,e)||ht(e,c.path))},a=Cp(t.allWrites,o,e),l=n||D.EMPTY_NODE;return gi(a,l)}}}function DI(t,e,n){let i=D.EMPTY_NODE;const s=$n(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ce,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=en(t.visibleWrites,e);return n.forEachChild(ce,(o,a)=>{const l=gi(en(r,new te(o)),a);i=i.updateImmediateChild(o,l)}),vh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=en(t.visibleWrites,e);return vh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function MI(t,e,n,i,s){w(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=me(e,n);if(qa(t.visibleWrites,r))return null;{const o=en(t.visibleWrites,r);return Ga(o)?s.getChild(n):gi(o,s.getChild(n))}}function LI(t,e,n,i){const s=me(e,n),r=$n(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=en(t.visibleWrites,s);return gi(o,i.getNode().getImmediateChild(n))}else return null}function FI(t,e){return $n(t.visibleWrites,e)}function UI(t,e,n,i,s,r,o){let a;const l=en(t.visibleWrites,e),c=$n(l,Y());if(c!=null)a=c;else if(n!=null)a=gi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function BI(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Or(t,e,n,i){return bp(t.writeTree,t.treePath,e,n,i)}function rc(t,e){return DI(t.writeTree,t.treePath,e)}function Eh(t,e,n,i){return MI(t.writeTree,t.treePath,e,n,i)}function Dr(t,e){return FI(t.writeTree,me(t.treePath,e))}function $I(t,e,n,i,s,r){return UI(t.writeTree,t.treePath,e,n,i,s,r)}function oc(t,e,n){return LI(t.writeTree,t.treePath,e,n)}function Ap(t,e){return Sp(me(t.treePath,e),t.writeTree)}function Sp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,hs(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,us(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,pi(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,hs(i,e.snapshotNode,s.oldSnap));else throw Ei("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Rp=new VI;class ac{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new an(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fn(this.viewCache_),r=$I(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){return{filter:t}}function WI(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zI(t,e,n,i,s){const r=new jI;let o,a;if(n.type===dt.OVERWRITE){const c=n;c.source.fromUser?o=Ya(t,e,c.path,c.snap,i,s,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=Mr(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===dt.MERGE){const c=n;c.source.fromUser?o=qI(t,e,c.path,c.children,i,s,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xa(t,e,c.path,c.children,i,s,a,r))}else if(n.type===dt.ACK_USER_WRITE){const c=n;c.revert?o=XI(t,e,c.path,i,s,r):o=GI(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===dt.LISTEN_COMPLETE)o=YI(t,e,n.path,i,r);else throw Ei("Unknown operation type: "+n.type);const l=r.getChanges();return KI(e,o,l),{viewCache:o,changes:l}}function KI(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xr(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(vp(xr(e)))}}function Np(t,e,n,i,s,r){const o=e.eventCache;if(Dr(i,n)!=null)return e;{let a,l;if(V(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fn(e),u=c instanceof D?c:D.EMPTY_NODE,h=rc(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Or(i,Fn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=W(n);if(c===".priority"){w(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Eh(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=re(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Eh(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=oc(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return qi(e,a,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function Mr(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=W(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const v=re(n),N=l.getNode().getImmediateChild(g).updateChild(v,i);g===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),g,N,v,Rp,null)}const h=Ip(e,c,l.isFullyInitialized()||V(n),u.filtersNodes()),d=new ac(s,h,r);return Np(t,h,n,s,d,a)}function Ya(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new ac(s,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=qi(e,c,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=qi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=re(n),g=a.getNode().getImmediateChild(h);let v;if(V(d))v=i;else{const C=u.getCompleteChild(h);C!=null?cp(d)===".priority"&&C.getChild(hp(d)).isEmpty()?v=C:v=C.updateChild(d,i):v=D.EMPTY_NODE}if(g.equals(v))l=e;else{const C=t.filter.updateChild(a.getNode(),h,v,d,u,o);l=qi(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function wh(t,e){return t.eventCache.isCompleteForChild(e)}function qI(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=me(n,l);wh(e,W(u))&&(a=Ya(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=me(n,l);wh(e,W(u))||(a=Ya(t,a,u,c,s,r,o))}),a}function Ih(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xa(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;V(n)?c=i:c=new oe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Ih(t,g,d);l=Mr(t,l,new te(h),v,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),C=Ih(t,v,d);l=Mr(t,l,new te(h),C,s,r,o,a)}}),l}function GI(t,e,n,i,s,r,o){if(Dr(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(V(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Mr(t,e,n,l.getNode().getChild(n),s,r,a,o);if(V(n)){let c=new oe(null);return l.getNode().forEachChild(Pn,(u,h)=>{c=c.set(new te(u),h)}),Xa(t,e,n,c,s,r,a,o)}else return e}else{let c=new oe(null);return i.foreach((u,h)=>{const d=me(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xa(t,e,n,c,s,r,a,o)}}function YI(t,e,n,i,s){const r=e.serverCache,o=Ip(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return Np(t,o,n,i,Rp,s)}function XI(t,e,n,i,s,r){let o;if(Dr(i,n)!=null)return e;{const a=new ac(i,e,s),l=e.eventCache.getNode();let c;if(V(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Or(i,Fn(e));else{const h=e.serverCache.getNode();w(h instanceof D,"serverChildren would be complete if leaf node"),u=rc(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=W(n);let h=oc(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,re(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,D.EMPTY_NODE,re(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Or(i,Fn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dr(i,Y())!=null,qi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new tc(i.getIndex()),r=gI(i);this.processor_=HI(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(D.EMPTY_NODE,a.getNode(),null),u=new an(l,o.isFullyInitialized(),s.filtersNodes()),h=new an(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=go(h,u),this.eventGenerator_=new TI(this.query_)}get query(){return this.query_}}function JI(t){return t.viewCache_.serverCache.getNode()}function ZI(t){return xr(t.viewCache_)}function eT(t,e){const n=Fn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Th(t){return t.eventRegistrations_.length===0}function tT(t,e){t.eventRegistrations_.push(e)}function Ch(t,e,n){const i=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function bh(t,e,n,i){e.type===dt.MERGE&&e.source.queryId!==null&&(w(Fn(t.viewCache_),"We should always have a full cache before handling merges"),w(xr(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=zI(t.processor_,s,e,n,i);return WI(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,kp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nT(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(r,o)=>{i.push(pi(r,o))}),n.isFullyInitialized()&&i.push(vp(n.getNode())),kp(t,i,n.getNode(),e)}function kp(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return CI(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;class Pp{constructor(){this.views=new Map}}function iT(t){w(!Lr,"__referenceConstructor has already been defined"),Lr=t}function sT(){return w(Lr,"Reference.ts has not been loaded"),Lr}function rT(t){return t.views.size===0}function lc(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return w(r!=null,"SyncTree gave us an op for an invalid query."),bh(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(bh(o,e,n,i));return r}}function xp(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Or(n,s?i:null),l=!1;a?l=!0:i instanceof D?(a=rc(n,i),l=!1):(a=D.EMPTY_NODE,l=!1);const c=go(new an(a,l,!1),new an(i,s,!1));return new QI(e,c)}return o}function oT(t,e,n,i,s,r){const o=xp(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tT(o,n),nT(o,n)}function aT(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=ln(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Ch(c,n,i)),Th(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Ch(l,n,i)),Th(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ln(t)&&r.push(new(sT())(e._repo,e._path)),{removed:r,events:o}}function Op(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tn(t,e){let n=null;for(const i of t.views.values())n=n||eT(i,e);return n}function Dp(t,e){if(e._queryParams.loadsAllData())return mo(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Mp(t,e){return Dp(t,e)!=null}function ln(t){return mo(t)!=null}function mo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr;function lT(t){w(!Fr,"__referenceConstructor has already been defined"),Fr=t}function cT(){return w(Fr,"Reference.ts has not been loaded"),Fr}let uT=1;class Ah{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=BI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hT(t,e,n,i,s){return RI(t.pendingWriteTree_,e,n,i,s),s?xs(t,new Ln(wp(),e,n)):[]}function Yn(t,e,n=!1){const i=NI(t.pendingWriteTree_,e);if(kI(t.pendingWriteTree_,e)){let r=new oe(null);return i.snap!=null?r=r.set(Y(),!0):Ke(i.children,o=>{r=r.set(new te(o),!0)}),xs(t,new Pr(i.path,r,n))}else return[]}function Ps(t,e,n){return xs(t,new Ln(ic(),e,n))}function dT(t,e,n){const i=oe.fromObject(n);return xs(t,new ps(ic(),e,i))}function fT(t,e){return xs(t,new fs(ic(),e))}function pT(t,e,n){const i=cc(t,n);if(i){const s=uc(i),r=s.path,o=s.queryId,a=Fe(r,e),l=new fs(sc(o),a);return hc(t,r,l)}else return[]}function Ur(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Mp(o,e))){const l=aT(o,e,n,i);rT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>ln(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=mT(d);for(let v=0;v<g.length;++v){const C=g[v],N=C.query,j=$p(t,C);t.listenProvider_.startListening(Yi(N),gs(t,N),j.hashFn,j.onComplete)}}}!h&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Yi(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(yo(d));t.listenProvider_.stopListening(Yi(d),g)}))}yT(t,c)}return a}function Lp(t,e,n,i){const s=cc(t,i);if(s!=null){const r=uc(s),o=r.path,a=r.queryId,l=Fe(o,e),c=new Ln(sc(a),l,n);return hc(t,o,c)}else return[]}function gT(t,e,n,i){const s=cc(t,i);if(s){const r=uc(s),o=r.path,a=r.queryId,l=Fe(o,e),c=oe.fromObject(n),u=new ps(sc(a),l,c);return hc(t,o,u)}else return[]}function Qa(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,g)=>{const v=Fe(d,s);r=r||tn(g,v),o=o||ln(g)});let a=t.syncPointTree_.get(s);a?(o=o||ln(a),r=r||tn(a,Y())):(a=new Pp,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,v)=>{const C=tn(v,Y());C&&(r=r.updateImmediateChild(g,C))}));const c=Mp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=yo(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=vT();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=_o(t.pendingWriteTree_,s);let h=oT(a,e,n,u,r,l);if(!c&&!o&&!i){const d=Dp(a,e);h=h.concat(ET(t,e,d))}return h}function Fp(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),c=tn(a,l);if(c)return c});return bp(s,e,r,n,!0)}function _T(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Fe(c,n);i=i||tn(u,h)});let s=t.syncPointTree_.get(n);s?i=i||tn(s,Y()):(s=new Pp,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new an(i,!0,!1):null,a=_o(t.pendingWriteTree_,e._path),l=xp(s,e,a,r?o.getNode():D.EMPTY_NODE,r);return ZI(l)}function xs(t,e){return Up(e,t.syncPointTree_,null,_o(t.pendingWriteTree_,Y()))}function Up(t,e,n,i){if(V(t.path))return Bp(t,e,n,i);{const s=e.get(Y());n==null&&s!=null&&(n=tn(s,Y()));let r=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ap(i,o);r=r.concat(Up(a,l,c,u))}return s&&(r=r.concat(lc(s,t,i,n))),r}}function Bp(t,e,n,i){const s=e.get(Y());n==null&&s!=null&&(n=tn(s,Y()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ap(i,o),u=t.operationForChild(o);u&&(r=r.concat(Bp(u,a,l,c)))}),s&&(r=r.concat(lc(s,t,i,n))),r}function $p(t,e){const n=e.query,i=gs(t,n);return{hashFn:()=>(JI(e)||D.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?pT(t,n._path,i):fT(t,n._path);{const r=_w(s,n);return Ur(t,n,null,r)}}}}function gs(t,e){const n=yo(e);return t.queryToTagMap.get(n)}function yo(t){return t._path.toString()+"$"+t._queryIdentifier}function cc(t,e){return t.tagToQueryMap.get(e)}function uc(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function hc(t,e,n){const i=t.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const s=_o(t.pendingWriteTree_,e);return lc(i,n,s,null)}function mT(t){return t.fold((e,n,i)=>{if(n&&ln(n))return[mo(n)];{let s=[];return n&&(s=Op(n)),Ke(i,(r,o)=>{s=s.concat(o)}),s}})}function Yi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cT())(t._repo,t._path):t}function yT(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=yo(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function vT(){return uT++}function ET(t,e,n){const i=e._path,s=gs(t,e),r=$p(t,n),o=t.listenProvider_.startListening(Yi(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)w(!ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!V(c)&&u&&ln(u))return[mo(u).query];{let d=[];return u&&(d=d.concat(Op(u).map(g=>g.query))),Ke(h,(g,v)=>{d=d.concat(v)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Yi(u),gs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dc(n)}node(){return this.node_}}class fc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=me(this.path_,e);return new fc(this.syncTree_,n)}node(){return Fp(this.syncTree_,this.path_)}}const wT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sh=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TT(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},TT=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const s=e.node();if(w(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},CT=function(t,e,n,i){return pc(e,new fc(n,t),i)},bT=function(t,e,n){return pc(t,new dc(e),n)};function pc(t,e,n){const i=t.getPriority().val(),s=Sh(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Sh(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ve(a,Ce(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ve(s))),o.forEachChild(ce,(a,l)=>{const c=pc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function _c(t,e){let n=e instanceof te?e:new te(e),i=t,s=W(n);for(;s!==null;){const r=fi(i.node.children,s)||{children:{},childCount:0};i=new gc(s,i,r),n=re(n),s=W(n)}return i}function Ci(t){return t.node.value}function jp(t,e){t.node.value=e,Ja(t)}function Vp(t){return t.node.childCount>0}function AT(t){return Ci(t)===void 0&&!Vp(t)}function vo(t,e){Ke(t.node.children,(n,i)=>{e(new gc(n,t,i))})}function Hp(t,e,n,i){n&&!i&&e(t),vo(t,s=>{Hp(s,e,!0,i)}),n&&i&&e(t)}function ST(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Os(t){return new te(t.parent===null?t.name:Os(t.parent)+"/"+t.name)}function Ja(t){t.parent!==null&&RT(t.parent,t.name,t)}function RT(t,e,n){const i=AT(n),s=xt(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Ja(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ja(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=/[\[\].#$\/\u0000-\u001F\u007F]/,kT=/[\[\].#$\u0000-\u001F\u007F]/,oa=10*1024*1024,Wp=function(t){return typeof t=="string"&&t.length!==0&&!NT.test(t)},zp=function(t){return typeof t=="string"&&t.length!==0&&!kT.test(t)},PT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zp(t)},Rh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Kl(t)||t&&typeof t=="object"&&xt(t,".sv")},Kp=function(t,e,n){const i=n instanceof te?new Yw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(i));if(typeof e=="function")throw new Error(t+"contains a function "+vn(i)+" with contents = "+e.toString());if(Kl(e))throw new Error(t+"contains "+e.toString()+" "+vn(i));if(typeof e=="string"&&e.length>oa/3&&fo(e)>oa)throw new Error(t+"contains a string greater than "+oa+" utf8 bytes "+vn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ke(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wp(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xw(i,o),Kp(t,a,i),Qw(i)}),s&&r)throw new Error(t+' contains ".value" child '+vn(i)+" in addition to actual children.")}},mc=function(t,e,n,i){if(!(i&&n===void 0)&&!zp(n))throw new Error(Df(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xT=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mc(t,e,n,i)},OT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!PT(n))throw new Error(Df(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qp(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Ql(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Gp(t,e,n){qp(t,n),Yp(t,i=>Ql(i,e))}function un(t,e,n){qp(t,n),Yp(t,i=>ht(i,e)||ht(e,i))}function Yp(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(MT(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();kn&&ke("event: "+n.toString()),Ns(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="repo_interrupt",FT=25;class UT{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kr(),this.transactionQueueTree_=new gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BT(t,e,n){if(t.stats_=Yl(t.repoInfo_),t.forceRestClient_||Ew())t.server_=new Nr(t.repoInfo_,(i,s,r,o)=>{Nh(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new jt(t.repoInfo_,e,(i,s,r,o)=>{Nh(t,i,s,r,o)},i=>{kh(t,i)},i=>{jT(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=bw(t.repoInfo_,()=>new II(t.stats_,t.server_)),t.infoData_=new mI,t.infoSyncTree_=new Ah({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ps(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yc(t,"connected",!1),t.serverSyncTree_=new Ah({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);un(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function $T(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xp(t){return wT({timestamp:$T(t)})}function Nh(t,e,n,i,s){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Tr(n,c=>Ce(c));o=gT(t.serverSyncTree_,r,l,s)}else{const l=Ce(n);o=Lp(t.serverSyncTree_,r,l,s)}else if(i){const l=Tr(n,c=>Ce(c));o=dT(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Ps(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=wc(t,r)),un(t.eventQueue_,a,o)}function kh(t,e){yc(t,"connected",e),e===!1&&WT(t)}function jT(t,e){Ke(e,(n,i)=>{yc(t,n,i)})}function yc(t,e,n){const i=new te("/.info/"+e),s=Ce(n);t.infoData_.updateSnapshot(i,s);const r=Ps(t.infoSyncTree_,i,s);un(t.eventQueue_,i,r)}function VT(t){return t.nextWriteId_++}function HT(t,e,n){const i=_T(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=Ce(s).withIndex(e._queryParams.getIndex());Qa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ps(t.serverSyncTree_,e._path,r);else{const a=gs(t.serverSyncTree_,e);o=Lp(t.serverSyncTree_,e._path,r,a)}return un(t.eventQueue_,e._path,o),Ur(t.serverSyncTree_,e,n,null,!0),r},s=>(vc(t,"get for query "+_e(e)+" failed: "+s),Promise.reject(new Error(s))))}function WT(t){vc(t,"onDisconnectEvents");const e=Xp(t),n=kr();Ka(t.onDisconnect_,Y(),(s,r)=>{const o=CT(s,r,t.serverSyncTree_,e);Ep(n,s,o)});let i=[];Ka(n,Y(),(s,r)=>{i=i.concat(Ps(t.serverSyncTree_,s,r));const o=YT(t,s);wc(t,o)}),t.onDisconnect_=kr(),un(t.eventQueue_,Y(),i)}function zT(t,e,n){let i;W(e._path)===".info"?i=Qa(t.infoSyncTree_,e,n):i=Qa(t.serverSyncTree_,e,n),Gp(t.eventQueue_,e._path,i)}function Ph(t,e,n){let i;W(e._path)===".info"?i=Ur(t.infoSyncTree_,e,n):i=Ur(t.serverSyncTree_,e,n),Gp(t.eventQueue_,e._path,i)}function KT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LT)}function vc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function Qp(t,e,n){return Fp(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Ec(t,e=t.transactionQueueTree_){if(e||Eo(t,e),Ci(e)){const n=Zp(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&qT(t,Os(e),n)}else Vp(e)&&vo(e,n=>{Ec(t,n)})}function qT(t,e,n){const i=n.map(c=>c.currentWriteId),s=Qp(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Fe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{vc(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Yn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Eo(t,_c(t.transactionQueueTree_,e)),Ec(t,t.transactionQueueTree_),un(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{et("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}wc(t,e)}},o)}function wc(t,e){const n=Jp(t,e),i=Os(n),s=Zp(t,n);return GT(t,s,i),i}function GT(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Fe(n,l.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=FT)u=!0,h="maxretry",s=s.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Qp(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Kp("transaction failed: Data returned ",g,l.path);let v=Ce(g);typeof g=="object"&&g!=null&&xt(g,".priority")||(v=v.updatePriority(d.getPriority()));const N=l.currentWriteId,j=Xp(t),G=bT(v,d,j);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=G,l.currentWriteId=VT(t),o.splice(o.indexOf(N),1),s=s.concat(hT(t.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),s=s.concat(Yn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",s=s.concat(Yn(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Eo(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ns(i[a]);Ec(t,t.transactionQueueTree_)}function Jp(t,e){let n,i=t.transactionQueueTree_;for(n=W(e);n!==null&&Ci(i)===void 0;)i=_c(i,n),e=re(e),n=W(e);return i}function Zp(t,e){const n=[];return eg(t,e,n),n.sort((i,s)=>i.order-s.order),n}function eg(t,e,n){const i=Ci(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);vo(e,s=>{eg(t,s,n)})}function Eo(t,e){const n=Ci(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,jp(e,n.length>0?n:void 0)}vo(e,i=>{Eo(t,i)})}function YT(t,e){const n=Os(Jp(t,e)),i=_c(t.transactionQueueTree_,e);return ST(i,s=>{aa(t,s)}),aa(t,i),Hp(i,s=>{aa(t,s)}),n}function aa(t,e){const n=Ci(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?jp(e,void 0):n.length=r+1,un(t.eventQueue_,Os(e),s);for(let o=0;o<i.length;o++)Ns(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function QT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const xh=function(t,e){const n=JT(t),i=n.namespace;n.domain==="firebase.com"&&Ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hw();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ep(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new te(n.pathString)}},JT=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=XT(t.substring(u,h)));const d=QT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");i=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class ng{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return V(this._path)?null:cp(this._path)}get ref(){return new Ot(this._repo,this._path)}get _queryIdentifier(){const e=gh(this._queryParams),n=ql(e);return n==="{}"?"default":n}get _queryObject(){return gh(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof wo))return!1;const n=this._repo===e._repo,i=Ql(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gw(this._path)}}function ZT(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function eC(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Pn){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Mn)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==rn)throw new Error(i);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===ce){if(e!=null&&!Rh(e)||n!=null&&!Rh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(t.getIndex()instanceof ec||t.getIndex()===yp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ot extends wo{constructor(e,n){super(e,n,new nc,!1)}get parent(){const e=hp(this._path);return e===null?null:new Ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _i{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),i=Br(this.ref,e);return new _i(this._node.getChild(n),i,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new _i(s,Br(this.ref,i),ce)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zn(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Br(t._root,e):t._root}function Br(t,e){return t=rt(t),W(t._path)===null?xT("child","path",e,!1):mc("child","path",e,!1),new Ot(t._repo,me(t._path,e))}function Ic(t){t=rt(t);const e=new ig(()=>{}),n=new Io(e);return HT(t._repo,t,n).then(i=>new _i(i,new Ot(t._repo,t._path),t._queryParams.getIndex()))}class Io{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new tg("value",this,new _i(e.snapshotNode,new Ot(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ng(this,e,n):null}matches(e){return e instanceof Io?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ng(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const i=Br(new Ot(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new tg(e.type,this,new _i(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Tc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ds(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(u,h)=>{Ph(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ig(n,r||void 0),a=e==="value"?new Io(o):new Tc(e,o);return zT(t._repo,t,a),()=>Ph(t._repo,t,a)}function sg(t,e,n,i){return Ds(t,"value",e,n,i)}function tC(t,e,n,i){return Ds(t,"child_added",e,n,i)}function nC(t,e,n,i){return Ds(t,"child_changed",e,n,i)}function iC(t,e,n,i){return Ds(t,"child_moved",e,n,i)}function sC(t,e,n,i){return Ds(t,"child_removed",e,n,i)}class rC{}class oC extends rC{constructor(e){super(),this._path=e}_apply(e){ZT(e,"orderByChild");const n=new te(this._path);if(V(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new ec(n),s=_I(e._queryParams,i);return eC(s),new wo(e._repo,e._path,s,!0)}}function aC(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return mc("orderByChild","path",t,!1),new oC(t)}function lC(t,...e){let n=rt(t);for(const i of e)n=i._apply(n);return n}iT(Ot);lT(Ot);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="FIREBASE_DATABASE_EMULATOR_HOST",Za={};let uC=!1;function hC(t,e,n,i){t.repoInfo_=new ep(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function dC(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xh(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[cC]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=xh(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new si(si.OWNER):new Iw(t.name,t.options,e);OT("Invalid Firebase Database URL",o),V(o.path)||Ht("Database URL must point to the root of a Firebase Database (not including a child path).");const h=pC(a,t,u,new ww(t.name,n));return new gC(h,t)}function fC(t,e){const n=Za[e];(!n||n[t.key]!==t)&&Ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KT(t),delete n[t.key]}function pC(t,e,n,i){let s=Za[e.name];s||(s={},Za[e.name]=s);let r=s[t.toURLString()];return r&&Ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new UT(t,uC,n,i),s[t.toURLString()]=r,r}class gC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ot(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(fC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ht("Cannot call "+e+" on a deleted database.")}}function _C(t=zl(),e){const n=As(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Fv("database");i&&mC(n,...i)}return n}function mC(t,e,n,i={}){t=rt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ht("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new si(si.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Bv(i.mockUserToken,t.app.options.projectId);r=new si(o)}hC(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){ow(Ii),ze(new Be("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dC(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Re(Ju,Zu,t),Re(Ju,Zu,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yC();var vC="firebase",EC="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(vC,EC,"app");const Cc=Ff({apiKey:"AIzaSyAsGdUXWDqF7FtwpXWfQdcLgbz5siC-NIA",authDomain:"erudite-imprint-205606.firebaseapp.com",databaseURL:"https://erudite-imprint-205606-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"erudite-imprint-205606",storageBucket:"erudite-imprint-205606.appspot.com",messagingSenderId:"232670071477",appId:"1:232670071477:web:6af6757c3f495df2070cfc",measurementId:"G-6WNDLTKCD7"});function rg(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=og,ag=new cn("auth","Firebase",og());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new wi("@firebase/auth");function IC(t,...e){$r.logLevel<=Q.WARN&&$r.warn(`Auth (${Ii}): ${t}`,...e)}function gr(t,...e){$r.logLevel<=Q.ERROR&&$r.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t,...e){throw bc(t,...e)}function lg(t,...e){return bc(t,...e)}function TC(t,e,n){const i=Object.assign(Object.assign({},wC()),{[e]:n});return new cn("auth","Firebase",i).create(e,{appName:t.name})}function bc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ag.create(t,...e)}function J(t,e,...n){if(!t)throw bc(e,...n)}function Xi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function jr(t,e){t||Xi(e)}function CC(){return Dh()==="http:"||Dh()==="https:"}function Dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CC()||Nf()||"connection"in navigator)?navigator.onLine:!0}function AC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,jr(n>e,"Short delay should be less than long delay!"),this.isMobile=jl()||kf()}get(){return bC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t,e){jr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new Ms(3e4,6e4);function kC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ac(t,e,n,i,s={}){return ug(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Hl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cg.fetch()(hg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ug(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},RC),e);try{const s=new PC(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TC(t,u,c);Oh(t,u)}}catch(s){if(s instanceof yt)throw s;Oh(t,"network-request-failed",{message:String(s)})}}function hg(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?SC(t.config,s):`${t.config.apiScheme}://${s}`}class PC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(lg(this.auth,"network-request-failed")),NC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=lg(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t,e){return Ac(t,"POST","/v1/accounts:delete",e)}async function OC(t,e){return Ac(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DC(t,e=!1){const n=rt(t),i=await n.getIdToken(e),s=dg(i);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Qi(la(s.auth_time)),issuedAtTime:Qi(la(s.iat)),expirationTime:Qi(la(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function la(t){return Number(t)*1e3}function dg(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ir(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function MC(t){const e=dg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof yt&&LC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function LC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await el(t,OC(n,{idToken:i}));J(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?$C(r.providerUserInfo):[],a=BC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UC(t){const e=rt(t);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function $C(t){return t.map(e=>{var{providerId:n}=e,i=rg(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){const n=await ug(t,{},async()=>{const i=Hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=hg(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cg.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await jC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new _s;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await el(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DC(this,e)}reload(){return UC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await el(this,xC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(c=n.createdAt)!==null&&c!==void 0?c:void 0,G=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:R,isAnonymous:ne,providerData:pe,stsTokenManager:M}=n;J(B&&M,e,"internal-error");const qe=_s.fromJSON(this.name,M);J(typeof B=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),J(typeof R=="boolean",e,"internal-error"),J(typeof ne=="boolean",e,"internal-error"),qt(g,e.name),qt(v,e.name),qt(C,e.name),qt(N,e.name),qt(j,e.name),qt(G,e.name);const fn=new ri({uid:B,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:ne,photoURL:v,phoneNumber:g,tenantId:C,stsTokenManager:qe,createdAt:j,lastLoginAt:G});return pe&&Array.isArray(pe)&&(fn.providerData=pe.map(Mt=>Object.assign({},Mt))),N&&(fn._redirectEventId=N),fn}static async _fromIdTokenResponse(e,n,i=!1){const s=new _s;s.updateFromServerResponse(n);const r=new ri({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Vr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;function Cn(t){jr(t instanceof Function,"Expected a class definition");let e=Mh.get(t);return e?(jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pg.type="NONE";const Lh=pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class oi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,r),this.fullPersistenceKey=ca("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new oi(Cn(Lh),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Cn(Lh);const o=ca(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ri._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new oi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new oi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qC(e))return"Blackberry";if(GC(e))return"Webos";if(HC(e))return"Safari";if((e.includes("chrome/")||WC(e))&&!e.includes("edge/"))return"Chrome";if(KC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function VC(t=Nt()){return/firefox\//i.test(t)}function HC(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WC(t=Nt()){return/crios\//i.test(t)}function zC(t=Nt()){return/iemobile/i.test(t)}function KC(t=Nt()){return/android/i.test(t)}function qC(t=Nt()){return/blackberry/i.test(t)}function GC(t=Nt()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e=[]){let n;switch(t){case"Browser":n=Fh(Nt());break;case"Worker":n=`${Fh(Nt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e={}){return Ac(t,"GET","/v2/passwordPolicy",kC(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=6;class JC{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uh(this),this.idTokenSubscription=new Uh(this),this.beforeStateQueue=new YC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XC(this),n=new JC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function e0(t){return rt(t)}class Uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=qv(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function t0(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Ms(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ms(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ms(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ms(5e3,15e3);var Bh="@firebase/auth",$h="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function s0(t){ze(new Be("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(t)},c=new ZC(i,s,r,l);return t0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ze(new Be("auth-internal",e=>{const n=e0(e.getProvider("auth").getImmediate());return(i=>new n0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Bh,$h,i0(t)),Re(Bh,$h,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=5*60;Uv("authIdTokenMaxAge");s0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Map,a0={activated:!1,tokenObservers:[]};function mt(t){return o0.get(t)||Object.assign({},a0)}const jh={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new os,await c0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new os,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function c0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Hr=new cn("appCheck","AppCheck",u0);function _g(t){if(!mt(t).activated)throw Hr.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebase-app-check-database",d0=1,tl="firebase-app-check-store";let ir=null;function f0(){return ir||(ir=new Promise((t,e)=>{try{const n=indexedDB.open(h0,d0);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Hr.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(tl,{keyPath:"compositeKey"})}}}catch(n){e(Hr.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ir)}function p0(t,e){return g0(_0(t),e)}async function g0(t,e){const i=(await f0()).transaction(tl,"readwrite"),r=i.objectStore(tl).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Hr.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function _0(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new wi("@firebase/app-check");function Vh(t,e){return Vl()?p0(t,e).catch(n=>{nl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={error:"UNKNOWN_ERROR"};function y0(t){return ho.encodeString(JSON.stringify(t),!1)}async function il(t,e=!1){const n=t.app;_g(n);const i=mt(n);let s=i.token,r;if(s&&!ji(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(ji(l)?s=l:await Vh(n,void 0))}if(!e&&s&&ji(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await mt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?nl.warn(l.message):nl.error(l),r=l}let a;return s?r?ji(s)?a={token:s.token,internalError:r}:a=Wh(r):(a={token:s.token},i.token=s,await Vh(n,s)):a=Wh(r),o&&I0(n,a),a}async function v0(t){const e=t.app;_g(e);const{provider:n}=mt(e);{const{token:i}=await n.getToken();return{token:i}}}function E0(t,e,n,i){const{app:s}=t,r=mt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ji(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Hh(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Hh(t))}function mg(t,e){const n=mt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Hh(t){const{app:e}=t,n=mt(e);let i=n.tokenRefresher;i||(i=w0(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function w0(t){const{app:e}=t;return new l0(async()=>{const n=mt(e);let i;if(n.token?i=await il(t,!0):i=await il(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=mt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},jh.RETRIAL_MIN_WAIT,jh.RETRIAL_MAX_WAIT)}function I0(t,e){const n=mt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function ji(t){return t.expireTimeMillis-Date.now()>0}function Wh(t){return{token:y0(m0),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=mt(this.app);for(const n of e)mg(this.app,n.next);return Promise.resolve()}}function C0(t,e){return new T0(t,e)}function b0(t){return{getToken:e=>il(t,e),getLimitedUseToken:()=>v0(t),addTokenListener:e=>E0(t,"INTERNAL",e),removeTokenListener:e=>mg(t.app,e)}}const A0="@firebase/app-check",S0="0.8.0",R0="app-check",zh="app-check-internal";function N0(){ze(new Be(R0,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return C0(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(zh).initialize()})),ze(new Be(zh,t=>{const e=t.getProvider("app-check").getImmediate();return b0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Re(A0,S0)}N0();const yg=Symbol("firebaseApp");function vg(t){return wf()&&ni(yg,null)||zl(t)}const nt=()=>{};function bi(t){return!!t&&typeof t=="object"}function k0(t){return bi(t)&&t.type==="document"}function P0(t){return bi(t)&&t.type==="collection"}function x0(t){return k0(t)||P0(t)}function O0(t){return bi(t)&&t.type==="query"}function D0(t){return bi(t)&&"ref"in t}function M0(t){return bi(t)&&typeof t.bucket=="string"}const L0=Symbol.for("v-scx");function F0(){return!!ni(L0,0)}var U0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Sc=Sc||{},L=U0||self;function To(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function B0(t){return Object.prototype.hasOwnProperty.call(t,ua)&&t[ua]||(t[ua]=++$0)}var ua="closure_uid_"+(1e9*Math.random()>>>0),$0=0;function j0(t,e,n){return t.call.apply(t.bind,arguments)}function V0(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=j0:xe=V0,xe.apply(null,arguments)}function sr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function hn(){this.s=this.s,this.o=this.o}var H0=0;hn.prototype.s=!1;hn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),H0!=0)&&B0(this)};hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rc(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Kh(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(To(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Oe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var W0=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",()=>{},e),L.removeEventListener("test",()=>{},e)}catch{}return t}();function ms(t){return/^[\s\xa0]*$/.test(t)}function Co(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return Co().indexOf(t)!=-1}function Nc(t){return Nc[" "](t),t}Nc[" "]=function(){};function z0(t,e){var n=Ub;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var K0=bt("Opera"),ys=bt("Trident")||bt("MSIE"),wg=bt("Edge"),sl=wg||ys,Ig=bt("Gecko")&&!(Co().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),q0=Co().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function Tg(){var t=L.document;return t?t.documentMode:void 0}e:{var qh="",ha=function(){var t=Co();if(Ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(wg)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(q0)return/WebKit\/(\S+)/.exec(t);if(K0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ha&&(qh=ha?ha[1]:""),ys){var Gh=Tg();if(Gh!=null&&Gh>parseFloat(qh))break e}}L.document&&ys&&Tg();function vs(t,e){if(Oe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ig){e:{try{Nc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:G0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vs.$.h.call(this)}}Te(vs,Oe);var G0={2:"touch",3:"pen",4:"mouse"};vs.prototype.h=function(){vs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fs="closure_listenable_"+(1e6*Math.random()|0),Y0=0;function X0(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++Y0,this.fa=this.ia=!1}function bo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kc(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Q0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Cg(t){const e={};for(const n in t)e[n]=t[n];return e}const Yh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bg(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Yh.length;r++)n=Yh[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ao(t){this.src=t,this.g={},this.h=0}Ao.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ol(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new X0(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function rl(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Eg(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(bo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ol(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Pc="closure_lm_"+(1e6*Math.random()|0),da={};function Ag(t,e,n,i,s){if(i&&i.once)return Rg(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ag(t,e[r],n,i,s);return null}return n=Dc(n),t&&t[Fs]?t.O(e,n,Ls(i)?!!i.capture:!!i,s):Sg(t,e,n,!1,i,s)}function Sg(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ls(s)?!!s.capture:!!s,a=Oc(t);if(a||(t[Pc]=a=new Ao(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=J0(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)W0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(kg(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function J0(){function t(n){return e.call(t.src,t.listener,n)}const e=Z0;return t}function Rg(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rg(t,e[r],n,i,s);return null}return n=Dc(n),t&&t[Fs]?t.P(e,n,Ls(i)?!!i.capture:!!i,s):Sg(t,e,n,!0,i,s)}function Ng(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ng(t,e[r],n,i,s);else i=Ls(i)?!!i.capture:!!i,n=Dc(n),t&&t[Fs]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ol(r,n,i,s),-1<n&&(bo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Oc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ol(e,n,i,s)),(n=-1<t?e[t]:null)&&xc(n))}function xc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fs])rl(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(kg(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Oc(e))?(rl(n,t),n.h==0&&(n.src=null,e[Pc]=null)):bo(t)}}}function kg(t){return t in da?da[t]:da[t]="on"+t}function Z0(t,e){if(t.fa)t=!0;else{e=new vs(e,this);var n=t.listener,i=t.la||t.src;t.ia&&xc(t),t=n.call(i,e)}return t}function Oc(t){return t=t[Pc],t instanceof Ao?t:null}var fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(t){return typeof t=="function"?t:(t[fa]||(t[fa]=function(e){return t.handleEvent(e)}),t[fa])}function Ie(){hn.call(this),this.i=new Ao(this),this.S=this,this.J=null}Te(Ie,hn);Ie.prototype[Fs]=!0;Ie.prototype.removeEventListener=function(t,e,n,i){Ng(this,t,e,n,i)};function Ne(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Oe(e,t);else if(e instanceof Oe)e.target=e.target||t;else{var s=e;e=new Oe(i,t),bg(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=rr(o,i,!0,e)&&s}if(o=e.g=t,s=rr(o,i,!0,e)&&s,s=rr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=rr(o,i,!1,e)&&s}Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)bo(n[i]);delete t.g[e],t.h--}}this.J=null};Ie.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ie.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function rr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rl(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Mc=L.JSON.stringify;class eb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function tb(){var t=Lc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nb{constructor(){this.h=this.g=null}add(e,n){const i=Pg.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Pg=new eb(()=>new ib,t=>t.reset());class ib{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function rb(t){L.setTimeout(()=>{throw t},0)}let Es,ws=!1,Lc=new nb,xg=()=>{const t=L.Promise.resolve(void 0);Es=()=>{t.then(ob)}};var ob=()=>{for(var t;t=tb();){try{t.h.call(t.g)}catch(n){rb(n)}var e=Pg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ws=!1};function So(t,e){Ie.call(this),this.h=t||1,this.g=e||L,this.j=xe(this.qb,this),this.l=Date.now()}Te(So,Ie);A=So.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ne(this,"tick"),this.ga&&(Fc(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){So.$.N.call(this),Fc(this),delete this.g};function Uc(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Og(t){t.g=Uc(()=>{t.g=null,t.i&&(t.i=!1,Og(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ab extends hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Og(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(t){hn.call(this),this.h=t,this.g={}}Te(Is,hn);var Xh=[];function Dg(t,e,n,i){Array.isArray(n)||(n&&(Xh[0]=n.toString()),n=Xh);for(var s=0;s<n.length;s++){var r=Ag(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Mg(t){kc(t.g,function(e,n){this.g.hasOwnProperty(n)&&xc(e)},t),t.g={}}Is.prototype.N=function(){Is.$.N.call(this),Mg(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ro(){this.g=!0}Ro.prototype.Ea=function(){this.g=!1};function lb(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cb(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Xn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hb(t,n)+(i?" "+i:"")})}function ub(t,e){t.info(function(){return"TIMEOUT: "+e})}Ro.prototype.info=function(){};function hb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mc(n)}catch{return e}}var Ai={},Qh=null;function Bc(){return Qh=Qh||new Ie}Ai.Ta="serverreachability";function Lg(t){Oe.call(this,Ai.Ta,t)}Te(Lg,Oe);function Ts(t){const e=Bc();Ne(e,new Lg(e))}Ai.STAT_EVENT="statevent";function Fg(t,e){Oe.call(this,Ai.STAT_EVENT,t),this.stat=e}Te(Fg,Oe);function Ue(t){const e=Bc();Ne(e,new Fg(e,t))}Ai.Ua="timingevent";function Ug(t,e){Oe.call(this,Ai.Ua,t),this.size=e}Te(Ug,Oe);function Us(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var $c={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},db={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jc(){}jc.prototype.h=null;function Jh(t){return t.h||(t.h=t.i())}function fb(){}var Bs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vc(){Oe.call(this,"d")}Te(Vc,Oe);function Hc(){Oe.call(this,"c")}Te(Hc,Oe);var al;function No(){}Te(No,jc);No.prototype.g=function(){return new XMLHttpRequest};No.prototype.i=function(){return{}};al=new No;function $s(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Is(this),this.P=pb,t=sl?125:void 0,this.V=new So(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Bg}function Bg(){this.i=null,this.g="",this.h=!1}var pb=45e3,ll={},Wr={};A=$s.prototype;A.setTimeout=function(t){this.P=t};function cl(t,e,n){t.L=1,t.v=Po(Wt(e)),t.s=n,t.S=!0,$g(t,null)}function $g(t,e){t.G=Date.now(),js(t),t.A=Wt(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Gg(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Bg,t.g=g_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ab(xe(t.Pa,t,t.g),t.O)),Dg(t.U,t.g,"readystatechange",t.nb),e=t.I?Cg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ts(),lb(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&At(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const u=At(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||sl||this.g&&(this.h.h||this.g.ja()||nd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ts(3):Ts(2)),ko(this);var n=this.g.da();this.ca=n;t:if(jg(this)){var i=nd(this.g);t="";var s=i.length,r=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Ji(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cb(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ms(a)){var c=a;break t}}c=null}if(n=c)Xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,n);else{this.i=!1,this.o=3,Ue(12),bn(this),Ji(this);break e}}this.S?(Vg(this,u,o),sl&&this.i&&u==3&&(Dg(this.U,this.V,"tick",this.mb),this.V.start())):(Xn(this.j,this.m,o,null),ul(this,o)),u==4&&bn(this),this.i&&!this.J&&(u==4?h_(this.l,this):(this.i=!1,js(this)))}else Mb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),bn(this),Ji(this)}}}catch{}finally{}};function jg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Vg(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=gb(t,n),s==Wr){e==4&&(t.o=4,Ue(14),i=!1),Xn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ll){t.o=4,Ue(15),Xn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Xn(t.j,t.m,s,null),ul(t,s);jg(t)&&s!=Wr&&s!=ll&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ue(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yc(e),e.M=!0,Ue(11))):(Xn(t.j,t.m,n,"[Invalid Chunked Response]"),bn(t),Ji(t))}A.mb=function(){if(this.g){var t=At(this.g),e=this.g.ja();this.C<e.length&&(ko(this),Vg(this,t,e),this.i&&t!=4&&js(this))}};function gb(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Wr:(n=Number(e.substring(n,i)),isNaN(n)?ll:(i+=1,i+n>e.length?Wr:(e=e.slice(i,i+n),t.C=i+n,e)))}A.cancel=function(){this.J=!0,bn(this)};function js(t){t.Y=Date.now()+t.P,Hg(t,t.P)}function Hg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Us(xe(t.lb,t),e)}function ko(t){t.B&&(L.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ub(this.j,this.A),this.L!=2&&(Ts(),Ue(17)),bn(this),this.o=2,Ji(this)):Hg(this,this.Y-t)};function Ji(t){t.l.H==0||t.J||h_(t.l,t)}function bn(t){ko(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Fc(t.V),Mg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hl(n.i,t))){if(!t.K&&hl(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qr(n),Mo(n);else break e;Gc(n),Ue(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Us(xe(n.ib,n),6e3));if(1>=Qg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else An(n,11)}else if((t.K||n.g==t)&&qr(n),!ms(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=i.i;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Wc(r,r.h),r.h=null))}if(i.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,ae(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=p_(i,i.J?i.pa:null,i.Y),o.K){Jg(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(ko(a),js(a)),i.g=o}else c_(i);0<n.j.length&&Lo(n)}else c[0]!="stop"&&c[0]!="close"||An(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?An(n,7):qc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ts(4)}catch{}}function _b(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(To(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function mb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(To(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Wg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(To(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mb(t),i=_b(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function xn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xn){this.h=t.h,zr(this,t.j),this.s=t.s,this.g=t.g,Kr(this,t.m),this.l=t.l;var e=t.i,n=new Cs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Zh(this,n),this.o=t.o}else t&&(e=String(t).match(zg))?(this.h=!1,zr(this,e[1]||"",!0),this.s=Vi(e[2]||""),this.g=Vi(e[3]||"",!0),Kr(this,e[4]),this.l=Vi(e[5]||"",!0),Zh(this,e[6]||"",!0),this.o=Vi(e[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hi(e,ed,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hi(e,ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Hi(n,n.charAt(0)=="/"?wb:Eb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hi(n,Tb)),t.join("")};function Wt(t){return new xn(t)}function zr(t,e,n){t.j=n?Vi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zh(t,e,n){e instanceof Cs?(t.i=e,Cb(t.i,t.h)):(n||(e=Hi(e,Ib)),t.i=new Cs(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Po(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ed=/[#\/\?@]/g,Eb=/[#\?:]/g,wb=/[#\?]/g,Ib=/[#\?@]/g,Tb=/#/g;function Cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new Map,t.h=0,t.i&&yb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Cs.prototype;A.add=function(t,e){dn(this),this.i=null,t=Si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kg(t,e){dn(t),e=Si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qg(t,e){return dn(t),e=Si(t,e),t.g.has(e)}A.forEach=function(t,e){dn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};A.ta=function(){dn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};A.Z=function(t){dn(this);let e=[];if(typeof t=="string")qg(this,t)&&(e=e.concat(this.g.get(Si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return dn(this),this.i=null,t=Si(this,t),qg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gg(t,e,n){Kg(t,e),0<n.length&&(t.i=null,t.g.set(Si(t,e),Rc(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Cb(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Kg(this,i),Gg(this,s,n))},t)),t.j=e}var bb=class{constructor(t,e){this.g=t,this.map=e}};function Yg(t){this.l=t||Ab,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ab=10;function Xg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qg(t){return t.h?1:t.g?t.g.size:0}function hl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wc(t,e){t.g?t.g.add(e):t.h=e}function Jg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yg.prototype.cancel=function(){if(this.i=Zg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rc(t.i)}var Sb=class{stringify(t){return L.JSON.stringify(t,void 0)}parse(t){return L.JSON.parse(t,void 0)}};function Rb(){this.g=new Sb}function Nb(t,e,n){const i=n||"";try{Wg(t,function(s,r){let o=s;Ls(s)&&(o=Mc(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function kb(t,e){const n=new Ro;if(L.Image){const i=new Image;i.onload=sr(or,n,i,"TestLoadImage: loaded",!0,e),i.onerror=sr(or,n,i,"TestLoadImage: error",!1,e),i.onabort=sr(or,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=sr(or,n,i,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function or(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function xo(t){this.l=t.ec||null,this.j=t.ob||!1}Te(xo,jc);xo.prototype.g=function(){return new Oo(this.l,this.j)};xo.prototype.i=function(t){return function(){return t}}({});function Oo(t,e){Ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=zc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(Oo,Ie);var zc=0;A=Oo.prototype;A.open=function(t,e){if(this.readyState!=zc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=zc};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;e_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function e_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vs(this):bs(this),this.readyState==3&&e_(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,Vs(this))};A.Ya=function(t){this.g&&(this.response=t,Vs(this))};A.ka=function(){this.g&&Vs(this)};function Vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pb=L.JSON.parse;function de(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=t_,this.L=this.M=!1}Te(de,Ie);var t_="",xb=/^https?$/i,Ob=["POST","PUT"];A=de.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():al.g(),this.C=this.u?Jh(this.u):Jh(al),this.g.onreadystatechange=xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){td(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=L.FormData&&t instanceof L.FormData,!(0<=Eg(Ob,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{s_(this),0<this.B&&((this.L=Db(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.ua,this)):this.A=Uc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){td(this,r)}};function Db(t){return ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof Sc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,n_(t),Do(t)}function n_(t){t.F||(t.F=!0,Ne(t,"complete"),Ne(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),Do(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Do(this,!0)),de.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?i_(this):this.kb())};A.kb=function(){i_(this)};function i_(t){if(t.h&&typeof Sc<"u"&&(!t.C[1]||At(t)!=4||t.da()!=2)){if(t.v&&At(t)==4)Uc(t.La,0,t);else if(Ne(t,"readystatechange"),At(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(zg)[1]||null;!s&&L.self&&L.self.location&&(s=L.self.location.protocol.slice(0,-1)),i=!xb.test(s?s.toLowerCase():"")}n=i}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var r=2<At(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",n_(t)}}finally{Do(t)}}}}function Do(t,e){if(t.g){s_(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=i}catch{}}}function s_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function At(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pb(e)}};function nd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case t_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Mb(t){const e={};t=(t.g&&2<=At(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(ms(t[i]))continue;var n=sb(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}Q0(e,function(i){return i.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function r_(t){let e="";return kc(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Kc(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=r_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function o_(t){this.Ga=0,this.j=[],this.l=new Ro,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Li("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Li("baseRetryDelayMs",5e3,t),this.hb=Li("retryDelaySeedMs",1e4,t),this.eb=Li("forwardChannelMaxRetries",2,t),this.xa=Li("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Yg(t&&t.concurrentRequestLimit),this.Ja=new Rb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=o_.prototype;A.ra=8;A.H=1;function qc(t){if(a_(t),t.H==3){var e=t.W++,n=Wt(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Hs(t,n),e=new $s(t,t.l,e),e.L=2,e.v=Po(Wt(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=g_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),js(e)}f_(t)}function Mo(t){t.g&&(Yc(t),t.g.cancel(),t.g=null)}function a_(t){Mo(t),t.u&&(L.clearTimeout(t.u),t.u=null),qr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Lo(t){if(!Xg(t.i)&&!t.m){t.m=!0;var e=t.Na;Es||xg(),ws||(Es(),ws=!0),Lc.add(e,t),t.C=0}}function Lb(t,e){return Qg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Us(xe(t.Na,t,e),d_(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new $s(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Cg(r),bg(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=l_(this,s,e),n=Wt(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Hs(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(r_(r)))+"&"+e:this.o&&Kc(n,this.o,r)),Wc(this.i,s),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),s.aa=!0,cl(s,n,null)):cl(s,n,e),this.H=2}}else this.H==3&&(t?id(this,t):this.j.length==0||Xg(this.i)||id(this))};function id(t,e){var n;e?n=e.m:n=t.W++;const i=Wt(t.I);ae(i,"SID",t.K),ae(i,"RID",n),ae(i,"AID",t.V),Hs(t,i),t.o&&t.s&&Kc(i,t.o,t.s),n=new $s(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=l_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wc(t.i,n),cl(n,i,e)}function Hs(t,e){t.na&&kc(t.na,function(n,i){ae(e,i,n)}),t.h&&Wg({},function(n,i){ae(e,i,n)})}function l_(t,e,n){n=Math.min(t.j.length,n);var i=t.h?xe(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{Nb(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function c_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Es||xg(),ws||(Es(),ws=!0),Lc.add(e,t),t.A=0}}function Gc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Us(xe(t.Ma,t),d_(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,u_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Us(xe(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ue(10),Mo(this),u_(this))};function Yc(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function u_(t){t.g=new $s(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Wt(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Hs(t,e),t.o&&t.s&&Kc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Po(Wt(e)),n.s=null,n.S=!0,$g(n,t)}A.ib=function(){this.v!=null&&(this.v=null,Mo(this),Gc(this),Ue(19))};function qr(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function h_(t,e){var n=null;if(t.g==e){qr(t),Yc(t),t.g=null;var i=2}else if(hl(t.i,e))n=e.F,Jg(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Bc(),Ne(i,new Ug(i,n)),Lo(t)}else c_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&Lb(t,e)||i==2&&Gc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:An(t,5);break;case 4:An(t,10);break;case 3:An(t,6);break;default:An(t,2)}}}function d_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function An(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=xe(t.pb,t);n||(n=new xn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||zr(n,"https"),Po(n)),kb(n.toString(),i)}else Ue(2);t.H=0,t.h&&t.h.za(e),f_(t),a_(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ue(2)):(this.l.info("Failed to ping google.com"),Ue(1))};function f_(t){if(t.H=0,t.ma=[],t.h){const e=Zg(t.i);(e.length!=0||t.j.length!=0)&&(Kh(t.ma,e),Kh(t.ma,t.j),t.i.i.length=0,Rc(t.j),t.j.length=0),t.h.ya()}}function p_(t,e,n){var i=n instanceof xn?Wt(n):new xn(n);if(i.g!="")e&&(i.g=e+"."+i.g),Kr(i,i.m);else{var s=L.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new xn(null);i&&zr(r,i),e&&(r.g=e),s&&Kr(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&ae(i,n,e),ae(i,"VER",t.ra),Hs(t,i),i}function g_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new de(new xo({ob:!0})):new de(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function __(){}A=__.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function st(t,e){Ie.call(this),this.g=new o_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ms(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ms(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ri(this)}Te(st,Ie);st.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ue(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=p_(t,null,t.Y),Lo(t)};st.prototype.close=function(){qc(this.g)};st.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mc(t),t=n);e.j.push(new bb(e.fb++,t)),e.H==3&&Lo(e)};st.prototype.N=function(){this.g.h=null,delete this.j,qc(this.g),delete this.g,st.$.N.call(this)};function m_(t){Vc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Te(m_,Vc);function y_(){Hc.call(this),this.status=1}Te(y_,Hc);function Ri(t){this.g=t}Te(Ri,__);Ri.prototype.Ba=function(){Ne(this.g,"a")};Ri.prototype.Aa=function(t){Ne(this.g,new m_(t))};Ri.prototype.za=function(t){Ne(this.g,new y_)};Ri.prototype.ya=function(){Ne(this.g,"b")};function Fb(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Te(kt,Fb);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pa(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)pa(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){pa(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){pa(this,i),s=0;break}}this.h=s,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Z(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Ub={};function Xc(t){return-128<=t&&128>t?z0(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function St(t){if(isNaN(t)||!isFinite(t))return ai;if(0>t)return be(St(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=dl;return new Z(e,0)}function v_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(v_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=St(Math.pow(e,8)),i=ai,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=St(Math.pow(e,r)),i=i.R(r).add(St(o))):(i=i.R(n),i=i.add(St(o)))}return i}var dl=4294967296,ai=Xc(0),fl=Xc(1),sd=Xc(16777216);A=Z.prototype;A.ea=function(){if(it(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:dl+i)*e,e*=dl}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($t(this))return"0";if(it(this))return"-"+be(this).toString(t);for(var e=St(Math.pow(t,6)),n=this,i="";;){var s=Yr(n,e).g;n=Gr(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,$t(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $t(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function it(t){return t.h==-1}A.X=function(t){return t=Gr(this,t),it(t)?-1:$t(t)?0:1};function be(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Z(n,~t.h).add(fl)}A.abs=function(){return it(this)?be(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Gr(t,e){return t.add(be(e))}A.R=function(t){if($t(this)||$t(t))return ai;if(it(this))return it(t)?be(this).R(be(t)):be(be(this).R(t));if(it(t))return be(this.R(be(t)));if(0>this.X(sd)&&0>t.X(sd))return St(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,ar(n,2*i+2*s),n[2*i+2*s+1]+=r*l,ar(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,ar(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,ar(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Z(n,0)};function ar(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fi(t,e){this.g=t,this.h=e}function Yr(t,e){if($t(e))throw Error("division by zero");if($t(t))return new Fi(ai,ai);if(it(t))return e=Yr(be(t),e),new Fi(be(e.g),be(e.h));if(it(e))return e=Yr(t,be(e)),new Fi(be(e.g),e.h);if(30<t.g.length){if(it(t)||it(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fl,i=e;0>=i.X(t);)n=rd(n),i=rd(i);var s=Kn(n,1),r=Kn(i,1);for(i=Kn(i,2),n=Kn(n,2);!$t(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Kn(i,1),n=Kn(n,1)}return e=Gr(t,s.R(e)),new Fi(s,e)}for(s=ai;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=St(n),o=r.R(e);it(o)||0<o.X(t);)n-=i,r=St(n),o=r.R(e);$t(r)&&(r=fl),s=s.add(r),t=Gr(t,o)}return new Fi(s,t)}A.gb=function(t){return Yr(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Z(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Z(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Z(n,this.h^t.h)};function rd(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Z(n,t.h)}function Kn(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Z(s,t.h)}st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;$c.NO_ERROR=0;$c.TIMEOUT=8;$c.HTTP_ERROR=6;db.COMPLETE="complete";fb.EventType=Bs;Bs.OPEN="a";Bs.CLOSE="b";Bs.ERROR="c";Bs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=St;Z.fromString=v_;var Bb=Z;const od="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new wi("@firebase/firestore");function Ze(t,...e){if(Xr.logLevel<=Q.DEBUG){const n=e.map(E_);Xr.debug(`Firestore (${Fo}): ${t}`,...n)}}function Qc(t,...e){if(Xr.logLevel<=Q.ERROR){const n=e.map(E_);Xr.error(`Firestore (${Fo}): ${t}`,...n)}}function E_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+t;throw Qc(e),new Error(e)}function pl(t,e){t||w_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Je extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class Vb{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new li;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new li,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Ze("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ze("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Ze("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pl(typeof i.accessToken=="string"),new $b(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pl(e===null||typeof e=="string"),new je(e)}}class Hb{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wb{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Hb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&Ze("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Ze("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Ze("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Ze("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pl(typeof n.token=="string"),this.R=n.token,new zb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=qb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function I_(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ad,K;(K=ad||(ad={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bb([4294967295,4294967295],0);function ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-i);s>0&&Ze("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Jc(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Je(Qe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qb(t,e){if(Qc("AsyncQueue",`${e}: ${t}`),I_(t))return new Je(Qe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=Gb.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Ze("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Ze("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Je(Qe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Qb(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;function Zb(t,e,n,i){if(e===!0&&i===!0)throw new Je(Qe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Je(Qe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Je(Qe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=T_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Je(Qe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Je(Qe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Je(Qe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eA{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Je(Qe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Je(Qe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cd(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new jb;switch(i.type){case"firstParty":return new Wb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Je(Qe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=ld.get(n);i&&(Ze("ComponentProvider","Removing Datastore"),ld.delete(n),i.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new Xb(this,"async_queue_retry"),this.su=()=>{const n=ga();n&&Ze("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ga();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=ga();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new li;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!I_(e))throw e;Ze("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(i=>{this.tu=i,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Qc("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.nu=!1,i))));return this.Ya=n,n}enqueueAfterDelay(e,n,i){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=Jc.createAndSchedule(this,e,n,i,r=>this.uu(r));return this.eu.push(s),s}ou(){this.tu&&w_()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class nA extends eA{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new tA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iA(this),this._firestoreClient.terminate()}}function iA(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new Yb(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,T_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Jb(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Fo=s})(Ii),ze(new Be("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new nA(new Vb(i.getProvider("auth-internal")),new Kb(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Je(Qe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Re(od,"4.3.0",e),Re(od,"4.3.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firebasestorage.googleapis.com",sA="storageBucket",rA=2*60*1e3,oA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends yt{constructor(e,n,i=0){super(_a(e),`Firebase Storage: ${n} (${_a(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function _a(t){return"storage/"+t}function aA(){const t="An unknown error occurred, please check the error payload for server response.";return new Dt(Pt.UNKNOWN,t)}function lA(){return new Dt(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cA(){return new Dt(Pt.CANCELED,"User canceled the upload/download.")}function uA(t){return new Dt(Pt.INVALID_URL,"Invalid URL '"+t+"'.")}function hA(t){return new Dt(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ud(t){return new Dt(Pt.INVALID_ARGUMENT,t)}function b_(){return new Dt(Pt.APP_DELETED,"The Firebase app was deleted.")}function dA(t){return new Dt(Pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(i.path==="")return i;throw hA(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),v={bucket:1,path:3},C=n===C_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",j=new RegExp(`^https?://${C}/${s}/${N}`,"i"),B=[{regex:a,indices:l,postModify:r},{regex:g,indices:v,postModify:c},{regex:j,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<B.length;R++){const ne=B[R],pe=ne.regex.exec(e);if(pe){const M=pe[ne.indices.bucket];let qe=pe[ne.indices.path];qe||(qe=""),i=new ft(M,qe),ne.postModify(i);break}}if(i==null)throw uA(e);return i}}class fA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...N){c||(c=!0,e.apply(null,N))}function h(N){s=setTimeout(()=>{s=null,t(g,l())},N)}function d(){r&&clearTimeout(r)}function g(N,...j){if(c){d();return}if(N){d(),u.call(null,N,...j);return}if(l()||o){d(),u.call(null,N,...j);return}i<64&&(i*=2);let B;a===1?(a=2,B=0):B=(i+Math.random())*1e3,h(B)}let v=!1;function C(N){v||(v=!0,d(),!c&&(s!==null?(N||(a=2),clearTimeout(s),h(0)):N||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function gA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){return t!==void 0}function hd(t,e,n,i){if(i<e)throw ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw ud(`Invalid value for '${t}'. Expected ${n} or less.`)}function mA(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new lr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Jr.NO_ERROR,l=r.getStatus();if(!a||yA(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Jr.ABORT;i(!1,new lr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new lr(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_A(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=aA();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?b_():cA();o(l)}else{const l=lA();o(l)}};this.canceled_?n(!1,new lr(!1,null,!0)):this.backoffId_=pA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function EA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CA(t,e,n,i,s,r,o=!0){const a=mA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return IA(c,e),EA(c,n),wA(c,r),TA(c,i),new vA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return AA(this._location.path)}get storage(){return this._service}get parent(){const e=bA(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dA(e)}}function dd(t,e){const n=e==null?void 0:e[sA];return n==null?null:ft.makeFromBucketSpec(n,t)}class SA{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=C_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rA,this._maxUploadRetryTime=oA,this._requests=new Set,s!=null?this._bucket=ft.makeFromBucketSpec(s,this._host):this._bucket=dd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=dd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new fA(b_());{const o=CA(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const fd="@firebase/storage",pd="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="storage";function NA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new SA(n,i,s,e,Ii)}function kA(){ze(new Be(RA,NA,"PUBLIC").setMultipleInstances(!0)),Re(fd,pd,""),Re(fd,pd,"esm2017")}kA();const ma=new WeakMap;function A_(t,e){return ma.has(e)||ma.set(e,t||{f:{},r:{},s:{},u:{}}),ma.get(e)}function PA(t,e,n,i){if(!t)return n;const[s,r]=S_(t);if(!s)return n;const o=A_(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function xA(t,e,n,i){if(!t)return;const[s,r]=S_(t);if(!s)return;const o=A_(void 0,i)[s],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(nt),a}function S_(t){return x0(t)||O0(t)?["f",t.path]:D0(t)?["r",t.toString()]:M0(t)?["s",t.toString()]:[]}const ya=new WeakMap;function OA(t,e,n){const i=vg();ya.has(i)||ya.set(i,new Map);const s=ya.get(i),r=xA(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):nt}function DA(t){if(!t.exists())return null;const e=t.val();return bi(e)?Object.defineProperty(e,"id",{value:t.key}):{$value:e,id:t.key}}function Ui(t,e){for(let n=0;n<t.length;n++)if(t[n].id===e)return n;return-1}const Zc={reset:!1,serialize:DA,wait:!0};function MA(t,e,n,i,s){const r=Object.assign({},Zc,s);let o=nt;function a(l){const c=r.serialize(l);t.value=c,n(c)}return r.once?Ic(e).then(a).catch(i):o=sg(e,a,i),l=>{if(o(),l){const c=typeof l=="function"?l():null;t.value=c}}}function LA(t,e,n,i,s){const r=Object.assign({},Zc,s);let o=r.wait?[]:t;r.wait||(t.value=[]);let a=nt,l=nt,c=nt,u=nt,h=nt;return r.once?Ic(e).then(d=>{const g=[];d.forEach(v=>{g.push(r.serialize(v))}),n(t.value=g)}).catch(i):(a=tC(e,(d,g)=>{const v=En(o),C=g?Ui(v,g)+1:0;v.splice(C,0,r.serialize(d))},i),c=sC(e,d=>{const g=En(o);g.splice(Ui(g,d.key),1)},i),l=nC(e,d=>{const g=En(o);g.splice(Ui(g,d.key),1,r.serialize(d))},i),u=iC(e,(d,g)=>{const v=En(o),C=Ui(v,d.key),N=v.splice(C,1)[0],j=g?Ui(v,g)+1:0;v.splice(j,0,N)},i),h=sg(e,()=>{const d=En(o);r.wait&&(t.value=d,o=t),n(d),h()},i)),d=>{if(h(),a(),c(),l(),u(),d){const g=typeof d=="function"?d():[];t.value=g}}}function R_(t,e={},n=!1){let i=nt;const s=Object.assign({},Zc,e),r=En(t),o=s.target||ei();F0()&&(s.once=!0);const l=PA(r,s.ssrKey,o.value,vg());o.value=l;let u=!(n?(l||[]).length>0:l!==void 0);const h=ei(),d=ei(!1),g=zm(),v=Od();let C=nt;function N(){const B=En(t),R=new Promise((ne,pe)=>{if(i(s.reset),!B)return i=nt,ne(null);d.value=u,u=!0,Array.isArray(o.value)?i=LA(o,B,ne,pe,s):i=MA(o,B,ne,pe,s)}).catch(ne=>{throw g.value===R&&(h.value=ne),ne}).finally(()=>{g.value===R&&(d.value=!1)});g.value=R}let j=nt;Se(t)&&(j=hr(t,N)),N(),r&&(C=OA(g.value,r,s.ssrKey)),v&&(mm(G),wf()&&uf(()=>g.value));function G(B=s.reset){j(),C(),i(B)}return Object.defineProperties(o,{data:{get:()=>o},error:{get:()=>h},pending:{get:()=>d},promise:{get:()=>g},stop:{get:()=>G}})}function cr(t,e){const n=ei([]);return R_(t,{target:n,...e},!0)}function FA(t,e){const n=ei();return R_(t,{target:n,...e})}function UA(t,{firebaseApp:e,modules:n=[]}){t.provide(yg,e);for(const i of n)i(e,t)}const BA=Ky('<header class="l-header" id="header"><nav class="nav bd-container"><a href="#" class="nav__logo">Long Thay</a><div class="nav__menu" id="nav-menu"><ul class="nav__list"><li class="nav__item"><a href="#home" class="nav__link active-link"><i class="bx bx-home nav__icon"></i>Home </a></li><li class="nav__item"><a href="#profile" class="nav__link"><i class="bx bx-user nav__icon"></i>Profile </a></li><li class="nav__item"><a href="#skills" class="nav__link"><i class="bx bx-receipt nav__icon"></i>Skills </a></li><li class="nav__item"><a href="#experience" class="nav__link"><i class="bx bx-briefcase-alt nav__icon"></i>Experience </a></li><li class="nav__item"><a href="#education" class="nav__link"><i class="bx bx-certification nav__icon"></i>Education </a></li></ul></div><div class="nav__toggle" id="nav-toggle"><i class="bx bx-grid-alt"></i></div></nav></header>',1),$A={class:"l-main bd-container"},jA={class:"resume",id:"area-cv"},VA={class:"resume__left"},HA={class:"home",id:"home"},WA={class:"home__container section bd-grid"},zA={class:"home__data bd-grid"},KA=P("img",{src:Sv,alt:"",class:"home__img"},null,-1),qA={class:"home__title"},GA={class:"home__profession"},YA=P("div",null,[P("a",{download:"",href:"/src/assets/pdf/longthaycv.pdf",class:"home__button-movil"},"Download CV")],-1),XA={class:"home__address bd-grid"},QA={class:"home__information"},JA=P("i",{class:"bx bx-map home__icon"},null,-1),ZA={class:"home__information"},eS=P("i",{class:"bx bx-envelope home__icon"},null,-1),tS={class:"home__information"},nS=P("i",{class:"bx bx-phone home__icon"},null,-1),iS=P("i",{class:"bx bx-moon change-theme",title:"Theme",id:"theme-button"},null,-1),sS=P("i",{class:"bx bx-download generate-pdf",title:"Generate PDF",id:"resume-button"},null,-1),rS={class:"social section"},oS=P("h2",{class:"section-title"},"SOCIAL",-1),aS={class:"social__container bd-grid"},lS=["href"],cS=P("i",{class:"bx bxl-linkedin-square social__icon"},null,-1),uS=["href"],hS=P("i",{class:"bx bxl-facebook social__icon"},null,-1),dS=["href"],fS=P("i",{class:"bx bxl-github social__icon"},null,-1),pS={class:"profile section",id:"profile"},gS=P("h2",{class:"section-title"},"Profile",-1),_S=["innerHTML"],mS={class:"skills section",id:"skills"},yS=P("h2",{class:"section-title"},"Skills",-1),vS={class:"skills__content bd-grid"},ES={class:"skills__data"},wS=P("span",{class:"skills__circle"},null,-1),IS={class:"resume__right"},TS={class:"experience section",id:"experience"},CS=P("h2",{class:"section-title"},"Experience",-1),bS={class:"experience__container bd-grid"},AS={class:"experience__time"},SS=P("span",{class:"experience__rounder"},null,-1),RS={key:0,class:"experience__line"},NS={class:"experience__data bd-grid"},kS={class:"experience__title"},PS={class:"experience__company"},xS={class:"experience__description"},OS={class:"education section",id:"education"},DS=P("h2",{class:"section-title"},"Education",-1),MS={class:"education__container bd-grid"},LS={class:"education__time"},FS=P("span",{class:"education__rounder"},null,-1),US={key:0,class:"education__line"},BS={class:"education__data bd-grid"},$S={class:"education__title"},jS={class:"education__studies"},VS={class:"education__year"},HS=P("a",{href:"#",class:"scrolltop",id:"scroll-top"},[P("i",{class:"bx bx-up-arrow-alt scrolltop__icon"})],-1),WS=hy({__name:"App",setup(t){const e=_C(Cc),n=cr(zn(e,"personal")),i=cr(zn(e,"social")),s=FA(zn(e,"profile")),r=cr(zn(e,"skills"));let o=ei([]);const a=lC(zn(e,"experience"),aC("_id"));Ic(a).then(c=>{c.forEach(function(u){o.value.push(u.val())})});const l=cr(zn(e,"education"));return lf(()=>{let c=document.createElement("script");c.setAttribute("src","/src/assets/js/html2pdf.bundle.min.js"),document.head.appendChild(c);let u=document.createElement("script");u.setAttribute("src","/src/assets/js/main.js"),document.head.appendChild(u)}),(c,u)=>{var h,d,g,v,C,N,j,G,B,R,ne,pe;return It(),Ft(Xe,null,[BA,P("main",$A,[P("div",jA,[P("div",VA,[P("section",HA,[P("div",WA,[P("div",zA,[KA,P("h1",qA,Me((h=ge(n).find(M=>M.id==="name"))==null?void 0:h.$value),1),P("h3",GA,Me((d=ge(n).find(M=>M.id==="position"))==null?void 0:d.$value),1),YA]),P("div",XA,[P("span",QA,[JA,Gt(" "+Me((g=ge(n).find(M=>M.id==="address"))==null?void 0:g.$value),1)]),P("span",ZA,[eS,Gt(" "+Me((v=ge(n).find(M=>M.id==="email"))==null?void 0:v.$value),1)]),P("span",tS,[nS,Gt(" "+Me((C=ge(n).find(M=>M.id==="phone"))==null?void 0:C.$value),1)])])]),iS,sS]),P("section",rS,[oS,P("div",aS,[P("a",{href:(N=ge(i).find(M=>M.id==="linkedin"))==null?void 0:N.link,target:"_blank",class:"social_link"},[cS,Gt(" "+Me((j=ge(i).find(M=>M.id==="linkedin"))==null?void 0:j.alias),1)],8,lS),P("a",{href:(G=ge(i).find(M=>M.id==="facebook"))==null?void 0:G.link,target:"_blank",class:"social_link"},[hS,Gt(" "+Me((B=ge(i).find(M=>M.id==="facebook"))==null?void 0:B.alias),1)],8,uS),P("a",{href:(R=ge(i).find(M=>M.id==="github"))==null?void 0:R.link,target:"_blank",class:"social_link"},[fS,Gt(" "+Me((ne=ge(i).find(M=>M.id==="github"))==null?void 0:ne.alias),1)],8,dS)])]),P("section",pS,[gS,P("p",{class:"profile__description",innerHTML:(pe=ge(s))==null?void 0:pe.$value},null,8,_S)]),P("section",mS,[yS,P("div",vS,[P("ul",ES,[(It(!0),Ft(Xe,null,Ko(ge(r),M=>(It(),Ft("li",{class:"skills__name",key:M.id},[wS,Gt(" "+Me(M.$value),1)]))),128))])])])]),P("div",IS,[P("section",TS,[CS,P("div",bS,[(It(!0),Ft(Xe,null,Ko(ge(o),M=>(It(),Ft("div",{class:"experience__content",key:M._id},[P("div",AS,[SS,+M._id<ge(o).length?(It(),Ft("span",RS)):Pu("",!0)]),P("div",NS,[P("h3",kS,Me(M.position),1),P("span",PS,Me(M.period),1),P("p",xS,Me(M.description),1)])]))),128))])]),P("section",OS,[DS,P("div",MS,[(It(!0),Ft(Xe,null,Ko(ge(l),M=>(It(),Ft("div",{class:"education__content",key:M.id},[P("div",LS,[FS,+M.id<ge(l).length-1?(It(),Ft("span",US)):Pu("",!0)]),P("div",BS,[P("h3",$S,Me(M.name),1),P("span",jS,Me(M.academy),1),P("span",VS,Me(M.period),1)])]))),128))])])])])]),HS],64)}}});const zS=(t,e)=>e.some(n=>t instanceof n);let gd,_d;function KS(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qS(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,gl=new WeakMap,k_=new WeakMap,va=new WeakMap,eu=new WeakMap;function GS(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(nn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N_.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function YS(t){if(gl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XS(t){_l=t(_l)}function QS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ea(this),e,...n);return k_.set(i,e.sort?e.sort():[e]),nn(i)}:qS().includes(t)?function(...e){return t.apply(Ea(this),e),nn(N_.get(this))}:function(...e){return nn(t.apply(Ea(this),e))}}function JS(t){return typeof t=="function"?QS(t):(t instanceof IDBTransaction&&YS(t),zS(t,KS())?new Proxy(t,_l):t)}function nn(t){if(t instanceof IDBRequest)return GS(t);if(va.has(t))return va.get(t);const e=JS(t);return e!==t&&(va.set(t,e),eu.set(e,t)),e}const Ea=t=>eu.get(t);function ZS(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=nn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],wa=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=tR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||eR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return wa.set(e,r),r}XS(t=>({...t,get:(e,n,i)=>md(e,n)||t.get(e,n,i),has:(e,n)=>!!md(e,n)||t.has(e,n)}));const P_="@firebase/installations",tu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=1e4,O_=`w:${tu}`,D_="FIS_v2",nR="https://firebaseinstallations.googleapis.com/v1",iR=60*60*1e3,sR="installations",rR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Un=new cn(sR,rR,oR);function M_(t){return t instanceof yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_({projectId:t}){return`${nR}/projects/${t}/installations`}function F_(t){return{token:t.token,requestStatus:2,expiresIn:lR(t.expiresIn),creationTime:Date.now()}}async function U_(t,e){const i=(await e.json()).error;return Un.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function B_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aR(t,{refreshToken:e}){const n=B_(t);return n.append("Authorization",cR(e)),n}async function $_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lR(t){return Number(t.replace("s","000"))}function cR(t){return`${D_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=L_(t),s=B_(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:D_,appId:t.appId,sdkVersion:O_},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await $_(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:F_(c.authToken)}}else throw await U_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^[cdef][\w-]{21}$/,ml="";function fR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pR(t);return dR.test(n)?n:ml}catch{return ml}}function pR(t){return hR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Map;function H_(t,e){const n=Uo(t);W_(n,e),gR(n,e)}function W_(t,e){const n=V_.get(t);if(n)for(const i of n)i(e)}function gR(t,e){const n=_R();n&&n.postMessage({key:t,fid:e}),mR()}let Sn=null;function _R(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=t=>{W_(t.data.key,t.data.fid)}),Sn}function mR(){V_.size===0&&Sn&&(Sn.close(),Sn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="firebase-installations-database",vR=1,Bn="firebase-installations-store";let Ia=null;function nu(){return Ia||(Ia=ZS(yR,vR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bn)}}})),Ia}async function eo(t,e){const n=Uo(t),s=(await nu()).transaction(Bn,"readwrite"),r=s.objectStore(Bn),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&H_(t,e.fid),e}async function z_(t){const e=Uo(t),i=(await nu()).transaction(Bn,"readwrite");await i.objectStore(Bn).delete(e),await i.done}async function Bo(t,e){const n=Uo(t),s=(await nu()).transaction(Bn,"readwrite"),r=s.objectStore(Bn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&H_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(t){let e;const n=await Bo(t.appConfig,i=>{const s=ER(i),r=wR(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===ml?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ER(t){const e=t||{fid:fR(),registrationStatus:0};return K_(e)}function wR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Un.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=IR(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TR(t)}:{installationEntry:e}}async function IR(t,e){try{const n=await uR(t,e);return eo(t.appConfig,n)}catch(n){throw M_(n)&&n.customData.serverCode===409?await z_(t.appConfig):await eo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function TR(t){let e=await yd(t.appConfig);for(;e.registrationStatus===1;)await j_(100),e=await yd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await iu(t);return i||n}return e}function yd(t){return Bo(t,e=>{if(!e)throw Un.create("installation-not-found");return K_(e)})}function K_(t){return CR(t)?{fid:t.fid,registrationStatus:0}:t}function CR(t){return t.registrationStatus===1&&t.registrationTime+x_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR({appConfig:t,heartbeatServiceProvider:e},n){const i=AR(t,n),s=aR(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:O_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await $_(()=>fetch(i,a));if(l.ok){const c=await l.json();return F_(c)}else throw await U_("Generate Auth Token",l)}function AR(t,{fid:e}){return`${L_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t,e=!1){let n;const i=await Bo(t.appConfig,r=>{if(!q_(r))throw Un.create("not-registered");const o=r.authToken;if(!e&&NR(o))return r;if(o.requestStatus===1)return n=SR(t,e),r;{if(!navigator.onLine)throw Un.create("app-offline");const a=PR(r);return n=RR(t,a),a}});return n?await n:i.authToken}async function SR(t,e){let n=await vd(t.appConfig);for(;n.authToken.requestStatus===1;)await j_(100),n=await vd(t.appConfig);const i=n.authToken;return i.requestStatus===0?su(t,e):i}function vd(t){return Bo(t,e=>{if(!q_(e))throw Un.create("not-registered");const n=e.authToken;return xR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function RR(t,e){try{const n=await bR(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await eo(t.appConfig,i),n}catch(n){if(M_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await z_(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await eo(t.appConfig,i)}throw n}}function q_(t){return t!==void 0&&t.registrationStatus===2}function NR(t){return t.requestStatus===2&&!kR(t)}function kR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iR}function PR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xR(t){return t.requestStatus===1&&t.requestTime+x_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t){const e=t,{installationEntry:n,registrationPromise:i}=await iu(e);return i?i.catch(console.error):su(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e=!1){const n=t;return await MR(n),(await su(n,e)).token}async function MR(t){const{registrationPromise:e}=await iu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(!t||!t.options)throw Ta("App Configuration");if(!t.name)throw Ta("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ta(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ta(t){return Un.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="installations",FR="installations-internal",UR=t=>{const e=t.getProvider("app").getImmediate(),n=LR(e),i=As(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},BR=t=>{const e=t.getProvider("app").getImmediate(),n=As(e,G_).getImmediate();return{getId:()=>OR(n),getToken:s=>DR(n,s)}};function $R(){ze(new Be(G_,UR,"PUBLIC")),ze(new Be(FR,BR,"PRIVATE"))}$R();Re(P_,tu);Re(P_,tu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="analytics",jR="firebase_id",VR="origin",HR=60*1e3,WR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ru="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new wi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new cn("analytics","Analytics",zR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(!t.startsWith(ru)){const e=tt.create("invalid-gtag-resource",{gtagURL:t});return He.warn(e.message),""}return t}function Y_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function GR(t,e){const n=qR("firebase-js-sdk-policy",{createScriptURL:KR}),i=document.createElement("script"),s=`${ru}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function YR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XR(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Y_(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){He.error(a)}t("config",s,r)}async function QR(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Y_(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){He.error(r)}}function JR(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await QR(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await XR(t,e,n,i,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){He.error(a)}}return s}function ZR(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=JR(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function eN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ru)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=30,nN=1e3;class iN{constructor(e={},n=nN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const X_=new iN;function sN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rN(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:sN(i)},r=WR.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oN(t,e=X_,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw tt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw tt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cN;return setTimeout(async()=>{a.abort()},n!==void 0?n:HR),Q_({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Q_(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=X_){var r;const{appId:o,measurementId:a}=t;try{await aN(i,e)}catch(l){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await rN(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!lN(c)){if(s.deleteThrottleMetadata(o),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Wu(n,s.intervalMillis,tN):Wu(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),He.debug(`Calling attemptFetch again in ${u} millis`),Q_(t,h,i,s)}}function aN(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lN(t){if(!(t instanceof yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uN(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(){if(Vl())try{await xf()}catch(t){return He.warn(tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return He.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dN(t,e,n,i,s,r,o){var a;const l=oN(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>He.error(g)),e.push(l);const c=hN().then(g=>{if(g)return i.getId()}),[u,h]=await Promise.all([l,c]);eN(r)||GR(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[VR]="firebase",d.update=!0,h!=null&&(d[jR]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.app=e}_delete(){return delete Zi[this.app.options.appId],Promise.resolve()}}let Zi={},Ed=[];const wd={};let Ca="dataLayer",pN="gtag",Id,J_,Td=!1;function gN(){const t=[];if(Nf()&&t.push("This is a browser extension environment."),$v()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function _N(t,e,n){gN();const i=t.options.appId;if(!i)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(Zi[i]!=null)throw tt.create("already-exists",{id:i});if(!Td){YR(Ca);const{wrappedGtag:r,gtagCore:o}=ZR(Zi,Ed,wd,Ca,pN);J_=r,Id=o,Td=!0}return Zi[i]=dN(t,Ed,wd,e,Id,Ca,n),new fN(t)}function mN(t=zl()){t=rt(t);const e=As(t,to);return e.isInitialized()?e.getImmediate():yN(t)}function yN(t,e={}){const n=As(t,to);if(n.isInitialized()){const s=n.getImmediate();if(Cr(e,n.getOptions()))return s;throw tt.create("already-initialized")}return n.initialize({options:e})}function vN(t,e,n,i){t=rt(t),uN(J_,Zi[t.app.options.appId],e,n,i).catch(s=>He.error(s))}const Cd="@firebase/analytics",bd="0.10.0";function EN(){ze(new Be(to,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return _N(i,s,n)},"PUBLIC")),ze(new Be("analytics-internal",t,"PRIVATE")),Re(Cd,bd),Re(Cd,bd,"esm2017");function t(e){try{const n=e.getProvider(to).getImmediate();return{logEvent:(i,s,r)=>vN(n,i,s,r)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}EN();const Z_=bv(WS);Z_.use(UA,{firebaseApp:Cc,modules:[]});mN(Cc);Z_.mount("#app");
