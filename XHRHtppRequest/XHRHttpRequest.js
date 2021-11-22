var XHR = new XMLHttpRequest();
// github api for getting the randoms tring
///https://api.github.com/zen
XHR.open("GET", "https://api.github.com/zen");
XHR.send();

XHR.onreadystatechange = () => {
  // ready state as 4 stages
  // console.log("Ready State is : ", XHR.readyState);
  if (XHR.readyState === 4) {
    if (XHR.status == 200) {
      console.log("data : ", XHR.responseText); // here responseText is the data from where we get from server
    } else {
      console.log("there i  s a some error ");
    }
  }
};
