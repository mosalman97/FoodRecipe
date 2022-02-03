import React from 'react';
import  "./Header.css";
import { useHistory } from "react-router-dom";


const Header = (props)=>{
    const history = useHistory();
    let logout = (e)=>{
         e.preventDefault();
         localStorage.clear();
         history.push("/");
    }
    return(
        <div className='header'>
            <nav>
                <button onClick={(e)=>props.onRecipeSelect('Indian')}>Indian</button>
                <button onClick={(e)=>props.onRecipeSelect('Italian')}>Italian</button>
                <button onClick={(e)=>props.onRecipeSelect('Mexican')}>Mexican</button>
                <button onClick={(e)=>props.onRecipeSelect('Chinese')}>Chinese</button>
            </nav>
            <button className='logout_button' onClick={logout}>LOG OUT</button>
        </div>
    )
}
export default Header;