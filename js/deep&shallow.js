let original = {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  };
  
  let shallowCopy = { ...original };
  
  shallowCopy.name = "Bob";
  shallowCopy.address.city = "New Wonderland";
  
  console.log(original.name); // "Alice"
  console.log(original.address.city); // "New Wonderland"
  console.log(original);
  console.log(shallowCopy);


  // let original = {
  //   name: "Alice",
  //   address: {
  //     city: "Wonderland",
  //     zip: 12345
  //   }
  // };
  
  // let deepCopy = JSON.parse(JSON.stringify(original));
  
  // deepCopy.name = "Bob";
  // deepCopy.address.city = "New Wonderland";
  
  // console.log(original.name); // "Alice"
  // console.log(original.address.city); // "Wonderland"
  // console.log(original);
  // console.log(deepCopy);