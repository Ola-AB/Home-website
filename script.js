const burgerBtn = document.querySelector('.burger-btn')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--active')
})

const menuSections = document.querySelectorAll('.menu-section');
const tabsMenu = document.querySelectorAll('.menu-tab');




const showInfo = () => {

    tabsMenu.classList.toggle('is-active');

}


tabsMenu.addEventListener("click", showInfo);



