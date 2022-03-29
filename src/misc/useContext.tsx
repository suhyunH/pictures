import React, { useState, createContext } from 'react';
import data from "../misc/mock-data.json"
import { Data } from './model';

type ImageContextProviderProps={
    children : React.ReactNode
}

type ImageContextProps={
    state: Data[];
    setState: React.Dispatch<React.SetStateAction<Data[]>>
}

export const ImageContext = createContext<ImageContextProps>({} as ImageContextProps);


export const ImageContextProvider = ({children}:ImageContextProviderProps)=>{
    const [state, setState] = useState([data.renderings][0])
    return <ImageContext.Provider value={{ state, setState}}>
        {children}
    </ImageContext.Provider>

}


//

type SelectedCardsProviderProps={
    children : React.ReactNode
}
type SelectedCardsProps={
    cards: number[] | null;
    setCards: React.Dispatch<React.SetStateAction<number[] | null>>
}

export const CardContext = createContext<SelectedCardsProps>({} as SelectedCardsProps)

export const SelectedCardsProvider = ({children}:SelectedCardsProviderProps)=>{
    const [cards, setCards] = useState<number[] | null>(null);

    return <CardContext.Provider value={{ cards, setCards}}>
        {children}
    </CardContext.Provider>

}

//
type CounterProviderProps={
    children : React.ReactNode
}
type CounterProps={
    count: number | null;
    setCount: React.Dispatch<React.SetStateAction<number | null>>
}

export const CounterContext = createContext<CounterProps>({} as CounterProps)

export const CounterProvider = ({children}:CounterProviderProps)=>{
    const [count, setCount] = useState<number | null>(null);
    return <CounterContext.Provider value={{ count, setCount}}>
        {children}
    </CounterContext.Provider>

}

