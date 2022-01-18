import React from 'react'
import "./Recipecard.css"
import  Clock from "../../../Assets/Logos/clock.png";
import User from "../../../Assets/Logos/users.png";

export default function Recipecard() {
    return (
        <div className='recipecard'>
            <div className='imagebox'></div>
            <span className='title'>Title</span>
            <div>
                <img src={Clock} alt="Clocklogo"/>
                <img src={User} alt="Userlogo" />
            </div>
        </div>
    )
}
