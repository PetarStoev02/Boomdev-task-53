import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const price = document.querySelector(".price").textContent;
  // console.log(price);
  let products = document.querySelector(".product");
  

   
  products.setAttribute("data-price", price);
  // console.log(products);

  
});
