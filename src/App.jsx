import { useState } from "react"
import data from "./data"
import Hello from "./Hello"

function App() {

  const [open,setopen]=useState(data)



  return (
    <>
   <div className=" bg-red-500 text-white text-center">
    <h2 className=" text-2xl">Faq</h2>
    { 
      open.map((item,index)=>(<Hello key={index}  {...item}/>))
    }
   </div>
     
    </>
  )
}

export default App
