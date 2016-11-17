var BoxTip = {
    Index: 0,
    Element: [],
    Cache: false,
    Init: function () {
        var function_private = {
            CalcPosition: function (left, top, element) {
                var width = $(window).width();
                var height = $(window).height();
                var quadrant = [1, 2, 3, 4];
                var calcBorder = "15px 15px 15px 15px";

                //regra para a largura
                if (left + element.outerWidth() > width) //se ultrapassar do limite de largura
                    quadrant = $.grep(quadrant, function (val, index) { return val != 1 && val != 4 });
                else
                    quadrant = $.grep(quadrant, function (val, index) { return val != 2 && val != 3 });

                //regra para a altura
                if (element.outerHeight() + top > height)
                    quadrant = $.grep(quadrant, function (val, index) { return val != 3 && val != 4 });
                else 
                    quadrant = $.grep(quadrant, function (val, index) { return val != 1 && val != 2 });

                //regra para definir em qual quadrante vai se encontrar o chat, e para onde ele vai apontar
                if (quadrant.length == 1) {
                    if (quadrant[0] == 1) {
                        top = top - element.outerHeight() + ($(BoxTip.Element[BoxTip.Index].Class).outerHeight() / 2);
                        left = left + ($(BoxTip.Element[BoxTip.Index].Class).outerWidth() / 2);
                        calcBorder = "15px 15px 15px 0px";
                    }
                    else if (quadrant[0] == 2) {
                        top = top - element.outerHeight() + ($(BoxTip.Element[BoxTip.Index].Class).outerHeight() / 2);
                        left = left - element.outerWidth() + ($(BoxTip.Element[BoxTip.Index].Class).outerWidth() / 2);
                        calcBorder = "15px 15px 0px 15px";
                    }
                    else if (quadrant[0] == 3) {
                        top = top + ($(BoxTip.Element[BoxTip.Index].Class).outerHeight() / 2);
                        left = left - element.outerWidth() + ($(BoxTip.Element[BoxTip.Index].Class).outerWidth() / 2);
                        calcBorder = "15px 0px 15px 15px";
                    }
                    else if (quadrant[0] == 4) {
                        top = top + ($(BoxTip.Element[BoxTip.Index].Class).outerHeight() / 2);
                        left = left + ($(BoxTip.Element[BoxTip.Index].Class).outerWidth() / 2);
                        calcBorder = "0px 15px 15px 15px";
                    }
                }

                element.css({
                    "border-radius": calcBorder,
                    "top": top + "px",
                    "left": left + "px"
                });
            },
            InitTip: function () {
                if (BoxTip.Cache === false || localStorage.getItem(BoxTip.Element[BoxTip.Index].Class) === null) {
                    var top = $(BoxTip.Element[BoxTip.Index].Class).position().top;
                    var left = $(BoxTip.Element[BoxTip.Index].Class).position().left;

                    var element = $("<span>", { class: "Tip" });

                    if (BoxTip.Element[BoxTip.Index].Title !== null) {
                        element
                            .append($("<div>", { class: "TipTitle" })
                                .append(BoxTip.Element[BoxTip.Index].Title));
                    }

                    element.append(BoxTip.Element[BoxTip.Index].Message)
                        .click(function_private.TipClick);

                    $("body")
                        .append(element)
                        .append($("<div>", { class: "Background-Tip" }));
                    localStorage.setItem(BoxTip.Element[BoxTip.Index].Class, true);

                    function_private.CalcPosition(left, top, element);
                }
                else {
                    BoxTip.Index++;
                    if(BoxTip.Index < BoxTip.Element.length)
                        function_private.InitTip();
                }
            },
            TipClick: function () {
                $(".Tip").remove();
                $(".Background-Tip").remove();
                BoxTip.Index++;
                function_private.InitTip();
            }
        };

        function_private.InitTip();
    },
    AddTip: function (className, message, title) {
        if (title === undefined)
            title = null;

        BoxTip.Element.push({
            Class: className,
            Message: message,
            Title: title
        });
    },
    Refresh: function () {
        BoxTip.Element.forEach(function (element, index) {
            localStorage.removeItem(element.Class);
        });
    }
}