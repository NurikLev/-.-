$(function() {

    var header = $("#header"),
				headert = $("#headert")
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
						headert.addClass("none")
        } else {
            header.removeClass("fixed");
						headert.removeClass("none")
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });



    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

	
		$('.logos').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
		});

		$('.services__icon').slick();
					

	$('.show__popup').click(function() { // Вызываем функцию по нажатию на кнопку
		var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
		$(popup_id).show(); // Открываем окно
		$('.overlay__popup').show(); // Открываем блок заднего фона
	})
	$('.overlay__popup').click(function() { // Обрабатываем клик по заднему фону
		$('.overlay__popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
	})

	$('.overlay-dlya__input').click(function() {
		$('.inputtt').css({"display" : "none"});
	})

});

