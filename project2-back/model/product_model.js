var db=require('../dbconnection');
var category={
getAllCategory:function(callback){
    return db.query("select * from category_tbl",callback);
},
getAllProduct:function(callback){
    return db.query("select * from product_tbl",callback);
},
getProByCat:function(Cat_Id,callback){
    return db.query("select c.*,p.* from product_tbl p,category_tbl c where c.Cat_Id=p.FKCat_Id And c.Cat_Id=?",[Cat_Id],callback);
},
getProById:function(Product_Id,callback){
    return db.query("select * from product_tbl where Product_Id=?",[Product_Id],callback);
},
getProByCatId:function(Cat_Id,Product_Id,callback){
    return db.query("select * from product_tbl where FKCat_Id=? and Product_Id NOT IN (?)",[Cat_Id,Product_Id],callback);
                     
},
getCatByCatId:function(Cat_Id,callback){
    return db.query("select * from category_tbl where Cat_Id=?",[Cat_Id],callback);
                     
}
};
module.exports=category;