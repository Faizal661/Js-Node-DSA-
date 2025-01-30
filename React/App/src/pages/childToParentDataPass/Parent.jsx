import React, { useState } from "react";
import Child from "../childToParentDataPass/Child";

const Parent = () => {

  const [name,setName]=useState('')  

  return (
    <div className="border-2 flex-col justify-center align-middle">
      <h1>Parent component</h1>
      <p>{name}</p>
      <Child name={name} setName={setName}/>
    </div>
  );
};

export default Parent;
