(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(12),a=n.n(o),i=n(13),s=n(18),u=n(3),j=n(9),b=n(10),h=n(15),l=n(14),d=(n(32),n(1)),O=function(t){var e=t.book,n=e.title,c=e.author;return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:c})]})},p=(n(34),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props.books;return Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(O,{book:t})},t.id)}))})}}]),n}(r.Component)),f=Object(i.b)((function(t){return{books:t.books}}))(p),x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Home Page"}),Object(d.jsx)(f,{books:[]})]})},v=function(){return Object(d.jsx)("div",{children:"Cart Page"})},k=(n(35),function(){return Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",component:x,exact:!0}),Object(d.jsx)(u.a,{path:"/re-store",component:x}),Object(d.jsx)(u.a,{path:"/cart",component:v})]})}),y=(n(40),function(){return Object(d.jsx)("div",{children:"Error!"})}),m=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return Object(b.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)(y,{}):this.props.children}}]),n}(r.Component),g=function(){function t(){Object(j.a)(this,t)}return Object(b.a)(t,[{key:"getBooks",value:function(){return[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler"},{id:2,title:"Release It!",author:"Michael T. Nygard"}]}}]),t}(),w=c.a.createContext(),C=w.Provider,E=(w.Consumer,n(22)),P={books:[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler"},{id:2,title:"Release It!",author:"Michael T. Nygard"}]},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"BOOKS_LOADED":return{books:e.payload};default:return t}},M=Object(E.a)(J),R=new g;a.a.render(Object(d.jsx)(i.a,{store:M,children:Object(d.jsx)(m,{children:Object(d.jsx)(C,{value:R,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(k,{})})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.1a4772ea.chunk.js.map