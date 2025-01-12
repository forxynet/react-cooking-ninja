import React from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
  const { id } = useParams()
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p>Loading..</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(item => <li key={item}>{item}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
