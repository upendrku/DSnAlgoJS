<code>

## WHAT IS DYNAMIC PROGRAMMING
"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

IT ONLY WORKS ON PROBLEMS WITH... OPTIMAL SUBSTRUCTURE & OVERLAPPING SUBPROBLEMS

## OVERLAPPING SUBPROBLEMS
A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

## FIBONACCI SEQUENCE
"Every number after the first two is the sum of the two preceding ones"
1 1 2 3 5 8 13

## MERGESORT
mergeSort([10,24,76,73])
NO OVERLAPPING SUBPROBLEMS!

mergeSort([10,24,10,24])
YES OVERLAPPING SUBPROBLEMS!

## OPTIMAL SUBSTRUCTURE
A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

## SHORTEST PATH
OPTIMAL SUBSTRUCTURE!

## LONGEST SIMPLE PATH (simple means no repeating)
NO OPTIMAL SUBSTRUCTURE!

## MEMOIZATION
Storing the results of expensive function calls and returning the cached result when the same inputs occur again
Usually done using recursion
E.g. For generating Fibonacci sequence
// O(n)
function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

## TABULATION
Storing the result of a previous result in a "table" (usually an array)
Usually done using iteration
Better space complexity can be achieved using tabulation
E.g. Again same 
function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

## WHERE IS THIS ACTUALLY USED?
Artificial Intelligence
Speech Recognition
Caching
Image Processing
Shortest Path Algorithms
Much, much more!

## GREEDY ALGORITHMS
A greedy algorithm is an algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum.

## WHAT?
An algorithm that makes the best guess about what the right answer is and tries to solve it that way as quickly as possible!

## WHERE ARE THEY USED?
You've seen one already!
Remember how Dijkstra's Algorithm works!

## BACKTRACKING
"Backtracking is a general algorithm for finding all (or some) solutions to notably constraint satisfaction problems  
It incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution"

## WHAT IS IT?
Going through a solution and retracing steps backward if the solution is not valid.

## WHERE IS IT USED?
Puzzle Solving - Sudoku
N Queens / Rooks

## RECAP
Dynamic Programming is the idea of breaking down a problem into smaller subproblems - it's hard
Optimal substructure is required to use dynamic program and involves figuring out the correct expression to consistently solve subproblems
Overlapping subproblems is the second essential part of dynamic programming 
Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
Backtracking is quite useful when solving for restrictive conditions with unknown possibilities

</code>