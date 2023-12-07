$(document).ready(function() {
    $(".header .li-blog").hover(function(){
        $(".header .li-blog ul.ul-blog").css(
            "display", "flex").animate({top: 30},200);
    }, function(){
        $(".header .li-blog ul.ul-blog").animate({top:20}, 300).hide(200);
    })
    $(".row-toggle li.bars").click(function(){
        $("ul.toggle").animate({opacity: 0.9},200)
        $("ul.toggle").css("display" , "flex");
        $("ul.row-toggle").animate({opacity: 0},200)
    })
    $("ul.toggle ul.navbar-toggle i.fa-times").click(function(){
        $("ul.toggle").animate({opacity:0},200).hide("1");
        $("ul.row-toggle").animate({opacity: 1},200)
    });
    $("div.papular div.cards .card .buttons span.like").click(function(){
        if($(this).hasClass("like-heart")){
            $(this).removeClass("like-heart");
        }
        else{
            $(this).addClass("like-heart");
        }
    });
    $(".testimonial .btns span").click(function(){
        $(".testimonial .btns span").each(function(i){
            $(".testimonial .btns span").eq(i).removeClass("active");
        })
        $(this).addClass("active");
    })
    $('.testimonial .btns span').click(function(){
        $(".testimonial .slider .slide").css("display" , "none");
        if($(this).attr("id") == "first"){
            $(".testimonial .slider .test1").fadeIn(200).css("display" , "flex");
        }
        if($(this).attr("id") == "between"){
            $(".testimonial .slider .test2").fadeIn(200).css("display" , "flex");
        }
        if($(this).attr("id") == "last"){
            $(".testimonial .slider .test3").fadeIn(200).css("display" , "flex");
        }
    });
});
