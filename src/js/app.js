import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // const price = document.querySelector(".price").textContent;
  
  // console.log(price)
  
  // let products = document.querySelectorAll(".product");

  // products.forEach((element) => element.setAttribute("data-price", price));

  // console.log(products[0]);

  const productList = document.getElementsByClassName('card product');
      const product = productList[0];
      const priceList = document.getElementsByClassName('subtitle is-6 price');
      const priceElement = priceList[0];
      const price = priceElement.getInnerHTML();
      product.setAttribute('data-price', price);
});
