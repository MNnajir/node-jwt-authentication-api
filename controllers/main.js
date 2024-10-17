// check username, password in post(login) request
// if exist create new JWT 
// send back to fron- end 
// setup authentication so only the request with JWT can access the dashboard 

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors/bad-request')

const login = async (req, res) => {
    const{ username,password } = req.body
    //mongoose validation
    // najir
    // check in the controller

    if(!username || !password){
        throw new BadRequestError('please provide username and password')
    }
    //console.log(username,password);

    // just for demo, normally provided by DB !!!
    const id = new Date().getDate()

    // try to keep payload small, better experience for user

    const token = jwt.sign({id, username}, process.env.JWT_SCERET, {
        expiresIn: '30d'
    })
    res.status(200).json({msg:'user created', token})
    //res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    //console.log(req.user);
    
 const lickyNumber = Math.floor(Math.random()*100)
    res.status(200)
    .json({
        msg: `hello, ${req.user.username}`, 
        secret:`Here is your authorized data, your lucky number is ${lickyNumber}`})


}

module.exports = {
    login,
    dashboard
}