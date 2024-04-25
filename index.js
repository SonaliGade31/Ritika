const dbConnect = require('./mongodb')
const express=require('express')
const app=express();
app.use=(express.json());

app.get('/getData',async(req,res)=>{
   let result= await dbConnect();
   result = await result.find.toArray();
   res.send(result);
})

app.post('/insertData',async(req,res)=>{
    let result= await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data inserted");
})

app.put('/:name',async(req,res)=>{
    let result= await dbConnect();
    result = await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated");
})

app.delete('/:name',async(req,res)=>{
    let result= await dbConnect();
    result = await result.updateOne({name:req.params.name});
    res.send("Data Deleted");
})

app.listen(3000);