import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let price= document.querySelectorAll(".price");
  const product= document.querySelectorAll(".product");  
  product.setAttribute("data-price", `${price}`); 
  
});
