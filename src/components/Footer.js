/** @format */

import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
     const [inputValue, setInputValue] = useState('');

     function handleInput(e) {
          setInputValue(e.target.value);
     }

     function handleBlur() {
          if (!inputValue.includes('@')) {
               alert('Warning! The @ sign is missing π₯²');
          }
     }

     return (
          <footer className='footer'>
               <div className='footer-elem'>ππ΅For plant lovers πΏπ±</div>
               <div className='footer-elem'>Leave us your email :</div>
               <input
                    placeholder='Enter your email'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
               />
          </footer>
     );
}

export default Footer;
