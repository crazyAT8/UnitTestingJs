                                /*(if commented out) Added after test function was written*/ 

//const { test } = require('picomatch')
//const { expect } = require('@jest/globals')
//const { test } = require('picomatch')

//const { test } = require('picomatch')
        //third

const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')

/*test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toBe(array)       //when we initially run this, we will get a failure
})*/                                                //this is the difference btw toBe and toEqual
                                                        //run test by typing "npm test"
                                                            //reference pass by value and pass by reference

/*test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
})*/
                                                //passed bc both arrays have the same stucture
                                                    //the difference is that they both don't have the same memory address

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)        //this makes sure that we keep a copy of the same array
    expect(cloneArray(array)).not.toBe(array)       //this makes a seperate array from the original array
})
                                                //we do this to make sure that our clone array is a seperate array and not just a copy