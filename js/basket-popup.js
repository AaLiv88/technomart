
const popupBasket = document.querySelector(".modal-basket");
const productBtns = document.querySelectorAll(".product-item__btns__buy");
const closeBasket = popupBasket.querySelector(".modal-close");
const basket = document.querySelector(".nav-top__basket");

let basketValue = 0;


for (let i = 0; i < productBtns.length; i++) {
    productBtns[i].addEventListener("click", function(evt) {
      openModalBasket(evt);
      addBasket();
  })
}


function openModalBasket(evt) {
    evt.preventDefault();
    popupBasket.classList.add("modal-show");
}

function addBasket() {
    basketValue += 1;
    basket.textContent = `Корзина: ${basketValue}`;

    if (basketValue >= 1) {
      basket.classList.add("nav-top__basket__active");
    }
}


closeBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
})


