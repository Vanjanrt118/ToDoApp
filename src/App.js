import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './header'
import Tasks from './Tasks'
import { useState,useEffect } from 'react'
import AddTask from './AddTask'
import Footer from './Footer'
import About from './About'
function App() {
  const [tasks, setTasks]=useState([

])
//useEfect koristimo kada zelimo da nam se podaci ucitaju kada se stranica ucita, prvi argument funkcija, a drugi su dependencies
useEffect(()=>{
const fetchTasks=async ()=>{
  const res=await fetch("http://localhost:5000/tasks")
  const data= await res.json();
  setTasks(data)
}
fetchTasks()
},[])
const [showAddTask,setShowAddTask]=useState(false)
//Add task
const addTask= async(task)=>{
  const res=await fetch('http://localhost:5000/tasks',{method:'post',
  headers:{"Content-type":"application/json"},
  body:JSON.stringify(task)

})
const data=await res.json();
setTasks([...tasks,data])
  // let id=6
  // let newTask={id, ...task}
  // setTasks([...tasks,newTask])

}
//Delete Task
async function deleteTask(id){
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
//setTasks(tasks.filter(x=>x.id!==id))
alert("Deleted!");
};
//Set or Delete reminder
async function toogleReminder(id){ 
const taskToToggle= await (await fetch(`http://localhost:5000/tasks/${id}`)).json()
const updateTask={...taskToToggle,reminder:!taskToToggle.reminder};
const res=await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',
                                                          headers:{"Content-type":"application/json"},
                                                          body:JSON.stringify(updateTask)})
const data=await res.json()
 console.log(data)                                                         

setTasks(tasks.map((x)=>x.id===id ? {...x,reminder:!data.reminder}:x))

};
const toggleAddTask=()=>{
  setShowAddTask(!showAddTask)
}

  return (
    <div className="container ">
      
     <Header naslov="Task tracker" toggleAddTask={toggleAddTask}></Header>
     {showAddTask &&<AddTask onAdd={addTask}></AddTask>}
     <Tasks task={tasks} func={deleteTask} onToggle={toogleReminder}></Tasks>
     <Footer></Footer>
    </div>
  );
}

export default App;
