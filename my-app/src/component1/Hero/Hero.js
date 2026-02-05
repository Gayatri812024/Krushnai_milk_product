import React from "react";
import "./Hero.css";
import hero from "../../assets/hero1.png";
import icon from "../../assets/icon.png";
import logo1 from '../../assets/Jlogo.png';
// import back1 from '../../assets/background1.jpg';
// import back2 from '../../assets/background2.jpeg';
// import back3 from '../../assets/background3.png';


// function Hero({playStetus,heroCount})
function Hero() 
{
      
  // if (heroCount===0){
  //   return <img src={hero} className="background" alt=""/>
  // }
  // else if (heroCount===1){
  //   return <img src={back1} className="background" alt=""/>
  // }
  // else if (heroCount===2){
  //   return <img src={back2} className="background" alt=""/>
  // }
  // else if (heroCount===3){
  //   return <img src={back3} className="background" alt=""/>
  // }
  return (
    <div className="hero" id="home">
      <img src={hero} alt="Hero Background" className="back" />
       <img src={logo1} alt="Jagtap Dairy Logo" className="logo" />
      <div className="hero-text">
        <h1>Dairy Goodness, Delivered Fresh!</h1>
        <p>Experience the taste of purity</p>

        <a href="https://wa.me/+919503630530" target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <img src={icon} alt="WhatsApp Icon" /> Order via WhatsApp
          </button>
        </a>
      </div>

    </div>
  );
}

export default Hero;
