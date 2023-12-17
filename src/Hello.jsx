import { useState } from "react"


function Hello({title,des}) {
  
    const [show,setshow]=useState(false)


  return (
    <>
 <div >
        <div className="border-b py-7 px-10 w-[400px] text-center  bg-black mx-auto ">
        <div className="flex justify-between bg-purple-500  px-10 ">
        <h2>{title}</h2>
        <button onClick={()=>setshow(!show)}  className="px-2 bg-red-700  text-white">{show ? "Hide" : "Click ME"}</button>
        </div>
        
        {
            show && 
            <p>{des}</p>
        }
   
        </div>
       </div>
     
    </>
  )
}

export default Hello
