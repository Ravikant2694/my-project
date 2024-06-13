// 1.

//  import { useState } from 'react';
//  import './App.css';

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState('red')
// console.log('color', color)
//   return (
//     <div className="App">
//       <h style={{ color }}>Hello</h>
//       <button style={{background: "yellow", cursor: 'pointer'}} onClick={() => setColor(color === 'green' ? "red": "green")}>
//         Change color
//       </button>
//     </div>
//   );
// }

// export default App;




// 2.

//  import React, { useState } from 'react';

//  function CounterApp() {
//    const [count, setCount] = useState(0);

//    const increment = () => {
//      setCount(prevCount => prevCount + 1);
//    };

//    const decrement = () => {
//      setCount(prevCount => prevCount - 1);
//    };

//    return (
//      <div>
//        <h1>Counter App 2</h1>
//        <div>
//          <button onClick={decrement}>-</button>
//          <span>{count}</span>
//          <button onClick={increment}>+</button>
//        </div>
//      </div>
//    );
//  }

//  export default CounterApp;




// 3.

// import React, { useState } from 'react'

// function form() {
//   return (
//     <form className='container'>
//     <div className='header'>
//     <h1>Registration Form</h1>
//     </div>
//     <div>
//     <input type='text' placeholder='Enter your Name'
//     name='name' required></input><br></br>
//     </div>
//     <div>
//     <input type='text' placeholder='Enter your Email'
//     name='email' required></input>
//     </div>
//     <div>
//     <input type='password' placeholder='Enter your Password'
//     name='password' required></input>
//     </div>
//     <div>
//     <button type='submit'>submit</button>
//     </div>

//     </form>
//   )
// }

// export default form




// 4.

// import and export(user.js) in react js

//  import './App.css';
//  import User from './User'
//  function App() {
//    return (
//      <div className='App'>
//      <h1> Hello world </h1>
//       <User></User>
//       <User></User>
//       <User></User>
//       <User></User>
//      </div>
//    )
//  }

//  export default App;








// 5.

// usestate hook in react js

// import React,{useState} from 'react';

// const App = () => {
//   const [data,setData] = useState(10)
//   return (
//     <div>
//     <h1>Usestate Hook{data}</h1>
//     <button onClick={()=>setData(data+1)}>update data</button>
//     </div>
//   )
// }

// export default App;











// 6.

// context hooks in react js

// import './App.css';
// import React,{createContext} from "react";
// import ChildA from "./ChildA";
// const data = createContext();
// const data1 = createContext();

// function App() {
//   const name = "ravi jangra"
//   const gender = "male"
// return (
//   <>
//   <data.provider value={name}>
//   <data1.provider value={gender}>
//   <ChildA/>
//   </data1.provider>
//   </data.provider>
//   </>
//   )
// }
//   export default App;
//   export {data,data1}
// )







// 7.

// hooks in react js
// import './App.css'
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [input, setInput] = useState('123');

//   useEffect(() => {
//     console.log('usssss')
//   }, [input])

//   console.log('input', input)
//   return (
//     <div className='App'>
//     <h1>useref in js</h1>
//     <input value={input} name ="Fname" placeholder='First Name' onChange={(e) => setInput(e.target.value)} />
//       </div>
//   );
// }

// export default App




// 8.

//  import React, { useState } from 'react'

//  function App() {
//    const [name, setName] = useState();
//    const [last, setLast] = useState();
//    const[email,setEmail] = useState();
//    const[phone,setPhone] = useState();
//    console.log("name",name);
//    console.log("last", last);
//    console.log("email",email);
//    console.log("phone",phone)
//    return (

//      <div>
//        <input value={name} name='fname' placeholder='first name' onChange={(e) => setName(e.target.value)}/>
//        <input value={last} name='Lname' placeholder='last name' onChange={(e) => setLast(e.target.value)}/> 
//        <input value={email} name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/> 
//        <input value={phone} name='phone' placeholder='phone' onChange={(e) => setPhone(e.target.value)}/> 
//      </div>
//    )
//  }

//  export default App



// 9.

// import { useState } from "react";
// const Count = () => {
//     const [num, setNum] = useState(0);

