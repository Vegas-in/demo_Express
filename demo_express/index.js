const express = require('express')
const app = express()
const port = 3000

// Rutas
const booksRoutes = require("./routes/books.routes")
//const productsRoutes = require("./routes/products.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const entriesRoutes = require("./routes/entries.routes")

// Rutas
//API
app.use('/api/books',booksRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/entries',entriesRoutes);

app.listen(port, () => {
  console.log(`Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`)
})