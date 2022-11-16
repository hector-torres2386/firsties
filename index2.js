

/*
const handleMiddleware = butterfly => cricket => ant => {
    if (typeof ant === 'function') {
        ant(butterfly.dispatch, butterfly.getState)
        return
    }

    cricket(ant) // implies that cricket is a function
}
*/


//constant handleMiddleware is referrencing butterfly, which is a function of cricket, which is a function of ant
//ant is unknown
//constant handleMiddleware
// An annonymous fn has no name ie.  function () {}

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

handleMiddleware({
    dispatch: "Some value",
    getState: "Some Value"
})(()=>{})(90)


