var db=require('../dbconnection');
var customer={
    getAllCustomer:function(callback){
        return db.query("select * from customer_tbl",callback);
    },
    getLoginById(Customer_Id,item,callback){
        return db.query("select * from customer_tbl where Customer_Id=? And Password=?",[Customer_Id,item.Password],callback);
    },
    getCustomerById(Customer_Id,callback){
        return db.query("select * from customer_tbl where Customer_Id=?",[Customer_Id],callback);
    },
    addCustomer:function(item,callback){
        return db.query("insert into customer_tbl values(?,?,?,?,?,?,?,?)",[item.Customer_Id,item.Name,item.Password,item.Age,item.Mobile,item.Gender,item.City,item.Address],callback);
    },
    updateCustomer:function(item,Customer_Id,callback){
        return db.query("update customer_tbl set Name=?,Age=?,Mobile=?,Gender=?,City=?,Address=? where Customer_Id=?",[item.Name,item.Age,item.Mobile,item.Gender,item.City,item.Address,Customer_Id],callback);
    },
    changePassword(item,callback){
        return db.query("update customer_tbl set Password=? where Customer_Id=?",[item.Password,item.Customer_Id],callback);
    }
};

module.exports=customer;