const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cartRoute = require("./routes/cart");

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MONGODB"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/v1/users", userRoute);
app.use("/v1/auths", authRoute);
app.use("/v1/carts", cartRoute);
app.use("/v1/products", productRoute);
app.use("/v1/orders", orderRoute);
app.use("/v1/checkout", stripeRoute);

app.listen(8080, () => {
  console.log("Listening to 8080!");
});
