(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(13),s=n.n(o),a=n(14),i=n(9),j=n(3),l=(n(33),n(1)),b=function(e){var t=e.numItems,n=e.total;return Object(l.jsxs)("header",{className:"shop-header row",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("div",{className:"logo text-dark",children:"ReStore"})}),Object(l.jsx)(i.b,{to:"/cart",children:Object(l.jsxs)("div",{className:"shopping-cart",children:[Object(l.jsx)("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")"]})})]})},u=n(10),d=n(11),h=n(16),O=n(15),x=(n(39),function(e){var t=e.book,n=t.title,r=t.author,c=t.price,o=t.coverImage;return Object(l.jsxs)("div",{className:"book-list-item",children:[Object(l.jsx)("div",{className:"book-cover",children:Object(l.jsx)("img",{src:o,alt:"Cover"})}),Object(l.jsxs)("div",{className:"book-details",children:[Object(l.jsx)("span",{className:"book-title",children:n}),Object(l.jsx)("div",{className:"book-author",children:r}),Object(l.jsxs)("div",{className:"book-price",children:["$",c]}),Object(l.jsx)("button",{className:"btn btn-info add-to-cart",children:"Add to cart"})]})]})}),m=n(20),f=c.a.createContext(),p=f.Provider,g=f.Consumer,v=function(){return function(e){return function(t){return Object(l.jsx)(g,{children:function(n){return Object(l.jsx)(e,Object(m.a)(Object(m.a)({},t),{},{bookstoreService:n}))}})}}},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},y=(n(40),function(){return Object(l.jsx)("div",{children:"Loading..."})}),N=(n(41),function(){return Object(l.jsx)("div",{children:"Error!"})}),E=(n(42),function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.bookstoreService,n=e.booksLoaded,r=e.booksRequested,c=e.booksError;r(),t.getBooks().then((function(e){return n(e)})).catch((function(e){return c(e)}))}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,r=e.error;return n?Object(l.jsx)(y,{}):r?Object(l.jsx)(N,{}):Object(l.jsx)("ul",{className:"book-list",children:t.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(x,{book:e})},e.id)}))})}}]),n}(r.Component)),R={booksLoaded:function(e){return{type:"BOOKS_LOADED",payload:e}},booksRequested:function(){return{type:"BOOKS_REQUESTED"}},booksError:function(e){return{type:"BOOKS_ERROR",payload:e}}},S=k(v(),Object(a.b)((function(e){return{books:e.books,loading:e.loading,error:e.error}}),R))(E),_=(n(43),function(){return Object(l.jsxs)("div",{className:"shopping-cart-table",children:[Object(l.jsx)("h2",{children:"Your Order"}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Item"}),Object(l.jsx)("th",{children:"Count"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"1"}),Object(l.jsx)("td",{children:"Site Reliability Engineering"}),Object(l.jsx)("td",{children:"2"}),Object(l.jsx)("td",{children:"$40"}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{className:"btn btn-outline-danger btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-trash-o"})}),Object(l.jsx)("button",{className:"btn btn-outline-success btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-plus-circle"})}),Object(l.jsx)("button",{className:"btn btn-outline-warning btn-sm float-right",children:Object(l.jsx)("i",{className:"fa fa-minus-circle"})})]})]})})]}),Object(l.jsx)("div",{className:"total",children:"Total: $201"})]})}),w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{books:[]}),Object(l.jsx)(_,{})]})},B=function(){return Object(l.jsx)("div",{children:"Cart Page"})},I=(n(44),function(){return Object(l.jsxs)("main",{role:"main",className:"container",children:[Object(l.jsx)(b,{numItems:5,total:210}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",component:w,exact:!0}),Object(l.jsx)(j.a,{path:"/re-store",component:w}),Object(l.jsx)(j.a,{path:"/cart",component:B})]})]})}),C=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(d.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)(N,{}):this.props.children}}]),n}(r.Component),D=function(){function e(){Object(u.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(d.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){t(e.data)}),700)}))}}]),e}(),L=n(23),A={books:[],loading:!0,error:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_REQUESTED":return{books:[],loading:!0,error:null};case"BOOKS_LOADED":return{books:t.payload,loading:!1,error:null};case"BOOKS_ERROR":return{books:[],loading:!1,error:t.payload};default:return e}},P=Object(L.a)(K),T=new D;s.a.render(Object(l.jsx)(a.a,{store:P,children:Object(l.jsx)(C,{children:Object(l.jsx)(p,{value:T,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(I,{})})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d2267620.chunk.js.map