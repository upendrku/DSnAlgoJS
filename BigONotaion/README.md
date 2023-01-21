Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

Arithmetic operations are constant
Variable assignment is constant
Accessing elements in an array (by index) or object (by key) is constant
In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
Logarithmic time complexity is great!

Recursion sometimes involves logarithmic space complexity.

Time Complexity
Best ------------------------------------------------> Worst
O(1) > O(log n) > O(n) > O(nlog n) > O(n^2) > O(2^n) > O(n!)

Big O of Objects
Insertion -   O(1)
Removal -   O(1)
Searching -   O(N)
Access -   O(1)

When you don't need any ordering, objects are an excellent choice!

Big O of Object Methods
Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)

Big O of Arrays
Insertion -   It depends....
Removal -   It depends....
Searching -   O(N)
Access -   O(1)

Big O of Array Operations
push -   O(1)
pop -   O(1)
shift -   O(N)
unshift -   O(N)
concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)

------------------------------------------------------------------------------------------------------------------------

We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

Most primitives (booleans, numbers, undefined, null) are constant space
Strings require O(n) space (where n is the string length)
Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

------------------------------------------------------------------------------------------------------------------------

Recap
To analyze the performance of an algorithm, we use Big O Notation
Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
Big O Notation is everywhere, so get lots of practice!