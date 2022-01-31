import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Login from "./Components/Login/Login";
import Recipecardwrapper from "./Components/Recipecards/Recipecardwrapper";
import Recipedetails from "./Components/Recipedetails/Recipedetails";

function App() {
    const [recipe, setRecipe] = useState(null);
    let onRecipeSelect = (recipe) => {
        setRecipe(recipe);
    };
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                  <Login />
                </Route>
                <Route path="/recipe/:recipeID">
                    <Recipedetails />
                </Route>
                <Route path="/Home">
                    <Header onRecipeSelect={onRecipeSelect} />
                    <Recipecardwrapper selectedRecipe={recipe} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
