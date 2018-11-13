let arc = require('@architect/architect')
let data = require('@architect/data')
let test = require('tape')
let tiny = require('tiny-json-http')

let end 
test('start sandbox', async t=> {
  t.plan(1)
  end = await arc.sandbox.start()
  t.ok('started sandbox')
})

test('can get /', async t=> {
  t.plan(1)
  let url = 'http://localhost:3333'
  let result = await tiny.get({url})
  t.ok(result.body, 'got response')
  console.log(result.body)
})

test('can list cats', async t=> {
  t.plan(1)
  let result = await data.cats.scan({})
  t.ok(result, 'got result')
  console.log(result)
})

test('add a few cats', async t=> {
  t.plan(1)
  let result = await Promise.all([
    data.cats.put({catID: 'sutro'}),
    data.cats.put({catID: 'Mr Little Jeans'}),
    data.cats.put({catID: 'gato'}),
  ])
  t.ok(result, 'got result')
  console.log(result)
})

test('call the api', async t=> {
  t.plan(1)
  let url = 'http://localhost:3333/cats'
  let result = await tiny.get({url})
  t.ok(result.body.Count === 3, 'got 3 cats')
  console.log(result.body)
})

test('shut down the sandbox', t=> {
  t.plan(1)
  end()
  t.ok(true, 'shutdown successfully')
})
