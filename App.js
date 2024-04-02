import React, { useReducer } from 'react';
import './App.css';


function App() {
  // const[count,setCount]=useState(0)
  const initialState ={count :0}
  const reducer = (state, action) => {
    switch(action.type){
case "Increase" :{
  return{count : state.count +1}
}
case "Decrease" :{
  return{count : state.count -1}
}
default:{
  return state;
}
    }
// return{count : state.count +1}
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  const Increase=()=>{
// setCount(count+1)
dispatch({type: "Increase" })
  }
  const Decrease=()=>{
    // setCount(count-1)
    dispatch({type: "Decrease" })
      }
  return (
    <div className='App' >
     <h1>Counter</h1> 
     <h2>{state.count}</h2>
     <div>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
     </div>
    </div>
  );
}

export default App;
