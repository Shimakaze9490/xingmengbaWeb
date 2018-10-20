define("haokanui:widget/pc/top/top", function () {
    if ($(".top .btn2").hover(), $.browser.msie && $.browser.version < 10) {
        var e = 2e3,
            t = $(".top .screen:not(:first-child)"),
            i = t.length;
        t.each(function (t) {
            $(this).delay(e * (i - t)).animate({
                opacity: 0,
                left: "-100%"
            })
        })
    }
});