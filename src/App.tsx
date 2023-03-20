import { useState, FC, ChangeEvent } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // we should define type
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //we are changing html input element
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
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
          />
          <input
            type="number"
            placeholder="Deadline(in days)"
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  );
};

export default App;
