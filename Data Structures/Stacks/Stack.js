class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // Here we are adding a new node at start of the list
            // Because we need this add to be of O(1)
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.length;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        // When there is only one thing in the stack
        if(this.first === this.last){
            this.last = null;
        }
        // Here we are poping from start of the list
        // Because we need this add to be of O(1)
        // Remember poping from end requires O(n)
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
}