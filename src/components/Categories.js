/** @format */

import React from 'react';

const Categories = ({ categories }) => {

     return (
          <div className='categories'>
               < select name='category'>
                    <option value=''>---</option>
                    {categories.map((category, index) => (
                         <option key={index} value={category}>{category}</option>
                    ))}
               </select>
               <button>Reset</button>
          </div>
     )
          
};

export default Categories;
