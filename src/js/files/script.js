// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile, removeClasses, bodyLockStatus, bodyLockToggle, bodyUnlock, bodyLock, darkBody } from "./functions.js";
import { formsModules } from "./forms/forms.js";

// Работа на тачскринах
// Когда весь контент на странице загрузился 
window.onload = function () {
	// Слушаем событие клик на всем документе
	document.addEventListener("click", documentActions);

	// Actions (делегирование события click) 
	function documentActions(e) {
		// В константу будем получать обьект, на который мы нажали на всем документе 
		const targetElement = e.target;
		// Пишем событие click которое будет работать только на экранах шире 768px и только на тачскрнах
		// Добавим проверку. Если экран шире 768, а так же добавим функцию на проверку мобильных устройств isMobile.any().  
		// Функция вернет true, если сайт открыт на устройствах с тачскрин
		if (window.innerWidth > 768 && isMobile.any()) {

			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover')
			}

			// Закрываем подменю при клике на пустое пространство
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				// Отдаем нашей функции _removeClasses() коллекцию обьектов, и указываем какой кдасс нужно убрать.
				removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}

		}

		// Закрываем Поиска при клике на пустое пространство
		if (!targetElement.closest('.header__search') && document.querySelectorAll('.search-form._active').length > 0) {
			// Отдаем нашей функции _removeClasses() коллекцию обьектов, и указываем какой кдасс нужно убрать.
			removeClasses(document.querySelectorAll('.search-form._active'), "_active");
			search.value = "";
		}

		if (window.innerWidth <= 768) {
			if (!targetElement.closest('.bottom-icons-panel') && !targetElement.closest('.personal-navigation__header')
				&& document.querySelectorAll('.personal-navigation._active').length > 0) {
				// Отдаем нашей функции _removeClasses() коллекцию обьектов, и указываем какой кдасс нужно убрать.
				removeClasses(document.querySelectorAll('.personal-navigation._active'), "_active");
				bodyUnlock();
				darkBody();
			}
		}

		// Кнопка избранное 
		if (targetElement.classList.contains('_icon-favorite')) {
			targetElement.closest('.icons-card-product').classList.toggle('_active');
		}

		// Кнопка избранное 
		if (targetElement.classList.contains('item-card-order__icon')) {
			targetElement.closest('.item-card-order__icons').classList.toggle('_active');
		}
	}

	// Активация поиска
	function searchInit() {
		const limit = 3;
		const search = document.getElementById('search');
		const searchClose = document.getElementById('searchClose');
		const searchMobClose = document.getElementById('searchMobClose');

		search.addEventListener('input', function () {
			if (this.value.length >= limit) {
				document.querySelector('.search-form').classList.add('_active');
				if (window.innerWidth <= 768 && isMobile.any()) {
					document.querySelector('.header').classList.add('_search');
					document.documentElement.classList.remove("menu-open");
					bodyLock();
				}
				bodyLock();
				// return;
			} else {
				document.querySelector('.search-form').classList.remove('_active');
				if (window.innerWidth <= 768 && isMobile.any()) {
					document.querySelector('.header').classList.remove('_search');
					bodyUnlock();
				}
				bodyUnlock();
			}
		});

		if (searchClose && searchMobClose) {
			searchClose.addEventListener("click", function (e) {
				document.querySelector('.search-form').classList.remove('_active');
				if (window.innerWidth <= 768 && isMobile.any()) {
					document.querySelector('.header').classList.remove('_search');
					document.documentElement.classList.remove("menu-open");
					bodyUnlock();
				}
				bodyUnlock();
			});
			searchMobClose.addEventListener("click", function (e) {
				document.querySelector('.search-form').classList.remove('_active');
				if (window.innerWidth <= 768 && isMobile.any()) {
					document.querySelector('.header').classList.remove('_search');
					document.documentElement.classList.remove("menu-open");
					bodyUnlock();
				}
				bodyUnlock();
			});
		}
	}

	searchInit();

	// Активация модулей на мобилках 
	if (window.innerWidth <= 768 && isMobile.any()) {

		// Активация Мобильных фильтров
		const btnFilter = document.querySelector('.btn-filter');
		const filterCatalog = document.querySelector('.filter-catalog');
		const mobFiltercl = document.querySelector('.mob-filter-cl');

		function mobFiltersOp() {
			if (btnFilter && filterCatalog) {
				btnFilter.addEventListener("click", function (e) {
					filterCatalog.classList.add('_active');
					bodyLock();
					darkBody();
				});
			}
		}
		function mobFiltersCl() {
			if (mobFiltercl && filterCatalog) {
				mobFiltercl.addEventListener("click", function (e) {
					filterCatalog.classList.remove('_active');
					bodyUnlock();
					darkBody();
				});
			}
		}
		mobFiltersOp();
		mobFiltersCl();
	}

	// Активация личного кабинета на мобилке 
	if (document.querySelector('._action-btn-profile')) {
		document.querySelector('._action-btn-profile').addEventListener("click", function (e) {
			if (document.querySelector('.personal-navigation')) {
				document.querySelector('.personal-navigation').classList.toggle('_active');
				bodyLockToggle();
				darkBody();
			}
		});
	}
	if (document.querySelector('.header-personal-navigation__btn')) {
		document.querySelector('.header-personal-navigation__btn').addEventListener("click", function (e) {
			if (document.querySelector('.personal-navigation')) {
				document.querySelector('.personal-navigation').classList.remove('_active');
				bodyUnlock();
				darkBody();
			}
		});
	}

	// Заказ подробно 
	function orderInit() {
		const bodyOrdersBtn = document.querySelectorAll('.body-orders__button');
		const personalContentOrders = document.querySelector('.personal-content__orders');
		const orderdetailBackBtn = document.querySelectorAll('.order-detail__back-btn');
		const personalContentOrderDetail = document.querySelector('.personal-content__order-detail');

		bodyOrdersBtn.forEach(btn => {
			btn.addEventListener("click", function (e) {
				personalContentOrders.classList.add('_none');
				personalContentOrderDetail.classList.add('_active')
			});
		});

		orderdetailBackBtn.forEach(btn => {
			btn.addEventListener("click", function (e) {
				personalContentOrders.classList.remove('_none');
				personalContentOrderDetail.classList.remove('_active')
			});
		});
	}
	orderInit();
	// ========================================================

}

// Ограничение ввода 
const quantityInput = document.querySelectorAll('.quantity__input input');
quantityInput.forEach(input => {
	input.addEventListener('input', function () {
		var maxLength = 3;
		if (this.value.length > maxLength) {
			this.value = this.value.substring(0, maxLength);
		}
	})
});













