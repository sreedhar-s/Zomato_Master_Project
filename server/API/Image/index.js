// Libraries
import express from "express";
import passport from "passport";

// Database Modals
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST /images/new
// @des     add new images
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newImages = await ImageModel.create(req.body.imageData);
    return res.json({ images: newImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /images/delete/single
// @des     delete one image
// @access  PRIVATE
Router.delete(
  "/delete/single",
  passport.authenticate("jwt"),
  async (req, res) => {
    try {
      const deleteOneImage = await ImageModel.findByIdAndUpdate(
        req.body.imageData.parentID,
        {
          $pull: { images: { _id: req.body.imageData.imageID } },
        },
        { new: true }
      );
      console.log(deleteOneImage);
      return res.json({ images: Boolean(deleteOneImage) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// @Route   DELETE /images/delete
// @des     delete all image
// @access  PRIVATE
Router.delete("/delete/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const deleteImage = await ImageModel.findByIdAndDelete(
      req.body.imageData.parentID
    );
    return res.json({ images: Boolean(deleteImage) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;