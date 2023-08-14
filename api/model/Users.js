const db = require("../config");

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
  register(req, res) {}
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
