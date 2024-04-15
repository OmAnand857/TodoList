import React , {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../redux/Reducer.js'



function TaskList(props) { 
   const [completed,setCompleted] = useState(false);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleClick() {

    dispatch(decrement(props.id));

  }

  function handleCompleted(){
   setCompleted(!completed);
  }  

  return (
    <div className={completed?"noteCompleted":"note"}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <label for='done'>Completed</label>
      <input id='done' onClick={handleCompleted} type="checkbox"></input>

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default TaskList;
