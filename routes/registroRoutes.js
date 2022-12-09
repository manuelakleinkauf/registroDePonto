const express = require('express')
const router = express.Router()
const RegistroController = require("../controllers/RegistroController")


router.get('/', RegistroController.showHome)
router.get('/geolocalizacao', RegistroController.geolocalizacao)
router.get('/camera', RegistroController.camera)
router.get('/relatorio', RegistroController.relatorio)



module.exports = router