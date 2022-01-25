import React,{useState} from "react"
import "./Login.css"


let Login = ()=>{
    return(
        <div className="Container">
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
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;