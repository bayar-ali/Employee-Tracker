const mysql = require("mysql");


var allDepartmentList = {
    allDepartment: function(){
        connection.query("SELECT id, job FROM department;", (err, ResultByDepartment)=> {

            if (err) throw (err)
            console.table(ResultByDepartment)
        })
    }
}

module.exports = allDepartmentList