/*! SWE 3.3.0 2018071T921 */
!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){!function(e){"use strict";e.fn.generateId=function(t){var n=1;return t=t?e.trim(t.toLowerCase().replace(/[^a-z0-9_]+/g," ")).replace(/\s+/g,"-"):"id",this.each(function(){var e;if(!this.getAttribute("id")){for(e=t;document.getElementById(e);)e=t+String(n),n++;this.setAttribute("id",e)}})}}(jQuery);var n={eventElement:document,initialised:!1,timeoutID:null,currentWindowWidth:null,currentWindowHeight:null,heartbeatThrottleCount:0,watchedElements:[],throttleStates:{},conf:{windowResizeEvent:"x-window-resize",windowWidthResizeEvent:"x-window-width-resize",windowHeightResizeEvent:"x-window-height-resize",elementWidthResizeEvent:"x-width-change",elementHeightResizeEvent:"x-height-change",initialResizeEvent:"x-initial-sizes",watcherClass:"resize-events-watcher",framesPerHeartbeat:6}};!function(e,t){"use strict";window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}(),n.bind=function(t,i){e(function(){!0!==n.initialised&&n.initialise()}),e(n.eventElement).bind(t,i)},n.initialise=function(){if(!0!==n.initialised){var t=e(window).width(),i=e(window).height();n.currentWindowWidth=t,n.currentWindowHeight=i,e(n.eventElement).trigger(n.conf.initialResizeEvent,[t,i]),n.initialised=!0,e(window).resize(n.handleWindowResize)}},e.fn.registerWatcher=function(t,i){var a=-1!==t.indexOf("width"),o=-1!==t.indexOf("height");void 0===i&&(e(this).wrapInner('<div class="'+n.conf.watcherClass+'"></div>'),i="."+n.conf.watcherClass),e(this).each(function(){e(this).data("resizeEvents",{watchWidth:a,previousWidth:null,watchHeight:o,previousHeight:null,innerElementSelector:i})}),n.watchedElements[n.watchedElements.length]=e(this),1===n.watchedElements.length&&n.heartbeat()},n.heartbeat=function(){if(n.heartbeatThrottleCount++%n.conf.framesPerHeartbeat!=0)return void window.requestAnimFrame(n.heartbeat);var t,i=null,a=null,o=function(){var t=e(this),o=t.data("resizeEvents"),l=t.find(o.innerElementSelector).eq(0);o.watchWidth&&(i=l.width())!==o.previousWidth&&(t.trigger(n.conf.elementWidthResizeEvent,[i]),o.previousWidth=i),o.watchHeight&&(a=l.height())!==o.previousHeight&&(t.trigger(n.conf.elementHeightResizeEvent,[a]),o.previousHeight=a),t.data("resizeEvents",o)};for(t=0;t<n.watchedElements.length;t++)n.watchedElements[t].each(o);window.requestAnimFrame(n.heartbeat)},n.handleWindowResize=function(){t.oldIE&&t.oldIEversion<7&&n.throttle(n.handleWindowResize,200)||n.broadcastWindowResize()},n.broadcastWindowResize=function(){n.timeoutID=null;var t=e(window).width(),i=e(window).height(),a=!1;n.currentWindowWidth!==t&&(e(n.eventElement).trigger(n.conf.windowWidthResizeEvent,[t,i]),e(n.eventElement).trigger(n.conf.windowResizeEvent,[t,i]),n.currentWindowWidth=t,a=!0),n.currentWindowHeight!==i&&(e(n.eventElement).trigger(n.conf.windowHeightResizeEvent,[t,i]),a||e(n.eventElement).trigger(n.conf.windowResizeEvent,[t,i]),n.currentWindowHeight=i)},n.throttle=function(e,t){var i=e.toString().match(/ResizeEvents\.throttle\s*\(\s*([^,\s]+)/)[1];return!0===n.throttleStates[i]?(n.throttleStates[i]=null,!1):(null!==n.throttleStates[i]&&window.clearTimeout(n.throttleStates[i]),n.throttleStates[i]=window.setTimeout(function(){n.releaseThrottle(i,e)},t),!0)},n.releaseThrottle=function(e,t){n.throttleStates[e]=!0,t.apply()}}(jQuery,qg),function(e){function t(t){function i(t){var n=new RegExp(e.map(t,encodeURIComponent).join("|"),"ig");return function(e){return e.replace(n,decodeURIComponent)}}t=e.extend({unescape:!1},t||{}),n.encoder=function(e){return!0===e?function(e){return e}:"string"==typeof e&&(e=i(e.split("")))||"function"==typeof e?function(t){return e(encodeURIComponent(t))}:encodeURIComponent}(t.unescape)}var n={put:function(e,t){(t||window).location.hash=this.encoder(e)},get:function(t){var n=(t||window).location.hash.replace(/^#/,"");try{return e.browser.mozilla?n:decodeURIComponent(n)}catch(e){return n}},encoder:encodeURIComponent},i={id:"__jQuery_history",init:function(){var t='<iframe id="'+this.id+'" style="display:none" src="javascript:false;" />';return e("body").prepend(t),this},_document:function(){return e("#"+this.id)[0].contentWindow.document},put:function(e){var t=this._document();t.open(),t.close(),n.put(e,t)},get:function(){return n.get(this._document())}},a={};a.base={callback:void 0,type:void 0,check:function(){},load:function(e){},init:function(e,n){t(n),o.callback=e,o._options=n,o._init()},_init:function(){},_options:{}},a.timer={_appState:void 0,_init:function(){var e=n.get();o._appState=e,o.callback(e),setInterval(o.check,100)},check:function(){var e=n.get();e!=o._appState&&(o._appState=e,o.callback(e))},load:function(e){e!=o._appState&&(n.put(e),o._appState=e,o.callback(e))}},a.iframeTimer={_appState:void 0,_init:function(){var e=n.get();o._appState=e,i.init().put(e),o.callback(e),setInterval(o.check,100)},check:function(){var e=i.get(),t=n.get();t!=e&&(t==o._appState?(o._appState=e,n.put(e),o.callback(e)):(o._appState=t,i.put(t),o.callback(t)))},load:function(e){e!=o._appState&&(n.put(e),i.put(e),o._appState=e,o.callback(e))}},a.hashchangeEvent={_init:function(){o.callback(n.get()),e(window).bind("hashchange",o.check)},check:function(){o.callback(n.get())},load:function(e){n.put(e)}};var o=e.extend({},a.base);"onhashchange"in window?o.type="hashchangeEvent":o.type="timer",e.extend(o,a[o.type]),e.history=o}(jQuery),jQuery.butterfly={},jQuery.butterfly.defaultOptions={contentDefaultWidth:null,contentDefaultHeight:"100%",mediaMaxWidth:"100%",mediaMaxHeight:"100%",treatAsMedia:!1,lightBoxMargin:null,animateResize:!0,animationSpeed:150,useIframe:"autodetect",collapseHeightWhenPossible:!0,reuseFragment:!1,closeButton:!0,closeButtonImage:"/assets/v3/lib/ext/butterfly/close.png",closeButtonCorner:"tr",clickOverlayCloses:!0,preloadLoadingImage:"",preloadGalleryControlsSprite:"",galleryControlWidth:49,galleryControlHeight:85,galleryMode:"rel",galleryContainers:"",galleryLoops:!1,captionMode:"title",preloadNextGalleryImage:!0,zoomFromClicked:!1,callbackPreOpen:null,callbackPreResize:null,callbackPostResize:null,callbackPostOpen:null,callbackPreClose:null,callbackPostClose:null,treatAsImage:!1},jQuery.butterfly.conf={overlayOpacity:".7",lightboxClass:"lightbox",lightboxLinkSelector:"a.lightbox"},jQuery.butterfly.linkCount=0,DOM_VK_END=35,DOM_VK_HOME=36,DOM_VK_LEFT=37,DOM_VK_UP=38,DOM_VK_RIGHT=39,DOM_VK_DOWN=40,DOM_VK_ESCAPE=27,function(e,t){"use strict";function n(e){return e=e||window.event,e.keyCode?e.keyCode:e.which?e.which:null}var i,a,o,l,r,s,d,c,h,u,p,b,w;e.fn.accessibleText=function(){return this.is("img")?this.attr("alt"):this.is("input")?this.attr("value"):e.map(this.contents(),function(t){if(3===t.nodeType)return t.data;if(1===t.nodeType){var n=e(t);return n.is("img, input")||n.find("img[alt], input[value]").length>0?n.accessibleText():n.text()}}).join("")},e(function(){void 0!==t&&e(this).each(function(){t.bind("x-text-resize x-window-resize",i)}),e.fn.centre=function(){return this.css({position:"fixed",top:(e(window).height()-this.outerHeight())/2+"px",left:(e(window).width()-this.outerWidth())/2+"px"})},e(document.body).append('<div id="jb-overlay"></div><div id="jb-window"><div id="jb-window-inner"><div id="jb-window-content" style="width: auto; height: auto;" tabindex="0"></div></div></div>').bind("keydown",s),e("#jb-overlay").fadeTo(0,e.butterfly.conf.overlayOpacity,function(){e(this).hide()}),e("#jb-window").hide().click(d),e("#jb-window-inner").centre(),e("#jb-window-content").css({overflow:"hidden"}).hide(),e.history.init(function(t){""===t?a.apply():/^!/.test(t)&&(t=t.substring(1),e("#"+t).trigger("click",[!1]))},{unescape:",/"})}),e.fn.butterfly=function(t){return t=void 0!==t?t:{},t.closeButtonImage&&e('<img src="'+t.closeButtonImage+'" alt="" />'),t.preloadLoadingImage&&e('<img src="'+t.preloadLoadingImage+'" alt="" />'),t.preloadGalleryControlsSprite&&e('<img src="'+t.preloadGalleryControlsSprite+'" alt="" />'),this.each(function(){o.apply(this,[t])})},o=function(t){var n=void 0!==Number.prototype.pxToEm;t=void 0===t?e.butterfly.defaultOptions:e.extend({},e.butterfly.defaultOptions,t),null===t.lightBoxMargin&&(t.lightBoxMargin=n?"2em":"20px"),null===t.contentDefaultWidth&&(t.contentDefaultWidth=n?"50em":"700px"),void 0!==e(this).attr("id")&&""!==e(this).attr("id")||e(this).attr("id",e.butterfly.conf.lightboxClass+"-uid-"+e.butterfly.linkCount),t.linkID=e(this).attr("id"),e.butterfly.linkCount++,e(this).data("options",t),e(this).addClass(e.butterfly.conf.lightboxClass),e(this).click(l)},l=function(t,n){var i,o,l,s,d,h,p,b,w;if(void 0!==t&&t.preventDefault(),n=void 0===n||n)return void e.history.load("!"+e(this).attr("id"));switch(e("#jb-window-inner").css("overflow","hidden"),e("#jb-overlay").is(":visible")?(i=e("#jb-overlay").data("options"),"fragment"===i.linkType&&i.reuseFragment&&e(".jb-placeholder").remove(),o=i.originalTrigger):o=this,s=window.location.href.replace(/#.*$/,""),l=e(this).attr("href"),0===l.indexOf(s)&&(l=l.substring(s.length)),d=e(this).attr("title"),h=e(this).accessibleText(),i=e(this).data("options"),i.href=l,i.title=d,i.linkText=h,i.trigger=this,i.originalTrigger=o,document.getElementById("jb-window-inner").className=i.className||"",i.treatAsImage||u(l)?i.linkType="image":"#"===l.substring(0,1)?i.linkType="fragment":!0===i.useIframe||!1!==i.useIframe&&this.hostname!==window.location.hostname?(i.linkType="iframe",i.useIframe=!0,i.contentDefaultWidth="100%",i.contentDefaultHeight="100%"):i.linkType="ajax",null!==i.callbackPreOpen&&"function"==typeof i.callbackPreOpen&&i.callbackPreOpen.apply(this),i.closeButton?0===e("#jb-close-button").length&&(e("#jb-window").prepend('<a href="#" id="jb-close-button"><img src="'+i.closeButtonImage+'" alt="Close lightbox" /></a>'),e("#jb-close-button").click(a)):e("#jb-close-button").remove(),i.clickOverlayCloses?e("#jb-window").addClass("reactive"):e("#jb-window").removeClass("reactive"),p=e(this),""!==i.galleryContainers&&(i.galleryMode="container"),i.gallerySelector="",i.galleryMode){case"all":i.gallerySelector=e.butterfly.conf.lightboxLinkSelector;break;case"container":e.each(i.galleryContainers.split(","),function(){if(b=this+" "+e.butterfly.conf.lightboxLinkSelector,p.is(b))return i.gallerySelector=b,!1})}""===i.gallerySelector&&""!==e(this).attr("rel")&&(i.gallerySelector=e.butterfly.conf.lightboxLinkSelector+'[rel="'+e(this).attr("rel")+'"]'),w=e("#jb-overlay").data("options")||{},e(this).data("options",i),e("#jb-overlay").data("options",i),e("#jb-window").append('<p id="jb-loading">Loading...</p>'),e("#jb-loading").attr("tabindex","0").focus(),e("#jb-overlay").is(":visible")?("fragment"===w.linkType&&w.reuseFragment&&(e(".jb-placeholder").after(e(w.href)),e(".jb-placeholder").remove(),e(w.href).disableFocussableElements()),e("#jb-window-content").hide().empty(),e("#jb-window").addClass("loading"),r.apply(this,[c])):(e(document.body).disableFocussableElements("#jb-window *"),e("#jb-close-button").hide(),e("#jb-gallery-controls").hide(),e("#jb-overlay").fadeIn(i.animationSpeed).centre(),e("#jb-window").addClass("loading").show(),i.zoomFromClicked?e("#jb-window-inner").css({top:e(this).offset().top,left:e(this).offset().left,width:e(this).width(),height:e(this).height()}):e("#jb-window-inner").css({width:"100px",height:"100px"}).centre(),r.apply(this,[c]))},c=function(){var t=e("#jb-overlay").data("options");e("#jb-window").restoreFocussableElements(),e("#jb-window").removeClass("loading"),setTimeout(function(){switch(e("#jb-window").removeClass("type-media type-image type-fragment type-ajax"),t.linkType){case"image":e("#jb-window").addClass("type-image type-media"),e("#jb-window-inner").css("overflow","hidden");break;case"fragment":e("#jb-window").addClass("type-fragment"),e("#jb-window-inner").css("overflow","auto");break;case"iframe":e("#jb-window").addClass("type-iframe"),e("#jb-window-inner").css("overflow","hidden");break;case"ajax":e("#jb-window").addClass("type-ajax"),e("#jb-window-inner").css("overflow","auto")}t.treatAsMedia&&e("#jb-window").addClass("type-media"),i.apply(this,[function(){var n;"iframe"===t.linkType&&e("#jb-window-content").css("visibility","visible"),e("#jb-window-content").fadeIn(t.animationSpeed,function(){e("#jb-window-content").focus(),e("#jb-loading").remove(),null!==t.callbackPostOpen&&"function"==typeof t.callbackPostOpen&&t.callbackPostOpen.apply(this),n=e("#jb-gallery-next"),t.preloadNextGalleryImage&&n.length>0&&n.is(":visible")&&"#"!==n.attr("href")&&u(n.attr("href"))&&e('<img src="'+n.attr("href")+'" alt="" />')})}])},0)},i=function(t){var n,i,a,o,l,r,s,d,c,h,u,w,f,g,m,y,v,j,k,x,C,I=e("#jb-overlay").data("options");void 0!==I&&(n=parseInt(p(I.lightBoxMargin),10),i=e("#jb-window").width()-2*n,a=e("#jb-window").height()-2*n,o=p(I.contentDefaultWidth,i),l=p(I.contentDefaultHeight,a),r=p(I.mediaMaxWidth,i),s=p(I.mediaMaxHeight,a),null!==I.callbackPreResize&&"function"==typeof I.callbackPreResize&&I.callbackPreResize.apply(e("#jb-window"),[i,a,o,l,r,s]),"image"===I.linkType||I.treatAsMedia?(d=e("#jb-window-content").lightBoxContentWidth(),c=e("#jb-window-content").lightBoxContentHeight(),d>r&&(h=d/r,d=r,c/=h),c>s&&(h=c/s,c=s,d/=h),d>i&&(h=d/i,d=i,c*=h),c>a&&(h=c/a,c=a,d*=h)):"iframe"===I.linkType?(d=o,c=l):(d=e("#jb-window-content").lightBoxContentWidth(),d=""===o||"100%"===o||i<o?i:o,I.collapseHeightWhenPossible?(u=e("#jb-window-inner").width(),e("#jb-window-inner").animate({width:d},0),c=e("#jb-window-content").lightBoxContentHeight(!1),e("#jb-window-inner").width(u),a<c&&(c=a)):(c=e("#jb-window-content").lightBoxContentHeight(),c=""===l||"100%"===l||a<l?a:l)),w=b(d,c),f=I.animateResize?I.animationSpeed:0,e("#jb-close-button").hide(),e("#jb-gallery-controls").hide(),"iframe"===I.linkType&&e("#jb-window-inner iframe").css("visibility","hidden"),e("#jb-window-inner").animate({width:d,height:c,left:w[1],top:w[0]},f,0,function(){if(I=e("#jb-overlay").data("options"),d=e("#jb-window-inner").width(),c=e("#jb-window-inner").height(),"iframe"===I.linkType&&(e("#jb-window-inner iframe").width(d).height(c),e("#jb-window-inner iframe").css("visibility","visible")),e("#jb-close-button").length>0){switch(g=parseInt(e("#jb-close-button").width(),10),m=parseInt(e("#jb-close-button").height(),10),I.closeButtonCorner){case"tr":y=w[1]+d-g/2,v=w[0]-m/2;break;case"br":y=w[1]+d-g/2,v=w[0]+c-m/2;break;case"bl":y=w[1]-g/2,v=w[0]+c-m/2;break;default:y=w[1]-g/2,v=w[0]-m/2}e("#jb-close-button").css({position:"absolute","z-index":"999999",left:y,top:v}).show()}e("#jb-gallery-controls").is(".active")&&(j=w[0]+c/2-I.galleryControlHeight/2,k=w[1]-I.galleryControlWidth,e("#jb-gallery-prev").css({top:j,left:k}),x=w[0]+c/2-I.galleryControlHeight/2,C=w[1]+d,e("#jb-gallery-next").css({top:x,left:C}),e("#jb-gallery-controls").show()),null!==I.callbackPostResize&&"function"==typeof I.callbackPostResize&&I.callbackPostResize.apply(e("#jb-window"),[i,a,o,l,r,s]),void 0!==t&&void 0!==t.apply&&t.apply()}))},r=function(t){var n,i,a,o,l,r,s,d,c,u,b,f,g=e("#jb-overlay").data("options"),m=g.href;switch(g.captionMode){case"title":n=g.title?"<p class='jb-caption'><span>"+g.title+"</span></p>":"";break;case"text":n=g.linkText?"<p class='jb-caption'><span>"+g.linkText+"</span></p>":"";break;default:n=""}switch(e("#jb-window").removeClass("error-no-content"),i=e(g.gallerySelector),e("#jb-gallery-controls").removeClass("active"),i.length>1&&i.isInSet("#"+g.linkID)?(0===e("#jb-gallery-controls").length?(e("#jb-window").append('<div id="jb-gallery-controls"></div>'),a=e('<a id="jb-gallery-prev" href="#">Previous</a>').click(h),o=e('<a id="jb-gallery-next" href="#">Next</a>').click(h),e("#jb-gallery-controls").append(a).append(o),a.add(o).css({position:"absolute","z-index":"99999",display:"block",overflow:"hidden"})):(a=e("#jb-gallery-prev"),o=e("#jb-gallery-next"),a.add(o).removeClass("disabled").attr("tabindex","0").attr("title","").show()),e("#jb-gallery-controls").hide(),e("#jb-gallery-controls").addClass("active"),l=i.prevInSet("#"+g.linkID),!1===l&&(g.galleryLoops?l=i.lastInSet():(l=e('<a href="#" id=""></a>'),a.addClass("disabled").attr("tabindex","-1").hide())),a.attr("href",l.attr("href")).data("linkID",l.attr("id")).attr("title",e.trim(l.accessibleText())),r=i.nextInSet("#"+g.linkID),!1===r&&(g.galleryLoops?r=i.firstInSet():(r=e('<a href="#" id=""></a>'),o.addClass("disabled").attr("tabindex","-1").hide())),o.attr("href",r.attr("href")).data("linkID",r.attr("id")).attr("title",e.trim(r.accessibleText()))):e("#jb-gallery-controls").hide(),g.linkType){case"fragment":g.reuseFragment?(e(m).after('<span class="jb-placeholder"></span>'),e("#jb-window-content").empty().append(e(m))):e("#jb-window-content").empty().append(e(m).clone(!0)),w.apply(this,[g.linkType,m]),t.apply(this);break;case"image":e("#jb-window-content").empty().append('<img src="'+m+'" alt="" style="max-width: 100%; max-height: 100%; float: left;" />'+n),e("#jb-window-content img").error(function(){w.apply(this,[g.linkType,m,t])}).data("full-width","").data("full-height","").load(t);break;case"iframe":e("#jb-window-content").show().css("visibility","hidden"),e("#jb-window-content").empty().append('<iframe src="'+m+'" title="'+n+'" width="100%" height="1000" />'),e("#jb-window-content").css("visibility","hidden"),s=parseInt(p(g.lightBoxMargin),10),d=e("#jb-window").width()-2*s,c=e("#jb-window").height()-2*s,u=p(g.contentDefaultWidth,d),b=p(g.contentDefaultHeight,c),e("#jb-window-content > iframe").width(u).height(b).error(function(){w.apply(this,[g.linkType,m,t])}).load(t);break;default:e.ajaxSetup({cache:!0}),f=-1!==m.indexOf("#")?m.split("#").join(" #"):m,e("#jb-window-content").empty().load(f,function(){w.apply(this,[g.linkType,m]),t.apply(this)})}},w=function(t,n,i){var a,o=!1;"image"!==t&&0!==e("#jb-window-content").children().length||(o=!0),o&&(a=e("#jb-overlay").data("options"),a.linkType="fragment",a.treatAsMedia=!1,e("#jb-overlay").data("options",a),e("#jb-window").removeClass("type-image type-media").addClass("type-fragment error-no-content"),e("#jb-window-content").empty().append("<p>There was an error loading lightbox content. <strong>"+e(a.trigger).text()+"</strong> (<samp>"+n+"</samp>) could not be found.</p>")),void 0!==i&&i.apply(this)},a=function(t){var n,i,a;if(t&&t.preventDefault(),!e("#jb-window:hidden").length){n=e("#jb-overlay").data("options"),i=n.href,null!==n.callbackPreClose&&"function"==typeof n.callbackPreClose&&n.callbackPreClose.apply(n.trigger),"fragment"===n.linkType&&n.reuseFragment&&(e(".jb-placeholder").after(e(i)),e(".jb-placeholder").remove()),e(document.body).restoreFocussableElements(),e("#jb-overlay").fadeOut(n.animationSpeed),e("#jb-window").hide(),e("#jb-window-content").hide(),a=e(n.originalTrigger),void 0===a.attr("tabindex")&&a.attr("tabindex",0),a.focus(),e("#jb-loading").remove(),null!==n.callbackPostClose&&"function"==typeof n.callbackPostClose&&n.callbackPostClose.apply(n.trigger);var o=e(window).scrollTop();e.history.load(""),e(window).scrollTop(o),e(a).focus()}},e.fn.lightBoxContentWidth=function(){var t,n=this.closest("#jb-window"),i=e("#jb-window-inner"),a=!!n.hasClass("type-media"),o=(n.hasClass("media-image"),i.width()),l=i.height(),r=i.css("left"),s=i.css("top");return i.css({width:"auto",height:"auto",left:0,top:0}),"none"===this.css("display")?(this.css("display","block"),t=a?this.find("img").outerWidth(!0):this.outerWidth(!0),this.css("display","none")):t=this.outerWidth(!0),i.css({left:r,top:s}),i.animate({width:o,height:l},0),t},e.fn.lightBoxContentHeight=function(t){var n,i=this.closest("#jb-window"),a=i.find("#jb-window-inner"),o=(i.hasClass("type-media"),i.hasClass("media-image"),a.width()),l=a.height(),r=a.css("left"),s=a.css("top");return t=void 0===t||t,e("#jb-window-inner").height("auto"),t&&e("#jb-window-inner").width("auto").css({left:0,top:0}),"none"===this.css("display")?(this.css("display","block"),n=this.outerHeight(!0),this.css("display","none")):n=e(this).outerHeight(!0),e("#jb-window-inner").width(o).height(l).css({left:r,top:s}),n},d=function(t){var n=e("#jb-overlay").data("options");t.target===e("#jb-window").get(0)&&n.clickOverlayCloses&&a.apply()},s=function(t){if(!e("#jb-overlay").is(":visible")||t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)return!0;switch(n(t)){case DOM_VK_UP:case DOM_VK_LEFT:e("#jb-gallery-prev").click();break;case DOM_VK_DOWN:case DOM_VK_RIGHT:e("#jb-gallery-next").click();break;case DOM_VK_HOME:e(e("#jb-overlay").data("options").gallerySelector).firstInSet().click();break;case DOM_VK_END:e(e("#jb-overlay").data("options").gallerySelector).lastInSet().click();break;case DOM_VK_ESCAPE:a.apply();break;default:return!0}t.preventDefault()},h=function(t){var n,i=e(this);if(t.preventDefault(),""!==i.data("linkID"))return e("#jb-gallery-controls").hide(),n=e("#"+i.data("linkID")),n.click()},b=function(t,n){return[(e(window).height()-n)/2,(e(window).width()-t)/2]},e.fn.isInSet=function(t){return-1!==this.index(e(t))},e.fn.nextInSet=function(t){var n=this.index(e(t));return this.length>n+1&&this.eq(n+1)},e.fn.prevInSet=function(t){var n=this.index(e(t));return n>0&&this.eq(n-1)},e.fn.firstInSet=function(){return this.length>0&&this.eq(0)},e.fn.lastInSet=function(){return this.length>0&&this.eq(-1)},u=function(e){if(void 0===e||""===e)return!1;var t=String(e).lastIndexOf(".");return-1!==t&&/^\.(jpg|png|gif|bmp|jpeg)$/i.test(e.substring(t))},e.fn.disableFocussableElements=function(t){t=t||"",this.find("a, input, button, area, frame, iframe, [tabindex]").not(t).not('*[tabindex="-1"]').each(function(){var t=e(this),n=t.attr("tabindex");n=void 0===n||""===n?"":n,t.data("prevTabIndex",n).addClass("jb-unfocussed").attr("tabindex","-1")})},e.fn.restoreFocussableElements=function(){this.find(".jb-unfocussed").each(function(){var t=e(this),n=t.data("prevTabIndex");switch(n){case"":t.removeAttr("tabindex");break;default:t.attr("tabindex",n)}t.removeClass("jb-unfocussed")})},p=function(t,n){return n=void 0!==n?n:e(document.body).width(),t=t.replace("px","").replace(/^\s+|\s+$/g,""),isNaN(t)?"%"===t.substr(t.length-1)?void 0!==n?(t=parseInt(t.substr(0,t.length-1).replace(/^\s+|\s+$/g,""),10))/100*parseInt(n,10):(e.debug("Warning: percentage unit was supplied to parsePixels() but could not be calculated because centDimension was not supplied."),parseInt(t,10)):"em"===t.substr(t.length-2)?void 0!==Number.prototype.pxToEm?(t=parseInt(t.substr(0,t.length-2).replace(/^\s+|\s+$/g,""),10),t=t.pxToEm({reverse:!0}),t.substr(0,t.length-2)):(e.debug("Warning: em unit was supplied to parsePixels() but could not be calulated because pxToEm plugin was not found."),parseInt(t,10)):(e.debug("Warning: unknown unit was supplied. parsePixels() can support px, em or % units only."),parseInt(t,10)):parseInt(t,10)}}(jQuery,n)}]);