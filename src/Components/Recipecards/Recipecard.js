import React from 'react'
import "./Recipecard.css"
import Clock from "../../Assets/Logos/clock.png";
import User from "../../Assets/Logos/users.png";
import { Link } from 'react-router-dom';


export default function Recipecard(props) {
    let {recipe} = props;
    return (
        <div className='recipecard'>
           <Link to={{pathname:`/recipe/${recipe.id}`
           }} className='linkcard'>
           <img src={recipe.image} alt="RecipeImage " className='imagebox'></img>
            <span className='title'>{recipe.title}</span>
            <div className='recipeinfo'>  
                <img src={Clock} alt="Clocklogo"/>
                <span>{recipe.readyInMinutes} min</span>
                <img src={User} alt="Userlogo" />
                <span>{recipe.servings}</span>
            </div>
           </Link>
        </div>
    )
}
