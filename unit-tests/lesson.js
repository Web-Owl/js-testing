import makeStack from '../src/stack.js'

const stack = makeStack()
stack.isEmpty() // true
stack.push(1) // (1)
stack.push(2) // (1, 2)
stack.push(3) // (1, 2, 3)
stack.isEmpty() // false
stack.pop() // 3. В стеке (1, 2)
stack.pop() // 2. В стеке (1)
stack.pop() // 1. В стеке пусто
stack.isEmpty() // true