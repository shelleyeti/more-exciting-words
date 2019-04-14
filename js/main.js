// If the current value of `i` divided by 3 has no remainder, add an exclamation point to the end of the word and then concatenate it to `buildMeUp`.

// Otherwise, just concatenate the word itself.

// Print buildMeUp to the console


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""
    for (let i = 0; i <= theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            console.log (buildMeUp += theWordArray[i] + " ! ")
        } else {
            console.log (buildMeUp += theWordArray[i] + " ")
        }
    }
}

addExcitement(sentence)
