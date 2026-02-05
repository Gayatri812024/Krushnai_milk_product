import React from 'react'
import './About.css'
import certificate from './../assets/certificate2.jpg'
import image1 from '../assets/image1.png'

const About = () => {
  return (
    <>
    <div className='H2-line'>
      <h3>Quality</h3>
      </div>
    <div className='about' id='quality'>
     
     <div className='about-left'  >
      <img src={certificate} alt='' className='about-img'/>
      <div className='H-line'>
      
      <h1>Food Safety And Standards Authority of India Certificate</h1></div>
     </div>
     <div className='about-Right' >
     
      <h2>Certified Purity,Trusted Quality</h2>
      <p>
      Jagtap Dairy Milk Product is a trusted name in the dairy industry, delivering high-quality and fresh milk products. 
      We are registered under FSSAI, ensuring compliance with food safety standards.</p>
      <p> Our dairy unit specializes in milk processing and chilling to maintain purity and freshness. 
       Located in Pune, Maharashtra, we source milk from healthy and well-nurtured cattle.
       We prioritize hygiene, quality control, and customer satisfaction. Our products are rich in nutrients
         and free from harmful additives.</p> 
         <p> We aim to provide farm-fresh dairy solutions to households and businesses.Transparency and ethical practices are
         at the core of our operations.We believe in innovation to enhance dairy production efficiency. </p> 
         <p>Choose Jagtap Dairy Milk Product for purity, taste, and quality you can trust!</p>
     
      
    
   
     </div>
  
    </div>
    <div className='about2'>
    
    <div className='about-left2'  >

    <h2>Not Just Dairy, But Quality You Can Trust</h2>
      <p>We are committed to delivering premium dairy products, including Ghee, Paneer, and Khoya, made with the finest ingredients.

Our brand is built on purity, trust, and innovation, ensuring every product meets the highest industry standards.</p> <p>At Jagtap Dairy Milk Product, we take extra steps to ensure our dairy items maintain their authentic taste and rich texture, making them a favorite in households and businesses alike.

We follow a strict quality control process, where our dairy products are tested using advanced equipment before reaching the market. Our products are also branded and trademarked, ensuring their uniqueness and superior quality.

Our commitment to hygiene, freshness, and excellence makes us a trusted name in the dairy industry. From sourcing fresh milk to crafting nutrient-rich dairy delights, we ensure every step reflects our dedication to quality.</p>

<p>Experience the richness of tradition with Jagtap Dairy Milk Product – Where Purity Meets Perfection!</p>
      </div>
      <div className='about-right2'  >
    <img src={image1} alt='' className='about-img2'/>
    </div>
      </div>
    </>
  )
}

export default About
