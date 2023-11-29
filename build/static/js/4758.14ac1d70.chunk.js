"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[4758],{34758:function(e,t,o){o.d(t,{Z:function(){return W}});var n=o(87462),r=o(63366),i=o(29439),s=o(72791),p=o(6117),a=o(62876),l=o(84913),c=o(40761),u=o(71217),f=o(60545),d=o(19224),m=o(43120),v=o(39265);var Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];(0,v.Re)(r)&&(0,m.Z)(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});(0,v.Re)(n)&&(0,m.Z)(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},P=o(5934),b=o(95468),y=o(29790),h=o(78702),O=o(41668),R=[u.Z,f.Z,d.Z,Z,P.Z,b.Z,y.Z,h.Z,O.Z],w=(0,c.kZ)({defaultModifiers:R}),E=o(94419),k=o(96174),j=o(21217);function M(e){return(0,j.Z)("MuiPopper",e)}(0,o(75878).Z)("MuiPopper",["root"]);var x=o(57271),S=o(6826),T=o(80184),g=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],A=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function I(e){return"function"===typeof e?e():e}function B(e){return void 0!==e.nodeType}var C={},U=s.forwardRef((function(e,t){var o,l=e.anchorEl,c=e.children,u=e.direction,f=e.disablePortal,d=e.modifiers,m=e.open,v=e.placement,Z=e.popperOptions,P=e.popperRef,b=e.slotProps,y=void 0===b?{}:b,h=e.slots,O=void 0===h?{}:h,R=e.TransitionProps,k=(0,r.Z)(e,g),j=s.useRef(null),A=(0,p.Z)(j,t),B=s.useRef(null),C=(0,p.Z)(B,P),U=s.useRef(C);(0,a.Z)((function(){U.current=C}),[C]),s.useImperativeHandle(P,(function(){return B.current}),[]);var V=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,u),_=s.useState(V),q=(0,i.Z)(_,2),F=q[0],H=q[1],N=s.useState(I(l)),W=(0,i.Z)(N,2),z=W[0],D=W[1];s.useEffect((function(){B.current&&B.current.forceUpdate()})),s.useEffect((function(){l&&D(I(l))}),[l]),(0,a.Z)((function(){if(z&&m){var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;H(t.placement)}}];null!=d&&(e=e.concat(d)),Z&&null!=Z.modifiers&&(e=e.concat(Z.modifiers));var t=w(z,j.current,(0,n.Z)({placement:V},Z,{modifiers:e}));return U.current(t),function(){t.destroy(),U.current(null)}}}),[z,f,d,m,Z,V]);var G={placement:F};null!==R&&(G.TransitionProps=R);var J=(0,E.Z)({root:["root"]},(0,S.T)(M)),K=null!=(o=O.root)?o:"div",L=(0,x.Z)({elementType:K,externalSlotProps:y.root,externalForwardedProps:k,additionalProps:{role:"tooltip",ref:A},ownerState:e,className:J.root});return(0,T.jsx)(K,(0,n.Z)({},L,{children:"function"===typeof c?c(G):c}))})),V=s.forwardRef((function(e,t){var o,p=e.anchorEl,a=e.children,c=e.container,u=e.direction,f=void 0===u?"ltr":u,d=e.disablePortal,m=void 0!==d&&d,v=e.keepMounted,Z=void 0!==v&&v,P=e.modifiers,b=e.open,y=e.placement,h=void 0===y?"bottom":y,O=e.popperOptions,R=void 0===O?C:O,w=e.popperRef,E=e.style,j=e.transition,M=void 0!==j&&j,x=e.slotProps,S=void 0===x?{}:x,g=e.slots,V=void 0===g?{}:g,_=(0,r.Z)(e,A),q=s.useState(!0),F=(0,i.Z)(q,2),H=F[0],N=F[1];if(!Z&&!b&&(!M||H))return null;if(c)o=c;else if(p){var W=I(p);o=W&&B(W)?(0,l.Z)(W).body:(0,l.Z)(null).body}var z=b||!Z||M&&!H?void 0:"none",D=M?{in:b,onEnter:function(){N(!1)},onExited:function(){N(!0)}}:void 0;return(0,T.jsx)(k.Z,{disablePortal:m,container:o,children:(0,T.jsx)(U,(0,n.Z)({anchorEl:p,direction:f,disablePortal:m,modifiers:P,ref:t,open:M?!H:b,placement:h,popperOptions:R,popperRef:w,slotProps:S,slots:V},_,{style:(0,n.Z)({position:"fixed",top:0,left:0,display:z},E),TransitionProps:D,children:a}))})})),_=o(69120),q=o(66934),F=o(31402),H=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],N=(0,q.ZP)(V,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),W=s.forwardRef((function(e,t){var o,i=(0,_.Z)(),s=(0,F.Z)({props:e,name:"MuiPopper"}),p=s.anchorEl,a=s.component,l=s.components,c=s.componentsProps,u=s.container,f=s.disablePortal,d=s.keepMounted,m=s.modifiers,v=s.open,Z=s.placement,P=s.popperOptions,b=s.popperRef,y=s.transition,h=s.slots,O=s.slotProps,R=(0,r.Z)(s,H),w=null!=(o=null==h?void 0:h.root)?o:null==l?void 0:l.Root,E=(0,n.Z)({anchorEl:p,container:u,disablePortal:f,keepMounted:d,modifiers:m,open:v,placement:Z,popperOptions:P,popperRef:b,transition:y},R);return(0,T.jsx)(N,(0,n.Z)({as:a,direction:null==i?void 0:i.direction,slots:{root:w},slotProps:null!=O?O:c},E,{ref:t}))}))}}]);
//# sourceMappingURL=4758.14ac1d70.chunk.js.map