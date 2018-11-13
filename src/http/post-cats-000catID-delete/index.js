let arc = require('@architect/functions')
let data = require('@architect/data')
let status = 302
let location = '/'

exports.handler = async function http(req) {
  await data.cats.delete({catID: req.params.catID})
  return {status, location}
}
