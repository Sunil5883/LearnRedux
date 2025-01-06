import React, { useState } from "react";
import Cart  from "./Cart";

export default function Shopping({memo}) {
    const [click, setClick] = useState(false);
    if (click){
        return (
            <Cart memo = {memo}/>
        )
    }
    return (
        <div>
            <h1>Shopping Component</h1>
            <button onClick={()=> {setClick(true)}}>Cart</button>
        </div>
    )
}