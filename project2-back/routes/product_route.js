var product = require("../model/product_model");
var express = require("express");
var router = express.Router();

router.get('/:Cat_Id?',function(req,res,next){
    if (req.params.Cat_Id) {
        product.getProByCat(req.params.Cat_Id,function(err,rows){
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
    else {
        product.getAllProduct(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });

    }

});

module.exports = router;