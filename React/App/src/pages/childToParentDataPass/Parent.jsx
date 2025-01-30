import React, { useState } from "react";
import Child from "../childToParentDataPass/Child";

const Parent = () => {

  const [name,setName]=useState('')  

  return (
    <div className=" flex flex-col items-center justify-center h-screen ">
      <h1 className="text-xl font-bold">Parent component</h1>
      <p className=" mx-96  border-2 rounded-md  border-black p-3 px-24 bg-emerald-200">{name}</p> <br />
      <Child name={name} setName={setName}/>
    </div>
  );
};

export default Parent;
