const express=require('express')


const {
    getProducts,
    getOneProduct,
    deleteProduct,
    updateProduct,
    addProduct
} = require ('../controllers/productController')

const router =express.Router()

//this is to get all data
router.get('/',getProducts)

//get a single data
router.get('/:id',getOneProduct)

//post a new data

router.post('/',addProduct)

//delete data
router.delete('/:id',deleteProduct)

//udate data
router.patch('/:id',updateProduct)


module.exports = router 