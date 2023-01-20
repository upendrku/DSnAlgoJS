Recursion is used in
JSON.parse / JSON.stringify
document.getElementById and DOM traversal algorithms
Object traversal

No base case
Forgetting to return or returning the wrong thing!
Stack overflow! 

HELPER METHOD RECURSION
function outer(input){
    var outerScopedVariable = []
    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }  
    helper(input)
    return outerScopedVariable;
}

PURE RECURSION
function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0) {
        return newArr;
    } 
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    } 
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}