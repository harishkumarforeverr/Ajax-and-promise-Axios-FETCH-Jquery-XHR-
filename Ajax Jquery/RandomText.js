// $("button").click(() => {
//   alert("working");
// });

$("#btn").click(() => {
  $.ajax({
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    method: "GET", // these GET is by default value
    dataType: "json", // these jsonT is by default value
  })
    .done((data) => {
      console.log(data);
      $("p").text(data[0]);
    })
    .fail((err) => console.log(err));
});
