import React,{useEffect,useState} from 'react'
import Recipecard from "./Recipecard"
import "./Recipecard.css"
const Api_Key =  "dde82b867e0d42caa192f5c5f549fb19";
export default function Recipecardwrapper(props) {
    const[recipes,setRecipes] = useState([])
     useEffect(()=>{  
       if(props.selectedRecipe) fecthApi();
     },[props.selectedRecipe])
     let fecthApi = async ()=>{
         let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=10`)
         let recipeData = await response.json()
         setRecipes(recipeData.results)
         console.log(recipeData)
     }
     
    return (
        <div className='recipeWrapper'>
           {
               recipes.map(recipe=><Recipecard  key={recipe.id} recipe={recipe} />)
           }
           
        </div>
    )
}
