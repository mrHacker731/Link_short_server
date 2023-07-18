const express = require('express');
const dbConnect = require('./utils/dbConnect');
const app = express();
require("dotenv").config();
const linkRouter = require("./routes/link");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/',linkRouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


const port = process.env.PORT || 4000;
dbConnect();
app.listen(port,()=>{
    console.log('listening on port '+port);
})