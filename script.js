// const burgerBtn = document.querySelector('.burger-btn')
// burgerBtn.addEventListener('click', () => {
//     burgerBtn.classList.toggle('burger-btn--active')
// })

const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup_close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex = 0;

// const fotoScale = (e) => {
// 	POPUP.classList.remove("hidden");
// 	POPUP_IMG.src = e.target.src;
// };

// const fotoClose = () => {
// 	POPUP.classList.add("hidden");
// };

// THUMBNAILS.forEach((thumbnail, index) => {
// 	thumbnail.addEventListener("click", (e) => {
// 		fotoScale(e);
// 	});
// 	// currentImgIndex = index;
// });

// const nextFoto = () => {
// 	if (currentImgIndex < THUMBNAILS.length - 1) {
// 		currentImgIndex++;
// 	}else {
// 		currentImgIndex = 0;
// 	}
// 		POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
// };

// POPUP.addEventListener("click", fotoClose);
// ARROW_RIGHT.addEventListener("click", nextFoto);

// THUMBNAILS.addEventListener('click', fotoScale);

const fotoScale = (e) => {
	currentImgIndex = Array.from(THUMBNAILS).indexOf(e.target); // Ustawienie currentImgIndex na indeks klikniętej miniatury
	POPUP.classList.remove("hidden");
	POPUP_IMG.src = e.target.src;
};

const fotoClose = () => {
	POPUP.classList.add("hidden");
};

THUMBNAILS.forEach((thumbnail) => {
	thumbnail.addEventListener("click", (e) => {
		fotoScale(e);
	});
});

const nextFoto = () => {
	currentImgIndex = (currentImgIndex + 1) % THUMBNAILS.length; // Zwiększenie indeksu, z uwzględnieniem zawijania
	POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

ARROW_RIGHT.addEventListener("click", (event) => {
	event.stopPropagation(); // Zatrzymuje propagację zdarzenia, aby uniknąć wywołania funkcji fotoClose
	nextFoto();
});
POPUP.addEventListener("click", fotoClose);
