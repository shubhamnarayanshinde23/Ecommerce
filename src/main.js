import "./style.css";
import productlist from "./products.json";

const ShopCart = document.querySelector(".cart");
const cartTab = document.querySelector(".cart-tab");
const btnClose = document.querySelector(".close-btn");
const MobileMenuIcon = document.querySelector(".hamburger");
const MobileMenu = document.querySelector(".mobile-menu");
const MobileClose = document.querySelector(".fa-bars");
const Mobilebanner = document.querySelector(".mobile-close-icon");
const ProductContainer = document.querySelector(".product-items");
const cardList = document.querySelector(".scroll-content");
const cartToatal = document.querySelector(".cart-total");
const BagCart = document.querySelector(".cart-value");

ShopCart.addEventListener("click", () => {
  cartTab.classList.add("cart-tab-active");
});

btnClose.addEventListener("click", () => {
  cartTab.classList.remove("cart-tab-active");
});

MobileMenuIcon.addEventListener("click", () => {
  MobileMenu.classList.add("mobile-menu-active");
  MobileMenuIcon.style.display = "none";
  Mobilebanner.style.display = "block";
});

Mobilebanner.addEventListener("click", () => {
  MobileMenu.classList.remove("mobile-menu-active");
  Mobilebanner.style.display = "none";
  MobileMenuIcon.style.display = "block";
});

let ProductArray = [];
let cardProduct = [];

ProductArray = productlist;

// console.log(ProductArray);

const UpdateTotal = () => {
  let TotalPrice = 0;
  let cartInit = 0;
  document.querySelectorAll(".cart-list").forEach((item) => {
    // console.log(item);
    const cartCount = 
      parseInt(item.querySelector(".quantity-count").textContent);
    
    const price = parseFloat(
      item.querySelector(".item-price").textContent.replace("RS.", "")
    );
    TotalPrice += price;
    cartInit += cartCount;
    
  });
  cartToatal.textContent = `Rs. ${TotalPrice}`;
  BagCart.textContent = cartInit;
};

let showData = () => {
  ProductArray.forEach((currProduct) => {
    const ProductItem = document.createElement("div");
    ProductItem.classList.add("products");
    ProductItem.innerHTML = `
<div class="product-img">
  <img src="${currProduct.image}" alt="Product-Img" />
</div>
<div class="product-details">
  <h3>${currProduct.name}</h3>
    <p>${currProduct.price}</p>
    <a href="#" class="add-cart"><span>Add To Cart</span></a>
</div>
`;
    ProductContainer.appendChild(ProductItem);

    let cardbtn = ProductItem.querySelector(".add-cart");

    cardbtn.addEventListener("click", (e) => {
      e.preventDefault();
      AddToCard(currProduct);
    });
  });
};
showData();

const AddToCard = (currProduct) => {
  let existingProduct = cardProduct.find((item) => item.id === currProduct.id);

  if (existingProduct) {
    alert("Product is in the cart!");
    return;
  }

  cardProduct.push(currProduct);
  let quntity = 1;
  let price = parseFloat(currProduct.price.replace("Rs.", ""));

  let cardData = document.createElement("div");
  cardData.classList.add("cart-list");
  cardData.innerHTML = `
  <div class="item-container">
    <img src="${currProduct.image}" alt="image" />
  </div>
  <div class="item-details">
    <h4>${currProduct.name}</h4>
    <span class="item-price">${currProduct.price}</span>
  </div>
  <div class="quantity">
    <i class="fa-solid fa-plus plus"></i>
    <h4 class="quantity-count">${quntity}</h4>
    <i class="fa-solid fa-minus minus-btn"></i>
  </div>
  `;
  cardList.appendChild(cardData);
  UpdateTotal();

  let Incremnt = cardData.querySelector(".plus");
  let Decrement = cardData.querySelector(".minus-btn");
  let qty = cardData.querySelector(".quantity-count");
  let itemTotal = cardData.querySelector(".item-price");

  Incremnt.addEventListener("click", (e) => {
    e.preventDefault();
    quntity++;
    qty.textContent = quntity;
    itemTotal.textContent = `RS. ${(price * quntity).toFixed(2)}`;
    UpdateTotal();
  });

  Decrement.addEventListener("click", (e) => {
    e.preventDefault();
    if (quntity > 1) {
      quntity--;
      qty.textContent = quntity;
      itemTotal.textContent = `Rs. ${price * quntity}`;
      UpdateTotal();
    } else {
      cardData.classList.add("slider");

      setTimeout(() => {
        cardData.remove();
        cardProduct = cardProduct.filter((item) => item.id !== currProduct.id);
        UpdateTotal();
      }, 300);
    }
  });
};

// const AddToCart = document.querySelector(".add-cart");

// AddToCart.addEventListener("click", (e) => {
//   e.preventDefault();
//   // console.log('clicked');
//
// });
