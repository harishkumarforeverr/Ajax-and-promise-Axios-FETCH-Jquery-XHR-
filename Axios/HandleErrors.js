const url = " https://jsonplaceholder.typicode.com/comments";
const p = document.querySelector("p");
const btn = document.querySelector("#btn");
const div = document.querySelector("div");
btn.addEventListener("click", () => {
  axios
    .get(url, {
      params: { postId: Math.floor(Math.random() * 10) },
    })
    .then((res) => {
      // console.log(res.data[1].email);
      p.innerText = "";
      res.data.map((obj) => {
        console.log(obj.email);
        var newP = document.createElement("p");
        newP.innerText = obj.email;
        div.appendChild(newP);
      });
    })
    .catch(handleErrors);
});
function handleErrors(err) {
  if (err.response) {
    // code run when server doesnt have reuest file or url
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    // these will run when the url is itself wrong
    console.log("Problem With Request!");
  } else {
    console.log("Error", err.message);
  }
}
