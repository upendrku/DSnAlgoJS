// first of all we need to understand how to merge two already sorted arrays
function mergeSortedArrs(arr1, arr2) {
    let firstArrIndex = 0
    let secondArrIndex = 0
    let mergedSortedArr = []
    while(firstArrIndex < arr1.length && secondArrIndex < arr2.length) {
        if(arr1[firstArrIndex] >= arr2[secondArrIndex]) {
            mergedSortedArr.push(arr2[secondArrIndex])
            secondArrIndex++
        } else {
            mergedSortedArr.push(arr1[firstArrIndex])
            firstArrIndex++
        }
    }
    while(firstArrIndex < arr1.length) {
        mergedSortedArr.push(arr1[firstArrIndex])
        firstArrIndex++
    }
    while(secondArrIndex < arr2.length) {
        mergedSortedArr.push(arr2[secondArrIndex])
        secondArrIndex++
    }
    return mergedSortedArr
}

console.log(mergeSortedArrs([13, 14, 99, 100], [1, 10, 50]))

// Merge Sort Algorithm
function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    let midPoint = Math.floor(arr.length / 2)
    let leftArr = mergeSort(arr.slice(arr.slice(0, midPoint)))
    let rightArr = mergeSort(arr.slice(arr.slice(midPoint)))
    return mergeSortedArrs(leftArr, rightArr)
}