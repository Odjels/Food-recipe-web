
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Favourites from './pages/favourites';
import Details from './pages/details';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-6oo text-lg">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favourites' element={ <Favourites/> }/>
          <Route path='/recipe-stuff/:id' element={<Details/>}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
