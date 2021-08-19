//Libraries
import express from "express";
import passport, { session } from "passport";

//Database Model
import { OrderModel } from "../../database/allModels";

//Validation
import { validateUserId } from "../../validation/order";

const Router = express.Router();

/*
Route     /
Des       Get all the orders based on id
Params    id
Access    Public
Method    get  
*/

Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      await validateUserId(req.params);
      const { _id } = req.params;
      const getOrders = await OrderModel.findOne({ user: _id });

      if (!getOrders) {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route     /new
Des       Add new order
Params    id
Access    Public
Method    Post
*/

Router.post("/new/:_id", async (req, res) => {
  try {
    await validateUserId(req.params);
    const { _id } = req.params;
    const { orderDetails } = req.body;

    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails },
      },
      {
        new: true,
      }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
