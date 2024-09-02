import './Showtask.css';

export const Showtask = ({ tasks,setTask ,tsk,setTsk,edtBtn,setBtn}) => {

  function editTask(task){
    setTsk(task);
    setBtn(true);

  }

    function deleteTask(id)
    {
        const tasksnew = tasks.filter((d)=>d.id != id);
        setTask(tasksnew);
    }

  
    return (
        <div className="showTask">
            <div className='col-12'>
                <div className='row header'>
                    <span className='header-content'>
                        <h5>Todo <span className='count'>{tasks?tasks.length:0}</span></h5>
                        <button className='clearBtn btn btn-primary' onClick={() => setTask([])}>Clear All</button>
                    </span>
                </div>
                <hr />
                <div className='row taskContainer'>
                    {tasks && tasks.map((task) =>(
                        <div className='col-4 taskCard' key={tasks.id}>
                            <span>
                                <h5>{task.name}</h5>
                                <span className='icon'>
                                        <i className='bi bi-pencil-square' onClick={ () =>editTask(task) }></i>
                                        <i className='bi bi-trash' onClick={() =>deleteTask(task.id)}></i>
                                </span>
                            </span>
                            <p className='p'>{task.time}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
