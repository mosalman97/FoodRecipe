import React,{useState} from "react"
import "./Login.css"
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../baseurl";



let Login = ()=>{
    const[username,setusername] = useState("")
    const[password,setPassword] = useState("")
    const[message,setMessage] = useState("")
    const history = useHistory();

    const Login = (event) =>{
        event.preventDefault();
        axios.post(`${BASE_URL}/auth/token/`,{username, password}).then((response)=>{
            let data =  response.data
            localStorage.setItem("user_data",JSON.stringify(data))
            history.push("/Home")
        }).catch((error)=>{
            console.log(error.response.data)
            if(error.response.status === 401){
                setMessage(error.response.data)
            }
        })
        
    }
    return(
        <div className="Container">
            <h1>Food Recipes</h1>
            <form onSubmit={Login}>
               <div className="text_field">
                  <input type="text" onChange={(e)=>setusername(e.target.value)} value={username}  placeholder="Email" />
               </div>
               <div className="text_field">
                  <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
               </div>
               <input className="button" type="submit"  value="LOGIN"  />
                <Link  to="/Signup" className="span">
                   <span>Create New Account</span>
                </Link>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default Login;