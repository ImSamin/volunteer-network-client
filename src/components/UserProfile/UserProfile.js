import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Navbar from '../Navbar.js/Navbar';
import UserTaskList from '../UserTaskList/UserTaskList';
import "./UserProfile.css";

const UserProfile = () => {
    const [loggedInUser] = useContext(userContext);
    const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/userTasks?email=" + loggedInUser.email, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setUserTasks(data)
        })
    }, []);


    return (
        <div style={{ background: '#e5e5e5', height:'100vh'}}>
            <Navbar></Navbar>
            
           <div className="container-fluid utl-main-div">
                <div className=" container row utl-parent-div">
                    {
                        userTasks.map((task) => <UserTaskList task={task} id={task._id} key={task._id}></UserTaskList>)
                    }
                </div>

           </div>
        </div>
    );
};

export default UserProfile;