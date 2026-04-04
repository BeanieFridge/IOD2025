// const testRoutes = require('./routes/myTestRoutes')
const calculatorRoutes = require('./routes/calculatorRoutes');
// const userRoutes = require('./routes/userRoutes')

const express = require('express')
// const app = express()
// const port = 3000
// const port2 = 3001

const app = require('./app')
const port = 3000

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// app.get('/test', (req, res) => {
// res.send('Hello World!')
// })

app.use(express.json())

app.use('/', express.static('public'))


// app.use('/users', userRoutes)

// app.use('/mytest', testRoutes)

app.use('/calculator', calculatorRoutes);

// app.listen(port, () => {
// console.log(`Example app listening at
// http://localhost:${port}`)
// })

// app.listen(port2, () => {
// console.log(`Example app listening at
// http://localhost:${port2}`)
// })



const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`)
})
