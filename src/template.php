<!DOCTYPE html>
<html lang="ru">
@@include('html/_head.htm',{
"title":"Шаблонная"
})

<body>
	<div class="wrapper">
		@@include('html/_header.htm',{})
		<main class="page page-template">

			<div class="breadcrumbs">
				<div class="__container">
					<div class="breadcrumbs__inner">
						<a href="home.html"> Главная </a> - <span class="breadcrumb_last" aria-current="page">О
							компании</span>
					</div>
				</div>
			</div>

			<section class="template">
				<div class="__container">

					<div class="template__title-block title-block">
						<div class="title-block__title">
							<h1>Заголовок</h1>
						</div>
					</div>

					<div class="template__tabs">

						<div data-tabs class="tabs">
							<nav data-tabs-titles class="tabs__navigation">
								<button type="button" class="tabs__title _icon-arrow-big-right _tab-active">О магазине</button>
								<button type="button" class="tabs__title _icon-arrow-big-right">Контакты</button>
							</nav>
							<div data-tabs-body class="tabs__content">
								<div class="tabs__body">

									Содержимое первого таба

								</div>
								<div class="tabs__body">

									Содержимое второго таба

								</div>
							</div>
						</div>

					</div>

				</div>
			</section>

			<section class="page__order-call order-call">
				<div class="__container">

					<div class="order-call__inner">

						<div class="order-call__descp">
							<div class="order-call__title">Заказать звонок</div>
							<div class="order-call__text">Мы перезвоним в ближайшее время</div>
						</div>

						<form action="#" class="order-call__form form-order-call">
							<div class="form__line">
								<div class="form-order-call__input input _form-error">
									<label for="name-inp" class="input__label">Имя</label>
									<input id="name-inp" type="text" name="name" data-validate="" data-required="name"
										class="_form-error">
									<!-- <span class="search-form__check _icon-check"></span> -->
								</div>
								<div class="form-order-call__input input _form-error">
									<label for="phone-inp" class="input__label">Телефон</label>
									<input id="phone-inp" type="text" name="phone" data-validate="" data-required="phone"
										class="_form-error">
								</div>
								<button type="submit" class="form-order-call__btn btn">Заказать</button>
							</div>
							<div class="form-order-call__text">Заказывая звонок, Вы соглашаетесь с <a href="#">политикой
									конфиденциальности</a></div>
						</form>

					</div>

				</div>
			</section>

	</div>
	</section>

	</main>
	@@include('html/_footer.htm',{})
	@@include('sprite.svg',{})
	</div>
	@@include('html/_popup.htm',{})
	@@include('html/_js.htm',{})
</body>

</html>