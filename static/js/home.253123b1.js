/*!  The roject developed by chengpeiquan!  */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{6511:function(e,t,n){"use strict";n.r(t);var o=n("ff1f"),c=(n("b0c0"),Object(o["g"])({expose:[],props:{name:{type:String,required:!1,default:"Petter"},userInfo:Object,tags:Array},emits:["chang-name"],setup:function(e,t){var n=t.emit,c=e;console.log(c),console.log(c.name),console.log(n);var a=Object(o["x"])();return console.log("context",a),{props:c,emit:n,context:a,useContext:o["x"]}}}));c.__scopeId="data-v-18293099";var a=c,r=Object(o["g"])({expose:[],setup:function(e){var t=Object(o["t"])("Petter");console.log(t.value);var n={id:1,age:18},c=Object(o["t"])(["aaa","bbb","ccc"]),r=function(e){t.value=e||"Tom"};return setTimeout((function(){r()}),1e3),{name:t,userInfo:n,tags:c,changeName:r,ref:o["t"],Child:a}}});r.__scopeId="data-v-e6d602a4";t["default"]=r},b0c0:function(e,t,n){var o=n("83ab"),c=n("9bf2").f,a=Function.prototype,r=a.toString,s=/^\s*function ([^ (]*)/,u="name";o&&!(u in a)&&c(a,u,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(e){return""}}})}}]);