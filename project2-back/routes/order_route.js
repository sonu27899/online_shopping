var order=require("../model/order_model");
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    order.addOrder(req.body,function(err,rows){
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

router.get('/',function(req,res,next){
    order.getOrderId(function(err,rows){
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



