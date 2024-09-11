import { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../context/TodoContext";

const AddTodo = () => {
  const [disabled, setDisabled] = useState(true);
  const newID = uuidv4();
  const todoRef = useRef("");
  const { dispatch } = useContext(TodoContext);
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoRef.current.value !== "") {
      dispatch({
        type: "ADD_TODO",
        id: newID,
        payload: todoRef?.current?.value,
        completed: false,
      });
      setDisabled(true);
      todoRef.current.value = "";
    }
  };

  const handleInputChange = () => {
    if (todoRef.current.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  console.log(disabled);

  return (
    <form
      className="grid grid-cols-3 gap-3 my-5"
      onSubmit={(e) => handleAddTodo(e)}
    >
      <input
        onChange={handleInputChange}
        ref={todoRef}
        type="text"
        placeholder="Write your next task"
        className="col-span-2 border border-gray-400 rounded h-10 px-3 py-1"
      />
      <button
        disabled={disabled}
        type="submit"
        className={`col-span-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors ${
          disabled ? "cursor-not-allowed pointer-events-none opacity-75" : ""
        }`}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
