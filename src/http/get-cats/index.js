let arc = require('@architect/functions')

exports.handler = async function http(req) {
  let data = await arc.tables()
  return data.cats.scan({})
}
