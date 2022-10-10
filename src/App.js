/** @format */

import React from 'react';
import Cart from './components/Cart';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import './styles/App.css';

function App() {

     const [cart, setCart] = React.useState([]);
     // console.log(cart)
     return (
          <div className='App'>
               <Banner />
               <main className='main-layout-inner'>
                    <Cart
                         cart={cart}
                         setCart={setCart}
                    />
                    <ShoppingList
                         cart={cart}
                         setCart={setCart}
                    />
               </main>
               <Footer />
          </div>
     );
}

export default App;
