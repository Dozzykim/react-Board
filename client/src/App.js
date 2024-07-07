import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListPages from './pages/ListPages';
import ReadPages from './pages/ReadPages';
import UpdatePages from './pages/UpdatePages';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/boards' element={ <ListPages /> } />
        <Route path='/boards/:no' element={ <ReadPages /> } />
        <Route path='/boards/update/:no' element={ <UpdatePages /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
