import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'

interface InitialStateType{
    [key: string]: string;
}

type SubmitType = () => void


const useForm = (initialState: InitialStateType, onSubmit: SubmitType) => {
    const [formState,setFormState] = useState<InitialStateType>(initialState)
    const [error,setError] = useState<InitialStateType>({})

    const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]:value
        }))
    },[])

    const submitHandler = useCallback((e: FormEvent) => {
        e.preventDefault()
        try{
         onSubmit();
        }catch(error){
            if(error instanceof Error){
                setError({form: error.message})
            }else{
                setError({form: "not found"})
            }
        }
    },[])

  return {error, formState, inputChangeHandler, submitHandler}
}

export default useForm