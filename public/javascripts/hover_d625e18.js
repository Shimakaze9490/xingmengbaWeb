$.widget("hao123.hover", $.browser.msie && $.browser.version < 7 ? {
    _create: function () {
        this._on(this.element, {
            hover: this._hover
        })
    },
    _hover: function (e) {
        this.element[("mouseenter" === e.type ? "add" : "remove") + "Class"]("hover")
    },
    _destroy: function () {
        this._off(this.element, "hover"), this.element.removeClass("hover")
    }
} : {});