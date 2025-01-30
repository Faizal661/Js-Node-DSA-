import React from 'react'

const Child = ({name,setName}) => {
    const changeName =(e)=>{
        setName(e.target.value)
    }
  return (
    <>
    <h2>Child Component</h2>
       <input type="text" value={name} onChange={changeName}/>
    </>
  )
}

export default Child