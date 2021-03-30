import React from 'react';

import "./UserTaskList.css"
import img from '../../volunteer-network-main/images/schoolSuffiles.png'


const UserTaskList = (task) => {
    const {_id, TaskName, date } = task.task;
    
    

    const handleCancel = (task) => {
        fetch(`https://blooming-inlet-19483.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res =>{
            console.log("deleted");
        })
    }

    
    
    
    return (

        <div className=" col-md-6 utl-child-div">
            <div className="utl">

                <div className="utl-img">
                    <img src={img} alt="" />
                </div>
                <div className="utl-date">
                    <h5>{TaskName}</h5>
                    <p>{date}</p>
                    
                    <div className="utl-btn">
                        <button onClick={handleCancel} className="btn btn-primary utl-btn-btn">Cancel</button>
                    </div>  
                </div>

            </div>

        </div>
    );
}

export default UserTaskList;