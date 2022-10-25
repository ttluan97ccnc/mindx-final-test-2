import './styles.css'
import ToDoItems from './Components/ToDoItems/ToDoItems';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
const Home = () => {
  
  const remainingDay = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};
  const [taskList,setTaskList]=useState([]);
    const [task, setTask ] = useState();
    const [day,setDay]=useState();
    const [date, setDate]=useState();
    const handleDo=(e)=>{
        setTask(e.target.value);
    }
    const handleDate=(e)=>{
      let dayFinish = new Date(e.target.value);
      let today = new Date();
  
      setDay(remainingDay(today,dayFinish));
      setDate(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(task&&day){
        const newItem = {
          id: uuidv4(),
          task: task,
          day: day,
          isDeleted: false,
          
        };
  
        setTaskList([...taskList, newItem]);
        console.log(taskList);
        setDay("");
        setDate("");
        setTask("");
      }
      localStorage.setItem('website', taskList);
    }
    const handleToggleDelete = (item) => {
      const newList = taskList.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            isDeleted: !el.isDeleted,
          };
        }
        return el;
      });
      setTaskList(newList);
      console.log(newList);
    };
    const cnt=(x)=>{
      let total=0;
      for(let i=0;i<x.length;i++){
        if(x[i].isDeleted===false){
          total++;
        }
      }
      return total;
    }
    
    return (
      <div className="App">
        <div className="container">
          <div className="header">You have {cnt(taskList)} tasks left!</div>
          {taskList.map((item) => {
            return (
              <ToDoItems taskList={taskList}
                key={item.id}
                task={item.task}
                day={item.day}
                isDeleted={item.isDeleted}
                onDelete={() => handleToggleDelete(item)}
              />
            );
          })}
          <form className="form">
        
            <input placeholder="New task ..." onChange={handleDo} value={task}></input>
            <input type="date" onChange={handleDate} value={date}></input>
            <button onClick={handleSubmit}>Submit</button>
            
          </form>
        </div>
      </div>
    );
  };
export default Home;  