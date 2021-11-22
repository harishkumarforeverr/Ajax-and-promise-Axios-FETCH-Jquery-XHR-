let username = document.querySelector("h1");
let city = document.querySelector("h2");
let image = document.querySelector("img");
let mail = document.querySelector("h3");
let button = document.querySelector("button");

const url = "https://randomuser.me/api/";
button.addEventListener("click", () => {
  fetch(url)
    .then((data) => {
      if (!data.ok) {
        throw Error("there is A error wih server");
      }
      return data.json();
    })
    .then((data) => {
      username.innerText =
        data.results[0].name.first + " " + data.results[0].name.last;
      city.innerText = data.results[0].location.country;
      image.src = data.results[0].picture.medium;
      mail.innerText = data.results[0].email;
      // console.log(data.results[0].location.country);
      // console.log(data.results[0].picture.medium);
      // console.log(data.results[0].name.first + " " + data.results[0].name.last);
      // console.log(data.results[0].email);
    })
    .catch((err) => console.log("custom error : ", err));
});
