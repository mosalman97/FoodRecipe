import React,{useState,useEffect} from "react";
import Header from "../src/Components/Header/Header"
import Recipecardwrapper from "./Components/Recipecards/Recipecardwrapper"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  const[recipe,setRecipe] = useState(null)
  let onRecipeSelect =(recipe)=>{
     setRecipe(recipe)
  }
  return (
    <Router>
      <div>
      <Header onRecipeSelect={onRecipeSelect} />
      <Recipecardwrapper selectedRecipe={recipe} />
      </div>
    </Router>
  );
}

export default App;
