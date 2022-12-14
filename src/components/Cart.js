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
                    className='cart__toggle-btn close-btn'>
                    X
               </button>
               <h2>Cart</h2>
               <ul>
                    {cart.map(({name, price, ammount}, index) => {
                         return <li key={index}>{ name } { price }€ x { ammount }</li>
                    })}
               </ul>
               <p>Total : {total}€</p>
               {cart > 0 && (
                    <button onClick={() => setCart(0)}>Clear the cart</button>
               )}
          </div>
     ) : (
          <div className='cart__close-btn'>
               <button
                    onClick={() => setIsCartHidden(true)}
                    className='cart__toggle-btn'>
                    Open the cart
               </button>
          </div>
     );
};

export default Cart;
