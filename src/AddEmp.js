import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { nehal } from './reducer';

let index = 2;
function AddEmp() {
    const [nm,setNm] = useState("");
    const nav = useNavigate();
    const dispatch = useDispatch();
    const addNew = (e)=>{
        e.preventDefault();
        dispatch(nehal({id:index++,name:nm}));
        nav('/')
    }
  return (
    <>
    <Link to='/'> Go Back </Link>
    <h2> AddEmp </h2>
     <form onSubmit={addNew}>
        <div>
            <label>Name:</label>
            <input type='text' value={nm} onChange={(e)=>{setNm(e.target.value)}}/>
        </div>
        <div>
            <input type='submit'/>
        </div>
     </form>
    </>
  )
}

export default AddEmp;