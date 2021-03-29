import React from 'react';
import {useHistory} from 'react-router-dom';
import '../Task/Task.css'

const Task = ({ task }) => {
   const history = useHistory()
    const { taskId, name, pic } = task
    
    const handleTask = () => {
        history.push(`/register/task/${taskId}`)
        console.log('clicked', taskId);
    }

    return (
        <div onClick={handleTask} className="col-md-3 task ">
           
                <div className="task-img">
                    <img src={pic} alt="" />
                </div>
                <div className="task-name">
                    <p>{name}</p>
                </div>
            
        </div>

    );
};

export default Task;