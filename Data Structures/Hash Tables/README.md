<code>

## WHAT IS A HASH TABLE?
Hash tables are used to store key-value pairs.
They are like arrays, but the keys are not ordered.
Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

## USES
Python has Dictionaries
JS has Objects(Objects have some restrictions, but are basically hash tables) and Maps
Java, Go, & Scala have Maps
Ruby has...Hashes

## INTRODUCTORY EXAMPLE
Imagine we want to store some colors
We could just use an array/list:
[ "#ff69b4","#ff4500","#00ffff" ] 
Not super readable!  What do these colors correspond to?
It would be nice if instead of using indices to access the colors, we could use more human-readable keys.
orangered  --> #ff4500
pink       --> #ff69b4
cyan       --> #00ffff

colors["cyan"] is way better than colors[2]

To implement a hash table, we'll be using an array.
In order to look up values by key, we need a way to convert keys into valid array indices.
A function that performs this task is called a hash function.

## WHAT MAKES A GOOD HASH? (not a cryptographically secure one)
Fast (i.e. constant time)
Doesn't cluster outputs at specific indices, but distributes uniformly
Deterministic (same input yields same output)

Fast Non-Example
function slowHash(key) {
  for (var i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}

Uniformly Distributes Values Non-Example
function sameHashedValue(key) {
  return 0;
}

Deterministic Non-Example
function randomHash(key) {
  return Math.floor(Math.random() * 1000)
}

## Simple Hash Example
Here's a hash that works on strings only:
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3

## REFINING OUR HASH
Problems with our current hash - 
    Only hashes strings (we won't worry about this)
    Not constant time - linear in key length
    Could be a little more random

## Hashing Revisited
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

The prime number in the hash is helpful in spreading out the keys more uniformly.
It's also helpful if the array that you're putting values into has a prime length.
You don't need to know why. (Math is complicated!) But here are some links if you're curious.
https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/ 
https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why 

## Dealing with Collisions
Even with a large array and a great hash function, collisions are inevitable. 
There are many strategies for dealing with collisions, but we'll focus on two:
    Separate Chaining
    Linear Probing

## Separate Chaining
With separate chaining, at each index in our array we store values using a more sophisticated data structure 
(e.g. an array or a linked list).
This allows us to store multiple key-value pairs at the same index.

## Linear Probing
With linear probing, when we find a collision, we search through the array to find the next empty slot.
Unlike with separate chaining, this allows us to store a single key-value at each index.

## A HashTable Class
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

## Set / Get
set
    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate chaining
get
    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If the key isn't found, returns undefined

## Keys / Values
keys
    Loops through the hash table array and returns an array of keys in the table
values
    Loops through the hash table array and returns an array of values in the table

## BIG O of HASH TABLES (Average Case)
Insert: O(1)
Deletion: O(1)
Access: O(1)

Worst Case - O(n)

## Recap
Hash tables are collections of key-value pairs
Hash tables can find values quickly given a key
Hash tables can add new key-values quickly
Hash tables store data in a large array, and work by hashing the keys
A good hash should be fast, distribute keys uniformly, and be deterministic
Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
When in doubt, use a hash table!

</code>

