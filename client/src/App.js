import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Main from './views/Main';
import ProductPage from './views/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/oneProduct/:id" element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
