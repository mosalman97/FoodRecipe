import React,{useState} from "react";
import "./Signup.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../baseurl"

function Signup() {
    const[username,setusername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] = useState("")
    const history = useHistory();


    const handlesubmit = (event)=>{
        event.preventDefault();
        axios.post(`${BASE_URL}/auth/register/`,{first_name:username,email,password}).then((response)=>{
            console.log(response.data.data)
            let data = response.data.data;
            let statusCode = response.data.StatusCode;
            if(statusCode === 6000){
                localStorage.setItem("user_data",JSON.stringify(data))
                history.push("/Home")
            }else{
                setMessage(response.data.message)
            }
            
        })
    }
    return (
        <div className="Container">
            <h1>Food Recipes</h1>
            <form onSubmit={handlesubmit}>
                <div className="text_field">
                    <input
                        type="text"
                        onChange={(e)=>setusername(e.target.value)}
                        value={username}
                        placeholder="Username"
                    />
                </div>
                <div className="text_field">
                    <input
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                    />
                </div>
                <div className="text_field">
                    <input
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                    />
                </div>
                <input className="button" type="submit" value="SIGN UP" />
                <p>{message}</p>
            </form>
        </div>
    );
}

export default Signup;
