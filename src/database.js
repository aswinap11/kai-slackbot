const mysql = require('mysql2');

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "openemp",
});

const fetchDataFromDatabase = (userName) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT emp_team,emp_level FROM employees WHERE emp_name = ?`,
      [userName],
      (error, results, fields) => {
        if (error) {
          console.error("Error fetching data from the database:", error);
          reject(error);
          return;
        }
        if(results === undefined){
          resolve('guest');
        }
        resolve(results);
      }
    );
  });
};

module.exports = { fetchDataFromDatabase };
