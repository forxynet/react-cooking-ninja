import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { projectFirestore } from "../firebase/config"

import Trascan from '../asserts/trashcan.svg'

// styles
import './RecipeList.css'

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>
  }

  function handleDelete(id) {
    console.log('i am here delete ' + id)
    projectFirestore.collection('recipes').doc(id).delete()

  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img className='delete' src={Trascan} onClick={() => handleDelete(recipe.id)} />
        </div>
      ))}
    </div>
  )
}