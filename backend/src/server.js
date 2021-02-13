const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'Alex',
      email: 'alex@company.com'
    },
    {
      name: 'John',
      email: 'john@company.com'
    }
  ])
})

async function closeGracefully(signal) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`)

  await server.close()
  process.exit()
}

const server = app.listen(PORT, () => {
  console.log(`Backend for WebApp is running on port: ${PORT}`)

  process.on('SIGINT', closeGracefully)
  process.on('SIGTERM', closeGracefully)
})