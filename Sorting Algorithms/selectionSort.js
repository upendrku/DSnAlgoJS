// If you are actually worrying about memory or doing the swap itself then only prefer this over bubble sort
// because here we are minimizing number of swaps
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smallestValIndex = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[smallestValIndex] > arr[j]) {
                smallestValIndex = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[smallestValIndex]
        arr[smallestValIndex] = temp
    }
    return arr
}

console.log(selectionSort([34, 22, 10, 19, 17]))
