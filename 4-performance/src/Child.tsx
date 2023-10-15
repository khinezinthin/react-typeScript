import React, { useEffect } from 'react'

interface PropType{
    fetchData: () => void;
}

const Child = ({fetchData}:PropType) => {

    useEffect( () => {
       const fetchPd = async() => {
        const data = await fetchData();
        console.log(data);
       }  

       fetchPd()
    },[fetchData])

  return (
    <div></div>
  )
}

export default Child