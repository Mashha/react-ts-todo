import React from 'react'
import { Task } from '../Interfaces'

interface taskProps {
    task: Task
}

const TodoTask =(props: taskProps)=> {
  return (
    <div className='task'>
      <div className="content">
       <span>{props.task.taskName}</span>
       <span>{props.task.deadline}</span>
      </div>
      <button>X</button>
    </div>
  )
}

export default TodoTask