import { createContext, useContext, useState, useReducer } from "react";
import { ActionType, ChildrenType, CounterType, InitialStateType } from "../typing/Type";


const initialState:InitialStateType = {
    count: 0
}

const reducer = (state: InitialStateType,action: ActionType) => {
    const {type,payload} = action

    switch (type) {
        // case "increment":
        case CounterType.increse:
            return {count: state.count + payload}
            break;

        case CounterType.decrese:
            return {count: state.count - Number(payload)}
            break;
    
        default:
           return state;
    }
}

export const StateContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<ActionType>;
}>({state: initialState, dispatch: () => {} });

export const StateContextProvider = ({children}: ChildrenType) => {
    const [state,dispatch]= useReducer(reducer,initialState)

    return(
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)








