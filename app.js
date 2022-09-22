const connection = require('./dbconfig');
const express=require('express');
const cors =require('cors');

//App creation
const app=express();
const port=process.env.PORT||8000;
const corsOptions={
    origin : process.env.CLIENT_URL,
    origin: true,
    credentials : true,
    optionSuccessStatus:200
};

//DB Connection
connection.connect((err)=>{
    if(err) {
        console.error(`error connecting BD : ${err.stack}`);
    }
    else{
        console.log(`connected as id : ${connection.threadId}`);
    }
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send('Welcome');
});

//Server Listen
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});
module.exports=app;