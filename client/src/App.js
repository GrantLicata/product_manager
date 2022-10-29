import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
