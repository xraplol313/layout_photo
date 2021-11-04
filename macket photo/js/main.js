(function() { // функция чтобы инкапсулировать модуль
    $(document).ready(function () { // функция чтобы запустить код после прогрузки страницы

        $('.slider__bottom').slick({
            arrows: true,
            dots:false,
            fade: true,
            // autoplay: 3000
        });

        $('.slider').slick({ // top main slider
            arrows: false,
            dots:true,
            fade: true,
            // autoplay: 3000
        });

        // открывательный код
        const menuButton = document.querySelector('.menu__opens'); //на что нажать (кнопка меню)
        const menu = document.querySelector('.menu');//кому дать
        const openMenu = function() {
            menu.classList.add('open-menu');//что дать
        }
        menuButton.addEventListener('click', openMenu); // вешаем кликер на кнопку меню на чистом джс

        // закрывательный код
        const closeMenu = document.querySelector('.close-btn');

        const menuClose = function() {
            menu.classList.remove('open-menu');
        };


        closeMenu.addEventListener('click', menuClose);


        window.onscroll = function() { //событие скрола
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolled >= 150) {
                document.getElementById('header').classList.add('header__fix');
            } else {
                document.getElementById('header').classList.remove('header__fix');
            }
        }

        const anchors = document.querySelectorAll('.menu-item-js'); // []

        for (let anchor of anchors) {
            anchor.addEventListener('click', function(event) { // навешиваем кликер на каджую ссылку
                event.preventDefault(); // https://learn.javascript.ru/default-browser-action  СТАНДАРТНЫЕ ДЕЙСТВИ БРАУЗЕРА (НАПРМИЕП ПО ССЫЛККЕ)

                const blockID = anchor.getAttribute('href'); // https://learn.javascript.ru/attributes-and-custom-properties    БЕРЕМ АТРИБУТЫ
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
})();

const elements = document.querySelectorAll('h4')
console.log(elements.length);
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i])
}
elements[i].innerHTML = 'хуй саси';

