// // import React from 'react';
// // import './Product.css';
// // import ghee from '../../assets/ghee.png';
// // import paneer from '../../assets/pannerR.png';
// // import khava from '../../assets/khava.png';
// // import { Link } from 'react-router-dom';
// // import Ghee from "../../RedirectPage/Ghee";
// // import PaneerPage from "../../RedirectPage/Paneer";
// // import KhavaPage from "../../RedirectPage/Koya";
// // import { Routes, Route } from "react-router-dom";

// // export default function Product() {
// //   const handleRedirect = (path) => {
// //     // window.open(path, "_blank"); // Opens the page in a new tab
// //     window.location.href=path;
// //     // If you want to open in the same tab, use: window.location.href = path;
// //   };
  

// //   return (
// //     <>
// //     <Routes>
// //       <Route path="/ghee" element={<Ghee />} />
// //       <Route path="/paneer" element={<PaneerPage />} />
// //       <Route path="/khava" element={<KhavaPage />} />
// //       {/* <Route path="*" element={<NotFound />} /> Handles invalid routes */}
// //     </Routes>
    
// //     <div className='programs'>
      
// //       {/* Ghee Section */}
// //       <div className='program'>
// //         <Link to="/ghee"><button onClick={() => handleRedirect("/ghee")} aria-label="Go to Ghee Page">
// //           <img src={ghee} alt='Ghee' />
// //         </button>  </Link>
// //         <p> <b>Ghee</b></p>
// //       </div>

// //       {/* Paneer Section */}
// //       <div className='program'>
// //         <button onClick={() => handleRedirect("/paneer")} aria-label="Go to Paneer Page">
// //           <img src={paneer} alt='Paneer' />
// //         </button>
// //         <p> <b>Paneer</b></p>
// //       </div>

// //       {/* Khava Section */}
// //       <div className='program'>
// //         <button onClick={() => handleRedirect("/khava")} aria-label="Go to Khava Page">
// //           <img src={khava} alt='Khava' />
// //         </button>
// //         <p> <b>Khava</b></p>
// //       </div>

// //     </div>
// //     </>
// //   );
// // }

// import React from 'react';
// import './Product.css';
// import ghee from '../../assets/ghee.png';
// import paneer from '../../assets/pannerR.png';
// import khava from '../../assets/khava.png';
// import { Link } from 'react-scroll';


// export default function Product() {
//   // Function to open a new window and navigate to a specific route
//   // const openNewPage = (route) => {
//   //   window.open(route, "_blank", "noopener,noreferrer");
//   // };
  

//   return (
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
//   );
// }

// import React from "react";
// import "./Product.css";
// import ghee from "../../assets/ghee.png";
// import paneer from "../../assets/pannerR.png";
// import khava from "../../assets/khava.png";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

// export default function Product() {
//   const navigate = useNavigate(); // ✅ Initialize navigate function

//   return (
//     <div className="programs">
//       {/* Ghee Section */}
//       <div className="program">
//         <button onClick={() => navigate("/ghee")}> {/* ✅ Navigate to Ghee Page */}
//           <img src={ghee} alt="Ghee" />
//         </button>
//         <p><b>Ghee</b></p>
//       </div>

//       {/* Paneer Section */}
//       <div className="program">
//         <button onClick={() => navigate("/paneer")}> {/* ✅ Navigate to Paneer Page */}
//           <img src={paneer} alt="Paneer" />
//         </button>
//         <p><b>Paneer</b></p>
//       </div>

//       {/* Khava Section */}
//       <div className="program">
//         <button onClick={() => navigate("/khava")}> {/* ✅ Navigate to Khava Page */}
//           <img src={khava} alt="Khava" />
//         </button>
//         <p><b>Khava</b></p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './Product.css';
import ghee from '../../assets/ghee.png';
import paneer from '../../assets/pannerR.png';
import khava from '../../assets/khava.png';
import Ghee from "../../RedirectPage/Ghee";
import Paneer from "../../RedirectPage/Paneer";
import Khava from "../../RedirectPage/Koya";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className='text'><h1>Fresh Milk And Milk Product</h1></div>
      
      <div className='programs'>
        {/* Ghee Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("ghee")} aria-label="Go to Ghee Page">
            <img src={ghee} alt='Ghee' />
          </button>
          <p><b>Ghee</b></p>
        </div>

        {/* Paneer Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("paneer")} aria-label="Go to Paneer Page">
            <img src={paneer} alt='Paneer' />
          </button>
          <p><b>Paneer</b></p>
        </div>

        {/* Khava Section */}
        <div className='program'>
          <button onClick={() => setSelectedProduct("khava")} aria-label="Go to Khava Page">
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
