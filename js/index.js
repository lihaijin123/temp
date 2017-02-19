// 轮播图	
var i=0,timer;
$(function(){
	$('.lunbo .big-pics li').eq(0).show().siblings().hide();
	$(".w0").eq(0).animate({width:'80px'},4000);
	ShowProcess();
	$(".tab li").hover(function(){
	i=$(this).index();
	Show();
	clearInterval(timer);
	},function(){
	ShowProcess();
	});
// 轮播图里面的菜单
	$(".l-menu").mouseover(function() {
		$(this).find(".nav-r2").show();
	});
	$(".l-menu").mouseout(function(){
		$(this).find(".nav-r2").hide();
	});
//搜索栏固定
	$(window).scroll(function(){
	if($(window).scrollTop()>40){
    $(".big-box").addClass("fixed"); 
    $(".pr").addClass('lh80');
    $(".searchbox-l").addClass('pt16'); 
    $(".search-r").addClass('mt20'); 
    $(".list-box").css("top","80px");
    }else{
  	$(".big-box").removeClass("fixed"); 
  	$(".pr").removeClass('lh80'); 
    $(".searchbox-l").removeClass('pt16'); 
    $(".search-r").removeClass('mt20'); 
    $(".list-box").css("top","110px");
  	}	     
	});
//电商系统上面部分hover时图片移动
	$(".tips img").hover(function() {
		$(this).addClass('p-10').stop(true).animate({left:"-10px"}, 200);
	}, function() {
		$(this).addClass('p-10').stop(true).animate({left:"0px"}, 200);;
	});
//网站导航下拉菜单
	$(".wd").hover(function() {
		$(".slidown-menu").show();
	}, function() {
		$(".slidown-menu").hide();
	});
// search-box下拉菜单
	$(".submenu").mouseover(function(){
		$(this).find(".list-box").show();
	});
	$(".submenu").mouseout(function(){
		$(this).find(".list-box").hide();
	});
// 购物车
	$(".car-b").hover(function() {
		$(".car-none").show();
	}, function() {
		$(".car-none").hide();
	});
// 点击了解详情
	$(".tips ul>li").hover(function() {
		$(this).find(".xiangqing").show();
	}, function() {
		$(this).find(".xiangqing").hide();
	});
// 经典案例区图片扩大效果
	$(".demo li").hover(function() {
		$(this).find('img').css({
			"width": '120%',
			"height": '120%',
			"margin-top":"-10%",
			"margin-left":"-10%"
		});
	}, function() {
		$(this).find('img').css({
			"width": '100%',
			"height": '100%',
			"margin-top":"0",
			"margin-left":"0"
		});
	});
// 侧边客服栏
	$("#kefu a").eq(0).mouseover(function(){
				$(".tencent").show();
			});
			$("#kefu a").eq(0).mouseout(function(){
				$(".tencent").hide();
			});
	$("#kefu a").eq(1).mouseover(function(){
				$(".tel").show();
			});
			$("#kefu a").eq(1).mouseout(function(){
				$(".tel").hide();
			});
	$("#kefu a").eq(2).mouseover(function(){
				$(".code").show();
			});
			$("#kefu a").eq(2).mouseout(function(){
				$(".code").hide();
			});
// 返回顶部动画
		$(window).scroll(function(){
	    	if($(window).scrollTop()>100){
	        $(".top").show();  
	        }else{
	      	$(".top").hide();  
	      	}	     
   			});
   			// 在0.5秒内返回到顶部
			$(".top").click(function(){
				$("html,body").animate({scrollTop: 0}, 500);
			});
});
// 函数区
function Show(){
$(".lunbo .big-pics li").eq(i).fadeIn(300).siblings().fadeOut(300);
$(".w0").eq(i).animate({width:'80px'},4000);
$(".tab li").eq(i).siblings().children().stop(true).animate({width:'0px'},0);
}
function ShowProcess(){
timer=setInterval(function(){
	i++;
	if(i==7)
	{
		i=0;
	}
	Show();
	},4000)
}
