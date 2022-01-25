import React,{useState} from "react"
import "./Login.css"


let Login = ()=>{
    return(
        <div className="Container">
            <h1>Login</h1>
            <form>
               <div className="text_field">
                  <input type="text" placeholder="Username"  value="" />
               </div>
               <div className="text_field">
                  <input type="password" placeholder="Password"  value="" />
               </div>
               <input className="button" type="button"  value="Sign In" />
            </form>
        </div>
    )
}

export default Login;