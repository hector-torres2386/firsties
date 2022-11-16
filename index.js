// JS scripting programming language
// programming language - used to tell a computer what to do
// scripting programming language is a language that is interpreted by an interpreter
// node is a JS interpreter

// Variable is a thing that contains value
// string is a sequence of characters
// string vs number val1 = string, 5 = number

// let var1 = 'val1'
let var2 = 5


console.log(var2); // print this string into the consol

// function is a named, configurable and a set of instructions with optional return value
// declared the function
function fn1(input1) {
    if (input1 < 5) {
        console.log('this is a function')
        console.log('more things')
    } else {
        console.log('something else')
    }
    return input1 + 1
}

const r = fn1(3)
fn1(r)
fn1(4) // some name followed by (...) then that is a function call

function fn2(input1, input2) {
    input1(input2)
}
fn2(fn1, r)

//use fn1 three times
// declaring fn1
// calling fn1
// referring to fn1 within fn2

// lots of different ways to accomplish
// good for experienced devs
// bad for noobs

// arrow fns - differnt syntax for declaring a function
// syntax is the grammar of programming


const fn3 = (input1) => {
    if (input1 < 5) {
        console.log('this is a function')
        console.log('more things')
    } else {
        console.log('something else')
    }
    return input1 + 1
}

fn3(2)

//when an arrow fn has 1 arg the paranthesis are optional
//when an arrow fn has a single expression the brackets are optional {}

const itGetsWorse = input1 => input1+1
const handleMiddleWare = storeAPI => next => action => {
    if (typeof action === 'function'){
        action(storeAPI.dispatch, storeAPI.getState)
        return
    }

    next(action)
}

function handleMiddleWare3(butterfly) {
    return function (cricket) {
        return function (ant) {
        if (typeof action === 'function') {
            ant(butterfly.dispatch, butterfly.getState)
            return
        }
        }
    }
    next(act)
}


