import{S as e,i as t,s as n,I as a,d as s,b as r,c as o,C as l,B as i,m as $,e as c,f as p,g as u,h as f,t as d,j as m,k as g,l as h,n as v,p as w,o as b,q as y,r as k,u as x,v as P,w as S,af as T,ag as j,ah as C,ai as U,T as H,U as I}from"./main.js";import{H as q}from"./Header-004efc34.js";function z(e){let t;return{c(){t=I("Cancel")},m(e,n){m(e,t,n)},d(e){e&&x(t)}}}function B(e){let t;return{c(){t=I("Save settings")},m(e,n){m(e,t,n)},d(e){e&&x(t)}}}function E(e){let t,n,S,T,j,C,U,H,I,E,F,L,O,R,A,D,G,J,K,M,N,Q,V,W,X,Y,Z;function _(t){e[8](t)}n=new a({props:{name:"SpinnerIcon"}}),j=new q({props:{text:"Listening port"}});let ee={label:"Peer listening port",type:"number",hint:"Port is "+(e[6]?"open":"closed")};function te(t){e[9](t)}void 0!==e[2]&&(ee.value=e[2]),U=new s({props:ee}),r.push((()=>o(U,"value",_)));let ne={label:"Randomize port on launch"};function ae(t){e[10](t)}void 0!==e[3]&&(ne.checked=e[3]),E=new l({props:ne}),r.push((()=>o(E,"checked",te)));let se={label:"Use port forwarding from my router"};function re(t){e[11](t)}void 0!==e[4]&&(se.checked=e[4]),O=new l({props:se}),r.push((()=>o(O,"checked",ae))),D=new q({props:{text:"Options"}});let oe={label:"Enable uTP for peer communication"};return void 0!==e[5]&&(oe.checked=e[5]),J=new l({props:oe}),r.push((()=>o(J,"checked",re))),Q=new i({props:{type:"button",priority:"tertiary",$$slots:{default:[z]},$$scope:{ctx:e}}}),Q.$on("click",$.close),W=new i({props:{type:"submit",priority:"primary",loading:e[1],$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){t=c("div"),p(n.$$.fragment),S=u(),T=c("form"),p(j.$$.fragment),C=u(),p(U.$$.fragment),I=u(),p(E.$$.fragment),L=u(),p(O.$$.fragment),A=u(),p(D.$$.fragment),G=u(),p(J.$$.fragment),M=u(),N=c("div"),p(Q.$$.fragment),V=u(),p(W.$$.fragment),f(N,"class","buttons svelte-l5dli4"),f(T,"class","svelte-l5dli4"),f(t,"class","wrapper svelte-l5dli4"),d(t,"loading-initial",e[0])},m(a,s){m(a,t,s),g(n,t,null),h(t,S),h(t,T),g(j,T,null),h(T,C),g(U,T,null),h(T,I),g(E,T,null),h(T,L),g(O,T,null),h(T,A),g(D,T,null),h(T,G),g(J,T,null),h(T,M),h(T,N),g(Q,N,null),h(N,V),g(W,N,null),X=!0,Y||(Z=v(T,"submit",w(e[7])),Y=!0)},p(e,[n]){const a={};64&n&&(a.hint="Port is "+(e[6]?"open":"closed")),!H&&4&n&&(H=!0,a.value=e[2],b((()=>H=!1))),U.$set(a);const s={};!F&&8&n&&(F=!0,s.checked=e[3],b((()=>F=!1))),E.$set(s);const r={};!R&&16&n&&(R=!0,r.checked=e[4],b((()=>R=!1))),O.$set(r);const o={};!K&&32&n&&(K=!0,o.checked=e[5],b((()=>K=!1))),J.$set(o);const l={};4096&n&&(l.$$scope={dirty:n,ctx:e}),Q.$set(l);const i={};2&n&&(i.loading=e[1]),4096&n&&(i.$$scope={dirty:n,ctx:e}),W.$set(i),(!X||1&n)&&d(t,"loading-initial",e[0])},i(e){X||(y(n.$$.fragment,e),y(j.$$.fragment,e),y(U.$$.fragment,e),y(E.$$.fragment,e),y(O.$$.fragment,e),y(D.$$.fragment,e),y(J.$$.fragment,e),y(Q.$$.fragment,e),y(W.$$.fragment,e),X=!0)},o(e){k(n.$$.fragment,e),k(j.$$.fragment,e),k(U.$$.fragment,e),k(E.$$.fragment,e),k(O.$$.fragment,e),k(D.$$.fragment,e),k(J.$$.fragment,e),k(Q.$$.fragment,e),k(W.$$.fragment,e),X=!1},d(e){e&&x(t),P(n),P(j),P(U),P(E),P(O),P(D),P(J),P(Q),P(W),Y=!1,Z()}}}function F(e,t,n){let a=!0,s=!1,r=null,o=null,l=null,i=null,$=!1;S.getPortTest().then((e=>{n(6,$=e)})),S.addColumns([T,j,C,U]).then((e=>{n(2,r=e[T]),n(3,o=e[j]),n(4,l=e[C]),n(5,i=e[U]),n(0,a=!1)})).catch((()=>{H.add("Unable to fetch the data for that action right now. Try again later.","negative")}));return[a,s,r,o,l,i,$,()=>{n(1,s=!0),S.update({"peer-port":r,"peer-port-random-on-start":o,"port-forwarding-enabled":l,"utp-enabled":i}).then((()=>{H.add("Succesfully saved network settings")})).catch((()=>{H.add("Failed saving network settings, please try again","negative")})).finally((()=>{n(1,s=!1)}))},function(e){r=e,n(2,r)},function(e){o=e,n(3,o)},function(e){l=e,n(4,l)},function(e){i=e,n(5,i)}]}class L extends e{constructor(e){super(),t(this,e,F,E,n,{})}}export{L as default};
//# sourceMappingURL=Network-83a67d10.js.map
