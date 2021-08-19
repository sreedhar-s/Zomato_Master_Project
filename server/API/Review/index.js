//Libraries
import express from "express";
import passport from "passport";

//Database Model
import {ReviewModel} from "../../database/allModels";

//validation
import { validateReviewData,validateFoodId } from "../../validation/review";
import { validateRestaurantId } from "../../validation/food";
import { validateUserId } from "../../validation/order";


const Router = express.Router();

/*
Route     /food/new
Des       Add new food review or rating
Params    _UserID,_foodID
Access    Public
Method    Post
*/

Router.post("/new",async (req,res)=>{
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully created Review"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/*
Route     /delete
Des       Add new food review or rating
Params    _id;
body      none 
Access    Public
Method    Delete
*/

Router.delete("/delete/_id", async (req,res) => {
    try {
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "successfully deleted a review"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;