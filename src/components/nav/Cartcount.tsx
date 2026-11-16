"use client"

import { useCart } from "../../context/CartContext"

export default function Cartcount(){
    const {cart}=useCart()
    return(
        <div>
            <span>{cart.length}</span>
        </div>
    )
}   