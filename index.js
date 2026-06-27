const GUN = require('gun')
const server = require('http').createServer()
GUN({ web: server })
server.listen(process.env.PORT || 3000, () => {
  console.log('GUN relay running')
})
