// crude solution O(2^n)
function fibonacci(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// Memoized solution O(n)
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    var res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fibonacci(45))
console.log(fib(45))
console.log(fib(10000)) // Maximum call stack size exceeded