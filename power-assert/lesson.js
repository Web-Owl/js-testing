import assert from 'power-assert'

const user = {
  name: 'Madonna',
  friends: ['Kate', 'Michel'],
  email: 'madonna@example.com',
}

assert(user.name === 'Michel')

const array = [1, 2, 3]
const zero = 0
const two = 2

assert(array.indexOf(zero) === two)

// BEGIN
assert(indexOf(['one', 'two', 8], 'one') === 0)
assert(indexOf([1, 8, 9, 3, 9], 9) === 2)
assert(indexOf([1, 8, 9, 3, 9], 9, 3) === 4)
assert(indexOf([], 9) === -1)
// END