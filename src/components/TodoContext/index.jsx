import React, {useState}from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
const TodoContext = React.createContext();


const TodoProvider =( {children} )=> {
    
    const [ searchValue, setSearchValue ] = useState('');
    const { item:todo, saveItems:saveTodos, loading, error } = useLocalStorage("TODO_V1", [] );
    const [ openModal, setOpenModal ] = useState(false);
    
    const completedTodo = todo.filter( todo => !!todo.Completed ).length;
    const totalToDo = todo.length;
    
    // estados derivados
    const searchedTodo = todo.filter( (todo) => {

        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);

    });

    const toggleToDo = (text) => {
    
        // copiar un array dentro de otro
        const newTodos = [...todo];
        // buscar el indice en donde aparece el texto
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        // editamos solamente el objeto por indice encontrado
        if( newTodos[todoIndex].Completed ===  true ){
        newTodos[todoIndex].Completed = false;
        }else{
        newTodos[todoIndex].Completed = true;
        }
        // inyectamos todo el nuevo array
        
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
    
        // copiar un array dentro de otro
        const newTodos = [...todo];
        // buscar el indice en donde aparece el texto
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        // editamos solamente el objeto por indice encontrado
        newTodos.splice(todoIndex, 1);
        // inyectamos todo el nuevo array
        
        saveTodos(newTodos);
    }
    const addTodo = (text) => {
        
        
        // copiar un array dentro de otro
        const newTodos = [...todo];
        // buscar el indice en donde aparece el texto

        let data =  { text: text, Completed: false };
        
        newTodos.push(data)

        saveTodos(newTodos);
    }

    return(
        
        <TodoContext.Provider value={{ 
            totalToDo, completedTodo, searchValue, 
            searchedTodo, loading, error, openModal, 
            setOpenModal, setSearchValue, toggleToDo, 
            deleteTodo, addTodo
        } }>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }