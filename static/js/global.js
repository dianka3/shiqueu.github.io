// JavaScript Document
$(document).ready(function(e) {
    window.setInterval(function(){
		var h=window.innerHeight-140;
		$(".motop_bot").height(h);
	},1);
});
//导航条下拉菜单伸缩
$(document).ready(function(e) {
    $(".top3_xun").hover(function(){
		$(this).find(".dropdown").slideDown();
	},function(){
		$(this).find(".dropdown").slideUp();
	});
});

$(document).ready(function(e) {
	//展开下拉菜单
    $(".motop_top_icon1").click(function(){
		$(this).hide();
		$(".motop_top_icon2").show();
		
		$(".motop_bot").slideDown().animate({left:0});
		$("body").css("overflow","hidden");
	});
	//收起下拉菜单，并且收起所有二级目录
    $(".motop_top_icon2").click(function(){
		$(this).hide();
		$(".motop_top_icon1").show();
		
		$(".motop_img1").show();
		$(".motop_img2").hide();
				
		$(".dropdown").slideUp();		
		$(".motop_bot").animate({left:"-100%"});
		$("body").css("overflow","auto");
	});
	//展开二级目录
    $(".motop_img1").click(function(){
		$(".motop_img1").show();
		$(".motop_img2").hide();
		$(this).hide();
		$(this).next(".motop_img2").show();
		$(".dropdown").slideUp();
		$(this).parents(".motop_xun").find(".dropdown").slideDown();
	});
	//收起二级目录
    $(".motop_img2").click(function(){
		$(".motop_img2").hide();
		$(".motop_img1").show();
		$(this).hide();
		$(this).prev(".motop_img1").show();
		
		$(".dropdown").slideUp();
	});
	
	//小平模式下的搜索框
	$(".search_icon").click(function(){
		$(".mosearch_form").slideToggle();
	});
});

//产品中心左侧

$(document).ready(function(e) {
	$(".titleon").next(".product_menu_dropdown").show();
    $(".product_menuxun_title").click(function(){
		$(".product_menu_dropdown").slideUp();
		$(".product_menuxun_title").removeClass("titleon");
	    $(this).next(".product_menu_dropdown").slideDown();	
		$(this).addClass("titleon")
	});
	var i=-1;
	$(".left_icon").click(function(){
		if(i==-1){
	    $(this).css("left","238px").addClass("on");
		$(".pro_body .product_left").css("left","0");
	      i=0;
		}	
		else if(i==0){
	    $(this).css("left","-3%").removeClass("on");
		$(".pro_body .product_left").css("left","-300px");
	      i=-1;
		}	
	});
});



