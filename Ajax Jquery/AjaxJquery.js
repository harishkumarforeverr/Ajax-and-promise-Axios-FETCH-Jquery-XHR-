// // $("button").click(() => {
// //   alert("working");
// // });

// $("#btn").click(() => {
//   $.ajax({
//     url: "https://baconipsum.com/api/?type=meat-and-filler",
//     method: "GET", // these GET is by default value
//     dataType: "json", // these jsonT is by default value
//   })
//     .done((data) => {
//       console.log(data);
//       $("p").text(data[0]);
//     })
//     .fail((err) => console.log(err));
// });

// const url = "https://api.github.com/users/colt";
// $("#get").click(() => {
//   $.get(url)
//     .done((data) => {
//       console.log(data);
//     })
//     .fail((err) => console.log("err", err));
// });

// ///error , i.e wromng url

// const url = "https://api.github.com/users/coltss";
// $("#get").click(() => {
//   $.get(url)
//     .done((data) => {
//       console.log(data);
//     })
//     .fail((err) => console.log("err", err));
// });

const url = "https://api.github.com/users/colt";
$("#get").click(() => {
  $.get(url)
    .done((data) => {
      console.log(data);
      $("#myp").text("Name :  " + data.name);
    })
    .fail((err) => console.log("err", err));
});

$("#post").click(() => {
  const data = {
    name: "harish",
    age: 2021,
  };
  $.post(url, data)
    .done((data) => {})
    .fail((err) => {
      console.log("err", err);
      $("#myp").text("OWWW Something went wrong");
    });
});

$("#json").click(() => {
  const data = {
    name: "harish",
    age: 2021,
  };
  $.getJSON(url, data)
    .done((data) => {
      $("#myp").text("Company :  " + data.company);
      console.log(data);
    })
    .fail((err) => console.log("err", err));
});
