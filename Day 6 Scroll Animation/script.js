const contentHiddens = document.querySelectorAll(".content.hidden");

checkScroll();

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const offsetYFactor = 0.8;
  const triggerHeightToShow = window.innerHeight * offsetYFactor;

  contentHiddens.forEach((contentHidden) => {
    const contentHiddenTop = contentHidden.getBoundingClientRect().top;

    if (contentHiddenTop < triggerHeightToShow) {
      contentHidden.classList.remove("hidden");
    } else {
      contentHidden.classList.add("hidden");
    }
  });
}
