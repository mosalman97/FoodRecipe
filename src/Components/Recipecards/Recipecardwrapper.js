import React,{useEffect,useState} from 'react'
import Recipecard from "./Recipecard"
import "./Recipecard.css"


const Api_Key =  "33743a6aa75243a9808c4a5e8f7cadb8";
export default function Recipecardwrapper(props) {
 
    const[recipes,setRecipes] = useState([])
     useEffect(()=>{  
       if(props.selectedRecipe) fecthApi();
     },[props.selectedRecipe])
     let fecthApi = async ()=>{
         let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=10`)
         let recipeData = await response.json()
         setRecipes(recipeData.results)
        //  console.log(recipeData.results)
     }
     
    return (
        <div className='recipeWrapper'>
           {
               recipes.map(recipe=><Recipecard  key={recipe.id} recipe={recipe} />)
           }
           
        </div>
    )
}
