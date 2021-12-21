var canvas = document.getElementById("viewport"),
  context = canvas.getContext("2d");

function make_base() {
  base_image = new Image();
  base_image.src = "./Resources/assets/Images/qr-code.png";

  base_image.onload = () => {
    context.drawImage(base_image, 75, 0, 150, 150);
  };
}

make_base();
