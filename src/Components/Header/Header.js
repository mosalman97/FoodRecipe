import React from 'react';
import  "./Header.css";

const Header = (props)=>{
    return(
        <div className='header'>
            <span>Food Receipes</span>
            <nav>
                <button onClick={(e)=>props.onRecipeSelect('Indian')}>Indian</button>
                <button onClick={(e)=>props.onRecipeSelect('Italian')}>Italian</button>
            </nav>
        </div>
    )
}
export default Header;