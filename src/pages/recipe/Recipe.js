import { useState, useEffect } from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
  const { mode } = useTheme()
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    }, (err => {
      setError(err.message)
      setIsPending(false)
    }))

    return () => unsub()
  }, [id])

  function handleUpdate() {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Updated Title'
    })
  }

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
          <button onClick={handleUpdate}>Update me</button>
        </>
      )}
    </div>
  )
}
