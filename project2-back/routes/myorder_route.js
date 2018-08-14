var order=require("../model/order_model");
var express=require('express');
var router=express.Router();

router.get('/:Customer_Id',function(req,res,next){
    order.orderByCustomerId(req.params.Customer_Id,function(err,rows){
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
