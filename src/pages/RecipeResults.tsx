import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Layout } from '../layout';

const RecipeResults = () => {
  const recipes = [
    {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      ingredients: [
        { name: 'Spaghetti', quantity: '200g' },
        { name: 'Pancetta', quantity: '100g' },
        { name: 'Eggs', quantity: '2' },
        { name: 'Parmesan Cheese', quantity: '50g' },
        { name: 'Black Pepper', quantity: 'to taste' },
      ],
      instructions: [
        'Boil the spaghetti in salted water.',
        'Fry the pancetta until crispy.',
        'Beat the eggs and mix with cheese and pepper.',
        'Combine spaghetti with pancetta and egg mixture.',
      ],
      cookingTime: '20 minutes',
      difficulty: 'Intermediate',
    },
    // Add more recipes as needed
  ];

  return (
    <Layout showSidebar={false} showHeader={true} showFooter={true} sidebarConfig={{ items: [] }} header={false} footer={false}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <header className="w-full py-4 bg-primary text-center text-white">
          <h1 className="text-2xl font-bold">Recipe Results</h1>
        </header>

        <main className="flex flex-col items-center mt-8">
          {recipes.map((recipe, index) => (
            <Card key={index} className="mb-4 p-4 w-3/4">
              <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
              <p className="mb-2">{recipe.description}</p>
              <h3 className="font-semibold">Ingredients:</h3>
              <ul className="list-disc list-inside mb-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient.quantity} {ingredient.name}</li>
                ))}
              </ul>
              <h3 className="font-semibold">Instructions:</h3>
              <ol className="list-decimal list-inside mb-2">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
              <p>Cooking Time: {recipe.cookingTime}</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <div className="flex justify-end mt-4">
                <Button className="mr-2">Save</Button>
                <Button>Print</Button>
              </div>
            </Card>
          ))}
          <Button className="mt-4 bg-secondary text-white px-4 py-2 rounded" onClick={() => window.location.href = '/'}>
            Try Again
          </Button>
        </main>
      </div>
    </Layout>
  );
};

export default RecipeResults;
