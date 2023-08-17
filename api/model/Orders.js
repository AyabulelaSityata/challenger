const db = require('../config')
class Orders{
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders;
        `
        db.query(query, set)
    }
    fetchOrder(req, res){
        
    }
    addOrder(req, res) {

    }
    updateOrder(req, res){

    }
    deleteOrder(req, res){

    }
}
module.exports = Orders