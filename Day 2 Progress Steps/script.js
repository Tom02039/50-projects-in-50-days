const ACTIVE = "active";
const btns = document.querySelectorAll(".btn");
const stepArray = document.querySelectorAll(".step");
const stepBarFill = document.querySelector(".step-bar-fill");
let lengthToAdd = 66.6;
let addActiveIndex = 1;

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-prev")) {
      for (let i = stepArray.length - 1; i > 0; i--) {
        if (stepArray[i].classList.contains(ACTIVE)) {
          addActiveIndex = i;
          break;
        }
      }
      stepBarFill.style.width = `${(addActiveIndex - 1) * lengthToAdd}px`;
      stepArray[addActiveIndex].classList.remove(ACTIVE);
    } else {
      for (let i = stepArray.length - 1; i > 0; i--) {
        if (stepArray[i].classList.contains(ACTIVE) == false) {
          addActiveIndex = i;
        }
      }
      stepBarFill.style.width = `${addActiveIndex * lengthToAdd}px`;
      stepArray[addActiveIndex].classList.add(ACTIVE);
    }
  })
);
