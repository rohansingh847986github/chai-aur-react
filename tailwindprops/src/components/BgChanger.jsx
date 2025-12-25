import { useState } from "react"

const BgChanger = () => {

    const [color, setColor] = useState("olive")

  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
         <button className=" outline-none px-4 py-1 rounded-2xl" onClick={()=> setColor("red")}>Red</button>
         <button lassName=" outline-none px-4 py-1 rounded-2xl" onClick={()=> setColor("blue")}>Blue</button>
         <button lassName=" outline-none px-4 py-1 rounded-2xl" onClick={()=> setColor("yellow")}>Yellow</button> 
       </div>
      </div>
    </div>
  )
}

export default BgChanger
