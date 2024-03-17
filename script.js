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
let isArrowKeyPressed = false; // Zmienna śledząca, czy klawisz strzałki w prawo został już wciśnięty

const fotoScale = (e) => {
	POPUP.classList.remove("hidden");
	POPUP_IMG.src = e.target.src;
	currentImgIndex = Array.from(THUMBNAILS).indexOf(e.target); // Ustawienie currentImgIndex na indeks klikniętej miniatury
};

const fotoClose = (event) => {
	POPUP.classList.add("fade-out");
	if (!POPUP.classList.contains("hidden")) {
		setTimeout(() => {
			POPUP.classList.add("hidden");
			POPUP.classList.remove("fade-out");
			THUMBNAILS.forEach((element) => {
				element.setAttribute("tabindex", 1);
			});
		}, 300);
	}
	if (event) event.stopPropagation();
};

const nextFoto = () => {
	if (!POPUP.classList.contains("hidden")) {
		currentImgIndex = (currentImgIndex + 1) % THUMBNAILS.length; // Zwiększenie indeksu, z uwzględnieniem zawijania
		POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
	}
};

const prevFoto = () => {
	if (!POPUP.classList.contains("hidden")) {
		currentImgIndex =
			(currentImgIndex - 1 + THUMBNAILS.length) % THUMBNAILS.length;
		POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
	}
};

const arrowKey = (e) => {
	if (e.code === "ArrowRight") {
		if (!isArrowKeyPressed) {
			// Sprawdzenie, czy klawisz strzałki w prawo nie był wcześniej wciśnięty
			isArrowKeyPressed = true; // Ustawienie flagi na true
			nextFoto();
		}
	} else if (e.code === "ArrowLeft") {
		if (!isArrowKeyPressed) {
			isArrowKeyPressed = true;
			prevFoto();
		}
	} else if (e.code === "Escape") {
		fotoClose();
	}
};

ARROW_LEFT.addEventListener("click", (event) => {
	event.stopPropagation(); // Zatrzymuje propagację zdarzenia, aby uniknąć wywołania funkcji fotoClose
	prevFoto();
});

ARROW_RIGHT.addEventListener("click", (event) => {
	event.stopPropagation(); // Zatrzymuje propagację zdarzenia, aby uniknąć wywołania funkcji fotoClose
	nextFoto();
});

THUMBNAILS.forEach((thumbnail) => {
	thumbnail.addEventListener("click", fotoScale);
	THUMBNAILS.forEach((element) => {
		element.setAttribute("tabindex", -1);
	});
	thumbnail.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			fotoScale(e);
		}
	});
});

document.addEventListener("keydown", arrowKey);
// Resetowanie flagi, gdy klawisz strzałki w prawo zostanie zwolniony

document.addEventListener("keyup", (e) => {
	if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
		isArrowKeyPressed = false;
	}
});

POPUP.addEventListener("click", fotoClose);
