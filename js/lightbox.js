// Lightbox gallery
var lightbox = new SimpleLightbox('.gallery a', {
    captions: false,
    navText:	["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],	//text or html for the navigation arrows
    closeText: "<svg class='close-elem-ico' xmlns='http://www.w3.org/2000/svg' width='18' viewBox='0 0 18 18'><path fill='none' fill-rule='evenodd' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 9.5l8-8-8 8-8-8 8 8zm0 0l8 8-8-8-8 8 8-8z'></path></svg>", 	//text or html for the close button
    showCounter: false,
    animationSlide:	false, //wether to slide in new photos or not, disable to fade
    //animationSpeed:	250,
    enableKeyboard:	true, //allow keyboard arrow navigation and close with ESC key
    loop:	true,
    docClose: false, //closes the lightbox when clicking outside
    widthRatio: 0.9,
    heightRatio: 0.9,
    disableRightClick: true,
    alertErrorMessage:	"Возникли проблемы с загрузкой фотографий",
  });