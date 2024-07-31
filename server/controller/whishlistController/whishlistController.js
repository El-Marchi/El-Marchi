const { db } = require('../../database/index')

async function getWishlistProducts(req, res) {
  try {
    const user = req.params.userid;

    if (!user) {
      return res.status(400).send({ error: 'User ID is required' });
    }

    const wishlistItems = await db.Wishlist.findAll({
      where: {
        userid: user
      },
      include: [
        {
          model: db.Product,
          attributes: ['name', 'price', 'description', 'productid', 'stock', 'categories']
        },
        {
          model: db.User,
          attributes: ['userid']
        }
      ]
    });

    res.send(wishlistItems);
  } catch (error) {
    console.error('Error fetching WishList products:', error);
    res.status(500).send({ error: 'An error occurred while fetching Wishlist products' });
  }
}

const addWishlist = async (req, res) => {
  try {
    let info = {
      userid: req.body.userid,
      productid: req.body.productid,
    };

    await db.Wishlist.create(info);
    res.status(200).send('Product added to wishlist');
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
    res.status(500).send({ error: 'An error occurred while adding product to wishlist' });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    let id = req.params.id;

    await db.Wishlist.destroy({
      where: {
        wishlistid: id
      }
    });

    res.status(200).send('Deleted wishlist item with ID: ' + id);
  } catch (error) {
    console.error('Error deleting wishlist item:', error);
    res.status(500).send({ error: 'An error occurred while deleting wishlist item' });
  }
};

module.exports = {
  getWishlistProducts,
  addWishlist,
  deleteWishlist
};
