// import React from "react";
// import "./App.css";
// import Navbar from "./component1/Navbar";
// import Footer from "./component1/Footer/Footer";
// // import { Routes, Route } from "react-router-dom";
// // import { BrowserRouter as   Routes, Route } from "react-router-dom";
// // import Ghee from "./RedirectPage/Ghee";
// // import Paneer from "./RedirectPage/Paneer";
// // import Khava from "./RedirectPage/Koya";
// import Home from "../src/RedirectPage/Home";
// // import Product from "./RedirectPage/Product";

// function App() {
//   return (
//     <>
 
//       <Navbar />
//       <Home/>
      
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Product />} />
//         <Route path="/ghee" element={<Ghee />} />
//         <Route path="/paneer" element={<Paneer />} />
//         <Route path="/khava" element={<Khava />} />
//       </Routes> */}
     
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./component1/Navbar";
import Home from "./RedirectPage/Home";
import Products from "./component1/Programs/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
     </>
  );
}

export default App;
