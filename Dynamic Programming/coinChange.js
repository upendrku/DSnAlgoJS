var assert = require('assert');
/*
Write a function called coinChange which accepts two parameters: an array of denominations and a value. 
The function should return the number of ways you can obtain the value from the given collection of denominations. 
You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.
*/

// This solution uses memoization
const coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

try {
    assert.equal(coinChange([2, 3, 5], 11), 3);

    console.log('PASSED: ' + 'First Test: coinChange([2, 3, 5], 11)');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(coinChange([2, 3, 5, 7], 17), 3);

    console.log('PASSED: ' + 'Second Test: coinChange([2, 3, 5, 7]');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(coinChange([2, 3, 7], 15), 4);

    console.log('PASSED: ' + 'Third Test: coinChange([2, 3, 7], 15)');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(coinChange([3, 5], 7), -1);

    console.log('PASSED: ' + 'Fourth Test: coinChange([3, 5], 7)');
} catch (err) {
    console.log(err);
}

try {
    assert.equal(coinChange([2, 3, 5], 1), -1);

    console.log('PASSED: ' + 'Fifth Test: coinChange([2, 3, 5]');
} catch (err) {
    console.log(err);
}