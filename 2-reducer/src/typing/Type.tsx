export interface ChildrenType{
    children: React.ReactNode
}

export interface InitialStateType{
    count: number
}

export enum CounterType{
    increse = "increment",
    decrese = "decrement"
}

export interface ActionType{
        // type: string
        type: CounterType
        payload: number
    }
