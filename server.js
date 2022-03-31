var express = require('express');
var cors = require('cors');
require('dotenv').config();
let {uploadAndPostRouter} = require("./routes/fileUploaderRoutes");

let log = console.log;

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

//set a mount path where to store the uploaded files
app.use("/uploadingFolder", express.static(__dirname + "/uploadingFolder"));

app.use("/api/fileanalyse",uploadAndPostRouter);