//     const CounterI = () => {
//        setNum (num+1);   
//     }
//     const CounterD = () => {
//         setNum (num-1);
//     }
//     const ResetCounter = () =>{
//         setNum (0);
//     }
//     return(
//         <div>
//             <p>Count Value: {num}</p>
//             <button onClick={CounterI}>Counter Increment</button>
//             <button onClick={CounterD}>Counter Decrement</button>
//             <button onClick ={ResetCounter} >Reset</button>
//         </div>
//     );
// }

// export default Count;




// 10.

// import React, {useState} from 'react'

// export default () => {
//     const [fName, setfName] = useState('');
//     const [lName, setlName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');

// const submitValue = () => {
//     const frmdetails = {
//         'First Name' : fName,
//         'Last Name' : lName,
//         'Phone' : phone,
//         'Email' : email
//     }
//     console.log(frmdetails);
// }

// return(
//   <>
//     <hr/>
//     <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
//     <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
//     <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
//     <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
//     </>
//     )
// }









// 11.

// hooks in react js


//  import './App.css'
//  import React, { useEffect, useState } from 'react'

//  function App() {
//    const [input, setInput] = useState('123');

//    useEffect(() => {
//      console.log('usssss')
//    }, [input])

//    console.log('input', input)
//    return (
//      <div className='App'>
//      <h1>useref in js</h1>
//      <input value={input} name ="Fname" placeholder='First Name' onChange={(e) => setInput(e.target.value)} />
//        </div>
//    );
//  }

//  export default App









// 12.

// onclick event

// import React from 'react'
// function App() { 
//   let data = "anil sidhu"
//   function apple() {
//     alert(data)
//   }
//   return (
//     <div className='App'>
//     <h1>{data}</h1>
//      <button onClick={() =>apple()}>submit</button> 
//     </div>
//   )
// }

// export default App






// 13.

// import React, { useState } from 'react'

// function Form() {
//   const[name,setName]= useState('')
//     console.log('name', name)

//     const[email,setEmail]= useState('')
//     console.log('email', email)

//     const[password,setpassword]= useState('')
//     console.log('password', password)

//     const onSubmit = () => {
//       alert('submit successful')
//     }



//     }

//   return (
//     <form>
//     <h1>Registration Form</h1>
//     <div>
//     Name : <input type='text' placeholder='Enter your Name' id='n1' onChange={(e) => setName(e.target.value)}></input><br></br><br></br>
//     Email Address : <input type='text' placeholder='Enter your Email' id='e1' onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
//     Password : <input type='password' placeholder='Enter your password' id='p1' onChange={(e) => setpassword(e.target.value)}></input><br></br><br></br>
//     <button type='submit' onClick={onSubmit}>submit</button>

//     </div>

//     </form>

//   )


// export default Form;






// 14.

// form.js

//  import Form from './Form'

//  function App() {
//    return (
//      <>
//      <Form/>
//      </>
//    )
//  }

//  export default App





// 15.

//  useState hooks in react

//  import React, {useState} from 'react';

//  function App() {
//    const [Count, setCount] = useState(0)
//    function updateCount() {
//      setCount(Count+1)
//    }
//    return (
//      <div>
//      <h1>{Count}</h1>
//      <button onClick={updateCount}>click</button>

//      </div>
//    )
//  }

//  export default App





// 16.

// useEffect in react

//  import React, {useState, useEffect} from 'react';

//   function App() {
//     const [Count, setCount] = useState(0)
//     const [data, setData] = useState("Ram")
//     useEffect(() => {
//       console.log("component mounted")
//     },[Count])
//     function updateCount() {
//       setCount(Count+1)
//     }
//     function updateData () {
//       setData("seeta")
//     }
//     return (
//       <div>
//       <h1>{Count}</h1>
//       <button onClick={updateCount}>click</button>
//       <button onClick={updateData}>updateData</button>

//       </div>
//     )
//   }

//   export default App



// 17.

// samplePage.js

// import SamplePage from './SamplePage'

//  function App() {
//    return (
//      <>
//      <SamplePage/>
//      </>
//    )
//  }

//  export default App








