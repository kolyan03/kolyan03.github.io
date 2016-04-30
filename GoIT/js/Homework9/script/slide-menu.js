//@JavaScript document
$(document).ready(function() {
    $('.submenu').hover(
        function() {
            $(this).children('.this-is-slider').slideDown(200);
        },
        function() {
            $(this).children('.this-is-slider').slideUp(200);
        }
    );
});






/*
function mainmenu(){
$(" #slider-here ul ").css({display: "none"}); // Opera Fix
$(" #slider-here li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"}).hide(400);
		});
} 
 $(document).ready(function(){					
	mainmenu();
});
*/