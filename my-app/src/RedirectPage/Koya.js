import React, { useState } from "react";
import './koya.css'
import paneer1 from '../assets/khoya.png'
import kg from '../assets/khava2.png'
import kg2 from '../assets/mava3.png'
function Paneer() {

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
    <div className="khava-page">
    <div className='khava-product'>
      
      
         <div className="khava-left">
            <img src={paneer1} alt=""/>
          </div>
          <div className="khava-right">
          <h1> Danedar Khava </h1>
            <p>₹260/ 1kg</p> 
            <h3>Description</h3>
            <p> Experience the rich and creamy delight of  Fresh Khoya from Jagatap Dairy,
               crafted from the highest quality milk. Made using traditional techniques, 
               our Khoya preserves its authentic taste and smooth texture, making it a perfect
                addition to your favorite sweets and desserts. Whether you're preparing barfis,
                 gulab jamuns, or other festive treats, 
              These Khoya provides a pure and wholesome ingredient to enhance your recipes.
            </p>
            <h3>Nutrient Information</h3>
            <p>Khoya (mawa) is a rich dairy product made by reducing milk until it thickens into a 
              solid consistency. It is packed with essential nutrients, providing approximately 315-330 kcal per
               100g, along with 12-15g of protein, 25-27g of fat, and 15-18g of carbohydrates. Khoya
                is a great source of calcium,supporting strong bones and teeth, and offers quick energy due to its high-fat content.</p> 
                  <p>Enjoy the pure, fresh, and healthy goodness of Khava from Jagatap Dairy in your daily meals!</p>
          
       
        </div>
        
        </div>
        <div className="Head-P">
        <div className='product-khava'>
          <img src={kg} alt=''/>
          <img src={kg2} alt=''/>
        </div>
        <div className='btnk'>
    <button onClick={togglePopup}   className='btnk1'>Order Now</button>
    <button onClick={togglePopup}  className='btnk2'>Order Now</button>

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

