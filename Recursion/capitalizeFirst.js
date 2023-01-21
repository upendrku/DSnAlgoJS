function capitalizeFirst(array) {
    // for first word
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    // for rest except last word
    const result = capitalizeFirst(array.slice(0, -1));
    const lastWord = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    result.push(lastWord);
    return result;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']