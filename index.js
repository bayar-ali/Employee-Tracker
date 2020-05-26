// refer to actvities!! 1-10


const mysql = require("mysql2/promise");
const inquirer = require("inquirer")
const addEmployee = require("./develop/addEmployee");
const roles = require("./develop/allRoles");
const EmployeeList = require("./develop/allEmployees");
const express = require("express"); 
const remove = require("./develop/removeEmployee");
const update = require("./develop/updateEmployee");
const addDepartment = require("./develop/addDepartment"); 




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
        choices: ["view All Employees", "View All Employees By department", "View All Employees By Manager",
         "Add Employee", "Remove Employee", "Update Employee Role", "add a Department",  "Update An Employee Manager"]

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



                    break;

                case "Update an Employee":
                    console.log("---update Employee Role-----")
                    updateEmployeeRole.employeeNew()
                    

                    break;

                    case "add a Department":
                        console.log("---Adding a Department")
                        addDepartment.addNewDepartment()

            

                case "View All Roles":
                    console.log("----List of all Roles")
                   /*  roles.allRoles(); */
                    break;

            }
        })


}

connectionToDatabase(); 
userPrompt();