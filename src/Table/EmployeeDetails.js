// import { useParams } from "react-router-dom"
// import usePdpData from "../Utils/usePdpData"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// const EmployeeDetails = ()=>{
//     const {empid} = useParams()
//     console.log(useParams())
//     const productData = usePdpData("https://jsonplaceholder.typicode.com/users/",empid)
//     console.log("pp",productData)
//     const data = productData ? {...productData,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqCsgTDhnQx56w7dxi9_uqQ53j35gWlsbSKCzX_wGGo06gX896FsZzPg&s=10"} : null
//     console.log("userdata",data)
//     return(
//         <>
//         </>
//     )
// }
// export default EmployeeDetails

const EmployeeDetails = ()=>{
    const [user,setUser] = useState(null)
    const {userid} = useParams()
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users/"+userid)
        const json = await data.json()
        setUser(json)
    }
    const data = {...user,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqCsgTDhnQx56w7dxi9_uqQ53j35gWlsbSKCzX_wGGo06gX896FsZzPg&s=10"}
    console.log(data)
    return(
        <div className="flex m-4 border-2 border-black">
            <div className="p-4 flex-[1_1_0]">
                <img className="rounded-[20px]"src={data?.image} />
            </div>
            <div className="m-4 p-4 border-2 border-[#ffee32] flex flex-[2_0_0] rounded-[20px] flex-col bg-[#EEEEEE]">
                <h1 className="text-3xl font-bold">Name - {data?.name}</h1>
                <h3>Employee Id - {data?.id}</h3>
                <h5>Profession👔
                    <p>Organization : {data?.company?.name}</p>
                    <p>Role {data?.company?.bs}</p>
                </h5>
                <h5>Contact Information
                    <p>UserId : {data?.username}</p>
                    <p>Mobile : {data?.phone}</p>
                    <p>Email : {data?.email}</p>
                    <p>Website : {data?.website}</p>
                </h5>
                <h6>Address
                    <p>City {data?.address?.city}, ZipCode {data?.address?.zipcode}</p>
                </h6>
            </div>
        </div>
    )
}
export default EmployeeDetails