const {  
    getCart,deleteCart,addCart,getCartProducts
  }=require('../../controller/whishlistController/CartController')
const CartRouter=require('express').Router()





CartRouter.post('/addCart',addCart)
CartRouter.get('/:userid',getCart)
CartRouter.get('/:userid',getCartProducts)
CartRouter.delete('/:cartid',deleteCart)


module.exports={CartRouter}