/*!  The roject developed by chengpeiquan!  */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df75db42","chunk-1306de4b","chunk-1009bb63"],{"0ca4":function(e,t,n){"use strict";n.r(t);var c=n("f3f3"),o=(n("a9e3"),n("7a23")),a=n("5502"),r=n("4ac8"),u=Object(o["defineComponent"])({expose:[],props:{isCur:Boolean,id:[Number,String],element:Object,defaultStyle:Object,index:[Number,String]},setup:function(e){var t=e,n=Object(a["b"])(),u=(Object(o["computed"])((function(){return n.state.canvas.componentData})),function(e){e.stopPropagation(),e.preventDefault()}),i=function(e){var a=t.element,u=void 0===a?{}:a;if(n.commit("canvas/setClickComponentStatus",!0),"v-text"!=u.component&&"rect-shape"!=u.component&&e.preventDefault(),e.stopPropagation(),n.commit("canvas/setCurComponent",{component:u,index:t.index}),Object(r["a"])(u),u.isLock||"v-bg"===u.component||"v-quick-dialogue"===u.component)return!1;var i=Object(c["a"])({},t.defaultStyle),s=e.clientY,p=e.clientX,d=Number(i.top),l=Number(i.left),f=function(e){!0;var t=e.clientX,c=e.clientY;i.top=c-s+d,i.left=t-p+l,n.commit("canvas/setShapeStyle",i),Object(o["nextTick"])((function(){}))},b=function e(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",e)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",b)};return function(t,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["shape",{cur:e.isCur}],onClick:u,onMousedown:i},[Object(o["renderSlot"])(t.$slots,"default")],34)}}});n("fd38");u.__scopeId="data-v-7f58d0b6";t["default"]=u},"1d60":function(e,t,n){"use strict";n("4d83")},"1f3b":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("5502"),a=n("c584");Object(c["pushScopeId"])("data-v-774918ed");var r={class:"canvas-area"};Object(c["popScopeId"])();var u=Object(c["defineComponent"])({expose:[],setup:function(e){var t=Object(o["b"])(),n=(Object(c["computed"])((function(){return t.state.canvas.isClickComponent})),Object(c["computed"])((function(){return t.state.editorInfo.canvasnSize}))),u=function(e){if(e.preventDefault(),e.stopPropagation(),e.dataTransfer){var n=e.dataTransfer.getData("component");t.dispatch("canvas/receiveComponent",{componentTag:n})}},i=function(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")},s=function(){t.commit("canvas/setClickComponentStatus",!1)};return function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("section",r,[Object(c["createVNode"])("div",{class:"canvas-content",style:{width:"".concat(Object(c["unref"])(n).width,"px"),height:"".concat(Object(c["unref"])(n).height,"px")},onDrop:u,onDragover:i,onMousedown:s},[Object(c["createVNode"])(a["default"])],36)])}}});n("1d60");u.__scopeId="data-v-774918ed";t["default"]=u},"4ac8":function(e,t,n){"use strict";var c=n("0613"),o=function(e){var t="";switch(e.component){case"v-bg":case"v-avatar":case"v-props":case"v-role":t="img";break;case"v-text-options":case"v-image-options":t="options";break;case"v-normal-dialogue":t="normal-dialogue";break;case"v-quick-dialogue":t="quick-dialogue";break}c["a"].commit("property/changePanel",{type:t,data:e})};t["a"]=o},"4d83":function(e,t,n){},5909:function(e,t,n){},"6f6c":function(e,t,n){"use strict";n("5909")},"8c89":function(e,t,n){},c584:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=n("5502"),a=n("0ca4"),r=n("88ed"),u=Object(c["withScopeId"])("data-v-ba8fcbee"),i=Object(c["defineComponent"])({expose:[],setup:function(e){var t=Object(o["b"])(),n=Object(c["computed"])((function(){return t.state.canvas.componentData})),i=Object(c["computed"])((function(){try{return t.state.property.data.element.id}catch(e){return""}})),s=function(e){e.stopPropagation(),e.preventDefault()},p=function(){},d=function(e,t){};return function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{id:"editor",class:"editor",onContextmenu:s,onMousedown:p},[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(n),(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(a["default"],{key:e.id,defaultStyle:e.style,style:Object(c["unref"])(r["e"])(e),id:e.id,"is-cur":e.id===Object(c["unref"])(i),element:e,index:String(t),"data-index":t,class:Object(c["unref"])(r["a"])(e.classList)},{default:u((function(){return["v-text"===e.component?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(e.component),{key:0,class:"component",style:Object(c["unref"])(r["d"])(e),propValue:e.propValue,onInput:d,id:e.id},null,8,["style","propValue","id"])):(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(e.component),{key:1,class:"component",style:Object(c["unref"])(r["d"])(e),propValue:e.propValue,id:e.id},null,8,["style","propValue","id"]))]})),_:2},1032,["defaultStyle","style","id","is-cur","element","index","data-index","class"])})),128))],32)}}});n("6f6c");i.__scopeId="data-v-ba8fcbee";t["default"]=i},fd38:function(e,t,n){"use strict";n("8c89")}}]);