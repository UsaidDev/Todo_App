import React from 'react'

function ListTask({task,index,Removetask}) {
  return (
    <div>
      <div className="todo">
          <div className="left">
            <p>{task.title}</p>
          </div>
          <div className="right">
            <i onClick={()=>{Removetask(index)}} className="fas fa-times"></i>
          </div>
        </div>
    </div>
  )
}

export default ListTask
