// import { useState }from 'react'
import React from 'react';
import Hero from '../component1/Hero/Hero';
import './Home.css'
// import Product from '../component1/Programs/Product';
import Card from '../component1/Tabs'
import About from '../component1/About'
import GheeP from '../component1/GheeP';
import ContactUs from '../component1/ContactUs';
const Home = () => {

    // let heroData = [
    //   {text:"",text2:""},
    //   {text:"",text2:""},
    //   {text:"",text2:""},
    //   {text:"",text2:""},
    // ]
    // const [heroCount,setHeroCount]= useState(2);
    // const [playStetus,setPlayStatus]= useState(false)
  return (
    <div className='home'><Hero/>

      {/* <Hero playStetus={playStetus} heroCount={heroCount}/> */}
 {/* <div className='text'><h1>Fresh Milk And Milk Product</h1></div>
  */}
 <div className='container'>

 {/* <Product /> */}
 </div>
 <GheeP/>
 <About/>
 <Card/>
 <div className='text2'>
 <p>CONTACT US</p>
 <h2>Get in to Touch</h2>
 </div>
 <ContactUs/>
    </div>
  )
}

export default Home
