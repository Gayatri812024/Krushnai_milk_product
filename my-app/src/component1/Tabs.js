import React from "react";
import './Tab1.css';
// import "./App.css";
// import "./assets/ghee1.png"
// import image from '../assets/logo.jpg'

function Card({ title, text, image }) {
  return (

    <div className="card" id="about">
      <div className="image-container">
        <img src={image} alt={title} className="circle-image" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p> 
    </div>
  
   
  );
}

function App() {
  const cardContent = [
    {
     
      image: "https://static.vecteezy.com/system/resources/thumbnails/009/764/612/small/natural-pure-milk-icon-isolated-contour-symbol-illustration-vector.jpg", // Replace with a real image URL
      title: "Nature’s Purity",
      text: "Our products are made from fresh, pure milk with no added preservatives or chemicals, ensuring natural taste and health benefits.",

      
    },
    {
      title: "Quality Locked",
      text: "Every batch of ghee, paneer, and khoya undergoes rigorous quality checks to ensure superior taste, texture, and nutritional value before it reaches you.",
      image: "https://www.shutterstock.com/image-vector/milk-quality-control-linear-icon-260nw-2389377459.jpg" // Replace with a real image URL
    },
    {
      title: "NutriRich Dairy Delight",
      text: "Packed with essential nutrients, our ghee, paneer, and khoya are perfect for daily consumption, supporting a healthy lifestyle while enhancing the flavors of your favorite dishes.",
      image:"https://t3.ftcdn.net/jpg/00/50/25/90/360_F_50259016_7IJd9SpaGRnXcO1JkBo0ZWU7j8wvyJrw.jpg"
    },
    {
        title: "Built on Trust",
        text: "With a commitment to quality and customer satisfaction, we have become a trusted name in dairy products, loved by households and businesses",
        image: "https://cdn-icons-png.flaticon.com/512/8148/8148456.png" // Replace with a real image URL
      }
  ];
  


  return (
    <>
    <div className="headline">
        <h1>About </h1>
        <h2><b>Pure, Tested, and Trusted – Dairy Excellence in Every Bite!</b></h2>
    </div>
    <div className="cards-container">
      {cardContent.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} image={card.image} />
      ))}
    </div>
   </>
    
  );
}

export default App;
