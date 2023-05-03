import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     
      <div className="bg-red-100 flex flex-row h-screen justify-center items-center" >
        <button className='bg-green-400 w-[50px] h-[50px]' onClick={() => setCount((count) => count + 1)}>+
        </button>
        <div className='bg-red-100 w-[50px] h-[50px] text-center justify-center'>{count}</div>
        <button  className='bg-green-400 w-[50px] h-[50px]' onClick={() => setCount((count) => count - 1)}>-
        </button>
        
    
       
    
      </div>
    
    </>
  )
}

export default App
