



module.exports=(sequelize,DataTypes)=>{

    const Image=sequelize.define("image",{
       
        imageid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
    

        },
        imageurl:{
            type:DataTypes.STRING,
            Generatedcolumn:true

        },
        productid:{
            type:DataTypes.INTEGER,
            foreignKey:true,
            allowNull:false
    

        }







    })



return Image ;


}