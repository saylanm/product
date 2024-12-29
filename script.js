document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance;

    const initSwiper = () => {
        if (window.innerWidth <= 768 && !swiperInstance) { // Проверяем, мобильная ли версия
            swiperInstance = new Swiper('.swiper', {
                slidesPerView: 1.2,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else if (window.innerWidth > 768 && swiperInstance) { // Отключаем Swiper на большом экране
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    };



    // Инициализация при загрузке страницы
    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener('resize', initSwiper);
});

var button = document.querySelector('.open');
var button_closed = document.querySelector('.closesd');
var open = document.querySelector('.open');
var content = document.querySelector('.modal');
var img = document.querySelector('.img');

button.addEventListener('click', function(evt) {
    evt.preventDefault();
    content.classList.add('modal-show')
    button.classList.add('modal')
    open.classList.add('modal')
    img.classList.add('modal')
    console.log('отрывается')

})

button_closed.addEventListener('click', function() {
    content.classList.remove('modal-show')
    button.classList.remove('modal')
    open.classList.remove('modal')
    img.classList.remove('modal')
    console.log('закрывается')
})

