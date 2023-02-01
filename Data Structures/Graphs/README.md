<code>

## WHAT ARE GRAPHS
A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, 
together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered 
pairs for a directed graph. i.e. Nodes + Connections

## USES FOR GRAPHS
Social Networks
Location / Mapping
Routing Algorithms
Visual Hierarchy
File System Optimizations
EVERYWHERE!

Recommendations
"People also watched"
"You might also like..."
"People you might know"
"Frequently bought with"

## ESSENTIAL GRAPH TERMS
Vertex - a node
Edge - connection between nodes
Weighted/Unweighted - values assigned to distances between vertices
Directed/Undirected - directions assigned to distanced between vertices

## UNDIRECTED GRAPH
Undirected graphs have edges that do not have a direction.
Ex. Facebook Friends Graph

## DIRECTED GRAPH
A directed graph, also called a digraph, is a graph in which the edges have a direction.
Ex. Instagram Followers Graph

## WEIGHTED GRAPH
A weighted graph is a graph in which each branch is given a numerical weight. A weighted graph is therefore 
a special type of labeled graph in which the labels are numbers (which are usually taken to be positive).
Ex. Google Map directions

## HOW DO WE STORE THIS???
A--B--C--D--E--F
|______________|

ADJACENCY MATRIX
_	A	B	C	D	E	F
A	0	1	0	0	0	1
B	1	0	1	0	0	0
C	0	1	0	1	0	0
D	0	0	1	0	1	0
E	0	0	0	1	0	1
F	1	0	0	0	1	0

ADJACENCY LIST
{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"]
}

## DIFFERENCES & BIG O
OPERATION	ADJACENCY LIST	ADJACENCY MATRIX
Add Vertex	    O(1)	        ​O(|V^2|)
Add Edge	    O(1)	        O(1)
Remove Vertex	O(|V| + |E|)	​O(|V^2|)
Remove Edge	    O(|E|)	        O(1)
Query	        O(|V| + |E|)	O(1)
Storage	        O(|V| + |E|)	​O(|V^2|)

## Adjacency List Vs. Adjacency Matrix
Adjacency List                                      Adjacency Matrix
Can take up less space (in sparse graphs)           Takes up more space (in sparse graphs)
Faster to iterate over all edges                    Slower to iterate over all edges
Can be slower to lookup specific edge               Faster to lookup specific edge

NOTE: We generally use Adjacency List as Most data in the real-world tends to lend itself to sparser 
and/or larger graphs.

## OUR GRAPH CLASS
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
}
WE ARE BUILDING AN UNDIRECTED GRAPH

## ADDING A VERTEX
Write a method called addVertex, which accepts a name of a vertex
It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
g.addVertex("Tokyo")
{
    "Tokyo": []
}

## ADDING AN EDGE
This function should accept two vertices, we can call them vertex1 and vertex2
The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
Don't worry about handling errors/invalid vertices

{
  "Tokyo": [],
  "Dallas": [],
  "Aspen": []
}
        ||
        \/
g.addEdge("Tokyo", "Dallas")
        ||
        \/
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo"],
  "Aspen": []
}
        ||
        \/
g.addEdge("Dallas", "Aspen")
        ||
        \/
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

## REMOVING AN EDGE
This function should accept two vertices, we'll call them vertex1 and vertex2
The function should reassign the key of vertex1 to be an array that does not contain vertex2
The function should reassign the key of vertex2 to be an array that does not contain vertex1
Don't worry about handling errors/invalid vertices

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}
        ||
        \/
g.removeEdge("Tokyo", "Dallas")
        ||
        \/
{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}

## REMOVING A VERTEX
The function should accept a vertex to remove
The function should loop as long as there are any other vertices in the adjacency list for that vertex
Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
delete the key in the adjacency list for that vertex

{
  "Tokyo": ["Dallas", "Hong Kong"],
  "Dallas": ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
  "Aspen": ["Dallas"],
  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
  "Los Angeles": ["Hong Kong", "Dallas"]
}
        ||
        \/
g.removeVertex("Hong Kong")
        ||
        \/
{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen","Los Angeles"],
  "Aspen": ["Dallas"],
  "Los Angeles": ["Dallas"]
}

## GRAPH TRAVERSAL
Visiting/Updating/Checking each vertex in a graph

## GRAPH TRAVERSAL USES
Peer to peer networking
Web crawlers
Finding "closest" matches/recommendations
Shortest path problems
GPS Navigation
Solving mazes
AI (shortest path to win the game)

## DEPTH FIRST
Explore as far as possible down one branch before "backtracking"

## DFS PSEUDOCODE
Recursive -
 DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
       if neighbor is not visited:
          recursively call DFS on neighbor

PSEUDOCODE - (Recursive)
The function should accept a starting node
Create a list to store the end result, to be returned at the very end
Create an object to store visited vertices
Create a helper function which accepts a vertex
    The helper function should return early if the vertex is empty
    The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    Loop over all of the values in the adjacencyList for that vertex
    If any of those values have not been visited, recursively invoke the helper function with that vertex
Invoke the helper function with the starting vertex
Return the result array

PSEUDOCODE - (Iterative)
The function should accept a starting node
Create a stack to help use keep track of vertices (use a list/array)
Create a list to store the end result, to be returned at the very end
Create an object to store visited vertices
Add the starting vertex to the stack, and mark it visited
While the stack has something in it:
    Pop the next vertex from the stack
    If that vertex hasn't been visited yet:
        ​Mark it as visited
        Add it to the result list
        Push all of its neighbors into the stack
Return the result array

## DEPTH FIRST TRAVERSAL
The function should accept a starting node
Create an object to store visited nodes and an array to store the result
Create a helper function which accepts a vertex
The helper function should place the vertex it accepts into the visited object and push that vertex into the results
Loop over all of the values in the adjacencyList for that vertex
If any of those values have not been visited, invoke the helper function with that vertex
return the array of results

## BREADTH FIRST
Visit neighbors at current depth first!

This function should accept a starting vertex
Create a queue (you can use an array) and place the starting vertex in it
Create an array to store the nodes visited
Create an object to store nodes visited
Mark the starting vertex as visited
Loop as long as there is anything in the queue
Remove the first vertex from the queue and push it into the array that stores nodes visited
Loop over each vertex in the adjacency list for the vertex you are visiting.
If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
Once you have finished looping, return the array of visited nodes

## Shortest Path Algorithms
When working with weighted and directed/undirected graphs, we very commonly want to know how 
to get from one vertex to another! Better yet, how to do it quickly.

What's the fastest way to get from point A to point B?
(Please refer Algorithm folder for Dijkstra's Algorithm)

## A simple PQ
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

Notice we are sorting which is O(N * log(N))

## Can we do better?
We sure can! Using a min binary heap
Right now, let's focus on Dijkstra's

## Dijkstra's Pseudocode
This function should accept a starting and ending vertex
Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
Start looping as long as there is anything in the priority queue
    dequeue a vertex from the priority queue
    If that vertex is the same as the ending vertex - we are done!
    Otherwise loop through each value in the adjacency list at that vertex
        Calculate the distance to that vertex from the starting vertex
        if the distance is less than what is currently stored in our distances object
            update the distances object with new lower distance
            update the previous object to contain that vertex
            enqueue the vertex with the total distance from the start node

## Improving Dijkstra's
Dijkstra's algorithm is greedy! That can cause problems!
We can improve this algorithm by adding a heuristics (a best guess)

## Recap
Graphs are collections of vertices connected by edges
Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
Graphs can contain weights and directions as well as cycles
Just like trees, graphs can be traversed using BFS and DFS
Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*

</code>