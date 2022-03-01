const slidesServices = document.querySelectorAll(".services__slides__item");
const slideBtnServices = document.querySelectorAll(".services__btns__item");
const sercicesContainer = document.querySelector(".services__slider__container")

let slideIndexServices = 1;

showSlideServices(slideIndexServices);

function showSlideServices(n) {
  eventBtnServices()

  for (let i = 0; i < slideBtnServices.length; i++) {
    slideBtnServices[i].classList.remove("services__btns__item-active");
    slidesServices[i].style.display = "none";
  }

  if (n == 3) {
    sercicesContainer.style.background = "img/Layerbg3.png";
    activeBtnServices(3);
  } else if (n == 2) {
    activeBtnServices(2);
  } else {
    activeBtnServices(1);
  }
}

function activeBtnServices(n) {
  slideBtnServices[n - 1].classList.add("services__btns__item-active");
  slidesServices[n - 1].style.display = "block";
}

function eventBtnServices() {
  for (let i = 0; i < slideBtnServices.length; i++) {
    slideBtnServices[i].onclick = function(evt) {
      evt.preventDefault()
      slideIndexServices = i + 1;
      showSlideServices(slideIndexServices)
    }
  }
}