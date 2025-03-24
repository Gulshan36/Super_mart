import { useState, useCallback, useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook

  const passwordRef =useRef(null) 

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)// random number aise hi generate hota hai 
      pass += str.charAt(char)//
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard =useCallback( ()=>{
    passwordRef.current?.select()//  2it use for selction show 
    passwordRef.current?.setSelectionRange(0,9 )//  3aise aap ek rage tak hi password select kar sakye hao 
    window.navigator.clipboard.writeText(password) // 1 it is use for  copy the password 

  },[password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      {/* <h1 className='text-4xl text-center text-white '>Password Generator</h1> */}
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md text-center rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef }// yaha ham pass karte hai refrence jo select kar sake 
          />
          <button
          onClick={copyPasswordToClipboard }
            className='outline-none bg-blue-700 text-white pxv3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items - center  gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-point'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>

          </div>
          <div className="flex items-center gap-x-y">
            <input
              type="checkbox"
              defaulrChecke={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaulrChecke={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charcterInput'>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
