import React, { useState } from "react";
import './GheeP.css'
import ghee1 from '../assets/1 litre2.png'
import ghee2 from '../assets/1 litre3.png'
import ghee3 from '../assets/1 litre4.png'

function GheeP() {

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
<div className='Head-P'>
    <div className='head'>
    <h1>Exclusive Ghee Combos</h1>
    <h3> More Value, More Purity</h3>
   
    </div>
    <div className='section'>
    <div className='ghee-sell'>
       <img src={ghee1} alt=''/>
       <img src={ghee2} alt=''/>
       <img src={ghee3} alt=''/>
       
    </div>
    </div>
    <div className='btnH'>
    <button  onClick={togglePopup}  className='btn2'>Order Now</button>
    <button   onClick={togglePopup} className='btn3'>Order Now</button>
    <button  onClick={togglePopup}  className='btn4'>Order Now</button>
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
   
  )
}

export default GheeP
