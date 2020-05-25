const mysql = require("mysql2/promise"); 
const inquirer = require("inquirer")


let  RemoveAnEmployee = {
    removeEmployee: function () {
        connection.query("SELECT id, fist_name, last_name FROM employees", (err, listResults) => {
            if (err) throw (err)
            var i;
            var identification = []

            for (i = 0; i < listResults.length; i++) {
                var person = {
                    name: `${listResults[i].fist_name} ${listResults[i].last_name}`,
                    value: {
                        name: `${listResults[i].fist_name} ${listResults[i].last_name}`,
                        id: `${listResults[i].id}`
                    }

                };
                identification.push(person)

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
                            id: removeList.choices.id
                        },
                        (err, deletedItem) => {
                            if (err) throw (err)

                            connection.end()
                        }
                    )


                })
                .then(() => {
                    connection.query("SELECT id, fist_name, last_name, title FROM employees", (err, updatedList) => {
                        if (err) throw (err)
                        console.table(updatedList)
                        console.log(`---succesfully Deleted ${listResults[i].fist_name}-----`)
                    })
                })
        })
    }
}




module.exports = RemoveAnEmployee