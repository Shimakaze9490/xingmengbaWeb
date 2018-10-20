define("haokanui:widget/pc/elevator/elevator", function () {
    function o() {
        e.scrollTop() > 600 ? r.css("display", "block") : r.css("display", "")
    }
    if (!($.browser.msie && $.browser.version < 7)) {
        var r = $(".elevator-wrap");
        $(".gotop", r).scrollto();
        var e = $(window).scroll(o);
        o()
    }
});