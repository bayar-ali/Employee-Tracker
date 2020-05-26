const mysql = require("mysql2/promise");
const inquirer = require("inquirer");


let updateEmployee = {
    employeesNew: function () {
        inquirer.prompt([{
            type: "list",
            name: "update",
            message: "What would you like to update?",
            choices: ["update an Employee Role", "Update an Employee Manager"]
        }])
            .then((updateEmployee) => {
                switch (updateEmployee.updates) {
                    case "Update an Employees Role":
                        connection.query("SELECT id, fist_name, last_name, title, department, manager FROM employees", (err, employeeList) => {
                            if (err) throw (err)
                            let i;
                            let roleUpdated = []

                            for (i = 0; i < employeeList.length; i++) {

                                let employee = {
                                    name: `${employeeList[i].fist_name} ${employeeList[i].last_name}`,
                                    value: {
                                        first_name: `${employeeList[i].fist_name}`,
                                        last_name: `${employeeList[i].last_name}`,
                                        title: `${employeeList[i].title}`,
                                        department: `${employeeList[i].department}`,
                                        manager: `${employeeList[i].manager}`,
                                        id: `${employeeList[i].id}`
                                    }

                                };



module.exports = updateEmployee