import { useEffect, useReducer, useState } from "react";
import "./App.css";

function HookUseReducer() {

  const countReducer=(state,action)=>{
    switch(action.type){
        case "add":
            return {...state,count:state.count+1}
        case "sub":
            return {...state,count:state.count-1}
        default:
            return state;
            
    }
  }
const [state,dispatch]=useReducer(countReducer,{count:0});
  return (
    <div className="App">
      <button onClick={()=>{
          dispatch({type:"sub"})

      }}>-</button>
      <span>{state.count}</span>
      <button onClick={()=>{
        dispatch({type:"add"})
      }}>+</button>
    </div>
  );
}

export default HookUseReducer;
