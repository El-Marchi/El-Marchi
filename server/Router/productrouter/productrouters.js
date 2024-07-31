const express = require('express');
const routerproduct = express.Router();
const {
    getAllProducts, getProductByCriteria,
    getAllProductsByUserId,
    createProduct,
    updateProduct,
    deleteProduct,
    getImageByProductId,
    UpdateImages,
    deleteImage}= require('../../controller/productscontrollers/productcontrollers.js')


routerproduct.get('/getall', getAllProducts);
routerproduct.get('/products/search', getProductByCriteria);
routerproduct.get('/user/:userid', getAllProductsByUserId);
routerproduct.get('/images/:productid',getImageByProductId)
routerproduct.post('/add', createProduct);
routerproduct.put('/up/:productid', updateProduct);
routerproduct.put('/images/:imageid', UpdateImages);
routerproduct.delete('/delete/:productid', deleteProduct);
routerproduct.delete('/images/:imageid',deleteImage)




module.exports = routerproduct;

