let data = require('@architect/data')

exports.handler = async function http(req) {
  return {
    body: JSON.stringify(await data.cats.scan({}))
  }
}
