const path = require('path')
const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
import { handlebars } from 'express-handlebars';

app.use(morgan('combined'))

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.send('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})