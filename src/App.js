
import './App.css';
import GenreScreen from './Screen/GenreScreen';
import MovieScreen from './Screen/MovieScreen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
                <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieScreen></MovieScreen>}></Route>
          <Route path='/setting'element={<GenreScreen></GenreScreen>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
