import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Layout } from '../layout';

const HomePage = () => {
  const [expertise, setExpertise] = useState('Beginner');
  const [ingredients, setIngredients] = useState('');

  const handleGenerateRecipes = () => {
    // Logic to generate recipes based on expertise and ingredients
  };

  return (
    <Layout showSidebar={false} showHeader={true} showFooter={true} sidebarConfig={{ items: [] }} header={false} footer={false}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <header className="w-full py-4 bg-primary text-center text-white">
          <h1 className="text-2xl font-bold">Chef AI</h1>
          <nav className="mt-2">
            <a href="/" className="mx-2">Home</a>
            <a href="/about" className="mx-2">About</a>
            <a href="/contact" className="mx-2">Contact</a>
          </nav>
        </header>

        <main className="flex flex-col items-center mt-8">
          <h2 className="text-xl mb-4">Generate Recipes</h2>
          <Select value={expertise} onValueChange={(value) => setExpertise(value)} onChange={(e) => setExpertise(e.target.value)} className="mb-4">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </Select>
          <Input
            type="text"
            placeholder="List your ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleGenerateRecipes} className="bg-secondary text-white px-4 py-2 rounded">
            Generate Recipes
          </Button>
        </main>

        <footer className="w-full py-4 bg-primary text-center text-white mt-auto">
          <div className="flex justify-center space-x-4">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <p className="mt-2">Contact us at: info@chefai.com</p>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;
