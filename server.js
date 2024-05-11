const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb+srv://Prabhat282:H8XUU8yoUJ2Ylxjt@crud.i7h076g.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('Database Connection Established!')
})
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/employee', EmployeeRoute);
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
     


