/*!build time : 2014-07-10 4:00:19 PM*/
KISSY.add(function(a,b){var c,d=a.all,e="Pull Down To Refresh",f="Loading...",g=b.extend({initializer:function(){var b=this,d=b.userConfig.xlist;b.userConfig=a.merge({content:e,downContent:"",upContent:"",pullUpHeight:40,loadingContent:f,boundry:{},prefix:"ks-xlist-plugin-pullup-"},b.userConfig);b.userConfig.height||60;c=b.userConfig.prefix,d.on("afterRender",function(){b.render(),b._bindEvt()})},render:function(){{var a=this,b=c+"container",e=a.userConfig.xlist,f=a.userConfig.height||60;a.$pullup=d("<div></div>").addClass(b).css({position:"absolute",bottom:-f,width:"100%"}).prependTo(e.$ctn)}a.fire("afterRender")},_bindEvt:function(){var a=this;if(!a._evtBinded){var b=a.userConfig.xlist,d=a.$pullup,e=0;a.on("afterStatusChange",function(b){d.removeClass(c+b.prevVal).addClass(c+b.newVal),a.setContent(a.userConfig[b.newVal+"Content"])}),d.addClass(c+a.get("status")),d.html(a.userConfig[a.get("status")+"Content"]||a.userConfig.content),b.on("drag",function(){e=b.getOffsetTop(),e<b.height-b.containerHeight-a.userConfig.pullUpHeight?a.set("status","down"):a.set("status","up")}),b.on("scrollEnd",function(c){e=c.offsetTop,e<b.height-b.containerHeight-a.userConfig.pullUpHeight&&(a.set("status","loading"),a.fire("loading",function(){}))}),b.on("dataChange",function(){a.set("status","up")}),a._evtBinded=!0}},setContent:function(a){var b=this;a&&b.$pullup.html(a)}},{ATTRS:{status:{value:"up"}}});return g},{requires:["base","node"]});