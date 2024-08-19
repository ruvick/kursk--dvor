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

	// $('#openGalleryButton').click(function () {
	// 	$.fancybox.open({
	// 		src: '#gallery',
	// 		type: 'inline',
	// 		loop: true,
	// 		// Дополнительные опции FancyBox
	// 	});
	// });

	$("._icon-search-plus").click(function (e) {
		if ($('.card-product__image')) {
			e.preventDefault();
		}
	});
	// $(".card-product ._icon-favorite").click(function (e) {
	$("._icon-favorite").click(function (e) {
		if ($('.card-product__image')) {
			e.preventDefault();
		}
	});

	$('.image-card-product__dotts').on('click', function () {
		$('.card-product__image').each(function () {
			$(this).find('.slider-card-product__slide').removeAttr('data-fancybox');
			$(this).find('.image-card-product__dotts').css({ 'pointer-events': 'none' });
			window.location.href = $('.card-product__image').attr('href');
		});
	});

	$('.slider-card-product__slide').on('click', function () {
		$(this).removeAttr('data-fancybox');
	});

	if (1024 >= window.innerWidth) {
		$('.slider-card-product__slide').removeAttr('data-fancybox');
	}

});

