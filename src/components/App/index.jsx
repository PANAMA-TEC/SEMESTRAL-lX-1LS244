import './index.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


/**
 *
 * 
 * 
const defaultTodos = [
  { text: ' cebolla', Completed: true },
  { text: 'tomar el curso de React', Completed: false },
  { text: 'Llorar con la llorona', Completed: false },
  { text: 'Cortar cebolla', Completed: false },
  { text: 'LALALALA ', Completed: false },
  { text: 'Usar estados derivados ', Completed: true }
]

localStorage.setItem(itemName, JSON.stringify(defaultTodos));

*/

const App = () =>{
  return(
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
