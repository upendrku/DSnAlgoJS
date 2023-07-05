// Linear and Binary search

// Linear seach

const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

function binarySearch(arr, num) {
    let startIndex = 0
    let lastIndex = arr.length
    return recursiveBinarySearch(arr, num, startIndex, lastIndex)
}

function recursiveBinarySearch(arr, x, start, end) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        return mid;
    } else if (arr[mid] < x) {
        return recursiveBinarySearch(arr, x, mid + 1, end);
    } else {
        return recursiveBinarySearch(arr, x, start, mid - 1);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1