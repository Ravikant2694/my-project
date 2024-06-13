// import React, { useEffect, useState } from 'react'

// const Post = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(json => setData(json))
//     }, [])

//     console.log("data", data);

//     return (
//         <div>
//             <div>
//                 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                     <thead style={{ backgroundColor: '#f2f2f2' }}>
//                         <tr>
//                             <th style={styles.cell}>Sr. No.</th>
//                             <th style={styles.cell}>Title</th>
//                             <th style={styles.cell}>User ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td style={styles.cell}>1</td>
//                             <td style={styles.cell}>Sample Title 1</td>
//                             <td style={styles.cell}>123456</td>
//                         </tr>
//                         <tr>
//                             <td style={styles.cell}>2</td>
//                             <td style={styles.cell}>Sample Title 2</td>
//                             <td style={styles.cell}>789012</td>
//                         </tr>
//                         {/* Add more rows here if needed */}
//                     </tbody>
//                 </table>
//             </div>
//             {data.map((itm, idx) => <div key={idx} style={{ display: 'flex', gap: 10, background: 'green', marginBottom: 10, padding: "2px 10px" }}>
//                 <p>{idx + 1}</p>
//                 <p>Title: {itm.title}</p>
//                 <p>User ID: : {itm.userId}</p>
//             </div>)}

//         </div>
//     )
// }

// export default Post

// const styles = {
//     cell: {
//         padding: '10px',
//         border: '1px solid #ddd',
//         textAlign: 'left',
//     },
// };