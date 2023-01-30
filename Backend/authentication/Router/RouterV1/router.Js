const {Router} = require('express');
const { login, addUser } = require('../../Controller/controller');
const router = Router();


router.post("/v1/login",login)
router.post("/v1/addUser",addUser)

module.exports = {router}