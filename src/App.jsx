import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './store/recipeStore';

function App() {
  const recipeCount = useRecipeStore((state) => state.recipes.length);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      padding: '2rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '0.5rem',
            color: '#333'
          }}>
            Recipe Sharing App
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Share and discover amazing recipes
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span style={{
              background: '#dbeafe',
              color: '#1e40af',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              {recipeCount} {recipeCount === 1 ? 'Recipe' : 'Recipes'}
            </span>
          </div>
        </header>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}>
          <div>
            <AddRecipeForm />
          </div>
          <div>
            <RecipeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;