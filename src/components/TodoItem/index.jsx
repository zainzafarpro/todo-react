import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
const btn = "p-2 text-white";
const TodoItem = ({ todo, id, completed }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleComplete() {
    dispatch({
      type: "TOGGLE_COMPLETED",
      id,
      completed,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_TODO",
      id,
      completed,
    });
  }

  function handleEditUpdate(e) {
    setIsEditing(false);
    dispatch({
      type: "EDIT_TODO",
      id,
      completed,
      payload: e.target.value,
    });
  }

  return !isEditing ? (
    <div
      className="border-black flex gap-4 items-center border-b border-b-gray-400 py-3"
      data-id={id}
    >
      <span
        className={`flex-shrink-0 size-5 border-blue-600 border rounded-full block ${
          completed ? "bg-blue-600" : ""
        }`}
        onClick={handleComplete}
      ></span>
      <strong
        className={`text-black grow break-all ${
          completed ? "line-through" : ""
        }`}
      >
        {todo}
      </strong>
      <div className="grid grid-cols-2 w-auto gap-2 flex-shrink-0">
        <button
          className={`${btn} + bg-green-500`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button className={`${btn} bg-red-500`} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <form>
      <input
        onBlur={(e) => handleEditUpdate(e)}
        className="border border-gray-400 rounded h-10 px-3 py-1 w-full"
        defaultValue={todo}
      />
    </form>
  );
};

export default TodoItem;
