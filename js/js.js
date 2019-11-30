// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/

$(document).ready(function(){ //Hacia arriba
	irArriba();
  });
  
  function irArriba(){
	$('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
	$(window).scroll(function(){
	  if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
	});
	$('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }