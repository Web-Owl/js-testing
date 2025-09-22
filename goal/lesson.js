// @ts-check
import getFunction from 'functions.js'

const get = getFunction()

// BEGIN (write your solution here)
if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('boom!')
}
if (get({}, 'key', 'value') !== 'value') {
  throw new Error('boom!')
}
if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
  throw new Error('boom!')
}
// END
