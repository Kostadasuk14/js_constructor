'use strict';
/*
		new Swiper('.swiper-container', {
			loop: true,
			navigation: {
				nextEl: '.arrow',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				541: {
					slidesPerView: 2,
					spaceBetween: 40
				}
			}
		});

		const menuButton = document.querySelector('.menu-button');
		const menu = document.querySelector('.header');
		menuButton.addEventListener('click', function () {
			menuButton.classList.toggle('menu-button-active');
			menu.classList.toggle('header-active');
		})
*/

const getElement = (tagName, classNames, attributes) => {
	const element = document.createElement(tagName);

	if (classNames) {
		element.classList.add(...classNames);
	}

	if (attributes) {
		for (const attribute in attributes) {
			element[attribute] = attributes[attribute];
		}
	}

	return element;
};

const createHeader = (param) => {
	const header = getElement('header');
	const container = getElement('div', ['container']);
	const wrapper = getElement('div', ['header']);

	if (param.header.logo) {
		const logo = getElement('img', ['logo'], {
			src: param.header.logo,
			alt: param.header.alt,
		});
		wrapper.append(logo);
	}

	if (param.header.menu) {
		// домашнее задание
		const navBar = getElement('nav', ['menu-list']);
		const allMenu = param.header.menu.map(item => {
			const navItem = getElement('a', ['menu-link']);
			navItem.textContent = item.title;
			navItem.href = item.link;

			return navItem;
		});

		navBar.append(...allMenu);
		wrapper.append(navBar);
	}

	if (param.header.social) {
		const socialWrapper = getElement('div', ['social']);
		const allSocial = param.header.social.map(item => {
			const socialLink = getElement('a', ['social-link']);
			socialLink.href = item.link;
			socialLink.append(getElement('img', [], {
				src: item.image,
				alt: item.title
			}));

			return socialLink;
		});

		socialWrapper.append(...allSocial);
		wrapper.append(socialWrapper);
	}

	header.append(container);
	container.append(wrapper);

	return header;
};

const movieConstructor = (selector, options) => {

	const app = document.querySelector('.app');
	app.classList.add('body-app');
	document.title = options.title;

	if (options.header) {
		app.append(createHeader(options));
	}

};

movieConstructor('.app', {
	title: 'Ведьмак - официальный сайт',
	header: {
		logo: 'witcher/logo.png',
		alt: 'логотип Ведьмак',
		social: [
			{
				title: 'Twitter',
				link: 'https://twitter.com/',
	 			image: 'witcher/social/twitter.svg',
			},
			{
				title: 'Instagram',
				link: 'https://instagram.com/',
				image: 'witcher/social/instagram.svg',
			},
			{
				title: 'Facebook',
				link: 'https://facebook.com/',
	 			image: 'witcher/social/facebook.svg',
			}
		],
		menu: [
			{
				title: 'Описание',
				link: '#',
			}, 
			{
				title: 'Трейлер',
				link: '#',
			}, 
			{
				title: 'Отзывы',
				link: '#',
			},
		]
	}
});