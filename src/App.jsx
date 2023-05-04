import React from 'react'

import Counter from './components/Counter'

function App() {
  const [num, setNum] = React.useState(0)
 
  return (
    <>
      <div className="bg-green-500 flex flex-col h-screen justify-center items-center gap-4" >
      <div className="bg-gray-700 w-[40px] h-[35px] flex justify-center items-center text-white rounded-[10px]">
      {num}
      </div>
     <Counter onChangeNumber={setNum}/>
      </div>
    
    </>
  )
}

export default App
