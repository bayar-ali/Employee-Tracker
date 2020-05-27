const mysql = require("mysql2/promise");
const inquirer = require("inquirer");


var updateEmployeeStatus = {
    employeesNewStatus: function () {
        connection.query("SELECT id, fist_name, last_name, role_id FROM employees", (err, employeeList) => {
            if (err) throw (err)
            var i;
            var listAll = []
            for (i = 0; i < employeeList.length; i++) {
                var employee = {
                    name: `${employeeList[i].fist_name} ${employeeList[i].last_name}, Current Role Id: ${employeeList[i].role_id} `,
                    value: {
                        id: `${employeeList[i].id}`,
                        first_name: `${employeeList[i].fist_name}`,
                        last_name: `${employeeList[i].last_name}`,
                        role_id: `${employeeList[i].role_id}`
                    }
                }
                listAll.push(employee)
            }
            inquirer.prompt(
                [{
                    type: "list",
                    name: "updates",
                    message: "Which Employee is requiring the role update?",
                    choices: listAll
                }])
                .then((roleUpdate) => {
                    var table = "SELECT DISTINCT role_id, department_name FROM employees INNER JOIN roles ON employees.role_id = roles.department_name_id INNER JOIN department ON roles.department_name_id = department.id;"
                    connection.query(table, (err, resultingList) => {
                        if (err) throw (err)
                        console.table(resultingList)

                        inquirer.prompt([{
                            type: "input",
                            name: "newRole",
                            message: "What new Role will the employee fill? Must be a number."
                        }])
                        .then((newRoleNumber)=>{
                            
                            connection.query("UPDATE employees SET ? WHERE ?",
                            [{
                                role_id: `${newRoleNumber.newRole}`
                            },
                            {
                                id: `${roleUpdate.updates.id}`
                            }],
                            (err, finishedRoleChange)=>{
                                if (err) throw (err)
                                connection.end()
                            }
                            )
                        })
                    })
                })
        })
    }
}

module.exports = updateEmployeeStatus




