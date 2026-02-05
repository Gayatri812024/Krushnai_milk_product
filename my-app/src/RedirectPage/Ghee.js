
// import React from "react";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './Ghee.css'
import g2 from '../assets/g2.png' 
import g3 from '../assets/200ml.png'
import g4 from '../assets/500ml.png'
import g5 from '../assets/15ltr.png'
import g6 from '../assets/1ltr.png'


export default function Ghee() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //after submit
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
    <div className="ghee-page">
  
      <div className="ghee-product">
    
       <div className="ghee-left">
          <img src={g2} alt=""/>
        </div>
        <div className="ghee-right">
        <h1>Krushnai Cow ghee </h1>
          <p>₹500/ 500ml</p> 
          <h3>Description</h3>
          <p>Krushnai Cow Ghee is made from 100% pure cow milk, packed with rich falvor and a delightful aroma.known for ots superior Quality, it is processed in a 
            hygienic  and safe environment to maintain purity and freshness . Delivered with care, Krushnai Ghee brings the essence
            of traditional goodness to your home.
          </p>
          <h3>Nutrient Information</h3>
          <p>Minimum Guaranted Values (for a serving size of TBSP - 14g): Total Fat: 14g  Vitamin A:60Ug</p>
        
      </div>
      
      </div>
      <div className="Head-P">
      <div className="products-ghee">
       <img src={g3} alt=""/>
       <img src={g4} alt=""/>
       <img src={g6} alt=""/>
       <img src= {g5}alt=""/>
       {/* <img src="" alt=""/> */}
      </div>
      <div className='btnG'>
    <button  onClick={togglePopup} className='btng1'>Order Now</button>
    <button onClick={togglePopup} className='btng2'>Order Now</button>
    <button onClick={togglePopup} className='btng3'>Order Now</button>
    <button  onClick={togglePopup}  className='btng4'>Order Now</button>

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
  );
}

