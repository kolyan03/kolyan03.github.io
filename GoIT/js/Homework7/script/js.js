//@ JavaScript document

$(document).ready(function() {


    $(function() {

        $(".header li a").click(function() {
            var $this = $(this);
            var $tabs = $(".header").find($this.attr('href'));

            if (!$this.hasClass('active')) {
                $(".header li a").removeClass("active");
                $(".header>div").hide('slow');
                $this.addClass("active", 5000);
                $tabs.show('');

            } else {
                $tabs.hide('slow');
                $this.removeClass("active");
            }

            return false;

        });

    });

    $('.enter-data').hover(function() {
            var tipText = $(this).attr('tip');
            var offset = $(this).offset();
            $('.tooltip-block').html(tipText).show('slow');
            $('.tooltip-block').offset({
                left: offset.left + $(this).width() + $(window).scrollTop() +5,
                top: offset.top
            });
        },
        function() {
            $('.tooltip-block').hide('fast');
        });
});