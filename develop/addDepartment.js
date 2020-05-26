const mysql = require("mysql2/promise")
const inquirer = require("inquirer")


var addDepartment = {
    addNewDepartment: function () {


        inquirer.prompt([{
            type: "input",
            name: "addingADepartment",
            message: "What is the name of the new Department?"
        }])
        .then((result)=>{
            connection.query("INSERT INTO department SET ?",
            {
                department_name: `${result.addingADepartment}`
            }, (err, response)=>{
                if (err) throw (err)
                connection.end()
            })
        })
    }
}

module.exports = addDepartment