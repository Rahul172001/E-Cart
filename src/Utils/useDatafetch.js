import { useState,useEffect } from "react"

const useDatafetch = (url)=>{
    const[product,setProduct] = useState([])
    const[productBackup,setProductBackup] = useState([])
    useEffect(()=>{
        fetchData()
    },[url])
    const fetchData = async()=>{
        const data = await fetch(url)
        const json = await data.json()
        setProduct(json)
        setProductBackup(json)
    }
    return{product,setProduct,productBackup} 
}
export default useDatafetch