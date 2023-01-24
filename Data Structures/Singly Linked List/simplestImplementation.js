// In cases where you are just given an array and want to convert it to singly linked list and use it for further operations
// you can use this

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ? next : null;
    }
}

// const initializeLinkedListFromArray = array => {
//     if (array. length === 0) {
//         return [];
//     }
//     let head = new Node(array[0]);
//     let current = head;
//     for (let i = 1; i < array.length; i++) {
//         let newNode = new Node(array[i]);
//         current.next = newNode;
//         current = current.next;
//     }
//     return head;
// }
    
const initializeLinkedListFromArray = array => {
    return array.reverse().reduce((acc, curr) => new Node(curr, acc), null)
}

console.log(initializeLinkedListFromArray([99, 56, 1000, 356, 566, 999, 1, 0]))