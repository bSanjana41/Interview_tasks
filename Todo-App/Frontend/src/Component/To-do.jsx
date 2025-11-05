import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({ title: "" });

  const fetchTasks = async () => {
    const res = await axios.get(`${API_URL}/alltasks`);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!input.title.trim()) return alert("Title required");
    await axios.post(`${API_URL}/newtask`, { title: input.title });
    setInput({ title: "" });
    fetchTasks();
  };

  const updateTask = async (id) => {
    await axios.put(`${API_URL}/updatetask/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/deletetask/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const OnChangeHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="task-container">
        <div className="task-heading">
          <h1>Task Manager</h1>
        </div>

        <div className="task-input-group">
          <input
            type="text"
            placeholder="Enter your task"
            onChange={OnChangeHandler}
            name="title"
            value={input.title}
            className="task-input"
          />
          <button className="task-button add" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span className={task.completed ? "task-title completed" : "task-title"}>
                {task.title}
              </span>
              <div>
                <button className="task-button done" onClick={() => updateTask(task.id)}>
                  {task.completed ? "Completed" : "Mark Done"}
                </button>
                <button className="task-button delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskApp;
