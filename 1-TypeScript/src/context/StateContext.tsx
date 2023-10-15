import { createContext, useContext, useState } from "react";

interface ChildrenType{
    children: React.ReactNode
}
// 1/ 2/ 3
// interface StateContextType{
//     count: number
//     setCount: React.Dispatch<React.SetStateAction<number>>
// }

// 4
export interface StateContextType{
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    color: string
    setColor: React.Dispatch<React.SetStateAction<string>>
}

// {count} so pee ho bat ka u yin ma ya br lox ll so sa sa chin hmr null phit nay lox thu type ka ma shi ta lo phit ny tr 
// export const StateContext = createContext< StateContextType | null>(null);

// 1 2 3
// export const StateContext = createContext< StateContextType >({} as StateContextType);

// 4
export const StateContext = createContext< StateContextType | null>(null);


export const StateContextProvider = ({children}: ChildrenType) => {
    const [count,setCount] = useState<number>(0);
    const [color,setColor] = useState<string>("")

    // 2
    // const data = {count, setCount}

    // 3
    const data: StateContextType = {count, setCount, color, setColor}

    return(
        // 1
        // <StateContext.Provider value={{count, setCount}}>
        //     {children}
        // </StateContext.Provider>

        // 2
        // <StateContext.Provider value={data}>
        //     {children}
        // </StateContext.Provider>

        // 3 / 4
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)








