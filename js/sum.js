function sum(a, b) {
    return a + b
}

//this is an example for the coverage function in jest
    //to show that a random function is stated but not called upon
        //which will show up in coverage table

function helper () {
    console.log('Helper')
}

module.exports = sum