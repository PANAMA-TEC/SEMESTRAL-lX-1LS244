import ReactDOM from "react-dom";
import React from 'react';
import './index.css'
import { AppContext } from "../components/AppContext";


const Modal =( {children} )=> {

    const { setOpenModal } =React.useContext(AppContext)

    return ReactDOM.createPortal(
        <div className="Modal" onClick={() => setOpenModal(false)}>
    
            {children}
        
        </div>,
        
        document.getElementById('modal')
    );
}

export { Modal }