const express= require('express')
const exphbs = require('express-handlebars')
var querySelectorAll = require('query-selector');


const Registro = require('./models/Registro')

const app = express()

const conn = require('./db/conn')

const registroRoutes = require('./routes/registroRoutes')
const RegistroController = require('./controllers/RegistroController')

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

//receber resposta do body
app.use(
    express.urlencoded({
       extended: true,
    })
 )
 
 app.use(express.json())


app.use(express.static('public'))

//ROUTES
app.use('/registro', registroRoutes)
app.get('/', RegistroController.showHome)
app.get('/geolocalizacao', RegistroController.geolocalizacao)
app.get('/camera', RegistroController.camera)
app.get('/relatorio', RegistroController.relatorio)
app.post('/camera', RegistroController.camera)
conn
    //.sync({force: true})
    .sync()
    .then(()=>{
        app.listen(3000)
    })
    .catch((err) => console.log(err))