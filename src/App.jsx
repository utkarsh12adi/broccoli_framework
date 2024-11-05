import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let  [counter,setCounter] =useState(0)

 
 const addValue=()=>{
  setCounter(counter+1)
 }


  const subValue=()=>{

    if(counter>0){
    setCounter(counter-1)
  }
   }

 
 






  //let counter=7;
  

  return (
    <>
    
      <h1 className="text-3xl font-bold underline"> Counter click useState</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>&nbsp;&nbsp;&nbsp;
      <button onClick={subValue}>Add Value {counter}</button>
    </>
  )
}

export default App
