import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Data from './Data';
import Nav from './Nav';

function Add() {
    const DataContext  = useContext(Data);
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
    <Nav/>
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

export default Add;