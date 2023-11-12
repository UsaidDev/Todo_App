import React from 'react'

function ListTask({task}) {
  return (
    <div>
      <div className="todo">
          <div className="left">
            <p>{task.title}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
    </div>
  )
}

export default ListTask
