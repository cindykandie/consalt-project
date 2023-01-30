const { dbHelper } = require("../dbHelper/databaseHelper");

const serviceAddUser = async (data)=>{
    let result = dbHelper.exec("addUser",data)

    return result;
}

module.exports = {serviceAddUser};