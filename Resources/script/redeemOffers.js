function redeemTheOffert(userIsNearTheRestaurant) {
  if (userIsNearTheRestaurant === true) {
    let redeemButtons = document.getElementsByClassName("offert");

    for (let reedemButton of redeemButtons) {
      reedemButton.style.display = "block";
    }
  } else {
    let redeemButtons = document.getElementsByClassName("offert");

    for (let reedemButton of redeemButtons) {
      reedemButton.style.display = "none";
    }
  }
}
