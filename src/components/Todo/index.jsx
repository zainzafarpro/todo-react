import { useContext } from "react";
import AddTodo from "../AddTodo";
import CompletedTask from "../CompletedTask";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../context/TodoContext";

const Todo = () => {
  const {
    state: { todos, totalTodos, completedTodos },
  } = useContext(TodoContext);
  console.log(useContext(TodoContext));

  return (
    <div className="max-w-md mx-auto">
      <CompletedTask completedTodos={completedTodos} totalTodos={totalTodos} />
      <AddTodo />
      {todos.length ? (
        todos?.map(({ id, text, completed }) => (
          <TodoItem key={id} id={id} todo={text} completed={completed} />
        ))
      ) : (
        <div className="text-center">
          Feeling lonely? 😿 Plan your next task! 🤩
        </div>
      )}
    </div>
  );
};

export default Todo;
