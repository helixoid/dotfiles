import{S as e,i as t,s as n,I as a,C as l,b as s,c as $,d as o,B as r,m as u,e as i,f as c,g as p,h as d,t as f,j as m,k as g,l as v,n as h,p as b,o as w,q as k,r as y,u as x,v as S,w as B,V as T,W as U,X as j,Y as C,Z as A,_ as D,$ as F,a0 as H,a1 as I,a2 as L,a3 as q,T as V,U as W,a4 as X}from"./main.js";import{H as Y}from"./Header-004efc34.js";function Z(e){let t;return{c(){t=W("Cancel")},m(e,n){m(e,t,n)},d(e){e&&x(t)}}}function _(e){let t;return{c(){t=W("Save settings")},m(e,n){m(e,t,n)},d(e){e&&x(t)}}}function z(e){let t,n,B,T,U,j,C,A,D,F,H,I,L,q,V,W,X,z,E,G,J,K,M,N,O,P,Q,R,ee,te,ne,ae,le,se,$e,oe,re,ue,ie,ce,pe,de,fe,me,ge;function ve(t){e[13](t)}n=new a({props:{name:"SpinnerIcon"}}),U=new Y({props:{text:"Speed Limits"}});let he={label:"Upload (kB/s)"};function be(t){e[14](t)}void 0!==e[2]&&(he.checked=e[2]),C=new l({props:he}),s.push((()=>$(C,"checked",ve)));let we={type:"number"};function ke(t){e[15](t)}void 0!==e[3]&&(we.value=e[3]),F=new o({props:we}),s.push((()=>$(F,"value",be)));let ye={label:"Download (kB/s)"};function xe(t){e[16](t)}void 0!==e[4]&&(ye.checked=e[4]),L=new l({props:ye}),s.push((()=>$(L,"checked",ke)));let Se={type:"number"};function Be(t){e[17](t)}void 0!==e[5]&&(Se.value=e[5]),W=new o({props:Se}),s.push((()=>$(W,"value",xe))),E=new Y({props:{text:"Alternative Speed Limits"}});let Te={label:"Alternative speeds enabled"};function Ue(t){e[18](t)}void 0!==e[6]&&(Te.checked=e[6]),J=new l({props:Te}),s.push((()=>$(J,"checked",Be)));let je={label:"Upload (kB/s)",type:"number"};function Ce(t){e[19](t)}void 0!==e[7]&&(je.value=e[7]),N=new o({props:je}),s.push((()=>$(N,"value",Ue)));let Ae={label:"Download (kB/s)",type:"number"};function De(t){e[20](t)}void 0!==e[8]&&(Ae.value=e[8]),Q=new o({props:Ae}),s.push((()=>$(Q,"value",Ce)));let Fe={label:"Scheduled Times"};function He(t){e[21](t)}void 0!==e[9]&&(Fe.checked=e[9]),te=new l({props:Fe}),s.push((()=>$(te,"checked",De)));let Ie={label:"From",type:"time"};function Le(t){e[22](t)}void 0!==e[10]&&(Ie.value=e[10]),le=new o({props:Ie}),s.push((()=>$(le,"value",He)));let qe={label:"To",type:"time"};return void 0!==e[11]&&(qe.value=e[11]),oe=new o({props:qe}),s.push((()=>$(oe,"value",Le))),ce=new r({props:{type:"button",priority:"tertiary",$$slots:{default:[Z]},$$scope:{ctx:e}}}),ce.$on("click",u.close),de=new r({props:{type:"submit",priority:"primary",loading:e[1],$$slots:{default:[_]},$$scope:{ctx:e}}}),{c(){t=i("div"),c(n.$$.fragment),B=p(),T=i("form"),c(U.$$.fragment),j=p(),c(C.$$.fragment),D=p(),c(F.$$.fragment),I=p(),c(L.$$.fragment),V=p(),c(W.$$.fragment),z=p(),c(E.$$.fragment),G=p(),c(J.$$.fragment),M=p(),c(N.$$.fragment),P=p(),c(Q.$$.fragment),ee=p(),c(te.$$.fragment),ae=p(),c(le.$$.fragment),$e=p(),c(oe.$$.fragment),ue=p(),ie=i("div"),c(ce.$$.fragment),pe=p(),c(de.$$.fragment),d(ie,"class","buttons svelte-l5dli4"),d(T,"class","svelte-l5dli4"),d(t,"class","wrapper svelte-l5dli4"),f(t,"loading-initial",e[0])},m(a,l){m(a,t,l),g(n,t,null),v(t,B),v(t,T),g(U,T,null),v(T,j),g(C,T,null),v(T,D),g(F,T,null),v(T,I),g(L,T,null),v(T,V),g(W,T,null),v(T,z),g(E,T,null),v(T,G),g(J,T,null),v(T,M),g(N,T,null),v(T,P),g(Q,T,null),v(T,ee),g(te,T,null),v(T,ae),g(le,T,null),v(T,$e),g(oe,T,null),v(T,ue),v(T,ie),g(ce,ie,null),v(ie,pe),g(de,ie,null),fe=!0,me||(ge=h(T,"submit",b(e[12])),me=!0)},p(e,[n]){const a={};!A&&4&n&&(A=!0,a.checked=e[2],w((()=>A=!1))),C.$set(a);const l={};!H&&8&n&&(H=!0,l.value=e[3],w((()=>H=!1))),F.$set(l);const s={};!q&&16&n&&(q=!0,s.checked=e[4],w((()=>q=!1))),L.$set(s);const $={};!X&&32&n&&(X=!0,$.value=e[5],w((()=>X=!1))),W.$set($);const o={};!K&&64&n&&(K=!0,o.checked=e[6],w((()=>K=!1))),J.$set(o);const r={};!O&&128&n&&(O=!0,r.value=e[7],w((()=>O=!1))),N.$set(r);const u={};!R&&256&n&&(R=!0,u.value=e[8],w((()=>R=!1))),Q.$set(u);const i={};!ne&&512&n&&(ne=!0,i.checked=e[9],w((()=>ne=!1))),te.$set(i);const c={};!se&&1024&n&&(se=!0,c.value=e[10],w((()=>se=!1))),le.$set(c);const p={};!re&&2048&n&&(re=!0,p.value=e[11],w((()=>re=!1))),oe.$set(p);const d={};8388608&n&&(d.$$scope={dirty:n,ctx:e}),ce.$set(d);const m={};2&n&&(m.loading=e[1]),8388608&n&&(m.$$scope={dirty:n,ctx:e}),de.$set(m),(!fe||1&n)&&f(t,"loading-initial",e[0])},i(e){fe||(k(n.$$.fragment,e),k(U.$$.fragment,e),k(C.$$.fragment,e),k(F.$$.fragment,e),k(L.$$.fragment,e),k(W.$$.fragment,e),k(E.$$.fragment,e),k(J.$$.fragment,e),k(N.$$.fragment,e),k(Q.$$.fragment,e),k(te.$$.fragment,e),k(le.$$.fragment,e),k(oe.$$.fragment,e),k(ce.$$.fragment,e),k(de.$$.fragment,e),fe=!0)},o(e){y(n.$$.fragment,e),y(U.$$.fragment,e),y(C.$$.fragment,e),y(F.$$.fragment,e),y(L.$$.fragment,e),y(W.$$.fragment,e),y(E.$$.fragment,e),y(J.$$.fragment,e),y(N.$$.fragment,e),y(Q.$$.fragment,e),y(te.$$.fragment,e),y(le.$$.fragment,e),y(oe.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),fe=!1},d(e){e&&x(t),S(n),S(U),S(C),S(F),S(L),S(W),S(E),S(J),S(N),S(Q),S(te),S(le),S(oe),S(ce),S(de),me=!1,ge()}}}function E(e,t,n){let a=!0,l=!1,s=null,$=null,o=null,r=null,u=null,i=null,c=null,p=null,d=null,f=null;B.addColumns([T,U,j,C,A,D,F,H,I,L]).then((e=>{n(2,s=e[T]),n(3,$=e[U]),n(4,o=e[j]),n(5,r=e[C]),n(6,u=e[A]),n(7,i=e[D]),n(8,c=e[F]),n(9,p=e[H]),n(10,d=q(e[I])),n(11,f=q(e[L])),n(0,a=!1)})).catch((()=>{V.add("Unable to fetch the data for that action right now. Try again later.","negative")}));return[a,l,s,$,o,r,u,i,c,p,d,f,()=>{n(1,l=!0),B.update({"speed-limit-up-enabled":s,"speed-limit-up":$,"speed-limit-down-enabled":o,"speed-limit-down":r,"alt-speed-enabled":u,"alt-speed-up":i,"alt-speed-down":c,"alt-speed-time-enabled":p,"alt-speed-time-begin":X(d),"alt-speed-time-end":X(f)}).then((()=>{V.add("Succesfully saved speed settings")})).catch((()=>{V.add("Failed saving speed settings, please try again","negative")})).finally((()=>{n(1,l=!1)}))},function(e){s=e,n(2,s)},function(e){$=e,n(3,$)},function(e){o=e,n(4,o)},function(e){r=e,n(5,r)},function(e){u=e,n(6,u)},function(e){i=e,n(7,i)},function(e){c=e,n(8,c)},function(e){p=e,n(9,p)},function(e){d=e,n(10,d)},function(e){f=e,n(11,f)}]}class G extends e{constructor(e){super(),t(this,e,E,z,n,{})}}export{G as default};
//# sourceMappingURL=Speed-f7b4df2b.js.map
