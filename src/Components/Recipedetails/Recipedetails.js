import React,{useEffect, useState} from 'react';
import "./Recipedetails.css"
import { Link,useParams } from 'react-router-dom';
export default function Recipedetails(props) {
  const[Recipeinfo,setRecipeinfo] = useState([])
  const Api_Key =  "dde82b867e0d42caa192f5c5f549fb19";
  let {recipeId} = useParams()
  useEffect(()=>{
    fecthRecipeInformation();
  },[recipeId])
  let fecthRecipeInformation = async ()=>{
    let response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${Api_Key}`)
    let recipeData = await response.json()
    setRecipeinfo(recipeData.results)
}
  return ( 
      <div className='recipedetails'>
         <Link to="/" ><div className='close'>X</div></Link>
      </div>
  )
}
