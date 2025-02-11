$(document).ready(function () {
    // FAQ
    $(".quation_block .ans").hide();
    $(".quation_block.active .ans").show();
    $(".quation_block").on("click", function () {
        $(this).children(".quation").children(".plus").toggleClass("rotated");
        $(this).children(".ans").slideToggle(300, "linear");
    });

    // slider
    let activeEl = $(".slide1");
    setInterval(function () {
        if (activeEl.next(".slide_block").length == 1) {
            let currentEl = activeEl;
            setTimeout(() => {
                currentEl.toggleClass("showed");
            }, 800);
            activeEl.next(".slide_block").toggleClass("showed");
            activeEl = activeEl.next(".slide_block");
        } else {
            let currentEl = activeEl;
            setTimeout(() => {
                currentEl.toggleClass("showed");
            }, 800);
            $(".slide1").toggleClass("showed");
            activeEl = $(".slide1");
        }
    }, 6000);

    // chips
    if ($(window).width() > 1024) {
        $(document).on("mousemove", function (e) {
            let x = e.pageX / window.innerWidth;
            let y = e.pageY / window.innerHeight;
            $(".chip_back").css(
                "transform",
                "translate(-" + x * 20 + "px, -" + y * 20 + "px)"
            );
        });
    }

    // gamburger
    $(".gam_menu").on("click", function () {
        $(".gam_block").toggleClass("active");
    });
    $(".cross").on("click", function () {
        $(".gam_block").toggleClass("active");
    });

    // scrollTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scroll_top").stop().fadeIn();
        } else {
            $(".scroll_top").stop().fadeOut();
        }
    });
    $(".scroll_top").click(function () {
        $("body, html").stop().animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });

    // anchor
    $(".ogl_block a").click(function (e) {
        let query = $(this).attr("href");
        $("html,body")
            .stop()
            .animate({ scrollTop: $(query).offset().top }, 800);
        e.preventDefault();
    });
	
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("myHeader");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
}	
});
