// import React from "react";

// const Hook = () => {
//     console.log("hook is activated")
//     return(
//        <div>hook is activated</div>
//     )
// };

// export default Hook;

// 1.Increment and Decrement

// import React,{ useState} from 'react'

// const Hooks = () => {
//     const [data,setData] = useState(0)

    
//         const Increment = () =>{
//             if(data < 10) {
//                 setData(prevcount => prevcount + 1)
//             }
            
//         }
        

//         const Decrement = () => {
//             if(data > 1)
//             setData(prevcount => prevcount - 1)
//         }
    

//     return(
//         <div>
       
//         <button style={{border:'5px solid', height:'50px', width:'100px',backgroundColor:'green',color:'white', borderRadius: 15}} onClick={Increment}>Increment</button>
//         <div><h1>{data}</h1></div>
//         <button style={{border:'5px solid', height:'50px', width:'100px',backgroundColor:'green',color:'white', borderRadius: 15}}  onClick={Decrement}>Decrement</button>
//         </div>

    
//     )
// }

// export default Hooks;









// 2. Increment and Decrement

// import React, { useState } from "react";

// const Hooks = () => {
//     const [quantity, setQuantity] = useState(1);
        
//         const handleDecrement = () => {
//             if(quantity > 1){
//                 setQuantity(prevcount => prevcount - 1)
//             }
        
//         }

//         const handleIncrement = () => {
//             if(quantity < 10){
//                 setQuantity(prevcount => prevcount + 1)
//             }
            
//         }

    
//     return(

//         <div>

//         <button type="button" onClick={handleIncrement}>+</button>
// <div>{quantity}</div>
//         <button type="button" onClick={handleDecrement}>-</button>

//         </div>
//     )
// }

// export default Hooks;









// 3. useeffect in api

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
// 					console.log('result', response)
// 					setData(response)
// 				})
// 			})
// 			.finally(() => {
// 				setLoading(false)
// 			})
// 	}, [])

// 	console.log(data)
// 	return (
// <div>
	
// 	<div>
// 				{loading ? (
// 					<div style={{textAlign: 'center'}}>Loading ...</div>
// 				) : (
// 					<table>
// 						<tr>
// 							<th>USER ID</th>
// 							<th>ID</th>
// 							<th>TITLE</th>
// 							<th>BODY</th>
// 						</tr>
// 						{data.slice(count - defaultCount, count).map((item) => (
// 							<tr>
// 								<td>{item.userId}</td>
// 								<td>{item.id}</td>
// 								<td>{item.title}</td>
// 								<td>{item.body}</td>
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
               
// 	</div>
// </div>
// 	)
// }

// export default App









// 4.Reloader in api


// import React, { useEffect, useState } from "react";

// const Hooks = () => {
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((result) =>{
//         result.json().then((response) =>{
//             console.log(response)
//         })
//         })
//         .finally(() => {
//             setLoading(false);
//         })
//     },[])

//     return(
//         <div>
//         {loading ? (<div style={{textAlign:"center"}}><img src="images/Loadinganimation.gif"></img></div>) : (
//             <table>
//  						<tr>
//  							<th>USER ID</th>
//  							<th>ID</th>
//  							<th>TITLE</th>
//  							<th>BODY</th>
//  						</tr>
//  							<tr>
//  								<td>userId</td>
//  								<td>id</td>
//  								<td>title</td>
//  								<td>body</td>
//  							</tr>
//  						))}
//  					</table>
//         )}
        
//         </div>

//     )
// }

// export default Hooks;





