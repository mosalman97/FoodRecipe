import React from 'react'
import "./Recipecard.css"
import Clock from "../../../Assets/Logos/clock.png";
import User from "../../../Assets/Logos/users.png";

export default function Recipecard() {
    return (
        <div className='recipecard'>
            <div className='imagebox'></div>
            <span className='title'>Title</span>
            <div className='recipeinfo'>  
                <img src={Clock} alt="Clocklogo"/>
                <span>10 min</span>
                <img src={User} alt="Userlogo" />
                <span>4</span>
            </div>
        </div>
    )
}
