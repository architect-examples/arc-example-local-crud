let arc = require('@architect/functions')

exports.handler = arc.http.async(create)

async function create (req) {
  let data = await arc.tables()
  await data.cats.put(req.body)
  return {
    location: '/'
  }
}
