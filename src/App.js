import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import Student from './Routing/Student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