// JavaScript Document
$(document).ready(function(){	

//首页banner箭头位置
// ban 效果 
var next1 = 0;
var prev2 = 0;
var click_shu = false;
var str="<li class='licurr'></li>"
$(function(){
	var li_width=$("#ban .ban_bj").width();
	// 获取ban 滚动就是 li 的宽度
	$('#ban .ban_bj li').not(':first').css({left:li_width});
	// 获取 li的个数 也就是 发、滚动的次数
	li_shu = $('#ban .ban_bj li').length;
	for(var i=1;i<li_shu;i++){
		str=str+"<li></li>";
	}
	$(".ul_dian").html(str);
	// 自动 滚动 定时器
	movezi = window.setInterval(function(){
		zimove(prev2,next1);
	},5000)
	// 触碰 下面小图（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('#ban ul.ul_dian li').hover(function(){
			clearInterval(movezi)
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000);
	})/**/
	// 触碰 banner（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('.ban_bj li').hover(function(){
			clearInterval(movezi);
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000);
	})
	$('.jiantou div').hover(function(){
			clearInterval(movezi);
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);	
		},5000);
	})
	$(".jiantou .jiantou_left").click(function(){
		
	if(next1 <=0){
		next1 = li_shu-1;
		prev2 = 0;
	}else{
		prev2 = next1;
		next1 = next1-1;
	}
	moveleft(prev2,next1);	
		
		});
		$("#flexslider").hover(function(){
	$(".jiantou").css("display","inline-block");
	},function(){
	$(".jiantou").hide(10)
		});
	$(".jiantou .jiantou_right").click(function(){
		
	if(next1 >=(li_shu-1)){
		next1 = 0;
		prev2 = li_shu-1;
	}else{
		prev2 = next1;
		next1 = next1+1;
	}
	moveright(prev2,next1);	
		
		});
	// 点击 下面小图 执行的代码
	$('#ban ul.ul_dian li').click(function(){
		// 这个是获取 点击小图标 是第几个 返回的数 bannercurrIndex 就是 prev2
		var bannercurrIndex = $('#ban ul.ul_dian li').index(this);

		// 这个就是  自动滚动 代码
		moveright(next1,bannercurrIndex);
		// 这样 是为了  下面 执行 滚动
		next1 = bannercurrIndex;
	})	
})
//首页向   右   自动移动
function moveright(_prev,_next){
	li_width=$("#ban .ban_bj").width();
	$('#ban .ban_bj li').eq(_next).addClass("on").siblings().removeClass("on");
	$('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:-li_width},1000,function(){})
	// 小图标 remove add  .Class
	$('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
	$('#ban ul.ul_dian li').eq(_next).addClass('licurr');
	$('#ban .ban_bj li').eq(_next).css({left:li_width}).stop(true,false).animate({left:0},1000,function(){
		click_shu = false;	
	})
}
//首页向  左   自动移动
function moveleft(_prev,_next){
	li_width=$("#ban .ban_bj").width();
	$('#ban .ban_bj li').eq(_next).addClass("on").siblings().removeClass("on");
	$('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:li_width},1000,function(){})
	$('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
	$('#ban ul.ul_dian li').eq(_next).addClass('licurr');
	$('#ban .ban_bj li').eq(_next).css({left:-li_width}).stop(true,false).animate({left:0},1000,function(){
		click_shu = false;	
	})
} 
// 自动移动 实际 执行代码
function zimove(){
	if(next1 >=(li_shu-1)){
		next1 = 0;
		prev2 = li_shu-1;
	}else{
		prev2 = next1;
		next1 = next1+1;
	}
	moveright(prev2,next1);	
}
$(document).ready(function(e) {
	$('.flex_comBtn').hover(function(){
		window.clearInterval(movezi)
	},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000)
	})
	});	
})

 // JavaScript Document
 //首页banner下的新闻滚动


$(function($){
    $.fn.FontScroll = function(options){
        var d = {time: 3000,s: 'fontColor',num: 1}
        var o = $.extend(d,options);
        

        this.children('ul').addClass('line');
        var _con = $('.line').eq(0);
        var _conH = _con.height(); //滚动总高度
        var _conChildH = _con.children().eq(0).height();//一次滚动高度
        var _temp = _conChildH;  //临时变量
        var _time = d.time;  //滚动间隔
        var _s = d.s;  //滚动间隔


        _con.clone().insertAfter(_con);//初始化克隆

        //样式控制
        var num = d.num;
        var _p = this.find('li');
        var allNum = _p.length;

        _p.eq(num).addClass(_s);


        var timeID = setInterval(Up,_time);
		this.hover(function(){clearInterval(timeID)},function(){timeID = setInterval(Up,_time);});

        function Up(){
            _con.animate({marginTop: '-'+_conChildH});
            //样式控制
            _p.removeClass(_s);
            num += 1;
            _p.eq(num).addClass(_s);
            
            if(_conH == _conChildH){
                _con.animate({marginTop: '-'+_conChildH},"normal",over);
            } else {
                _conChildH += _temp;
            }
        }
        function over(){
            _con.attr("style",'margin-top:0');
            _conChildH = _temp;
            num = 1;
            _p.removeClass(_s);
            _p.eq(num).addClass(_s);
        }
    }
})(jQuery);


 //首页banner下的新闻滚动end






////所有图片都是延时加载的，避免资源浪费
// $(function() {
//
//      $("img.lazy").lazyload({effect: "fadeIn"});
//
//  });
