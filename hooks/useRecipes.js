import { useState, useEffect } from 'react';

const useRecipes = (ingredients) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=YOUR_API_KEY`
        );
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err);
      }
    };

    if (ingredients) fetchRecipes();
  }, [ingredients]);

  return { recipes, error };
};

export default useRecipes;
