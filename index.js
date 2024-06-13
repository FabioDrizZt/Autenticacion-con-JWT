const express = require('express')
process.loadEnvFile()
const app = express()
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 3000
const secretKey = process.env.SECRET_KEY
const usuarios = require('./data/usuarios')

// Middleware para parsear JSON
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Login de usuario donde se genera el JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(`Datos recibidos: usuario: ${username}, password: ${password}`)
  // Autenticacion del usuario
  const user = usuarios.find(
    (u) => u.username === username && u.password === password
  )
  if (!user) {
    return res.status(401).send({ error: 'Credenciales invalidas' })
  } else {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' })
    return res.json({ token })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
