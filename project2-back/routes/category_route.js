var user_mod=require("../model/product_model");
var express=require('express');
var router=express.Router();

router.get('/:Product_Id?',function(req,res,next){
    if(req.params.Product_Id)
    {
        user_mod.getProById(req.params.Product_Id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
        user_mod.getAllCategory(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
   
});

module.exports=router;