import React from 'react';
/**
 * 
 * @param { Nombre de el valor en localStorage } itemName 
 * @param { Valor inicial del aplicativo } initialValue 
 * @returns 
 * 
 * Custon Hook, esto lo que hacce es que gurda en el localstorage, los cambios en el aplicativo
 * 
 */

const useLocalStorage = ( itemName, initialValue ) => {

  const [item, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Aqui se observa la funcionalidad del useEfect
  // se implemento un loading

  React.useState(() => {
    setTimeout( ()=> {

      try{

        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageTodos){
          
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        
        }else {
          
          parsedItem = JSON.parse(localStorageTodos);
          setItems(parsedItem);
        
        }
  
        setLoading(false);
  
      }catch(error){
        setLoading(false);
        setError(true);
      }

    }, 2000 )
  }, []);
  // Esto se utiliza para renderizar solo al inicio el efecto. 
   
  
  const saveItems = (newItem) =>{

    localStorage.removeItem(itemName);
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);

  }

  return { item, saveItems, loading, error }
  
}

  export {useLocalStorage}