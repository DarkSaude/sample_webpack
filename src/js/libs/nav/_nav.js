/* < --- --- / Сброс стилей \ --- --- > */

"use strict";

document.addEventListener("DOMContentLoaded", function() {
    
const nav = document.querySelector('nav');

// Если разрешение меньше 768 px

function mobile_size () {

    if ( window.innerWidth <= 768 ) {
        
        nav.querySelector('ul').classList.add('root_nav');

        const root_nav = nav.querySelector('.root_nav');

        root_nav.addEventListener('click', function(e) {

            const target = e.target;

            if ( target.nodeName !== 'SPAN' ) return;

            closeSubMenu(target.nextElementSibling);

            target.classList.add('sub__menu-activ_span');

            target.nextElementSibling.classList.toggle('sub__menu-activ');

        });

        // Закрытие всех под меню

        function closeSubMenu ( current = null ) {
            let parents = [];

            if ( current ) {
                let currentParent = current.parentNode;
                while(currentParent){
                    if ( currentParent.classList.contains('root_nav') ) break;
                    if ( currentParent.nodeName === 'UL' ) parents.push(currentParent);
                    currentParent = currentParent.parentNode;
                }
            }

            const subMenu = document.querySelectorAll('.root_nav ul');
            Array.from(subMenu).forEach( item => {

                if ( item != current && !parents.includes(item)) {

                    item.classList.remove('sub__menu-activ');

                    if ( item.previousElementSibling.nodeName === 'SPAN' ) {
                        item.previousElementSibling.classList.remove('sub__menu-activ_span');
                    }

                }

            });
        }

    }

}

mobile_size();

  });
