import React from 'react'

interface CountFun{
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Child2 = ({setCount}: CountFun) => {
  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>Click</button>
    </div>
  )
}

export default Child2