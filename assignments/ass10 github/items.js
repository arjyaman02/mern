
const {Products} = require('./db');
const  { dbconn} = require('./connect');
const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
router.use(express.json());


router.get('/' ,async(req,res)=>{
            try{
                const products = await Products.find()
                return res.status(200).json({
                        message :"retrieved data succesfully",
                        products
                    })
                }
            catch(err){
                return res.status(500).json({
                    message:"somehting went wrong"
                })

         }
})
router.get('/:name',async (req,res)=>{
    try {
        const name1 = req.params.name;
        const products = await Products.findOne({name:name1});
        res.status(200).json({
         message :"retrieved data",
          products                    
         })
        
    } catch (err) {

        return res.status(500).json({
                    message:"somehting went wrong",
                    error:err.message
                })
    }
   
})


router.post('/add' , async(req,res)=>{
    try {
        
        const {  name , price ,description }= req.body;
        if(name == "" || name == undefined)
        {
            return res.status(400).json({
                message :"please enter a name"
            })
        }
        if(price == "" || price == undefined)
        {
           return  res.status(400).json({
                message :"please enter a price"
            })
        }
        if(description == "" || description == undefined)
        {
            return res.status(400).json({
                message :"please enter a description"
            })
        }
    
            const ProductObj = { name , price , description };
            const products = new Products(ProductObj);
            await products.save()
                return res.status(200).json({
                   message:"data saved succesfully",
                   ProductObj
                })
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
         })
        
    }
})


router.delete('/deleteitem/:id' , async(req,res)=>{
    try{
        const id = req.params.id;
        await Products.findByIdAndDelete(id);
        return res.status(200).json({
         message:"deleted data succesfully",
        })
    }
   
   catch(err){
            return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
       }
})


router.put('/update/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const {  name , price ,description }= req.body;
        if(name == "" || name == undefined)
        {
            return res.status(400).json({
                message :"please enter a name"
            })
        }
        if(price == "" || price == undefined)
        {
           return  res.status(400).json({
                message :"please enter a price"
            })
        }
        if(description == "" || description == undefined)
        {
            return res.status(400).json({
                message :"please enter a description"
            })
        }
        const products = await Products.findById(id);
        products.name = name;
        products.price = price;
        products.description = description;
        await products.save()
        return res.status(200).json({
            message:"data updated succesfully!"
        })
       }  
       catch(err){
        return res.status(500).json({
        message:"something went wrong",
        error: err.message
        })
                 }
   
})

dbconn();

module.exports = router;

