// WeakMap	
// Stores	            Key-value pairs	
// Keys	                Only objects	
// Weak References	    Keys are held weakly	
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
// Stores	            	Unique objects
// Keys		                 Only objects
// Weak References	        Objects are held weakly
// Use Cases		        Tracking objects, memory management

const disconnectedNodes = new WeakSet();

function disconnectNode(node) {
  disconnectedNodes.add(node);
  // Perform cleanup tasks, such as removing event listeners
}