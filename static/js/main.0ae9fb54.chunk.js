(this["webpackJsonpreact_goods-selector-hooks"]=this["webpackJsonpreact_goods-selector-hooks"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(5),o=c(1),i=c(4),l=c.n(i),r=(c(10),c(11),c(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(r.jsxs)("main",{className:"section container",children:[c?Object(r.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(c," is selected"),Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){s("")}})]}):Object(r.jsx)("h1",{className:"title",children:"No goods selected"}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:d.map((function(t){return Object(r.jsxs)("tr",{"data-cy":"Good",className:l()({"has-background-success-light":c===t}),children:[Object(r.jsx)("td",{children:c!==t?Object(r.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){s(t)},children:"+"}):Object(r.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){s("")},children:"-"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};n.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0ae9fb54.chunk.js.map