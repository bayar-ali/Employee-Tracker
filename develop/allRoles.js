const mysql = require("mysql");


let allRoles = {
    allEmployeesRoles: function () {

        connection.query("SELECT id, title, salary, FROM employees;", (err, allRolesResults) => {
            if (err) throw (err)
            console.table(allRolesResults)


        });
    }
};

module.exports = allRoles 