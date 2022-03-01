const slides = document.querySelectorAll(".promo__slide__item");
const rightBtn = document.querySelector(".promo__slider__btns__right-btn");
const leftBtn = document.querySelector(".promo__slider__btns__left-btn");
const dotsList = document.querySelectorAll(".promo__slider__dots__item");
const dotsArea = document.querySelector(".promo__slider__dots")

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotsList[i].classList.remove("promo__slider__dots__item-active");
  }

  slides[slideIndex - 1].style.display = "block";
  dotsList[slideIndex - 1].classList.add("promo__slider__dots__item-active")
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

rightBtn.onclick = function(evt) {
  evt.preventDefault();
  plusSlides(1);
}

leftBtn.onclick = function(evt) {
  evt.preventDefault();
  plusSlides(-1);
}

for (let i = 0; i < dotsList.length; i++) {
  dotsList[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    slideIndex = i + 1;
    showSlides(slideIndex);
  })
}

