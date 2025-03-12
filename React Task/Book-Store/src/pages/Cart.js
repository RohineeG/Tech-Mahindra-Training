import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cart.map((book) => (
            <li
              key={book.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <span>
                {book.title} - ₹{book.price}
              </span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(book.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
