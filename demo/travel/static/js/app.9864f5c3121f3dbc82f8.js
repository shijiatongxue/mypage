webpackJsonp([1],{"+Wjw":function(t,e){},"/Uca":function(t,e){},"0I31":function(t,e){},"0o8J":function(t,e){},"60mc":function(t,e){},"9n10":function(t,e){},Gc9V:function(t,e){},K4iq:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={name:"App",mounted:function(){document.documentElement.className="production"}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var r=i("VU/8")(n,a,!1,function(t){i("/Uca")},null,null).exports,o=i("/ocq"),c=i("Dd8w"),l=i.n(c),u=i("NYxO"),d={name:"HomeHeader",computed:l()({},Object(u.c)(["city"]))},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市景点游玩主题\n  ")])}]};var p=i("VU/8")(d,h,!1,function(t){i("gVqm")},"data-v-6d2400a4",null).exports,m={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(m,f,!1,function(t){i("sf+/")},"data-v-288243e2",null).exports,_={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var w=i("VU/8")(_,C,!1,function(t){i("rqAo")},"data-v-5e96f1be",null).exports,y={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e,s){return i("router-link",{key:s,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var b=i("VU/8")(y,g,!1,function(t){i("hjK/")},"data-v-015d7251",null).exports,k={name:"HomeWeekend",props:{list:Array},data:function(){return{}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e,s){return i("li",{key:s,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var $=i("VU/8")(k,x,!1,function(t){i("Gc9V")},"data-v-68291b80",null).exports,S=i("mtWM"),I=i.n(S),E={name:"Home",components:{HomeHeader:p,HomeSwiper:v,HomeIcons:w,HomeRecommend:b,HomeWeekend:$},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:l()({},Object(u.c)(["city"])),methods:{getHomeInfo:function(){I.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var L=i("VU/8")(E,j,!1,function(t){i("pXPm")},null,null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var F=i("VU/8")({name:"CityHeader"},U,!1,function(t){i("0o8J")},"data-v-3eda52b0",null).exports,A=i("GQaK"),N={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},methods:l()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(u.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new A.a(this.$refs.search)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var T=i("VU/8")(N,H,!1,function(t){i("0I31")},"data-v-1b7c8010",null).exports,V={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:l()({},Object(u.c)({currentCity:"city"})),watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:l()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(u.b)(["changeCity"])),mounted:function(){this.scroll=new A.a(this.$refs.wrapper)}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0)])})],2)])},staticRenderFns:[]};var R=i("VU/8")(V,O,!1,function(t){i("eWqf")},"data-v-05a0e031",null).exports,D={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(t){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(t){this.touchStatus=!1}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:t.handleLetterClick}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var q={name:"City",components:{CityHeader:F,CitySearch:T,CityList:R,CityAlphabet:i("VU/8")(D,G,!1,function(t){i("mUf3")},"data-v-e000a310",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){I.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hot:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var M=i("VU/8")(q,z,!1,function(t){i("K4iq")},"data-v-e61295b2",null).exports,W={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(W,P,!1,function(t){i("uYc1")},"data-v-4afc293f",null).exports,B={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var K=i("VU/8")({name:"FadeAnimation"},B,!1,function(t){i("60mc")},"data-v-3aca43d5",null).exports,J={name:"DeatilBanner",props:{sightName:String,bannerImg:String,bannerImgs:Array},data:function(){return{showGallary:!1,imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg","http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg"]}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:Y,FadeAnimation:K}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(J,Q,!1,function(t){i("lzMW")},"data-v-01ae3d33",null).exports,Z={data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var et=i("VU/8")(Z,tt,!1,function(t){i("hDQF")},"data-v-89d0aa12",null).exports,it={name:"DetailList",props:{list:Array}},st={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var nt={name:"Detail",components:{DetailBanner:X,DetailHeader:et,DetailList:i("VU/8")(it,st,!1,function(t){i("+Wjw")},"data-v-475396c8",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){I.a.get("api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,bannerImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var rt=i("VU/8")(nt,at,!1,function(t){i("iGim")},"data-v-59500faa",null).exports;s.a.use(o.a);var ot=new o.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:M},{path:"/detail/:id",name:"Detail",component:rt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ct=i("v5o6"),lt=i.n(ct),ut=i("F3EI"),dt=i.n(ut),ht="上海";try{localStorage.city&&(ht=localStorage.city)}catch(t){}var pt={city:ht},mt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(u.a);var ft=new u.a.Store({state:pt,mutations:mt});i("j1ja"),i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.a.config.productionTip=!1,lt.a.attach(document.body),s.a.use(dt.a),new s.a({el:"#app",router:ot,store:ft,components:{App:r},template:"<App/>"})},TzC8:function(t,e){},eWqf:function(t,e){},gVqm:function(t,e){},hDQF:function(t,e){},"hjK/":function(t,e){},iGim:function(t,e){},lzMW:function(t,e){},mUf3:function(t,e){},pXPm:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rqAo:function(t,e){},"sf+/":function(t,e){},uYc1:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9864f5c3121f3dbc82f8.js.map