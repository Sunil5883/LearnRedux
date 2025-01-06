import React ,{ useState } from "react";
import Payment from "./Payment";

export default function Cart({memo}) {
    const [click, setClick] = useState(false);
    if(click) {
        return(
            <Payment memo = {memo}/>
        )
    }
    return(
        <div>
        <h1>Cart Component</h1>
        <button onClick= {()=>{setClick(true)}}>
            Payment
        </button>
        </div>
    )
}