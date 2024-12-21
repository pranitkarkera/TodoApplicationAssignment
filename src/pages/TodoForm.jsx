import {Link} from "react-router-dom"

const TodoForm = () => {
  return (
    <div className="container py-3">
      <div className="text-center">
        <img
          src={"/images/to-do-list.png"}
          className="img-fluid"
          alt="Todolist Image"
        ></img>
        <section className="py-3">
          <h3>Todo List</h3>
          <p>Create a new task. Also view & update existing list of task</p>
          <Link to="/todolist" className="btn btn-primary">
            Create Task
          </Link>
        </section>
        <section className="py-3">
          <h3>Employee List</h3>
          <p>View Employee List</p>
          <Link to="/employeelist" className="btn btn-primary">
            View Employees
          </Link>
        </section>
      </div>
    </div>
  );
};

export default TodoForm;
