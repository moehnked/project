'use strict';

$(document).ready(function(){

	//settings for the slider
	var width = 400;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;
	
	//DOM stuff for jQuery
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	
	//interval needs to be defined outside of the start function so that way it can be accessed elsewhere
	var interval;
	//start slider when mouse leaves
	function startSlider(){
		//interval that slides the pictures to the left
		//the interval function is stored in the variable interval so that way we can use the "stopInterval" method to pause
		interval = setInterval(function () {
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
				//when we get to the last slide, reset everything so its back at the start
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}
	//pause slider when mouse over
	function pauseSlider() {
		clearInterval(interval);
	}
	
	startSlider();
	
	
		
	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);	
	//listen for mouseenter and pause
	//resume on mouse leave
});