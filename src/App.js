import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Routing/Home';
import Contact from './Routing/Contact';
import Student from './Routing/Student';
import Data from './Data';
import { useState } from 'react';
import Add from './Add';
import Change from './Change';

function App() {
  const [data, setData] = useState([{name:"Akash", age:22, course:"MERN", batch:"November"},{name:"John", age:24, course:"MERN", batch:"September"},{name:"Mohan", age:21, course:"MERN", batch:"November"},{name:"Ajay", age:25, course:"MERN", batch:"October"}]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={
          <Data.Provider value={{entries:data, updateFun:setData}}>
          <Student/>
        </Data.Provider>
        }/>

        <Route path='/addnew' element={
          <Data.Provider value={{entries:data, updateFun:setData}}>
          <Add/>
        </Data.Provider>
        }/>

        <Route path='/editStudent' element={
          <Data.Provider value={{entries:data, updateFun:setData}}>
          <Change/>
        </Data.Provider>
        }/>

        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;