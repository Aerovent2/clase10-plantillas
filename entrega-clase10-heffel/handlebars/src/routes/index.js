const { Router } = require("express")
const router = Router()
const {addProduct,getProducts,formPruduct}= require('../controllers/productosController')

router.get('/productos', getProducts)
router.get('/', formPruduct)
router.post('/productos',addProduct)

module.exports = router
