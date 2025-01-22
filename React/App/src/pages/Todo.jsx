import React, { useRef, useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = () => {
    const item = { data: inputVal, id: new Date().toString(), done: false };
    setItems((prev) => [...prev, item]);
    console.log(items);
    setInputVal("");
  };
  return (
    <div>
      <div className=" flex justify-center items-center h-52">
        <label htmlFor="todo">Add New : </label>
        <input
          type="text"
          id="todo"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2 ml-2 border-black p-1 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="border-2 ml-2 border-black p-1 rounded-md"
        >
          Add
        </button>
      </div>

      <div className="flex flex-col  h-96 w-96 m-auto overflow-y-auto gap-2 border-black border-2 rounded-md">
        {items.map((item,i) => (
          <div key={item.id} className="flex justify-around">
            <p>{i+1}</p>
            <p>{item.data}</p>
            <p className="font-serif">{item.done ? 'done' :'not completed'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
