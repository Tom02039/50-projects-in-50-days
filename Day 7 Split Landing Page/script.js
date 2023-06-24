const splits = document.querySelectorAll(".split");

splits.forEach((split) => {
  split.addEventListener("mouseover", () => {
    split.classList.add("active");
  });

  split.addEventListener("mouseout", () => {
    split.classList.remove("active");
  });
});
