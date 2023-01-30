const {dbHelper, exec } = require("../dbHelper/databaseHelper");

const serviceLogin = async(data)=>{
    
    let result = dbHelper.exec("userLogin", data)
    return result
}

module.exports = {serviceLogin}