var customer = require("../model/customer_model");
var express = require("express");
var router = express.Router();

router.get('/:Customer_Id',function(req,res,next){
    customer.getCustomerById(req.params.Customer_Id,function(err,rows){
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
router.post('/:Customer_Id?', function(req, res, next) {
      if(req.params.Customer_Id){
        customer.getLoginById(req.params.Customer_Id,req.body,function(err, rows) {
        if (err) {
            res.json(err);
        } 
        else {
        res.json(rows);
        }
    });
}
  else
  {
      customer.addCustomer(req.body,function(err,rows){
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
  router.put('/:Customer_Id?',function(req,res,next){
      if(req.params.Customer_Id)
      {
        customer.updateCustomer(req.body,req.params.Customer_Id,function(err,rows){
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
      customer.changePassword(req.body,function(err,rows){
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
  module.exports = router;
  
