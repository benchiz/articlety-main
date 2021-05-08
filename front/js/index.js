const authorizationBtn = document.querySelector('.header__bar-authorization');
const authorizationModal = document.querySelector('.authorization');
const authorizationCloseBtn = document.querySelector('.authorization__close');
const registrationLink = document.querySelector(
	'.authorization__registration-link'
);
const registrationModal = document.querySelector('.registration');
const registrationCloseBtn = document.querySelector('.registration__close');
const registrationToAuthorization = document.querySelector(
	'.registration__authorization-link'
);

authorizationBtn.addEventListener('click', function (e) {
	e.preventDefault();
	authorizationModal.classList.add('authorization--active');
});
authorizationCloseBtn.addEventListener('click', function (e) {
	e.preventDefault();
	authorizationModal.classList.remove('authorization--active');
});
registrationLink.addEventListener('click', function (e) {
	e.preventDefault();
	authorizationModal.classList.remove('authorization--active');
	registrationModal.classList.add('registration--active');
});

registrationCloseBtn.addEventListener('click', function (e) {
	e.preventDefault();
	registrationModal.classList.remove('registration--active');
});

registrationToAuthorization.addEventListener('click', function (e) {
	e.preventDefault();
	registrationModal.classList.remove('registration--active');
	authorizationModal.classList.add('authorization--active');
});

const openMenu = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');

openMenu.addEventListener('click', function () {
	if (openMenu.getAttribute('data-closed') === '1') {
		menu.classList.add('header__menu--active');
		openMenu.setAttribute('data-closed', 0);
	} else {
		menu.classList.remove('header__menu--active');
		openMenu.setAttribute('data-closed', 1);
	}
});