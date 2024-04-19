import { useState, useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, SetPassword] = useState('');
  const passRef = useRef(null);
const copyPass = () =>
{
  window.navigator.clipboard.writeText(password);
  passRef.current?.select();
}
  const generatePassword = useCallback(() => {
 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "1234567890";
    if (CharAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    SetPassword(pass);
  }, [length, numberAllowed, CharAllowed]);


  useEffect(()=>
{
  generatePassword();
  
},[length,numberAllowed,CharAllowed])

  return (
    <div className='w-full mac-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-40'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={20} value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)} />
        <label htmlFor='length'>Length : {length}</label>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed}
            onChange={() => {
              setAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={CharAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Characters</label>

        </div>
      </div>

    </div>
  )
}

export default App
