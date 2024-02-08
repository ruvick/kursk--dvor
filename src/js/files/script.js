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

		// Активация поиска
		if (targetElement.classList.contains('search-form__input')) {
			document.querySelector('.search-form').classList.toggle('_active');
			darkBody();
			bodyLockToggle();
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active');
			darkBody();
		}
	}

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
				});
			}
		}
		function mobFiltersCl() {
			if (mobFiltercl && filterCatalog) {
				mobFiltercl.addEventListener("click", function (e) {
					filterCatalog.classList.remove('_active');
					bodyUnlock();
				});
			}
		}
		mobFiltersOp();
		mobFiltersCl();
	}
}

// Input file
function getFileName() {
	var file = document.getElementById('myfile').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-name').innerHTML = '' + file;

	var file = document.getElementById('myfiles').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-names').innerHTML = '' + file;
}

// document.querySelector("._icon-search-plus").addEventListener('click', function () {
// 	var startGalleryEvent = new CustomEvent('click', { bubbles: true, cancelable: true });
// 	document.querySelector(".firstGalleryItem").dispatchEvent(startGalleryEvent);
// })



