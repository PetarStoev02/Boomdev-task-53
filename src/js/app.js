import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const product= document.getElementsByClassName('product')
  const price = document.getElementsByClassName('price')

  product.getAttribute("data-price")
  product.setAttribute("data-price" `${price}`)
  
  
});
