class heap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.heapyfyUp(this.heap.length - 1)

    }
    heapyfyUp(i) {
        let parent = Math.floor((i - 2) / 2)

        while (i > 0 && this.heap[i] < this.heap[parent]) {
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i - 2) / 2)

        }
    }

    buildHeap(arr) {
        this.heap = arr
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapyfyDown(i, this.heap.length)
        }
    }
    heapyfyDown(i, size) {
        let left = i * 2 + 1
        let right = i * 2 + 2
        let small = i;
        if (left < size && this.heap[left] < this.heap[small]) {
            small = left
        }
        if (right < size && this.heap[right] < this.heap[small]) {
            small = right
        }
        if (i != small) {
            [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]]
            this.heapyfyDown(small, size)
        }

    }

    heapSort(arr) {
        this.buildHeap(arr)
        for (let i = arr.length - 1; i > 0; i--) {
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            this.heapyfyDown(0, i)
        }
    }
}


const hp = new heap()
// hp.insert(1)
// hp.insert(5)
// hp.insert(6)
// hp.insert(2)
// hp.insert(3)

hp.heapSort([5, 6, 1, 3, 8, 9])
console.log(hp.heap);

