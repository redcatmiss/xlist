/**
 * @fileoverview
 * @author 伯才<xiaoqi.huxq@alibaba-inc.com>
 * @plugin pullup XLIST上拉加载插件
 **/
KISSY.add(function(S, Base, Node) {
	var $ = S.all;
	var prefix;
	var containerCls;
	var content = "Pull Down To Refresh";
	var loadingContent = "Loading...";

	var PullUp = Base.extend({
		initializer: function() {
			var self = this;
			var xlist = self.userConfig.xlist;
			self.userConfig = S.merge({
				content: content,
				downContent: "",
				upContent: "",
				pullUpHeight:40,
				loadingContent: loadingContent,
				prefix: "ks-xlist-plugin-pullup-"
			}, self.userConfig);
			var height = self.userConfig.height || 60;
			prefix = self.userConfig.prefix;
			xlist.userConfig.boundry.bottom = height;
			xlist.on("afterRender",function(){
				self.render()
				self.__bindEvt();
			})

			

		},
		render: function() {
			var self = this;
			var containerCls = prefix + "container";
			var tpl = '<div class="' + containerCls + '"></div>';
			var xlist = self.userConfig.xlist;
			var height = self.userConfig.height || 60;
			var $pullup = self.$pullup = $("<div></div>").addClass(containerCls).css({
				"position":"absolute",
				"bottom":-height,
				"width":"100%"
			}).prependTo(xlist.$ctn);
			self.fire("afterRender");
		},
		__bindEvt:function(){
			var self =this;
			var xlist= self.userConfig.xlist;
			var $pullup = self.$pullup;

			self.on("afterStatusChange", function(e) {
				$pullup.removeClass(prefix + e.prevVal).addClass(prefix + e.newVal);
				self.setContent(self.userConfig[e.newVal + "Content"]);
			})
			$pullup.addClass(prefix + self.get("status"));
			$pullup.html(self.userConfig[self.get("status") + "Content"] || self.userConfig["content"]);

			var offsetTop = 0;

			xlist.on("drag", function(e) {
				offsetTop = xlist.getOffsetTop();
				if (offsetTop <  xlist.height - xlist.containerHeight - self.userConfig.pullUpHeight) {
					//松开加载更多
					self.set("status","down")
				}else{
					self.set("status","up")
				}
			})

			xlist.on("scrollEnd",function(e){
				offsetTop = e.offsetTop
				if(offsetTop <  xlist.height - xlist.containerHeight - self.userConfig.pullUpHeight){
					self.set("status","loading");
					self.fire("loading",function(){
						
					})
				}
			})

			xlist.on("dataChange", function() {
				console.log("dataChange")
				self.set("status","up")
			})

		},
		setContent: function(content) {
			var self = this;
			if (content){
				self.$pullup.html(content);
			}
		}
	}, {
		ATTRS: {
			"status": {
				value: "up"
			}

		}
	})

	return PullUp;


}, {
	requires: ['base', 'node']
});