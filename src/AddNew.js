import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ContextData from './ContextData';
import Navbar from './Navbar';

function AddNew() {
    const DataContext  = useContext(ContextData);
    const nav= useNavigate();
    const  newObj = {
        name:"",
        age:"",
        course:"",
        batch:""
    }
    const handleChange = (event)=>{
        newObj[event.target.name]=event.target.value;
    }
    const HandleSubmit=()=>{
        DataContext.entries.push(newObj);
        nav(-1);
    }
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="name" onChange={handleChange} placeholder='Name' />
    <input name="age" onChange={handleChange} placeholder='Age' />
    </div>
    <br/>
    <br/>
    <div className='formInput'>
    <input name="course" onChange={handleChange} placeholder='Course' />
    <input name="batch" onChange={handleChange} placeholder='Batch' />
    </div>
    <br/>
    <button onClick={HandleSubmit} className="subBtn">Submit</button>
    </>
  )
}

export default AddNew;