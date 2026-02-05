// import React from 'react'
import React, { useState } from "react";
import './Paneer.css'
import paneer1 from '../assets/paneer1.png'
import kg from '../assets/1kgpanner.png'
import kg2 from '../assets/500gram.png'
function Paneer() {

  const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

      const [formData, setFormData] = useState({ name: "", address: "", pincode: "", number: "", product: "", quantity: ""});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, address,pincode, number, product, quantity } = formData;
        const whatsappNumber = "+91 95036 30530"; // Replace with your WhatsApp number
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Name: ${encodeURIComponent(
          name
        )}%0AAddress: ${encodeURIComponent(address)}%0APincode: ${encodeURIComponent(pincode)}%0AContact no: ${encodeURIComponent(number)}%0AProduct: ${encodeURIComponent(product)}
        %0AQuantity: ${encodeURIComponent(quantity)}`;
        window.open(whatsappURL, "_blank");
      };
    
  return (
    <>
    <div className="paneer-page">
    <div className='paneer-product'>
      
      
         <div className="paneer-left">
            <img src={paneer1} alt=""/>
          </div>
          <div className="paneer-right">
          <h1> Fresh Milk Paneer </h1>
            <p>₹260/ 1kg</p> 
            <h3>Description</h3>
            <p> Fresh Paneer, from Jagtap Dairy Milk Product, is made from 100% pure cow milk, 
              ensuring rich taste, softness, and high nutritional value. It is a perfect protein source
               for a healthy lifestyle and is free from preservatives and additives.
            </p>
            <h3>Nutrient Information</h3>
            <p>Paneer is rich in protein (18g) and calcium (200mg). It provides 265 kcal per 100g, with 20g of total fat, 
                including 12g of saturated fat for healthy energy. With just 2g of carbohydrates
                 and zero sugar. It contains 60mg of cholesterol
                  and 30mg of sodium, making it a nutritious choice.</p> 
                  <p>Enjoy the pure, fresh, and healthy goodness of Paneer from Jagatap Dairy in your daily meals!</p>
          
       
        </div>
        
        </div>
        <div className="Head-P">
        <div className='product-panner'>
          <img src={kg} alt=''/>
          <img src={kg2} alt=''/>
        </div>
        <div  onClick={togglePopup}  className='btnG'>
    <button onClick={togglePopup}  className='btnp1'>Order Now</button>
    <button onClick={togglePopup}  className='btnp2'>Order Now</button>
    {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2 className="popup-title">Delivery Details</h2>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name"  placeholder="Enter your name" value={formData.name} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" name="pincode" placeholder="Enter the pincode of your city" value={formData.pincode} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" name="number" placeholder="Enter your phone number" value={formData.number} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Product</label>
                <input type="text" name="product" placeholder="Enter Product you want" value={formData.product} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="text" name="quantity" placeholder="Enter Quantity"value={formData.quantity} onChange={handleChange} required />
              </div>
              <div className="button-group">
                <button type="submit" name="submit" className="submit-button">
                  Submit
                </button>
                <button type="button" onClick={togglePopup} className="close-button">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
        </div>
  </div>
        </>
  )
}

export default Paneer

