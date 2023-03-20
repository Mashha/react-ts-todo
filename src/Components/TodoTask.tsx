import React from 'react'
import { Task } from '../Interfaces'

interface taskProps { 
    task: Task
    completeTask(taskNameToDelete: string): void // add a function as a type
}

const TodoTask =(props: taskProps)=> {
  return (
    <div className='task'>
      <div className="content">
       <span>{props.task.taskName}</span>
       <span>{props.task.deadline}</span>
      </div>
      <button onClick={() => props.completeTask(props.task.taskName)}>X</button>
    </div>
  )
}

export default TodoTask