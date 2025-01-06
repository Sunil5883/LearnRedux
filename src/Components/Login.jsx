import React, { useState } from "react";
import Shopping from "./Shopping";

export default function Login({memo}) {
    const [click, setClick] = useState(false);
    if(click) {
        return(
            <Shopping memo = {memo}/>
        )
    }

    return(
        <div>
            <h1>Login Component</h1>
            <h2>{memo.username},
                {memo.balance}
            </h2>
            <button onClick={()=>{setClick(true)}}>Shopping</button>
        </div>
    )
}