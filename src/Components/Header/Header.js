import React from 'react';
import  "./Header.css";

const Header = ()=>{
   let onButtonClick =()=>{
       console.log("button clicked")
   }
    return(
        <div className='header'>
            <span>Food Receipes</span>
            <nav>
                <button onClick={onButtonClick}>Indian</button>
                <button>Italian</button>
            </nav>
        </div>
    )
}
export default Header;