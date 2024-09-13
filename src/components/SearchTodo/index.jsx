import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const SearchTodo = () => {
  const { dispatch } = useContext(TodoContext);

  function handleSearch(e) {
    dispatch({ type: "SEARCH", payload: e.target.value });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => handleSearch(e)}
        type="search"
        placeholder="Search your task."
        className="border border-gray-400 rounded h-10 px-3 py-1 w-full"
      />
    </form>
  );
};

export default SearchTodo;