// 18.

//  import Form from './Form'

//  function App() {
//    return (
//      <>
//     //  <Form/>
//     hello
//      </>
//    )
//  }

//  export default App





// 19.

// project-router

// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './About/About';
// import Layout from './Layout/Layout';
// import Contact from './Contact/Contact';
// import Home from './Home/Home';
// import Service from './Service/Service';
// import Testing from './Testing/Testing';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>                                                                                                                                                                                                                                                    
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/service" element={<Service />} />
//             <Route path="/testing" element={<Testing />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;






















// project-2

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './Layout/Layout'
// import Information from './pages/Information'
// import Features from './pages/Features'
// import Testimonials from './pages/Testimonials'
// import Gallery from './pages/Gallery'
// import Contact from './pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path='information' element={<Information />} />
//           <Route path="features" element={<Features />} />
//           <Route path="testimonials" element={<Testimonials />} />
//           <Route path="gallery" element={<Gallery />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;









// // 4.Api call - 1(complete project)

// import React, { useEffect, useState } from 'react'

// const defaultCount = 10

// function App() {
// 	const [data, setData] = useState([])
// 	const [loading, setLoading] = useState(false)
// 	const [count, setCount] = useState(defaultCount)

//     const handleprevious = () => {
//         if( count > 10){
//             setCount(defaultCount => defaultCount - 10)
//         }
       
//     }

//     const handlenext = () => {
//         if(count < 100){
//             setCount(defaultCount => defaultCount + 10)
//         }
       
//     }

// 	useEffect(() => {
// 		setLoading(true)
// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 			.then((result) => {
// 				result.json().then((response) => {
// 					setData(response)
// 				})
// 			})
// 			.finally(() => {
// 				setLoading(false)
// 			})
// 	}, [])
// 	return (
// 		<div>
	
// 			<div>
// 				{loading ? (
// 					<div style={{textAlign: 'center'}}><img src="images/Loadinganimation.gif"></img></div>
// 				) : (
// 					<table>
// 						<tr>
// 							<th>USER ID</th>
// 							<th>ID</th>
// 							<th>TITLE</th>
// 							<th>BODY</th>
//                             <th>ACTION</th>
// 						</tr>
// 						{data.slice(count - defaultCount, count).map((item,id) => (
// 							<tr>
// 								<td>{id}</td>
// 								<td>{item.id}</td>
// 								<td>{item.title}</td>
// 								<td>{item.body}</td>
//                                 <td>
//                                 <div className='d-flex gap-5 w-100'>
//                                 <button >View</button>
//                                 <button>Edit</button>
//                                 </div></td>
                              
// 							</tr>
// 						))}
// 					</table>
// 				)}
//                 <span style={{float:'right'}}>
//                 Start: {count - defaultCount} -
//                 End: {count}
//                 <button onClick={handleprevious}>
//                     Previous
//                 </button>
//                 <button onClick={handlenext}>Next</button>
//                 </span>
               
// 			</div>
// 		</div>
// 	)
// }

// export default App








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









// // #.App.js

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









react hook form(Project-1)

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log("errors", errors);

  return (
    <div className="">
      <p>SIGN UP</p>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'start', background: '#181f2d99', color:'#d1d5db', padding: 30, borderRadius: 4 }}>
            <div style={{ fontSize: '14px' }}>
              First name<span style={{ color: 'red' }}>*</span>
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
              {errors?.firstName && <p style={{ color: 'red', margin: 0, fontSize: 14, fontWeight: 400 }}>{errors.firstName.message}</p>}
            </div>
            <div style={{ fontSize: '14px' }}>
              Last name:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Last Name" {...register("lastName")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              Phone number<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Phone Number" {...register("phoneNumber")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              Email<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Email" {...register("email")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              password<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Password" {...register("password")} />
            </div>
            <div style={{ fontSize: '14px' }}>
              conform password<span style={{ color: 'red' }}>*</span>:
              <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Confirm Password" {...register("confirmPassword")} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{color: 'white', background: 'green', padding: '6px 16px', border: 'none', borderRadius: 4, cursor: 'pointer'}} type="submit" >Sign up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;










