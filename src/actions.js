import axios from "axios";

const API = "https://todo-backend-assignment.vercel.app/tasks";

export const addTask = (task) => {
  return async (dispatch) => {
    try {
      const taskToAdd = {
        taskName: task.taskName,
        employeeName: task.employeeName,
      };

      const res = await axios.post(API, taskToAdd);
      console.log("Full response from server:", res.data);

      if (res.data.success) {
        console.log("Response from server:", res.data);
        dispatch({ type: "ADD_TASK", payload: res.data.data });
      } else {
        console.error("Error adding item:", res.data);
      }
    } catch (error) {
    console.error("Error fetching tasks:", error);
    }
  };
};

export const updateTask = (taskId, updatedTask) => async (dispatch) => {
  const updateAPI = `${API}/${taskId}`;
  try {
    const res = await axios.put(updateAPI, updatedTask);
    if (res.data.success) {
      dispatch({ type: "UPDATE_TASK", payload: { taskId, updatedTask } });
      console.log("Task updated successfully:", res.data);
    } else {
      console.log("Error updating task:", res.data);
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  const deleteAPI = `${API}/${taskId}`;
  try {
    console.log("Task ID to be deleted:", taskId);
    const res = await axios.delete(deleteAPI);
    console.log("Full response from server:", res.data);

    if (res.data.success) {
      dispatch({ type: "DELETE_TASK", payload: taskId });
      console.log("Task deleted successfully:", res.data);
    } else {
      console.log("Error deleting task:", res.data);
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const fetchTask = () => async (dispatch) => {
  try {
    const response = await axios.get(API);
    dispatch({ type: "FETCH_TASK", payload: response.data.data });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get(API);
    dispatch({ type: "FETCH_EMPLOYEES", payload: response.data.data });
    return response.data.data 
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
