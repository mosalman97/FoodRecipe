import React,{useState} from "react"
import "./Login.css"


let Login = ()=>{
    const[username,setusername] = useState("")
    const[password,setPassword] = useState("")
    const uname = "admin"
    const pwd = "admin@123"

    const Login = (e) =>{
        e.preventDefault();
        if(username === uname && password === pwd){
            console.log("success");
            window.location.href = "/Home"
        }else{
            alert("Login Unsuccessfull");
        }
    }
    return(
        <div className="Container">
            <h1>Food App</h1>
            <form onSubmit={Login}>
               <div className="text_field">
                  <input type="text" onChange={(e)=>setusername(e.target.value)} value={username}  placeholder="Username" />
               </div>
               <div className="text_field">
                  <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
               </div>
               <input className="button" type="submit"  value="Sign In" />
            </form>
        </div>
    )
}

export default Login;