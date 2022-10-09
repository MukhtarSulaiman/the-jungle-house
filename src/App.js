/** @format */
import Cart from './components/Cart';
import Banner from './components/Banner';
import './styles/index.css'
import ShoppingList from './components/ShoppingList';

function App() {
     return (
          <div className='App'>
               <Banner />
               <Cart />
               <ShoppingList />
          </div>
     );
}

export default App;
