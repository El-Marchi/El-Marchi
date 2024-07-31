const {  
    getCart,deleteCart,addCart,getCartbyp,getCartProducts
  }=require('../../controller/whishlistController/CartController')
const CartRouter=require('express').Router()





CartRouter.post('/addCart',addCart)
CartRouter.get('/:userid',getCart)
CartRouter.get('/:userid',getCartProducts)
CartRouter.get('/:productid',getCartbyp)
CartRouter.delete('/:cartid',deleteCart)


module.exports={CartRouter}