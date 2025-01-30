import React, { useState } from "react";

const Child = ({ name, setName }) => {
  
  const [input,setInput]=useState(name)

  const handleInputChange=e=>{
    setInput(e.target.value)
  }

  const changeName = () => {
    setName(input);
  };

  return (
    <div className="  border-2 p-5 border-purple-500 rounded-md">
      <h2>Child Component</h2>
      <input
        type="text"
         value={input}
         onChange={handleInputChange}
        className="border-2 rounded-md border-lime-400 p-1"
      />
      <button
        onClick={changeName}
        className="border-2 rounded-md border-lime-500 bg-lime-400 ml-3 p-1 px-2"
      >
        Update
      </button>
    </div>
  );
};

export default Child;
