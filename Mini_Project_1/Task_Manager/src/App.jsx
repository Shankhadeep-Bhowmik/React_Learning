import {useState} from 'react'
import "./App.css"
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const handleChange = (index) => {
    let updateTasks = tasks.map((task, idx) => {
      if(idx === index){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(updateTasks);
  }
  function addTask(){
    if(inputTask.trim() === ""){
      alert("Enter Task!");
      return;
    }
    setTasks([
      ...tasks,
      {
        taskName:inputTask,
        isCompleted:false
      }
    ]
    )
    setInputTask("");
  }
  function deleteTask(index){
    let keepTasks = tasks.filter((task, ind) => ind !== index)
    setTasks(keepTasks)
  }
  return (
    <>
      <div className="container">
        <header className='header'>Task Manager</header>
        <main className='main'>
          <div className="inputArea">
            <input type="text"
            value={inputTask}
            onChange={(e)=>setInputTask(e.target.value)}
            placeholder='Enter Task'
            />
            <button onClick={addTask}>Add</button>
            
          </div>
          <div className="showTasks">
            {
              tasks.map((task,index)=>(
                <div className='eachTask'>
                  <li key={index} className={task.isCompleted?"completed":""}>
                  <input type="checkbox"
                  checked={task.isCompleted}
                  onChange={()=>handleChange(index)}/>
                  {task.taskName}
                  </li>
                  <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
              ))
            }
          </div>
          <div className="countTask">
            Tasks remaining: {tasks.filter((task) => !task.isCompleted).length} / {tasks.length}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
