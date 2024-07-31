
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',
       {
            userid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            },
            firstName:DataTypes.STRING,
            lastName:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
            role:DataTypes.STRING,
            adress:DataTypes.STRING


        });


        return User;



}