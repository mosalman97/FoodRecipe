import React,{useEffect, useState} from 'react';
import "./Recipedetails.css"
import { Link,useParams } from 'react-router-dom';
// import sample from "../../../src/sample.Json";
export default function Recipedetails(props) {
  const[Recipeinfo,setRecipeinfo] = useState([])
  // const[details,setdetails] = useState({})
  const Api_Key =  "33743a6aa75243a9808c4a5e8f7cadb8";
  let {recipeID} = useParams()

  useEffect(()=>{
    fecthRecipeInformation();
  },[recipeID])
  let fecthRecipeInformation = async ()=>{
    let response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${Api_Key}`)
    let recipeData = await response.json()
    setRecipeinfo(recipeData)
    console.log(recipeData)
    
}

  return ( 
      <div className='recipedetails'>
         <Link to="/Home" ><div className='close'>X</div></Link>
         <div className='head'>
           <img className='head_image' src={Recipeinfo.image} alt=''/>
           <h3>{Recipeinfo.title}</h3>
         </div>
         <p dangerouslySetInnerHTML={{__html:Recipeinfo.summary}}></p>
      </div>
  )
}
