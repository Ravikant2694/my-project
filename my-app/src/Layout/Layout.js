// 1.

/*import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="home_text">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/service">Services</Link>
        </li>
        <li >
        <Link to="/testing">Testing</Link>
      </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;*/








// 2.

// import React from 'react'
// import { Outlet, Link } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
// const Layout = () => {
//   return (



//     <>



//     <nav>


//        <ul>

// <div class="container" onclick="myFunction(this)">
//   <div class="bar1"></div>
//   <div class="bar2"></div>
//   <div class="bar3"></div>
// </div>
// <li>
//           <Link to="/">Information</Link>
//       </li>
//         <li> 
//           <Link to="/features">Features</Link>
//         </li>
//         <li>
//           <Link to="/testimonials">Testimonials</Link>
//         </li>
//         <li> 
//         <Link to="/gallery">Gallery</Link>
//         </li>
//         <li >
//         <Link to="/contact">Contact</Link>
//          </li>
//       <div><FaFacebook /></div>
//       <div><FaTwitter /></div>
//       <div><FaInstagramSquare /></div>
//       <div><FaWhatsapp /></div>

//       </ul>


//     </nav>

//     <Outlet />
//      <div class="footer"><p>Footer</p>

// </div>

// </>
//   )
// }

// export default Layout








// 3.

// import { Outlet, Link } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";

// const Layout = () => {
//   return (
//     <>

//         <span id="logo">Advisa.</span>
//         <nav className="header_wrapper">
//           <ul>


//             <li>
//               <Link to="/">Information</Link>
//             </li>
//             <li>
//               <Link to="/features">Features</Link>
//             </li>
//             <li>
//               <Link to="/testimonials">Testimonials</Link>
//             </li>
//             <li>
//               <Link to="/gallery">Gallery</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <div><FaFacebook /></div>
//             <div><FaTwitter /></div>
//             <div><FaInstagramSquare /></div>
//             <div><FaWhatsapp /></div>

//           </ul>
//         </nav>
//       <Outlet />

//       <footer className="footer">
//         <div className="footer-section">
//           <p>Contact Us:</p>
//           <ul>
//             <li>Email: example@example.com</li>
//             <li>Phone: +1234567890</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <p>Follow Us:</p>
//           <ul>
//             <li><a href="https://twitter.com/example">Twitter</a></li>
//             <li><a href="https://facebook.com/example">Facebook</a></li>
//             <li><a href="https://instagram.com/example">Instagram</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <p>&copy; 2024 My Website. All rights reserved.</p>
//         </div>
//       </footer>






//     </>
//   )
// };

// export default Layout;


















//  project-2

//  import { Outlet } from "react-router-dom";
//  import Header from "../Header/Header";
//  import Footer from "../footer/Footer";



//  const Layout = () => {
//    return (
//      <div>
//        <Header />
//        <Outlet />
//        <Footer />
      
//      </div>
//    )
//  };

//  export default Layout;









// import { Outlet, Link } from "react-router-dom";
// import { IoCallOutline } from "react-icons/io5";

// const navs = [
//   { path: '/', name: 'Home' },
//   { path: '/aboutus', name: 'About Us' },
//   { path: '/client', name: 'Client' },
//   { path: '/services', name: 'Services' },
//   { path: '/contactus', name: 'Contact Us' }
// ]

// const Layout = () => {
//   return (
//     <>
//       <div className="nav-parent">
//         <div className="navbar-container">
//           <h1>Advisa.</h1>
//           <div className="nav-links">
//             {navs.map((link, index) => <Link key={index} to={link.path} className="nav-link">{link.name}</Link>)}
//           </div>
//         </div>
//       </div>

//       <Outlet />
//       <div className="container-fluid">
//         <div className="row justify-content-evenly mt-5 mb-0 pt-4 pb-4 bg-dark text-white">
//           <div className="col-md-3">
//             <h5>Advisa.</h5>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est consequatur adipisci amet illum labore dolorum eaque impedit eius. Tenetur?</p>
//           </div>
//           <div className="col-md-3">
//             <h5>Important link</h5>
//             <p><a href="#" className="link-light text-decoration-none">Home</a></p>
//             <p><a href="#" className="link-light text-decoration-none">AboutUs</a></p>
//             <p><a href="#" className="link-light text-decoration-none">Contact Us</a></p>
//             <p><a href="#" className="link-light text-decoration-none">Our Team</a></p>
//             <p><a href="#" className="link-light text-decoration-none">Our Client</a></p>
//           </div>

//           <div className="col-md-3">
//             <h5>ContactUs</h5>
//             <p>1180 Kimberly Way, WILLISTON PARK<br></br>
//               New York - 11596<br></br><IoCallOutline />
//               : 917-772-5081</p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12 bg-secondary text-center text-white">
//             <p className="mt-1">Copyright 1999-2024 by TechGun. All Right Reserved.</p>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// };

// export default Layout;









// #.Layout.js

import { Outlet, Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const navs = [
  { path: '/', name: 'Home' },
  { path: '/aboutus', name: 'About Us' },
  { path: '/client', name: 'Client' },
  { path: '/services', name: 'Services' },
  { path: '/contactus', name: 'Contact Us' }
]

const Layout = () => {
  return (
    <>
      <div className="nav-parent">
        <div className="navbar-container">
          <h1>Advisa.</h1>
          <div className="nav-links">
            {navs.map((link, index) => <Link key={index} to={link.path} className="nav-link">{link.name}</Link>)}
          </div>
        </div>
      </div>

      <Outlet />
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-5 mb-0 pt-4 pb-4 bg-dark text-white">
          <div className="col-md-3">
            <h5>Advisa.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam est consequatur adipisci amet illum labore dolorum eaque impedit eius. Tenetur?</p>
          </div>
          <div className="col-md-3">
            <h5>Important link</h5>
            <p><a href="#" className="link-light text-decoration-none">Home</a></p>
            <p><a href="#" className="link-light text-decoration-none">AboutUs</a></p>
            <p><a href="#" className="link-light text-decoration-none">Contact Us</a></p>
            <p><a href="#" className="link-light text-decoration-none">Our Team</a></p>
            <p><a href="#" className="link-light text-decoration-none">Our Client</a></p>
          </div>

          <div className="col-md-3">
            <h5>ContactUs</h5>
            <p>1180 Kimberly Way, WILLISTON PARK<br></br>
              New York - 11596<br></br><IoCallOutline />
              : 917-772-5081</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 bg-secondary text-center text-white">
            <p className="mt-1">Copyright 1999-2024 by TechGun. All Right Reserved.</p>
          </div>
        </div>

      </div>
    </>
  )
};

export default Layout;











