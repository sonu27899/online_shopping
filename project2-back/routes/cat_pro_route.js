var cat_pro=require("../model/product_model");
var express=require('express');
var router=express.Router();

router.get('/:Cat_Id?',function(req,res,next){
    if (req.params.Cat_Id){
        cat_pro.getCatByCatId(req.params.Cat_Id,function(err,rows){
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
    else{
        cat_pro.getAllCategory(function(err,rows){
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

router.get('/:Cat_Id/:Product_Id',function(req,res,next){
    cat_pro.getProByCatId(req.params.Cat_Id,req.params.Product_Id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;