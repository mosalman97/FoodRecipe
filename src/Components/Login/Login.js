import React,{useState} from "react"
import "./Login.css"


let Login = ()=>{
    const[username,setusername] = useState("")
    const[password,setPassword] = useState("")
    
    return(
        <div className="Container">
            <h1>Food App</h1>
            <form>
               <div className="text_field">
                  <input type="text" onClick={(e)=>setusername(e.target.value)} value={username} />
                  <label>Username</label>
               </div>
               <div className="text_field">
                  <input type="password"  onClick={(e)=>setPassword(e.target.value)} value={password} />
                  <label>Password</label>
               </div>
               <input className="button" type="button"  value="Sign In" />
            </form>
        </div>
    )
}

export default Login;