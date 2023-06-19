const container = document.querySelector(".container");
const navBtnContainer = document.querySelector(".nav-btn-container");
const navList = document.querySelectorAll(".nav-list");
const SHOW_NAV = "show-nav";

navBtnContainer.addEventListener("click", () => {
  container.classList.toggle(SHOW_NAV);
  navBtnContainer.classList.toggle(SHOW_NAV);
  console.log(navList);
  navList.forEach((list) => {
    list.classList.toggle(SHOW_NAV);
  });
});
