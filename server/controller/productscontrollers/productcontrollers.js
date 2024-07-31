const { db } =require('../../database/index.js')

const Product = db.Product; 
const Image = db.Image;

const getAllProducts = async (req, res) => {
    try {
        if (!Product || !Product.findAll) {
            return res.status(500).send({ message: 'Product model is not correctly initialized' });
        }
        const products = await Product.findAll();
        res.status(200).json({ products });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error retrieving products', error: err.message });
    }
};
// get a product by criteria (name, description, category)
const getProductByCriteria = async (req, res) => {
    const { name, description, category } = req.query;

  
    const queryConditions = {};

    if (name) {
        queryConditions.name = name;
    }
    if (description) {
        queryConditions.description = description;
    }
    if (category) {
        queryConditions.categorie = category; 
    }

    try {
      
        const product = await Product.findOne({ where: queryConditions });

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching product");
    }
};

// get all products by user ID
const getAllProductsByUserId = async (req, res) => {
    const userId = req.params.userid;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        // Assuming Product is your Sequelize model
        const products = await Product.findAll({ where: { userid: userId } });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for this user' });
        }

        res.status(200).json({ products });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching products for user' });
    }
};
// Create a new product
const createProduct = async (req, res) => {
    const { name, description, price, stock, categorie, userid } = req.body;

    console.log('Request body:', req.body);

    if (!name || !description || !price || !stock || !categorie || userid === undefined || userid === null) {
        return res.status(400).json({ message: 'All fields are required, including userid' });
    }

    const parsedPrice = parseFloat(price);
    const parsedStock = parseInt(stock, 10);

    if (isNaN(parsedPrice) || isNaN(parsedStock)) {
        return res.status(400).json({ message: 'Price and stock must be valid numbers' });
    }

    try {
       
        const newProduct = await Product.create({
            name,
            description,
            price: parsedPrice,
            stock: parsedStock,
            categorie,
            userid 
        });

        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

// Update an existing product
const updateProduct = async (req, res) => {
    const id = req.params.productid; 
    const updatedFields = req.body; 

    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
       
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

       
        const updatedProduct = await product.update(updatedFields);

        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const id = req.params.productid;


    try {
        const result = await Product.destroy({ where: { productid: id } });

        res.status(200).send( 'Product deleted successfully'+ id);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

const getImageByProductId = async (req,res)=>{
    const ID =req.params.productid
    if(!ID){
        return res.status(400).json({message: 'product id is required'})
    }
    try {
        const images = await Image.findAll({where: {productid:ID }})
        if(images.length===0){
            return res.status(404).send("images not found")
        }
        res.status(200).json({images})
    } catch (err){
        console.error(err);
        res.status(500).send("err geting images")
    }
};
// update image
const UpdateImages = async (req, res) => {
    try {
        console.log('Request Params:', req.params);
        console.log('Request Body:', req.body);
      
        const { imageid } = req.params;
        const { newImageData } = req.body;

        if (!imageid || !newImageData) {
            return res.status(400).json({ message: 'Image ID and new image data are required' });
        }
        const image = await Image.findByPk(imageid);
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        
        await image.update(newImageData);

        return res.status(200).json({ message: 'Image updated successfully', image });

    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: 'An error occurred while updating the image' });
    }
};
const deleteImage = async (req, res) => {
    const id = req.params.imageid;
    try {
        const deleteResult = await Image.destroy({ where: { imageid: id } });
        if (deleteResult) {
            res.status(200).send('Image deleted successfully: ' + id);
        } else {
            res.status(404).send('Image not found: ' + id);
        }
    } catch (err) {
        console.error('Error deleting image:', err);
        res.status(500).json({ message: 'Error deleting image', err: err.message });
    }
};


module.exports = {
    getAllProducts,  
    getProductByCriteria,
    getAllProductsByUserId,
    createProduct,
    updateProduct,
    deleteProduct,
    getImageByProductId,
    UpdateImages,
    deleteImage}