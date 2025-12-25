import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[characterAllowed, setCharacterAllowed] = useState(false)
  const[password, setPassword] = useState("")

  // useRef hook
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ASDFGHJKLasdfghjkl"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "~@#$%^&*" 

    for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPassworToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])



  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
          <div className=" flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} className=' outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly ref={passwordRef} />
            <button onClick={copyPassworToClipboard} className=' outline-none px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
              className=' cursor-pointer' type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e)=> {setLength(e.target.value)}}
               />
               <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex-items-center gap-x-1">
              <input 
              className=' cursor-pointer' type="checkbox"
              defaultChecked={numberAllowed}
              min={6}
              max={100}
              value={length}
              onChange={()=> {setNumberAllowed((prev) => !prev)}}
               />
               <label htmlFor="">Numbers</label>
            </div>
            <div className="flex-items-center gap-x-1">
              <input 
              className=' cursor-pointer' type="checkbox"
              defaultChecked={characterAllowed}
              min={6}
              max={100}
              value={length}
              onChange={()=> {setCharacterAllowed((prev) => !prev)}}
               />
               <label htmlFor="">Characters</label>
            </div>

          </div>
      </div>
    </>
  )
}

export default App
