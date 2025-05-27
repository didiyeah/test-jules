import React, { useState } from 'react'; // Removed useEffect as it's not used
import './CartPage.css'; // Import the CSS file

// Dummy cart data for now - in a real app, this would come from context or global state
const initialCartItems = [
  { id: 't1', name: 'Adult Day Pass', price: 50, quantity: 2, productType: 'ticket' },
  { id: 'm1', name: 'Park Mascot Plush Toy', price: 25, quantity: 1, productType: 'merchandise' },
  { id: 't3', name: 'Family Eco-Pass (2A, 2C)', price: 145, quantity: 1, productType: 'ticket' },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedQuantity = Math.max(0, parseInt(newQuantity, 10)); // Ensure quantity is not negative

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: updatedQuantity } : item
      ).filter(item => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const handleProceedToCheckout = () => {
    // Placeholder for checkout logic
    alert('Proceeding to checkout! (Not implemented yet)');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <h1>Shopping Cart</h1>
        <p className="cart-empty-message">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1>Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td data-label="Product" className="product-name">{item.name}</td>
              <td data-label="Price">${item.price.toFixed(2)}</td>
              <td data-label="Quantity">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  min="0"
                />
              </td>
              <td data-label="Total">${calculateItemTotal(item).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h3>Total: ${calculateCartTotal().toFixed(2)}</h3>
        <button onClick={handleProceedToCheckout} className="button button-accent">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
