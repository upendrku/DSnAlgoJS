function pivotHelper(arr, start=0) {
    function swap(array, i, j) {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivot = arr[start]
    let swapIndex = start

    for(let i = start + 1; i < arr.length; i++ ) {
        if(pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

console.log(pivotHelper([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]))

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivotHelper(arr, left)
        // LEFT
        quickSort(arr, left, pivotIndex - 1) 
        // RIGHT
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]))