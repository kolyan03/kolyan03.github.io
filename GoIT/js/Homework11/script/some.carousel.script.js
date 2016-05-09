(function($) {
    $.fn.myPlugin = function() {

        var leftUIEl = $('.turn-left');
        var rightUIEl = $('.turn-right');
        var elementsList = $('.main-list');
        var elementsWiev = 1;

        var pixelsOffset = 600;
        var currentLeftValue = 0;

        var elementsCount = elementsList.find('li').length;

        var minimumOffset = -((elementsCount - elementsWiev) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });

        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });
        return this;
    }
})(jQuery);

$('.turn-left,.turn-right').myPlugin();