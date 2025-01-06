import React ,{ useState } from "react"
import Login from "./Login";
export default function Index() {
    
    const memo = {
        username: "Sunil",
        balance: 25000
    }
    const [click, setClick] = useState(false);
    if(click) {
        return(
            <Login memo = {memo}/>
        )
    }
    return(
        <div>
            <h1> Index Component </h1>
            <button onClick={()=> {setClick(true)}}>Login</button>
        </div>
    )
}