(function(t){function e(e){for(var n,i,u=e[0],o=e[1],c=e[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,u=1;u<a.length;u++){var o=a[u];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0003":function(t,e,a){"use strict";var n=a("35ab"),r=a.n(n);r.a},1410:function(t,e,a){},"1fa1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=a("2f62"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.prototype.closeMenuDrawer=function(){this.$emit("menuClick")},e=n.__decorate([r.Component({components:{},computed:n.__assign({},s.mapGetters(["banner"]))})],e),e}(r.Vue);e.default=i},2502:function(t,e,a){"use strict";var n=a("be79"),r=a.n(n);r.a},"35ab":function(t,e,a){},3739:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{staticClass:"footer",attrs:{type:"flex",justify:"center",align:"middle",gutter:2}},[n("a-col",{attrs:{xs:24,sm:8,md:6,lg:6,xl:6}},[n("a",{staticStyle:{"font-size":"1em"},attrs:{href:"https://github.com/manerfan/vuesume/blob/master/LICENSE",target:"_blank"}},[t._v("\n            © 2019 Maner·Fan All rights reserved")])]),n("a-col",{attrs:{xs:24,sm:6,md:4,lg:4,xl:4}},[n("span",{staticClass:"avatar ant-avatar ant-avatar-circle ant-avatar-image"},[n("img",{attrs:{draggable:"false",src:a("915e")}})])]),n("a-col",{staticClass:"social",attrs:{xs:24,sm:8,md:6,lg:6,xl:6}},[n("a",{attrs:{href:"https://github.com/manerfan",target:"_blank"}},[n("a-icon",{attrs:{type:"github"}})],1),n("a-popover",{attrs:{arrowPointAtCenter:""}},[n("template",{slot:"content"},[n("img",{staticStyle:{width:"360px","max-width":"80vw",height:"auto"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UTKaj6IibSJeVf4kvWV3NIDTtwoAeq9EZZgSpSnIUVjpSlibFXlIz5YgPrNgmocqN0MttcNrZAZRO6o8vT2zB04Q/0?wx_fmt=png"}})]),n("a",[n("a-icon",{attrs:{type:"wechat"}})],1)],2),n("a",{attrs:{href:"https://twitter.com/manerfan_china",target:"_blank"}},[n("a-icon",{attrs:{type:"twitter"}})],1),n("a",{attrs:{href:"https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/",target:"_blank"}},[n("a-icon",{attrs:{type:"linkedin"}})],1)],1),n("a-col",{staticClass:"social",attrs:{span:24}},[n("a",{attrs:{href:"https://github.com/manerfan/vuesume/blob/master/LICENSE",target:"_blank"}},[n("img",{attrs:{alt:"GitHub",src:"https://img.shields.io/github/license/manerfan/vuesume"}})]),n("a",{attrs:{href:"https://github.com/manerfan/vuesume/",target:"_blank"}},[n("img",{attrs:{alt:"GitHub package.json version",src:"https://img.shields.io/github/package-json/v/manerfan/vuesume"}})]),n("a",{attrs:{href:"https://github.com/manerfan/vuesume/",target:"_blank"}},[n("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/manerfan/vuesume"}})]),n("a",{attrs:{href:"https://github.com/manerfan/vuesume/fork",target:"_blank"}},[n("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/manerfan/vuesume"}})]),n("a",{attrs:{href:"https://github.com/manerfan/vuesume/releases",target:"_blank"}},[n("img",{attrs:{alt:"GitHub All Releases",src:"https://img.shields.io/github/downloads/manerfan/vuesume/total"}})])])],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},"38f5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e=n.__decorate([r.Component({data:function(){return{year:(new Date).getFullYear()}}})],e),e}(r.Vue);e.default=s},"3a0b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("2f62")),i=n.__importDefault(a("e884"));r.default.use(s.default);var u="vuesume",o="--";e.default=new s.default.Store({state:{title:u,banner:{title:o,desc:[o]},const:{wechatImgUrl:"https://mmbiz.qpic.cn/mmbiz_png/UTKaj6IibSJeVf4kvWV3NIDTtwoAeq9EZZgSpSnIUVjpSlibFXlIz5YgPrNgmocqN0MttcNrZAZRO6o8vT2zB04Q/0?wx_fmt=png"}},getters:{title:function(t,e){return(t.title||u)+" - "+(e||"")},banner:function(t){return t.banner||{}},const:function(t){return t.const||{}}},mutations:{init:function(t,e){t.title=e.title||u,t.banner=e.banner}},actions:{init:function(t){var e=t.commit;i.default.init((function(t){e("init",t)}))}}})},"3d48":function(t,e,a){"use strict";a.r(e);var n=a("7402"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"3dfd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],s=(a("5c0b"),a("2877")),i={},u=Object(s["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports},"3ee7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-header",{staticClass:"layout-header"},[a("Banner")],1),a("a-layout",[a("a-layout-sider",{staticClass:"layout-sider",attrs:{width:"320"}},[a("Menu")],1),a("a-layout",{staticClass:"layout-content"},[a("a-affix",[a("a-button",{class:{"sider-menu-trigger":!0,"drawer-closed":!t.menuDrawerVisible,"drawer-open":t.menuDrawerVisible},attrs:{shape:"circle",size:"large",icon:t.menuDrawerVisible?"arrow-left":"bars"},on:{click:t.toggleMenuDrawer}})],1),a("a-layout-content",[a("About")],1),a("a-layout-content",[a("News")],1),a("a-layout-footer",[a("Footer")],1)],1)],1),a("a-drawer",{attrs:{placement:"left",closable:!0,visible:t.menuDrawerVisible},on:{close:t.onMenuDrawerClose}},[a("Menu",{on:{menuClick:t.onMenuDrawerClose}})],1)],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},"41c4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content about",attrs:{id:"about"}},[a("div",{staticClass:"heading"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("span",[t._v("Information")])])],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("h2",[t._v("About Me")])])],1)],1),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}})],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},"4eba":function(t,e,a){},"51d2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=a("2f62"),i=a("e956"),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e=n.__decorate([r.Component({components:{VueTyper:i.VueTyper},computed:n.__assign({},s.mapGetters(["banner"]))})],e),e}(r.Vue);e.default=u},"535d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner",attrs:{id:"banner"}},[a("div",{staticClass:"bg"}),t._m(0),a("div",{staticClass:"desc"},[t._m(1),a("h1",[t._v(t._s(t.banner.title))]),a("h3",{staticClass:"typer-white"},[t._v("\n            鄙人，\n            "),a("vue-typer",{attrs:{text:t.banner.desc,"type-delay":200,eraseStyle:"select-all"}})],1)]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"scroll-next animated infinite bounce",attrs:{href:"#about"}},[a("a-icon",{attrs:{type:"double-right"}})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fork-me"},[a("a",{staticClass:"fork-me-link",attrs:{href:"https://github.com/manerfan/vuesume"}},[a("span",{staticClass:"fork-me-text"},[t._v("Docs On GitHub")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"avatar ant-avatar ant-avatar-circle ant-avatar-image"},[n("img",{attrs:{draggable:"false",src:a("915e")}})])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},"5c0b":function(t,e,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"5d03":function(t,e,a){},"5f86":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("8c4f")),i=n.__importDefault(a("bb51"));r.default.use(s.default),e.default=new s.default({mode:"history",base:"/",routes:[{path:"/",name:"home",meta:{title:""},component:i.default},{path:"/about",name:"about",meta:{title:""},component:function(){return Promise.resolve().then((function(){return n.__importStar(a("f820"))}))}}]})},"718a":function(t,e,a){"use strict";a.r(e);var n=a("c240"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},"721e":function(t,e,a){"use strict";a.r(e);var n=a("1fa1"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},7402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=n.__importDefault(a("84af")),i=n.__importDefault(a("fb62")),u=n.__importDefault(a("84ba")),o=n.__importDefault(a("e761")),c=n.__importDefault(a("fd2d")),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.menuDrawerVisible=!1,e}return n.__extends(e,t),e.prototype.toggleMenuDrawer=function(){this.menuDrawerVisible=!this.menuDrawerVisible},e.prototype.onMenuDrawerClose=function(){this.menuDrawerVisible=!1},e=n.__decorate([r.Component({components:{Banner:s.default,Menu:i.default,About:u.default,News:o.default,Footer:c.default}})],e),e}(r.Vue);e.default=f},"7ca4":function(t,e,a){"use strict";var n=a("c59a"),r=a.n(n);r.a},"84af":function(t,e,a){"use strict";a.r(e);var n=a("535d"),r=a("b7a5");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("d0b5");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"04d3a003",null);e["default"]=u.exports},"84ba":function(t,e,a){"use strict";a.r(e);var n=a("41c4"),r=a("f1b0");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("8d49");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"f96123ee",null);e["default"]=u.exports},"8d49":function(t,e,a){"use strict";var n=a("1410"),r=a.n(n);r.a},"915e":function(t,e,a){t.exports=a.p+"img/avatar.929b2928.jpg"},a7b2:function(t,e,a){"use strict";var n=a("4eba"),r=a.n(n);r.a},b7a5:function(t,e,a){"use strict";a.r(e);var n=a("51d2"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},bb51:function(t,e,a){"use strict";a.r(e);var n=a("3ee7"),r=a("3d48");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("2502");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"fdef26a6",null);e["default"]=u.exports},be79:function(t,e,a){},c240:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=a("2f62"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e=n.__decorate([r.Component({components:{},computed:n.__assign({},s.mapGetters([]))})],e),e}(r.Vue);e.default=i},c59a:function(t,e,a){},cbeb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=a("60a3"),s=a("2f62"),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e=n.__decorate([r.Component({components:{},computed:n.__assign({},s.mapGetters([]))})],e),e}(r.Vue);e.default=i},cd49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=n.__importDefault(a("2b0e")),s=n.__importDefault(a("3dfd")),i=n.__importDefault(a("5f86")),u=n.__importDefault(a("3a0b")),o=n.__importDefault(a("f23d"));a("202f"),a("77ed");var c=n.__importDefault(a("5a58")),f=n.__importDefault(a("f5af"));a("e829"),f.default.init({once:!0,offset:50,delay:100,duration:1e3}),a("fb98"),a("5d03"),r.default.config.productionTip=!1,r.default.use(o.default),r.default.use(c.default),i.default.beforeEach((function(t,e,a){t.meta.title&&(document.title=u.default.getters.title(t.meta.title)),a()})),new r.default({router:i.default,store:u.default,render:function(t){return t(s.default)}}).$mount("#app"),u.default.dispatch("init")},cf94:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-affix",[n("a-layout",{staticClass:"layout-menu"},[n("div",{staticClass:"header"},[n("span",{staticClass:"avatar ant-avatar ant-avatar-circle ant-avatar-image"},[n("img",{attrs:{draggable:"false",src:a("915e")}})]),n("span",[t._v(t._s(t.banner.title))])]),n("a-layout-content",{staticClass:"menu"},[n("a-menu",[n("a-menu-item",[n("a-icon",{attrs:{type:"home"}}),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#banner"},on:{click:t.closeMenuDrawer}},[t._v("Home")])],1),n("a-menu-item",[n("a-icon",{attrs:{type:"user"}}),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#about"},on:{click:t.closeMenuDrawer}},[t._v("About")])],1),n("a-menu-item",[n("a-icon",{attrs:{type:"notification"}}),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#news"},on:{click:t.closeMenuDrawer}},[t._v("News")])],1)],1)],1),n("a-layout-footer",{staticClass:"footer"},[n("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:2}},[n("a-col",{attrs:{span:"24"}},[n("a",{attrs:{href:"https://github.com/manerfan",target:"_blank"}},[n("a-icon",{attrs:{type:"github"}})],1),n("a-popover",{attrs:{arrowPointAtCenter:""}},[n("template",{slot:"content"},[n("img",{staticStyle:{width:"360px","max-width":"80vw",height:"auto"},attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/UTKaj6IibSJeVf4kvWV3NIDTtwoAeq9EZZgSpSnIUVjpSlibFXlIz5YgPrNgmocqN0MttcNrZAZRO6o8vT2zB04Q/0?wx_fmt=png"}})]),n("a",[n("a-icon",{attrs:{type:"wechat"}})],1)],2),n("a",{attrs:{href:"https://twitter.com/manerfan_china",target:"_blank"}},[n("a-icon",{attrs:{type:"twitter"}})],1),n("a",{attrs:{href:"https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/",target:"_blank"}},[n("a-icon",{attrs:{type:"linkedin"}})],1)],1)],1),n("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:2}},[n("a-col",{attrs:{span:"24"}},[n("a",{staticClass:"copy-rights",staticStyle:{"font-size":"1em"},attrs:{href:"https://github.com/manerfan/vuesume/blob/master/LICENSE",target:"_blank"}},[t._v("\n                        © 2019 Maner·Fan All rights reserved")])])],1)],1)],1)],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},d0b5:function(t,e,a){"use strict";var n=a("ecc2"),r=a.n(n);r.a},d8ef:function(t,e,a){"use strict";a.r(e);var n=a("38f5"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},e332:function(t,e,a){},e761:function(t,e,a){"use strict";a.r(e);var n=a("eb85"),r=a("718a");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("a7b2");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"03e3683e",null);e["default"]=u.exports},e884:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("9ab4"),r=n.__importDefault(a("bc3a")),s=n.__importDefault(a("5e48"));e.default={init:function(t){r.default.get("/data.json5").then((function(e){var a=e.data;t(s.default.parse(a))}))}}},eb85:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content news",attrs:{id:"news"}},[a("div",{staticClass:"heading"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("span",[t._v("News")])])],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("h2",[t._v("Latest News")])])],1)],1),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}}),a("a-skeleton",{attrs:{"data-aos":"fade-right",active:"",avatar:"",paragraph:{rows:4}}})],1)},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},ecc2:function(t,e,a){},f1b0:function(t,e,a){"use strict";a.r(e);var n=a("cbeb"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],s=a("2877"),i={},u=Object(s["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports},fb62:function(t,e,a){"use strict";a.r(e);var n=a("cf94"),r=a("721e");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("7ca4");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"1ed43644",null);e["default"]=u.exports},fb98:function(t,e,a){},fd2d:function(t,e,a){"use strict";a.r(e);var n=a("3739"),r=a("d8ef");for(var s in r)"default"!==s&&function(t){a.d(e,t,(function(){return r[t]}))}(s);a("0003");var i=a("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,"1d504a6a",null);e["default"]=u.exports}});