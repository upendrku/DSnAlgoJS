<code>

## B-Tree
In computer science, a B-tree is a self-balancing tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.

## What is it?
B-tree nodes have many more than two children  
A B-tree node may contain more than just a single element (also called keys)
Every B-tree depends on a positive constant integer called MINIMUM, which is used to determine how many elements are held in a single node

## How does it work?
Lots and lots of rules that you almost certainly do not need to know about or memorize! Mostly regarding how many keys/children a tree can have
If you're curious - https://github.com/dcodeIO/btree.js

## Where is it used?
Database Indexing and general storage
Filesystems (implementing directories/folders)
The B-tree is optimized for systems that read and write large blocks of data since they are usually a shallow but wide data structure

## AVL Tree
In computer science, an AVL tree is a self-balancing binary search tree.
In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.

## How does it work?
A binary search tree is an AVL tree if the difference in height between the subtrees of each of its nodes is between -1 and +1. Said another way, a BST is an AVL tree if it is an empty tree or if its subtrees are AVL trees and the difference in height between its left and right subtree is between -1 and +1.

## Where is it used?
When self-balancing is needed. AVL trees guarantee log n time, but at a higher cost in space. 
Where lookup is most frequently used (there are better self-balancing BSTs for insertion/removal)
To implement data structures in lower level languages (maps in Android)

## Red Black Tree
In computer science, a red–black tree is a kind of self-balancing binary search tree. Each node stores an extra bit representing "color", used to ensure that the tree remains balanced during insertions and deletions.

## What is it?
A self balancing binary search tree, with a few rules!
    Each node is either red or black.
    The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.
    All leaves (NIL) are black.
    If a node is red, then both its children are black.
    Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes. 

## Where is it used?
To implement data structures in lower level languages like a map in C++ or TreeMaps and TreeSets in Java
Rebalancing is a bit less effort than AVL trees 
Red-Black Trees offers slightly faster insertion than AVL, at the cost of slightly slower lookup.

## Bloom Filter
A Bloom filter is a space-efficient probabilistic data structure

## What is it?
A data structure that uses a hash function to store values
Bloom filters quickly answer questions around, “is a particular item in a collection?"
Very rarely, it will say Yes when the answer is actually No 
It will never say No, when the answer is actually Yes).
You also can’t remove an item from a Bloom filter.
The more space, the fewer false positives

## Where is it used?
Caching! This is a very common use
Typeahead Searches
Recommendation Engines (has this person seen a particular article?)
Detecting Click Fraud
Test if a URL has been visited for privacy / security concerns
When you have a tolerance for false negatives but no tolerance for false positives

## Recap
B-Trees are trees that can contain more than two children and are extremely useful for quick lookup, insertion and reading
AVL Trees are self balancing trees that guarantee logarithmic insertion/access and removal
Red Black Trees are also self balancing binary search trees that include quite a few more rules, but are more common than AVL trees
Bloom Filters are excellent data structures for knowing if a value is not in a set with certainty
You will not need to implement these, knowledge is much more important!

</code>