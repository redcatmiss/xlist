/*!build time : 2014-04-20 11:03:07 AM*/
KISSY.add("gallery/xlist/1.0/drag",function(a){function b(a){return a.changedTouches.length>1?void(m=!0):(h=[],g={},g.startX=a.changedTouches[0].clientX,g.startY=a.changedTouches[0].clientY,g.deltaX=0,g.deltaY=0,a.touch=g,h.push({deltaX:g.deltaX,deltaY:g.deltaY,timeStamp:a.timeStamp}),a.deltaX=g.deltaX,a.deltaY=g.deltaY,void n(a.target).fire(i,a))}function c(a){a.changedTouches.length>1||(g.deltaX=a.changedTouches[0].clientX-g.startX,g.deltaY=a.changedTouches[0].clientY-g.startY,a.touch=g,h.push({deltaX:g.deltaX,deltaY:g.deltaY,timeStamp:a.timeStamp}),a.deltaX=g.deltaX,a.deltaY=g.deltaY,n(a.target).fire(k,a))}function d(a){var b=0,c=0,d=0;if(!(a.changedTouches.length>1)){g.deltaX=a.changedTouches[0].clientX-g.startX,g.deltaY=a.changedTouches[0].clientY-g.startY,a.deltaX=g.deltaX,a.deltaY=g.deltaY,a.touch=g,a.touch.record=h;{var i=(a.touch.startX,a.touch.startY,h.length);h[0].timeStamp}if(!(2>i)){{h[i-1].timeStamp-h[0].timeStamp}for(var k in h)k>0?(h[k].velocity=e(h[k].deltaX,h[k].deltaY,h[k-1].deltaX,h[k-1].deltaY)/(h[k].timeStamp-h[k-1].timeStamp),h[k].velocityX=(h[k].deltaX-h[k-1].deltaX)/(h[k].timeStamp-h[k-1].timeStamp),h[k].velocityY=(h[k].deltaY-h[k-1].deltaY)/(h[k].timeStamp-h[k-1].timeStamp)):(h[k].velocity=0,h[k].velocityX=0,h[k].velocityY=0);var m=h[0].velocityX/Math.abs(h[0].velocityX);for(var k in h)h[k].velocityX/Math.abs(h[k].velocityX)!=m&&(m=h[k].velocityX/Math.abs(h[k].velocityX),d=k);var o=h[0].velocityY/Math.abs(h[0].velocityY);for(var k in h)h[k].velocityY/Math.abs(h[k].velocityY)!=o&&(o=h[k].velocityY/Math.abs(h[k].velocityY),c=k);b=Math.max(d,c);{h[b]}a.touch.record=a.touch.record.splice(b-1);var p=f(a.touch.record);a.velocityX=Math.abs(p.velocityX)>l?p.velocityX/Math.abs(p.velocityX)*l:p.velocityX,a.velocityY=Math.abs(p.velocityY)>l?p.velocityY/Math.abs(p.velocityY)*l:p.velocityY,a.velocity=Math.sqrt(Math.pow(a.velocityX,2)+Math.pow(a.velocityY,2)),n(a.target).fire(j,a)}}}function e(a,b,c,d){return Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))}function f(a){for(var b=0,c=0,d=a.length,e=0;d>e;e++)b+=a[e].velocityY,c+=a[e].velocityX;return b/=d,c/=d,{velocityY:b,velocityX:c}}var g,h,i=(window.document,"gestureDragStart"),j="gestureDragEnd",k="gestureDrag",l=8,m=!1,n=a.all;return a.each([k],function(e){a.Event.Special[e]={setup:function(){n(this).on("touchstart",b),n(this).on("touchmove",c),n(this).on("touchend",d)},teardown:function(){n(this).detach("touchstart",b),n(this).detach("touchmove",c),n(this).detach("touchend",d)}}}),{DRAG_START:i,DRAG:k,DRAG_END:j}},{requires:["node"]}),KISSY.add("gallery/xlist/1.0/index",function(a,b,c,d,e,f){function g(a){return v===!1?!1:""===v?a:v+a.charAt(0).toUpperCase()+a.substr(1)}function h(a,b){return[[(a/3+(a+b)/3-a)/(b-a),(a*a/3+a*b*2/3-a*a)/(b*b-a*a)],[(b/3+(a+b)/3-a)/(b-a),(b*b/3+a*b*2/3-a*a)/(b*b-a*a)]]}var i=a.all,j="ks-xlist-",k=j+"container",l=new RegExp(k),m="scrollEnd",n="scroll",o="dragEnd",p="dragStart",q="drag",r=.002,s=.4,t="ease-in-out",u=.1,v=function(){for(var a,b=document.createElement("div").style,c=["t","webkitT","MozT","msT","OT"],d=0,e=c.length;e>d;d++)if(a=c[d]+"ransform",a in b)return c[d].substr(0,c[d].length-1);return!1}(),w=g("transform"),x=g("transition"),y=d.extend({initializer:function(){var b=this,c=b.userConfig=a.mix({data:[],translate3D:!1,autoRender:!0,itemHeight:30},b.userConfig,void 0,void 0,!0);b.$renderTo=i(c.renderTo).css({overflowY:"hidden"});b.height=c.height||b.$renderTo.height();b.visibleIndex={},b.__renderIdRecord={},b.__boundryCheckEnabled=!0,b.initItemPool(),c.autoRender&&b.render()},translateY:function(a,b){var c=this;a.style[w]=c.userConfig.translate3D?"translate3D(0,"+b+"px,0)":"translateY("+b+"px)"},removeData:function(){var a=this;a.userConfig.data=[]},setData:function(a){for(var b=this,c=0,d=a.length;d>c;c++)b.userConfig.data.push(a[c])},getDomInfo:function(){for(var a=this,b=a.userConfig,c=b.stickies||{},d=b.data,e=b.itemHeight,f=0,g=[],h=function(){var a=0;for(var b in c)a++;return d.length+a}(),i=0,j=0,k=0;h>k;k++){var l={};k in c?(j++,i=c[k].height,l.type=c[k].type||2,l.template=c[k].template||""):(i=e,l.data=d[k-j],l.template=b.template,l.type=1),l.row=k,l.top=f,l.height=i,g.push(l),f+=i}return a.domInfo=g,g},getItemObj:function(a,b,c){var d=this,b=(d.velocityY||0,d.height),e=d.userConfig,f=d.userConfig.itemHeight,g=e.maxBufferedNum||Math.ceil(d.height/f),h=a-g*f;0>h&&(h=0);for(var i,j={},k=0,l=c.length;l>k;k++)i=c[k],i.top>=h&&i.top<=h+2*g*f+b&&(j[k]=i);return j},getOffsetTop:function(){var a=this;return a.$ctn&&a.$ctn[0]?Number(window.getComputedStyle(a.$ctn[0])[w].match(/[-\d]+/g)[5]):0},update:function(){var a=this,b=a.userConfig,c=(a.$ctn[0],a.itemPool),d=(b.itemHeight,a.height),e=-a.getOffsetTop(),f=a.getItemObj(e,d,a.domInfo);for(var g in f){var h=null;a.visibleIndex[g]||2==f[g].type||(h=c.getItem(f[g]),h.element.style.position="absolute",h.element.style.height=f[g].height+"px",a.translateY(h.element,f[g].top),a.visibleIndex[g]=h)}for(var g in a.visibleIndex)a.hasKey(f,g)||(c.returnItem(a.visibleIndex[g]),delete a.visibleIndex[g]);a.isScrolling&&(a.updateItv=setTimeout(function(){a.update(),a.fire(n,{offsetTop:-e})},0))},clear:function(){var a=this;for(var b in a.__renderDomRecord)a.__renderDomRecord[b].remove();a.visibleIndex={},a.__renderIdRecord={}},hasKey:function(a,b){for(var c in a)if(c===b)return!0;return!1},initItemPool:function(){var b=this;b.__renderDomRecord=[];{var c=b.userConfig;b.itemPool={items:[],getItem:function(d){var f;return this.items.length?(f=this.items.pop(),f.element.innerHTML=a.isFunction(c.renderHook)?c.renderHook({item:f,data:d.data}).innerHTML:i(e(d.template).render(d.data)).html()):(f={template:d.template},f.element=a.isFunction(c.renderHook)?c.renderHook({item:f,data:d.data}):i(e(d.template).render(d.data))[0],b.__renderDomRecord.push(i(f.element).appendTo(b.$ctn))),f},returnItem:function(a){this.items.push(a)}}}},enableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!0,a._boundrycheck()},disableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!1},scrollTo:function(a,b,c){var d=this,b=b||0;b>1&&(b/=1e3);var e=d.$ctn[0];d.translateY(e,(-a).toFixed(0)),e.style[x]=["-",v,"-transform ",b,"s ",c," 0s"].join(""),d.isScrolling=!0,d.update()},_boundryCheck:function(){var a=this;if(a.__boundryCheckEnabled){var b=a.getOffsetTop(),c=a.height;b>0&&a.scrollTo(0,s,t),b<c-a.containerHeight&&a.scrollTo(a.containerHeight-c,s,t),a.update()}},_createContainer:function(){var a=this;if(!a.__isContainerCreated){var b,c=a.$renderTo;i("."+k,a.$renderTo)[0]?b=i("."+k,a.$renderTo)[0]:(b=document.createElement("div"),b.className=k,c[0].appendChild(b)),b.style.background="#fff",b.style.width="100%",b.style.position="relative",b.style["z-index"]=1,b.style[g("backfaceVisibility")]="hidden",b.style[g("perspective")]=0,a.translateY(b,0),a.$ctn=i(b),a.__isContainerCreated=!0}},sync:function(){{var a=this,b=a.userConfig;a.height=b.height||a.$renderTo.height()}a.render()},render:function(){var a=this;a.getDomInfo(),a._createContainer();var b=(a.userConfig,a.domInfo.length),c=a.domInfo[b-1],d=(a.$renderTo,a.$ctn),e=d[0];a.containerHeight=c&&c.top?c.top+c.height:a.height,a.containerHeight<a.height&&(a.containerHeight=a.height);for(var f=0,g=a.domInfo.length;g>f;f++)if(2==a.domInfo[f].type&&!a.__renderIdRecord[a.domInfo[f].row]){var h=document.createElement("div");h.style.top=0,h.style.width="100%",h.style.height=a.domInfo[f].height,h.style.position="absolute",a.translateY(h,a.domInfo[f].top),h.innerHTML=a.domInfo[f].template||"",e.appendChild(h),a.__renderIdRecord[a.domInfo[f].row]=1}d.height(a.containerHeight),a._bindEvt(),a.update()},_bindEvt:function(){function a(a){var b=a.velocityY;if(c.velocityY=b,c.fire(o,{velocityY:a.velocityY}),Math.abs(b)<.5)return c.fire(m,{offsetTop:c.getOffsetTop()}),void c._boundrycheck();var d=c.height,e=c.getOffsetTop(),f=i.maxSpeed>0&&i.maxSpeed<6?i.maxSpeed:3;if(b>f&&(b=f),-f>b&&(b=-f),c.direction=a.velocityY<0?"up":"down",e>0||e<d-c.containerHeight){var j=u*(b/Math.abs(b)),k=b/j,e=c.getOffsetTop(),l=e+k*b/2;return void c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")")}var j=r*(b/Math.abs(b)),k=b/j,l=e+k*b/2;if(l>0){var n=0-e,p=(b-Math.sqrt(-2*j*n+b*b))/j;c.scrollTo(0,p,"cubic-bezier("+h(-k,-k+p)+")"),g=b-j*p}else if(l<d-c.containerHeight){var n=d-c.containerHeight-e,p=(b+Math.sqrt(-2*j*n+b*b))/j;c.scrollTo(c.containerHeight-d,p,"cubic-bezier("+h(-k,-k+p)+")"),g=b-j*p}else c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")");c.isScrolling=!0,setTimeout(function(){c.update()},10)}function b(a){if(l.test(a.target.className)){if(c.isScrolling=!1,g){var b=g,d=.04*(b/Math.abs(b)),e=b/d,f=c.getOffsetTop(),i=f+e*b/2;c.scrollTo(-i,e,"cubic-bezier("+h(-e,0)+")"),g=0}else c._boundrycheck();c.fire(m,{offsetTop:c.getOffsetTop()})}}var c=this;if(!c.__isEvtBind){c.__isEvtBind=!0;var d,e,g=null,i=c.userConfig,j=c.$ctn,k=j[0],s=c.$renderTo,t=c.height;s.on(f.DRAG_START,function(a){a.preventDefault(),a.changedTouches.length>1||(d=c.getOffsetTop(),c.isScrolling&&c.fire(m,{offsetTop:d}),c.isScrolling=!1,e=a.changedTouches[0].screenY,c.translateY(k,d),k.style[x]="",c.fire(p))}).on(f.DRAG,function(a){if(a.preventDefault(),!(a.changedTouches.length>1)){var b=d/1+a.changedTouches[0].screenY/1-e;b>0&&(b/=2),b<t-c.containerHeight&&(b+=(t-c.containerHeight-b)/2),c.translateY(k,b.toFixed(0)),k.style[x]="",c.isScrolling=!1,c.fire(q),c.fire(n,{offsetTop:Number(b.toFixed(0))})}}).on(f.DRAG_END,function(b){a(b)}),k.addEventListener("transitionend",b,!1),k.addEventListener("webkitTransitionEnd",b,!1),k.addEventListener("oTransitionEnd",b,!1),k.addEventListener("MSTransitionEnd",b,!1)}}},{ATTRS:{}});return y},{requires:["node","event","base","gallery/template/1.0/","./drag"]});