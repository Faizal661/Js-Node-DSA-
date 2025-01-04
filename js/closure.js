function outerFunction() {
    var count = 0; 
  
    function innerFunction() {
      count++; 
      console.log("Count:", count);
    }
  
    return innerFunction; 
  }

  
  const myFunction = outerFunction(); 
  
  myFunction(); // Output: Count: 1
  myFunction(); // Output: Count: 2
  myFunction(); // Output: Count: 3