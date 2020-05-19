const mysql = require("mysql"); 
const inquirer = require("inquirer")
const addEmployee = require(""); 
const roles = require(""); 
const EmployeeList = require(""); 


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "password",
    database: "employeeListManager_db"
});



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

                       case "Remove Employee":
                           
           }
       })


}
