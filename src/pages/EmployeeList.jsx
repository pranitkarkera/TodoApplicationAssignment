import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../actions";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container py-3">
        <h2>Employee List</h2>
        <hr />
        <ul>
          {employees.map((employee) => (
            <li key={employee._id}>{employee.employeeName}</li>
          ))}
        </ul>
    </div>
  );
};

export default EmployeeList;
