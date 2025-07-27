import './index.css';
import { Login } from '../Login';
import { UserView } from '../UserView';
import { Routes, Route } from 'react-router-dom'
import { DetailRecipe } from '../DetailRecipe';
import React from 'react';
import { AdminPanel } from '../AdminPanel';
import { Modal } from '../../Modal';
import { AppContext, AppProvider } from '../../components/AppContext';

const App = () =>{

  const { openModal } = React.useContext(AppContext);  

  return(

    
    
      <div className='App'>  
        
        <Routes>
          <Route path="/" element={ <UserView/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/detail_recipe" element={<DetailRecipe/>} />
          <Route path="/admin" element={<AdminPanel/>} />
        </Routes>

        { openModal ? <Modal> Hola mundo </Modal> : ""  }
       


      </div>   

    )
}

export default App;
