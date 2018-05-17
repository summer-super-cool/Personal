$(function(){
     $(".language").hover(function(){
		  $(this).find(".languaged").show();
	  },function(){
		  $(this).find(".languaged").hide();
	  });
	  
});
//轮播
$(function(){
    var i=0;
    var picimg=$(".Carousel li").width();
	var voyage_pic = $(".voyage_pic");
    var allimg=$(".voyage_pic li").length;
    function img_change(){
        var img_i=i*-picimg+"px";
        voyage_pic.animate({opacity:"0.3"},200,function(){
            voyage_pic.css("left",img_i );
            voyage_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }

	//setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式。此方法会不停的调用函数。
    //轮播上一张下一张图标控制
		$(".nav a").on("click",function(){
	    index=$(this).index();
		i = index;
		img_change();
	});


})