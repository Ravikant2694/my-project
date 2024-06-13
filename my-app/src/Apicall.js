









// 1.Api call-1

//  import React, { useEffect, useState } from 'react'

//  function App() {
//    const [data,setData] = useState([])
//    useEffect(() =>{
//      fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {result.json().then((response) => {
//       console.log("result",response)
//      setData(response)
//    })

//    })

//  },[]);
//  console.log(data)
//    return (
//      <div style={{border:'2px solid black'}}>
//        <h1 style={{textAlign:'center'}}>GET API CALL</h1>
//        <div>
//             <table>
//                    <tr>
//                        <th>USER ID</th>
//                        <th>ID</th>
//                        <th>TITLE</th>
//                        <th>BODY</th>
//                    </tr>
//                       { data.map((item)=>
//                     <tr>
//                        <td>{item.userId}</td>
//                        <td>{item.id}</td>
//                        <td>{item.title}</td>
//                        <td>{item.body}</td>
//                    </tr>
//                      )
//                    } 
//             </table>
//        </div>
//      </div>
//    )
//  }

//  export default App

// 2.Api call-1

// import React, { useEffect, useState } from 'react'

// function App() {
// 	const [data, setData] = useState([])
// 	const [loading, setLoading] = useState(false)
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
// 		<div style={{ border: '2px solid black' }}>
// 			<h1 style={{ textAlign: 'center' }}>GET API CALL</h1>
// 			<div>
// 				{!loading ? (
// 					<div>Loading ...</div>
// 				) : (
// 					<table>
// 						<tr>
// 							<th>USER ID</th>
// 							<th>ID</th>
// 							<th>TITLE</th>
// 							<th>BODY</th>
// 						</tr>
// 						{data.map((item) => (
// 							<tr>
// 								<td>{item.userId}</td>
// 								<td>{item.id}</td>
// 								<td>{item.title}</td>
// 								<td>{item.body}</td>
// 							</tr>
// 						))}
// 					</table>
// 				)}
// 			</div>
// 		</div>
// 	)
// }

// export default App

// 3.Api call-1

// import React, { useEffect, useState } from 'react'

// const defaultCount = 10

// function App() {
// 	const [data, setData] = useState([])
// 	const [loading, setLoading] = useState(false)
// 	const [count, setCount] = useState(defaultCount)

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
// 		<div>
// 			Start: {count - defaultCount} -
// 			End: {count}
// 			<button onClick={() => setCount(count - defaultCount)}>
// 				Previous
// 			</button>
// 			<button onClick={() => setCount(count + defaultCount)}>Next</button>
// 			<div>
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
// 			</div>
// 		</div>
// 	)
// }

// export default App

// 4.Api call - 1(complete project)

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
               
// 			</div>
// 		</div>
// 	)
// }

// export default App

/* call app css */

// table{
//     border: 2px solid black;
//     border-collapse: collapse;
//   }
  
//   th{
//     border: 2px solid black;
//   }
  
//   td{
//     border: 2px solid black;
//   }









// Api call-2

// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const Post = () => {

//   const [data, setData] = useState([])

//   const getPosts = async () => {
//     const getData = await axios.get('https://jsonplaceholder.typicode.com/posts/')
//     setData(getData.data)
//     console.log('getData', getData)
//   }

//   useEffect(() => {
//     getPosts()
//     // fetch('https://jsonplaceholder.typicode.com/posts/')
//     //   .then(response => response.json())
//     //   .then(json => setData(json))
//   }, [])

//   console.log("data", data);

//   return (
//     <div>
//       <div>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead style={{ backgroundColor: '#f2f2f2' }}>
//             <tr>
//               <th style={styles.cell}>Sr. No.</th>
//               <th style={styles.cell}>Title</th>
//               <th style={styles.cell}>Content</th>
//               <th style={styles.cell}>Post ID</th>
//               <th style={styles.cell}>User ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((itm, idx) => <tr key={idx}>
//               <td style={styles.cell}>{idx + 1}</td>
//               <td style={styles.cell}>{itm.title}</td>
//               <td style={styles.cell}>{itm.body}</td>
//               <td style={styles.cell}>{itm.id}</td>
//               <td style={styles.cell}>{itm.userId}</td>
//             </tr>)}
//             {/* Add more rows here if needed */}
//           </tbody>
//         </table>
//       </div>


//     </div>
//   )
// }

// export default Post

// const styles = {
//   cell: {
//     padding: '10px',
//     border: '1px solid #ddd',
//     textAlign: 'left',
//   },
// };









// Api call-3

// #.how to get api

// import { useEffect, useState } from "react";

// function App () {
//     const [data, setData] = useState([])
    

//     useEffect(()=> {
//         const url = "https://jsonplaceholder.typicode.com/comments"
//         fetch(url)
//         .then(Response => Response.json().then(json =>{
//             console.log(json)
//             setData(json)
//         }))
    
//     },[])

//     return(
//         <div>
//         <h2>Welcome</h2>
//         {
//             data.map(item => {
//                 return(
//                     <div>
//                     {item.id}
//                     {item.name}
//                     {item.email}
//                     {item.body}
//                     </div>
//                 )
//             })
//         }
//         </div>
//     )
// }

// export default App;



















