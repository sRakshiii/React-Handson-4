import React from 'react';
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Data from './Data';
import Nav from './Nav';

function Change() {
    const DataContext  = useContext(Data);
    const nav= useNavigate();
    const loc = useLocation().state.data;
    const currentData={
        name: DataContext.entries[loc].name,
        age: DataContext.entries[loc].age,
        course: DataContext.entries[loc].course,
        batch: DataContext.entries[loc].batch,
    }
    const handleChange = (event)=>{
        currentData[event.target.name]=event.target.value;
    }
    const HandleSubmit=()=>{
        DataContext.entries[loc]=currentData;
        nav(-1);
    }
    const cancel=()=>{
        nav(-1);
    }
  return (
    <>
    <Nav/>
    <br/>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="name" onChange={handleChange} placeholder={DataContext.entries[loc].name} />
    <input name="age" onChange={handleChange} placeholder={DataContext.entries[loc].age} />
    </div>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="course" onChange={handleChange} placeholder={DataContext.entries[loc].course} />
    <input name="batch" onChange={handleChange} placeholder={DataContext.entries[loc].batch} />
    </div>
    <br/>
    <button onClick={HandleSubmit} className="subBtn">Update</button>
    <button onClick={cancel} className="cancelBtn">Cancel</button>
    </>
  )
}

export default Change 