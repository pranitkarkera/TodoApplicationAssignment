const initialState = {
  tasks: [],
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload.taskId
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };
    case "DELETE_TASK":
      const updatedTasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "FETCH_TASK":
      return {
        ...state,
        tasks: action.payload,
      };
    case "FETCH_EMPLOYEES":
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
