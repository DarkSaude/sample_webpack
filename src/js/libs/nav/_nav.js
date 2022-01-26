/* < --- --- / Сброс стилей \ --- --- > */

// Строгий режим

"use strict";

const { list } = require("postcss");

window.addEventListener("DOMContentLoaded", () => {

/* <= --- _ --- Подключение тегов и классов со страницы --- _ --- => */

			const nav = document.querySelector('nav');

/* <= --- _ --- Первый вариант шаблона меню --- _ --- => */

function sample () {

/* <= --- _ --- Определяем через что сидит пользователь Пк или Мобильный --- _ --- => */

	let isMobile = {
		Android: function () {
				return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
				return (
								isMobile.Android()
								|| isMobile.BlackBerry()
								|| isMobile.iOS()
								|| isMobile.Opera()
								|| isMobile.Windows()
								);
		}
	};

/* <= --- _ --- Если мобильный добавляем body класс _touch --- _ --- => */

			if ( isMobile.any() ) {

				document.body.classList.add('_touch');

			} else {

/* <= --- _ --- Если Desctop добавляем body класс _desctop --- _ --- => */

				document.body.classList.add('_desctop');

				if ( document.body.classList.contains('_desctop') ) {

/* <= --- _ --- Добавление классов тегам при размерах экрана --- _ --- => */

function size () {

	if (window.innerWidth <= 768) {

		/* <= --- _ --- Удаление классов с версии Пк и больше 768px --- _ --- => */

		const list = Array.prototype.slice.call(nav.querySelector('ul').children);
		list.forEach(item => {
			if (item.nodeName === 'LI') {
				item.classList.remove('item', 'list-item');
				const items = Array.prototype.slice.call(item.children);
				items.forEach(itemList => {
					if (itemList.nodeName === 'UL') {
						itemList.classList.remove('dropDown', 'item-dropDown');
						const drop_items = Array.prototype.slice.call(itemList.children);
						drop_items.forEach(drop_item => {
							if (drop_item.nodeName === 'LI') {
								drop_item.classList.remove('drop_item', 'dropDown-drop_item');
							}
						});
					}
				});
			}
		});
		nav.querySelector('div').classList.remove('_hide');
		nav.querySelector('ul').classList.remove('list', 'nav-list');
		nav.classList.remove('nav');

		/* <= --- _ --- Добавление классов версии Мобильного и меньше 768px --- _ --- => */

		nav.classList.add('m_nav');

		/* <= --- _ --- Добавление классов дочерним элементам nav --- _ --- => */

		if (nav === document.querySelector('.m_nav')) {

			/* <= --- _ --- Добавление класса nav > ul --- _ --- => */

			nav.querySelector('ul').classList.add('m_list', 'm_nav-m_list');

			/* <= --- _ --- Добавление класса nav > div --- _ --- => */

			nav.querySelector('div').classList.add('_burger');

			/* <= --- _ --- Добавление классов ul > li --- _ --- => */

			if (nav.querySelector('ul') === nav.querySelector('.m_list')) {

				const m_list = Array.prototype.slice.call(nav.querySelector('ul').children);

				m_list.forEach(m_item => {

					if (m_item.nodeName === 'LI') {
						m_item.classList.add('m_item', 'm_list-m_item');

						/* <= --- _ --- Добавление классов li > ul --- _ --- => */

						if (m_item.classList.contains('m_item')) {

							const m_items = Array.prototype.slice.call(m_item.children);

							m_items.forEach(mItemList => {

								if (mItemList.nodeName === 'UL') {
									mItemList.classList.add('m_dropDown', 'm_item-m_dropDown');
									m_item.setAttribute('date-drop','drop_item');

									/* <= --- _ --- Добавление классов ul > li --- _ --- => */

									const mDrop_items = Array.prototype.slice.call(mItemList.children);

									mDrop_items.forEach(mDrop_item => {

										if (mDrop_item.nodeName === 'LI') {
											mDrop_item.classList.add('m_drop_item', 'm_dropDown-m_drop_item');
										}

									});

								}

							});

						}

					}

				});

			}

		}

	} else {

		/* <= --- _ --- Добавление классов тегам при изменение размера экрана на 768px и больше --- _ --- => */

		/* <= --- _ --- Удаление классов с версии Мобильного и меньше 768px --- _ --- => */

		const m_list = Array.prototype.slice.call(nav.querySelector('ul').children);
		m_list.forEach(m_item => {
			if (m_item.nodeName === 'LI') {
				m_item.classList.remove('m_item', 'm_list-m_item');
				const m_items = Array.prototype.slice.call(m_item.children);
				m_items.forEach(mItemList => {
					if (mItemList.nodeName === 'UL') {
						mItemList.classList.remove('m_dropDown', 'm_item-m_dropDown');
						const mDrop_items = Array.prototype.slice.call(mItemList.children);
						mDrop_items.forEach(mDrop_item => {
							if (mDrop_item.nodeName === 'LI') {
								mDrop_item.classList.remove('m_drop_item', 'm_dropDown-m_drop_item');
							}
						});
					}
				});
			}
		});
		document.body.classList.remove('_lock');
		nav.querySelector('div').classList.remove('_burger','_activB');
		nav.querySelector('ul').classList.remove('m_list', 'm_nav-m_list','_activ_list');
		nav.classList.remove('m_nav');

		/* <= --- _ --- Добавление классов версии Пк и больше 768px --- _ --- => */

		nav.classList.add('nav');

		/* <= --- _ --- Добавление классов дочерним элементам nav --- _ --- => */

		if (nav === document.querySelector('.nav')) {

			/* <= --- _ --- Добавление класса nav > ul --- _ --- => */

			nav.querySelector('ul').classList.add('list', 'nav-list');

			/* <= --- _ --- Добавление класса nav > div --- _ --- => */

			nav.querySelector('div').classList.add('_hide');

			/* <= --- _ --- Добавление классов ul > li --- _ --- => */

			if (nav.querySelector('ul') === nav.querySelector('.list')) {

				const list = Array.prototype.slice.call(nav.querySelector('ul').children);

				list.forEach(item => {

					if (item.nodeName === 'LI') {
						item.classList.add('item', 'list-item');

						/* <= --- _ --- Добавление классов li > ul --- _ --- => */

						if (item.classList.contains('item')) {

							const items = Array.prototype.slice.call(item.children);

							items.forEach(itemList => {

								if (itemList.nodeName === 'UL') {

									itemList.classList.add('dropDown', 'item-dropDown');

									/* <= --- _ --- Добавление классов ul > li --- _ --- => */

									const drop_items = Array.prototype.slice.call(itemList.children);

									drop_items.forEach(drop_item => {

										if (drop_item.nodeName === 'LI') {

											drop_item.classList.add('drop_item', 'dropDown-drop_item');

										}

									});

								}

							});

						}

					}

				});

			}

		}

	}




function resize() {

window.addEventListener('resize', () => {

const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

/* <= --- _ --- Добавление классов тегам при изменение размера экрана на 768px и меньше --- _ --- => */

			if ( viewport_width <= 768 ) {

/* <= --- _ --- Удаление классов с версии Пк и больше 768px --- _ --- => */

			const list = Array.prototype.slice.call(nav.querySelector('ul').children);
			list.forEach( item => {
			if ( item.nodeName === 'LI' ) {
					item.classList.remove('item','list-item');
					const items = Array.prototype.slice.call(item.children);
						items.forEach( itemList => {
							if ( itemList.nodeName === 'UL' ) {
								itemList.classList.remove('dropDown','item-dropDown');
									const drop_items = Array.prototype.slice.call(itemList.children);
										drop_items.forEach( drop_item => {
											if ( drop_item.nodeName === 'LI' ) {
												drop_item.classList.remove('drop_item','dropDown-drop_item');
											}
										});
							}
						});
				}
			});
			nav.querySelector('div').classList.remove('_hide');
			nav.querySelector('ul').classList.remove('list','nav-list');
			nav.classList.remove('nav');

/* <= --- _ --- Добавление классов версии Мобильного и меньше 768px --- _ --- => */

			nav.classList.add('m_nav');

/* <= --- _ --- Добавление классов дочерним элементам nav --- _ --- => */

			if ( nav === document.querySelector('.m_nav') ) {

/* <= --- _ --- Добавление класса nav > ul --- _ --- => */

				nav.querySelector('ul').classList.add('m_list','m_nav-m_list');

/* <= --- _ --- Добавление класса nav > div --- _ --- => */

				nav.querySelector('div').classList.add('_burger');

/* <= --- _ --- Добавление классов ul > li --- _ --- => */

				if ( nav.querySelector('ul') === nav.querySelector('.m_list') ) {

					const m_list = Array.prototype.slice.call(nav.querySelector('ul').children);
					
					m_list.forEach( m_item => {
						
						if ( m_item.nodeName === 'LI' ) {
							m_item.classList.add('m_item','m_list-m_item');

/* <= --- _ --- Добавление классов li > ul --- _ --- => */

							if ( m_item.classList.contains('m_item') ) {

								const m_items = Array.prototype.slice.call(m_item.children);

								m_items.forEach( mItemList => {
									
									if ( mItemList.nodeName === 'UL' ) {
										mItemList.classList.add('m_dropDown','m_item-m_dropDown');

/* <= --- _ --- Добавление классов ul > li --- _ --- => */

										const mDrop_items = Array.prototype.slice.call(mItemList.children);

										mDrop_items.forEach( mDrop_item => {
											
											if ( mDrop_item.nodeName === 'LI' ) {
												mDrop_item.classList.add('m_drop_item','m_dropDown-m_drop_item');
											}

										});

									}

								});

							}

						}

					});

				}

			}

burger();
			} else {

/* <= --- _ --- Добавление классов тегам при изменение размера экрана на 768px и больше --- _ --- => */

/* <= --- _ --- Удаление классов с версии Мобильного и меньше 768px --- _ --- => */

			const m_list = Array.prototype.slice.call(nav.querySelector('ul').children);
				m_list.forEach( m_item => {
					if ( m_item.nodeName === 'LI' ) {
						m_item.classList.remove('m_item','m_list-m_item');
							const m_items = Array.prototype.slice.call(m_item.children);
								m_items.forEach( mItemList => {
									if ( mItemList.nodeName === 'UL' ) {
										mItemList.classList.remove('m_dropDown','m_item-m_dropDown');
										const mDrop_items = Array.prototype.slice.call(mItemList.children);
											mDrop_items.forEach( mDrop_item => {
												if ( mDrop_item.nodeName === 'LI' ) {
													mDrop_item.classList.remove('m_drop_item','m_dropDown-m_drop_item');
												}
											});
									}
								});
					}
				});
			document.body.classList.remove('_lock');
			nav.querySelector('div').classList.remove('_burger','_activB');
			nav.querySelector('ul').classList.remove('m_list','m_nav-m_list','_activ_list');
			nav.classList.remove('m_nav');

/* <= --- _ --- Добавление классов версии Пк и больше 768px --- _ --- => */

			nav.classList.add('nav');

/* <= --- _ --- Добавление классов дочерним элементам nav --- _ --- => */

			if ( nav === document.querySelector('.nav') ) {

/* <= --- _ --- Добавление класса nav > ul --- _ --- => */

				nav.querySelector('ul').classList.add('list','nav-list');

/* <= --- _ --- Добавление класса nav > div --- _ --- => */

				nav.querySelector('div').classList.add('_hide');

/* <= --- _ --- Добавление классов ul > li --- _ --- => */

			if ( nav.querySelector('ul') === nav.querySelector('.list') ) {

				const list = Array.prototype.slice.call(nav.querySelector('ul').children);

				list.forEach( item => {

					if ( item.nodeName === 'LI' ) {
						item.classList.add('item','list-item');

/* <= --- _ --- Добавление классов li > ul --- _ --- => */

					if ( item.classList.contains('item') ) {

					const items = Array.prototype.slice.call(item.children);

						items.forEach( itemList => {

						if ( itemList.nodeName === 'UL' ) {

							itemList.classList.add('dropDown','item-dropDown');

/* <= --- _ --- Добавление классов ul > li --- _ --- => */

							const drop_items = Array.prototype.slice.call(itemList.children);

								drop_items.forEach( drop_item => {
	
									if ( drop_item.nodeName === 'LI' ) {

										drop_item.classList.add('drop_item','dropDown-drop_item');

									}

								});

						}

					});

}

					}

					});

				}

			}

			}

});

}

resize();

}


size();


/* <= --- _ --- Добавление класса тегу div с классом _burger --- _ --- => */

function burger() {

/* <= --- _ --- Получение класса на странице --- _ --- => */

			if ( window.innerWidth <= 768 ) {

				const burgerB = document.querySelector('._burger');

				burgerB.onclick = (e) => {

					const target = e.target;

					if ( target && target.classList.contains('_burger') || target && target.nodeName === 'SPAN') {
						
						nav.querySelector('div').classList.toggle('_activB');
						nav.querySelector('.m_list').classList.toggle('_activ_list');
						document.body.classList.toggle('_lock');

					}

				}

			}

}

burger();

/* <= --- _ --- Табуляция между item --- _ --- => */

function tabs_nav() {




}

tabs_nav();









}




}
}







sample();





});
