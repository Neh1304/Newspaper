import logo from './logo.svg';
import './App.css';
import Add from './Add/Add';
import View from './View/View';
import Search from './Search/Search';
import Delete from './Delete/Delete';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Add/>}/>
      <Route path="/2" element={<View/>}/>
      <Route path="/3" element={<Search/>}/>
      <Route path="/4" element={<Delete/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
