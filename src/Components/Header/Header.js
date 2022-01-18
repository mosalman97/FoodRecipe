import React from 'react';
import  "./Header.css";

const Header = ()=>{
    return(
        <div className='header'>
            <span>Food Receipes</span>
            <nav>
                <button>Indian</button>
                <button>Italian</button>
            </nav>
        </div>
    )
}
export default Header;