// 3.AXIOS PUT REQUEST =>

import React, { useState } from 'react'
 import axios from 'axios'

 function Axiosdelete(){
     const data = {fname :"" , lname : ""}
     const [inputData, setInputdata] = useState(data)

     const handleData = (e) => {
         setInputdata({...inputData,[e.target.name]: e.target.value})
     }

     const handlesubmit = (e) => {
         e.preventDefault();
         axios.post("https://jsonplaceholder.typicode.com/users", inputData)
         .then((response) => {
            //  console.log(response)
         })
     }

     const handleupdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
         .then((response) => {
            //  console.log(response)
         })
     }
     const handleDelete =(e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            // console.log(response)
        })

     }
   return (
     <>
     <label>First Name :</label>
     <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input><br></br><br></br>
     <label>Last Name :</label>
     <input type='text' name='lname' value={inputData.lname}  onChange={handleData}></input><br></br><br></br>

     <button onClick={handlesubmit}>submit</button>

     <button style={{margin:'10px'}} onClick={handleupdate}>Update</button>

     <button onClick={handleDelete}>Delete</button>
      
     </>
   )
 }

 export default Axiosdelete;


