const getJokes = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const myJoke = document.getElementById("my_joke");
      myJoke.innerHTML = data.value;
    })
    .catch((error) => console.error("Error:", error));
};

window.addEventListener("load", () => {
  getJokes();
});
