// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// // import product from './Programs/Product';
// // import logo from '../assets/Jlogo.png';
// import{ Link } from 'react-scroll'
// import menu from '../assets/menu_icon.png'
// // import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// function Navbar() {
//   const [sticky, setSticky] = useState(false);
//   // const Navigate = useNavigate();
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 500);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const[mobileMenu, setmobileMenu]= useState(false)
//   const toggleMenu = ()=>{
//      mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
//   }
//      const Navigate = useNavigate();
//   return (
//     <>
     
//       <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//         <div className='h1-text'><h1>JAGATAP DAIRY</h1></div>
//         {/* <img src={logo} alt="Jagtap Dairy Logo" className="logo1" /> */}
//         <ul className={mobileMenu?'':'hide-mobile-menu'}>
//         <button className='btn-1'onClick={() => Navigate('/')} >Home</button>
//           <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
//           <li><Link to='quality' smooth={true} offset={-160} duration={500}>Quality</Link></li>
//           {/* <li><Link to='/products'>Products</Link></li> */}
//           <button className='productbtn' onClick={() => Navigate('/products')}>Products</button>
//           <li>
//            <Link  to='contact' smooth={true} offset={-230} dusration={500} className="btn" >Contact us</Link>
//           </li>
         
//         </ul>
//         <img src={menu} alt='' className='menu' onClick={toggleMenu}/>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import menu from "../assets/menu_icon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="h1-text">
        <h1>JAGTAP DAIRY</h1>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <button className="btn-1" onClick={() => navigate("/")}>
          Home
        </button>
        <li>
          <ScrollLink to="about" smooth={true} offset={-250} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="quality" smooth={true} offset={-160} duration={500}>
            Quality
          </ScrollLink>
        </li>
        {/* Fixed Products Navigation */}
        <li>
          <RouterLink to="/products">
            <button className="productbtn">Products</button>
          </RouterLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-230}
            duration={500}
            className="btn"
          >
            Contact us
          </ScrollLink>
        </li>
      </ul>
      <img src={menu} alt="Menu" className="menu" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
