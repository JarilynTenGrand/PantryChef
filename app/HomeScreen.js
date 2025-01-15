import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import RecipeList from '../components/RecipeList';
import useRecipes from '../hooks/useRecipes';

const HomeScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const { recipes, error } = useRecipes(ingredients);

  const handleSearch = () => {
    if (ingredients.trim()) setIngredients(ingredients.trim());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients (e.g., apple, flour)"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <Button title="Find Recipes" onPress={handleSearch} />
      {error && <Text>Error fetching recipes: {error.message}</Text>}
      <RecipeList recipes={recipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 8, borderRadius: 4 },
});

export default HomeScreen;
