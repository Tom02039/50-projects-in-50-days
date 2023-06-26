const btnArray = document.querySelectorAll(".btn");

btnArray.forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".audio").forEach((audio) => {
      audio.currentTime = 0;
      if (audio.innerHTML === btn.innerHTML) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  })
);
