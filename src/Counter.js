import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const x = useSelector(state=>state.xyz);
    const dispatch = useDispatch();
  return (
    <>
      <h1> Counter App </h1>
      <h3> Count : {x} </h3>
      <button onClick={()=>dispatch({type:"increment"})}> Increment </button>
      <button onClick={()=>dispatch({type:"decrement"})}> Decrement </button>
    </>
  )
}

export default Counter;