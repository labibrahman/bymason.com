$(document).ready(function(){
     
if ($(window).width() >= 992){	
		var imgArr = new Array( // relative paths of images
     'img/healthcare_hero.png',
     'img/transportation_hero.png',
     'img/POS_hero.png'
     );

     var preloadArr = new Array();
     var i;

     /* preload images */
     for(i=0; i < imgArr.length; i++){
     preloadArr[i] = new Image();
     preloadArr[i].src = imgArr[i];
     }

     var currImg = 1;
     var intID = setInterval(changeImg, 5000);

     /* image rotator */
     function changeImg(){
     $('.intro-header').animate({opacity: 0}, 500, function(){
     $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') top center no-repeat');
     }).animate({opacity: 1}, 500);
     }
}	
    
 
 });