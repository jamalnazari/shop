import React from "react"
import { useContext } from "react"
import { PRODUCTS } from "../../data/products"
import { shopcontext } from "../../context/shopcontext"
import Prudact from "../shop/prudact"

 const Cart =()=>{
   const {cartitem , resetitems,int} =useContext(shopcontext)
 return(
   <React.Fragment>
    <h1 className="cart cart-font">سبد خرید</h1>
    <div className="row">
      {PRODUCTS.map((p)=>{
        if(cartitem?.some((i)=> i.id===p.id && i.count >0 ))
         return <Prudact key={p.id} data={p}></Prudact>
      })}
    </div>
    {int?<div className="int">{int.toLocaleString()} تومان <button className="btnbg">پرداخت</button></div> :<p className="btnbg">سبد خرید شما خالیست</p> }
    <button className="btn btnbg btn-warnning m-3" onClick={()=>resetitems()}>reset</button>
    </React.Fragment>
 )
}
export default Cart