//---------------- Shallow copy -----

// let original = {
//     name: "Alice",
//     address: {
//       city: "Wonderland",
//       zip: 12345
//     }
//   };
  
//   let shallowCopy = { ...original };
  
//   shallowCopy.name = "Bob";
//   shallowCopy.address.city = "New Wonderland";
  
//   console.log(original);
//   console.log(shallowCopy);

//---------------- Deep copy -----


  let original = {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  };
  
  // let deepCopy = JSON.parse(JSON.stringify(original));
  let deepCopy = structuredClone(original)

  
  deepCopy.name = "Bob";
  deepCopy.address.city = "New Wonderland";
  
  console.log(original);
  console.log(deepCopy);