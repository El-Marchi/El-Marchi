const router=require('express').Router()

const {signUp,logIn,deleteuser,updateUser,updatepassword}=require('../../controller/userController/userController')

router.post('/signUp',signUp)
router.post('/logIn',logIn)
router.delete('/:id',deleteuser)
router.put('/:userid',updateUser)
router.put('/updatePassword/:userid',updatepassword)



module.exports=router