(function(t){function e(e){for(var a,o,c=e[0],i=e[1],l=e[2],v=0,p=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},2309:function(t,e,r){},"39c4":function(t,e,r){"use strict";r("42be")},"42be":function(t,e,r){},"490c":function(t,e,r){"use strict";r("2309")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.theme.app,attrs:{id:"app","v-if":t.dl}},[r("span",{attrs:{id:"status"}},[r("Sign"),t._v(t._s(t.jdat.status)+" ")],1),r("header",{attrs:{id:"page"}},[r("img"),r("p"),r("vs-button-group",[r("vs-button",{attrs:{relief:""},on:{click:function(e){t.chartActive=!0}}},[r("i",{staticClass:"bx bx-home-alt"}),t._v(" Home ")]),r("vs-button",{attrs:{relief:""}},[r("i",{staticClass:"bx bxs-phone-call"}),t._v(" Contact ")]),r("vs-button",{attrs:{relief:"",loading:""}},[r("i",{staticClass:"bx bxs-cart-alt"}),t._v(" Products ")]),r("vs-button",{attrs:{relief:"",upload:""}},[r("i",{staticClass:"bx bxs-envelope"}),t._v(" Send ")])],1),r("vs-button",{attrs:{color:"rgb(59,222,200)",gradient:""},on:{click:function(e){t.loginActive=!0}}},[t._v(" Login ")]),r("vs-switch",{staticStyle:{width:"60px",margin:"0.5rem"},attrs:{dark:""},model:{value:t.th,callback:function(e){t.th=e},expression:"th"}},[[t.th?r("Moon",{staticStyle:{"background-color":"transparent",color:"white"}}):r("Sun")]],2)],1),r("vs-dialog",{attrs:{"not-close":"","auto-width":"","not-padding":""},model:{value:t.chartActive,callback:function(e){t.chartActive=e},expression:"chartActive"}},[r("div",{staticClass:"con-image",attrs:{"v-html":t.jdat.plot}})]),r("vs-dialog",{attrs:{"prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[t._v(" Welcome to "),r("b",[t._v("Vuesax")])])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"footer-dialog"},[r("vs-button",{attrs:{block:""}},[t._v(" Sign In ")]),r("div",{staticClass:"new"},[t._v(" New Here? "),r("a",{attrs:{href:"#"},on:{click:function(e){t.logupActive=!0}}},[t._v("Create New Account")])])],1)]},proxy:!0}]),model:{value:t.loginActive,callback:function(e){t.loginActive=e},expression:"loginActive"}},[r("div",{staticClass:"con-form"},[r("vs-input",{attrs:{placeholder:"Email"},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" @ ")]},proxy:!0}]),model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),r("vs-input",{attrs:{type:"password",placeholder:"Password"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx bxs-lock"})]},proxy:!0}]),model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)]),r("vs-dialog",{attrs:{"prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[t._v(" Welcome to "),r("b",[t._v("Vuesax")])])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"footer-dialog"},[r("vs-button",{attrs:{block:""}},[t._v(" Sign In ")]),r("div",{staticClass:"new"},[t._v(" New Here? "),r("a",{attrs:{href:"#"}},[t._v("Create New Account")])])],1)]},proxy:!0}]),model:{value:t.logupActive,callback:function(e){t.logupActive=e},expression:"logupActive"}},[r("div",{staticClass:"con-form"},[r("vs-input",{attrs:{placeholder:"Email"},scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" @ ")]},proxy:!0}]),model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),r("vs-input",{attrs:{type:"password",placeholder:"Password"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx bxs-lock"})]},proxy:!0}]),model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),r("div",{staticClass:"flex"},[r("vs-checkbox",{model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}},[t._v("Remember me")]),r("a",{attrs:{href:"#"}},[t._v("Forgot Password?")])],1)],1)]),r("vs-card-group",t._l(t.jdat.news,(function(e){return r("Card",{directives:[{name:"show",rawName:"v-show",value:t.checkImage(e.image_url),expression:"checkImage(card.image_url)"}],key:e,attrs:{c:e}})})),1),r("Table"),r("Subscribe",{attrs:{theme:t.theme.sub}}),r("Footer",{attrs:{theme:t.theme.footer}})],1)},s=[],o=r("1da1"),c=(r("96cf"),r("d3b7"),r("ac1f"),r("5319"),r("4c53"),r("574d")),i=r.n(c),l=(r("04f2"),r("fd07")),u=r("e27a"),v=r("3943"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vs-card",{on:{click:function(e){return t.url()}},scopedSlots:t._u([{key:"title",fn:function(){return[r("h3",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(t.c.title))])]},proxy:!0},{key:"img",fn:function(){return[r("img",{staticStyle:{"aspect-ratio":"16 / 9"},attrs:{src:t.c.image_url,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[r("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(" "+t._s(t.c.description)+" ")])]},proxy:!0},{key:"interactions",fn:function(){return[r("vs-button",{attrs:{danger:"",icon:""}},[r("i",{staticClass:"bx bx-heart"})]),r("vs-button",{staticClass:"btn-chat",attrs:{shadow:"",primary:""}},[r("i",{staticClass:"bx bx-chat"}),r("span",{staticClass:"span"},[t._v(" 54 ")])])]},proxy:!0}])})},f=[],d=(r("9911"),r("3f08"));a["default"].use(d["b"].Plugin),a["default"].use(d["a"]);var h={name:"Card",props:{card:String,c:Object},methods:{url:function(){window.open(this.c.link)}}},_=h,b=r("2877"),m=Object(b["a"])(_,p,f,!1,null,"6bb939ae",null),g=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center"},[r("vs-table",{scopedSlots:t._u([{key:"thead",fn:function(){return[r("vs-tr",[r("vs-th",[t._v("Name")]),r("vs-th",[t._v("usd")]),r("vs-th",[t._v("usd_market_cap")]),r("vs-th",[t._v("usd_24h_vol")]),r("vs-th",[t._v("usd_24h_change")]),r("vs-th",[t._v("eur")]),r("vs-th",[t._v("eur_market_cap")]),r("vs-th",[t._v("eur_24h_vol")]),r("vs-th",[t._v("eur_24h_change")]),r("vs-th",[t._v("last_updated_at")])],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.$vs.getPage(t.users,t.page,t.max),(function(e,a){return r("vs-tr",{key:a,attrs:{data:e}},[r("vs-td",[r("h4",[t._v(t._s(a))])]),r("vs-td",[t._v(t._s(e.usd))]),r("vs-td",[t._v(t._s(e.usd_market_cap))]),r("vs-td",[t._v(t._s(e.usd_24h_vol))]),r("vs-td",[t._v(t._s(e.usd_24h_change))]),r("vs-td",[t._v(t._s(e.eur))]),r("vs-td",[t._v(t._s(e.eur_market_cap))]),r("vs-td",[t._v(t._s(e.eur_24h_change))]),r("vs-td",[t._v(t._s(e.eur_market_cap))])],1)}))},proxy:!0},{key:"footer",fn:function(){return[r("vs-pagination",{attrs:{length:t.$vs.getLength(t.users,t.max)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})]},proxy:!0}])})],1)},x=[],k={name:"Table",props:{dat:String},data:function(){return{page:1,max:10,users:[{usd:.352014,usd_market_cap:199746928.11775792,usd_24h_vol:37651510.77562622,usd_24h_change:-2.4232447023100594,eur:.320828,eur_market_cap:181884159.57697108,eur_24h_vol:34315850.481481165,eur_24h_change:-2.9394274779683,last_updated_at:1647253571},{usd:25.87,usd_market_cap:3461633339.4099436,usd_24h_vol:242316592.2585221,usd_24h_change:-1.8881362104572321,eur:23.58,eur_market_cap:3152069854.766537,eur_24h_vol:220849038.4005626,eur_24h_change:-2.4071497195802785,last_updated_at:1647253624},{usd:10.08,usd_market_cap:6564916833.453041,usd_24h_vol:319827150.60461926,usd_24h_change:-1.2473660677386473,eur:9.19,eur_market_cap:5977836015.7878475,eur_24h_vol:291492703.8511042,eur_24h_change:-1.7697692623438,last_updated_at:1647253583}]}}},w=k,S=Object(b["a"])(w,y,x,!1,null,"1e7baca0",null),C=S.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.theme,attrs:{id:"Subscribe"}},[r("span",[r("vs-input",{staticStyle:{display:"inline-block"},attrs:{state:"success",success:"",placeholder:"Email"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("i",{staticClass:"bx-user"}),r("EmailReceiveOutline")]},proxy:!0}]),model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[r("vs-icon",{staticClass:"lock"})],1),r("vs-button",{staticStyle:{display:"inline-block"},attrs:{success:"",active:1==t.active},on:{click:function(e){t.active=1}}},[t._v("Subscribe")])],1),r("div"),r("div",{staticStyle:{background:"linear-gradient(90deg,#fff0,#38dc34)"}})])},j=[],O=r("fc7f"),E={name:"Subscribe",components:{EmailReceiveOutline:O["a"]},props:{theme:String}},P=E,T=(r("6c7c"),Object(b["a"])(P,A,j,!1,null,"edd55386",null)),R=T.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("section",{staticClass:"links",style:t.theme},[r("p"),t._m(0),t._m(1),t._m(2),r("p")]),r("section",[r("p",[r("Bitcoin"),t._v(" 2022 Cryptonomy. All rights reserved")],1)])])},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("h3",[t._v("Company")]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Blockchain Explorer")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Crypto API")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Crypto Indices")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Jobs Board")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Sitemap")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("About us")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Terms of use")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Community Rules")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("h3",[t._v("Support")]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Request Form")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Contact Support")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("FAQ")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Glossary")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Disclaimer")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Methodology")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Careers")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("h3",[t._v("Socials")]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Facebook")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Telegram")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Instagram")])]),r("li",[r("a",{attrs:{href:"#"}},[t._v("Interactive Chat")])])])}],F=r("f5ef"),M={name:"Footer",props:{theme:String},components:{Bitcoin:F["a"]}},L=M,N=(r("39c4"),Object(b["a"])(L,$,I,!1,null,"165030b3",null)),G=N.exports;a["default"].use(i.a,{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}});var B={name:"App",components:{Card:g,Table:C,Subscribe:R,Footer:G,Moon:u["a"],Sun:v["a"],Sign:l["a"]},created:function(){this.fetchURL("news","GET","news"),this.fetchURL("current_cap/bitcoin","GET","status"),this.fetchURL("caps_chart/bitcoin","GET","plot"),this.dl=!0},methods:{checkImage:function(t){var e=new Image;if(e.src=t,e.complete)return!0;e.onload=function(){return!0},e.onerror=function(){return!1}},fetchURL:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2?s[2]:void 0,t.next=4,fetch(window.location.href.replace("home",e),{method:r,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/plain"}});case 4:if(n=t.sent,!n.ok){t.next=12;break}return t.next=8,n.text();case 8:return this.jdat[a]=t.sent,t.abrupt("return",!0);case 12:return t.abrupt("return",n.status);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},data:function(){return{theme:{footer:"",app:"",sub:null},th:!1,jdat:{status:null,news:null,table:null,plot:null},loginActive:!1,logupActive:!1,chartActive:!1,dl:!1}},watch:{th:function(t){t?(this.theme.footer="background-color: #282444; color: #ddd",this.theme.app="background-color: #141222; color: #aaa",this.theme.sub="background-color: #141222;"):(this.theme.footer="",this.theme.app="",this.theme.sub="")}}},U=B,H=(r("034f"),r("490c"),Object(b["a"])(U,n,s,!1,null,null,null)),J=H.exports;r("c789");a["default"].use(i.a),a["default"].use(i.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(J)}}).$mount("#app")},"6c7c":function(t,e,r){"use strict";r("cba5")},"85ec":function(t,e,r){},cba5:function(t,e,r){}});
//# sourceMappingURL=app.c6b14b07.js.map