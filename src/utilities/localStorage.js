const addToCart = (id) => {
  // const quantity = localStorage.getItem(id);
  // if (quantity) {
  //   const newQuantity = parseInt(quantity) + 1;
  //   localStorage.setItem(id, newQuantity);
  // } else {
  //   localStorage.setItem(id, 1);
  // }

  let shoppingCart;

  // get the shoppingCart from localStorage
  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  // add quantity
  const quantity = shoppingCart[id];

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
};

export { addToCart };
