const { db } = require('../database/index');


const addRating = async (req, res) => {
    try {
      let info = {
        userid: req.body.userid,
        productid: req.body.productid,
        rating:req.body
      };
  
      await db.Rating.create(info);
      res.status(200).send('rating added ');
    } catch (error) {
      console.error('Error adding product to rating:', error);
      res.status(500).send({ error: 'An error occurred while adding product to rating' });
    }
  };

  const getRatingbyP = async (req, res) => {
    try {
     
      const rating = await db.rating.findAll({
        where: {
            productid: req.params.productid 
        },
        
      });
  
      res.status(200).send(rating);
    } catch (error) {
      console.error('Error', error);
      
    }
  };



module.exports={addRating,getRatingbyP}