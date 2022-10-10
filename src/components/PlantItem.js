/** @format */

import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ id, cover, name, water, light, price }) {

     return (
          <div key={id} className='plant-item'>
               <img
                    className='plant-item-cover'
                    src={cover}
                    alt={`${name} cover`}
               />
               <div className='plant-name-price'>
                    <h4>{name}</h4>
                    <p>{price}€</p>
               </div>
               <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
               </div>
          </div>
     );
}

export default PlantItem;
