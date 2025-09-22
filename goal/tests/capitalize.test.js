import capitalize from '../src/capitalize.js'
import { strict as assert } from 'node:assert'


assert.equal(capitalize(''), '')
assert.equal(capitalize('hello'), 'Hello')

assert.deepEqual({}, {}) // всё ок
assert.deepEqual({ key: 'value' }, { key: 'value' }) // всё ок
assert.notDeepEqual({ a: 1 }, { a: '1' }) // всё ок
assert.deepEqual({ key: 'value' }, { key: 'another value' }) // Бум!


console.log('Все тесты пройдены!')
