function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1
        for(; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))
// Think from end ele perspective 
// First in mind assume you are starting from 4 and then comparing it with 76

// This works better in case we have a nearly sorted data
// Practical use case - in case we already have a sorted data and new data is coming in live and we need to just arrange the new data
// insertion sort should be preffered

