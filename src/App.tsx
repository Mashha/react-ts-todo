import { useState, FC, ChangeEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Task } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // we should define type
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //if a function is not returning anything we set it to void
    //we are changing html input element
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  //each todo that we will add to the array should be an object
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline(in days)"
            name="deadline"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default App;
