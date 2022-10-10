/** @format */
import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, setCart }) => {

     
     const [isCartHidden, setIsCartHidden] = React.useState(true);

     const total = cart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.ammount * currentValue.price;
     }, 0)

     return isCartHidden ? (
          <div className='cart-wrapper'>
               <button
                    onClick={() => setIsCartHidden(false)}
                    className='cart-toggle-button'>
                    Close it
               </button>
               <h2>Cart</h2>
               <ul>
                    {cart.map(({name, price, ammount}, index) => {
                         return <li key={index}>{ name } { price }€ X { ammount }</li>
                    })}
               </ul>
               <p>Total : {total}€</p>
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
