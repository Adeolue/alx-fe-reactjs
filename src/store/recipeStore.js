import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Chocolate Chip Cookies",
      description: "Delicious homemade chocolate chip cookies with a crispy edge and chewy center."
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper."
    }
  ],
  addRecipe: (newRecipe) => 
    set((state) => ({ 
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
    })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;