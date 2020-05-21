const mysql = require("mysql2/promise")
const inquirer = require("inquirer")

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

var addEmployees = {
    addingEmployeeFunction: function (){
        inquirer.prompt([{
            type: "input",
            name: "firstname",
            message: "What is the employees first name?",
        },{
            type: "input",
            name: "lastname",
            message: "What is the employees last name?"
        },
        {
            type: "input",
            name: "title",
            message: "What role will this employee fill?"
        },
        {
            type: "input",
            name: "department",
            message: "What department will this employee fall under?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is this employees salary?"
        },
        {
            type: "list",
            name: "manager",
            message: "Who is this employees manager?",
            choices: ["Smith Johnson", "John Harry","William Scott"]
        }
        ])
        .then((results)=>{

            connection.query("INSERT INTO employees SET ?",
            {
                fist_name: `${results.fistname}`,
                last_name: `${results.lastname}`,
                title: `${results.title}`,
                department: `${results.department}`,
                salary: `${results.salary}`,
                manager: `${results.manager}`
            },(err, addResult)=>{
                if (err) throw (err)

            })
            connection.query("SELECT * FROM employees", (err, select)=>{
                if (err) throw (err)
                console.table(select)
            })
            connection.end()
            
        })



    }
}
module.exports = addEmployees