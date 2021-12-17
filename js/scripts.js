//Get the button
var topButton = document.getElementById("topButton");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Active menu elements
var btns = document.getElementsByClassName("header_menu_li");

// Go through every menu element to add active class if clicked
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Slick-slider main page options
$(document).ready(function(){
    $('.main_slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        fade: true,
        pauseOnFocus: true,
        pauseOnHover: false
      });
  });