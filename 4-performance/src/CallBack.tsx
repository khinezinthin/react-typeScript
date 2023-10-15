import React, { useCallback, useEffect, useState } from 'react'
import Child from './Child';

const CallBack = () => {
    const [count,setCount] = useState(0);
    const [pdNo,setPdNo] = useState(1);

    const fetchData = useCallback(async() => {
        const api = await fetch(`https://dummyjson.com/products/${pdNo}`);
        const data = await api.json();
        // console.log(data);
        return data;
    },[pdNo])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <br />

        <button onClick={() => setPdNo(pdNo + 1)}>pdNo increase</button>

        <Child fetchData={fetchData}/>
    </div>
  )
}

export default CallBack