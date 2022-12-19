import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, removeFromCart, setCartItems } = useContext(Context);
  let total = 0;
  const cartItemElements = cartItems.map((item, index) => {
    total = 5.99 * (index + 1);
    return (
      <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
    );
  });

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Order placed!");
      setCartItems([]);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:
        {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
