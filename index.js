// Code your solution here
function findMatching(array, string) {
    return array.filter(x => x.toLowerCase() ===string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(x => x[0].toLowerCase() === string[0].toLowerCase())
}

function matchName(array, string) {
    return array.filter(x => x.name === string)
}