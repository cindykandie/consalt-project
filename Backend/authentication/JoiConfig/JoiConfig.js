const Joi = require('joi')
const joi = require('joi')

const joiSchemaAddUser = joi.object(
    {
        firstName : Joi.string().required().min(3), 
        secondName : Joi.string().required().min(3), 
        lastName : Joi.string().required().min(3), 
        username: Joi.string().required().min(3), 
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }), 
        role: Joi.any().valid('dev','consultat','client'), 
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(4), 
        phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(), 
        idNumber: joi.number().greater(100000).less(100000000)
    }
)

const joiSchemaLogin = joi.object({
    username: Joi.string().required().min(3), 
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(4), 

})

module.exports = {joiSchemaAddUser,joiSchemaLogin}