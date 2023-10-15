import React, { useMemo, useState } from 'react'

const MemoTest = () => {
    const [count,setCount] = useState<number>(0)
    const [num,setNum] = useState<number>(0)

    const test = (num: number)=>{
      console.log("num");
      return num
    }
    // test(2)

    // thu htl ka num pyn ll hma hta lote useMemo ma use buu so ta chr state twy pyg ll yin thu br hta a lote lote 
    useMemo(() => {
    test(num)
    },[num])

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>count click</button>
        <p>{num}</p>
        <button onClick={()=>setNum(num + 1)}>num click</button>
    </div>
  )
}

export default MemoTest