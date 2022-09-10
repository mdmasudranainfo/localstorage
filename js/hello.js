//
//
//
//
//

const addLs = () => {
  const product = document.getElementById("product").value;
  document.getElementById("product").value = "";
  const quntity = document.getElementById("quntity").value;
  document.getElementById("quntity").value = "";
  displayUl(product, quntity);
  saveCart(product, quntity);
};

const displayUl = (product, quntity) => {
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.innerHTML = `${product} : ${quntity}`;
  ul.appendChild(li);
};

const isCart = () => {
  const oldCard = localStorage.getItem("cart");
  let cart = {};
  if (oldCard) {
    const cart = JSON.parse(oldCard);
    return cart;
  }
  return cart;
};

const saveCart = (product, quntity) => {
  const cart = isCart();
  cart[product] = quntity;
  console.log(cart[product]);
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyCart);
};

const displayStorge = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  for (const product in cart) {
    const quntity = cart[product];

    displayUl(product, quntity);
  }
  // console.log(cart);
};
displayStorge();

// cleals
const clearLS = () => {
  localStorage.clear();
};
