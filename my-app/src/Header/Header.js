// 1.

// import React from 'react'
// import { Link } from 'react-router-dom'
// import About from '../About/About'
// import Contact from '../Contact/Contact'

// const Header = () => {
//     return (
//         <>
//             <div>
//                 <nav>
//                     <ul className=''>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Header









// 2.

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     return (
//         <>
//             <div>
//                 <nav>
//                     <ul className=''>
//                         <li>
//                             <Link to="/">Information</Link>
//                         </li>
//                         <li>
//                             <Link to="/features">Features</Link>
//                         </li>
//                         <li>
//                             <Link to="/testimonials">Testimonials</Link>
//                         </li>
//                         <li>
//                             <Link to="/gallery">Gallery</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Header








// 3.

// // Header.js
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <div className="header">
//       <h1>Header</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;






// Project-1

// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//              <div>
//                  <nav>
//                      <ul>
//                          <li>
//                              <Link to="/information">Information</Link>
//                          </li>
//                          <li>
//                              <Link to="aboutus">AboutUs</Link>
//                          </li>
//                          <li>
//                              <Link to="client">Client</Link>
//                          </li>
//                          <li>
//                          <Link to="service">Services</Link>
//                      </li>
//                      <li>
//                      <Link to="contact">ContactUs</Link>
//                  </li>
//                      </ul>
//                  </nav>
//              </div>
//              </div>
//   )
// }

// export default Header









// project-2

// import React from 'react'
// import { Link } from 'react-router-dom';


// const Header = () => {
//     return (
//         <div>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                              <Link to="/information">Information</Link>
//                         </li>
//                         <li>
//                              <Link to="/features">Features</Link>
//                         </li>
//                         <li>
//                              <Link to="/testimonials">Testimonials</Link>
//                         </li>
//                         <li>
//                              <Link to="/gallery">Gallery</Link>
//                         </li>
//                         <li>
//                              <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>

//     )
// }

// export default Header;









// header design

// import React from 'react'
// import { navs } from '../constants';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div className='nav-parent'>
//        <div className='navbar-container'>
//     <h1>Advisa</h1>
//            <div className='nav-links'>
//     {navs.map((link, index) => <Link key={index} to={link.path} className='nav-link'>{link.name}</Link>)}
//            </div>
//        </div>
//     </div>
//   )
// }

// export default Header;
