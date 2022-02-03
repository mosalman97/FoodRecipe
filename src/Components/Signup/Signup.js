import React,{useState} from "react";
import "./Signup.css";

function Signup() {
    const[username,setusername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    return (
        <div className="Container">
            <h1>Food Recipes</h1>
            <form>
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
                <input className="button" type="submit" value="Sign In" />
            </form>
        </div>
    );
}

export default Signup;
