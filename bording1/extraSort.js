// bubble sort---------------------
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

const arr = [5, 4, 2, 7, 5, 8]
// console.log(bubbleSort(arr));

// insertion sort --------------------
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }

        arr[j + 1] = key
    }

    return arr
}

// console.log(insertionSort(arr));

// selection sort-------------------------
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr
}

console.log('selectionSort', selectionSort(arr));

// queck sort---------------------------

function queck(arr) {
    if (arr.length < 1) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...queck(left), pivot, ...queck(right)]

}

console.log('queck', queck(arr));


// merge sort----------------------------
function merge(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return mergeSort(merge(left), merge(right))
}

function mergeSort(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

console.log('mergeSort', merge(arr));




