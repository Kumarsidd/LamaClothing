const router = require("express").Router();
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: req.body.amount,
      currency: "inr",
      payment_method_data: {
        type: "card",
        card: {
          token: req.body.tokenId,
        },
      },
      confirm: true,
    });

    res.status(200).json(paymentIntent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
