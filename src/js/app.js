import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const price = document.querySelector(".price").textContent;
  let products = document.querySelectorAll(".product");

  products.forEach((element) => element.setAttribute("data-price", price));

  console.log(products);
});
