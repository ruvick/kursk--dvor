$(document).ready(function () {

	// // Input code 
	// $('.input--code').keydown(function (e) {
	// 	$(this).val('');
	// });

	// $('.input--code').keyup(function (e) {
	// 	var $wrap = $(this).closest('.pincode');
	// 	var $inputs = $wrap.find('input[type="number"]'); 
	// 	var val = $(this).val();

	// 	// Ввод только цифр
	// 	if (val == val.replace(/[0-9]/, '')) {
	// 		$(this).val('');
	// 		return false;
	// 	}

	// 	// Передача фокуса следующему innput
	// 	$inputs.eq($inputs.index(this) + 1).focus();

	// 	// Заполнение input hidden
	// 	var fullval = '';
	// 	$inputs.each(function () {
	// 		fullval = fullval + (parseInt($(this).val()) || '0');
	// 	});
	// 	$wrap.find('input[type="hidden"]').val(fullval);
	// });
	//========================================================================================================================================================

	// Маска телефона
	// var inputmask_phone = { "mask": "+9(999)999-99-99" };
	// $("input[type=tel]").inputmask(inputmask_phone);


	// $('._icon-search-plus').click(function () {
	// 	$.fancybox([
	// 		{ href: '.slider-card-product__slide' }
	// 	]);
	// });

	// $('#openGalleryButton').click(function () {
	// 	$.fancybox.open({
	// 		src: '#gallery',
	// 		type: 'inline',
	// 		// Дополнительные опции FancyBox
	// 	});
	// });

	// $('body').on('click', '.card-product__image', function () {
	// 	// $('.image-card-product__dotts').css({ 'pointer-events': 'none' });
	// 	$('.image-card-product__dotts').addClass('pointer-events');
	// });

	$("._icon-search-plus").click(function (e) {
		if ($('.card-product__image')) {
			e.preventDefault();
		}
	});
	$("._icon-favorite").click(function (e) {
		if ($('.card-product__image')) {
			e.preventDefault();
		}
	});
	$(".card-product__image").click(function (e) {
		// const link = document.querySelector('div[data-fancybox]');
		// $('.image-card-product__dotts').css({ 'pointer-events': 'none' });
		// link.removeAttribute('data-fancybox');
		// link.removeAttribute('data-src');
		console.log('Клик');
	});

});

