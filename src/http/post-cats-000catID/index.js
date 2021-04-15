let arc = require('@architect/functions')

exports.handler = arc.http.async(update)

async function update (req) {

  let data = await arc.tables()

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

  return {
    location: '/'
  }
}
