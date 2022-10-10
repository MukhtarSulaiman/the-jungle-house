/** @format */
import React from 'react';
import '../styles/Cart.css';

const Cart = () => {

     const monsteraPrice = 8;
     const [cart, setCart] = React.useState(0);
     const [isCartHidden, setIsCartHidden] = React.useState(true);

     function updateCart(cart) {
          setCart(cart);
     }
     return isCartHidden ? (
          <div className='cart-wrapper'>
               <button
                    onClick={() => setIsCartHidden(false)}
                    className='cart-toggle-button'>
                    Close it
               </button>
               <h2>Cart</h2>
               <div>
                    Monstera: {cart}€
                    <button
                         onClick={() => updateCart(cart + 1)}
                         className='cart-add-button'>
                         Add
                    </button>
               </div>
               <p>Total : {monsteraPrice * cart}€</p>
               {cart > 0 && (
                    <button onClick={() => setCart(0)}>Clear the cart</button>
               )}
          </div>
     ) : (
          <div className='cart-closed'>
               <button
                    onClick={() => setIsCartHidden(true)}
                    className='cart-toggle-button'>
                    Open the cart
               </button>
          </div>
     );
};

export default Cart;
