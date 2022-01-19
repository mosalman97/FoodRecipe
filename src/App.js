import React,{useState} from "react";
import Header from "./Components/Header/Header";
import Recipecardwrapper from "./Components/Header/Recipecards/Recipecardwrapper";

function App() {
  const[recipe,setRecipe] = useState(null)
  let onRecipeSelect =(recipe)=>{
     setRecipe(recipe)
  }
  return (
    <div>
      <Header onRecipeSelect={onRecipeSelect} />
      <Recipecardwrapper selectedRecipe={recipe} />
    </div>
  );
}

export default App;
