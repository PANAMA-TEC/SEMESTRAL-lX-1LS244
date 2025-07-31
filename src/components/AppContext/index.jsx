import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AppContext = React.createContext();



const AppProvider =( {children} )=> {
    
    const Navigate = useNavigate();
    const [ openModal, setOpenModal ] = useState(false);
    const [ user, setUser ] = useState(null)

   const API_Services = async (URL, method = 'GET', body = null) => {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (method === 'POST' && body) {
                options.body = JSON.stringify(body);
            }
            const response = await fetch(URL, options);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    };

    return(
        
        <AppContext.Provider value={{ openModal, setOpenModal, setUser, user, API_Services, Navigate } }>
            {children}
        </AppContext.Provider>

    )
}

export { AppContext, AppProvider }