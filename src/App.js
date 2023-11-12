import React, { useState } from 'react';
import './Components/App.css';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';

function App() {
  const [tasks, SetTask] = useState([

  ])
  const AddTask=(title)=>{
    const newTask=[...tasks,{title}]
    SetTask(newTask)
  }
  return (
    <div>
      <div className="app">
        <div className="heading">
          <div className="mainHeading">
            <h1>ToDo List</h1>
          </div>
          <div className="subHeading">
            <br />
            <h2>Whoop, it's Wednesday</h2>
          </div>
        </div>
        <Addtask Addtask={AddTask} />
        <div className="todos">
          {tasks.map((task) => (
            <ListTask key={task.title} task={task} />
          ))};
        </div>
      </div>
    </div>
  )
};

export default App;