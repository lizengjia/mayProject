$.fn.answerSheet = function(options) {
    var defaults = {
        mold: 'card',
    };
    var opts = $.extend({}, defaults, options);
    return $(this).each(function() {
        var obj = $(this).find('.card_cont');
        var that = $(this);
        var index = 0;
        var _length = obj.length,
            _b = _length - 1,
            _len = _length - 1,
            _cont = '.card_cont';
        for (var a = 1; a <= _length; a++) {
            obj.eq(_b).css({
                'z-index': a
            });
            _b -= 1;
        }
        $(this).show();
        if (opts.mold == 'card') {
            $('.but').click(function() {
                var _idx = index++,
                    _cards = obj,
                    _cardcont = obj.eq(_idx);
                if (_idx == _len) {
                    return;
                } else {
                    setTimeout(function() {
                            _cardcont.addClass('cardn');
                            setTimeout(function() {
                                    _cards.eq(_idx + 3).addClass('card3');
                                    _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                                    _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                                    _cardcont.removeClass('card1');
                                },
                                200);
                        },
                        100);
                }
            });
            $('.pre').click(function() {
                var _idx = index--,
                    _cardcont = obj.eq(_idx);
                obj.eq(_idx + 2).removeClass('card3').removeClass('cardn');
                obj.eq(_idx + 1).removeClass('card2').removeClass('cardn').addClass('card3');
                obj.eq(_idx).removeClass('card1').removeClass('cardn').addClass('card2');
                setTimeout(function() {
                        obj.eq(_idx - 1).addClass('card1').removeClass('cardn');
                    },
                    200);
            })
        }
    });
};