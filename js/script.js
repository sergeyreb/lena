let topBtn = document.getElementById("topBtn");
const offsetY = document.documentElement.clientHeight; // высота viewport

window.onscroll = function() {
    if(document.body.scrollTop > offsetY || document.documentElement.scrollTop > offsetY) {
        topBtn.style.display = "block";        
    } else {
        topBtn.style.display = "none";    
    }
}

function goTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// //Burger-menu
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-icon');
//     const menuList = document.querySelector('.menu-list');

//     //Меню: открытие и закрытие

//     if (menuToggle && menuList) {
//         menuToggle.addEventListener('click', () => {
//             menuList.classList.toggle('active');
//         });
//     }
// });

//:Burger-menu
// Получаем необходимые элементы
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// Обработчик клика по кнопке-гамбургеру
menuIcon.addEventListener('click', () => {
// Переключаем активные классы для кнопки и меню
menuIcon.classList.toggle('active');
menuList.classList.toggle('active');

// Обновляем атрибут aria-expanded для доступности
const isExpanded = menuIcon.classList.contains('active');
menuIcon.setAttribute('aria-expanded', isExpanded);
});

// Закрываем меню при клике вне его области
document.addEventListener('click', (event) => {
const isClickInside = menuIcon.contains(event.target) || 
menuList.contains(event.target);

if (!isClickInside && menuList.classList.contains('active')) {
menuIcon.classList.remove('active');
menuList.classList.remove('active');
menuIcon.setAttribute('aria-expanded', 'false');
}
});