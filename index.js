// refer to actvities!! 1-10


const mysql = require("mysql2/promise");
const inquirer = require("inquirer")
const addEmployee = require("./develop/addEmployee");
const roles = require("./develop/allRoles");
const EmployeeList = require("./develop/allEmployees");
const express = require("express"); 
const remove = require("./develop/removeEmployee");
const update = require("./develop/updateEmployee");




const app = express(); 

let connection; 

const connectionToDatabase = async () => {

    try {
        connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "employeeListManager_db"
        });

        console.log(`connected to Database with id ${connection.threadId}`); 

    } catch (error) {
        console.log(error)
    }
};



 
function userPrompt() {
    return inquirer.prompt([{
        type: "list",
        name: "options",
        message: "what would you like to do?",
        choices: ["view All Employees", "View All Employees By Department", "View All Employees By Manager",
         "Add Employee", "Remove Employee", "Update Employee Role", "Update An Employee Manager", "View All Roles"]

    }])

        .then((result) => {
            switch (result.options) {
                case "View All Employees":
                    console.log("---All Employees---")

                    EmployeeList.addEmployee()


                    break;

                case "View All Employees By department":
                    console.log("----All Employees by Department---")
                    EmployeeList.allEmployeesByDepartment()

                    break;

                case "View All Employees By Manager":
                    console.log("---All Employees by Manager----")
                    EmployeeList.allEmployeesByManager()

                    break;

                case "Add Employee":
                    console.log("---adding employee-----")
                    addEmployee.addingEmployeeFunction()
                    


                    break;

                case "Remove Employee":

                remove.removeEmployee()


                    
                   /*  connection.query("SELECT id, fist_name, last_name FROM employees", (err, listResults) => {
                        if (err) throw (err)
                        console.table(listResults)
                        let i;
                        let identity = []
                        for (i = 0; i < listResults.length; i++) {

                            identity.push(`${listResults[i].id}`)
                        }

                        inquirer.prompt([{
                            type: "list",
                            name: "choices",
                            message: "Which employee would you like to remove?",
                            choices: identification
                        }])
                            .then((removeList) => {
                                
                                connection.query("DELETE FROM employees WHERE ?",
                                    {
                                        id: removeList.choices
                                    },
                                    (err, deletedItem) => {
                                        if (err) throw (err)
                                        connection.end()
                                    }
                                )


                            })
                    }); */


                    break;

                case "Update an Employee Role":
                    console.log("---update Employee Role-----")
                    updateEmployeeRole.updateEmployee()
                    

                    break;

            

                case "View All Roles":
                    console.log("----List of all Roles")
                    roles.allRoles();
                    break;

            }
        })


}

connectionToDatabase(); 
userPrompt();