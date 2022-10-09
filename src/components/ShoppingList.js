/** @format */

import { plantList } from '../data/plantLise';
import '../styles/ShoppingList.css'

const ShoppingList = () => {
     const categories = plantList.reduce(
          (acc, plant) =>
               acc.includes(plant.category) ? acc : acc.concat(plant.category),
          []
     );

     console.log(categories);
     return (
          <div>
               <ul>
                    {categories.map((category, index) => (
                         <li key={index}>{category}</li>
                    ))}
               </ul>
               <ul className='shopping__plant-list'>
                    {plantList.map(plant => (
                         <li key={plant.id} className='shopping__plant-item'>
                              {plant.name}
                              {plant.isSpecialOffer && (
                                   <div className='shopping__sales'>Soldes</div>
                              )}
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default ShoppingList;
