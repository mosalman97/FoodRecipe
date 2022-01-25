import React,{useState} from "react"
import "./Login.css"


let Login = ()=>{
    return(
        <div className="center">
            <h1>Login</h1>
            <form>
                <div className="text_field">
                    <input type="text"   />
                    <label>Username</label>
                </div>
                <div className="text_field">
                    <input type="password"   />
                    <label>Password</label>
                </div>
            </form>
        </div>
    )
}

export default Login;