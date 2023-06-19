const panels = document.querySelectorAll(".panel");
const expand = "expand";

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("panel") === false) {
    removeExpandClass();
  }
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeExpandClass();
    panel.classList.add(expand);
  });
});

function removeExpandClass() {
  panels.forEach((panel) => panel.classList.remove(expand));
}
