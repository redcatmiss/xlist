/*!build time : 2014-07-10 4:00:19 PM*/
KISSY.add("gallery/xlist/1.0/drag",function(a){function b(a){return a.changedTouches.length>1?void(l=!0):(o=[],n={},n.startX=a.touches[0].clientX,n.startY=a.touches[0].clientY,n.deltaX=0,n.deltaY=0,a.touch=n,o.push({deltaX:n.deltaX,deltaY:n.deltaY,timeStamp:a.timeStamp}),a.deltaX=n.deltaX,a.deltaY=n.deltaY,void m(a.target).fire(g,a))}function c(a){a.changedTouches.length>1||(o.length?(n.deltaX=a.touches[0].clientX-n.startX,n.deltaY=a.touches[0].clientY-n.startY,a.touch=n,o.push({deltaX:n.deltaX,deltaY:n.deltaY,timeStamp:a.timeStamp}),a.deltaX=n.deltaX,a.deltaY=n.deltaY,a.velocityX=0,a.velocityY=0,a.isPropagationStopped()||m(a.target).fire(i,a)):(n={},n.startX=a.touches[0].clientX,n.startY=a.touches[0].clientY,n.deltaX=0,n.deltaY=0,a.touch=n,o.push({deltaX:n.deltaX,deltaY:n.deltaY,timeStamp:a.timeStamp}),a.deltaX=n.deltaX,a.deltaY=n.deltaY,m(a.target).fire(g,a)))}function d(a){var b=0,c=0,d=0;if(!(a.changedTouches.length>1)){n.deltaX=a.changedTouches[0].clientX-n.startX,n.deltaY=a.changedTouches[0].clientY-n.startY,a.deltaX=n.deltaX,a.deltaY=n.deltaY,a.touch=n,a.touch.record=o;var g=(a.touch.startX,a.touch.startY,o.length),i=o[0]&&o[0].timeStamp;if(!(2>g)&&i){{o[g-1].timeStamp-o[0].timeStamp}for(var j in o)j>0?(o[j].velocity=e(o[j].deltaX,o[j].deltaY,o[j-1].deltaX,o[j-1].deltaY)/(o[j].timeStamp-o[j-1].timeStamp),o[j].velocityX=(o[j].deltaX-o[j-1].deltaX)/(o[j].timeStamp-o[j-1].timeStamp),o[j].velocityY=(o[j].deltaY-o[j-1].deltaY)/(o[j].timeStamp-o[j-1].timeStamp)):(o[j].velocity=0,o[j].velocityX=0,o[j].velocityY=0);var l=o[0].velocityX/Math.abs(o[0].velocityX);for(var j in o)o[j].velocityX/Math.abs(o[j].velocityX)!=l&&(l=o[j].velocityX/Math.abs(o[j].velocityX),d=j);var p=o[0].velocityY/Math.abs(o[0].velocityY);for(var j in o)o[j].velocityY/Math.abs(o[j].velocityY)!=p&&(p=o[j].velocityY/Math.abs(o[j].velocityY),c=j);b=Math.max(d,c);{o[b]}a.touch.record=a.touch.record.splice(b-1);var q=f(a.touch.record);a.velocityX=Math.abs(q.velocityX)>k?q.velocityX/Math.abs(q.velocityX)*k:q.velocityX,a.velocityY=Math.abs(q.velocityY)>k?q.velocityY/Math.abs(q.velocityY)*k:q.velocityY,a.velocity=Math.sqrt(Math.pow(a.velocityX,2)+Math.pow(a.velocityY,2)),m(a.target).fire(h,a),n={},o=[]}}}function e(a,b,c,d){return Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))}function f(a){for(var b=0,c=0,d=a.length,e=0;d>e;e++)b+=a[e].velocityY,c+=a[e].velocityX;return b/=d,c/=d,{velocityY:Math.abs(a[d-1].velocityY)>j?b:0,velocityX:Math.abs(a[d-1].velocityX)>j?c:0}}var g=(window.document,"gestureDragStart"),h="gestureDragEnd",i="gestureDrag",j=.35,k=8,l=!1,m=a.all,n={},o=[];return a.each([i],function(e){a.Event.Special[e]={setup:function(){m(this).on("touchstart",b),m(this).on("touchmove",c),m(this).on("touchend",d)},teardown:function(){m(this).detach("touchstart",b),m(this).detach("touchmove",c),m(this).detach("touchend",d)}}}),{DRAG_START:g,DRAG:i,DRAG_END:h}},{requires:["node"]}),KISSY.add("gallery/xlist/1.0/index",function(a,b,c,d,e,f){function g(a){return x===!1?!1:""===x?a:x+a.charAt(0).toUpperCase()+a.substr(1)}function h(a,b){return[[(a/3+(a+b)/3-a)/(b-a),(a*a/3+a*b*2/3-a*a)/(b*b-a*a)],[(b/3+(a+b)/3-a)/(b-a),(b*b/3+a*b*2/3-a*a)/(b*b-a*a)]]}var i,j,k,l=a.all,m="scrollEnd",n="scroll",o="dragEnd",p="dragStart",q="drag",r="afterRender",s="sync",t=.002,u=.4,v="ease-in-out",w=.1,x=function(){for(var a,b=document.createElement("div").style,c=["t","webkitT","MozT","msT","OT"],d=0,e=c.length;e>d;d++)if(a=c[d]+"ransform",a in b)return c[d].substr(0,c[d].length-1);return!1}(),y=g("transform"),z=g("transition"),A=d.extend({initializer:function(){var b=this,c=b.userConfig=a.mix({data:[],translate3D:!1,autoRender:!0,itemHeight:30,useTransition:!0},b.userConfig,void 0,void 0,!0);b.$renderTo=l(c.renderTo).css({overflowY:"hidden"}),window.xlist=b,i=c.clsPrefix||"ks-xlist-",b.SROLL_ACCELERATION=c.SROLL_ACCELERATION||t,j=i+"container",k=new RegExp(j);b.height=c.height||b.$renderTo.height();b.visibleIndex={},b.__stickiesRecord={},b.__boundryCheckEnabled=!0,b.initItemPool(),c.autoRender&&b.render()},translateY:function(a,b){a.style[y]="translate(0,"+b+"px) translateZ(0)"},removeData:function(){var a=this;a.userConfig.data=[]},setData:function(a){for(var b=this,c=0,d=a.length;d>c;c++)b.userConfig.data.push(a[c])},getDomInfo:function(){for(var a=this,b=a.userConfig,c=b.stickies||{},d=b.data,e=b.itemHeight,f=0,g=[],h=function(){var a=0;for(var b in c)a++;return d.length+a}(),i=0,j=0,k=0;h>k;k++){var l={};if(k in c){j++,i=c[k].height;for(var m in c[k])"type"!=k&&"template"!=k&&(l[m]=c[k][m]);l.type=c[k].type||2,l.template=c[k].template||""}else i=e,l.data=d[k-j],l.template=b.template,l.type=1;l.row=k,l.top=f,l.height=i,g.push(l),f+=i}return a.domInfo=g,g},getItemObj:function(a,b,c){var d=this,b=(d.velocityY||0,d.height),e=d.userConfig,f=d.userConfig.itemHeight,g=e.maxBufferedNum||Math.ceil(d.height/f);g=0;var h=a-g*f;0>h&&(h=0);for(var i,j={},k=0,l=c.length;l>k;k++)i=c[k],i.top>=h-f&&i.top<=h+2*g*f+b&&(j[i.row]=i);return j},getOffsetTop:function(){var a=this;return a.$ctn&&a.$ctn[0]?Number(window.getComputedStyle(a.$ctn[0])[y].match(/[-\d]+/g)[5]):0},getVisibleItems:function(){var a=this,b={};for(var c in a.visibleIndex)b[c]=a.domInfo[c];return b},clear:function(){var a=this;for(var b in a.__renderDomRecord)a.__renderDomRecord[b].remove();a.visibleIndex={},a.__stickiesRecord={}},hasKey:function(a,b){for(var c in a)if(c==b)return!0;return!1},update:function(){var a=this;clearInterval(a.updateItv);var b=a.userConfig,c=(a.$ctn[0],a.itemPool),d=(b.itemHeight,a.height),e=-a.getOffsetTop(),f=a.getItemObj(e,d,a.domInfo);for(var g in f){var h=null;if(!a.visibleIndex[g]&&2!=f[g].type){h=c.getItem(f[g],g),h.element.style.position="absolute",h.element.style.height=f[g].height+"px",a.translateY(h.element,f[g].top),a.visibleIndex[g]=h,a.update();break}}for(var g in a.visibleIndex)a.hasKey(f,g)||(c.returnItem(a.visibleIndex[g],g),delete a.visibleIndex[g]);a.isScrolling&&(a.updateItv=setTimeout(function(){a.update(),a.fire(n,{offsetTop:-e})},0))},initItemPool:function(){var b=this;b.__renderDomRecord={};{var c=b.userConfig;b.itemPool={items:[],visibleItems:{},getItem:function(d,f,g){var h;return g?(h=g,h.element.innerHTML=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}).innerHTML:l(e(d.template||"").render(d.data)).html()):this.items.length?(h=this.items.pop(),h.element.innerHTML=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}).innerHTML:l(e(d.template).render(d.data)).html()):(h={template:d.template},h.element=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}):l(e(d.template).render(d.data))[0],b.__renderDomRecord[d.row]=l(h.element).appendTo(b.$ctn)),this.visibleItems[f]=h,h},returnItem:function(a,b){delete this.visibleItems[b],this.items.push(a)}}}},enableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!0,a._boundryCheck()},disableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!1},scrollTo:function(a,b,c){var d=this,b=b||0;b>1&&(b/=1e3);var e=d.$ctn[0];d.translateY(e,(-a).toFixed(0));var f="";d.userConfig.useTransition&&(f=["-",x,"-transform ",b,"s ",c," 0s"].join(""),e.style[z]=f),d.isScrolling=!0,d.update(),d.fire("scrollTo",{transition:f,offsetTop:a,duration:b,easing:c}),setTimeout(function(){d.isScrolling=!1,d.fire(m,{offsetTop:d.getOffsetTop()})},1e3*b)},scrollBy:function(a,b,c){var d=this,e=d.getOffsetTop();d.scrollTo(Number(e)+Number(a),b,c)},_boundryCheck:function(){var a=this;if(a.__boundryCheckEnabled){var b=a.getOffsetTop(),c=a.height;b>0&&a.scrollTo(0,u,v),b<c-a.containerHeight&&a.scrollTo(a.containerHeight-c,u,v),a.update()}},_createContainer:function(){var a=this;if(!a.__isContainerCreated){var b,c=a.$renderTo;l("."+j,a.$renderTo)[0]?b=l("."+j,a.$renderTo)[0]:(b=document.createElement("div"),b.className=j,c[0].appendChild(b)),b.style.background="#fff",b.style.width="100%",b.style.position="relative",b.style["z-index"]=1,a.translateY(b,0),a.$ctn=l(b),a.__isContainerCreated=!0,a.fire(r)}},sync:function(){this.render()},isInSideOfBoundry:function(){var a=this,b=a.getOffsetTop(),c=a.height;return 0>=b&&b>=c-a.containerHeight},isVisible:function(a){var b=this,c=a+b.getOffsetTop();return c>=0&&c<=b.height?!0:!1},render:function(){var a=this;a.getDomInfo(),a._createContainer();var b=a.userConfig,c=a.height=b.height||a.$renderTo.height(),d=a.domInfo.length,e=a.domInfo[d-1],f=(a.$renderTo,a.$ctn),g=f[0],h=a.getItemObj(-a.getOffsetTop(),c,a.domInfo);a.containerHeight=e&&e.top?e.top+e.height:a.height,a.containerHeight<a.height&&(a.containerHeight=a.height);for(var i=0,j=a.domInfo.length;j>i;i++)if(2==a.domInfo[i].type&&!a.__stickiesRecord[a.domInfo[i].row]){var k=document.createElement("div");k.style.top=0,k.style.width="100%",k.style.height=a.domInfo[i].height,k.style.position="absolute",a.translateY(k,a.domInfo[i].top),k.innerHTML=a.domInfo[i].template||"",g.appendChild(k),a.__stickiesRecord[a.domInfo[i].row]=k}for(var i in a.itemPool.visibleItems)a.itemPool.getItem(h[i],i,a.itemPool.visibleItems[i]);f.height(a.containerHeight),a._bindEvt(),a.update(),a.fire(s)},simulateMouseEvent:function(a,b){if(!(a.touches.length>1)){var c=a.changedTouches,d=c[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(e)}},_bindEvt:function(){function a(a){var b=a.velocityY;if(c.velocityY=b,c.fire(o,{velocityY:a.velocityY}),Math.abs(b)<.5||!c.userConfig.useTransition)return c.fire(m,{offsetTop:c.getOffsetTop()}),c._boundryCheck(),void c.update();var d=c.height,f=c.getOffsetTop(),i=g.maxSpeed>0&&g.maxSpeed<6?g.maxSpeed:3;if(b>i&&(b=i),-i>b&&(b=-i),c.direction=a.velocityY<0?"up":"down",f>0||f<d-c.containerHeight){var j=w*(b/Math.abs(b)),k=b/j,f=c.getOffsetTop(),l=f+k*b/2;return void c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")")}var j=c.SROLL_ACCELERATION*(b/Math.abs(b)),k=b/j,l=f+k*b/2;if(l>0){var n=0-f,p=(b-Math.sqrt(-2*j*n+b*b))/j;c.scrollTo(0,p,"cubic-bezier("+h(-k,-k+p)+")"),e=b-j*p}else if(l<d-c.containerHeight){var n=d-c.containerHeight-f,p=(b+Math.sqrt(-2*j*n+b*b))/j;c.scrollTo(c.containerHeight-d,p,"cubic-bezier("+h(-k,-k+p)+")"),e=b-j*p}else c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")");c.isScrolling=!0,c.update()}function b(a){if(k.test(a.target.className)){if(c.isScrolling=!1,e){c.fire("outOfBoundry");var b=e,d=.04*(b/Math.abs(b)),f=b/d,g=c.getOffsetTop(),i=g+f*b/2;c.scrollTo(-i,f,"cubic-bezier("+h(-f,0)+")"),e=0}else c._boundryCheck();c.fire(m,{offsetTop:c.getOffsetTop()})}}{var c=this,d=0,e=null,g=c.userConfig,i=c.$ctn,j=i[0],l=c.$renderTo;c.height}c.__isEvtBind||(c.__isEvtBind=!0,l.on("touchstart",function(a){a.preventDefault()}).on("tap",function(a){c.isScrolling||c.simulateMouseEvent(a,"click")}).on("tap tapHold",function(a){c.isScrolling=!1,c.fire(m,{originType:a.type,offsetTop:c.getOffsetTop()})}).on(f.DRAG_START,function(a){a.changedTouches.length>1||(d=c.getOffsetTop(),c.isScrolling&&c.fire(m,{offsetTop:d}),c.translateY(j,d),j.style[z]="",c.fire(p))}).on(f.DRAG,function(a){if(a.preventDefault(),!(a.changedTouches.length>1)){var b=Number(d)+a.deltaY;b>0&&(b/=2),b<c.height-c.containerHeight&&(b+=(c.height-c.containerHeight-b)/2),c.translateY(j,b.toFixed(0)),j.style[z]="",c.isScrolling=!1,c.update(),c.fire(q),c.fire(n,{offsetTop:Number(b.toFixed(0))})}}).on(f.DRAG_END,function(b){a(b)}),j.addEventListener("transitionend",b,!1),j.addEventListener("webkitTransitionEnd",b,!1),j.addEventListener("oTransitionEnd",b,!1),j.addEventListener("MSTransitionEnd",b,!1))}},{ATTRS:{}});return A},{requires:["node","event","base","gallery/template/1.0/","./drag"]});