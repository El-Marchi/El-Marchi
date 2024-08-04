const router=require('express').Router()

const {signUp,logIn,deleteuser,updateUser,updatePassword}=require('../../controller/userController/userController')

router.post('/signUp',signUp)
router.post('/logIn',logIn)
router.delete('/:id',deleteuser)
router.put('/:userid',updateUser)
router.put('/updatePassword/:userid',updatePassword)



module.exports=router