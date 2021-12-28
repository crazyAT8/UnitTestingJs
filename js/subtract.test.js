//const { test } = require('picomatch')
    //this was added after the test function was created

//const { test } = require('picomatch')
    //this was added after the second test function was created

const subtract = require('./subtract')

/*test('properly subtracting two numbers', () => {
    expects(
        sum(1, 2)
    ).toBe(-1)
})*/
                                    //running this will get you an error
                                        //bc the "sum" needs to be "subtract"

test('properly subtracting two numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1)
})