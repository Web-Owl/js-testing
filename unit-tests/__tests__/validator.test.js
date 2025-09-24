// @ts-check

import _ from 'lodash'
import getImplementation from '../implementations/index.js'

const makeValidator = getImplementation()

test('validator', () => {
  const validator = makeValidator()
  expect(validator.isValid('value')).toBe(true)

  validator.addCheck(_.isNumber)
  expect(validator.isValid('string')).toBe(false)

  validator.addCheck(v => v > 10)
  expect(validator.isValid(100)).toBe(true)

  validator.addCheck(v => v % 2 === 0)
  expect(validator.isValid(11)).toBe(false)
  expect(validator.isValid(12)).toBe(true)
  expect(validator.isValid(8)).toBe(false)
})