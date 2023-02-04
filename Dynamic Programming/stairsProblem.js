/*
Write a function called stairs which accepts n number of stairs. 
Imagine that a person is standing at the bottom of the stairs and wants to reach the top and 
the person can climb either 1 stair or 2 stairs at a time. Your function should return the number 
of ways the person can reach the top by only climbing 1 or 2 stairs at a time.
*/

// O(n)
function stairs(n) {
    if (n < 3) return n;
    let store = [1, 1]
    for(let i = 2; i <= n; i++) {
        let total = store[1] + store[0]
        store[0] = store[1] 
        store[1] = total
        console.log(store)
    }
    return store[1]
  }

  console.log(stairs(5))