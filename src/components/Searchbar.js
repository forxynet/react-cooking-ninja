import { useState } from 'react'
import { useNavigate } from 'react-router';

// styles
import './Searchbar.css'

export default function Searchbar() {
  const [term, setTerm] = useState('');

  let navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search </label>
        <input
          type="text"
          id='serach'
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  )
}
