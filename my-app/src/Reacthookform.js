// import React from 'react'

// function Student() {
//   return (
//     <div>Student</div>
//   )
// }

// export default Student









// react hook form(Project-1)

// import React from "react";
// import { useForm } from "react-hook-form";

// const App = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = handleSubmit((data) => console.log(data));

//   console.log("errors", errors);

//   return (
//     <div className="">
//       <p>SIGN UP</p>
//       <form onSubmit={onSubmit}>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'start', background: '#181f2d99', color:'#d1d5db', padding: 30, borderRadius: 4 }}>
//             <div style={{ fontSize: '14px' }}>
//               First name<span style={{ color: 'red' }}>*</span>
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
//               {errors?.firstName && <p style={{ color: 'red', margin: 0, fontSize: 14, fontWeight: 400 }}>{errors.firstName.message}</p>}
//             </div>
//             <div style={{ fontSize: '14px' }}>
//               Last name:
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Last Name" {...register("lastName")} />
//             </div>
//             <div style={{ fontSize: '14px' }}>
//               Phone number<span style={{ color: 'red' }}>*</span>:
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Phone Number" {...register("phoneNumber")} />
//             </div>
//             <div style={{ fontSize: '14px' }}>
//               Email<span style={{ color: 'red' }}>*</span>:
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Email" {...register("email")} />
//             </div>
//             <div style={{ fontSize: '14px' }}>
//               password<span style={{ color: 'red' }}>*</span>:
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Password" {...register("password")} />
//             </div>
//             <div style={{ fontSize: '14px' }}>
//               conform password<span style={{ color: 'red' }}>*</span>:
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 8, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Confirm Password" {...register("confirmPassword")} />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button style={{color: 'white', background: 'green', padding: '6px 16px', border: 'none', borderRadius: 4, cursor: 'pointer'}} type="submit">Sign up</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;




// project-CSS

// body {
//   background-color: black;
// }

// ul {
//   display: flex !important;
//   gap: 22px;
//   padding-top: 12px;
// }

// ::marker {
//   list-style-type: none !important;
// }

// li:active {
//   background-color: aqua !important;
// }

// .nav-parent {
//   padding: 2rem 3rem;
// }

// .navbar-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: .5rem 2rem;
//   border: 2px solid black;
//   border-radius: 8px;
// }

// .navbar-container .nav-links {
//   display: flex;
//   gap: 2rem;
// }

// .navbar-container .nav-links .nav-link {
//   font-size: 1.25rem;
//   font-weight: 600;
//   padding: 4px 10px;
//   border-radius: 4px;
// }

// .navbar-container .nav-links .nav-link:hover{
//   color: white;
//   background-color: green;
// }









// react hook form (project-2)

// import React from "react";
// import { useForm } from "react-hook-form";

// const App = () => {
//   const { register, handleSubmit, formState: { errors }, watch, setError } = useForm();
//   const onSubmit = (data) => {
//     if (watch('password') === watch('confirm_password')) {
//       console.log("data", data)
//     } else {
//       setError('confirm_password', { type: 'custom', message: "Password did not matched" })
//     }
//   };

//   console.log("errors", errors);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", padding: '50px' }}>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div style={{ display: 'flex', justifycontent: 'center' }}>
//           <div style={{ border: '1px solid black', flexDirection: "column", gap: 10, padding: 30, borderRadius: 4, backgroundColor: '#000000', color: 'white', display: "flex", justifyContent: "center" }}>

//             <p style={{ display: 'flex', justifyContent: 'center' }}>SIGN UP</p>
//             <div style={{ fontSize: '14px' }}>
//               <label>First Name : </label><span style={{ color: 'red' }}>*</span>
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="First_Name " {...register("firstName", { required: 'First name is required' })} />
//               <p style={{ color: 'red', margin: 0 }}>{errors?.firstName?.message}</p>
//             </div>

//             <div style={{ fontSize: '14px' }}>
//               <label>Last Name : </label>
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Last_Name"{...register("lastName")} />

//             </div>

//             <div style={{ fontSize: '14px' }}>
//               <label>Phone number : </label><span style={{ color: 'red' }}>*</span>
//               <input style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Phone_Number"{...register("phoneNumber", { required: true, maxLength: 10 })} />
//               <p>{errors?.phoneNumber?.message}</p>
//             </div>

//             <div style={{ fontSize: '14px' }}>
//               <label>Email Address : </label><span style={{ color: 'red' }}>*</span>
//               <input type="email" style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="example@gmail.com" {...register("email", { required: 'email is required', pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
//               <p>{errors?.email?.message}</p>
//             </div>

//             <div style={{ fontSize: '14px' }}>
//               <label>Password : </label><span style={{ color: 'red' }}>*</span>
//               <input type="password" style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Pass@123 "{...register("password", {
//                 required: 'passward is required', pattern: /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/
//               })} />
//               <p>{errors?.password?.message}</p>
//             </div>

//             <div style={{ fontSize: '14px' }}>
//               <label>Confirm password : </label><span style={{ color: 'red' }}>*</span>
//               <input type="password" style={{ display: 'block', margin: 0, width: 220, padding: 4, borderRadius: 4, outline: 'none', border: '1px solid gray' }} placeholder="Pass@123" {...register("confirm_password", {
//                 required: 'passward is required', pattern: /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/
//               })} />
//             </div>

//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <button style={{ backgroundColor: 'green', color: 'white', padding: '6px 10px', border: 'none', borderRadius: 4, cursor: "pointer", marginTop: '15px' }} type="submit">SIGN UP</button>
//             </div>
//           </div>
//         </div>

//       </form>
//     </div>
//   );
// };

// export default App;




// project-css

// body {
//   background-color: rgb(80, 157, 166);
// }






























