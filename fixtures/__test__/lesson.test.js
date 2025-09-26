import fs from 'fs'

test('extractLinks', () => {
  // HTML находится в файле withLinks.html в директории __fixtures__
  // При чтении текстовых файлов, в конце может добавляться пустая строка.
  // Она удаляется с помощью метода `trim`, если нужно
  // __dirname — директория, в которой находится данный файл с тестами
  const html = fs.readFileSync(`${__dirname}/../__fixtures__/withLinks.html`, 'utf-8')
  // Теперь с HTML удобно работать и он не загромождает тесты.
  const links = extractLinks(html)
  expect(links).toEqual(['/resumes/1', '/users/6'])
})

const html = fs.readFileSync(`${__dirname}/../__fixtures__/withLinks.html`, 'utf-8')
const json = fs.readFileSync(`${__dirname}/../__fixtures__/somethingElse.json`, 'utf-8')


// В таком случае лучше вынести построение пути в отдельную функцию, а заодно
// воспользоваться правильным способом склеивания путей:

import path from 'path'

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

// Само чтение файлов нужно выполнять либо внутри тестов,
// либо внутри хуков, например `beforeAll` или `beforeEach`
// Не стоит этого делать на уровне модуля, вне функций
const html = readFile('withLinks.html')
const json = readFile('somethingElse.json')