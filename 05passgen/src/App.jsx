import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setAllowed] =useState(false);
  const [CharAllowed,setCharAllowed] =useState(false);
  const [password,SetPassword] = useState('');


  return (
    <div className='w-full mac-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-40'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={6} max={20} value={length}/>
    </div>
    </div>
  )
}

export default App
