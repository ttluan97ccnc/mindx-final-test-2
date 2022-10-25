import './style.css'
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
const ToDoItems=(props)=>{
        return(
            <div className="todo-list-container" onClick={props.onDelete}>
            <div className={`todo-item-container ${props.isDeleted ? "done" : ""}`} >
                {props.isDeleted?
                <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
              
              :
              <FaRegCircle className="item-done-button " color="#9a9a9a" />
                }
              <div className="item-title">{props.work}</div>
              <div style={{marginLeft:"25%"}}>Day: {props.day}</div>
            </div>
            </div>
        );
}
export default ToDoItems;