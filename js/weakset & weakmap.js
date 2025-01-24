// They are called "weak" because they hold weak references to their keys or values, meaning they do not prevent garbage collection.




// WeakMap	
// A WeakMap is a collection of key-value pairs where:
// Keys must be objects.
// Values can be any data type.
// Keys are weakly referenced, allowing garbage collection if there are no other references to the key.

// Use Cases	        Private data, caching	


const cache = new WeakMap();

function fetchData(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  // Fetch data from the network
  const data = fetch('https://url');
  cache.set(url, data); 
  return data;
}


// WeakSet
// A WeakSet is a collection of unique objects:
// Only objects can be stored as elements.
// Objects are weakly referenced, allowing garbage collection.

// Use Cases		        Tracking objects, memory management

const disconnectedNodes = new WeakSet();

function disconnectNode(node) {
  disconnectedNodes.add(node);
  // Perform cleanup tasks, such as removing event listeners
}