import { createContext, useState } from "react";

export const shopcontext = createContext(null)

export const Shopcontextprovider =(props)=>{
    const [cartitem , setcartitem] =useState([])

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
    const contextvalue = {cartitem ,addTocart,removeFormcart}

    return <shopcontext.Provider value={contextvalue}>{props.children}</shopcontext.Provider>
}