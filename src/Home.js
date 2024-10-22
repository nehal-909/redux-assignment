import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteEmp } from './reducer';

function Home() {
    const employees = useSelector((state)=>state.kuchbhi);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const ViewEmp = (anything)=>{
       nav('/view/' + anything); 
    }
    const EditName = (anything)=>{
        nav('/edit/' + anything);
    }
    const deleteEmpl = (anything)=>{
        dispatch(deleteEmp({id:anything}));
    }
  return (
    <>
    <h3> Home </h3>
    <Link to='/add'> Add New </Link>
    <table align='center' border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp)=>(
                <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>
                        <button onClick={()=>{ViewEmp(emp.id)}}>View</button>
                        <button onClick={()=>{EditName(emp.id)}}>Edit</button>
                        <button onClick={()=>{deleteEmpl(emp.id)}}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Home;