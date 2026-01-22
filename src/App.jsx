import * as recipeService from './services/recipeService'

import Homepage from './components/Homepage/Homepage';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

import './App.css'

import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';

const App = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    const fetchAllRecipes = async () =>{
      const recipesData = await recipeService.index();
      setRecipes(recipesData)
    }
    fetchAllRecipes()
  },[])

  return(
    <>
      <Routes>
        <Route path='/recipes' element={<Homepage recipes={recipes}/>}/>
        <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
      </Routes>
    </>
  );
};

export default App;
