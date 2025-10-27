import { useEffect, useState } from "react"

export const useCart  =()=>{
    const [cartitem , setcartitem]=useState()

    useEffect(()=>{
      const data = localStorage.getItem("jimi")
      setcartitem(!!JSON.parse(data) ? JSON.parse(data) : [])
    } , [])
    
    useEffect(()=>{
      if(cartitem !==undefined)
      localStorage.setItem('jimi' , JSON.stringify
        (cartitem))
    } , [cartitem])
    const addTocart =(itemid)=>{
        if(!cartitem.find((item)=>item.id===itemid))
           setcartitem([...cartitem , {id :itemid , count : 1}])
        else
        setcartitem(cartitem.map((item) =>{
          if(item.id=== itemid)
            return {...item , count :item.count + 1}
          else return item
        }))
    }
    const removeFormcart =(itemid)=>{
       setcartitem(cartitem.map ((i)=>{   
        if(i.id ===itemid)    
            return{...i , count :i.count===0? 0 : i.count -1} 
        else return i
       }))
    }
    const resetitems=()=>{
     setcartitem();
     localStorage.removeItem("jimi")

    }
    return {cartitem,addTocart,removeFormcart,resetitems}
}