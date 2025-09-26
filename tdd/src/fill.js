// @ts-check

// BEGIN (write your solution here)
export default (coll, value, start = 0, end = coll.length) => {
  for (let i = start; i < end; i += 1) {
    if (i == coll.length) {
      break;
    }
    coll[i] = value
  }
  return coll
}
// END


// BEGIN
const fill = (coll, value, start = 0, end = coll.length) => {
  const collLength = coll.length
  const normalizedStart = start > collLength ? end : start
  const normalizedEnd = end > collLength ? collLength : end
  for (let i = normalizedStart; i < normalizedEnd; i += 1) {
    coll[i] = value
  }
  return coll
}

export default fill
// END