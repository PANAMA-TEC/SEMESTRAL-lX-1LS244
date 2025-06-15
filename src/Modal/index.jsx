import ReactDOM from "react-dom";
import './index.css'


const Modal =( {children} )=> {
    return ReactDOM.createPortal(
        <div className="Modal">
        
        
            {children}
        
        
        </div>,
        
        document.getElementById('modal')
    );
}

export { Modal }