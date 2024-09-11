const CompletedTask = ({ completedTodos, totalTodos }) => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-items-center items-center border border-gray-600 rounded-md py-3">
      <div className="">
        <h1 className="text-2xl">Task Done</h1>
        <h2 className="text-md">Keep it up!</h2>
      </div>
      <div className="rounded-full bg-green-500 size-20 flex justify-center items-center text-2xl">
        {completedTodos}/{totalTodos}
      </div>
    </div>
  );
};

export default CompletedTask;
