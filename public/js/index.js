$(window).on("scroll resize", function () {
    if ($(window).scrollTop() > 0) {
        $("header").addClass("scrolldown");
    }else {
        $("header").removeClass("scrolldown");
    }
})

$(".menu").click(function(){
    $(".mobile-menu").addClass("active");
})
$(".mobile-back").click(function(){
    $(".mobile-menu").removeClass("active");
})