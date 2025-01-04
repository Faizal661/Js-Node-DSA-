class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    heapifyUp(index) {
        while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            [this.heap[index], this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)], this.heap[index]];
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(index) {
        let smallest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    peek() {
        return this.heap[0];
    }
}

const minheap = new MinHeap()
minheap.insert(10)
minheap.insert(5)
minheap.insert(45)
minheap.insert(2)
// console.log(minheap.peek())
console.log(minheap.heap)
console.log(minheap.extractMin())
console.log(minheap.extractMin())
console.log(minheap.extractMin())
console.log(minheap.extractMin())
console.log(minheap.heap)