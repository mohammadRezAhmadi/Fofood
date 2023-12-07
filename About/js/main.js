$(document).ready(function() {
$(".row-toggle li.bars").click(function(){
    $("ul.toggle").animate({opacity: 0.9},200)
    $("ul.toggle").css("display" , "flex");
    $("ul.row-toggle").animate({opacity: 0},200)
})
$("ul.toggle ul.navbar-toggle i.fa-times").click(function(){
    $("ul.toggle").animate({opacity:0},200).hide("10");
    $("ul.row-toggle").animate({opacity: 1},1)
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