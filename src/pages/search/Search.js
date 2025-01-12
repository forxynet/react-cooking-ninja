import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'

import './Search.css'
import Loader from '../../components/Loader'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = "https://node-server-json-db.onrender.com/recipes?q=" + query
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      {query && <h2 className="page-title">Recipes including "{query}"</h2>}
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"><Loader /></p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}