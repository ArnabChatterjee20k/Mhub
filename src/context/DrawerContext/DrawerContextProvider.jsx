import React from 'react'
import { useState , useContext } from 'react';

const DrawerContext = React.createContext();

export const useDrawer = ()=>{
    return useContext(DrawerContext)
}

export const DrawerContextProvider = ({children}) => {
    const[visible,setVisible] = useState(false);


    return (
    <DrawerContext.Provider value={{visible,setVisible}}>
        {children}
    </DrawerContext.Provider>
  )
}
