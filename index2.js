

/*
const handleMiddleware = butterfly => cricket => ant => {
    if (typeof ant === 'function') {
        ant(butterfly.dispatch, butterfly.getState)
        return
    }

    cricket(ant) // implies that cricket is a function
}
*/


// 3 functions are being declared
// 1 variable is being declared
// 3 arguments are being declared (argument and parameter are interchangable)
// functions names are NA they are anon
// the typeof of the first function is 'function'
// also for the second function
// the third function is unknown or undefined or void


//constant handleMiddleware is referrencing butterfly, which is a function of cricket, which is a function of ant
//ant is unknown
//constant handleMiddleware
// An annonymous fn has no name ie.  function () {}
// handleMiddleware is a variable whose type is a function
/*
<!--
function handleMiddleware4(butterfly) {
    return function useCricket(cricket) {
        return function useAnt(ant) {
            if (typeof ant === 'function') {
                ant(butterfly.dispatch, butterfly.getState)
                return
            }

            cricket(ant) // implies that cricket is a function
        }
    }
}
*/

function handleMiddleware(butterfly) {
    return function funCricket(cricket) {
        return function funAnt(ant) {
            if (typeof ant === 'function') {
                ant(butterfly.dispatch, butterfly.getState)
                return
            } else {console.log('wut?')}
            cricket(ant)
        }
    }
}

console.log(typeof handleMiddleware)

// suppose we want to declare all three of the arguments
// we would call the function like this; handleMiddleware()()()



handleMiddleware({
    dispatch: "Some value",
    getState: "Some Value"
})(()=>{})(90)

