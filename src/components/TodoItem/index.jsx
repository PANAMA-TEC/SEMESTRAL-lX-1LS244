import './index.css';
import { CompleteIcon } from '../../Icons/iconManager';
import { DeleteIcon } from '../../Icons/DeleteIcon';

const TodoItem = ( {mensaje, completed, onCompleted, onDelete} ) => {
  return (
    <li className='TodoItem'>

      <CompleteIcon className='iconCheck' onCompleted = {onCompleted} completed={completed}/>
      
      <p className={`taskName ${ completed ? 'taskName-completed' : ''}`}>{mensaje} </p>
        
      <DeleteIcon className='closeButton' onDelete={onDelete}/>

    </li>
  );
}

export { TodoItem };
