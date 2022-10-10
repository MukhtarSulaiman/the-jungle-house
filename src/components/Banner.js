/** @format */
import logo from '../assets/logo.png'
import '../styles/Banner.css';


const Banner = () => {
     return (
          <header className='banner-wrapper'>
               <img src={logo} alt='logo' />
               <h1>The jungle house</h1>
          </header>
     );
};

export default Banner;
