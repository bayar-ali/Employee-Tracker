const mysql = require("mysql2/promise");


let allRoles = {
    allEmployeesRoles: function () {

        connectMe.connectorFunction()

        connection.query("SELECT title FROM employees WHERE title IS NOT NULL GROUP BY title", function (err, allRolesResults) {
            if (err) throw (err)
            console.table(allRolesResults)

            connection.end()
        })
    }
};

module.exports = allRoles