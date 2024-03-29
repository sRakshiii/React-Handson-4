import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Data from "../Data";
import Nav from "../Nav";
import "../App.css";

const Student = () => {
    const DataContext = useContext(Data);
    const nav = useNavigate();

    return(
        <>
        <Nav/>
        <h1>Student Datails</h1>
        <button className="addbtn" onClick={()=>{nav('/addnew')}}>Add New Student</button>
        <br/>
        <div className="table">
        <table border={"1px"} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {DataContext.entries.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td>
                            <Link to='/editStudent' state={{data:index}}>Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
        </div>
        </>
    )
}

export default Student;