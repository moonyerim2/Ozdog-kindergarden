const popup = document.querySelector("#popup");
const expireDate = "popup_expiration_date";

const handlePopupNotOnday = {
  setExpireDate: function (name, exp) {
    let date = new Date();
    date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    localStorage.setItem(name, date);
  },

  compareExpireDate: function (name) {
    let now = new Date();
    now = now.setTime(now.getTime());
    return parseInt(localStorage.getItem(name)) > now;
  },
};

if (!handlePopupNotOnday.compareExpireDate(expireDate)) {
  popup.style.display = "block";
}

popup.addEventListener("click", ({ target }) => {
  if (target.classList.contains("popup_not_oneday")) {
    handlePopupNotOnday.setExpireDate(expireDate, 1);
  }

  popup.style.display = "none";
});
