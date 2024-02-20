const burgerBtn = document.querySelector('.burger-btn')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--active')
})

const menuSections = document.querySelectorAll('.menu-section');
const MENU_TABS = document.querySelectorAll('.menu-tab');




const showInfo = id => {

    menuSections.forEach(section => section.style.display = 'none')
    MENU_TABS.forEach(tab => tab.classList.remove('menu-tab-active'))

    document.getElementById(id).style.display = 'block';

}

MENU_TABS.addEventListener("click", showInfo);



