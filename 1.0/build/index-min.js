/*!build time : 2014-07-16 2:22:33 PM*/
KISSY.add("gallery/xlist/1.0/index",function(a,b,c,d,e,f){function g(a){return x===!1?!1:""===x?a:x+a.charAt(0).toUpperCase()+a.substr(1)}function h(a,b){return[[(a/3+(a+b)/3-a)/(b-a),(a*a/3+a*b*2/3-a*a)/(b*b-a*a)],[(b/3+(a+b)/3-a)/(b-a),(b*b/3+a*b*2/3-a*a)/(b*b-a*a)]]}var i,j,k,l=a.all,m="scrollEnd",n="scroll",o="dragEnd",p="dragStart",q="drag",r="afterRender",s="sync",t=.002,u=.4,v="ease-in-out",w=.1,x=function(){for(var a,b=document.createElement("div").style,c=["t","webkitT","MozT","msT","OT"],d=0,e=c.length;e>d;d++)if(a=c[d]+"ransform",a in b)return c[d].substr(0,c[d].length-1);return!1}(),y=g("transform"),z=g("transition"),A=d.extend({initializer:function(){var b=this,c=b.userConfig=a.mix({data:[],translate3D:!1,autoRender:!0,itemHeight:30,useTransition:!0},b.userConfig,void 0,void 0,!0);b.$renderTo=l(c.renderTo).css({overflowY:"hidden"}),window.xlist=b,i=c.clsPrefix||"ks-xlist-",b.SROLL_ACCELERATION=c.SROLL_ACCELERATION||t,j=i+"container",k=new RegExp(j);b.height=c.height||b.$renderTo.height();b.visibleIndex={},b.__stickiesRecord={},b.__boundryCheckEnabled=!0,b.initItemPool(),c.autoRender&&b.render()},translateY:function(a,b){a.style[y]="translate(0,"+b+"px) translateZ(0)"},removeData:function(){var a=this;a.userConfig.data=[]},setData:function(a){for(var b=this,c=0,d=a.length;d>c;c++)b.userConfig.data.push(a[c])},getDomInfo:function(){for(var a=this,b=a.userConfig,c=b.stickies||{},d=b.data,e=b.itemHeight,f=0,g=[],h=function(){var a=0;for(var b in c)a++;return d.length+a}(),i=0,j=0,k=0;h>k;k++){var l={};if(k in c){j++,i=c[k].height;for(var m in c[k])"type"!=k&&"template"!=k&&(l[m]=c[k][m]);l.type=c[k].type||2,l.template=c[k].template||""}else i=e,l.data=d[k-j],l.template=b.template,l.type=1;l.row=k,l.top=f,l.height=i,g.push(l),f+=i}return a.domInfo=g,g},getItemObj:function(a,b,c){var d=this,b=(d.velocityY||0,d.height),e=d.userConfig,f=d.userConfig.itemHeight,g=e.maxBufferedNum||Math.ceil(d.height/f);g=0;var h=a-g*f;0>h&&(h=0);for(var i,j={},k=0,l=c.length;l>k;k++)i=c[k],i.top>=h-f&&i.top<=h+2*g*f+b&&(j[i.row]=i);return j},getOffsetTop:function(){var a=this;return a.$ctn&&a.$ctn[0]?Number(window.getComputedStyle(a.$ctn[0])[y].match(/[-\d]+/g)[5]):0},getVisibleItems:function(){var a=this,b={};for(var c in a.visibleIndex)b[c]=a.domInfo[c];return b},clear:function(){var a=this;for(var b in a.__renderDomRecord)a.__renderDomRecord[b].remove();a.visibleIndex={},a.__stickiesRecord={}},hasKey:function(a,b){for(var c in a)if(c==b)return!0;return!1},update:function(){var a=this;clearInterval(a.updateItv);var b=a.userConfig,c=(a.$ctn[0],a.itemPool),d=(b.itemHeight,a.height),e=-a.getOffsetTop(),f=a.getItemObj(e,d,a.domInfo);for(var g in f){var h=null;if(!a.visibleIndex[g]&&2!=f[g].type){h=c.getItem(f[g],g),h.element.style.position="absolute",h.element.style.height=f[g].height+"px",a.translateY(h.element,f[g].top),a.visibleIndex[g]=h,a.update();break}}for(var g in a.visibleIndex)a.hasKey(f,g)||(c.returnItem(a.visibleIndex[g],g),delete a.visibleIndex[g]);a.isScrolling&&(a.updateItv=setTimeout(function(){a.update(),a.fire(n,{offsetTop:-e})},0))},initItemPool:function(){var b=this;b.__renderDomRecord={};{var c=b.userConfig;b.itemPool={items:[],visibleItems:{},getItem:function(d,f,g){var h;return g?(h=g,h.element.innerHTML=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}).innerHTML:l(e(d&&d.template).render(d.data)).html()):this.items.length?(h=this.items.pop(),h.element.innerHTML=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}).innerHTML:l(e(d.template).render(d.data)).html()):(h={template:d.template},h.element=a.isFunction(c.renderHook)?c.renderHook({item:h,data:d.data,row:Number(f)}):l(e(d.template).render(d.data))[0],b.__renderDomRecord[d.row]=l(h.element).appendTo(b.$ctn)),h.element.style.display="block",this.visibleItems[f]=h,h},returnItem:function(a,b){delete this.visibleItems[b],a.element.style.display="none",this.items.push(a)}}}},enableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!0,a._boundryCheck()},disableBoundryCheck:function(){var a=this;a.__boundryCheckEnabled=!1},scrollTo:function(a,b,c){var d=this,b=b||20;if(d.getOffsetTop()!=(-a).toFixed(0)){b>1&&(b/=1e3);var e=d.$ctn[0];d.translateY(e,(-a).toFixed(0));var f="";d.userConfig.useTransition&&(f=["-",x,"-transform ",b,"s ",c," 0s"].join(""),e.style[z]=f),d.isScrolling=!0,d.update(),d.fire("scrollTo",{transition:f,offsetTop:a,duration:b,easing:c})}},scrollBy:function(a,b,c){var d=this,e=d.getOffsetTop();d.scrollTo(Number(e)+Number(a),b,c)},_boundryCheck:function(){var a=this;if(a.__boundryCheckEnabled){var b=a.getOffsetTop(),c=a.height;b>0&&a.scrollTo(0,u,v),b<c-a.containerHeight&&a.scrollTo(a.containerHeight-c,u,v),a.update()}},_createContainer:function(){var a=this;if(!a.__isContainerCreated){var b,c=a.$renderTo;l("."+j,a.$renderTo)[0]?b=l("."+j,a.$renderTo)[0]:(b=document.createElement("div"),b.className=j,c[0].appendChild(b)),b.style.background="#fff",b.style.width="100%",b.style.position="relative",b.style["z-index"]=1,a.translateY(b,0),a.$ctn=l(b),a.__isContainerCreated=!0,a.fire(r)}},sync:function(){this.render()},isInSideOfBoundry:function(){var a=this,b=a.getOffsetTop(),c=a.height;return 0>=b&&b>=c-a.containerHeight},isVisible:function(a){var b=this,c=a+b.getOffsetTop();return c>=0&&c<=b.height?!0:!1},render:function(){var a=this;a.getDomInfo(),a._createContainer();var b=a.userConfig,c=a.height=b.height||a.$renderTo.height(),d=a.domInfo.length,e=a.domInfo[d-1],f=(a.$renderTo,a.$ctn),g=f[0],h=a.getItemObj(-a.getOffsetTop(),c,a.domInfo);a.containerHeight=e&&e.top?e.top+e.height:a.height,a.containerHeight<a.height&&(a.containerHeight=a.height);for(var i=0,j=a.domInfo.length;j>i;i++)if(2==a.domInfo[i].type&&!a.__stickiesRecord[a.domInfo[i].row]){var k=document.createElement("div");k.style.top=0,k.style.width="100%",k.style.height=a.domInfo[i].height,k.style.position="absolute",a.translateY(k,a.domInfo[i].top),k.innerHTML=a.domInfo[i].template||"",g.appendChild(k),a.__stickiesRecord[a.domInfo[i].row]=k}for(var i in a.itemPool.visibleItems)h[i]&&a.itemPool.getItem(h[i],i,a.itemPool.visibleItems[i]);f.height(a.containerHeight),a._bindEvt(),a.update(),a.fire(s)},simulateMouseEvent:function(a,b){if(!(a.touches.length>1)){var c=a.changedTouches,d=c[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(e)}},dragEndHandler:function(a,b){var c=this,d=c.userConfig,e=a.velocityY;if(c.velocityY=e,Math.abs(e)<.5||!d.useTransition)return c.fire(m,{offsetTop:c.getOffsetTop()}),c._boundryCheck(),void c.update();var f=c.height,g=c.getOffsetTop();if(!b){var i=d.maxSpeed>0&&d.maxSpeed<6?d.maxSpeed:3;e>i&&(e=i),-i>e&&(e=-i)}if(c.direction=a.velocityY<0?"up":"down",g>0||g<f-c.containerHeight){var j=w*(e/Math.abs(e)),k=e/j,g=c.getOffsetTop(),l=g+k*e/2;return void c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")")}var j=c.SROLL_ACCELERATION*(e/Math.abs(e)),k=e/j,l=g+k*e/2;if(l>0){var n=0-g,o=(e-Math.sqrt(-2*j*n+e*e))/j;c.scrollTo(0,o,"cubic-bezier("+h(-k,-k+o)+")"),c._v=e-j*o}else if(l<f-c.containerHeight){var n=f-c.containerHeight-g,o=(e+Math.sqrt(-2*j*n+e*e))/j;c.scrollTo(c.containerHeight-f,o,"cubic-bezier("+h(-k,-k+o)+")"),c._v=e-j*o}else c.scrollTo(-l,k,"cubic-bezier("+h(-k,0)+")");c.isScrolling=!0,c.update()},_bindEvt:function(){function a(a){if(k.test(a.target.className)){if(b.isScrolling=!1,b._v){b.fire("outOfBoundry");var c=b._v,d=.04*(c/Math.abs(c)),e=c/d,f=b.getOffsetTop(),g=f+e*c/2;b.scrollTo(-g,e,"cubic-bezier("+h(-e,0)+")"),b._v=0}else b._boundryCheck();b.fire(m,{offsetTop:b.getOffsetTop()})}}{var b=this,c=0,d=(b.userConfig,b.$ctn),e=d[0],g=b.$renderTo;b.height}b.__isEvtBind||(b.__isEvtBind=!0,g.on("touchstart",function(a){a.preventDefault()}).on("tap",function(a){b.isScrolling||b.simulateMouseEvent(a,"click")}).on("tap tapHold",function(a){b.isScrolling=!1,b.fire(m,{originType:a.type,offsetTop:b.getOffsetTop()})}).on(f.DRAG_START,function(a){a.changedTouches.length>1||(c=b.getOffsetTop(),b.isScrolling&&b.fire(m,{offsetTop:c}),b.translateY(e,c),e.style[z]="",b.fire(p))}).on(f.DRAG,function(a){if(a.preventDefault(),!(a.changedTouches.length>1)){var d=Number(c)+a.deltaY;d>0&&(d/=2),d<b.height-b.containerHeight&&(d+=(b.height-b.containerHeight-d)/2),b.translateY(e,d.toFixed(0)),e.style[z]="",b.isScrolling=!1,b.update(),b.fire(q),b.fire(n,{offsetTop:Number(d.toFixed(0))})}}).on(f.DRAG_END,function(a){b.dragEndHandler(a),b.fire(o,{velocityY:a.velocityY})}),e.addEventListener("transitionend",a,!1),e.addEventListener("webkitTransitionEnd",a,!1),e.addEventListener("oTransitionEnd",a,!1),e.addEventListener("MSTransitionEnd",a,!1))}},{ATTRS:{}});return A},{requires:["node","event","base","gallery/template/1.0/","./drag","./tap"]});