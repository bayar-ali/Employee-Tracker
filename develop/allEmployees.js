const mysql = require("mysql2/promise");




let allTheEmployee = {

    allEmployees: function (){
        connection.query("SELECT fist_name, last_name, title, department, salary, manager FROM employees;", (err, allResult)=>{
            if (err) throw (err)
            console.table(allResult)
            connection.end()
        })
        
    },

    allEmployeesByDepartment: function (){
        connection.query("SELECT fist_name, last_name, title, department, salary, manager FROM employees ORDER BY department;", (err, allResultByDepartment)=>{
            if (err) throw (err)
            console.table(allResultByDepartment)
            connection.end()
        })
        
    },

    allEmployeesByManager: function (){
        connection.query("SELECT fist_name, last_name, title, department, salary, manager FROM employees ORDER BY manager;", (err, allResultsByManager)=>{
            if (err) throw (err)
            console.table(allResultsByManager)
            connection.end()
        })
        
    },



};


module.exports = allTheEmployee