import './index.css';
import { Login } from '../Login';
import { UserView } from '../UserView';
import { Routes, Route } from 'react-router-dom'
import { DetailRecipe } from '../DetailRecipe';
import React from 'react';
import { AdminPanel } from '../AdminPanel';
import { Modal } from '../../Modal';
import { AppContext, AppProvider } from '../../components/AppContext';
import { SideBar } from '../../components/sideBar';
import { NavBar } from '../../components/navBar';
import logo_nav from "../../assets/image.png";


const App = () =>{

  const { openModal, localStorageManager, setUser } = React.useContext(AppContext);  

  React.useEffect(() => {
    const user = localStorageManager.getItem("user");
    
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
    
  }, []);

  return(

    <div className='App'>  

      <NavBar logo={logo_nav}/> 
      
      <Routes>
        <Route path="/" element={ <UserView/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/detail_recipe" element={<DetailRecipe/>} />
        <Route path="/user_panel" element={<AdminPanel/>} />
      </Routes>

      { 
        openModal ?  <Modal> <SideBar/> </Modal> : "" 
      }

    </div>   

  )
}

export default App;
