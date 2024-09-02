import { useRef,useEffect,useState } from 'react';
import './addTask.css';
export const AddTask = ({tasks,setTasks,tsk,setTsk,edtBtn,setBtn}) =>{
    const taskRef = useRef("");
    const addTask = (e) =>{
        e.preventDefault();
        const date = new Date();

        if(tsk.id){
            console.log(taskRef.current.value);
            const taskNew = tasks.map((task)=>task.id ===tsk.id? {id:tsk.id,name:taskRef.current.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:task);
            console.log(taskNew);
            setTasks(taskNew);
            // localStorage.setItem("taskList",JSON.stringify(taskNew));
            setTsk({});
        }else{

            const task = {
                id:Math.round(Math.random()*10000),
                name:taskRef.current.value,
                time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            // localStorage.setItem("taskList",task);
            setTasks([...tasks,task]);
            setTsk({});
        }
        setTsk("");
        setBtn(false);
        taskRef.current.value = "";
    }
    return(
        <section className="addTask col-sm-8 col-xs-8  col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
            <form onSubmit={addTask} className='col-12 inputBox  d-flex'>
                <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25" ref={taskRef} value={tsk.name || ""}  onChange={(e) => setTsk({...tsk,name:e.target.value})} ></input>
                <button type="submit" className='btn'>{edtBtn?'Update':'Add'}</button>
            </form>

        </section>
    );
}

// onChange={e=>setTsk({...tsk,name:e.target.value})}