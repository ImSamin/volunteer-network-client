import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../volunteer-network-main/logos/Group 1329.png'
import "./Register.css"
import { useForm } from "react-hook-form";

const Register = () => {
    const {id} = useParams()
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {displayName, email} = loggedInUser
    const {register, handleSubmit} = useForm();
    const [tasks, setTasks] = useState()
    const taskDetails = tasks && tasks.filter(task => task.taskId == id);
    let taskName ;
    if (taskDetails && taskDetails ){
        taskName = taskDetails[0].name;
    }

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })

    }, [])

    const onSubmit = (data) => {
        const userTask = data;
        fetch("http://localhost:5000/addUserTask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userTask),
        })
        history.push('/user')
    }


    
    return (
        <div className="login-parent-container">
            <div>

                <div className="login-img-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="register-form-parent ">
                    <div className="register-form-child ">
                        <h3>Register as a Volunteer</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-input ">
                                <input onChange={(e) => setTasks(e.target.value)} className="form-control" type="text" placeholder="Full Name" name="name" value={displayName} ref={register} required></input>
                            </div>
                            <div className="register-input">
                                <input onChange={(e) => setTasks(e.target.value)} className="form-control" type="text" placeholder="username or Email" name="email" value={email} ref={register} required></input>
                            </div>
                            <div className="register-input">
                                <input className="form-control" type="date" name="date" ref={register} required ></input>
                            </div>
                            <div className="register-input">
                                <input className="form-control" type="text" placeholder="Description" name="description" ref={register} required></input>
                            </div>
                            <div className="register-input">
                                <input onChange={(e) => setTasks(e.target.value)} className="form-control" type="text" placeholder="Task Name" name="TaskName" value={taskName} ref={register} required></input>
                            </div>
                            <div className="register-input">
                                <input type="submit" className="btn form-control btn-primary" value="Registration"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;