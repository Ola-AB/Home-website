// const burgerBtn = document.querySelector('.burger-btn')
// burgerBtn.addEventListener('click', () => {
//     burgerBtn.classList.toggle('burger-btn--active')
// })


const THUMBNAILS = document.querySelectorAll('.thumbnail img');


const fotoScale = () => {
    console.log("test");
}

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener('click', fotoScale )
})



// THUMBNAILS.addEventListener('click', fotoScale);





