"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[948],{30948:function(t,e,r){r.d(e,{HH:function(){return E}});var n,a=r(72791);function u(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r}function o(){}function i(t){return!!(t||"").match(/\d/)}function f(t){return null===t||void 0===t}function l(t){return f(t)||function(t){return"number"===typeof t&&isNaN(t)}(t)||"number"===typeof t&&!isFinite(t)}function c(t,e){return Array(e+1).join(t)}function s(t){var e=t+"",r="-"===e[0]?"-":"";r&&(e=e.substring(1));var n=e.split(/[eE]/g),a=n[0],u=n[1];if(!(u=Number(u)))return r+a;var o=1+u,i=(a=a.replace(".","")).length;return o<0?a="0."+c("0",Math.abs(o))+a:o>=i?a+=c("0",o-i):a=(a.substring(0,o)||"0")+"."+a.substring(o),r+a}function v(t,e){if(t.value=t.value,null!==t){if(t.createTextRange){var r=t.createTextRange();return r.move("character",e),r.select(),!0}return t.selectionStart||0===t.selectionStart?(t.focus(),t.setSelectionRange(e,e),!0):(t.focus(),!1)}}function d(t,e){for(var r=0,n=0,a=t.length,u=e.length;t[r]===e[r]&&r<a;)r++;for(;t[a-1-n]===e[u-1-n]&&u-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:u-n}}}function m(t){return Math.max(t.selectionStart,t.selectionEnd)}function g(t){return{from:{start:0,end:0},to:{start:0,end:t.length},lastValue:""}}function p(t,e){return void 0===t&&(t=" "),"string"===typeof t?t:t[e]||" "}function h(t,e,r,n){var a,u,o,i=t.length;if(a=e,u=0,o=i,e=Math.min(Math.max(a,u),o),"left"===n){for(;e>=0&&!r[e];)e--;-1===e&&(e=r.indexOf(!0))}else{for(;e<=i&&!r[e];)e++;e>i&&(e=r.lastIndexOf(!0))}return-1===e&&(e=i),e}function y(t){for(var e=Array.from({length:t.length+1}).map((function(){return!0})),r=0,n=e.length;r<n;r++)e[r]=Boolean(i(t[r])||i(t[r-1]));return e}function b(t,e,r,n,u,i){void 0===i&&(i=o);var c=function(t){var e=(0,a.useRef)(t);e.current=t;var r=(0,a.useRef)((function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.current.apply(e,t)}));return r.current}((function(t,e){var r,a;return l(t)?(a="",r=""):"number"===typeof t||e?(a="number"===typeof t?s(t):t,r=n(a)):(a=u(t,void 0),r=n(a)),{formattedValue:r,numAsString:a}})),v=(0,a.useState)((function(){return c(f(t)?e:t,r)})),d=v[0],m=v[1],g=t,p=r;f(t)&&(g=d.numAsString,p=!0);var h=c(g,p);return(0,a.useMemo)((function(){m(h)}),[h.formattedValue]),[d,function(t,e){t.formattedValue!==d.formattedValue&&m({formattedValue:t.formattedValue,numAsString:t.value}),i(t,e)}]}function V(t){return t.replace(/[^0-9]/g,"")}function S(t){return t}function w(t){var e=t.type;void 0===e&&(e="text");var r=t.displayType;void 0===r&&(r="input");var f=t.customInput,l=t.renderText,c=t.getInputRef,s=t.format;void 0===s&&(s=S);var g=t.removeFormatting;void 0===g&&(g=V);var p=t.defaultValue,w=t.valueIsNumericString,C=t.onValueChange,E=t.isAllowed,O=t.onChange;void 0===O&&(O=o);var A=t.onKeyDown;void 0===A&&(A=o);var T=t.onMouseUp;void 0===T&&(T=o);var j=t.onFocus;void 0===j&&(j=o);var k=t.onBlur;void 0===k&&(k=o);var I=t.value,x=t.getCaretBoundary;void 0===x&&(x=y);var M=t.isValidInputCharacter;void 0===M&&(M=i);var R=u(t,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),B=b(I,p,Boolean(w),s,g,C),F=B[0],P=F.formattedValue,N=F.numAsString,D=B[1],K=(0,a.useRef)({formattedValue:P,numAsString:N}),L=function(t,e){K.current={formattedValue:t.formattedValue,numAsString:t.value},D(t,e)},U=(0,a.useState)(!1),H=U[0],_=U[1],W=(0,a.useRef)(null),$=(0,a.useRef)({setCaretTimeout:null,focusTimeout:null});(0,a.useEffect)((function(){return _(!0),function(){clearTimeout($.current.setCaretTimeout),clearTimeout($.current.focusTimeout)}}),[]);var q=s,z=function(t,e){var r=parseFloat(e);return{formattedValue:t,value:e,floatValue:isNaN(r)?void 0:r}},G=function(t,e,r){0===t.selectionStart&&t.selectionEnd===t.value.length||(v(t,e),$.current.setCaretTimeout=setTimeout((function(){t.value===r&&t.selectionStart!==t.selectionEnd&&v(t,e)}),0))},J=function(t,e,r){return h(t,e,x(t),r)},Q=function(t,e,r){var n=x(e),a=function(t,e,r,n,a,u){var o=d(r,t),i=o.from,f=o.to;if(i.end-i.start===1&&i.end===f.end&&f.end===n)return n;var l=a.findIndex((function(t){return t})),c=t.slice(0,l);e||r.startsWith(c)||(r=c+r,n+=c.length);for(var s=r.length,v=t.length,m={},g=new Array(s),p=0;p<s;p++){g[p]=-1;for(var h=0,y=v;h<y;h++)if(r[p]===t[h]&&!0!==m[h]){g[p]=h,m[h]=!0;break}}for(var b=n;b<s&&(-1===g[b]||!u(r[b]));)b++;var V=b===s||-1===g[b]?v:g[b];for(b=n-1;b>0&&-1===g[b];)b--;var S=-1===b||-1===g[b]?0:g[b]+1;return S>V?V:n-S<V-n?S:V}(e,P,t,r,n,M);return a=h(e,a,n)};(0,a.useEffect)((function(){var t=K.current,e=t.formattedValue,r=t.numAsString;P===e||P===N&&e===r||L(z(P,N),{event:void 0,source:n.props})}),[P,N]);var X=W.current?m(W.current):void 0;("undefined"!==typeof window?a.useLayoutEffect:a.useEffect)((function(){var t=W.current;if(P!==K.current.formattedValue&&t){var e=Q(K.current.formattedValue,P,X);t.value=P,G(t,e,P)}}),[P]);var Y=function(t,e,r){var n=d(P,t),a=Object.assign(Object.assign({},n),{lastValue:P}),u=g(t,a),o=q(u);if(u=g(o,void 0),E&&!E(z(o,u))){var i=e.target,f=m(i),l=Q(t,P,f);return i.value=P,G(i,l,P),!1}return function(t){var e=t.formattedValue;void 0===e&&(e="");var r=t.input,n=t.setCaretPosition;void 0===n&&(n=!0);var a=t.source,u=t.event,o=t.numAsString,i=t.caretPos;if(r){if(void 0===i&&n){var f=t.inputValue||r.value,l=m(r);r.value=e,i=Q(f,e,l)}r.value=e,n&&void 0!==i&&G(r,i,e)}e!==P&&L(z(e,o),{event:u,source:a})}({formattedValue:o,numAsString:u,inputValue:t,event:e,source:r,setCaretPosition:!0,input:e.target}),!0},Z=!H||"undefined"===typeof navigator||navigator.platform&&/iPhone|iPod/.test(navigator.platform)?void 0:"numeric",tt=Object.assign({inputMode:Z},R,{type:e,value:P,onChange:function(t){var e=t.target.value;Y(e,t,n.event)&&O(t)},onKeyDown:function(t){var e,r=t.target,n=t.key,a=r.selectionStart,u=r.selectionEnd,o=r.value;if(void 0===o&&(o=""),"ArrowLeft"===n||"Backspace"===n?e=Math.max(a-1,0):"ArrowRight"===n?e=Math.min(a+1,o.length):"Delete"===n&&(e=a),void 0!==e&&a===u){var i=e;if("ArrowLeft"===n||"ArrowRight"===n)(i=J(o,e,"ArrowLeft"===n?"left":"right"))!==e&&t.preventDefault();else"Delete"!==n||M(o[e])?"Backspace"!==n||M(o[e])||(i=J(o,e,"left")):i=J(o,e,"right");i!==e&&G(r,i,o),t.isUnitTestRun&&G(r,i,o),A(t)}else A(t)},onMouseUp:function(t){var e=t.target,r=e.selectionStart,n=e.selectionEnd,a=e.value;if(void 0===a&&(a=""),r===n){var u=J(a,r);u!==r&&G(e,u,a)}T(t)},onFocus:function(t){t.persist&&t.persist();var e=t.target;W.current=e,$.current.focusTimeout=setTimeout((function(){var r=e.selectionStart,n=e.selectionEnd,a=e.value;void 0===a&&(a="");var u=J(a,r);u===r||0===r&&n===a.length||G(e,u,a),j(t)}),0)},onBlur:function(t){W.current=null,clearTimeout($.current.focusTimeout),clearTimeout($.current.setCaretTimeout),k(t)}});if("text"===r)return l?a.createElement(a.Fragment,null,l(P,R)||null):a.createElement("span",Object.assign({},R,{ref:c}),P);if(f){var et=f;return a.createElement(et,Object.assign({},tt,{ref:c}))}return a.createElement("input",Object.assign({},tt,{ref:c}))}function C(t){t.mask,t.allowEmptyFormatting;var e=t.format,r=t.inputMode;void 0===r&&(r="numeric");var n=t.onKeyDown;void 0===n&&(n=o);var a=t.patternChar;void 0===a&&(a="#");var l=t.value,c=t.defaultValue,s=t.valueIsNumericString,d=u(t,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);!function(t){var e=t.mask;if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("Mask "+e+" should not contain numeric character;")}(t);var m=function(e){return function(t,e){var r=e.format,n=e.mask,a=e.patternChar;void 0===a&&(a="#");var u=Array.from({length:t.length+1}).map((function(){return!0})),o=0,i=-1,f={};r.split("").forEach((function(e,r){var u=void 0;e===a&&(o++,u=p(n,o-1),-1===i&&t[r]===u&&(i=r)),f[r]=u}));for(var l=function(e){return r[e]===a&&t[e]!==f[e]},c=0,s=u.length;c<s;c++)u[c]=c===i||l(c)||l(c-1);return u[r.indexOf(a)]=!0,u}(e,t)},y=f(l)?c:l,b=null!==s&&void 0!==s?s:function(t,e){return""===t||!(null===e||void 0===e?void 0:e.match(/\d/))&&"string"===typeof t&&(!!t.match(/^\d+$/)||""===t)}(y,e),V=Object.assign(Object.assign({},t),{valueIsNumericString:b});return Object.assign(Object.assign({},d),{value:l,defaultValue:c,valueIsNumericString:b,inputMode:r,format:function(t){return function(t,e){var r=e.format,n=e.allowEmptyFormatting,a=e.mask,u=e.patternChar;if(void 0===u&&(u="#"),""===t&&!n)return"";for(var o=0,i=r.split(""),f=0,l=r.length;f<l;f++)r[f]===u&&(i[f]=t[o]||p(a,o),o+=1);return i.join("")}(t,V)},removeFormatting:function(t,e){return function(t,e,r){void 0===e&&(e=g(t));var n=r.format,a=r.patternChar;void 0===a&&(a="#");var u=e.from,o=e.to,f=e.lastValue;void 0===f&&(f="");var l=function(t){return n[t]===a},c=function(t,e){for(var r="",n=0;n<t.length;n++)l(e+n)&&i(t[n])&&(r+=t[n]);return r},s=function(t){return t.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return s(t);if(""===f&&t.length===n.length){for(var v="",d=0;d<t.length;d++)if(l(d))i(t[d])&&(v+=t[d]);else if(t[d]!==n[d])return s(t);return v}var m=f.substring(0,u.start),p=t.substring(o.start,o.end),h=f.substring(u.end);return""+c(m,0)+s(p)+c(h,u.end)}(t,e,V)},getCaretBoundary:m,onKeyDown:function(t){var r=t.key,u=t.target,o=u.selectionStart,i=u.selectionEnd,f=u.value;if(o===i){var l=o;if("Backspace"===r||"Delete"===r){var c="right";if("Backspace"===r){for(;l>0&&e[l-1]!==a;)l--;c="left"}else{for(var s=e.length;l<s&&e[l]!==a;)l++;c="right"}l=h(f,l,m(f),c)}else e[l]!==a&&"ArrowLeft"!==r&&"ArrowRight"!==r&&(l=h(f,l+1,m(f),"right"));l!==o&&v(u,l),n(t)}else n(t)}})}function E(t){var e=C(t);return a.createElement(w,Object.assign({},e))}!function(t){t.event="event",t.props="prop"}(n||(n={}))}}]);
//# sourceMappingURL=948.e43a2927.chunk.js.map