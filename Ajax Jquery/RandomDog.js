// $("#btn").click(() => {
//   $.ajax({
//     url: "https://dog.ceo/api/breeds/image/random",
//     method: "GET", // these GET is by default value
//     dataType: "json", // these jsonT is by default value
//   })
//     .done((data) => {
//       $("img").attr("src", data.message);
//       // $("p").text(data[0]);
//     })
//     .fail((err) => console.log(err));
// });

//using $.getJson
$("#btn").click(() => {
  $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done((data) => {
      $("img").attr("src", data.message);
    })
    .fail((err) => console.log(err));
});
