/** @format */
import React from 'react';
import { plantList } from '../data/plantLise';
import Categories from '../components/Categories';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

const ShoppingList = ({ cart, setCart }) => {
     const [plants, setPlants] = React.useState(plantList);

     function handleOnChange(selectedCategory) {
          if (selectedCategory) {
               const filteredPlants = plantList.filter(plant => plant.category === selectedCategory);
               setPlants(filteredPlants);
          } else {
               setPlants(plantList);
          }
     }

     const categories = plantList.reduce(
          (acc, plant) =>
               acc.includes(plant.category) ? acc : acc.concat(plant.category),
          []
     );

     function addToCart(name, price) {
          if (cart.length > 0) {
               const currentPlant = cart.find((item) => item.name === name);
               if (currentPlant) {
                    setCart((prevItems) =>
                         prevItems.map((item) => {
                              return item.name === currentPlant.name
                                   ? { ...item, ammount: item.ammount + 1 }
                                   : { ...item };
                         })
                    );
               } else {
                    setCart([
                         ...cart,
                         { name: name, price: price, ammount: 1 },
                    ]);
               }
          } else {
               setCart([...cart, { name: name, price: price, ammount: 1 }]);
          }
     }

     return (
          <div className='shopping-wrapper'>
               <Categories
                    categories={categories}
                    handleOnChange={handleOnChange}
                    resetCategories={handleOnChange}
               />
               <ul className='shopping__plant-list'>
                    {plants.map(({ id, cover, name, water, light, price }) => (
                         <div key={id}>
                              <PlantItem
                                   cover={cover}
                                   name={name}
                                   water={water}
                                   light={light}
                                   price={price}
                              />
                              <button
                                   onClick={() => addToCart(name, price)}
                                   className='shopping__add-btn'>
                                   Add to cart
                              </button>
                         </div>
                    ))}
               </ul>
          </div>
     );
};

export default ShoppingList;
