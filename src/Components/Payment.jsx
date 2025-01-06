import React, { useState } from "react";

export default function Payment({memo}) {
    const [click,setClick] = useState(false);
    if(click){
        return(
            <>
            <h2>{memo.username},{memo.balance}</h2>
            <button onClick={()=>{setClick(true)}}>Pay</button>
            <h3>Updated Balance: {memo.balance-5000}</h3>
            </>
        )
    }

    return (
        <div>
            <h1>Payment Component</h1>
            <h2>{memo.username}, 
                {memo.balance}
                </h2>
            <button onClick={()=>{setClick(true)}}>Pay</button>
        </div>
    )
}