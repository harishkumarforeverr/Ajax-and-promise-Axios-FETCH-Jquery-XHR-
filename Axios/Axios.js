const url = "https://opentdb.com/api.php?amount=1";
const p = document.querySelector("p");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  axios
    .get(url)
    .then((res) => {
      console.log(res.data.results[0].question);
      p.innerText = res.data.results[0].question;
    })
    .catch((err) => console.log(err));
});
