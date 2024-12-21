import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import TodoList from "./pages/TodoList";
import EmployeeList from "./pages/EmployeeList";
import TodoForm from "./pages/TodoForm";

function App(){
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Todo Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/todolist">
                    Todo List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employeelist">
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/" element={<TodoForm />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;