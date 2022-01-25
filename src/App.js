import React,{useState} from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from "../src/Components/Header/Header"
import Login from "./Components/Login/Login";
import Recipecardwrapper from "./Components/Recipecards/Recipecardwrapper"

function App() {
  const[recipe,setRecipe] = useState(null)
  let onRecipeSelect =(recipe)=>{
     setRecipe(recipe)
  }
  return (
    
       <Router>
         <Switch>
         <Route path="/" exact>
            <Login />
          </Route>
         <Header onRecipeSelect={onRecipeSelect} />
         <Recipecardwrapper selectedRecipe={recipe} />   
         </Switch>
         
     </Router>
     
 
  )
}

export default App;
