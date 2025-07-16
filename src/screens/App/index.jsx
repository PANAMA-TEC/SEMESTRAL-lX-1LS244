import './index.css';
import { Login } from '../Login';
import { NavBar } from '../../components/navBar';
import { UserView } from '../UserView';
import logo_nav from '../../assets/image.png';
import { CookHubImage } from '../../Icons/CookHubImage';


import React from 'react';

const App = () =>{

  return(
      <div className='App'>

        <UserView> 

          <NavBar logo={logo_nav}/>
          
          <div className="content">
            <img src={logo_nav} alt="CookHub Logo" className="UserView-central-image" />
            <input type="text" placeholder="Buscar recetas, ingredientes o pasos" className="search-bar" />
          </div>
        </UserView>
        
        {/* <NavBar/> */}
        {/* <Login/> */}
      
      </div>
         
    )
}

export default App;
