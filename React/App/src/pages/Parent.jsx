import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

  const [name,setName]=useState('')  

  return (
    <div className="">
      <h1>Parent component</h1>
      <Child name={name} setName={setName}/>
    </div>
  );
};

export default Parent;
