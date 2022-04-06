const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  speed: 1000, 
  slidersPerView: 1,
  effect: "fade",

	// If we need pagination
	/*pagination: {
    el: '.swiper-pagination',
  },*/

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}

	// And if we need scrollbar
	/*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});
