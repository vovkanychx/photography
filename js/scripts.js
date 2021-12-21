// Wait to load all page and animations
$(document).ready(function() {
  $('#loading').show();
});

// Animated popups, fadeins etc: wow.js
new WOW().init();

// When the user scrolls down 500px from the top of the document, show the button
var topButton = document.getElementById("topButton");
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

// When user clicks on the button, scroll to the following class (on header photo)
$(".scroll_to_div").click(function() {
  $('html,body').animate({
      scrollTop: $(".about").offset().top},
      'slow');
});

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
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: true
      });
  });

// Prevent dropdown menu for overlapping on browser window
function dropDownMenu(){
  var dropDown = document.getElementById('header_dropup');
  var scrollPos = window.scrollY
  if (window.onresize && innerHeight < 350){
    dropDown.style.display = "block";
    dropDown.style.top = "50px";
  } else{
    dropDown.style.display = "block";
    dropDown.style.top = "auto";
  }
}
