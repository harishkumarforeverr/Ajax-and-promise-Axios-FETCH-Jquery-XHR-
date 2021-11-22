let btn = document.querySelector(".btn");
let imgDog = document.querySelector(".imgDog");

// to get Random Images Api
// https://dog.ceo/api/breeds/image/random
btn.addEventListener("click", () => {
  let XHR = new XMLHttpRequest();
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
  XHR.onreadystatechange = () => {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const data = JSON.parse(XHR.responseText).message;
      imgDog.src = data;
    }
  };
});
