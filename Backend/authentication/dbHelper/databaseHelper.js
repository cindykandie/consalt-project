const mssq = require('mssql')
const {config} = require('../DatabaseConfig/DBConfig.js')

class dbHelper{

    constructor(){
        this.pool = this.connection()
    }

    async connection(){
            try {
            let pool = await mssq.connect(config)
            // console.log({p: pool});
            return pool
        } catch (error) {
           throw new Error(error)
        }
        
    } 

    async createRequest(request ,data = {}){
       try {
        const keys = Object.keys(data)
        keys.map((key)=>{
            const keyValue = data[key]
            request.input(key,keyValue)
        })
        return request
       } catch (error) {
        console.log(error);
       }
    }

    async exec(proceduer,data={}){
        try {
            let request = await (await this.pool).request()
            request = await this.createRequest(request,data)
            let result = await request.execute(proceduer);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async query(query){
        try {
            let result = await (await this.pool).query(query)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}

const helper = new dbHelper();

module.exports = { dbHelper: helper}