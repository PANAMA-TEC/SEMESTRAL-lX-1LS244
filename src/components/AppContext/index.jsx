import React, { useState } from "react";
const AppContext = React.createContext();


const AppProvider =( {children} )=> {
    
  
    const [ openModal, setOpenModal ] = useState(false);

    // const openModal = true ;
    // const setOpenModal =()=>{
    //     alert("presed")
    // }

    return(
        
        <AppContext.Provider value={{ openModal, setOpenModal } }>
            {children}
        </AppContext.Provider>

    )
}

export { AppContext, AppProvider }