// Cart.js
import React, { useContext, useState } from 'react';
import { MedicineContext } from './MedicineContext';
import './Cart.css'; // Import CSS file for cart styling

function Cart() {
  const { cartItems, addToCart } = useContext(MedicineContext);
  const [showCart, setShowCart] = useState(false);

  const handleOrder = () => {
    // Add logic to handle the order
    console.log("Order placed:", cartItems);
    // Clear the cart after placing the order
    addToCart([]);
    setShowCart(false);
  };

  return (
    <div className="cart-container">
      <button onClick={() => setShowCart(!showCart)} className="cart-button">Cart ({cartItems.length})</button>
      {showCart && (
        <div className="cart-dialog">
          <div className="cart-content">
            <span className="close" onClick={() => setShowCart(false)}>&times;</span>
            <h3>Cart</h3>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.medicineName} - {item.description}, Price: ${item.price}, Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={handleOrder}>Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
