import React, { ChangeEvent, useCallback, useState } from 'react'

interface InputType{
    [key: string]: string;
}

const useInput = (initialstate: InputType) => {
    const [input,setInput] = useState(initialstate)

    const changeInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        const {name,value} = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    },[input])

  return {input, changeInputHandler}
}

export default useInput