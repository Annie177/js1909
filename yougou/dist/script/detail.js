"use strict";require(["config"],function(){require(["jquery","jqcookie"],function(){var s,i,o,n,e,t,h;$(".smaller-box").on("mouseover","li",function(i){$(".smaller-box li").eq($(this).index()).addClass("hover_").siblings().removeClass("hover_")}),s=$("#sfdj"),i=$("#bfdj"),o=$("#smallpic"),n=$("#bigpic"),$(".small-pic").on("mouseover",function(){i.show(),s.show(),s.width(o.width()/n.width()*i.width()),s.height(o.height()/n.height()*i.height());var t=n.height()/o.height();$(this).on("mousemove",function(i){var o=(i=i||window.event).pageX-$(this).offset().left-s.width()/2,e=i.pageY-$(this).offset().top-s.height()/2;o<=0?o=0:o>=$(this).width()-s.width()&&(o=$(this).width()-s.width()),e<=0?e=0:e>=$(this).height()-s.height()&&(e=$(this).height()-s.height()),s.css({left:o,top:e}),n.css({top:-t*e,left:-t*o})})}),$(".small-pic").on("mouseout",function(){i.hide(),s.hide()}),$(".smaller-box").on("mouseover","li",function(i){$(this).addClass("hover_").siblings().removeClass("hover_"),o.attr("src",$(this).find("img").attr("src")),n.attr("src",$(this).find("img").attr("src"))}),e=location.search.substring(1).split("=")[1],t=[],h=[],$.cookie("cookiesid")&&$.cookie("cookienum")&&(t=$.cookie("cookiesid").split(","),h=$.cookie("cookienum").split(",")),$(".btn-left").on("click",function(){if(alert("已加入购物车"),-1!=t.indexOf(e)){var i=t.indexOf(e);h[i]=parseInt(h[i])+parseInt($(".input-num").find("input").val()),$.cookie("cookienum",h.toString(),{expires:10})}else t.push(e),$.cookie("cookiesid",t.toString(),{expires:10}),h.push($(".input-num").find("input").val()),$.cookie("cookienum",h.toString(),{expires:10}),console.log(t),console.log(h)})})});