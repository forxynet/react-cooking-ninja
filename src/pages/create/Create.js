import { useRef, useState } from 'react'

// style
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState()
  const [method, setMethod] = useState()
  const [cookingTime, setCookingTime] = useState()
  const [newIngredients, setNewIngredients] = useState()
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  function handleSubmit(e) {
    e.preventDefault();

    const recipe = { title, method, cookingTime }
    console.log(recipe)
  }

  function handleAdd(e) {
    e.preventDefault()

    const ing = newIngredients.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredients('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={ingredientInput}
              required
            />
            <button className='btn' onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(item => <em key={item}>{item},</em>)}</p>
        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input type="text"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button
          className='btn'
          type="submit"
        >
          Submit
        </button>

      </form>
    </div>
  )
}
