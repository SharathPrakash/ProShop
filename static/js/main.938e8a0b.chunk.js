(this["webpackJsonpproxelo-ecommerce"]=this["webpackJsonpproxelo-ecommerce"]||[]).push([[0],{111:function(e,t,a){e.exports=a(133)},122:function(e,t,a){},123:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getItems",(function(){return N})),a.d(r,"getTotalItemsCount",(function(){return w})),a.d(r,"getItemsWithTotals",(function(){return _})),a.d(r,"getItemSubtotal",(function(){return k})),a.d(r,"getCartItemsId",(function(){return I}));var n={};a.r(n),a.d(n,"addItemToCart",(function(){return re})),a.d(n,"remoteItemFromCart",(function(){return ne})),a.d(n,"changeQuantity",(function(){return ie}));var i=a(0),c=a.n(i),o=a(10),l=a.n(o),s=a(18),m=a(207),u=a(205),d=a(84),p=a.n(d),g=a(85),E=a.n(g),y=a(86),f=a.n(y),v=a(98),h=Object(v.a)({palette:{type:"light",primary:p.a,secondary:E.a,error:{main:f.a.A400}}}),b=a(46),j=a(30),O=c.a.createContext(),C=O.Provider,x=O.Consumer,T=a(87),F=a(31),N=function(e){return e.cart.get("items")},w=Object(F.a)(N,(function(e){return e.reduce((function(e,t){return e+t.get("quantity")}),0)})),_=Object(F.a)([N],(function(e){return e.map((function(e){return e.set("total",e.get("price",0)*e.get("quantity"))}))})),k=Object(F.a)([_],(function(e){return e.reduce((function(e,t){return e+t.get("total")}),0)})),I=Object(F.a)(N,(function(e){return e.map((function(e){return e.get("id")}))})),R=a(188),S=a(183),A=a(186),P=a(185),B=a(43),D=a(187),M=a(181),L=a(211),W=a(89),q=a.n(W),U=Object(M.a)((function(){return Object(L.a)({root:{flexGrow:1,paddingBottom:"10px"},title:{flexGrow:1},titleLink:{color:"#fff",textDecoration:"none"},appbar:{position:"fixed",background:"#282c34"}})})),G=Object(s.b)((function(e){return{ordersCount:w(e)}}))((function(e){var t=e.ordersCount,a=U();return c.a.createElement("div",{className:a.root},c.a.createElement(S.a,{className:a.appbar},c.a.createElement(P.a,null,c.a.createElement(A.a,null,c.a.createElement(B.a,{variant:"h6",className:a.title},c.a.createElement(b.b,{to:"/",className:a.titleLink},"Proxelo")),c.a.createElement("div",null,c.a.createElement(D.a,{color:"inherit",component:b.b,to:"/cart"},c.a.createElement(R.a,{badgeContent:t,color:"secondary"},c.a.createElement(q.a,null))))))))})),J=a(21),Q=a(189),V=a(193),$=a(192),Y=a(190),X=a(191),z=a(101),H=a(194),K=a(135),Z=a(12),ee=function(e){return e.product.get("items")},te=Object(F.a)(ee,I,(function(e,t){return e.map((function(e){return e.set("inCart",-1!==t.indexOf(e.get("id")))}))})),ae=Object(F.a)(ee,(function(e){return function(t){return e.find((function(e){return e.get("id")===t}))}})),re=function(e){return function(t,a){var r=a();return t({type:"ADD_ITEM_TO_CART",payload:ae(r)(e)})}},ne=function(e){return function(t){return t({type:"REMOVE_ITEM_FROM_CART",payload:e})}};function ie(e,t){return{type:"CHANGE_QUANTITY_CART_ITEM",payload:{index:e,change:t}}}a(122);var ce=a(59),oe=Object(M.a)({root:{display:"flex ",width:"100%",overflowX:"auto",position:"fixed"},footerbar:{top:"auto",bottom:0},title:{flexGrow:1,align:"right"}}),le=Object(s.b)((function(e){return{items:_(e),subTotal:k(e)}}),(function(e,t){t.bookstoreService;return Object(Z.b)(Object(J.a)({},r),e)}))((function(e){e.items;var t=e.subTotal,a=(e.changeQuantity,e.remoteItemFromCart,oe()),r=c.a.useState(0),n=Object(ce.a)(r,2);n[0],n[1];return c.a.createElement("div",{className:a.root},c.a.createElement(S.a,{className:a.footerbar,color:"#282c34"},c.a.createElement(P.a,null,c.a.createElement(A.a,null,c.a.createElement(B.a,{variant:"h6",className:a.title},c.a.createElement("p",null,"Total : \u20b9",t," ")),c.a.createElement("div",null,c.a.createElement(B.a,{variant:"h6",className:a.title},c.a.createElement(K.a,{variant:"contained",color:"primary",href:"/checkout"},"Checkout")))))))})),se=Object(M.a)({root:{display:"flex ",width:"100%",overflowX:"auto"},table:{}}),me=Object(s.b)((function(e){return{items:_(e),subTotal:k(e)}}),(function(e,t){t.bookstoreService;return Object(Z.b)(Object(J.a)({},n),e)}))((function(e){var t=e.items,a=e.subTotal,r=e.changeQuantity,n=e.remoteItemFromCart,i=se();return t.size?c.a.createElement("div",null,c.a.createElement(z.a,{className:i.root},c.a.createElement(Q.a,{stickyHeader:!0,className:i.table,"aria-label":"simple table"},c.a.createElement(Y.a,null,c.a.createElement(X.a,null,c.a.createElement($.a,null,"Title"),c.a.createElement($.a,null,"Count"),c.a.createElement($.a,null,"Price"),c.a.createElement($.a,null,"Total"),c.a.createElement($.a,null))),c.a.createElement(V.a,null,t.map((function(e,t){return c.a.createElement(X.a,{key:e.get("id")},c.a.createElement($.a,{component:"th",scope:"row"},e.get("title")),c.a.createElement($.a,null,c.a.createElement(H.a,{orientation:"vertical","aria-label":"vertical outlined primary button group"},c.a.createElement(K.a,{onClick:function(){return r(t,1)}},"+"),c.a.createElement(K.a,{onClick:function(){return r(t,-1)}},"-"),c.a.createElement(K.a,{onClick:function(){return n(e.get("id"))}},"All"))),c.a.createElement($.a,null,e.get("quantity")," * \u20b9",e.get("price")),c.a.createElement($.a,null,"\u20b9",e.get("total")))})),c.a.createElement(X.a,null,c.a.createElement($.a,{colSpan:3,align:"right"},"Sub Total"),c.a.createElement($.a,{align:"right"},"\u20b9",a),c.a.createElement($.a,null))))),c.a.createElement(le,null)):c.a.createElement("p",null,"Cart is empty")})),ue=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"gridCss"},c.a.createElement(me,null)),c.a.createElement(le,null))},de=a(90),pe=a(91),ge=a(100),Ee=a(99),ye=a(195),fe=a(196),ve=a(197),he=a(93),be=a.n(he),je=a(92),Oe=a.n(je),Ce=Object(M.a)((function(e){return{card:{display:"flex ",width:"100%"},media:{width:"130px",height:"130px"},content:{textAlign:"left",padding:e.spacing(3),display:"flex"},divider:{margin:"".concat(e.spacing(3),"px 0")},details:{display:"flex",width:"100%"},controls:{display:"flex",alignItems:"center",paddingBottom:e.spacing(1)},cartIcon:{height:38,width:38,alignItems:"center"}}})),xe=function(e){var t=e.item,a=e.onAddedToCart,r=e.onRemoveFromCart,n=Ce();return c.a.createElement(ye.a,{className:n.card},c.a.createElement("div",{className:n.details},c.a.createElement(fe.a,{className:n.media,image:t.get("image"),title:""})),c.a.createElement("div",{className:n.details},c.a.createElement(ve.a,{className:n.content},c.a.createElement(B.a,{component:"h6",variant:"h6"},t.get("title"),c.a.createElement(B.a,{variant:"subtitle1",color:"textSecondary"},c.a.createElement("b",null,"Desc :",t.get("description")," "),c.a.createElement("br",null),c.a.createElement("b",null,"Price: $",t.get("price")),c.a.createElement("br",null))))),c.a.createElement("div",{className:n.controls},t.get("inCart")?c.a.createElement(D.a,{"aria-label":"Remove"},c.a.createElement(Oe.a,{className:n.cartIcon,onClick:r})):c.a.createElement(D.a,{"aria-label":"Add"},c.a.createElement(be.a,{className:n.cartIcon,onClick:a}))))},Te=a(199),Fe=a(198),Ne=Object(M.a)((function(e){return{progress:{margin:e.spacing(2)}}})),we=function(){var e=Ne();return c.a.createElement(Fe.a,{className:e.progress})},_e=function(e){return function(){return function(t){t({type:"GET_PRODUCT_REQUESTED"}),e.getProducts().then((function(e){return t({type:"GET_PRODUCT_LOADED",payload:e})})).catch((function(e){return t({type:"GET_PRODUCT_ERROR",payload:e})}))}}},ke=function(){return function(e){return function(t){return c.a.createElement(x,null,(function(a){return c.a.createElement(e,Object.assign({},t,{apiService:a}))}))}}},Ie=(a(123),function(e){Object(ge.a)(a,e);var t=Object(Ee.a)(a);function a(){return Object(de.a)(this,a),t.apply(this,arguments)}return Object(pe.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.items,a=void 0===t?[]:t,r=e.isLoading,n=void 0!==r&&r,i=e.errors,o=void 0===i?null:i,l=e.addItemToCart,s=e.remoteItemFromCart;return n?c.a.createElement(we,null):o?c.a.createElement("span",null,"errors"):c.a.createElement("div",{className:"gridCss"},c.a.createElement(Te.a,{container:!0,spacing:1},a.map((function(e,t){return c.a.createElement(Te.a,{key:e.get("id"),item:!0,xs:12,md:4},c.a.createElement(xe,{item:e,onAddedToCart:function(){l(e.get("id"))},onRemoveFromCart:function(){s(e.get("id"))}}))}))))}}]),a}(i.Component)),Re=Object(Z.d)(ke(),Object(s.b)((function(e){return{items:te(e),isLoading:e.product.get("isLoading"),errors:e.product.get("errors")}}),(function(e,t){var a=t.apiService;return Object(Z.b)(Object(J.a)({fetchBooks:_e(a)},n),e)})))(Ie),Se=function(){return c.a.createElement(Re,null)},Ae=a(26),Pe=a(94),Be={getProducts:function(){return new Promise((function(e,t){setTimeout((function(){Math.random()>10?t(new Error("Something bad happened")):e(Object(Ae.fromJS)(Pe))}),700)}))}},De=Object(J.a)({},Be,{},{}),Me=a(58),Le=a(95),We=a.n(Le),qe=a(96),Ue=a.n(qe),Ge=a(97),Je=Object(Ae.fromJS)({items:[]}),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"ADD_ITEM_TO_CART":return e.updateIn(["items"],(function(e){return e.push(r.set("quantity",1))}));case"REMOVE_ITEM_FROM_CART":return e.updateIn(["items"],(function(e){return e.filter((function(e){return e.get("id")!==r}))}));case"CHANGE_QUANTITY_CART_ITEM":return e.updateIn(["items",r.index,"quantity"],(function(e){var t=e+r.change;return t>1?t:1}));default:return e}},Ve=Object(Ae.fromJS)({items:[],isLoading:!0,errors:null}),$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"GET_PRODUCT_REQUESTED":return e.set("items",[]).set("isLoading",!0).set("errors",null);case"GET_PRODUCT_LOADED":return e.set("items",r).set("isLoading",!1).set("errors",null);case"GET_PRODUCT_ERROR":return e.set("items",[]).set("isLoading",!1).set("errors",r);default:return e}},Ye=Object(Z.c)({cart:Qe,product:$e}),Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,ze={transforms:[We()()],key:"root",storage:Ue.a,whitelist:["cart"]},He=Object(Me.persistReducer)(ze,Ye);var Ke=function(e){var t=Xe(Object(Z.a)(Ge.a))(Z.e)(He,e);return{store:t,persistor:Object(Me.persistStore)(t)}};var Ze=a(47),et=a(212),tt=a(206),at=a(210),rt=a(204),nt=a(208),it=a(201),ct=a(209);function ot(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Shipping address"),c.a.createElement(Te.a,{container:!0,spacing:3},c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"fname"})),c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"lname"})),c.a.createElement(Te.a,{item:!0,xs:12},c.a.createElement(nt.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"billing address-line1"})),c.a.createElement(Te.a,{item:!0,xs:12},c.a.createElement(nt.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"billing address-line2"})),c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2"})),c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})),c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code"})),c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(nt.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"billing country"})),c.a.createElement(Te.a,{item:!0,xs:12},c.a.createElement(it.a,{control:c.a.createElement(ct.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"}))))}function lt(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Payment method"),c.a.createElement(Te.a,{container:!0,spacing:3},c.a.createElement(Te.a,{item:!0,xs:12,md:6},c.a.createElement(nt.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0})),c.a.createElement(Te.a,{item:!0,xs:12,md:6},c.a.createElement(nt.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0})),c.a.createElement(Te.a,{item:!0,xs:12,md:6},c.a.createElement(nt.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0})),c.a.createElement(Te.a,{item:!0,xs:12,md:6},c.a.createElement(nt.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0})),c.a.createElement(Te.a,{item:!0,xs:12},c.a.createElement(it.a,{control:c.a.createElement(ct.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"}))))}var st=a(200),mt=a(202),ut=a(203),dt=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],pt=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],gt=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}],Et=Object(M.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function yt(){var e=Et();return c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{variant:"h6",gutterBottom:!0},"Order summary"),c.a.createElement(st.a,{disablePadding:!0},dt.map((function(t){return c.a.createElement(mt.a,{className:e.listItem,key:t.name},c.a.createElement(ut.a,{primary:t.name,secondary:t.desc}),c.a.createElement(B.a,{variant:"body2"},t.price))})),c.a.createElement(mt.a,{className:e.listItem},c.a.createElement(ut.a,{primary:"Total"}),c.a.createElement(B.a,{variant:"subtitle1",className:e.total},"$34.06"))),c.a.createElement(Te.a,{container:!0,spacing:2},c.a.createElement(Te.a,{item:!0,xs:12,sm:6},c.a.createElement(B.a,{variant:"h6",gutterBottom:!0,className:e.title},"Shipping"),c.a.createElement(B.a,{gutterBottom:!0},"John Smith"),c.a.createElement(B.a,{gutterBottom:!0},pt.join(", "))),c.a.createElement(Te.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},c.a.createElement(B.a,{variant:"h6",gutterBottom:!0,className:e.title},"Payment details"),c.a.createElement(Te.a,{container:!0},gt.map((function(e){return c.a.createElement(c.a.Fragment,{key:e.name},c.a.createElement(Te.a,{item:!0,xs:6},c.a.createElement(B.a,{gutterBottom:!0},e.name)),c.a.createElement(Te.a,{item:!0,xs:6},c.a.createElement(B.a,{gutterBottom:!0},e.detail)))}))))))}function ft(){return c.a.createElement(B.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(rt.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var vt=Object(M.a)((function(e){return{appBar:{position:"relative"},layout:Object(Ze.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(Ze.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),ht=["Shipping address","Payment details","Review your order"];var bt,jt=Object(s.b)((function(e){return{items:_(e),subTotal:k(e)}}),(function(e,t){t.bookstoreService;return Object(Z.b)(Object(J.a)({},r),e)}))((function(e){e.items,e.remoteItemFromCart;var t=vt(),a=c.a.useState(0),r=Object(ce.a)(a,2),n=r[0],i=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null),c.a.createElement("main",{className:t.layout},c.a.createElement(z.a,{className:t.paper},c.a.createElement(B.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),c.a.createElement(et.a,{activeStep:n,className:t.stepper},ht.map((function(e){return c.a.createElement(tt.a,{key:e},c.a.createElement(at.a,null,e))}))),c.a.createElement(c.a.Fragment,null,n===ht.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),c.a.createElement(B.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):c.a.createElement(c.a.Fragment,null,function(e){switch(e){case 0:return c.a.createElement(ot,null);case 1:return c.a.createElement(lt,null);case 2:return c.a.createElement(yt,null);default:throw new Error("Unknown step")}}(n),c.a.createElement("div",{className:t.buttons},0!==n&&c.a.createElement(K.a,{onClick:function(){i(n-1)},className:t.button},"Back"),c.a.createElement(K.a,{variant:"contained",color:"primary",onClick:function(){i(n+1)},className:t.button},n===ht.length-1?"Place order":"Next"))))),c.a.createElement(ft,null)))})),Ot=Ke((bt=window.__INITIAL_STATE__||{},Object.keys(bt).reduce((function(e,t){return e[t]=Object(Ae.fromJS)(bt[t]),e}),{}))),Ct=Ot.store,xt=Ot.persistor,Tt=function(){return c.a.createElement(s.a,{store:Ct},c.a.createElement(T.a,{loading:null,persistor:xt},c.a.createElement(m.a,{theme:h},c.a.createElement(u.a,null),c.a.createElement(C,{value:De},c.a.createElement(b.a,null,c.a.createElement(G,null),c.a.createElement(P.a,null,c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",component:Se,exact:!0}),c.a.createElement(j.a,{path:"/cart",component:ue}),c.a.createElement(j.a,{path:"/checkout",component:jt}))))))))};l.a.render(c.a.createElement(Tt,null),document.getElementById("root"))},94:function(e){e.exports=JSON.parse('[{"id":1,"title":"Brocolli","price":120,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg","category":"vegetables","description":"Fresh"},{"id":2,"title":"Cauliflower","price":60,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg","category":"vegetables","description":"Fresh"},{"id":3,"title":"Cucumber","price":48,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg","category":"vegetables","description":"From Farm"},{"id":4,"title":"Beetroot","price":32,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg","category":"vegetables","description":"From Farm"},{"id":5,"title":"Carrot","price":56,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg","category":"vegetables","description":"Fresh"},{"id":6,"title":"Tomato","price":16,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg","category":"vegetables","description":"Fresh"},{"id":7,"title":"Beans","price":82,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg","category":"vegetables","description":"From Farm"},{"id":8,"title":"Brinjal","price":35,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg","category":"vegetables","description":"Fresh"},{"id":9,"title":"Capsicum","price":60,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg","category":"vegetables","description":"From Farm"},{"id":10,"title":"Mushroom","price":75,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg","category":"vegetables","description":"Fresh"},{"id":11,"title":"Potato","price":22,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg","category":"vegetables","description":"From Farm"},{"id":12,"title":"Pumpkin","price":48,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg","category":"vegetables","description":"Fresh"},{"id":13,"title":"Corn","price":75,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg","category":"vegetables","description":"From Farm"},{"id":14,"title":"Onion","price":16,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg","category":"vegetables","description":"Fresh"},{"id":15,"title":"Apple","price":72,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg","category":"fruits","description":"From Farm"},{"id":16,"title":"Banana","price":45,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg","category":"fruits","description":"Fresh"},{"id":17,"title":"Grapes","price":60,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg","category":"fruits","description":"Fresh"},{"id":18,"title":"Mango","price":75,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg","category":"fruits","description":"From Farm"},{"id":19,"title":"Musk Melon","price":36,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg","category":"fruits","description":"Fresh"},{"id":20,"title":"Orange","price":75,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg","category":"fruits","description":"From Farm"},{"id":21,"title":"Pears","price":69,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg","category":"fruits","description":"From Farm"},{"id":22,"title":"Pomegranate","price":95,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg","category":"fruits","description":"From Farm"},{"id":23,"title":"Raspberry - 1/4 Kg","price":160,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg","category":"fruits","description":"From Farm"},{"id":24,"title":"Strawberry - 1/4 Kg","price":180,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg","category":"fruits","description":"Fresh"},{"id":25,"title":"Water Melon","price":28,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg","category":"fruits","description":"Fresh"},{"id":26,"title":"Almonds","price":200,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg","category":"nuts","description":"Fresh"},{"id":27,"title":"Pista","price":190,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg","category":"nuts","description":"Fresh"},{"id":28,"title":"Nuts Mixture","price":950,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg","category":"nuts","description":"Fresh"},{"id":29,"title":"Cashews","price":650,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg","category":"nuts","description":"New"},{"id":30,"title":"Walnuts","price":170,"image":"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg","category":"nuts","description":"new"}]')}},[[111,1,2]]]);
//# sourceMappingURL=main.938e8a0b.chunk.js.map