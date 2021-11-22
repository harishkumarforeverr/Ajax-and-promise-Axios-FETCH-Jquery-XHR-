// const p1 = new Promise((res, rej) => {
//   // res("resolved !!");
//   rej("rejceted");
// });
// p1.then((data) => {
//   console.log(data);
// }).catch((err) => console.log("err", err));

// using setTimeout function

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let data = Math.floor(Math.random() * 10);
//     res(data);
//   }, 4000);
// });
// p1.then((data) => {
//   console.log("resloved with the random int : ", data);
// });

// nested call back in the seTimeout
// count = 1;
// setTimeout(() => {
//   console.log(count);
//   count++;
//   setTimeout(() => {
//     console.log(count);
//     count++;
//     setTimeout(() => {
//       console.log(count);
//       count++;
//     }, 3000);
//   }, 2000);
// }, 1000);

// same above code but in differnt way

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     const data = Math.floor(Math.random() * 10);
//     res(data);
//   }, 300);
// });

// const p2 = p1.then((data) => {
//   debugger;
//   console.log(" 1st promise random no :: ", data);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       debugger;
//       const data1 = Math.floor(Math.random() * 10);
//       console.log(data);
//       debugger;
//       res(data1);
//       debugger;
//     });
//   }, 3000);
// });
// p2.then((data) => {
//   debugger;
//   console.log("2nd promise data", data);
//   debugger;
// });

// new Promise((res, rej) => res(5))
//   .then((data) => data * 2)
//   .then((data) => data + 10)
//   .then((data) => console.log(data));

// let count = 1;
// const consoleMsg = () => {
//   console.log(" count : ", count);
//   count++;
// };

// const runLater = (callback, time) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(consoleMsg());
//     }, time);
//   });
// };

// runLater(consoleMsg, 3000)
//   .then((data) => {
//     console.log("resolved value:::", data);
//     return runLater(consoleMsg, 2000);
//   })
//   .then((data) => {
//     console.log("resolved value:::", data);
//     return runLater(consoleMsg, 4000);
//   })
//   .then((data) => {
//     console.log("resolved value:::", data);
//     console.log("my work is completed");
//   });
