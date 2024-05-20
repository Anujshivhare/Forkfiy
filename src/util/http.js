import axios from "axios";

export async function fetchRecipes({ searchTerm, signal }) {
  const response = await axios.get(
    "https://forkify-api.herokuapp.com/api/v2/recipes",
    {
      params: {
        search: searchTerm,
      },
      signal,
    }
  );

  if (response.data.results === 0) {
    throw new Error("No recipes found for your query");
  }

  return response.data.data.recipes;
}

export async function fetchRecipe({ id, signal }) {
  const response = await axios.get(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
    {
      signal,
    }
  );

  return response.data.data.recipe;
}

export async function postRecipe({ recipe }) {
  const apiKey = import.meta.env.VITE_FORKIFY_API_KEY;

  console.log(recipe);

  // Format ingredients before sending the POST request
  const formattedIngredients = recipe.ingredients.map((ingredient) => {
    const [quantity, unit, description] = ingredient.split(",");
    return { quantity: quantity ? +quantity : null, unit, description };
  });

  const postData = {
    title: recipe.title,
    source_url: recipe.sourceUrl,
    image_url: recipe.image,
    publisher: recipe.publisher,
    cooking_time: recipe.cookingTime,
    servings: recipe.servings,
    ingredients: formattedIngredients,
    key: apiKey,
  };

  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to add recipe. Please try again.");
  }

  return await response.json();
}
