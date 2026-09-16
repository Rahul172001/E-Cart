// import { useEffect, useState } from "react"
// import useDatafetch from "../Utils/useDatafetch"
// import { Link } from "react-router-dom"

import useDatafetch from "../Utils/useDatafetch"
import { useNavigate } from "react-router-dom"

// const Table = ()=>{
//     const [search,setSearch] = useState("")
//     const {product,setProduct,productBackup} = useDatafetch("https://jsonplaceholder.typicode.com/users")
//     console.log("datass",product)
//     console.log("dstaaa",productBackup)
//     useEffect(()=>{
//         const timer = setTimeout(()=>{
//             setProduct(productBackup.filter((data)=>
//                 data?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
//                 data?.username?.toLowerCase()?.includes(search?.toLowerCase()) ||
//                 data?.company?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
//                 data?.address?.city?.toLowerCase()?.includes(search?.toLowerCase()) ||
//                 data?.phone?.toLowerCase()?.includes(search?.toLowerCase()) ||
//                 data?.email?.toLowerCase()?.includes(search?.toLowerCase())
//             ))
//         },300)
//         return ()=> clearTimeout(timer)
//     },[search,productBackup])

//     return(
//         <>
//         <input type="text" placeholder="Search for Employees" value={search} onChange={(e)=>setSearch(e.target.value)} />
//         <table className="table">
//             <thead>
//               <tr className="heading">
//                 <th>Name</th>
//                 <th>User Name</th>
//                 <th>Company</th>
//                 <th>City</th>
//                 <th>Phone</th>
//                 <th>Eamil</th>
//               </tr>
//             </thead>
//             <tbody>
//                {product.map((data)=>
//             <tr className="body" key={data?.id}>
//                 <td>{data?.name}</td>
//                 <td>{data?.username}</td>
//                 <td>{data?.company?.name}</td>
//                 <td>{data?.address?.city}</td>
//                 <td>{data?.phone}</td>
//                 <td>{data?.email}</td>
//             </tr>)}
//             </tbody>
//         </table>
//         <style>
//             {`
//                 .table{
//                     margin:10px;
//                     border-collapse:collapse;
//                 }
//                 .heading>th{
//                     border:1px solid black;
//                     font-weight: bold;
//                     padding: 3px 6px;
//                 } 
//                 .body>td{
//                     border: 1px solid black;
//                     padding: 3px 6px;
//                 }         
            
//             `}
//         </style>
//         </>
//     )
// }
// export default Table

const Table = ()=>{
    const {product,setProduct,productBackup} = useDatafetch("https://jsonplaceholder.typicode.com/users")
    const navigate = useNavigate()
    console.log("nav",navigate)
    return(
        <>
        <div className="m-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg shadow-lg">
            <thead>
                <tr className="bg-[#5996FF] text-white">
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">User Name</th>
                    <th className="p-4 text-left">Company</th>
                    <th className="p-4 text-left">Phone</th>
                    <th className="p-4 text-left">E Mail</th>
                    <th className="p-4 text-left">City</th>
                    <th className="p-4 text-center"></th>
                </tr>
            </thead>
            <tbody>

                {product?.map((data)=>
                <tr className="odd:bg-[#EEEEEE] even:bg-white hover:bg-blue-100 transition-colors " key={data?.id}>
                    <td className="p-4 border-b">{data?.name}</td>
                    <td className="p-4 border-b">{data?.username}</td>
                    <td className="p-4 border-b">{data?.company?.name}</td>
                    <td className="p-4 border-b">{data?.phone}</td>
                    <td className="p-4 border-b">{data?.email}</td>
                    <td className="p-4 border-b">{data?.address?.city}</td>
                    <td className="p-4 border-b text-center">
                        <button className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600" type="button" onClick={()=>navigate(`/table/${data?.id}`)}>View</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
        </div>
        <style>
            {`
                .table{
                    border-collapse: collapse;
                    margin: 20px
                }
                .header > th{
                    border:1px solid black;
                    padding: 10px
                }
                .body > td{
                    border:1px solid black;
                    padding: 10px
                }
            `}      
        </style>
        </>
    )
}

export default Table