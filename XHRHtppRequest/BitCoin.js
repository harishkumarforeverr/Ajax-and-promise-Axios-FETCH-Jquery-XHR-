let EUR = document.querySelector("#EUR");
let USD = document.querySelector("#USD");
let GBP = document.querySelector("#GPI");
let bitcoin = document.querySelector("#bitcoin");

// to get Random bitcoins Api
/// https://api.coindesk.com/v1/bpi/currentprice.json
let XHR = new XMLHttpRequest();
XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
XHR.send();
XHR.onreadystatechange = () => {
  if (XHR.readyState == 4 && XHR.status == 200) {
    const data = JSON.parse(XHR.responseText);

    const rate = data.bpi.EUR.rate;
    bitcoin.innerHTML = rate + "  EUR";
  }
};

EUR.addEventListener("click", () => {
  HandleTheRequest("EUR");
});
USD.addEventListener("click", () => {
  HandleTheRequest("USD");
});
GBP.addEventListener("click", () => {
  HandleTheRequest("GBP");
});

function HandleTheRequest(txt) {
  let XHR = new XMLHttpRequest();
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      const data = JSON.parse(XHR.responseText);

      const rate = data.bpi[txt].rate;
      bitcoin.innerHTML = rate + " " + txt;
    }
  };
}
