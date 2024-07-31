const {  
    getWishlistProducts,
    addWishlist,
    deleteWishlist
  }=require('../../controller/whishlistController/whishlistController')
const whishListRouter=require('express').Router()





whishListRouter.post('/addWishlist',addWishlist)
whishListRouter.get('/:userid',getWishlistProducts)
whishListRouter.delete('/:WishlistId',deleteWishlist)


module.exports={whishListRouter}