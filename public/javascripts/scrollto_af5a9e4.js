var $win = $(window),
    $html = $("html,body");
$.widget("hao123.scrollto", {
    _create: function () {
        this._on(this.element, {
            click: this._scroll
        })
    },
    _scroll: function () {
        var t = this.element,
            o = $(t.data("scrollto")),
            l = +(t.data("scrollto-offset") || 0),
            e = t.data("scrollto-duration");
        if ("undefined" == typeof e && (e = 100), o[0]) {
            var i = o.offset().top - l;
            e ? $html.stop().animate({
                scrollTop: i
            }, +e) : $win.scrollTop(i)
        }
    },
    _destroy: function () {
        this._off(this.element, "click")
    }
});