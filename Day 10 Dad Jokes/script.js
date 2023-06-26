const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  joke.innerHTML = data.joke;
}

generateJoke();

btn.addEventListener("click", generateJoke);
