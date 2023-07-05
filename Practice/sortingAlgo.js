/*
1. Bubble Sort
2. Insertion Sort
3. Quick Sort
4. Merge Sort
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

function insertionSort(arr) {
    // insertion sort
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}

function quickSort(arr) {
    // quick sort
    if (arr.length < 2) return arr
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function mergeSort(arr) {
    // merge sort
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

console.log(bubbleSort([1, 2, 9, 5, 4, 6]))