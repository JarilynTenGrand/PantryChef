import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeList = ({ recipes }) => {
  return (
    <View style={styles.container}>
      {recipes.map((recipe) => (
        <View key={recipe.id} style={styles.card}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <Text style={styles.title}>{recipe.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 16 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
});

export default RecipeList;
