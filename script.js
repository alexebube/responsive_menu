// JavaScript Document

var ww = document.body.clientWidth;

$(document).ready(function() {
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
				$(this).addClass("parent");	
			}
    });
	
	$(".show-menu").click(function(e) {
        e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").slideToggle();
    });
	
	respondMenu();
});

$(window).bind('resize orientationchange', function(){
	ww = document.body.clientWidth;
	respondMenu();
	});
	
var respondMenu = function (){
	if (ww < 768) {
			$(".show-menu").css("display","inline-block");
			if (!$(".show-menu").hasClass("active")) {
					$(".nav").hide();
				}
			else {
					$(".nav").show();
				}
			$(".nav li").unbind('mouseenter mouseleave');
			$(".nav li a.parent").unbind('click').bind('click', function(e){
				$(this).toggleClass('hover');
				});
		}
	}