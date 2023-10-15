import React, { useCallback, useEffect, useState } from 'react'

const useFetch = (url: string) => {
    const [items,setItems] = useState<{}[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean>(false)

    useEffect(() =>{
        getItems()
    },[])

    const getItems = useCallback(async() => {
        try{
            setLoading(true)
            const api = await fetch(url);
            const data = await api.json()
            setItems(data)
            setLoading(false)
        }catch(error){
            setError(true)
        }
    }, [])

  return {items, loading, error}
}

export default useFetch