const elBarsMenu = document.querySelector('.bars-menu__icon');
const elNavMenu = document.querySelector('.site-nav__list');

if(elBarsMenu) {
	elBarsMenu.addEventListener('click', function() {
		elNavMenu.classList.toggle('site-nav__open')
	})
}