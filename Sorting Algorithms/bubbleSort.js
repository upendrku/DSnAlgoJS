// Non optimized - will go through all steps to complete sorting.
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j > i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

// In case of partially sorted arrays we may not need to continue do bubble sorting
// to adress this case we can optimize the code as below
function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j > i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}