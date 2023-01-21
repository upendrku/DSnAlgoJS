function capitalizeWords(wordsArr) {
    if(wordsArr.length === 1) {
        return [wordsArr[0].toUpperCase()]
    } else {
        const firstWord = wordsArr[0].toUpperCase()
        const rest = capitalizeWords(wordsArr.slice(1))
        return [firstWord, ...rest]
    }
}
  
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']