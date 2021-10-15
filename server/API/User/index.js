//Libraries
import express from "express";
import passport from "passport";

//Database Model
import {UserModel} from "../../database/allModels";

//Validation
import { validateUserId } from "../../validation/order";
import { validateSignin, validateSignup } from "../../validation/auth";

const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { email, fullname, phoneNumber, address } =
        req.session.passport.user._doc;
  
      return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params._id);
      const { fullname } = user;
  
      return res.json({ user: { fullname } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }  
});

/*
Route     /update
Des       Update user id
Params    _id
Body      user data
Access    Public
Method    put
*/

Router.put("/update/:userId", async (req,res) => {
    try {
        await validateUserId(req.params);
        await validateSignup(req.body);
        const {userId} = req.params
        const {userData} = req.body;

        const updatedUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData,
        }, 
        {
            new : true
        });

        return res.json({user : updatedUserData});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;