define("haokanui:widget/pc/header/header", function () {
    function a() {
        var a = d.scrollTop(),
            r = e.hasClass("fixed");
        a > 600 ? r || e.addClass("fixed") : r && e.removeClass("fixed")
    }
    var e = $(".header-wrap");
    $("a", e).scrollto();
    var d = $(window).scroll(a);
    a()
});