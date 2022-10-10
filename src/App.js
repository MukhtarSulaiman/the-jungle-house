/** @format */
import './styles/App.css';
import Cart from './components/Cart';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';

function App() {
     return (
          <div className='App'>
               <Banner />
               <main className='main-layout-inner'>
                    <Cart />
                    <ShoppingList />
               </main>
               <Footer />
          </div>
     );
}

export default App;
