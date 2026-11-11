import {useState} from 'react'
import "./App.css"
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
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
        isCompleted:isChecked
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
                  <li key={index}>
                  <input type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}/>
                  {task.taskName}
                  </li>
                  <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
              ))
            }
          </div>
          <div className="countTask">
            
          </div>
        </main>
      </div>
    </>
  )
}

export default App
