import React, { useState } from 'react'

function Addtask({Addtask}) {
  const [value,SetValue]=useState('')
  const Additem=()=>{
    Addtask(value)
    SetValue("")
  }
  return (
    <div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..."
        value={value}
        onChange={((e)=>SetValue(e.target.value))}
        />
        <i onClick={Additem} className="fas fa-plus"></i>
      </div>
    </div>
  )
}

export default Addtask
