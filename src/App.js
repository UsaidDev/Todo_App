import React, { useEffect, useState } from 'react';
import './Components/App.css';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';

function App() {
  const [tasks, SetTask] = useState([]);

  useEffect(() => {
    document.title = `You have ${tasks.length} Pending Task(s)`;
  }, [tasks]);

  const AddTask = (title) => {
    const newTask = [...tasks, { title }]
    SetTask(newTask)
  }

  const RemoveTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index, 1)
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
          {tasks.map((task, index) => (
            <ListTask task={task} Removetask={RemoveTask} index={index} key={index} />
          ))};
        </div>
      </div>
    </div>
  )
};

export default App;