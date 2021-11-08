function filter(currentElement) {
  const allCategories = ["pizza", "pasta", "hamburger", "dessert", "drink"];

  for (category of allCategories) {
    document
      .getElementById(category)
      .classList.remove("submeniu__element--active");

    document.getElementById("food-" + category).style.display = "none";
  }
  document
    .getElementById(currentElement.id)
    .classList.add("submeniu__element--active");
  document.getElementById("food-" + currentElement.id).style.display = "flex";
}
