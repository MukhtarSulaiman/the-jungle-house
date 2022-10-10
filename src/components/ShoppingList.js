/** @format */

import { plantList } from '../data/plantLise';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css'

const ShoppingList = () => {
     const categories = plantList.reduce(
          (acc, plant) =>
               acc.includes(plant.category) ? acc : acc.concat(plant.category),
          []
     );

     return (
          <div>
               <ul>
                    {categories.map((category, index) => (
                         <li key={index}>{category}</li>
                    ))}
               </ul>
               <ul className='shopping__plant-list'>
                    {plantList.map(({ id, cover, name, water, light }) => (
                         <PlantItem
                              key={id}
                              id={id}
                              cover={cover}
                              name={name}
                              water={water}
                              light={light}
                         />
                    ))}
               </ul>
          </div>
     );
};

export default ShoppingList;
