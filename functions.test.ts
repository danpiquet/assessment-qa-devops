const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4,5,6]

describe('shuffleArray should', () => {
  
    test('Array should be same length', () => {
        expect(shuffleArray(testArr).length).toBe(testArr.length)
    })

    test('Array contains the same items', () => {
        let passFail = 'fail'
        let shuffled = shuffleArray(testArr)

        for(let i = 0; i < shuffled.length; i++){
            if(!testArr.includes(shuffled[i])){
                passFail = 'fail'
                return
            } else {
                passFail = 'pass'
            }
        }
        expect(passFail).toBe('pass')


    })

})