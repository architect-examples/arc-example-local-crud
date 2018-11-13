let data = require('@architect/data')

exports.handler = async function http(req) {
  let result = await data.cats.put(req.body)
  return {
    status: 302, 
    location: '/'
  }
}
