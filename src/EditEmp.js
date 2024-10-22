import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editemp } from './reducer';

function EditEmp() {
    const emps = useSelector(state=>state.kuchbhi);
    const {someId} = useParams();
    const nav = useNavigate();
    const milChukaEmp = emps.find((emp)=>{return emp.id==someId});
    const [nm,setNm] = useState(milChukaEmp.name);
    const dispatch = useDispatch();
    const EditName = (e)=>{
        e.preventDefault();
        dispatch(editemp({id:someId,name:nm}));
        nav('/')
    }
  return (
    <>
    <form onSubmit={EditName}>
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

export default EditEmp;