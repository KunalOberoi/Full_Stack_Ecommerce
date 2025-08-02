import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  const getCartItemsWithDetails = () => {
    const cartItemsArray = [];
    
    for (const cartKey in cartItems) {
      if (cartItems[cartKey] > 0) {
        const itemId = cartKey.includes('_') ? cartKey.split('_')[0] : cartKey;
        const size = cartKey.includes('_') ? cartKey.split('_')[1] : '';
        const product = products.find((p) => p.id === Number(itemId));
        
        if (product) {
          cartItemsArray.push({
            ...product,
            cartKey,
            size,
            quantity: cartItems[cartKey]
          });
        }
      }
    }
    
    return cartItemsArray;
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {getCartItemsWithDetails().map((item, index) => {
        return (
          <div key={item.cartKey || index}>
            <div className="cartitems-format-main cartitems-format">
              <img 
                className="cartitems-product-icon" 
                src={backend_url + item.image} 
                alt="" 
                onError={(e) => {e.target.src = '/images/placeholder.png'}}
              />
              <p className="cartitems-product-title">{item.name}</p>
              <p className="cartitems-size">{item.size || 'N/A'}</p>
              <p>{currency}{item.new_price}</p>
              <button className="cartitems-quantity">{item.quantity}</button>
              <p>{currency}{item.new_price * item.quantity}</p>
              <img 
                onClick={() => removeFromCart(item.id, item.size)} 
                className="cartitems-remove-icon" 
                src={cross_icon} 
                alt="" 
              />
            </div>
            <hr />
          </div>
        );
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
