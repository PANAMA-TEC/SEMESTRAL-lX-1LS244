import './index.css';
import { Login } from '../Login';
import { UserView } from '../UserView';
import { Routes, Route } from 'react-router-dom'






import React from 'react';

const App = () =>{

  return(
      <div className='App'>  
        <Routes>
          <Route path="/" element={ <UserView/> } />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>    
    )
}

export default App;
