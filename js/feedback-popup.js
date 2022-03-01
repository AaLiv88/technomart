feedbackPopup()

function feedbackPopup () {
  const btnFeedback = document.querySelector(".feedback-btn");
  const popupFeedback = document.querySelector(".modal-feedback");
  const closeFeedback = popupFeedback.querySelector(".modal-close");
  const userNameFeedback = popupFeedback.querySelector("[name = user-name]");
  const userEmailFeddback = popupFeedback.querySelector("[name = user-email]");
  const userTxtFeedback = popupFeedback.querySelector("[name = user-txt]");
  const btnSendFeedback = popupFeedback.querySelector(".modal-feedback__btns__btn");

  btnFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
  })


  btnSendFeedback.addEventListener("click", function(evt) {
    if (userNameFeedback.value == 0 ||
      userEmailFeddback.value == 0 ||
      userTxtFeedback.value == 0) {
        evt.preventDefault();

        popupFeedback.classList.remove('modal-error');
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('modal-error');
      }
  })


  closeFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
  })
}
