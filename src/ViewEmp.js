import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function ViewEmp() {
    const emp = useSelector(state=>state.kuchbhi);
    const {someId} = useParams();
    //console.log(emp);
    const milgyaEmp = emp.find((em)=>{return (em.id==someId)});
    //console.log(milgyaEmp);
  return (
    <>
     <Link to='/'> Go back </Link>
    <h2> ViewEmp {someId} </h2>
    <h3> {milgyaEmp.name} </h3>
    </> 
  )
}

export default ViewEmp;