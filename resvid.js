!function(){var t=function(){var t=[];for(var i in e.services){var r="",o="";switch(i){case"iframe":r=i+'[src*="//',o='"]';break;case"object":r=i+'[data*="//',o='"]'}t.push(r+e.services[i].join(o+","+r)+o)}return[].slice.call(document.body.querySelectorAll(t.join(",")))},e=function(){var e=t();return e.forEach(function(t,i){t.classList.contains("superembed-ignore")&&e.splice(i)}),function t(){return e.forEach(function(t){var e=0,i=0,r=0,o=0,n=0,d=!1;"position:absolute;top:0;left:0;"===t.getAttribute("style")&&t.src.includes("gfycat.com/ifr/")&&!t.getAttribute("data-width")&&(t.setAttribute("style",""),t.parentElement.setAttribute("style",""),t.setAttribute("data-width","16"),t.setAttribute("data-height","9")),-1==t.getAttribute("src").indexOf("w.soundcloud.com")||t.getAttribute("data-width")||(t.setAttribute("width",""),t.setAttribute("height",""),-1!=t.getAttribute("src").indexOf("visual=true")?(t.setAttribute("data-width","1"),t.setAttribute("data-height","1")):(t.setAttribute("data-width","10"),t.setAttribute("data-height","4"))),t.hasAttribute("data-width")?(i=t.getAttribute("data-width"),r=t.getAttribute("data-height")):(t.classList.contains("superembed-square")?(i=1,r=1):t.hasAttribute("width")?(i=t.offsetWidth,r=t.offsetHeight):(i=16,r=9),t.setAttribute("data-width",i),t.setAttribute("data-height",r)),window.getComputedStyle||(window.getComputedStyle=function(t,e){return this.el=t,this.getPropertyValue=function(e){var i=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),i.test(e)&&(e=e.replace(i,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),window.getComputedStyle?(o=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue("width")),n=parseInt(window.getComputedStyle(document.body,null).getPropertyValue("height"))):t.currentStyle?(o=t.parentElement.clientWidth,n=document.body.clientHeight,console.log(o+" "+n+", "+t.currentStyle.margin)):(o=t.parentElement.offsetWidth,n=document.body.clientHeight,console.log(o+" "+n)),i!=o&&(n=r*(e=o/i),d=!0),r>n&&(o=i*(e=n/r),d=!0),d&&(t.setAttribute("width",o),t.setAttribute("height",n),i*=e,r*=e)}),t}()};e.services={iframe:["www.youtube.com/embed","player.vimeo.com/video","www.kickstarter.com/projects","players.brightcove.net","www.hulu.com/embed","vine.co/v","videopress.com/embed","www.dailymotion.com/embed","vid.me/e","player.twitch.tv","facebook.com/plugins/video.php","gfycat.com/ifr/","liveleak.com/ll_embed","media.myspace.com","archive.org/embed","w.soundcloud.com/player","channel9.msdn.com"],object:["www.flickr.com/apps/video"],css:[".superembed-force"]},window.superEmbed=e}(),window.jQuery?jQuery(document).ready(function(){jQuery(window).resize(superEmbed())}):window.addEventListener?window.addEventListener("DOMContentLoaded",function(){window.addEventListener("resize",superEmbed())}):window.onload=function(){window.attachEvent("onresize",superEmbed())};
