/*!  The roject developed by chengpeiquan!  */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb1cf4e"],{"18a7":function(e,t,c){"use strict";var n={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=n.F1&&t<=n.F12)return!1;switch(t){case n.ALT:case n.CAPS_LOCK:case n.CONTEXT_MENU:case n.CTRL:case n.DOWN:case n.END:case n.ESC:case n.HOME:case n.INSERT:case n.LEFT:case n.MAC_FF_META:case n.META:case n.NUMLOCK:case n.NUM_CENTER:case n.PAGE_DOWN:case n.PAGE_UP:case n.PAUSE:case n.PRINT_SCREEN:case n.RIGHT:case n.SHIFT:case n.UP:case n.WIN_KEY:case n.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=n.ZERO&&e<=n.NINE)return!0;if(e>=n.NUM_ZERO&&e<=n.NUM_MULTIPLY)return!0;if(e>=n.A&&e<=n.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case n.SPACE:case n.QUESTION_MARK:case n.NUM_PLUS:case n.NUM_MINUS:case n.NUM_PERIOD:case n.NUM_DIVISION:case n.SEMICOLON:case n.DASH:case n.EQUALS:case n.COMMA:case n.PERIOD:case n.SLASH:case n.APOSTROPHE:case n.SINGLE_QUOTE:case n.OPEN_SQUARE_BRACKET:case n.BACKSLASH:case n.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t["a"]=n},2234:function(e,t,c){},"4f26":function(e,t,c){"use strict";c.r(t);c("cd17");var n=c("ed3b"),a=c("7a23"),r=c("5502"),o=c("5b0f"),i=c("2ef0"),s=c("6256"),l=Object(a["withScopeId"])("data-v-7f9bdfdf");Object(a["pushScopeId"])("data-v-7f9bdfdf");var u={class:"global__system--form"},O={class:"chapter-list"},E={key:0,class:"global__system--empty-tips"},f={key:1,class:"global__system--scroll-wrap"},b={class:"chapter-title"},N={class:"plot-list"};Object(a["popScopeId"])();var p=Object(a["defineComponent"])({expose:[],emits:["update-target-plot"],setup:function(e,t){var c=t.emit,p=Object(a["useContext"])(),d=p.expose,S=Object(a["ref"])(!1),_=Object(a["ref"])(-1),j=Object(r["b"])(),v=Object(a["computed"])((function(){return j.state.canvas.plotInfo.id})),M=Object(a["ref"])([]);M.value=Object(i["cloneDeep"])(j.state.chapter.list);var U=function(e){e.isShowPlotList=!e.isShowPlotList},A=function(e){if(e.id===v.value)return s["a"].warning("不可以选择当前剧情，请重新选择其他剧情"),!1;c("update-target-plot",{index:_.value,plot:e}),S.value=!1};return Object(a["watch"])(S,(function(){M.value=Object(i["cloneDeep"])(j.state.chapter.list)})),d({isShowDialog:S,eventIndex:_}),function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(n["a"]),{visible:S.value,"onUpdate:visible":t[1]||(t[1]=function(e){return S.value=e}),title:"跳转剧情至",width:300,bodyStyle:{backgroundColor:"#2E2E31",marginTop:"-2px",paddingTop:"0px",paddingRight:"10px",paddingBottom:"0px"},footer:null},{default:l((function(){return[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("section",O,[0===M.value.length?(Object(a["openBlock"])(),Object(a["createBlock"])("section",E," 请先创建章节和剧情 ")):(Object(a["openBlock"])(),Object(a["createBlock"])("ul",f,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(M.value,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:String(t),class:"chapter"},[Object(a["createVNode"])("div",b,[Object(a["createVNode"])(Object(a["unref"])(o["a"]),{class:["ex-icon icon-triangle",{close:!e.isShowPlotList}],onClick:function(t){return U(e)}},null,8,["class","onClick"]),Object(a["createVNode"])("h2",{class:"text",onClick:function(t){return U(e)}},[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.title),1)],8,["onClick"])]),Object(a["withDirectives"])(Object(a["createVNode"])("ul",N,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.plotList,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:"plot",key:String(t)},[Object(a["createVNode"])("i",{class:"ex-icon icon-book",onClick:function(t){return A(e)}},null,8,["onClick"]),Object(a["createVNode"])("h2",{class:"plot-title",onClick:function(t){return A(e)}},[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.title),1)],8,["onClick"])])})),128))],512),[[a["vShow"],e.isShowPlotList]])])})),128))]))])])]})),_:1},8,["visible"])}}});c("92de");p.__scopeId="data-v-7f9bdfdf";t["default"]=p},"5b0f":function(e,t,c){"use strict";var n=c("7a23"),a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"filled"},r=a,o=c("b3f0");function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(c);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(c).filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})))),n.forEach((function(t){s(e,t,c[t])}))}return e}function s(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var l=function(e,t){var c=i({},e,t.attrs);return n["createVNode"](o["a"],n["mergeProps"](c,{icon:r}),null)};l.displayName="CaretDownFilled",l.inheritAttrs=!1;t["a"]=l},"92de":function(e,t,c){"use strict";c("2234")},a878:function(e,t,c){"use strict";var n=c("7a23"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},r=a,o=c("b3f0");function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(c);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(c).filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})))),n.forEach((function(t){s(e,t,c[t])}))}return e}function s(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var l=function(e,t){var c=i({},e,t.attrs);return n["createVNode"](o["a"],n["mergeProps"](c,{icon:r}),null)};l.displayName="CloseOutlined",l.inheritAttrs=!1;t["a"]=l},c291:function(e,t,c){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},n.apply(this,arguments)}var a=function(e,t){var c=n({},e);return Object.keys(t).forEach((function(e){var n=c[e];if(!n)throw new Error("not have ".concat(e," prop"));n.default=t[e]})),c};t["a"]=a}}]);