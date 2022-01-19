import React,{useEffect} from 'react'
import Recipecard from './Recipecard'
const Api_Key =  "3b6e4bb137d84febaff4d16ab716b696";
export default function Recipecardwrapper(props) {
     useEffect(()=>{
       if(props.selectedRecipe) fecthApi()
     },[props.selectedRecipe])
     let fecthApi = async ()=>{
         let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&cuisine=${props.selectedRecipe}&addRecipeInformation=true&number=1`)
         let recipeData = await response.json()
         console.log(recipeData)

     }
    return (
        <div>
            <Recipecard />
        </div>
    )
}
