import './index.css';
import { CompleteIcon } from '../../Icons/CompleteIcon';
import { DeleteIcon } from '../../Icons/DeleteIcon';

const TodoItem = ( {mensaje, completed, onCompleted, onDelete} ) => {
  return (
    <li className='TodoItem'>

      <CompleteIcon className='iconCheck' onCompleted = {onCompleted} completed={completed} height="70" width="70"/>
      
      <p className={`taskName ${ completed ? 'taskName-completed' : ''}`}>{mensaje} </p>
        
      <DeleteIcon className='closeButton' onDelete={onDelete} height={30} width={30}/>

    </li>
  );
}

export { TodoItem };
