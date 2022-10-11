/** @format */

import React from 'react';
import '../styles/Categories.css';

const Categories = ({ categories, handleOnChange, resetCategories }) => {

     return (
          <div className='categories'>
               <select
                    name='category'
                    onChange={(e) => handleOnChange(e.target.value)}
               >
                    <option value=''>---</option>
                    {categories.map((category, index) => (
                         <option key={index} value={category}>
                              {category}
                         </option>
                    ))}
               </select>
               <button onClick={() => resetCategories()}>Reset</button>
          </div>
     );
};

export default Categories;
