class Orders{
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders;
        `
        db.query(query, set)
    }
}
module.exports = Orders