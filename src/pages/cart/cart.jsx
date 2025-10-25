import React from "react"
import { useContext } from "react"
import { PRODUCTS } from "../../data/products"
import { shopcontext } from "../../context/shopcontext"
import Prudact from "../shop/prudact"
 const Cart =()=>{
   const {cartitem} =useContext(shopcontext)
 return(
   <React.Fragment>
    <h1 className="cart">youre cart items</h1>
    <div className="row">
      {PRODUCTS.map((p)=>{
        if(cartitem.some((i)=> i.id===p.id && i.count >0 ))
         return <Prudact data={p}></Prudact>
      })}
    </div>
    </React.Fragment>
 )
}
export default Cart