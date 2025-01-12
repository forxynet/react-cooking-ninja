import { BrowserRouter, Routes, Route } from 'react-router-dom';

// navbar
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

// styles
import './App.css'


//pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App
