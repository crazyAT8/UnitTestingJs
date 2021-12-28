//const { expect } = require('@jest/globals')
//const { test } = require('picomatch')
const sum = require('./sum')

/*
test('properly adds two numbers', () => {           //this is bulky javaScript
    if (sum(1, 2) === 3){
        someCode
    } else {
        throw Error
    }
})
*/

test('properly adds two numbers', () => {
    expect(                                     //first section is expect; 
        sum(1, 2)                               //which is taking the components of this section and
    ).toBe(3)                                   //having it be related to this section (there are a lot of functions that you can used)
})                                                  //.toBe - .toEqual - .notToBe - .toBeNull - .toBeUndefined - .etc

//1 + 2 == 3