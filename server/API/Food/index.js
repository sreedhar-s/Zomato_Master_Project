//Libraries
import express from "express";
import passport from "passport";

//Database Model
import {FoodModel} from "../../database/allModels";

const Router = express.Router();

/*
Route     /r
Des       Get all foos based on particular restaurant
Params    id
Access    Public
Method    get  
*/

Router.get("/r/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant : _id});

        return res.json({foods});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
});

/*
Route     /c
Des       Get all foos based on particular catgory
Params    category
Access    Public
Method    get  
*/

Router.get("/c/:category", async (req,res) => {
    try {
        const {category} = req.params;
        const foods = await FoodModel.find({category : {$regex : category, $options : "i"},});

        return res.json({foods});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
});

export default Router;