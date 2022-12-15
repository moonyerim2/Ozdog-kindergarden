const popup = document.querySelector("#popup");
const popupClose = document.querySelector(".popup_close");

popupClose.addEventListener("click", (e) => {
  popup.style.display = "none";
});
