class MaxHeapp{
    constructor(){
        this.heap=[]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return (2*index)+1
    }
    getRightChildIndex(index){
        return (2*index)+2
    }

    heapifyUp(index) {
        while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
            [this.heap[index], this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)], this.heap[index]];
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(index) {
        let largest = index;
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    peek() {
        return this.heap[0];
    }
}

const MaxHeap = new MaxHeapp()
MaxHeap.insert(10)
MaxHeap.insert(5)
MaxHeap.insert(45)
MaxHeap.insert(2)
// console.log(MaxHeap.peek())
console.log(MaxHeap.heap)
console.log(MaxHeap.extractMax())
console.log(MaxHeap.extractMax())
console.log(MaxHeap.extractMax())
console.log(MaxHeap.extractMax())
console.log(MaxHeap.heap)