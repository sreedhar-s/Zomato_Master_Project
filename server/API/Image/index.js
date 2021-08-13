//Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//Database Model
import {ImageModel} from "../../database/allModels";

//utilities import s3 uploas
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /image
Des       Uploads given to s3 bucket, and return saves file link to mongodb
Params    none
Access    Public
Method    GET
*/

Router.post("/", upload.single("file"),async(req,res) => {
    try {
        const file = req.file;
        //S3 bucket options
        const bucketOptions = {
            Bucket: "zomato",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", //Access control list
        };

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({uploadImage});
    } catch (error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;