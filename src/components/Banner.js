/** @format */
import logo from '../assets/logo.png'
import '../styles/Banner.css';


const Banner = () => {
     return (
          <header className='banner-wrapper'>
               <h1>The jungle house</h1>
               <img src={logo} alt="logo" />
          </header>
     );
};

export default Banner;
