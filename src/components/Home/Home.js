import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Navbar from "../Navbar.js/Navbar";
import Task from "../Task/Task";

const Home = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    fetch("https://blooming-inlet-19483.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  
 
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid main-div">
        <div className="search-box">
          <h3>I GROW BY HELPING IN NEED.</h3>
          <form action="Submit">
            <input type="text" name="" placeholder="Search..." id="" />
            <button className="btn-primary search-btn">Search</button>
          </form>
        </div>
        <div className="color-overlay"></div>
      </div>

      <div className="row parent-div">
        {tasks && tasks.map((task) => <Task task={task} key={task.id}></Task>)}
      </div>
    </>
  );
};

export default Home;
