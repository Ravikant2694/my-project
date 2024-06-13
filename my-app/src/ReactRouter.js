// Project-1

// #.App.js

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './Layout/Layout'
// import Home from './Component/Home'
// import AboutUs from './Component/AboutUs'
// import Client from './Component/Client'
// import Services from './Component/Services'
// import ContactUs from './Component/ContactUs'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="aboutus" element={<AboutUs />} />
//         <Route path="services" element={<Services />} />
//         <Route path="client" element={<Client />} />
//         <Route path="contactus" element={<ContactUs />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
//   )
// }

// export default App









// #.Layout.js

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









// #.AboutUs.js

// // tagline

// import React from 'react'
// import { BsFileCodeFill } from "react-icons/bs";
// import { BsFillEaselFill } from "react-icons/bs";
// import { BsCalendar3RangeFill } from "react-icons/bs";

// const AboutUs = () => {
//   return (
//     <div className='container-fluid'>
//     <div className='row'>
//     <div className='col-12'>
//     <h3 className='display-6 text-center mt-5 mb-3'>Lorem ipsum dolor, sit amet consectetur adipiscing elit.<br></br> Aliquid assumenda lusto cupiditate.</h3>
//     </div>
//     </div>

  

//     <div className='row justify-content-evenly text-center'>
//     <div className='col-md-3'>
//     <h1 className='text-danger'><BsFileCodeFill /></h1>
//     <h5>Built for developers</h5>
//     <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
//     </div>

//     <div className='col-md-3'>
//     <h1 className='text-primary'><BsFillEaselFill /></h1>
//     <h5>Built for developers</h5>
//     <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
//     </div>

//     <div className='col-md-3'>
//     <h1 className='text-success'><BsCalendar3RangeFill /></h1>
//     <h5>Built for developers</h5>
//     <p>Landkit is built to make your life easier. Variable,<br></br> build tooling. documentation, and reusable<br></br> componets.</p>
//     </div>
   
//     </div>






//     </div>
// )
// }

// export default AboutUs;









// #.Client.js

// import React from 'react'
// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { IoCallOutline } from "react-icons/io5";


// const Client = () => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [data, setData] = useState({ name: '', email: '', message: '' })

//   const onSubmit = () => {
//     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     const isMatched = email.match(mailformat)
//     if (!name) {
//       alert('Name is required')
//     } else if (!email) {
//       alert('Email is required')
//     } else if (!isMatched) {
//       alert('Please enter a valid email')
//     } else {
//       setData({ name: name, email, message })
//       alert("Form submitted successfully!")
//     }
//   }

//   return (
//     <div className='container-fluid'>
//       <div className='row justify-content-evenly'  >
//         <div className='col-md-5'>
//           <h1 className='mt-5 mb-5'>Contact form</h1>
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//               <Form.Label>Massage {"(optional)"}</Form.Label>
//               <Form.Control as="textarea" placeholder="Enter massage" onChange={(e) => setMessage(e.target.value)} value={message} />
//             </Form.Group></Form>
//           <button type='button' onClick={onSubmit} >Submit</button>
//         </div>

//         <div className='col-md-5'>
//           <h1 className='mt-5 mb-5'>Address</h1>
//           <h5>1180 Kimberly Way, WILLISTON PARK<br></br>
//             New York - 11596<br></br><IoCallOutline />
//             : 917-772-5081</h5>
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Client;









// #.ContactUs.js

// import React from 'react'
// import Accordion from 'react-bootstrap/Accordion';

// const ContactUs = () => {
//   return (
//     <div className='container-fluid'>
//     <div className='row justify-content-evenly'>
//     <div className='col-md-10'>
//     <h1 className='text-center mt-5 mb-5'>FAQ</h1>
//     <Accordion defaultActiveKey="0">
//     <Accordion.Item eventKey="0">
//       <Accordion.Header>Accordion Item #1</Accordion.Header>
//       <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat. Duis aute irure dolor in
//       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//       culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat.
      
//     </Accordion.Body>
//   </Accordion.Item>
//   <Accordion.Item eventKey="1">
//     <Accordion.Header>Accordion Item #2</Accordion.Header>
//     <Accordion.Body>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat. Duis aute irure dolor in
//       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//       culpa qui officia deserunt mollit anim id est laborum.
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//       aliquip ex ea commodo consequat.
//     </Accordion.Body>
//   </Accordion.Item>

//   <Accordion.Item eventKey="2">
//   <Accordion.Header>Accordion Item #3</Accordion.Header>
//   <Accordion.Body>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//     aliquip ex ea commodo consequat. Duis aute irure dolor in
//     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//     culpa qui officia deserunt mollit anim id est laborum.
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//     aliquip ex ea commodo consequat.
//   </Accordion.Body>
// </Accordion.Item>

// </Accordion>
    
//     </div>
    
    
//     </div>
//     </div>
//   )
// }

// export default ContactUs









// #.Home.js

// import Carousel from 'react-bootstrap/Carousel';

// function Home() {
//   return (
//     <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="images/untitle1.jpg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="images/untitle2.jpg"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="images/untitle3.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Home;









// Services.js

// import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';

// const Services = () => {
//   return (
// <div className='container fluid'>
//  <div className='row justify-content-evenly mt-5'>
//     <div className='col-md-5'>
//     <img src="Images/Growth.jpg" class="img-fluid" alt=""></img>
//   </div>
//     <div className='col-md-5 mt-5 pt-3 pb-2'>

//     <h5>Website development</h5>
//     <ProgressBar variant="success" now={40} />

//     <h5>App development</h5>
//       <ProgressBar variant="info" now={20} />

//       <h5>Software development</h5>
//       <ProgressBar variant="warning" now={60} />

//       <h5>SCO</h5>
//       <ProgressBar variant="danger" now={80} />

//       <h5>Marketing</h5>
//       <ProgressBar variant="primary" now={80} />

//     </div>
// </div>
    

// </div>
//   )
// }

// export default Services;









// #.Headercss

/* headercss */

// .nav-parent {
//     padding: 2rem 3rem;
//     position: sticky;
//     top: 0px;
//     z-index: 1;
//     background-color: white;
//   }
  
//   .navbar-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: .5rem 2rem;
//     border: 2px solid black;
//     border-radius: 8px;
//   }
  
//   .navbar-container .nav-links {
//     display: flex;
//     gap: 2rem;
//   }
  
//   .navbar-container .nav-links .nav-link {
//     font-size: 1.25rem;
//     font-weight: 600;
//     padding: 4px 10px;
//     border-radius: 4px;
//   }
  
//   .navbar-container .nav-links .nav-link:hover{
//     color: white;
//     background-color: green;
//   } 
  
  



































