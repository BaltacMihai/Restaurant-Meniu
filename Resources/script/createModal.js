let timeOut;
async function createModala(title, price) {
  let timer = document.getElementById("modal__time");
  let modalTitle = document.getElementById("modal__title");
  let modalPrice = document.getElementById("modal__price");
  let modal = document.getElementById("modal");

  let number = 60;

  modalTitle.innerText = title;
  modalPrice.innerText = price;

  timeOut = setInterval(() => {
    modal.style.display = "flex";
    redeemTheOffert(false);
    number -= 1;
    if (number > 9) timer.innerHTML = "0:" + number;
    else timer.innerHTML = "0:0" + number;
  }, 1000);
  await wait(60000);
  clearTimeout(timeOut);
  modal.style.display = " none";
  redeemTheOffert(true);
}

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function closeModal() {
  let modal = document.getElementById("modal");

  redeemTheOffert(true);
  modal.style.display = " none";
  clearTimeout(timeOut);
}
