console.clear();
const navMenuItems = document.querySelectorAll(".has-dropdown");
const dropdownContentContainer = document.querySelector(".dropdown-content");
const content = document.querySelectorAll(".content");
const pictures = document.querySelectorAll(".picture");
const imgUrls = [
	"https://i.ytimg.com/vi/GUHMGSfv--k/hqdefault.jpg",
	"https://assets.codepen.io/t-1/melissa-walker-horn-NkwNp3ho-Qw-unsplash.jpg",
	"https://assets.codepen.io/t-1/jay-gajjar-vsYCZVef28E.jpg",
	"https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	"https://images.unsplash.com/photo-1586985289071-36f62f55ce44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
];

pictures.forEach((pic, index) => {
	pic.style.backgroundImage = `url(${imgUrls[index]})`;
});

for (let item of navMenuItems) {
	item.addEventListener("click", () => {
		navMenuItems.forEach((menuItem) => {
			if (menuItem.classList.contains("active") && menuItem != item) {
				menuItem.classList.remove("active");
			}
		});

		item.classList.toggle("active");

		for (let elem of content) {
			if (
				elem.classList.contains("active") &&
				elem.dataset.content != item.dataset.content
			) {
				elem.classList.remove("active");
			}

			if (elem.dataset.content === item.dataset.content) {
				elem.classList.toggle("active");
			}
		}
	});
}
(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery