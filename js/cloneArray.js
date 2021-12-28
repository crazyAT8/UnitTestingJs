function cloneArray(array) {
    return [...array]               //this is a spread operator syntax
}                                   //essentially this is duplicating the array and creating a brand new array from the current array that we're given

module.exports = cloneArray