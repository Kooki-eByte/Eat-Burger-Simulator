const connection = require("./connection");

let orm = {
  slectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;

      cb(result);
    });
  },
  insertOne: function () {},
  updateOne: function () {},
};

module.exports = orm;
