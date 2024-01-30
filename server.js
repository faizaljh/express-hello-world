const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Haloo Fooo http://localhost:${port}`)
  console.log(`Example app listening at http://localhost:${port}`)
})
