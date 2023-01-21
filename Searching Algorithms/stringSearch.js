// O(n^2)
function stringSearch(str, partStr) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < partStr.length; j++) {
            if(partStr[j] !== str[i+j]) {
                break;
            }
            if(j === partStr.length - 1) {
                count++
            }
        }
    }
    return count
}

// NOTE: This is not the best way to do it. Will Update it.

console.log(stringSearch("lorie loled", 'lol'))