function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(analyzeTheLocation);
  } else {
    console.log("doesn't work");
  }
}

function analyzeTheLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  console.log("Your location is:" + latitude + longitude);

  if (latitude == 40 && longitude == -40) {
    redeemTheOffert(true);
  } else {
    redeemTheOffert(false);
    // redeemTheOffert(true);
  }
}
