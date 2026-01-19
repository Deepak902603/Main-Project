import React from 'react'
import { useEffect,useState } from 'react'

function App(){

  const [state,setState]=useState("Loading......");

  const fetchState=async()=>{
    const res=await fetch("http://localhost:5000/state");
    const data=await res.json();
    setState(data.state);
  }

  const updateState=async(newState)=>{
    await fetch("http://localhost:5000/state",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({state:newState})
  })
  fetchState();
}
const stateColor={
  Running:"bg-green-500",
  Down:"bg-red-500",
  Maintenance:"bg-yellow-400"
}[state];

useEffect(()=>{
  fetchState();
},[]);
  return(
  <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Server State</h2>

        <div
          className={`text-white py-3 rounded-md mb-4 ${stateColor}`}
        >
          {state}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => updateState("Running")}
            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
          >
            Running
          </button>

          <button
            onClick={() => updateState("Down")}
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          >
            Down
          </button>

          <button
            onClick={() => updateState("Maintenance")}
            className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500"
          >
            Maint.
          </button>
        </div>
      </div>
    </div>
  </>
  )
}
export default App;