window.innerWidth && document.documentElement.clientWidth
  ? Math.min(window.innerWidth, document.documentElement.clientWidth)
  : window.innerWidth ||
    document.documentElement.clientWidth ||
    document.getElementsByTagName("body")[0].clientWidth;

let menuUnits = [
  "Автомобили в наличии",
  "Спецпредложения",
  "Продать авто",
  "Сервис",
  "Контакты",
];
if (window.innerWidth < 899) {
  menuUnits.push(
    "Олимпийский просп., 5, стр. 1, Москва",
    "Проложить маршрут",
    "9:00 - 21:00 (ежедневно)"
  );
}

const menuList = document.querySelector(".menu__list");
const mediumMenuList = document.querySelector(".menu-medium__list");
let menuItems = "";
for (let i = 0; i < menuUnits.length; i++) {
  menuItems += '<li><a href="#!">' + menuUnits[i] + "</a></li>";
}
menuList.innerHTML = menuItems;
mediumMenuList.innerHTML = menuItems;

const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");

function toggleMenu() {
  if (dropdownContent.style.display === "block") {
    burger.style.display = "block";
    close.style.display = "none";
    dropdownContent.style.display = "none";
  } else {
    burger.style.display = "none";
    close.style.display = "block";
    dropdownContent.style.display = "block";
  }
}

dropbtn.addEventListener("click", toggleMenu);
dropdownContent.addEventListener("click", () => {
  burger.style.display = "block";
  close.style.display = "none";
  dropdownContent.style.display = "none";
});
