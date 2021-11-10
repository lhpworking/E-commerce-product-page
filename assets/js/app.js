// menu active
const menuNodeLink = document.querySelectorAll(".header__nav-menu-link");
for (let index = 0; index < menuNodeLink.length; index++) {
  menuNodeLink[index].addEventListener("click", function (e) {
    menuNodeLink.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
}
// active cart block
const cart = document.querySelector(".header__nav-left--cart");
const cartBlock = document.querySelector(".cart__block");
cart.addEventListener("click", function () {
  cartBlock.classList.toggle("active");
});

// slide
const productSlideList = document.querySelectorAll(
  ".product__main-left--slider-slide"
);
// thumbnails
const thumbnailsNodeImg = document.querySelectorAll(
  ".product__main-left-thumbnails--img"
);
for (let index = 0; index < thumbnailsNodeImg.length; index++) {
  thumbnailsNodeImg[index].addEventListener("click", function (e) {
    e.preventDefault();
    thumbnailsNodeImg.forEach((item) => item.classList.remove("active"));
    thumbnailsNodeImg[index].classList.add("active");
    productSlideList.forEach((element) => element.classList.remove("active"));
    productSlideList[index].classList.add("active");
  });
}

// cart function
const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");
const quantityVal = document.querySelector(".quantity-val");
const cartMenu = document.querySelector(".cart__menu");
const cartIndicator = document.querySelector("#cart-indicator");
const cartEmpty = document.querySelector(".empty-cart");
const cartFooter = document.querySelector(".cart__block-footer");
const btnAddCart = document.querySelector("#add-cart");
const itemCount = document.querySelector("#item-count");
const itemPrice = document.querySelector("#item-price");
const total = document.querySelector("#total");
const btnDelete = document.querySelector("#btn-delete");
const btnCheckOut = document.querySelector("#btn-checkout");

var valOfQuantity = 0;

// set quantity of product
btnIncrease.addEventListener("click", function () {
  valOfQuantity += 1;
  quantityVal.value = valOfQuantity;
});
btnDecrease.addEventListener("click", function () {
  if (valOfQuantity == 0) {
    valOfQuantity = 0;
  } else {
    valOfQuantity -= 1;
    quantityVal.value = valOfQuantity;
  }
});

// check status cart
function checkCart() {
  if (cartIndicator.innerHTML == 0) {
    cartEmpty.style.display = "block";
    cartMenu.style.display = "none";
    cartFooter.style.display = "none";
  } else {
    cartEmpty.style.display = "none";
    cartMenu.style.display = "block";
    cartFooter.style.display = "block";
  }
}
checkCart();

// get info product to cart
let currentTotal = parseInt(cartIndicator.innerHTML);
btnAddCart.addEventListener("click", function () {
  if (quantityVal.value == 0) {
    alert("Please set your quantity product");
  } else {
    currentTotal += parseInt(quantityVal.value);
    itemCount.innerHTML = `x ${currentTotal}`;
    total.innerHTML = `$ ${(
      currentTotal * parseInt(itemPrice.innerHTML)
    ).toFixed(2)}`;
    cartIndicator.innerHTML = currentTotal;
    checkCart();
  }
});

// delete product
btnDelete.addEventListener("click", function (e) {
  cartIndicator.innerHTML = 0;
  currentTotal = 0;
  checkCart();
});

// check out function
btnCheckOut.addEventListener("click", function () {
  alert(
    (total.innerHTML = `Total: $ ${(
      currentTotal * parseInt(itemPrice.innerHTML)
    ).toFixed(2)}`)
  );
});

// btn-close menu mobile
const btnCloseMobile = document.querySelector("#btn-close-mobile");
const menuMobile = document.querySelector(".mobile-menu");
const openMenu = document.querySelector("#open-menu");
console.log(openMenu);
console.log(menuMobile);
console.log(btnCloseMobile);
openMenu.addEventListener("click", (e) => {
  menuMobile.classList.toggle("active");
});
btnCloseMobile.addEventListener("click", (e) => {
  menuMobile.classList.remove("active");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == menuMobile) {
    menuMobile.classList.remove("active");
  }
};
