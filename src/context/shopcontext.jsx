import { createContext } from "react";

import { useCart } from "../hook/usecart";

export const shopcontext =createContext({  //مقادیری دیفالت برای مواقعی که پرووایدر توابع رو شناسایی نکنه میگذاریم:
    resetitems : ()=>{},
    cartitem : null ,      
    addtocart : ()=>{},     
    removformcart : ()=>{},
    
})
export const Shopcontextprovider =(props)=>{
    return <shopcontext.Provider value={useCart()}>
        {props.children}
        </shopcontext.Provider>
}