import './index.css';
import { Login } from '../Login';
import { UserView } from '../UserView';
import { Routes, Route } from 'react-router-dom'
import { DetailRecipe } from '../DetailRecipe';

import React from 'react';
import { AdminPanel } from '../AdminPanel';

const App = () =>{

  return(
      <div className='App'>  
        <Routes>
          <Route path="/" element={ <UserView/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/detail_recipe" element={<DetailRecipe/>} />
          <Route path="/admin" element={<AdminPanel/>} />
        </Routes>
      </div>    
    )
}

export default App;
