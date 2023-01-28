## WHAT IS A TREE?
A data structure that consists of nodes in a parent / child relationship <br />

Lists - linear <br />
Trees - nonlinear <br />

A Singly Linked List <br />
(sort of a special case of a tree) <br />

## TREE TERMINOLOGY
Root - The top node in a tree. <br />
Child -A node directly connected to another node when moving away from the Root. <br />
Parent - The converse notion of a child. <br />
Siblings -A group of nodes with the same parent. <br />
Leaf - A node with no children. <br />
Edge - The connection between one node and another. <br />

## KINDS OF TREES
Trees <br />
Binary Trees <br />
Binary Search Trees <br />

## TREES APPLICATIONS
HTML DOM <br />
Network Routing <br />
Abstract Syntax Tree <br />
Artificial Intelligence <br />
Folders in Operating Systems <br />
Computer File Systems <br />

## BINARY TREES APPLICATIONS
Decision Trees (true / false) <br />
Database Indicies <br />
Sorting Algorithms <br />

## HOW BSTS WORK
Every parent node has at most two children <br />
Every node to the left of a parent node is always less than the parent <br />
Every node to the right of a parent node is always greater than the parent <br />

## The BinarySearchTree Class
<code>
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
</code>

## INSERTING A NODE
Steps - Iteratively or Recursively - <br />
Create a new node <br />
Starting at the root <br />
    &nbsp;Check if there is a root, if not - the root now becomes that new node! <br />
    &nbsp;If there is a root, check if the value of the new node is greater than or less than the value of the root <br />
    &nbsp;If it is greater  <br />
        &nbsp;&nbsp;Check to see if there is a node to the right <br />
            &nbsp;&nbsp;&nbsp;If there is, move to that node and repeat these steps <br />
            &nbsp;&nbsp;&nbsp;If there is not, add that node as the right property <br />
    &nbsp;If it is less <br />
        &nbsp;&nbsp;Check to see if there is a node to the left <br />
            &nbsp;&nbsp;&nbsp;If there is, move to that node and repeat these steps <br />
            &nbsp;&nbsp;&nbsp;If there is not, add that node as the left property <br />

## Finding a Node in a BST
Steps - Iteratively or Recursively - <br />
Starting at the root <br />
Check if there is a root, if not - we're done searching! <br />
If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done! <br />
If not, check to see if the value is greater than or less than the value of the root <br />
If it is greater  <br />
    &nbsp;Check to see if there is a node to the right <br />
        &nbsp;&nbsp;If there is, move to that node and repeat these steps <br />
        &nbsp;&nbsp;If there is not, we're done searching! <br />
If it is less <br />
    &nbsp;Check to see if there is a node to the left <br />
        &nbsp;&nbsp;If there is, move to that node and repeat these steps <br />
        &nbsp;&nbsp;If there is not, we're done searching! <br />

## Big O of BST
Insertion - O(log n) <br />
Searching - O(log n) <br />
NOT guaranteed! <br />
Double the number of nodes...  <br />
You only increase the number of steps to insert/find by 1 <br />

Big O of BST <br />
Insertion - O(log n) <br />
Searching - O(log n) <br />
NOT guaranteed! <br />

## TRAVERSING A TREE
Two ways: <br />
Breadth-first Search <br />
Depth-first Search <br />

## BFS Steps - Iteratively ~ Steps - Iteratively
Create a queue (this can be an array) and a variable to store the values of nodes visited <br />
Place the root node in the queue <br />
Loop as long as there is anything in the queue <br />
    &nbsp;Dequeue a node from the queue and push the value of the node into the variable that stores the nodes <br />
    &nbsp;If there is a left property on the node dequeued - add it to the queue <br />
    &nbsp;If there is a right property on the node dequeued - add it to the queue <br />
Return the variable that stores the values <br />

## DFS Steps - InOrder ~ Steps - Recursively
Create a variable to store the values of nodes visited <br />
Store the root of the BST in a variable called current <br />
Write a helper function which accepts a node <br />
    &nbsp;If the node has a left property, call the helper function with the left property on the node <br />
    &nbsp;Push the value of the node to the variable that stores the values <br />
    &nbsp;If the node has a right property, call the helper function with the right property on the node <br />
Invoke the helper function with the current variable <br />
Return the array of values <br />

## DFS - PreOrder ~ Steps - Recursively
Create a variable to store the values of nodes visited <br />
Store the root of the BST in a variable called current <br />
Write a helper function which accepts a node <br />
    &nbsp;Push the value of the node to the variable that stores the values <br />
    &nbsp;If the node has a left property, call the helper function with the left property on the node <br />
    &nbsp;If the node has a right property, call the helper function with the right property on the node <br />
Invoke the helper function with the current variable <br />
Return the array of values <br />

## DFS - PostOrder ~ Steps - Recursively
Create a variable to store the values of nodes visited <br />
Store the root of the BST in a variable called current <br />
Write a helper function which accepts a node <br />
    &nbsp;If the node has a left property, call the helper function with the left property on the node <br />
    &nbsp;If the node has a right property, call the helper function with the right property on the node <br />
    &nbsp;Push the value of the node to the variable that stores the values <br />
    &nbsp;Invoke the helper function with the current variable <br />
Return the array of values <br />

## BFS? DFS? Whish is better?
BREADTH FIRST - Lots of nodes to keep track of! as well as Fewer nodes to keep track of! <br />
DEPTH FIRST - Fewer nodes to keep track of <br />
DFS - InOrder - Used commonly with BST's. Notice we get all nodes in the tree in their underlying order <br />
DFS - PreOrder - Can be used to "export" a tree structure so that it is easily reconstructed or copied. <br />

## RECAP
Trees are non-linear data structures that contain a root and child nodes <br />
Binary Trees can have values of any type, but at most two children for each parent <br />
Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater <br />
We can search through Trees using BFS and DFS <br />

## Removing a Node in a BST
This one can be tough! <br />

## Removing a Node - 0 children ~ Steps - Iteratively
Find the parent of the node that needs to be removed and the node that needs to be removed <br />
If the value we are removing is greater than the parent node <br />
    &nbsp;Set the right property of the parent to be null <br />
If the value we are removing is less than the parent node​ <br />
    &nbsp;Set the left property of the parent to be null <br />
Otherwise, the node we are removing has to be the root, so set the root to be null <br />

## Removing a Node - 1 child ~ Steps - Iteratively
Find the parent of the node that needs to be removed and the node that needs to be removed <br />
See if the child of the node to be removed is on the right side or the left side <br />
If the value we are removing is greater than the parent node​​ <br />
    &nbsp;Set the right property of the parent to be the child <br />
If the value we are removing is less than the parent node​ <br />
    &nbsp;Set the left property of the parent to be the child <br />
Otherwise, set the root property of the tree to be the child <br />

## Removing a Node - 2 children ~ Steps - Iteratively
Find the parent of the node that needs to be removed and the node that needs to be removed <br />
Find the predecessor node and store that in a variable <br />
Set the left property of the predecessor node to be the left property of the node that is being removed <br />
If the value we are removing is greater than the parent node​​ <br />
    &nbsp;Set the right property of the parent to be the right property of the node to be removed <br />
If the value we are removing is less than the parent node​ <br />
    &nbsp;Set the left property of the parent to be the right property of the node to be removed <br />
Otherwise, set the root of the tree to be the right property of the node to be removed <br />


