/*!build time : 2014-07-11 1:19:17 AM*/
KISSY.add(function(a,b){var c,d=a.all,e="Pull Down To Refresh",f="Loading...",g=b.extend({initializer:function(){var b=this,d=b.userConfig.xlist;b.userConfig=a.merge({content:e,downContent:"",upContent:"",loadingContent:f,prefix:"ks-xlist-plugin-pulldown-"},b.userConfig),c=b.userConfig.prefix,d&&d.on("afterRender",function(){b.render()})},render:function(){var a=this,b=c+"container",e='<div class="'+b+'"></div>',f=a.userConfig.xlist,g=a.userConfig.height||60,h=a.$pulldown=d(e).css({position:"absolute",width:"100%",height:g,top:-g}).prependTo(f.$ctn);a.on("afterStatusChange",function(b){h.removeClass(c+b.prevVal).addClass(c+b.newVal),a.setContent(a.userConfig[b.newVal+"Content"])}),h.addClass(c+a.get("status")),h.html(a.userConfig[a.get("status")+"Content"]||a.userConfig.content),a._bindEvt()},_bindEvt:function(){var a=this;if(!a._evtBinded){var b,c,d=a.userConfig.height||60,e=0;xlist.on("drag",function(){e=xlist.getOffsetTop(),e>0&&(Math.abs(e)<d?a.set("status","down"):a.set("status","up"))}),xlist.on("dragStart",function(){clearTimeout(c),clearTimeout(b),a.isBoundryBounce=!1,xlist.enableBoundryCheck()}),xlist.on("outOfBoundry",function(){a.isBoundryBounce=!0}),xlist.on("scrollEnd",function(f){e=xlist.getOffsetTop(),e>d&&!a.isBoundryBounce&&"tapHold"!=f.originType&&(xlist.disableBoundryCheck(),xlist.scrollTo(-d,.4),xlist.isScrolling=!1,a.set("status","loading"),c=setTimeout(function(){xlist.enableBoundryCheck()},500),b=setTimeout(function(){location.reload()},700))}),a._evtBinded=!0}},setContent:function(a){var b=this;a&&b.$pulldown.html(a)}},{ATTRS:{status:{value:"down"}}});return g},{requires:["base","node"]});