// @ts-check

import { faker } from '@faker-js/faker'
import getImplementation from '../implementations/functions.js'

const filterUsers = getImplementation()

console.log(filterUsers)

let users = []

// BEGIN (write your solution here)
beforeEach(() => {
  for (let i = 0; i < 10; i++) {
    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    })
  }
})
// END

test('One property', () => {
  const expected1 = users.filter(user => user.email === users[0].email)
  expect(filterUsers(users, { email: users[0].email })).toEqual(expected1)

  const expected2 = users.filter(user => user.firstName === users[0].firstName)
  expect(filterUsers(users, { firstName: users[0].firstName })).toEqual(expected2)

  const expected3 = users.filter(user => user.lastName === users[0].lastName)
  expect(filterUsers(users, { lastName: users[0].lastName })).toEqual(expected3)
})
