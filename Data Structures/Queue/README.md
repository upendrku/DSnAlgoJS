## WHAT IS A QUEUE?
A FIFO data structure! <br />
First In First Out <br />

## USES
Background tasks <br />
Uploading resources <br />
Printing / Task processing <br />

## A Queue Class
<code>
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
</code>

## Enqueue
Adding to the beginning of the Queue! <br />
Remember, queues are a FIFO data structure <br />

## Enqueue Pseudocode
This function accepts some value <br />
Create a new node using that value passed to the function <br />
If there are no nodes in the queue, set this node to be the first and last property of the queue <br />
Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node <br />
Increment the size of the queue by 1 <br />

## Dequeue
Removing from the beginning of the Queue! <br />
Remember, queues are a FIFO data structure <br />

## Dequeue pseudocode
If there is no first property, just return null <br />
Store the first property in a variable <br />
See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null <br />
If there is more than 1 node, set the first property to be the next property of first  <br />
Decrement the size by 1 <br />
Return the value of the node dequeued <br />

## BIG O of QUEUES
Insertion -   O(1) <br />
Removal -   O(1) <br />
Searching -   O(N) <br />
Access -   O(N) <br />

## RECAP
Queues are a FIFO data structure, all elements are first in first out. <br />
Queues are useful for processing tasks and are foundational for more complex data structures <br />
Insertion and Removal can be done in O(1) <br />