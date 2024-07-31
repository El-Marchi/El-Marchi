const express = require("express");
const cors = require("cors");
const {whishListRouter} = require('./Router/whislistRouter/whishlistRouter.js')
const uploadImage = require("./uploadImage.js");
const userRouter=require('./Router/userRouter/userRouter.js')

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("api/WhishList",whishListRouter)
app.use('/api/user',userRouter)


app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

app.post("/uploadMultipleImages", (req, res) => {
  uploadImage
    .uploadMultipleImages(req.body.images)
    .then((urls) => res.send(urls))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
