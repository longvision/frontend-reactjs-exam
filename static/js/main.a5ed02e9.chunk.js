(this["webpackJsonpdemo-shop"]=this["webpackJsonpdemo-shop"]||[]).push([[0],{41:function(e,n,t){e.exports=t.p+"static/media/demo.c46a900e.svg"},42:function(e,n,t){e.exports=t.p+"static/media/logo.063b7dcb.svg"},43:function(e,n,t){e.exports=t.p+"static/media/novo-cartao.57af19a0.svg"},47:function(e,n,t){e.exports=t.p+"static/media/check.a52b4e6b.svg"},49:function(e,n,t){e.exports=t.p+"static/media/side.dcd6dc8e.png"},53:function(e,n,t){e.exports=t(67)},58:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(16),c=t.n(i),o=(t(58),t(9)),l=t(5),d=t(2);function u(){var e=Object(l.a)(["\n  width: 360px;\n  height: 725px;\n  @media only screen and (min-width: 361px) {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n  }\n"]);return u=function(){return e},e}function m(){var e=Object(l.a)(["\n  width: 360px;\n  height: 725px;\n  @media only screen and (min-width: 361px) {\n    width: 1920px;\n    height: 1080px;\n    background-color: #f7f7f7;\n  }\n"]);return m=function(){return e},e}var s=d.b.div(m()),f=d.b.div(u()),p=t(41),x=t.n(p),b=t(42),h=t.n(b);function g(){var e=Object(l.a)(["\n  @media only screen and (min-width: 361px) {\n    margin-right: 35px;\n    background: #c3c3c3;\n\n    width: 100px;\n    border-radius: 5px;\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(l.a)(["\n  @media only screen and (min-width: 361px) {\n    flex-direction: row;\n    display: flex;\n    margin-left: 300px;\n    align-items: center;\n    justify-content: stretch;\n    width: 572px;\n    height: 100%;\n    margin-right: 277px;\n    margin-left: 277px;\n  }\n  @media only screen and (min-width: 1919px) {\n    flex-direction: row;\n    display: flex;\n    margin-left: 300px;\n    align-items: center;\n    justify-content: stretch;\n    width: 572px;\n    height: 100%;\n    margin-right: 277px;\n  }\n"]);return y=function(){return e},e}function v(){var e=Object(l.a)(["\n  @media only screen and (min-width: 361px) {\n    justify-content: space-between;\n    display-direction: row;\n    display: flex;\n    width: 260px;\n    margin-left: 277px;\n  }\n  @media only screen and (min-width: 1919px) {\n    justify-content: space-between;\n    display-direction: row;\n    display: flex;\n    width: 260px;\n    margin-left: 277px;\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\n  display: none;\n\n  @media only screen and (min-width: 361px) {\n    justify-content: space-between;\n    flex-direction: row;\n    align-items: center;\n    display: flex;\n    width: 100%;\n    height: 100px;\n    background-color: #fff;\n  }\n"]);return E=function(){return e},e}var w=d.b.div(E()),j=d.b.div(v()),O=d.b.div(y()),C=d.b.div(g());var R=function(){return a.a.createElement(w,null,a.a.createElement(j,null,a.a.createElement("img",{src:h.a,alt:"logo"}),a.a.createElement("img",{src:x.a,alt:"demoshop"})),a.a.createElement(O,null,a.a.createElement(C,null,a.a.createElement("p",null)),a.a.createElement(C,null,a.a.createElement("p",null)),a.a.createElement(C,null,a.a.createElement("p",null)),a.a.createElement(C,null,a.a.createElement("p",null)),a.a.createElement(C,null,a.a.createElement("p",null))))},S=t(20),k=(t(64),t(48)),z=t(84),I=t(30),T=t.n(I),D=t(43),N=t.n(D),L=t(7),$=t(50),_=t(83),B=function(e){return{type:"SET_FOCUS",payload:e}},V=t(15),F=t.n(V);function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")}function P(e){var n=e.field,t=Object(o.c)((function(e){return e.creditcard.number})),i=Object(o.c)((function(e){return e.creditcard.name})),c=Object(o.c)((function(e){return e.creditcard.expiry})),l=Object(o.c)((function(e){return e.creditcard.cvc})),d=Object(r.useState)({name:"",split:""}),u=Object(S.a)(d,2),m=u[0],s=u[1],f=Object($.a)({errorMessages:{emptyCardNumber:"Preencha com o n\xfamero do cart\xe3o",invalidCardNumber:"N\xfamero inv\xe1lido",emptyExpiryDate:"Data inv\xe1lida",monthOutOfRange:"Data inv\xe1lido",yearOutOfRange:"Data inv\xe1lido",dateOutOfRange:"Data inv\xe1lida",invalidExpiryDate:"Data inv\xe1lida",emptyCVC:"C\xf3digo inv\xe1lido",invalidCVC:"C\xf3digo inv\xe1lido",invalidName:"Insira o seu nome completo"}}),p=f.meta,x=f.getCardNumberProps,b=f.getExpiryDateProps,h=f.getCVCProps,g=Object(o.b)(),y=function(){-1===i.indexOf(" ")?s(Object(L.a)(Object(L.a)({},m),{},{name:"Insira o seu nome completo"})):s(Object(L.a)(Object(L.a)({},m),{},{name:""}))};return a.a.createElement("div",{style:{height:44}},a.a.createElement("div",null,"name"===n&&a.a.createElement("input",{style:{width:"99%",fontSize:20,borderTop:0,borderLeft:0,borderRight:0,borderBottomWidth:2,outline:"none"},size:"medium",placeholder:"Nome (Igual ao do cart\xe3o)",type:"input",required:!0,value:i,name:"name",onChange:function(e){y(),g(function(e){return{type:"SET_NAME",payload:e}}(e.target.value))},onBlur:function(e){y()},onFocus:function(e){return g(B(e.target.name))}}),"number"===n&&a.a.createElement("input",Object.assign({style:{width:"99%",fontSize:20,borderTop:0,borderLeft:0,borderRight:0,borderBottomWidth:2,outline:"none"},required:!0,value:t},x({placeholder:"N\xfamero do cart\xe3o",onChange:function(e){return g(function(e){return{type:"SET_NUMBER",payload:e}}(function(e){if(!e)return e;var n,t=F.a.fns.cardType(e),r=W(e);switch(t){case"amex":n="".concat(r.slice(0,4)," ").concat(r.slice(4,10)," ").concat(r.slice(10,15));break;case"dinersclub":n="".concat(r.slice(0,4)," ").concat(r.slice(4,10)," ").concat(r.slice(10,14));break;default:n="".concat(r.slice(0,4)," ").concat(r.slice(4,8)," ").concat(r.slice(8,12)," ").concat(r.slice(12,19))}return n.trim()}(e.target.value)))}}),{onFocus:function(e){return g(B(e.target.name))}})),"expiry"===n&&a.a.createElement("div",{style:{width:"100%"}},a.a.createElement("input",Object.assign({style:{width:"99%",fontSize:20,alignItems:"flex-start",borderTop:0,borderLeft:0,borderRight:0,borderBottomWidth:2,outline:"none"},value:c,name:"expiry"},b({placeholder:"Validade",onChange:function(e){g(function(e){return{type:"SET_EXPIRY",payload:e}}(function(e){var n=W(e);return n.length>=3?"".concat(n.slice(0,2),"/").concat(n.slice(2,4)):n}(e.target.value)))}}),{onFocus:function(e){return g(B(e.target.name))}}))),"cvc"===n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{width:"100%"}},a.a.createElement("input",Object.assign({style:{width:"99%",fontSize:20,alignItems:"center",borderTop:0,borderLeft:0,borderRight:0,borderBottomWidth:2,outline:"none"},type:"tel",value:l,required:!0,name:"cvc",placeholder:"CVV"},h({placeholder:"CVV",onChange:function(e){return g(function(e){return{type:"SET_CVC",payload:e}}(function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=W(e),a=4;if(t.number){var i=F.a.fns.cardType(t.number);a="amex"===i?4:3}return r.slice(0,a)}(e.target.value)))}}),{onFocus:function(e){return g(B(e.target.name))}})))),"split"===n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(_.a,{id:"select",style:{width:"99%",fontSize:20,borderTop:0,borderLeft:0,borderRight:0,borderBottomWidth:2,outline:"none"},name:"split",type:"input",placeholder:"N\xfamero de parcelas",onChange:function(e){e.target.value?s(Object(L.a)(Object(L.a)({},m),{},{split:""})):s(Object(L.a)(Object(L.a)({},m),{},{split:"Insira o n\xfamero de parcelas"}))},onFocus:function(e){return g(B(e.target.name))}},a.a.createElement("option",{value:""},"N\xfamero de parcelas"),a.a.createElement("option",{value:"12"},"12x R$1.000,00 sem juros"),a.a.createElement("option",{value:"11"},"11x R$ 990,00 sem juros"),a.a.createElement("option",{value:"10"},"10x R$950,00 sem juros"),a.a.createElement("option",{value:"9"},"9x R$1.000,00 sem juros"),a.a.createElement("option",{value:"8"},"8x R$1.000,00 sem juros"),a.a.createElement("option",{value:"7"},"7x R$1.000,00 sem juros"),a.a.createElement("option",{value:"6"},"6x R$1.000,00 sem juros"),a.a.createElement("option",{value:"5"},"5x R$1.000,00 sem juros"),a.a.createElement("option",{value:"4"},"4x R$1.000,00 sem juros"),a.a.createElement("option",{value:"3"},"3x R$1.000,00 sem juros"),a.a.createElement("option",{value:"2"},"2x R$1.000,00 sem juros"),a.a.createElement("option",{value:"1"},"1x R$1.000,00 sem juros")))),p.isTouched&&p.error&&a.a.createElement("span",{style:{fontSize:13,color:"red"}},p.error),m.name&&a.a.createElement("span",{style:{fontSize:13,color:"red"}},m.name),m.split&&a.a.createElement("span",{style:{fontSize:13,color:"red"}},m.split))}function A(){var e=Object(l.a)(["\n  color: #ffffff;\n  opacity: 1;\n  font-size: 13px;\n  letter-spacing: -0.01px;\n  text-align: center;\n  margin-left: 100px;\n  height: 16px;\n"]);return A=function(){return e},e}function M(){var e=Object(l.a)(["\n  color: #ffffff;\n  opacity: 1;\n  font-size: 13px;\n  letter-spacing: -0.01px;\n  text-align: center;\n\n  height: 16px;\n"]);return M=function(){return e},e}function U(){var e=Object(l.a)(["\n  font-size: 16px;\n  font-weight: bold;\n  width: 185px;\n  text-align: left;\n  color: white;\n  @media only screen and (min-width: 361px) {\n    color: white;\n    font-size: 24px;\n    width: 215px;\n    display: flex;\n    font-weight: bold;\n    text-align: left;\n    align-items: flex-end;\n  }\n"]);return U=function(){return e},e}function q(){var e=Object(l.a)(["\n  height: 55px;\n  padding: 0 20px;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n\n  border-color: #48285b;\n  border-width: 2px;\n  font-size: 18px;\n"]);return q=function(){return e},e}function J(){var e=Object(l.a)(["\n  align-items: flex-end;\n\n  height: 44px;\n"]);return J=function(){return e},e}function X(){var e=Object(l.a)(["\n  align-items: flex-start;\n  height: 44px;\n"]);return X=function(){return e},e}function Y(){var e=Object(l.a)(["\n  height: 44px;\n"]);return Y=function(){return e},e}function H(){var e=Object(l.a)(["\n  flex-direction: column;\n  height: 44px;\n"]);return H=function(){return e},e}function G(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 51px;\n"]);return G=function(){return e},e}function K(){var e=Object(l.a)(["\n  justify-content: center;\n  margin-top: -25px;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  @media only screen and (min-width: 361px) {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 10px;\n  }\n"]);return K=function(){return e},e}function Q(){var e=Object(l.a)(["\n  width: 100%;\n  height: 44px;\n  margin-bottom: 40px;\n"]);return Q=function(){return e},e}function Z(){var e=Object(l.a)(["\n  width: 80%;\n\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  @media only screen and (min-width: 361px) {\n    flex-direction: column;\n    display: flex;\n    width: 440px;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(l.a)(["\n  width: 100%;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n\n  @media only screen and (min-width: 361px) {\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    display: flex;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n  height: 48px;\n  width: 100%;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  display: flex;\n  @media only screen and (min-width: 361px) {\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    display: flex;\n    margin-top: 20px;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -80px;\n  margin-left: 34px;\n  height: 100%;\n  @media only screen and (min-width: 361px) {\n    flex-direction: row;\n    justify-content: center;\n    width: auto;\n    align-items: center;\n    margin-left: 80px;\n    margin-top: 74px;\n    height: 20px;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(l.a)(["\n  display: none;\n\n  @media only screen and (min-width: 361px) {\n    display: flex;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n  height: 50px;\n  width: 50px;\n\n  margin-right: 15px;\n"]);return ae=function(){return e},e}function ie(){var e=Object(l.a)(["\n  flex-direction: column;\n\n  height: 50px;\n  width: 50px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  @media only screen and (min-width: 361px) {\n    display: flex;\n    flex-direction: column;\n    margin-left: -50px;\n\n    padding-top: 53px;\n\n    width: 672px;\n    height: 543px;\n    background-color: #fff;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(l.a)(["\n  align-items: center;\n  max-width: 360px;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: -80px;\n  flex-direction: row;\n  display: flex;\n\n  @media only screen and (min-width: 361px) {\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 31px;\n    flex-direction: column;\n    display: flex;\n    margin-left: -275px;\n  }\n"]);return oe=function(){return e},e}function le(){var e=Object(l.a)(["\n  max-width: 360px;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  height: 239px;\n\n  background-color: #de4b4b;\n\n  @media only screen and (min-width: 361px) {\n    flex-direction: column;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n\n    width: 100%;\n    height: 100%;\n    background-color: #de4b4b;\n  }\n"]);return le=function(){return e},e}function de(){var e=Object(l.a)(["\n  display: flex;\n  max-width: 360px;\n  width: 100%;\n  flex-direction: column;\n  height: 239px;\n  border-width: 3px;\n  background-color: #fff;\n  @media only screen and (min-width: 361px) {\n    display: flex;\n    min-width: 360px;\n    max-width: 1024px;\n    width: 100%;\n    flex-direction: row;\n    height: 596px;\n    background-color: #fff;\n    border-width: 3px;\n    margin-left: 277px;\n    margin-top 65px;\n  }\n"]);return de=function(){return e},e}var ue=d.b.div(de()),me=d.b.div(le()),se=d.b.div(oe()),fe=d.b.div(ce()),pe=(d.b.div(ie()),d.b.img(ae())),xe=d.b.div(re()),be=d.b.div(te()),he=d.b.div(ne()),ge=d.b.div(ee()),ye=d.b.div(Z()),ve=d.b.div(Q()),Ee=d.b.div(K()),we=d.b.div(G()),je=(d.b.div(H()),d.b.div(Y()),d.b.div(X()),d.b.div(J()),d.b.input(q()),d.b.p(U())),Oe=d.b.p(M()),Ce=d.b.p(A()),Re=t(29),Se=t.n(Re),ke=t(47),ze=t.n(ke);var Ie=function(){return a.a.createElement("div",{style:{marginTop:10,marginLeft:50,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}},a.a.createElement("div",{style:{borderRadius:100,flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",width:20,height:20,backgroundColor:"#de4b4b",marginRight:8}},a.a.createElement("img",{src:ze.a,alt:"",style:{justifyContent:"center",alignItems:"center",marginLeft:1}})),a.a.createElement("div",null,a.a.createElement("p",{style:{fontSize:13,color:"#de4b4b"}}," Carrinho ")),a.a.createElement("div",null,a.a.createElement(Se.a,{style:{color:"#de4b4b",marginLeft:23,marginRight:23}})),a.a.createElement("div",{style:{alignItems:"center",borderRadius:100,flexDirection:"row",display:"flex",justifyContent:"center",width:20,height:20,backgroundColor:"#de4b4b",marginRight:8}},a.a.createElement("div",{style:{alignItems:"center",borderRadius:100,flexDirection:"row",display:"flex",justifyContent:"center",width:18,height:18,backgroundColor:"white"}},a.a.createElement("p",{style:{color:"#de4b4b",fontSize:15}},"2"))),a.a.createElement("div",null,a.a.createElement("p",{style:{fontSize:13,color:"#de4b4b"}},"Confirma\xe7\xe3o")),a.a.createElement("div",null,a.a.createElement(Se.a,{style:{color:"#de4b4b",marginLeft:23,marginRight:23}})),a.a.createElement("div",{style:{alignItems:"center",borderRadius:100,flexDirection:"row",justifyContent:"center",width:20,height:20,backgroundColor:"#de4b4b",marginRight:8,display:"flex"}},a.a.createElement("div",{style:{alignItems:"center",borderRadius:100,flexDirection:"row",display:"flex",justifyContent:"center",width:18,height:18,backgroundColor:"white"}},a.a.createElement("p",{style:{color:"#de4b4b",fontSize:15}},"3"))),a.a.createElement("div",null,a.a.createElement("p",{style:{fontSize:13,color:"#de4b4b"}},"Confirma\xe7\xe3o")))};var Te=function(e){var n=Object(o.c)((function(e){return e.creditcard.name})),t=Object(o.c)((function(e){return e.creditcard.cvc})),i=Object(o.c)((function(e){return e.creditcard.expiry})),c=Object(o.c)((function(e){return e.creditcard.number})),l=Object(o.c)((function(e){return e.creditcard.focus})),d=Object(r.useState)(""),u=Object(S.a)(d,2),m=u[0],s=u[1],f=function(){var e="object"===typeof window,n=Object(r.useCallback)((function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}),[e]),t=Object(r.useState)(n),a=Object(S.a)(t,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){if(!e)return!1;function t(){c(n())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[n,e]),i}();return a.a.createElement(ue,null,a.a.createElement(me,null,a.a.createElement(he,null,f.width>361?a.a.createElement("div",{style:{flexDirection:"row",display:"flex",marginTop:53,justifyContent:"flex-start",width:"100%",alignItems:"center",marginLeft:80}},a.a.createElement(T.a,{style:{alignItems:"flex-start",color:"#fff"}}),a.a.createElement(Oe,null,"Alterar forma de pagamento")):a.a.createElement("div",{style:{flexDirection:"row",display:"flex",flex:1,width:"100%",alignItems:"center"}},a.a.createElement(T.a,{style:{alignItems:"flex-start",color:"#fff",width:50,height:44}}),a.a.createElement(Ce,null,a.a.createElement("strong",null,"Etapa 2")," de 3"))),a.a.createElement(be,null,a.a.createElement(pe,{src:N.a}),a.a.createElement(je,null,"Adicione um novo cart\xe3o de cr\xe9dito"))),a.a.createElement(se,{className:"App-payment"},a.a.createElement(k.a,{cvc:t,expiry:i,focused:l,name:n,number:c,callback:function(e,n){var t=e.issuer;n&&s(t)}})),a.a.createElement(fe,null,a.a.createElement(xe,null,a.a.createElement(Ie,null)),a.a.createElement(ge,null,a.a.createElement(ye,null,a.a.createElement(ve,{className:"form-group"},a.a.createElement(P,{field:"number"})),a.a.createElement(ve,null,a.a.createElement(P,{field:"name"})),a.a.createElement(we,null,a.a.createElement(P,{field:"expiry"}),a.a.createElement(P,{field:"cvc"})),a.a.createElement("input",{type:"hidden",name:"issuer",value:m}),a.a.createElement(ve,null,a.a.createElement(P,{field:"split"})),a.a.createElement(Ee,null,a.a.createElement(z.a,{type:"submit",color:"default",style:{width:246,justifyContent:"center",alignItems:"center",fontSize:22,backgroundColor:"#de4b4b",color:"#fff"},size:"small",variant:"contained",value:"Submit"},"CONTINUAR"))))))};function De(){var e=Object(l.a)(["\n  display: none;\n\n  @media only screen and (min-width: 361px) {\n    width: 327px;\n    height: 285px;\n    margin-top: 65px;\n    margin-left: 15px;\n    display: flex;\n  }\n"]);return De=function(){return e},e}var Ne=d.b.img(De()),Le=t(49),$e=t.n(Le);var _e=function(){return a.a.createElement(Ne,{src:$e.a,alt:""})},Be=function(){return a.a.createElement(s,null,a.a.createElement(R,null),a.a.createElement(f,null,a.a.createElement(Te,null),a.a.createElement(_e,null)))},Ve=t(19),Fe={name:"",number:"",cvc:"",expiry:"",split:"",focus:""};var We=Object(Ve.b)({creditcard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_NUMBER":return Object(L.a)(Object(L.a)({},e),{},{number:n.payload});case"SET_NAME":return Object(L.a)(Object(L.a)({},e),{},{name:n.payload});case"SET_EXPIRY":return Object(L.a)(Object(L.a)({},e),{},{expiry:n.payload});case"SET_CVC":return Object(L.a)(Object(L.a)({},e),{},{cvc:n.payload});case"SET_SPLIT":return Object(L.a)(Object(L.a)({},e),{},{split:n.payload});case"SET_FOCUS":return Object(L.a)(Object(L.a)({},e),{},{focus:n.payload});default:return e}}}),Pe=Object(Ve.c)(We);var Ae=function(){return a.a.createElement(o.a,{store:Pe},a.a.createElement(Be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.a5ed02e9.chunk.js.map