/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules 
import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров   
	if (document.querySelector('.swiper')) {
		new Swiper('.image-card-product', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			// effect: 'fade',
			// autoplay: {
			delay: 1000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			// slidesPerView: 'auto', // Чтобы слайдер сам не указывал ширину слайдам. Будем управлять в стилях.
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.image-card-product__dotts',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.slider-rooms .slider-arrow_next',
			// 	prevEl: '.slider-rooms .slider-arrow_prev',
			// },
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20, swiper.disable()
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				resize: function enableOnlyMobile(swiper) {
					if (1024 >= window.innerWidth) {
						swiper.disable()
						swiper.el.classList.add('-non-slider')
					} else {
						swiper.enable()
						swiper.el.classList.remove('-non-slider')
					}
				},
			}
		});

		// var thumbs = document.querySelectorAll('.image-card-product .swiper-slide');
		// for (var i = 0; i < thumbs.length; i++) thumbs[i].addEventListener('mouseover', function () { this.click() });

		new Swiper('.slider-cards-block', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			// effect: 'fade',
			// autoplay: {
			// 	delay: 1000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			// slidesPerView: 'auto', // Чтобы слайдер сам не указывал ширину слайдам. Будем управлять в стилях.
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.image-card-product__dotts',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.navigation-panel-product .arrow-sl-btn_next',
				prevEl: '.navigation-panel-product .arrow-sl-btn_prev',
			},
			breakpoints: {
				345: {
					slidesPerView: 1.5,
				},
				375: {
					slidesPerView: 2.15,
				},
				540: {
					slidesPerView: 2.6,
				},
				730: {
					slidesPerView: 3,
				},
				1023: {
					slidesPerView: 4,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			on: {

			}
		});

		new Swiper('.main-slider-big', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			// effect: 'fade',
			// autoplay: {
			delay: 1500,
			disableOnInteraction: false,
			// },

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			// freeMode: true,
			// freeModeMomentum: false,
			// slidesPerView: 'auto', // Чтобы слайдер сам не указывал ширину слайдам. Будем управлять в стилях.
			// spaceBetween: 0,
			// autoHeight: true,
			speed: 1500,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider-big__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.main-slider-big .arrow-sl-btn_next',
				prevEl: '.main-slider-big .arrow-sl-btn_prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});

		new Swiper('.main-slider-small', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			// effect: 'fade',
			// autoplay: {
			delay: 1500,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			// slidesPerView: 'auto', // Чтобы слайдер сам не указывал ширину слайдам. Будем управлять в стилях.
			spaceBetween: 10,
			// autoHeight: true,
			// speed: 1500,
			// parallax: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider-small__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.main-slider-small .arrow-sl-btn_next',
				prevEl: '.main-slider-small .arrow-sl-btn_prev',
			},
			breakpoints: {
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				992: {
					slidesPerView: 1,
					// spaceBetween: 20,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			on: {

			}
		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});