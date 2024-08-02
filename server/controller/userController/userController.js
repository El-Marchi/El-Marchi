const {db}=require('../../database/index')

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, role, password } = req.body;

        const test = await db.User.findOne({ where: { email } });

      
        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);

        if (test) {
            res.send('email already in use');
            return;
        } else if (!isPasswordValid) {
            res.send('Password does not meet the criteria');
            return;
        } else {
            var y = {
                firstName,
                lastName,
                email,
                role,
                password: await bcrypt.hash(password, 15),
                address: 'Ariana'
            };
            const x = await db.User.create(y);

            const token = await jwt.sign({ userid: x.userid, email: x.email, firstName: x.firstName }, 'loginuser');
            res.send(token);

            res.send('signUp successful');
            return;
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

const logIn=async(req,res)=>{
 

    try{
        const {email,password}=req.body;
        const test=await db.User.findOne({where:{email}})
        if(!test)
            return res.send('email not exist');

        const testpassword=await bcrypt.compare(password,test.password)

        if(!testpassword) 
            return res.send('not valide')
        
        else {
    const token=jwt.sign({userid:test.userid,email:test.email,firstName:test.firstName},'lifeislove')
    res.send(token)
    
        }
       
    }

    catch (err){
        return res.send('error',err);
    }

}

const deleteuser = async (req,res) => {
    try {
      let id = req.params.id;
  
      await db.User.destroy({
        where: {
          userid: id
        }
      });
  
      res.status(200).send('Deleted user item with ID:' + id);
    } catch (error) {
      console.error('Error deleting user item:', error);
      res.status(500).send({ error: 'An error occurred while deleting user item' });
    }
  }

  const updateUser=async(req,res)=>{
    let id=req.params.userid
   
    const up=await db.User.update(req.body,{where:{userid: id}})
    res.status(200).send(up)
}

const updatepassword = async (req, res) => {
    const { email, password } = req.body;
    const test = await db.User.findOne({ where: { email } });
    if (!test) return res.send('email not exist');

   
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^_\s]{6,}$/.test(password);
    if (!isPasswordValid) return res.send('Password does not meet the criteria');

    const testpassword = await bcrypt.compare(password, test.password);
    if (!testpassword) return res.send('not valid');
    else {
        const token = jwt.sign({ userid: test.userid, email: test.email, firstName: test.firstName }, 'loginuser');
        res.send(token);
    }

    let id = req.params.userid;
    const up = await db.User.update(req.body, { where: { userid: id } });
    res.status(200).send(up);
};





module.exports={signUp,logIn,deleteuser,updateUser,updatepassword}



