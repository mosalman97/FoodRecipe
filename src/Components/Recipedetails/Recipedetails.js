import React from 'react';
import "./Recipedetails.css"
import {Link} from "react-router-dom"
export default function Recipedetails(props) {
  return (
      <div className='recipedetails'>
        <Link to="/"><div className='close'>X</div></Link>  
      </div>
  )
}
