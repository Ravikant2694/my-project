// 29.

// import React,{useState} from "react";


// const Practice = () => {

//     const [data, setData] = useState("ravikant")

//     return(
//         <div>
//         {data}
//         <button onClick={() => setData("ravijangra")}>submit</button>
//         </div>
//     )
// }

// export default Practice;









// 30.

// import React,{useEffect, useState} from 'react'

// const Practice = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {

//         console.log("useEffect")
//     })

//     return(

//         <div>
//         <h1>{count}</h1>
//         <h1>useEffect</h1>
//         <button onClick={() => setCount(count+1)}>Update</button>
//         </div>

//     )
// }

// export default Practice;









// import React,{useEffect, useState} from "react";

// const Practice = () => {

//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);

//     useEffect(() => {
//         if(count && count %2 === 0 ){
//             alert(count)
//         }
//     }, [count, data])

//     return(
//         <div>
//         <h1>data : {data}</h1>
//         <h1>data : {count}</h1>
//         <button onClick={() => setData(data+1)}>Update count 1</button>
//         <button onClick={() => setCount(count+1)}>Update count 2</button>
//         </div>
//     )
// }

// export default Practice;









// import React,{useEffect, useState} from "react";

// const Practice = () => {

//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);

//     useEffect(() => {
//        console.log("called with data state")
//     }, [data])

//     useEffect(() => {
//         alert("count is "+ count)
//      }, [count])
 
//     return(
//         <div>
//         <h1>data : {data}</h1>
//         <h1>data : {count}</h1>
//         <button onClick={() => setData(data+1)}>Update count 1</button>
//         <button onClick={() => setCount(count+1)}>Update count 2</button>
//         </div>
//     )
// }

// export default Practice;









import React,{ useState} from "react";
import Project from "./Project";

const Practice = () => {

    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

   
 
    return(
        <div>
        
        <Project count={count} data={data}/>
        <button onClick={() => setData(data+1)}>Update count 1</button>
        <button onClick={() => setCount(count+1)}>Update count 2</button>
        </div>
    )
}

export default Practice;