var didScroll;
var lastScrollTop = 0;
var delta = 5;

function openOverlay() {
	$('.js-overlay').addClass('is-open'); // Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
}

function closeOverlay() {
	$('.js-overlay').removeClass('is-open'); // Find element with the class 'js-menu-container' and remove the class 'is-open'
}

function updateOverlayButton() {
	$('.js-overlay-button').find('.menu-icon').toggleClass('is-active');
}

function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}


function hasScrolled() {

    var st = $('html, body').scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }

    if (st > lastScrollTop){
        $('.hero').addClass('has-scrolled');
    }

    else {

    	if (st <= 100) {
            $('.hero').removeClass('has-scrolled');
        }

    }

    lastScrollTop = st;

}

svg4everybody();

jQuery(document).ready(function($){

	// Hero
		setTimeout(function() {
			$('.hero').addClass('has-delayed');
		}, 3000);

		hasScrolled();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);



	// Select Menus
		$('select').niceSelect();

	// Accordions
		var accordion__title = '.js-accordion__title';
		var accordion__content = '.js-accordion__content';

		$(accordion__content).slideUp();
		$('.is-active').parent().find(accordion__content).slideDown();

		$(accordion__title).click( function () {
			$(this).toggleClass('is-active');
			$(this).next(accordion__content).slideToggle();
			return false;
		});

	// Carousels
		const carousels = $('.js-carousel');

		// Generate Slider Objects
			$(carousels).each(function() {

				var currentSlide = 0;

				// Init Sliders and set options
					const carousel = new Siema({
						selector: this,
						duration: 200,
						easing: 'ease-out',
						perPage: 1,
						startIndex: 0,
						draggable: true,
						threshold: 20,
						loop: true,
						onInit: activePagination,
	  					onChange: activePagination
					});

				// Slider autoplay
					setInterval(() => carousel.next(), 5000);

				// Next and Previous Navigation
					const carousel_prev = $(this).parent().find('.js-carousel__prev');
					const carousel_next = $(this).parent().find('.js-carousel__next');

					$(carousel_prev).click(function() {
						carousel.prev();
					});

					$(carousel_next).click(function() {
						carousel.next();
					});

				// Pagiation
					Siema.prototype.addPagination = function() {

						const pagination_container = $(this).parent().find('.js-carousel-pagination');

						for (let i = 0; i < carousel.innerElements.length; i++) {
							const button = document.createElement('button');
							button.className = 'carousel__pagination-button carousel__pagination-button--' + i;
							button.textContent = i + 1;

							if(i === 0) {
								button.className ='carousel__pagination-button carousel__pagination-button--' + i + ' is-active';
							}

							$(button).click(function() {
								carousel.goTo(i);
								currentSlide = i;
								$(this).parent().find('.carousel__pagination-button').removeClass('is-active');
								$(this).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');
							});

							this.selector.parentElement.lastElementChild.appendChild(button);

						}
					}

				// Active States for Pagination
					function activePagination() {

						currentSlide = this.currentSlide;
						$(this.selector).parent().find('.carousel__pagination-button').removeClass('is-active');
						$(this.selector).parent().find('.carousel__pagination-button--' + currentSlide).addClass('is-active');

					}

				// Trigger pagination creator
					carousel.addPagination();

			});


	// Multi Carousel
		const multiCarousels = $('.js-multi-carousel');

		// Generate Slider Objects
			$(multiCarousels).each(function() {

				var currentSlide = 0;

				// Init Sliders and set options
					const carousel = new Siema({
						selector: this,
						duration: 200,
						easing: 'ease-out',
						perPage: 1,
						startIndex: 0,
						draggable: true,
						threshold: 20,
						loop: true,
	  					perPage: {
	  						800: 1,
	  						1200: 2,
	  						1600: 3
	  					}
					});

				// Next and Previous Navigation
					const carousel_prev = $(this).parent().find('.js-carousel__prev');
					const carousel_next = $(this).parent().find('.js-carousel__next');

					$(carousel_prev).click(function() {
						carousel.prev();
					});

					$(carousel_next).click(function() {
						carousel.next();
					});

			});

	// Menu Button
		$('.js-menu-button').click(function(e){

			e.preventDefault();
			updateMenuButton();

		});

	// Overlay
		$('.js-overlay-open').click(function(){
			openOverlay();
			updateOverlayButton();
		});

		$('.js-overlay-close').click(function(){
			closeOverlay();
			updateOverlayButton();
		});

});