import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/oneProduct/:id" element={<Detail />}/>
          <Route path="/update/:id" element={<Edit />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
