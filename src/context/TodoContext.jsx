import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.payload,
            completed: action.completed,
          },
        ],
        filteredTodos: [
          ...state.todos,
          {
            id: action.id,
            text: action.payload,
            completed: action.completed,
          },
        ],
        totalTodos: state.todos.length + 1,
        completedTodos: state.completedTodos,
      };
    case "TOGGLE_COMPLETED": {
      const toggledTodo = state.todos.find((todo) => todo.id === action.id);
      const newCompletedTodos = toggledTodo.completed
        ? state.completedTodos - 1
        : state.completedTodos + 1;
      return {
        ...state,
        totalTodos: state.totalTodos,
        completedTodos: newCompletedTodos,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        filteredTodos: state.filteredTodos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        filteredTodos: state.filteredTodos.filter(
          (todo) => todo.id !== action.id
        ),
        totalTodos: state.todos.length - 1,
        completedTodos: action.completed
          ? state.completedTodos - 1
          : state.completedTodos,
      };
    }
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.id === action.id ? (todo.text = action.payload) : todo
        ),
        filteredTodos: state.filteredTodos.filter((todo) =>
          todo.id === action.id ? (todo.text = action.payload) : todo
        ),
      };
    case "SEARCH": {
      const filteredTodos = state.todos.filter((item) =>
        item.text.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
      return { ...state, filteredTodos };
    }
    default:
      return state;
  }
}

const initialValue = JSON.parse(localStorage.getItem("key"))
  ? JSON.parse(localStorage.getItem("key"))
  : {
      filteredTodos: [],
      todos: [],
      totalTodos: 0,
      completedTodos: 0,
    };

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  console.log(state);

  return (
    <TodoContext.Provider
      value={{ state, dispatch, filteredTodos: state.filteredTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};
