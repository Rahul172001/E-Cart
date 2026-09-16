import { useState,useEffect } from "react"

const usePdpData = (url,id)=>{
    const [productData,setProductData] = useState(null)
    useEffect(()=>{
        fetchData()
    },[url])
    const fetchData = async()=>{
        const data = await fetch(url+id)
        const json = await data.json()
        setProductData(json)
    }
    console.log("dddp",productData)
    return productData
}
export default usePdpData