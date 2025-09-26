import _ from 'lodash'

// Подготовили коллекцию coll
const coll = ['One', true, 3, 10, 'cat', {}, '', 10, false]

test('includes', () => {
  // Используем coll для тестирования
  expect(_.includes(coll, 3)).toBe(true)
  expect(_.includes(coll, 11)).toBe(false)
})

const coll = [1, 2, 3, 4]

test('filter', () => {
  // Выбираем только чётные
  expect(_.filter(coll, v => v % 2 === 0)).toEqual([2, 4])
})

const now = Date.now() // текущий timestamp

test('first example', () => console.log(now))
test('second example', () => console.log(now))

//  console.log __tests__/index.test.js:3
//    1583871515943
//
//  console.log __tests__/index.test.js:4
//    1583871515943

let now

// Запускается перед каждым тестом
beforeEach(() => {
  now = Date.now() // текущий timestamp
})

test('first example', () => console.log(now))
test('second example', () => console.log(now))

//  console.log __tests__/index.test.js:9
//    1583871515943
//
//  console.log __tests__/index.test.js:10
//    1583871515950



let obj
beforeEach(() => {
  obj = {}
})

test('Add number', () => {
  add(obj, 'key', 12)
  expect(obj).toEqual({ key: 12 })
})

test('Add string', () => {
  add(obj, 'key', 'value')
  expect(obj).toEqual({ key: 'value' })
})


import fs from 'fs'

let fileData

beforeAll(() => {
  fileData = fs.readFileSync('path/to/file')
})

// Такой вызов на уровне модуля (вне хуков), в общем случае, считается неправильным подходом
// fileData = fs.readFileSync('path/to/file');

/*
tests/set.test.js
Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет или добавляет значение по указанному пути.

Данная функция мутирует объект, поэтому каждый запуск тестов будет вносить изменения в исходный объект. Постройте тестирование таким образом, чтобы тесты не зависели друг от друга, а каждая проверка выполнялась в сравнении с исходным объектом.

const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
Подсказки
Используйте хуки для подготовки данных перед каждым запуском теста
_.cloneDeep - рекурсивно создает копию объекта
Неверная реализация функции set() возвращает объект с неправильной структурой
_.set - функция из библиотеки lodash, которая позволяет установить значение указанного свойства объекта по заданному пути; обновляет объект вместо создания нового объекта.
*/

let data
let dataCopy

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  }
  dataCopy = _.cloneDeep(data)
})

test('plain set', () => {
  set(data, 'a', 'value')
  dataCopy.a = 'value'
  expect(data).toEqual(dataCopy)
})

test('nested set', () => {
  set(data, 'a[0].b.c', true)
  dataCopy.a[0].b.c = true
  expect(data).toEqual(dataCopy)
})

test('set new property', () => {
  set(data, 'a[0].b.d', false)
  dataCopy.a[0].b.d = false
  expect(data).toEqual(dataCopy)
})