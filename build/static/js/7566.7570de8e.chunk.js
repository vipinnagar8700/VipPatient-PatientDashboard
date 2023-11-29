"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[7566],{33926:function(e,r,n){var a=n(1413),t=n(14161),o=n(57482),i=n(28789),c=n(80184);r.Z=function(e){var r=e.color,n=void 0===r?t.O9.blue:r,l=e.value,s=e.style,d=void 0===s?{}:s,u=(0,i.useTheme)().theme;return(0,c.jsx)(o.Z,{className:"progressbar",variant:"determinate","aria-label":l,value:l,sx:(0,a.Z)((0,a.Z)({backgroundColor:"light"===u?"#E4EAF0":t._4.highlight,height:6,borderRadius:2},d),{},{"& .MuiLinearProgress-bar":{backgroundColor:n,borderRadius:2}})})}},6378:function(e,r,n){var a=n(62014),t=n(25984),o=n(80184),i=function(e){var r=e.state,n=e.filter,t=e.handler,i=r.value===n.value;return(0,o.jsx)(a.zx,{className:i?"active":"",onClick:function(){return t({value:n.value,label:n.label})},children:n.label})};r.Z=function(e){var r=e.state,n=e.handler;return(0,o.jsx)(a.W2,{as:"ul",className:"gender",children:[{value:"all",label:"all"},{value:"male",label:"Men"},{value:"female",label:"Women"}].map((function(e){return(0,o.jsx)(a.ck,{children:(0,o.jsx)(i,{state:r,filter:e,handler:n})},(0,t.x0)(3))}))})}},89240:function(e,r,n){n.d(r,{Z:function(){return C}});var a=n(28789),t=n(14161),o=n(1413),i=n(65484),c=n.n(i),l=a.default.div.withConfig({componentId:"sc-sx80i2-0"})(["display:flex;gap:20px;.main{"," justify-content:space-between;.name{font-weight:500;}.age{font-size:",";}}.wrapper{flex-grow:1;}@media screen and (min-width:666.98px){flex-grow:1;&.actions{justify-content:flex-end;}.wrapper{flex-grow:unset;}}"],t.fU.col,t.iH[14]),s=a.default.div.withConfig({componentId:"sc-sx80i2-1"})([""," border-radius:8px;width:100%;padding:20px;gap:20px 0;background-color:",";transition:background-color var(--transition);cursor:pointer;&:hover{background-color:",";}.overview{display:flex;flex-wrap:wrap;gap:20px;}.main{width:calc(100% - 40px);.department{font-size:",";margin-top:2px;}}.rating,.booked{",";gap:7px;font-size:",";font-family:",";}.styled-rating{margin-top:-5px;}.contacts{display:flex;gap:20px;}button{transition:background-color var(--transition),color var(--transition);&.booking{font-size:",";font-family:",";border-radius:20px;padding:12px 16px;color:",";&:hover,&:focus{color:#fff;}}}button:not(.reminder){background-color:",";&:hover,&:focus{background-color:",";}}@media screen and (min-width:666.98px){flex-direction:row;flex-wrap:wrap;justify-content:flex-end;button.reminder{order:3;width:100%;}&.doctor,&.staff{justify-content:space-between;","{width:100%;}}}","{&.doctor .avatar{width:60px;}}","{align-items:center;gap:20px;button.reminder{order:unset;width:fit-content;}&.doctor,&.staff{justify-content:space-between;gap:40px;","{width:fit-content;}.overview{gap:40px;}}","{&.actions{flex-grow:unset;}}}","{.booked{width:275px;}}"],t.fU.col,c()("theme",{light:t.R2.highlight,dark:t._4.highlight}),c()("theme",{light:t.R2.bodyBg,dark:t._4.bodyBg}),t.iH[14],t.fU.col,t.iH[12],t.Rq.accent,t.iH[14],t.Rq.accent,c()("theme",{light:t.O9.blue,dark:"#fff"}),c()("theme",{light:t.R2.widgetBg,dark:t._4.widgetBg}),t.O9.blue,l,t.AV.tablet,t.AV.laptop,l,l,t.AV.desktop),d=n(52899),u=n(36862),f=n(80184),p=a.default.button.withConfig({componentId:"sc-sv6tfh-0"})(["display:flex;",";gap:8px;border-radius:20px;font-size:",";height:40px;width:40px;color:",";transition:color var(--transition),background-color var(--transition);.icon{color:",";transition:color var(--transition);}.text{display:none;}&:hover,&:focus{background-color:",";color:#fff;.icon{color:#fff;}}","{width:fit-content;padding:0 16px;.text{display:block;}}"],t.fU.center,t.iH[14],t.R2.text,t.O9.gray,t.O9.blue,t.AV.mobileL),m=function(e){var r=e.handler,n=e.user,a=void 0===n?"doctor":n,t={icon:"doctor"===a?"painmap":"plus-circle",text:"doctor"===a?"Case history":"Make an appointment"};return(0,f.jsxs)(p,{className:"btn-action",onClick:r,children:[(0,f.jsx)("i",{className:"icon icon-".concat(t.icon)})," ",(0,f.jsx)("span",{className:"text",children:t.text})]})},b=n(57770),h=a.default.button.withConfig({componentId:"sc-mafmmh-0"})(["display:flex;",";border-radius:20px;padding:10px 16px;color:#fff;font-size:",";gap:10px;background-color:",";span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}"],t.fU.center,t.iH[14],(function(e){return t.O9[b.U.find((function(r){return r.cat===e.reminder})).color]})),v=function(e){var r=e.reminder,n=e.handler,a=r.text,t=r.type;return(0,f.jsxs)(h,{className:"reminder",onClick:n,reminder:t,children:[(0,f.jsx)("i",{className:"icon icon-clock"}),(0,f.jsx)("span",{children:a})]})},g=n(33926),x=n(23058),w=n(71856),j=n(34909),y=n(1705),k=function(e){var r=e.type,n=e.data,a=n.firstName,t=n.lastName,i=n.online,c=n.avatar,p=function(e){var r=e.type;return(0,f.jsxs)(l,{children:[(0,f.jsx)(d.Z,{avatar:c,alt:"".concat(a," ").concat(t),online:i}),(0,f.jsxs)("div",{className:"main",children:[(0,f.jsxs)("span",{className:"name",children:[a," ",t]}),"patient"===r?(0,f.jsxs)("span",{className:"age",children:[n.age," years"]}):(0,f.jsx)("span",{className:"department",children:n.department.map((function(e){return e.label})).join(", ")})]})]})},b=function(){return(0,f.jsxs)("div",{className:"overview",children:[(0,f.jsxs)("div",{className:"rating",children:[(0,f.jsx)("span",{children:"Doctor rating"}),(0,f.jsx)(x.Z,{value:n.rating})]}),(0,f.jsxs)("div",{className:"booked",children:[(0,f.jsx)("span",{children:"Booked appointments"}),(0,f.jsx)(g.Z,{value:n.booked})]})]})},h=function(){switch(r){default:case"doctor":return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{type:r}),(0,f.jsx)(b,{}),(0,f.jsx)("button",{className:"booking",children:"Make an appointment"})]});case"staff":return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{type:r}),(0,f.jsx)(b,{}),(0,f.jsxs)("div",{className:"contacts",children:[(0,f.jsx)(u.Z,{icon:"comment-text",shape:"round",label:"Messages"}),(0,f.jsx)(u.Z,{icon:"dots",shape:"round",label:"Menu"})]})]});case"patient":return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{type:r}),n.reminder?(0,f.jsx)(v,{reminder:n.reminder}):null,(0,f.jsxs)(l,{className:"actions",children:[(0,f.jsx)("div",{className:"wrapper",children:(0,f.jsx)(m,{})}),(0,f.jsx)(u.Z,{icon:"comment-text",label:"Message",shape:"round",hasNotification:n.message}),(0,f.jsx)(u.Z,{icon:"phone",label:"Call",shape:"round"})]})]})}};return(0,f.jsx)(w.M,{children:(0,f.jsx)(s,(0,o.Z)((0,o.Z)({className:r,as:j.E.li},y.f),{},{children:(0,f.jsx)(h,{})}))})},Z=a.default.ul.withConfig({componentId:"sc-xjmjes-0"})(["",";gap:20px;margin:20px;"],t.fU.col),C=function(e){var r=e.arr,n=e.type,a=e.gender,t=e.deps,o=t||{search:"",category:""},i=o.search,c=o.category;return(0,f.jsx)(Z,{children:r.map((function(e,r){return(0,f.jsx)(k,{data:e,type:n},"".concat(e.id,"-").concat(a,"-").concat(i,"-").concat(c))}))})}},20760:function(e,r,n){var a=n(1413),t=n(45987),o=n(51899),i=n(80184),c=["children","style","sidePadding","elRef"];r.Z=function(e){var r=e.children,n=e.style,l=e.sidePadding,s=void 0!==l&&l,d=e.elRef,u=(0,t.Z)(e,c);return(0,i.jsx)(o.uT,(0,a.Z)((0,a.Z)({ref:d,sidePadding:s,style:n},u),{},{children:r}))}},57770:function(e,r,n){n.d(r,{U:function(){return a},z:function(){return t}});var a=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],t=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},84628:function(e,r,n){var a=n(29439),t=n(72791);r.Z=function(e){var r=(0,t.useState)({value:"all",label:"all"}),n=(0,a.Z)(r,2);return{genderArr:function(r){return e.filter((function(e){return e.gender===r.value}))},gender:n[0],setGender:n[1]}}},57482:function(e,r,n){n.d(r,{Z:function(){return _}});var a=n(30168),t=n(63366),o=n(87462),i=n(72791),c=n(28182),l=n(94419),s=n(52554),d=n(12065),u=n(14036),f=n(13967),p=n(66934),m=n(31402),b=n(75878),h=n(21217);function v(e){return(0,h.Z)("MuiLinearProgress",e)}(0,b.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g,x,w,j,y,k,Z,C,N,P,S,R,B=n(80184),I=["className","color","value","valueBuffer","variant"],M=(0,s.F4)(Z||(Z=g||(g=(0,a.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),z=(0,s.F4)(C||(C=x||(x=(0,a.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),q=(0,s.F4)(N||(N=w||(w=(0,a.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),L=function(e,r){return"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(r,"Bg")]:"light"===e.palette.mode?(0,d.$n)(e.palette[r].main,.62):(0,d._j)(e.palette[r].main,.5)},O=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r["color".concat((0,u.Z)(n.color))],r[n.variant]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:L(n,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})})),U=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,r){var n=e.ownerState;return[r.dashed,r["dashedColor".concat((0,u.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme,a=L(n,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,s.iv)(P||(P=j||(j=(0,a.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),q)),A=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,r){var n=e.ownerState;return[r.bar,r["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&r.bar1Indeterminate,"determinate"===n.variant&&r.bar1Determinate,"buffer"===n.variant&&r.bar1Buffer]}})((function(e){var r=e.ownerState,n=e.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(n.vars||n).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===r.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,s.iv)(S||(S=y||(y=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),M)})),F=(0,p.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,r){var n=e.ownerState;return[r.bar,r["barColor".concat((0,u.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&r.bar2Indeterminate,"buffer"===n.variant&&r.bar2Buffer]}})((function(e){var r=e.ownerState,n=e.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(n.vars||n).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:L(n,r.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,s.iv)(R||(R=k||(k=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),z)})),_=i.forwardRef((function(e,r){var n=(0,m.Z)({props:e,name:"MuiLinearProgress"}),a=n.className,i=n.color,s=void 0===i?"primary":i,d=n.value,p=n.valueBuffer,b=n.variant,h=void 0===b?"indeterminate":b,g=(0,t.Z)(n,I),x=(0,o.Z)({},n,{color:s,variant:h}),w=function(e){var r=e.classes,n=e.variant,a=e.color,t={root:["root","color".concat((0,u.Z)(a)),n],dashed:["dashed","dashedColor".concat((0,u.Z)(a))],bar1:["bar","barColor".concat((0,u.Z)(a)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat((0,u.Z)(a)),"buffer"===n&&"color".concat((0,u.Z)(a)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return(0,l.Z)(t,v,r)}(x),j=(0,f.Z)(),y={},k={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==d){y["aria-valuenow"]=Math.round(d),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var Z=d-100;"rtl"===j.direction&&(Z=-Z),k.bar1.transform="translateX(".concat(Z,"%)")}else 0;if("buffer"===h)if(void 0!==p){var C=(p||0)-100;"rtl"===j.direction&&(C=-C),k.bar2.transform="translateX(".concat(C,"%)")}else 0;return(0,B.jsxs)(O,(0,o.Z)({className:(0,c.default)(w.root,a),ownerState:x,role:"progressbar"},y,{ref:r},g,{children:["buffer"===h?(0,B.jsx)(U,{className:w.dashed,ownerState:x}):null,(0,B.jsx)(A,{className:w.bar1,ownerState:x,style:k.bar1}),"determinate"===h?null:(0,B.jsx)(F,{className:w.bar2,ownerState:x,style:k.bar2})]}))}))}}]);
//# sourceMappingURL=7566.7570de8e.chunk.js.map