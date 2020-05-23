const mysql = require("mysql2/promise");
const inquirer = require("inquirer");


let updateEmployee = {
    employeesNew: function () {
        connectMe.ConnectorFunction()

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

                                roleUpdated.push(employee)

                            }

                            inquirer.prompt([{
                                type: "list",
                                name: "employeeChoice",
                                message: "Which employees role would you like to update?",
                                choices: roleUpdated
                            },
                            {
                                type: "list",
                                name: "employeeRole",
                                message: "Which employees role would you like to update?",
                                choices: ["designer", "bartender", "salesperson", "HR", "engineer"]
                            }
                            ])
                                .then((updateEmployeeRole) => {
                                    connection.query("UPDATE employees SET ? WHERE ?",
                                        [{
                                            title: updateEmployeeRole.employeeRole
                                        },
                                        {
                                            id: updateEmployeeRole.employeeChoice.id
                                        }],
                                        (err, roleUpdated) => {
                                            if (err) throw (err)

                                        }
                                    )
                                })
                                .then(() => {
                                    connection.query("SELECT id, fist_name, last_name, title FROM employees ORDER BY title", (err, updatedEmployee) => {
                                        if (err) throw (err)
                                        console.table(updatedEmployee)
                                        connection.end()
                                    })
                                })
                        })

                        break;

                    case "Update an Employees Manager":
                        connection.query("SELECT id, fist_name, last_name, title, department, manager FROM employees", (err, employeeListTwo) => {
                            if (err) throw (err)
                            var i;
                            var managerChanges = []

                            for (i = 0; i < employeeListTwo.length; i++) {
                                var employeeInfo = {
                                    name: `${employeeListTwo[i].fist_name} ${employeeListTwo[i].last_name}`,
                                    value: {
                                        first_name: `${employeeListTwo[i].fist_name}`,
                                        last_name: `${employeeListTwo[i].last_name}`,
                                        title: `${employeeListTwo[i].title}`,
                                        department: `${employeeListTwo[i].department}`,
                                        manager: `${employeeListTwo[i].manager}`,
                                        id: `${employeeListTwo[i].id}`
                                    }

                                };
                                managerChanges.push(employeeInfo)

                            }
                            connection.query("SELECT id, fist_name, last_name, title FROM employees WHERE title Like '%manage%'", (err, managerQuery) => {
                                if (err) throw (err)
                                var list;
                                var managerList = []
                                for (list = 0; l < managerQuery.length; list++) {
                                    var managerInfo = {
                                        name: `${managerQuery[list].fist_name} ${managerQuery[list].last_name}`,
                                        value: {
                                            name: `${managerQuery[list].fist_name}, ${managerQuery[list].last_name}`,
                                            first_name: `${managerQuery[list].fist_name}`,
                                            last_name: `${managerQuery[list].last_name}`,
                                            title: `${managerQuery[list].title}`,
                                            id: `${managerQuery[list].id}`
                                        }
                                    };
                                    managerList.push(managerInfo)
                                }
                                inquirer.prompt([{
                                    type: "list",
                                    name: "employeeChoiceTwo",
                                    message: "Which employee would you like to update?",
                                    choices: managerChanges
                                },
                                {
                                    type: "list",
                                    name: "managers",
                                    message: "Which Manager should the Employee report to?",
                                    choices: managerList

                                }
                                ])
                                    .then((updateEmployeeManager) => {
                                        connection.query("UPDATE employees SET ? WHERE ?",
                                            [{
                                                manager: updateEmployeeManager.managers.name
                                            },
                                            {
                                                id: updateEmployeeManager.employeeChoiceTwo.id
                                            }],
                                            (err, roleUpdates) => {
                                                if (err) throw (err)

                                            }
                                        )
                                    })
                                    .then(() => {
                                        connection.query("SELECT id, fist_name, last_name, manager FROM employees ORDER BY manager", (err, updatedEmployeeListAgain) => {
                                            if (err) throw (err)
                                            console.table(updatedEmployeeListAgain)
                                            connection.end()
                                        })
                                    });
                            })

                        })
                        break;
                }

            });


    }


}
module.exports = updateEmployee