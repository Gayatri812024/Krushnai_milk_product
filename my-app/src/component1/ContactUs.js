import React from 'react'
import './ContactUs.css'
import msg_icon from '../assets/msg_icon.png'
import call_icon from '../assets/call_icon.png'
import location_icon from '../assets/location_icon.png'
import email_icon from '../assets/email_icon.png'
function ContactUs() {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a1ac1d68-ef9e-46ec-82f4-d88cb1914e99");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      document.getElementById("contact").addEventListener("submit2", function(event) {
        event.preventDefault();
      let whatsappNumber = "8830977013"; // Replace with your number

      let whatsappURL = `https://api.whatsapp.com/send?phone=${ whatsappNumber}`;
      window.open(whatsappURL, "_blank")
      });
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div>
       <div className='contact' id='contact'>
        <div className='contact-col'>
            <h3>Send us a message  <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out throgh contact form or find our contact information below.
                for any order just fill form
            </p>
            <ul>
                <li><img src={email_icon} alt=''/>jagatapmahesh1221@gmail.com</li>
                <li><img src={call_icon} alt=''/>91+8830977013</li>
                <li> <img src={location_icon} alt=''/>Jagtap Dairy,<br/>shindvane road,<br/>uruli kanchan-412202</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit} id='contact'>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phon' placeholder='Enter your Phone number' required/>
                <label>Address</label>
                <textarea name='address' rows="6" placeholder='Enter your Address' required></textarea>
                <label>Select Product </label>
                <select  name='product' id='product'>
                    <option value='Cow ghee' >Cow Ghee</option>
                    <option value='panner' >Paneer</option>
                    <option value='khoya' >Khoya</option>
                    </select>
                <label>Enter Quntity</label>
                <input type='text' name='quntity' placeholder=' kilo or liter' required/>
                <button type='submit' className='btn3'>Order Now</button>  
                 
                
                
            </form>
            <span>{result}</span>
        </div>
      
    </div>
    </div>
  )
}

export default ContactUs
