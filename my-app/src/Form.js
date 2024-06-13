// import React, { useEffect, useState } from 'react'

// function Form() {
//     const data = {name:"", email:"", password:""};
//     const [inputData, setinputData] = useState(data)
//     const [flag,setFlag] = useState(false)
//     useEffect(() => {
//         console.log("Resistered")
//     },[flag])
//     function handleData(e) {
//         setinputData({...inputData, [e.target.name]:e.target.value})
//         console.log(inputData)
//        }
//        function handleSubmit(e) {
//         e.preventDefault();
//         if(!inputData.name || !inputData.email || !inputData.password) {
//             alert("All field are mandatory")
//         }
//         else{
//             setFlag(true)
//         }
        
//        }
    
//   return (
//     <>
//     <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},you have Resistered successfully</h2>:""}</pre>
//     <form className='container' onSubmit={handleSubmit}>
//     <div className='header'>
//     <h1>Registration form</h1> 
//     </div>
//     <div>
//     Name : <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}></input>
//     </div><br></br>

//     <div>
//     Email Address : <input type='text' placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData}></input>
//     </div> <br></br>

//     <div>
//     Password : <input type='password' placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData}></input>
//     </div> <br></br>

//     <div>
//     <button type='submit'>submit</button>
    
//     </div>
    
    
    
    
//     </form>
//     </>
//   )
// }

// export default Form
