import React from "react";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
function CartPage() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default CartPage;
