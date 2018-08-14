var db=require('../dbconnection');
var order={
    addOrder:function(item,callback){
        return db.query("Insert into order_tbl values (?,?,?,?,?,?)",[item.Order_Id,item.date,item.Price,item.Product_Id,item.Customer_Id,"pending"],callback);
    },
    getOrderId:function(callback){
        return db.query("select Order_Id from order_tbl ORDER BY(Order_Id) DESC LIMIT 1",callback);
    },
    getAllOrder(callback){
        return db.query("select * from order_tbl",callback);
    },
    orderByCustomerId(Customer_Id,callback){
        return db.query("select * from order_tbl where FKCustomer_Id=?",[Customer_Id],callback);
    }
};

module.exports=order;