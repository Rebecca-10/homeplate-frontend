import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import * as recipeService from '../../services/recipeService';


const RecipeDetails = () =>{
    const {recipeId} = useParams();

    const [recipe, setRecipe] = useState(null);

    useEffect(()=>{
        const fetchRecipe = async () =>{
        const recipeData = await recipeService.show(recipeId)
        setRecipe(recipeData)
        }
        fetchRecipe();
    },[recipeId])

     if (!recipe) return <main>Loading...</main>;
    return (
    <main>
      <section>
        <header>
          <h1>{recipe.title}</h1>
          <p>
            {`${recipe.author.username} posted on
            ${new Date(recipe.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{recipe.description}</p>
      </section>
      <section>
        <h2>Comments</h2>
      </section>
    </main>
  );
}

export default RecipeDetails