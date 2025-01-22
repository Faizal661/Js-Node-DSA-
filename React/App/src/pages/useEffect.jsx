import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []); 

  return <p className="text-3xl font-bold  flex justify-center items-center h-96">Timer: {seconds} seconds</p>;
};

export default Timer;
