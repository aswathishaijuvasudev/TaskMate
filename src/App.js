import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Showtask } from './components/Showtask';
import {useState,useEffect} from 'react';
function App() {


  const [edtBtn,setBtn] = useState(false);
  // const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  // useEffect(() => {
  //   localStorage.setItem("tasklist", JSON.stringify(tasks))
  // }, [tasks]);

const [tasks,setTasks] = useState(() =>{
  const storedTasks = localStorage.getItem("tasklist");
  return storedTasks ? JSON.parse(storedTasks):[];
});

useEffect(() => {
  localStorage.setItem("tasklist", JSON.stringify(tasks))
}, [tasks]);

console.log("tasks==",tasks);
const [tsk,setTsk] = useState({});
  return (
    <div className="App" >
      <Header />
      <AddTask tasks = {tasks} setTasks={setTasks} tsk={tsk} setTsk = {setTsk} edtBtn={edtBtn} setBtn={setBtn}/>
      <Showtask tasks={tasks} setTask={setTasks} tsk={tsk} setTsk = {setTsk} edtBtn={edtBtn} setBtn={setBtn} />
    </div>
  );

}

export default App;
