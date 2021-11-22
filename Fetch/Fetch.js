// const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// mdn link : https://developer.mozilla.org/en-US/docs/Web/API/fetch
// fetch(url).then((data) => {
//   console.log(data);
//   console.log(data.status);
// });
// fetch(url)
//   .then((data) => {
//     return data.json(); // .json will give us a new promise and real data
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.bpi.USD.rate);
//   });

// // by default fetch will send get request only
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({
//     name: "haarish",
//     age: "21",
//   }),
// })
//   .then((data) => {
//     return data.json(); // .json will give us a new promise and real data
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.bpi.USD.rate);
//   });

// // github api
// const githuburl = "https://api.github.com/users/colt";

// fetch(githuburl)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const githubwrongurl = "https://api.github.com/users/coltdddd";

// fetch(githubwrongurl)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => { // these catch code run when internet is off
//     console.log(err);
//   });

// const githubwrongurl = "https://api.github.com/users/coltdddd";
// // see response
// fetch(githubwrongurl)
//   .then((data) => {
//     console.log(data.status);
//   })
//   .catch((err) => {
//     // these catch code run when internet is off
//     console.log(err);
//   });

// const githuburl = "https://api.github.com/users/colt";
// // see response
// fetch(githuburl)
//   .then((data) => {
//     console.log(data.status);
//   })
//   .catch((err) => {
//     // these catch code run when internet is off
//     console.log(err);
//   });

// const githubwrongurl = "https://api.github.com/users/coltdddd";
// // see response
// fetch(githubwrongurl)
//   .then((data) => {
//     console.log(data.ok);
//     if (!data.ok) {
//       console.log("there is something wromg with response");
//     }
//     console.log("everything is OK !!");
//   })
//   .catch((err) => {
//     // these catch code run when internet is off
//     console.log(err);
//   });

// const url = "https://api.github.com/users/coltkaka";
// // see response
// fetch(url)
//   .then((data) => {
//     if (!data.ok) {
//       throw Error("ustom errror");
//     }
//     console.log("everything is OK !!");
//   })
//   .catch((err) => {
//     // these catch code run when internet is off
//     console.log(err);
//   });

// const url = "https://api.github.com/users/colt";
// // see response
// fetch(url)
//   .then((data) => {
//     if (!data.ok) {
//       throw Error("ustom errror");
//     }
//     console.log("everything is OK !!");
//   })
//   .catch((err) => {
//     // these catch code run when internet is off
//     console.log(err);
// });

// / random user with img and email id API : https://randomuser.me/api/
