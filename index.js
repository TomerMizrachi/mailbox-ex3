const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

const mailboxRouter = require("./router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev"));

app.use('',mailboxRouter);

app.use((err,req,res,next)=>{
    console.log(err.stack);
    ews/status(500).send('something is broken!');
})

app.listen(port, () => {
    console.log(`server run on port ${port}`);
});