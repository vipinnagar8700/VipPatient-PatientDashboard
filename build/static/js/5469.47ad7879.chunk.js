"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[5469],{15907:function(e,n,o){o.r(n);var i=o(1413),t=o(29439),l=o(75934),r=o(72791),a=o(57621),s=o(39504),d=o(20890),c=o(64554),u=o(94925),h=o(61889),x=o(36314),v=o(94721),p=o(11087),j=o(57689),g=o(93517),m=(o(13426),o(61316)),f=o(63399),Z=(o(71508),o(35498),o(77696),o(32299),o(43513)),S=o(75181),P=(o(85106),o(79174)),y=o(79431),O=o(61856),b=o(83255),C=o(96322),K=o(80184);n.default=function(){var e,n,o,T=(0,f.Ds)().enqueueSnackbar,k=(0,r.useState)(!1),D=(0,t.Z)(k,2),W=D[0],A=D[1],w=(0,r.useState)([]),G=(0,t.Z)(w,2),I=G[0],z=G[1],E=(0,r.useState)(""),M=(0,t.Z)(E,2),N=(M[0],M[1]),J=(0,r.useState)(!1),R=(0,t.Z)(J,2),L=(R[0],R[1]),F=window.matchMedia("(max-width: 1038.98px)").matches,_=(0,r.useState)(0),V=(0,t.Z)(_,2),H=V[0],U=V[1];window.addEventListener("resize",(function(){F&&(L(!1),N(""))}));var B=(0,r.useState)([]),q=(0,t.Z)(B,2),Y=q[0],$=q[1];(0,r.useEffect)((function(){var e=(0,m.T)();e&&e.then((function(e){var n;console.log(null===e||void 0===e?void 0:e.result,"All Checkout Data!A"),z(null===e||void 0===e?void 0:e.result,"All Checkout Data!"),$(null===e||void 0===e||null===(n=e.result)||void 0===n?void 0:n[0])}))}),[H]),console.log(Y,"8888888888888888888888888888888888888888888");var Q=[{name:"Image",selector:function(e){return(0,K.jsx)("img",{style:{width:"60px",height:"40px",borderRadius:4,color:"white",fontWeight:600},src:"".concat(C.Z,"/public/uploads/images/").concat(e.img),alt:"Image",sx:{fontWeight:300}})},sortable:!0},{name:"Product Name",selector:function(e){return e.name},sortable:!0},{name:"Dosage",selector:function(e){return e.thc_dosage},sortable:!0},{name:"CBD Dosage",selector:function(e){return e.cbd_dosage},sortable:!0},{name:"Quantity",selector:function(e){return e.quantity},sortable:!0},{name:"Price",selector:function(e){return e.amount},sortable:!0},{name:"Actions",sortable:!0,cell:function(e){return(0,K.jsx)("button",{style:{width:"80px",backgroundColor:"#FD0C39",height:"40px",borderRadius:4,color:"white",fontWeight:600},sx:{fontWeight:300},children:(0,K.jsx)(p.rU,{to:"#",onClick:function(n){return function(e){var n=(0,m.B7)(e);n&&n.then((function(e){console.log(e),T("Data Successfully Deleted!",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"}}),U(H+1)})).catch((function(e){T(e,"error to Delete data!",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}))}(e.id)},children:"Delete"})})},button:!0,minWidth:"200px"}],X={columns:Q,data:I.map((function(e){var n,o,i,t,l;return{id:(null===e||void 0===e?void 0:e.id)||"",img:(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.img)||"",name:(null===e||void 0===e||null===(o=e.product)||void 0===o?void 0:o.product_name)||"",thc_dosage:(null===e||void 0===e||null===(i=e.product)||void 0===i?void 0:i.thc_dosage)||"",cbd_dosage:(null===e||void 0===e||null===(t=e.product)||void 0===t?void 0:t.cbd_dosage)||"",amount:(null===e||void 0===e||null===(l=e.product)||void 0===l?void 0:l.amount)||"",quantity:(null===e||void 0===e?void 0:e.quantity)||""}}))},ee=(0,j.UO)().p_id,ne=null===Y||void 0===Y?void 0:Y.id;console.log(ne,"000000000000000000000000000000000000000000000000000");var oe=(0,r.useState)(!1),ie=(0,t.Z)(oe,2),te=ie[0],le=ie[1];console.log(te,"EditProfileData!");var re=te.name,ae=te.mname,se=te.lname,de=te.about,ce=te.email,ue=te.address,he=te.address2,xe=te.city,ve=te.dob,pe=te.gender,je=te.id,ge=te.img,me=te.phone,fe=te.pincode,Ze=te.state;console.log(re,ae,se,de,ce,ue,he,xe,ve,pe,je,ge,me,fe,Ze,"EEEEEEEEEEEEEEE");var Se=(0,r.useState)(!1),Pe=(0,t.Z)(Se,2),ye=Pe[0],Oe=Pe[1],be=(0,r.useState)(!1),Ce=(0,t.Z)(be,2),Ke=Ce[0],Te=Ce[1];(0,r.useEffect)((function(){var e=(0,m.MD)(ee);e&&e.then((function(e){A(null===e||void 0===e?void 0:e.results)}));var n=(0,m.R5)();n&&n.then((function(e){le(null===e||void 0===e?void 0:e.results),console.log(null===e||void 0===e?void 0:e.results,"lkjhgfd")})),ke(),De()}),[]);var ke=function(){var e=(0,m.bu)();e&&e.then((function(e){console.log(null===e||void 0===e?void 0:e.result,"Discount Data!"),Oe(null===e||void 0===e?void 0:e.result)}))},De=function(){var e=(0,m.ye)();e&&e.then((function(e){console.log(null===e||void 0===e?void 0:e.result,"DeliveryData Data!"),Te(e)}))},We=(0,r.useState)(!1),Ae=(0,t.Z)(We,2),we=Ae[0],Ge=Ae[1],Ie=(0,r.useState)(!1),ze=(0,t.Z)(Ie,2),Ee=ze[0],Me=ze[1],Ne=(0,r.useState)(!1),Je=(0,t.Z)(Ne,2),Re=Je[0],Le=Je[1],Fe=(0,r.useState)(!1),_e=(0,t.Z)(Fe,2),Ve=_e[0],He=_e[1],Ue=(0,r.useState)(!1),Be=(0,t.Z)(Ue,2),qe=Be[0],Ye=Be[1];console.log(W,"SSSSSSSSSSSSSSSSSSSS");var $e=null===I||void 0===I?void 0:I.map((function(e){var n;return null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.company_id}));console.log($e,"KKKKKKKKKKKKKKKKKKK");var Qe=null===I||void 0===I?void 0:I.map((function(e){return null===e||void 0===e?void 0:e.product_id}));console.log(Qe,"KKKKKKKKKKKKKKKKKKK");var Xe=null===I||void 0===I?void 0:I.map((function(e){var n;return null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.amount}));console.log(Xe,"TTTTTTTTTTTTTTTTTTTTTTTTTTTTT");var en=Xe.reduce((function(e,n){return e+parseFloat(n)}),0);console.log(en,"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo");var nn=null===I||void 0===I?void 0:I.map((function(e){var n=e.product;return e.quantity*parseFloat(n.amount)}));console.log(nn,"Total Amounts for Each Product");var on=nn.reduce((function(e,n){return e+n}),0);console.log(on,"Total Amount for All Products");var tn=null===Ke||void 0===Ke||null===(e=Ke.result)||void 0===e?void 0:e.amount;console.log(tn,"GGGGGGGGGGGGGGGGGGGGGGGGGGGGGg");var ln=null===I||void 0===I?void 0:I.id;console.log(ln,"JJJJJJJJJJJJJJJJJJjj");var rn=on-tn;console.log(rn,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");var an=(0,r.useState)(!1),sn=(0,t.Z)(an,2),dn=(sn[0],sn[1],(0,r.useState)(!1)),cn=(0,t.Z)(dn,2),un=cn[0],hn=cn[1];return(0,K.jsxs)("div",{children:[un&&(0,K.jsx)(c.Z,{sx:{zIndex:"9999999",position:"fixed",top:0,left:0,width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"rgba(0,0,0,.4)"},children:(0,K.jsxs)(c.Z,{sx:{minWidth:"500px",maxWidth:"500px",p:2,bgcolor:"#fff"},children:[(0,K.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,K.jsx)(c.Z,{children:"Add Coupon"}),(0,K.jsx)(c.Z,{onClick:function(){hn(!1)},sx:{fontWeight:900},children:"x"})]}),(0,K.jsx)(d.Z,{sx:{mt:1},children:"Public Coupon Codes:"}),ye&&(null===ye||void 0===ye?void 0:ye.map((function(e,n){return(0,K.jsxs)(d.Z,{mt:.5,sx:{fontSize:14},children:[e.code,"($ ",e.discount,".00)-Description:-",e.description]},n)}))),(0,K.jsx)(c.Z,{sx:{mt:.2},children:(0,K.jsxs)("form",{children:[(0,K.jsx)(u.Z,{htmlFor:"name",children:"Coupon code"}),(0,K.jsx)(y.Z,{variant:"outlined",fullWidth:!0,margin:"normal",size:"small"}),(0,K.jsx)(d.Z,{sx:{fontSize:10},children:"If your coupon code is valid, it will be applied to your order after it is submitted."}),(0,K.jsx)(h.ZP,{container:!0,children:(0,K.jsx)(h.ZP,{item:!0,xs:12,children:(0,K.jsx)(x.Z,{mt:1,children:(0,K.jsx)("button",{p:2,style:{width:"150px",backgroundColor:"#2BAA27",height:"40px",borderRadius:4,color:"white",fontWeight:400},variant:"contained",color:"success",sx:{width:"100%"},children:"Apply Coupon "})})})})]})})]})}),(0,K.jsx)(O.Z,{}),(0,K.jsx)(b.Z,{}),(0,K.jsx)(c.Z,{mt:2,children:(0,K.jsx)(l.Z,{})}),(0,K.jsx)(c.Z,{mt:3,children:(0,K.jsxs)(a.Z,{sx:{maxWidth:1145},children:[(0,K.jsx)(a.Z,{sx:{maxWidth:1100,maxHeight:40,margin:3,padding:1},children:(0,K.jsx)("div",{role:"presentation",children:(0,K.jsxs)(g.Z,{"aria-label":"breadcrumb",children:[(0,K.jsx)(p.rU,{underline:"hover",color:"inherit",to:"/ShopOnline",children:"Shop online"}),(0,K.jsx)(p.rU,{underline:"hover",color:"inherit",children:"Demo Provider"}),(0,K.jsx)(p.rU,{underline:"hover",color:"text.primary",to:"#","aria-current":"page"})]})})}),(0,K.jsxs)(s.Z,{mb:2,children:[(0,K.jsx)(h.ZP,{container:!0,children:(0,K.jsx)(h.ZP,{item:!0,xs:6,children:(0,K.jsx)(d.Z,{sx:{fontSize:18,fontWeight:400},gutterBottom:!0,children:"My Shopping Cart"})})}),(0,K.jsx)(a.Z,{sx:{minWidth:1145,"@media screen and (max-width: 1400px)":{minWidth:"100%"},backgroundColor:"#F1F5F8"},children:(0,K.jsxs)(s.Z,{children:[(0,K.jsxs)(d.Z,{sx:{fontSize:16,fontWeight:300},color:"text.secondary",gutterBottom:!0,children:[I.length," total Product Added"]}),(0,K.jsx)("div",{className:"Order Page",children:(0,K.jsx)(S.Z,(0,i.Z)((0,i.Z)({},X),{},{children:(0,K.jsx)(Z.ZP,{noHeader:!0,defaultSortField:"id",defaultSortAsc:!1,pagination:!0,highlightOnHover:!0})}))})]})})]})]})}),(0,K.jsx)(c.Z,{mt:2,mb:5,children:(0,K.jsxs)(h.ZP,{container:!0,children:[(0,K.jsx)(h.ZP,{items:!0,xs:12,md:6,p:1,children:(0,K.jsx)(a.Z,{sx:{backgroundColor:"#fff"},children:(0,K.jsxs)(s.Z,{children:[(0,K.jsx)(d.Z,{sx:{fontSize:16,fontWeight:600},color:"text.secondary",gutterBottom:!0,children:"Delivery Options"}),(0,K.jsx)(P.Z,{style:{marginRight:3},checked:we,onChange:function(e){Ge(e.target.checked)}}),(null===Ke||void 0===Ke||null===(n=Ke.result)||void 0===n?void 0:n.name)||"",(0,K.jsx)(P.Z,{style:{marginRight:3},checked:qe,onChange:function(e){Ye(e.target.checked)}}),"In Store Pickup",(0,K.jsx)(P.Z,{style:{marginRight:3},checked:Ee,onChange:function(e){Me(e.target.checked)}}),"flate rate delivery",(0,K.jsxs)("span",{style:{color:"green",marginLeft:4},children:[" $ ",null===Ke||void 0===Ke||null===(o=Ke.result)||void 0===o?void 0:o.amount,".00"]}),(0,K.jsx)(d.Z,{sx:{fontSize:16,fontWeight:600},children:"Additional Delivery Information"}),(0,K.jsx)(u.Z,{children:"First name"}),(0,K.jsx)(y.Z,{placeholder:"First name",size:"small",fullWidth:!0,value:re,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{name:e.target.value}))}}),(0,K.jsx)(u.Z,{children:"last name"}),(0,K.jsx)(y.Z,{placeholder:"last name",size:"small",fullWidth:!0,value:se,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{lname:e.target.value}))}}),(0,K.jsx)(u.Z,{children:"Address1"}),(0,K.jsx)(y.Z,{placeholder:" Address1",size:"small",fullWidth:!0,value:ue,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{address:e.target.value}))}}),(0,K.jsx)(u.Z,{children:"Address2 "}),(0,K.jsx)(y.Z,{placeholder:" Address2",size:"small",fullWidth:!0,value:he,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{address2:e.target.value}))}}),(0,K.jsx)(u.Z,{children:"City"}),(0,K.jsx)(y.Z,{placeholder:"City ",size:"small",fullWidth:!0,value:xe,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{city:e.target.value}))}}),(0,K.jsx)(u.Z,{id:"demo-simple-select-label",children:"State"}),(0,K.jsxs)("select",{placeholder:te.state,style:{width:"100%",padding:10,fontSize:15,borderRadius:4},value:te.state,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{state:e.target.value}))},size:"small",name:"state",class:"form-control",InputLabelProps:{style:{color:"blue"}},children:[(0,K.jsx)("option",{value:"AL",children:te.state}),(0,K.jsx)("option",{value:"AL",children:"Alabama"}),(0,K.jsx)("option",{value:"AK",children:"Alaska"}),(0,K.jsx)("option",{value:"AZ",children:"Arizona"}),(0,K.jsx)("option",{value:"AR",children:"Arkansas"}),(0,K.jsx)("option",{value:"CA",children:"California"}),(0,K.jsx)("option",{value:"CO",children:"Colorado"}),(0,K.jsx)("option",{value:"CT",children:"Connecticut"}),(0,K.jsx)("option",{value:"DE",children:"Delaware"}),(0,K.jsx)("option",{value:"DC",children:"District Of Columbia"}),(0,K.jsx)("option",{value:"FL",children:"Florida"}),(0,K.jsx)("option",{value:"GA",children:"Georgia"}),(0,K.jsx)("option",{value:"HI",children:"Hawaii"}),(0,K.jsx)("option",{value:"ID",children:"Idaho"}),(0,K.jsx)("option",{value:"IL",children:"Illinois"}),(0,K.jsx)("option",{value:"IN",children:"Indiana"}),(0,K.jsx)("option",{value:"IA",children:"Iowa"}),(0,K.jsx)("option",{value:"KS",children:"Kansas"}),(0,K.jsx)("option",{value:"KY",children:"Kentucky"}),(0,K.jsx)("option",{value:"LA",children:"Louisiana"}),(0,K.jsx)("option",{value:"ME",children:"Maine"}),(0,K.jsx)("option",{value:"MD",children:"Maryland"}),(0,K.jsx)("option",{value:"MA",children:"Massachusetts"}),(0,K.jsx)("option",{value:"MI",children:"Michigan"}),(0,K.jsx)("option",{value:"MN",children:"Minnesota"}),(0,K.jsx)("option",{value:"MS",children:"Mississippi"}),(0,K.jsx)("option",{value:"MO",children:"Missouri"}),(0,K.jsx)("option",{value:"MT",children:"Montana"}),(0,K.jsx)("option",{value:"NE",children:"Nebraska"}),(0,K.jsx)("option",{value:"NV",children:"Nevada"}),(0,K.jsx)("option",{value:"NH",children:"New Hampshire"}),(0,K.jsx)("option",{value:"NJ",children:"New Jersey"}),(0,K.jsx)("option",{value:"NM",children:"New Mexico"}),(0,K.jsx)("option",{value:"NY",children:"New York"}),(0,K.jsx)("option",{value:"NC",children:"North Carolina"}),(0,K.jsx)("option",{value:"ND",children:"North Dakota"}),(0,K.jsx)("option",{value:"OH",children:"Ohio"}),(0,K.jsx)("option",{value:"OK",children:"Oklahoma"}),(0,K.jsx)("option",{value:"OR",children:"Oregon"}),(0,K.jsx)("option",{value:"PA",children:"Pennsylvania"}),(0,K.jsx)("option",{value:"PR",children:"Puerto Rico"}),(0,K.jsx)("option",{value:"RI",children:"Rhode Island"}),(0,K.jsx)("option",{value:"SC",children:"South Carolina"}),(0,K.jsx)("option",{value:"SD",children:"South Dakota"}),(0,K.jsx)("option",{value:"TN",children:"Tennessee"}),(0,K.jsx)("option",{value:"TX",children:"Texas"}),(0,K.jsx)("option",{value:"UT",children:"Utah"}),(0,K.jsx)("option",{value:"VT",children:"Vermont"}),(0,K.jsx)("option",{value:"VI",children:"Virgin Islands"}),(0,K.jsx)("option",{value:"VA",children:"Virginia"}),(0,K.jsx)("option",{value:"WA",children:"Washington"}),(0,K.jsx)("option",{value:"WV",children:"West Virginia"}),(0,K.jsx)("option",{value:"WI",children:"Wisconsin"}),(0,K.jsx)("option",{value:"WY",children:"Wyoming"})]}),(0,K.jsx)(u.Z,{children:"Postal code"}),(0,K.jsx)(y.Z,{placeholder:"Postal ",size:"small",fullWidth:!0,value:fe,onChange:function(e){le((0,i.Z)((0,i.Z)({},te),{},{pincode:e.target.value}))}})]})})}),(0,K.jsx)(h.ZP,{items:!0,xs:12,md:6,p:1,children:(0,K.jsx)(a.Z,{sx:{backgroundColor:"#fff"},children:(0,K.jsxs)(s.Z,{children:[(0,K.jsx)(d.Z,{sx:{fontSize:16,fontWeight:600},color:"text.secondary",gutterBottom:!0,children:"Order Details"}),(0,K.jsxs)(d.Z,{color:"success",mt:1.5,children:["Sub-Total:",(0,K.jsxs)("span",{style:{color:"green",marginLeft:42},children:["$",on,".00"]})]}),(0,K.jsx)(v.Z,{}),(0,K.jsxs)(d.Z,{mt:1.5,children:["Delivery Costs:",(0,K.jsxs)("span",{style:{color:"green",marginLeft:42},children:["$",tn,".00"]})]}),(0,K.jsx)(v.Z,{}),(0,K.jsxs)(d.Z,{mt:1.5,children:["Discounts: ",(0,K.jsx)(p.rU,{onClick:function(){hn(!0)},sx:{marginLeft:50,TextDecoder:"underline"},children:" Have a Coupon?"})]}),(0,K.jsx)(v.Z,{}),(0,K.jsxs)(d.Z,{mt:1.5,color:"success",children:["Total Due:",(0,K.jsxs)("span",{style:{color:"green",marginLeft:42},children:["$",rn,".00"]})]}),(0,K.jsx)(d.Z,{mt:3,sx:{fontSize:15,fontWeight:600},children:"Payment Information"}),(0,K.jsxs)(d.Z,{mt:1.5,sx:{fontSize:15,fontWeight:600},children:[(0,K.jsx)(P.Z,{checked:Re,onChange:function(e){Le(e.target.checked)}})," Pay Online"]}),(0,K.jsx)(d.Z,{mt:1.5,sx:{fontSize:14},children:"Pay quickly and easily using your online account. You currently have $0.00 in your account. If you do not have enough funds to complete this order, you will be taken to a page where you can add funds to your account using a credit or debit card, or bank account transfer."}),(0,K.jsxs)(d.Z,{mt:1.5,sx:{fontSize:15,fontWeight:600},children:[(0,K.jsx)(P.Z,{checked:Ve,onChange:function(e){He(e.target.checked)}})," Pay With Cash"]}),(0,K.jsx)(d.Z,{mt:1.5,children:"Pay in person with cash. You will not receive rewards points for orders placed with cash."}),(0,K.jsx)("button",{style:{marginTop:14,borderRadius:8,backgroundColor:"green",color:"white",padding:10},onClick:function(e){e.preventDefault();try{var n=(0,m.k)(je,ee,re,se,ue,he,xe,Ze,fe,en,we,Ee,Re,Ve,qe,ne);n.then((function(e){console.log(e,"thtrtrer;ojgsrdbehx"),alert(null===e||void 0===e?void 0:e.messege),U(H+1)})),console.log(n,"Data Updated Successfully")}catch(o){console.error("Error occurred while updating data:",o)}},children:"Submit Order"})]})})})]})})]})}}}]);
//# sourceMappingURL=5469.47ad7879.chunk.js.map