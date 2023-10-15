import React, { useState } from 'react'

const useCounter = (defaultValue: number) => {
    const [count,setCount] = useState<number>(defaultValue)
    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }
    
    return {count, increase, decrease};
  
}

export default useCounter