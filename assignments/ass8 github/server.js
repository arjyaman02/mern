const express = require('express');
const fs = require('fs');   
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    const content = JSON.parse(fs.readFileSync("data.json"));
    res.status(200).json({
        massage : "CART INFORMATION !",
        data : content
   })
})
app.get('/:product_id',(req,res)=>{
    product_id = req.params.product_id;
    const content = JSON.parse(fs.readFileSync("data.json"));
    const matcheddata = content.filter(item=>item.product_id == product_id);
    res.status(200).json({
         massage : "CART INFORMATION !",
         data : matcheddata
    })
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});
