class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      const item = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.items.length; i++) {
        if (item.priority < this.items[i].priority) {
          this.items.splice(i, 0, item);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.items.push(item);
      }
    }
  
    dequeue() {
      if (this.items.length === 0) {
        return null;
      }
  
      return this.items.shift();
    }
  }
  
  // Example usage:
  const pq = new PriorityQueue();
  
  pq.enqueue("Task A", 3);
  pq.enqueue("Task B", 1);
  pq.enqueue("Task C", 2);
  console.log(pq)
  
  console.log(pq.dequeue()); // Output: { element: "Task B", priority: 1 }
  console.log(pq.dequeue()); // Output: { element: "Task C", priority: 2 }
  console.log(pq.dequeue()); // Output: { element: "Task A", priority: 3 }