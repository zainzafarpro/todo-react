import { useContext } from "react";
import AddTodo from "../AddTodo";
import CompletedTask from "../CompletedTask";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../context/TodoContext";
import SearchTodo from "../SearchTodo";

const Todo = () => {
  const {
    state: { todos, totalTodos, completedTodos, filteredTodos },
  } = useContext(TodoContext);

  return (
    <div className="max-w-md mx-auto">
      <CompletedTask completedTodos={completedTodos} totalTodos={totalTodos} />
      <AddTodo />
      {filteredTodos?.length || todos.length ? (
        <>
          <SearchTodo />
          <div className="max-h-96 overflow-y-auto">
            {filteredTodos?.map(({ id, text, completed }) => (
              <TodoItem key={id} id={id} todo={text} completed={completed} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          Feeling lonely? 😿 Plan your next task! 🤩
        </div>
      )}
    </div>
  );
};

export default Todo;
