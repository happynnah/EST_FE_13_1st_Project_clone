const popup = document.querySelector("#popup");
const popupCloseBtn = popup.querySelector("button");
const agree = document.querySelector("#agree");

popup.style.display = document.cookie.includes("popup=안 보기")
  ? "none"
  : "block";

popupCloseBtn.addEventListener("click", () => {
  popup.style.display = "none";
  if (agree.checked) {
    createCookie("popup", "안 보기", 1);
  } else {
    createCookie("popup", "안 보기", -1);
  }
});

function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name}=${value}; Expires=${today.toString()}`;
}
