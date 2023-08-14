const db = require("../config");
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/Authentication')

class Users {
  fetchUsers(req, res) {
    const query = `
            SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileURL FROM Users 
        `;

    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
            SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileURL FROM Users WHERE userID = ${req.params.id}
        `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async register(req, res) {
    const data = req.body
    // encrypt password
    data.userPass = await hash(data.userPass, 15)
    // Payload
    const user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass
    }
    // Query
    const query = `INSERT INTO Users SET ?;`
    
    db.query(query,
        [data],
        (err)=>,)

  }
  login(req, res) {}
  deleteUser(req, res) {
    const query = `
            DELETE FROM Users WHERE userID = ${req.params.id}
        `;

    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was deleted.",
      });
    });
  }
  updateUser(req, res) {
    const query = `
            UPDATE Users SET ? WHERE userID = ${req.params.id}
        `;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was updated",
      });
    });
  }
}

module.export = { Users };
