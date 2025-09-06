import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Recipe Collection
      </h2>
      {recipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
          No recipes yet. Add your first recipe!
        </p>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              style={{
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {recipe.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.5' }}>
                {recipe.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;