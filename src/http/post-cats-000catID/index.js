let arc = require('@architect/functions')
let data = require('@architect/data')
let status = 302
let location = '/'

exports.handler = async function http(req) {
  await data.cats.update({
    Key: {
      catID: req.params.catID
    },
    UpdateExpression: 'set #color = :color',
    ExpressionAttributeNames: {
      '#color': 'color'
    },
    ExpressionAttributeValues: {
      ':color': req.body.color
    }
  })
  return {status, location}
}
