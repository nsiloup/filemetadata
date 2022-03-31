let multer = require("multer");
let log = console.log;

let upload = multer({dest : './uploadingFolder'});
let user_upload_file = upload.single('upfile');
let fileModel_create_post = async(req, res, next) =>{
    try{
        let {originalname, mimetype, size} = await req.file;
        let obj ={};
        obj.name = originalname;
        obj.type = mimetype;
        obj.size = size;

        log(obj);

        res.json(obj);
    }catch(err){
        log(err);
        next(err);
    };
};

module.exports = {
    user_upload_file,
    fileModel_create_post,
};