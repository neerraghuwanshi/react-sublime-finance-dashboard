export const toPascalCase = (word) => {
    let newWord = word[0].toLowerCase()
    let prev = ''
    for (let letter of word.slice(1)){
        if (letter !== ' '){
            if (prev === ' '){
                newWord += letter.toUpperCase()
            }
            else{
                newWord += letter.toLowerCase()
            }
        }
        prev = letter
    }
    return newWord
}