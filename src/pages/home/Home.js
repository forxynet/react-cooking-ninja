import { useFetch } from '../../hooks/useFetch'

// style
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const { data, isPending, error } = useFetch('https://node-server-json-db.onrender.com/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading..</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
