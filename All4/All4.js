var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const xml_btn = document.querySelector("#xml_btn");
const Axios_btn = document.querySelector("#Axios_btn");
const fetch_btn = document.querySelector("#fetch_btn");
const jquery_btn = document.querySelector("#jquery_btn");
const p = document.querySelector("p");

Axios_btn.addEventListener("click", () => {
  axios.get(url).then((res) => {
    p.innerText = res.data[0];
  });
});

fetch_btn.addEventListener("click", () => {
  fetch(url).then((res) => {
    const promise = res.json();
    promise.then((data) => {
      p.innerText = data[0];
    });
  });
});

xml_btn.addEventListener("click", () => {
  var XHR = new XMLHttpRequest();
  XHR.open("GET", url);
  XHR.send();
  XHR.onreadystatechange = () => {
    if (XHR.readyState === 4) {
      if (XHR.status == 200) {
        console.log("data : ", JSON.parse(XHR.responseText)[0]); // here responseText is the data from where we get from server
        p.innerText = JSON.parse(XHR.responseText)[0];
      } else {
        console.log("there i  s a some error ");
      }
    }
  };
});
jquery_btn.addEventListener("click", () => {
  $.getJSON(url).done((data) => {
    console.log(data[0]);
    p.innerText = data[0];
  });
});
