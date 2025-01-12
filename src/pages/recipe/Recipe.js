import React from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useTheme } from '../../hooks/useTheme'

export default function Recipe() {
  const { mode } = useTheme()
  const { id } = useParams()
  const url = "https://node-server-json-db.onrender.com/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <Loader />}
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
