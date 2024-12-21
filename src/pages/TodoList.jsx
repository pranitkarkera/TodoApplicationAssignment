import { useSelector, useDispatch } from "react-redux";
import { fetchTask, addTask, deleteTask, updateTask } from "../actions";
import { useEffect, useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState("");
  const [employeeName, setEmployeeName] = useState(""); 
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
      dispatch(addTask({ taskName, employeeName }));
      dispatch(fetchTask()); 
      setTaskName(""); 
      setEmployeeName(""); 
  };

  const handleDeleteTodo = (id) => {
     dispatch(deleteTask(id));
  };

  const handleEditTodo = (todo) => {
    setEditingTaskId(todo._id);
    setTaskName(todo.taskName);
    setEmployeeName(todo.employeeName);
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (taskName && employeeName && editingTaskId) {
      dispatch(updateTask(editingTaskId, { taskName, employeeName }));
      setTaskName("");
      setEmployeeName("");
      setEditingTaskId(null);
    } else {
      alert("Please fill in both fields.");
    }
  };

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <div className="container py-3">
      <section>
        <form onSubmit={editingTaskId ? handleUpdateTodo : handleAddTodo}>
          <h4 className="ps-1">
            {editingTaskId ? "Update todo task" : "Add new todo task"}
          </h4>
          <input
            id="taskInput"
            type="text"
            placeholder="Add a new todo"
            className="form-control w-50"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <input
            id="employeeInput"
            type="text"
            placeholder="Add an employee name"
            className="form-control w-50 mt-2"
            onChange={(e) => setEmployeeName(e.target.value)}
            value={employeeName}
          />
          <button type="submit" className="btn btn-primary mt-2">
            {editingTaskId ? "Update Todo" : "Add Todo"}
          </button>
        </form>
        <hr />
      </section>
      <section className="mt-3">
        <h2>Todo List</h2>
        <div className="d-flex flex-column w-100">
          {todoList && todoList.length > 0 ? (
            todoList.map((todo) =>
              todo ? (
                <div
                  key={todo._id}
                  className="m-2 p-2 border bg-light w-50 rounded-2 d-flex justify-content-between align-items-center"
                >
                  <span>{todo.taskName}</span>
                  <div className="d-flex flex-column ms-auto">
                    <button
                      className="btn btn-danger btn-sm mb-1"
                      onClick={() => handleDeleteTodo(todo._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEditTodo(todo)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <li>No todos available.</li>
          )}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
