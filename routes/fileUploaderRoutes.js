let express = require("express");
let uploadAndPostRouter = express.Router();
let {user_upload_file, fileModel_create_post} = require("../controllers/uploaderController");

uploadAndPostRouter.post("/",user_upload_file, fileModel_create_post)

module.exports = {
    uploadAndPostRouter
};