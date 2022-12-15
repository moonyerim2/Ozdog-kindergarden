const popup = document.querySelector("#popup");

const handlePopupNotOnday = {
  setExpireDate: function (name, exp) {
    let date = new Date();
    date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    localStorage.setItem(name, date);
  },

  getExpireDate: function (name) {
    let now = new Date();
    now = now.setTime(now.getTime());
    return parseInt(localStorage.getItem(name)) > now;
  },
};

popup.addEventListener("click", ({ target }) => {
  if (target.classList.contains("popup_not_oneday")) {
    handlePopupNotOnday.setExpireDate("popup_expiration_date", 1);
  }

  popup.style.display = "none";
});
