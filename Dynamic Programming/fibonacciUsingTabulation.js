// Better than memoized solution
function fib(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

// Bottom - Up solution -- [0, 1, 1, _2_, _3_, _5_]

console.log(fib(10000)) // Infinity - because of JS, but atleast does not throw max call stack error