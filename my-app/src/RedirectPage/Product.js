import React, { useState } from 'react';
import './Product.css';
import ghee from '../assets/ghee.png';
import paneer from '../assets/pannerR.png';
import khava from '../assets/khava.png';
import Ghee from "./Ghee";
import Paneer from "./Paneer";
import Khava from "./Koya";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className='text'><h1>Fresh Milk And Milk Product</h1></div>
      
      <div className='programs'>
        {/* Ghee Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("ghee")} >
            <img src={ghee} alt='Ghee' />
          </button>
          <p><b>Ghee</b></p>
        </div>

        {/* Paneer Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("paneer")} >
            <img src={paneer} alt='Paneer' />
          </button>
          <p><b>Paneer</b></p>
        </div>

        {/* Khava Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("khava")} >
            <img src={khava} alt='Khava' />
          </button>
          <p><b>Khava</b></p>
        </div>
      </div>

      {/* Display Selected Component Below */}
      <div className='product-details'>
        {selectedProduct === "ghee" && <Ghee />}
        {selectedProduct === "paneer" && <Paneer />}
        {selectedProduct === "khava" && <Khava />}
      </div>
    </>
  );
}

// import React from 'react';
// import './Product.css';
// import ghee from '../assets/ghee.png';
// import paneer from '../assets/pannerR.png';
// import khava from '../assets/khava.png';
// import { Link } from 'react-scroll';


// export default function Product() {
//   // Function to open a new window and navigate to a specific route
//   // const openNewPage = (route) => {
//   //   window.open(route, "_blank", "noopener,noreferrer");
//   // };
  

//   return (
//     <>
//     <div className='text'><h1>Fresh Milk And Milk Product</h1></div>
//     <div className='programs'>
//       {/* Ghee Section */}
//       <div className='program'>
//        <Link to='products'> <button>
//           <img src={ghee} alt='Ghee' />
//         </button>
//         </Link>
//         <p><b>Ghee</b></p>  
//       </div>

//       {/* Paneer Section */}
//       <div className='program'>
//         <button >
//           <img src={paneer} alt='Paneer' />
//         </button>
//         <p><b>Paneer</b></p>
//       </div>

//       {/* Khava Section */}
//       <div className='program'>
//         <button>
//           <img src={khava} alt='Khava' />
//         </button>
//         <p><b>Khava</b></p>
//       </div>
//     </div>
//     </>
//   );
// }
