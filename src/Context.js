import React,{ createContext, useContext } from "react";
import ImgData from './ImagData';

const AppContext = createContext();

const AppProvider = ({children})=>{

    
    return(
        <AppContext.Provider value={{ImgData}}>{children}</AppContext.Provider>
    )

};

// custom hook creation
const useGlobleContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobleContext};